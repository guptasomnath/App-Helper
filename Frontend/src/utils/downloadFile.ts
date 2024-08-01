export const downloadFile = (url: string) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = url.split("/").pop() as string;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

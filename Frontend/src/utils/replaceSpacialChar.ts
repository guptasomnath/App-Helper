export const replaceSpacialChar = (text: string) => {
  return text
    .replaceAll("EQUAL", "=")
    .replaceAll(
      "https://drive.google.com/uc?id=",
      "https://drive.usercontent.google.com/download?id="
    )
    .replaceAll("CO3A", ",")
    .replaceAll("AND", "&");
};

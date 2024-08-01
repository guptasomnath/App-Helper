export const replaceImageUrl = (imageUrl: string) => {
  return imageUrl
    .replace(
      "https://drive.google.com/uc?id=",
      "https://lh3.googleusercontent.com/d/"
    )
    .replace(
      "https://drive.usercontent.google.com/download?id=",
      "https://lh3.googleusercontent.com/d/"
    );
};

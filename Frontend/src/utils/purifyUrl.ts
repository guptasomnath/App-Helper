export const toTitleCase = (str : string) => {
  return str
      .toLowerCase() // Convert the entire string to lowercase first
      .split(' ') // Split the string into an array of words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(' '); // Join the array of words back into a single string
}

export const encodeUrl = (text: string) => {
  return encodeURI(text.replaceAll(" ", "-").toLowerCase());
};

export const decodeUrl = (text: string) => {
  return decodeURI(text.replaceAll("-", " "));
};
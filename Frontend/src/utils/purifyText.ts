export const purifyText = (text : string) => {
    return text.replaceAll("CO3A", ",").replaceAll("EQUAL", "=");
}
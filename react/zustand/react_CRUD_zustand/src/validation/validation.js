export const checkNotAdmin = (fieldValue) => {
  return fieldValue !== "admin@gmail.com" || "Enter the different email";
};

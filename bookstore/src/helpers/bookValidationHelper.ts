// src/helpers/bookValidationHelper.ts

export const validateBookTitle = (title: string): boolean => {
  return title.length >= 3;
};

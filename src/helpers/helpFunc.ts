import { Category, category } from "./noteInterface";

export const validationCategory = (str: string): str is Category => (
  category.includes(str));

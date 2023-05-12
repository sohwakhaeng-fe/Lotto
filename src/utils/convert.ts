import { WinningResultType } from "../types";

export const convertToArray = (object: {
  [K in keyof WinningResultType]: number;
}) => {
  return [...Object.entries<number>(object)];
};

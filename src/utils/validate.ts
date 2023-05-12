import { ERROR_MESSAGE } from "../constants/errorMessage";

export const isValidPaymentUnit = (payment: number) => {
  if (payment % 1000 !== 0) {
    alert(ERROR_MESSAGE["INVALID_UNIT"]);

    return false;
  }

  return true;
};

export const hasDuplicateLottoNum = (nums: number[], length: number) => {
  return new Set([...nums]).size !== length;
};

export const hasBonus = (arr: number[], bonusNum: number) => {
  return arr.includes(bonusNum);
};

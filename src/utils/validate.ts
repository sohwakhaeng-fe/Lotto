import { ERROR_MESSAGE } from "../constants/errorMessage";

export const isValidPayment = (payment: number) => {
  if (payment % 1000 !== 0) {
    alert(ERROR_MESSAGE["invalid_unit"]);

    return false;
  }

  return true;
};

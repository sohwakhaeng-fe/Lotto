import { PRIZE } from "../constants/initValue";
import { WinningResultType } from "../types";

const getSumOfEarning = (resultArr: [string, number][]) => {
  return resultArr.reduce((acc, [_matchedNumCount, ticketCount]) => {
    const matchedNumCount = _matchedNumCount as keyof WinningResultType;

    return (acc += PRIZE[matchedNumCount].prize * ticketCount);
  }, 0);
};

export const getEarningRate = (
  resultArr: [string, number][],
  payment: number
) => {
  const sumOfEarning = getSumOfEarning(resultArr);

  return ((sumOfEarning - payment) / payment) * 100;
};

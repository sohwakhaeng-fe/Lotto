import { hasBonus } from "./validate";

const getMatchedNumCount = (ticket: number[], winningLottoNums: number[]) => {
  return ticket.reduce((acc, ticket) => {
    return winningLottoNums.includes(ticket) ? (acc += 1) : acc;
  }, 0);
};

const matchRankTitle = (
  matchedNumCount: number,
  ticket: number[],
  bonusNum: number
) => {
  switch (matchedNumCount) {
    case 3:
      return "RANK5";
    case 4:
      return "RANK4";
    case 5:
      return hasBonus(ticket, bonusNum) ? "RANK2" : "RANK3";
    case 6:
      return "RANK1";
    default:
      return "";
  }
};

export const getLottoWinningResult = (
  tickets: number[][],
  bonusNum: number,
  winningLottoNums: number[]
) => {
  return tickets.reduce(
    (winningResult, ticket) => {
      const matchedNumCount = getMatchedNumCount(ticket, winningLottoNums);

      const rankTitle = matchRankTitle(matchedNumCount, ticket, bonusNum);

      if (!rankTitle) return winningResult;

      return {
        ...winningResult,
        [rankTitle]: winningResult[rankTitle] + 1,
      };
    },
    { RANK5: 0, RANK4: 0, RANK3: 0, RANK2: 0, RANK1: 0 }
  );
};

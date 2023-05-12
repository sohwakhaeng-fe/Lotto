import { LOTTO_LENGTH, MAX, MIN } from "../constants/initValue";
import { generateRandomNum } from "./random";

const generateTicket = () => {
  const ticket = new Set<number>();

  while (ticket.size < LOTTO_LENGTH) {
    ticket.add(generateRandomNum(MIN, MAX));
  }

  return [...ticket];
};

export const generateTickets = (count: number) => {
  return Array.from({ length: count }, () => generateTicket());
};

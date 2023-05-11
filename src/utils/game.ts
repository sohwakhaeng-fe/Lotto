const generateRandomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * max + min);
};

export const generateTicket = () => {
  const ticket = new Set<number>();

  while (ticket.size < 6) {
    ticket.add(generateRandomNum(1, 45));
  }

  return [...ticket];
};

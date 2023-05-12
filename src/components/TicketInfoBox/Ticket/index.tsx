import React from "react";

type TicketProps = {
  ticket: number[];
  isToggleOn: boolean;
};

const Ticket = ({ ticket, isToggleOn }: TicketProps) => {
  return (
    <li>
      <span className="mx-1 text-4xl">🎟️ </span>
      {isToggleOn && <span className="text-3xl">{ticket.join(", ")}</span>}
    </li>
  );
};

export default Ticket;

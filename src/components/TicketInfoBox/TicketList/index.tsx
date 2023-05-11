import React from "react";
import Ticket from "../Ticket";

type TickListProps = {
  tickets: number[][];
  isToggleOn: boolean;
};

const TicketList = ({ tickets, isToggleOn }: TickListProps) => {
  return (
    <div className="d-flex flex-wrap">
      <ul className="ticket-list">
        {tickets.map((ticket, idx) => (
          <Ticket key={idx} ticket={ticket} isToggleOn={isToggleOn} />
        ))}
      </ul>
    </div>
  );
};

export default TicketList;

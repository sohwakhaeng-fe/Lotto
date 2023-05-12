import React from "react";

type BodyTableRowProps = {
  matchedNumCount: string;
  prize: number;
  ticketCount: number;
};

const BodyTableRow = ({
  matchedNumCount,
  prize,
  ticketCount,
}: BodyTableRowProps) => {
  return (
    <tr className="text-center">
      <td className="p-3">{matchedNumCount}</td>
      <td className="p-3">{prize.toLocaleString()}</td>
      <td className="p-3">{ticketCount}개</td>
    </tr>
  );
};

export default BodyTableRow;

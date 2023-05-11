import React, { useState } from "react";
import TicketList from "./TicketList";

type TicketInfoBoxProps = {
  tickets: number[][];
};

const TicketInfoBox = ({ tickets }: TicketInfoBoxProps) => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  return (
    <section className="mt-9">
      <div className="d-flex">
        <label className="flex-auto my-0">
          총 {tickets.length}개를 구매하였습니다.
        </label>
        <div className="flex-auto d-flex justify-end pr-1">
          <label className="switch">
            <input
              type="checkbox"
              className="lotto-numbers-toggle-button"
              onChange={() => setIsToggleOn((prev) => !prev)}
            />
            <span className="text-base font-normal">번호보기</span>
          </label>
        </div>
      </div>
      <TicketList tickets={tickets} isToggleOn={isToggleOn} />
    </section>
  );
};

export default TicketInfoBox;

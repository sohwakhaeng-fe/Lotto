import { useState } from 'react'

const Numbering = ({ tickets }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleChange = (e) => {
    setIsToggled(e.target.checked);
  }

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
              onChange={handleChange}
              checked={isToggled}
              disabled={tickets.length === 0}
            />
            <span className="text-base font-normal">번호보기</span>
          </label>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {tickets.map((ticket, index) => (
          <div key={ticket.join(index)} className="mx-2 ticket-container">
            <span className="mx-1 text-4xl">🎟️ </span>
            {isToggled && (
              <span>
                {ticket
                  .map((num) => num.toString().padStart(2, "0"))
                  .join(", ")}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Numbering
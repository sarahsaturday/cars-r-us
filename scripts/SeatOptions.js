import { setSeatId } from "./TransientState.js";

export const SeatOptions = async () => {
  const response = await fetch("http://localhost:8088/seats");
  const seats = await response.json();

  // Generate the HTML for seat options
  let seatOptionsHTMLArray = seats.map((seat) => `
    <option value="${seat.id}">${seat.type}</option>
  `);

  const seatOptionsHTML = `
    <h2>Seats</h2>
    <select id="seat-type-select">
      ${seatOptionsHTMLArray.join('')}
    </select>
  `;

  // Add event listener and handler function
  const handleSeatTypeChoice = (event) => {
    const selectedSeatTypeId = event.target.value;
    setSeatId(selectedSeatTypeId);
  };

  document.addEventListener("change", handleSeatTypeChoice);

  return seatOptionsHTML;
};

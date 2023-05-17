import { setWheelId } from "./TransientState.js";

export const WheelOptions = async () => {
  const response = await fetch("http://localhost:8088/wheels");
  const wheels = await response.json();

  // Generate the HTML for wheel options
  let wheelOptionsHTMLArray = wheels.map((wheel) => `
    <option value="${wheel.id}">${wheel.type}</option>
  `);

  const wheelOptionsHTML = `
    <h2>Wheel Options</h2>
    <select id="wheel-select">
      ${wheelOptionsHTMLArray.join('')}
    </select>
  `;

  // Add event listener and handler function
  const handleWheelChoice = (event) => {
    const selectedWheelId = event.target.value;
    setWheelId(selectedWheelId);
  };

  document.addEventListener("change", handleWheelChoice);

  return wheelOptionsHTML;
};

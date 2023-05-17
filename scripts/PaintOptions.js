import { setPaintId } from "./TransientState.js";

export const PaintOptions = async () => {
  const response = await fetch("http://localhost:8088/paints");
  const paints = await response.json();

  // Generate the HTML for paint color options
  let paintColorOptionsHTMLArray = paints.map((paint) => `
    <option value="${paint.id}">${paint.color}</option>
  `);

  const paintColorOptionsHTML = `
    <h2>Paint Colors</h2>
    <select id="paint-color-select">
      ${paintColorOptionsHTMLArray.join('')}
    </select>
  `;

  // Add event listener and handler function
  const handlePaintColorChoice = (event) => {
    const selectedColorId = event.target.value;
    setPaintId(selectedColorId);
  };

  document.addEventListener("change", handlePaintColorChoice);

  return paintColorOptionsHTML;
};

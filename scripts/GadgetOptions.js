import { setGadgetId } from "./TransientState.js";

export const GadgetOptions = async () => {
  const response = await fetch("http://localhost:8088/gadgets");
  const gadgets = await response.json();

  // Generate the HTML for gadget package options
  let gadgetOptionsHTMLArray = gadgets.map((gadget) => `
    <option value="${gadget.id}">${gadget.package}</option>
  `);

  const gadgetOptionsHTML = `
    <h2>Gadget Options</h2>
    <select id="gadget-package-select">
      ${gadgetOptionsHTMLArray.join('')}
    </select>
  `;

  // Add event listener and handler function
  const handleGadgetPackageChoice = (event) => {
    const selectedGadgetPackageId = event.target.value;
    setGadgetId(selectedGadgetPackageId);
  };

  document.addEventListener("change", handleGadgetPackageChoice);

  return gadgetOptionsHTML;
};

import { setTechId } from "./TransientState.js";

export const TechOptions = async () => {
  const response = await fetch("http://localhost:8088/techs");
  const techs = await response.json();

  // Generate the HTML for tech package options
  let techOptionsHTMLArray = techs.map((tech) => `
    <option value="${tech.id}">${tech.package}</option>
  `);

  const techOptionsHTML = `
    <h2>Tech Options</h2>
    <select id="tech-package-select">
      ${techOptionsHTMLArray.join('')}
    </select>
  `;

  // Add event listener and handler function
  const handleTechPackageChoice = (event) => {
    const selectedTechPackageId = event.target.value;
    setTechId(selectedTechPackageId);
  };

  document.addEventListener("change", handleTechPackageChoice);

  return techOptionsHTML;
};

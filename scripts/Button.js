import { saveCustomOrder } from "./TransientState.js";
import { generateOrderListHTML } from "./OrderList.js";

const handlePlaceOrderClick = (clickEvent) => {
  if (clickEvent.target.id === "saveOrder") {
    saveCustomOrder();
    // Dispatch custom event after the order is saved
    document.dispatchEvent(new CustomEvent("orderPlaced"));
  }
};

export const placeOrder = () => {
  const html = "<div><br><button id='saveOrder'>ADD TO ORDER</button></br></div>";
  document.addEventListener("click", handlePlaceOrderClick);

  // Add event listener for the custom event
  document.addEventListener("orderPlaced", async () => {
    const orderListHTML = await generateOrderListHTML();
    const customOrdersElement = document.querySelector(".custom-orders");
    customOrdersElement.innerHTML = orderListHTML;
    // Only regenerate the HTML if needed
    // Otherwise, there's no need to call saveCustomOrder here
  });

  return html;
};

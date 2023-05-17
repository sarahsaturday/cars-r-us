import { SeatOptions } from './SeatOptions.js';
import { PaintOptions } from './PaintOptions.js';
import { TechOptions } from './TechOptions.js';
import { WheelOptions } from './WheelOptions.js';
import { placeOrder } from './Button.js';
import { generateOrderListHTML } from './OrderList.js';

const render = async () => {
  const seatOptionsHTML = await SeatOptions();
  const paintOptionsHTML = await PaintOptions();
  const techOptionsHTML = await TechOptions();
  const wheelOptionsHTML = await WheelOptions();
  const buttonHTML = await placeOrder();
  const orderListHTML = await generateOrderListHTML();

  const composedHTML = `
    <h1>Custom Car Design</h1>

    <h4>Choose from the following options:</h4>

    <article class="choices">
      <section class="choices__seats options">
        ${seatOptionsHTML}
      </section>

      <section class="choices__paint options">
        ${paintOptionsHTML}
      </section>

      <section class="choices__tech options">
        ${techOptionsHTML}
      </section>

      <section class="choices__wheels options">
        ${wheelOptionsHTML}
      </section>
    </article>

    <article class="order">
        ${buttonHTML}
    </article>

    <article class="custom-orders">
      <h2>Custom Car Orders</h2>
      ${orderListHTML}
    </article>
  `;

  const container = document.getElementById('container');
  container.innerHTML = composedHTML;

  document.addEventListener("orderPlaced", render);
};

render();

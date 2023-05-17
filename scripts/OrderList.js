const generateOrderHTML = (order) => {
  const orderPrice = order.paint.price + order.seat.price + order.gadget.price + order.wheel.price;
  const formattedPrice = orderPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return `
  <div class="order-item">
  <b>Order #</b> ${order.id}&nbsp;-&nbsp;<b>Total:</b>&nbsp;${formattedPrice}
  </div>
  `;
};

export const OrderList = async () => {
  const response = await fetch("http://localhost:8088/orders?_expand=paint&_expand=seat&_expand=gadget&_expand=wheel");
  const orders = await response.json();
  
  let orderListHTML = "";
    for (const order of orders) {
      orderListHTML += generateOrderHTML(order);
    }
    return orderListHTML;
  };
  
  export const generateOrderListHTML = async () => {
    const ordersHTML = await OrderList();
    return ordersHTML;
  };
  
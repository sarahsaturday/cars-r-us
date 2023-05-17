// Set up the transient state data structure and provide initial values
const transientState = {
    "paintId": 0,
    "seatId": 0,
    "techId": 0,
    "wheelId": 0
  };
  
  // Functions to modify each property of transient state
  export const setPaintId = (chosenPaint) => {
    transientState.paintId = parseInt(chosenPaint);
    console.log(transientState);
  };
  
  export const setSeatId = (chosenSeat) => {
    transientState.seatId = parseInt(chosenSeat);
    console.log(transientState);
  };
  
  export const setTechId = (chosenTech) => {
    transientState.techId = parseInt(chosenTech);
    console.log(transientState);
  };
  
  export const setWheelId = (chosenWheel) => {
    transientState.wheelId = parseInt(chosenWheel);
    console.log(transientState);
  };
  
  export const saveCustomOrder = async () => {
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transientState)
    };
  
    const response = await fetch("http://localhost:8088/orders", postOptions);
  
    const orderData = await response.json();
    const customEvent = new CustomEvent("newOrderCreated");
    document.dispatchEvent(customEvent);
  };
  
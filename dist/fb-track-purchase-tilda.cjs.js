'use strict';

function storeTotal() {
  localStorage.setItem('ftpt:totalAmount', localStorage.getItem('tcart').amount);
}

const succesfullPaymentUrl = document.currentScript.getAttribute(
  "succesfull-payment-url"
);
const currency = document.currentScript.getAttribute("currency") || "USD";

document.addEventListener("DOMContentLoaded", () => {
  const orderForm = document.querySelector("[data-formcart] form");

  if (orderForm) {
    orderForm.addEventListener("submit", () => storeTotal(), false);
  }

  if (location.pathname.includes(succesfullPaymentUrl)) {
    const totalAmount = localStorage.getItem("ftpt:totalAmount");

    if (typeof fbq !== "undefined") {
      fbq("track", "Purchase", {
        value: totalAmount,
        currency: currency,
      });
    }
  }
});

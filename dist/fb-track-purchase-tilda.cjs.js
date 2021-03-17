'use strict';

function storeTotal(total) {
  localStorage.setItem('ftpt:totalAmount', total);
}

const successfulPaymentUrl = document.currentScript.getAttribute(
  "successful-payment-url"
);
const currency = document.currentScript.getAttribute("currency") || "USD";

document.addEventListener("DOMContentLoaded", () => {
  const orderFormSubmit = document.querySelector(
    "form[data-formcart] [type='submit']"
  );

  if (orderFormSubmit) {
    orderFormSubmit.addEventListener(
      "click",
      () => {
        const totalAmount = localStorage.getItem("tcart");
        storeTotal(JSON.parse(totalAmount).amount);
      },
      false
    );
  }

  if (location.pathname.includes(successfulPaymentUrl)) {
    const totalAmount = localStorage.getItem("ftpt:totalAmount");

    if (typeof fbq !== "undefined") {
      fbq("track", "Purchase", {
        value: totalAmount,
        currency: currency,
      });
    }
  }
});

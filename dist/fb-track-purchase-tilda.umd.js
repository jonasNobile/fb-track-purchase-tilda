(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  function storeTotal(total) {
    console.log(total);
    localStorage.setItem('ftpt:totalAmount', total);
  }

  const successfulPaymentUrl = document.currentScript.getAttribute("successful-payment-url");
  const currency = document.currentScript.getAttribute("currency") || "USD";
  document.addEventListener("DOMContentLoaded", () => {
    const orderForm = document.querySelector("form[data-formcart]");

    if (orderForm) {
      orderForm.addEventListener("submit", e => {
        e.preventDefault();
        const totalAmount = localStorage.getItem("tcart");
        storeTotal(JSON.parse(totalAmount).amount);
        orderForm.submit();
      }, false);
    }

    if (location.pathname.includes(successfulPaymentUrl)) {
      const totalAmount = localStorage.getItem("ftpt:totalAmount");

      if (typeof fbq !== "undefined") {
        fbq("track", "Purchase", {
          value: totalAmount,
          currency: currency
        });
      }
    }
  });

})));

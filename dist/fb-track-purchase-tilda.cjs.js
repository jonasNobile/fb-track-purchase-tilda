'use strict';

function storeTotal() {
  localStorage.setItem('ftpt:totalAmount', localStorage.getItem('tcart').amount);
}

(function () {
  const succesfullPaymentUrl = document.currentScript.getAttribute(
    "succesfull-payment-url"
  );
  const currency = document.currentScript.getAttribute("currency") || "USD";

  window.onload = () => {
    const orderForm = document.querySelector('[data-formcart] form');

    if (orderForm) {
      orderForm.addEventListener("submit", () => storeTotal(), false);
    }

    if (location.pathname.includes(succesfullPaymentUrl)) {
      const totalAmount = localStorage.getItem("ftpt:totalAmount");

      if (typeof fbq === "undefined") return;
      fbq("track", "Purchase", {
        value: totalAmount,
        currency: "CZK",
      });
    }
  };
})();

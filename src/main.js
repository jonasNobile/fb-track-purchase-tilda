import { storeTotal } from "./utils/storeTotal";

(function () {
  const succesfullPaymentUrl = document.currentScript.getAttribute(
    "succesfull-payment-url"
  );
  const currency = document.currentScript.getAttribute("currency") || "USD";

  window.onload = () => {
    const orderForm = document.querySelector('[class*="orderform"] form');

    if (orderForm) {
      orderForm.addEventListener(
        "submit",
        () => {
          console.log(orderForm);
          const totalAmount = orderForm.querySelector('.t706__cartwin-totalamount')
            .innerText;
          console.log(totalAmount);
          storeTotal(totalAmount);
        },
        false
      );
    }

    if (location.pathname.includes(succesfullPaymentUrl)) {
      const totalAmount = +localStorage.getItem("ftpt:totalAmount");

      if (typeof fbq === 'undefined') return;
      fbq("track", "Purchase", {
        value: totalAmount,
        currency: "CZK",
      });
    }
  };
})();

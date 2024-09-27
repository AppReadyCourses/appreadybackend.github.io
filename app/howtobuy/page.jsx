import React from "react";

const HowToBuy = () => {
  return (
    <div className="p-2">
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          1. What payment method you are using and how to pay?
        </div>
        <div className="collapse-content">
          <p>
            As for now, we only accept PayPal. To complete the transaction,
            kindly click the "buy now" button and proceed to check out. Please
            follow the instructions PayPal provides.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          2. How to verify the transaction?
        </div>
        <div className="collapse-content">
          <p>
            After the payment is completed, you should be redirected to a page
            that contains download links to your course.{" "}
            <span className="text-amber-500"> If NOT,</span> please message us
            on our Instagram account for your order confirmation.(Please provide
            the transaction number or any e-receipt for our order verification.)
            We will get back to you shortly with download links.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          3. What if I didn't receive the content?
        </div>
        <div className="collapse-content">
          <p>
            If you can't reach our download page, you can contact me any time!
            Once we verify your payment manually, I will send you the download
            link. Instagram: 99only.fullstack, E-mail: appreadycourses@gmail.com{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;

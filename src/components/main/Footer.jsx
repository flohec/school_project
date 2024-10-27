const Footer = () => {
  return (
      <div className="footer">
          <div className="footer-imprint">
              <div className="footer-row">
                  <p>Our delivery partners:</p>
                  <p className="testTag">Pay with:</p>
              </div>
              <div className="footer-row">
                  <div className="delivery-partners">
                      <img
                          src="https://www.sazsport.de/image.php/1/6/6/4/7/8/8/DHL-Logo.png?w=1200&h=600&fit=crop-50-50&q=80&s=5cfd9f2c45715502e946f44d430fa3c8"
                          alt="Delivery Partner 1"/>
                      <img src="https://nshift.com/hubfs/nShift/Logos/Carrier%20Library%20v2/hermes-germany-logo.png"
                           alt="Delivery Partner 2"/>
                      <img src="https://www.logodesignvalley.com/blog/wp-content/uploads/2023/06/04.png"
                           alt="Delivery Partner 3"/>
                  </div>
                  <div className="payment-methods">
                      <img src="https://www.designtagebuch.de/wp-content/uploads/mediathek//2021/07/visa-logo.jpg"
                           alt="Payment Method 1"/>
                      <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiVmQ4MVjRGzeaWjSiSHd90jv73ua23rC_mw&s"
                          alt="Payment Method 2"/>
                      <img src="https://page-online.de/app/uploads/2016/07/mastercard_logo_design_2016.png"
                           alt="Payment Method 3"/>
                      <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG9iyi3Fxr1G8Dwix13lo9mIT0eAAZ68hISig5Gu1Mvrwu1pOs0epTHENMR2sbN5OMNPo&usqp=CAU"
                          alt="Payment Method 3"/>
                      <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_S1I-kRo8EmqBe0MSfTSRdtAflozeeDoBQ&s"
                          alt="Payment Method 3"/>
                  </div>
              </div>
          </div>

          <div className="footer-trust-seals">
              <div className="footer-legal-links">
                  <a href="/imprint">Imprint</a>
                  <a href="/privacy-policy">Privacy Policy</a>
                  <a href="/terms-of-service">Terms of Service</a>
                  <a href="/contact">Contact</a>
              </div>
              <div className="trust-seals-container">
                  <div className="trust-seal">
                      <p>Secure Payments Guaranteed</p>
                      <p>All transactions are encrypted and secured using the latest technologies, ensuring your data is
                          safe with us.</p>
                  </div>
                  <div className="trust-seal">
                      <p>Fast and Reliable Shipping</p>
                      <p>Partnered with trusted carriers to ensure your orders arrive quickly and safely, with tracking
                          available for all shipments.</p>
                  </div>
                  <div className="trust-seal">
                      <p>Customer Satisfaction Promise</p>
                      <p>If you're not completely satisfied with your purchase, we offer easy returns and exchanges to
                          make things right.</p>
                  </div>
              </div>
          </div>

      </div>
  );
};

export default Footer;

import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="callToAction">
            <div className="call">
              <div>
                <img src={"/FooterImgs/Abstract (4).png"} />
              </div>
              <div>
                <img src={"/FooterImgs/Abstract (3).png"} />
              </div>
              <div>
                <img src={"/FooterImgs/Abstract.png"} />
              </div>
            </div>
            <div className="action">
              <div className="action-detals">
                <div className="detals-text">
                  <h2>Launch Sale is On</h2>
                  <p>Shop today</p>
                </div>
                <div className="detals-btn">
                  <button>
                    <img src="/FooterImgs/Vector.png" />
                  </button>
                </div>
              </div>
              <div className="action-img">
                <img src={"/FooterImgs/Abstract (2).png"} />
              </div>
            </div>
          </div>
          <div className="content-document">
            <h2> Dairy Farm Products</h2>
            <div className="item_boxs12">
              <div className="one">
                <div className="item_7">
                  <ul>
                    <li>Links</li>
                    <li>Contact</li>
                    <li>Affiliation</li>
                    <li>Terms of Use</li>
                  </ul>
                </div>
                <div className="item_7">
                  <ul>
                    <li>Company</li>
                    <li>Blog</li>
                    <li>Shop</li>
                    <li>About</li>
                  </ul>
                </div>
                <div className="item_7">
                  <ul>
                    <li>Categories</li>
                    <li>Eggs</li>
                    <li>Drinks</li>
                    <li>Eatables</li>
                    <li>Milk & Cheeze</li>
                  </ul>
                </div>
                <div className="item_7">
                  <ul>
                    <li>Terms</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                  </ul>
                </div>
              </div>
              <div className="two">
                <div>
                  <h4>Subscribe to Newsletter</h4>
                  <div className="footer_search">
                    <input type={"search"} placeholder="Enter your email" />
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-logo">
            <h1></h1>
            <div className="footer_content">
              <div className="footer_start">
                <p>All Rights Reserved - Dairy Farm Products</p>
              </div>
              <div className="footer_logo_imgs">
                <div>
                  <img src="/FooterImgs/Mastercard.png" />
                </div>
                <div>
                  <img src="/FooterImgs/visa-logo.png" />
                </div>
                <div>
                  <img src="/FooterImgs/UnionPay.png" />
                </div>
                <div>
                  <img src="/FooterImgs/ApplePay.png" />
                </div>
                <div>
                  <img src="/FooterImgs/GooglePay.png" />
                </div>
              </div>
              <div className="footer_end">
                <p>Terms & Conditions . Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

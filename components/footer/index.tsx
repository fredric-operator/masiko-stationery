import Logo from "../../assets/icons/logo";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo /> <span>Cheyenne</span>-Solutions
            </h6>
            <p>
              Elegance and functionality unite in our stationery collection.
              Discover beautifully crafted pens, notebooks, and accessories that
              elevate your writing experience. At Cheyenne Solutions, we believe
              that every moment is an opportunity for creativity, and our
              stationery is here to inspire your best ideas. Embrace the art of
              writing with our premium essentials today
            </p>
            <ul className="site-footer__social-networks">
              <li>
                <a href="#">
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-youtube-play"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Shopping online</li>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Shipping and Delivery</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Payment options</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <ul>
              <li>Information</li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Find a store</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">Bacome a member</a>
              </li>
              <li>
                <a href="#">Site feedback</a>
              </li>
            </ul>
            <ul>
              <li>Contact</li>
              <li>
                <a href="#">felliemniko@gmail.com@gmail.com</a> <br />
                <a href="#">masikomasiko360@gmail.com@gmail.com</a>
              </li>
              <li>
                <a href="#">Whatsapp: 0694265090</a>
                <br />
                <a href="#">Whatsapp: 0684710344</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>
            DESIGN BY FREDRIC MAHENDE <br />
            IT at Cheyenne Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

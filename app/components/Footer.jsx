import { FaYoutube, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-8">
      <footer className="footer p-10 bg-base-300 text-base-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link href="/" className="link link-hover">
            Home
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Sales</h6>

          Contact me: 
          <br />
          📫 appreadycourses@gmail.com
          <br />
          📇 00639955156299
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <Link href="https://www.instagram.com/one.more.time87/">
              <FaInstagram className="size-7" />
            </Link>
            {/* <Link href="https://www.youtube.com/@appready">
              <FaYoutube className="size-7" />
            </Link> */}
            {/* <Link href="https://www.facebook.com/profile.php?id=61558742771196">
              <FaFacebookSquare className="size-7" />
            </Link> */}
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

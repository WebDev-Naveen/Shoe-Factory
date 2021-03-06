import React from "react";
// import facebook from "/images/FooterIcon/facebook";
// import linkedin from "/images/FooterIcon/linkedin.png";
// import instagram from "/images/FooterIcon/instagram.png";
// import whatsapp from "/images/FooterIcon/whatsapp.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer_items">
        <a
          href="https://www.facebook.com/profile.php?id=100007830062724"
          target="blank"
        >
          <img
            src="/images/FooterIcon/facebook.png"
            alt="facebook"
            title="facebook"
          />
        </a>
        <a href="https://www.instagram.com" target="blank">
          <img
            src="/images/FooterIcon/instagram.png"
            alt="instagram"
            title="instagram"
          />
        </a>
        <a href="https://www.whatsapp.com" target="blank">
          <img
            src="/images/FooterIcon/whatsapp.png"
            alt="whatsapp"
            title="whatsapp"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/naveen-singh-1a474419a/"
          target="blank"
        >
          <img
            src="/images/FooterIcon/linkedin.png"
            alt="linkedin"
            title="linkedin"
          />
        </a>
      </div>
      <div className="footer_desc">
        <p>India</p>
        <p>© 2021 Shoe's factory, Inc. All Rights Reserved</p>
        <p>Created by Naveen Singh</p>
      </div>
    </footer>
  );
}

export default Footer;

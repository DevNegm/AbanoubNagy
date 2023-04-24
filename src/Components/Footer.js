import React from "react";

function Footer() {
  const now = new Date();

  const year = now.getFullYear();
  return (
    <footer>
      <p class="footer-text">Copywrite © Abanoub Nagy {year}</p>
    </footer>
  );
}

export default Footer;

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg- text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by John Wick
        </p>
      </aside>
    </footer>
  );
};

export default Footer;

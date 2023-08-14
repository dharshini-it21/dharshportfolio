import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">
          &copy; {new Date().getFullYear()} All rights reserved <b>@dharshini_vis!</b>
        </p>
      </div>
    </footer>
  );
};


export default Footer

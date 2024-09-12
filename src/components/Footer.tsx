import { Link } from "react-router-dom";
import LinkTick from "../assets/664c703fffe2c9fb73ebd477_ArrowDownLeft.svg";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 snoww. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link to="#" className="text-xs hover:underline underline-offset-4 flex items-center gap-1">
            <span>Terms of Service</span>
            <img src={LinkTick} alt="Tick Icon" />
          </Link>
          <Link to="#" className="text-xs hover:underline underline-offset-4 flex items-center gap-1">
            <span>Privacy</span>
            <img src={LinkTick} alt="Tick Icon" />
          </Link>
        </nav>
      </footer>
    </>
  );
};

export default Footer;

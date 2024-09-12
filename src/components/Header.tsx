import { Link } from "react-router-dom";
import Logo from "../assets/snowwlogo.png";

const Header = () => {
  return (
    <>
      <header className="mx-40 px-4 my-8 lg:px-6 h-14 flex items-center justify-between">
        {/* Logo on the left */}
        <Link to="/" className="flex items-center w-40">
          <img src={Logo} alt="Logo" />
          <span className="sr-only">snow</span>
        </Link>

        {/* Navigation and button on the right */}
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link to="#" className="text-sm font-light hover:underline hover:text-primary underline-offset-4">
            Features
          </Link>
          <Link to="#" className="text-sm font-light hover:underline hover:text-primary underline-offset-4">
            Pricing
          </Link>
          <Link to="#" className="text-sm font-light hover:underline hover:text-primary underline-offset-4">
            Integrations
          </Link>
          <Link to="/docs" className="text-sm font-light hover:underline hover:text-primary underline-offset-4">
            Docs
          </Link>
          <Link
            to="https://github.com/shyynux/snow"
            className="rounded-sm h-10 px-8 text-sm font-medium text-primary-foreground shadow bg-primary hover:bg-primary/90 transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Create
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;

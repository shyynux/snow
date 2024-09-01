import { Link } from "react-router-dom";


const Header = () => {
    return(
        <>
   <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link to="/" className="flex items-center justify-center"  >
        ☃️ snow
        <span className="sr-only">snow</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="#" className="text-sm font-light hover:underline underline-offset-4"  >
            Features
          </Link>
          <Link to="#" className="text-sm font-light hover:underline underline-offset-4"  >
            Pricing
          </Link>
          <Link to="#" className="text-sm font-light hover:underline underline-offset-4"  >
            Integrations
          </Link>
          <Link to="/docs" className="text-sm font-light hover:underline underline-offset-4"  >
            Docs
          </Link>
          <Link to="/uhoh" className="text-sm font-light rounded-sm hover:bg-foreground hover:text-background border-2 border-black px-2"  >
            Sign in
          </Link>
        </nav>
      </header>
        </>
    )
}

export default Header;
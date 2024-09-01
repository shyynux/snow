import { Link } from "react-router-dom";


const Docs = () => {
  return (
    <div>
        <DocsHeader/>
        <Content />
    </div>
  )
}

export default Docs;

const DocsHeader = () => {
    return(
        <>
   <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link to="/" className="flex items-center justify-center"  >
        ☃️  snow &nbsp;  <span className="font-thin">| docs </span>
        <span className="sr-only"> snow | docs </span>
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
          <Link to="#" className="text-sm font-light rounded-sm hover:bg-foreground hover:text-background border-2 border-black px-2"  >
            Sign in
          </Link>
        </nav>
      </header>
        </>
    )
}


const Content = () => {
    return (
        <section className=".w-full py-6 md:py-12 lg:py-16 xl:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                How to Use Snow
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Follow these steps to get started with Snow and set up your SaaS application.
              </p>
            </div>
            <div className="mt-8 space-y-8 font-mono">
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold">Step 1: Clone the Repository</h3>
                <p className="text-muted-foreground">
                  Clone the Snow starter kit repository from GitHub using the following command:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg">
                  git clone https://github.com/shyynux/snow
                </pre>
                <p className="text-muted-foreground">
                  If that is too much hassle, you can simply fork the repository and while creating your own repo, you can use this fork as the template repository. 
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold">Step 2: Install Dependencies</h3>
                <p className="text-muted-foreground">
                  Navigate to the project directory and install the required dependencies:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg">npm install</pre>
                <p className="text-muted-foreground">
                  You will see the default Snow Landing page. 
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold">Step 3: Set Up the Database</h3>
                <p className="text-muted-foreground">
                  Go to <a href="https://neon.tech" className="text-blue-600 hover:underline">neon.tech</a>, create a new database, and copy the connection string. 
                  Paste it into the <code>.env</code> file in the root of your project:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg">
                  DATABASE_URL=your_neon_database_connection_string
                </pre>
                <p className="text-muted-foreground">
                    Checkout the example.env file to undrstand more.
                    You will need to create this .env file. 
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold">Step 4: Edit Components</h3>
                <p className="text-muted-foreground">
                  Customize the components in the <code>src/components</code> directory to fit your SaaS application’s needs. Update the content, styles, and logic as needed.
                </p>
                <p>
                    You can edit different pages by going to the routes folder. You can also add new pages, add them in routes and add it to App.tsx.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold">Step 5: Start the Development Server</h3>
                <p className="text-muted-foreground">
                  Run the development server to preview your application:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-lg">npm run dev</pre>
                <p className="text-muted-foreground">
                  Open <a href="http://localhost:5173" className="text-blue-600 hover:underline">http://localhost:5173</a> in your browser to see your application in action.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold">Step 5: Deployment</h3>
                <p className="text-muted-foreground">
                  The simplest way to deploy this application is vercel. Click on the vite option when deploying on vercel.
                </p>
               You can also deploy on other platforms.
              </div>
            </div>
          </div>
        </section>
      );
    };
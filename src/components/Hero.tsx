import { Link } from "react-router-dom";
import HeroImage from "../assets/hero.jpg";
import MobileHeroImage from "../assets/midnightcity.jpg"; 

const Hero = () => {
  return (
    <>
      <section className="w-full py-4 md:py-10 lg:py-14 xl:py-22">
        <div className=" mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:justify-center lg:gap-24">

            {/* Text Section */}
            <div className="flex flex-col justify-center items-center lg:items-start space-y-4">
              <div className="space-y-2 text-center lg:text-left">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Supercharge your SaaS with Snow
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Snow is a developer kit that <b>simplifies building SaaS</b> applications.
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Bring your idea(s) to Life, ASAP. Ship your <b>idea in a day</b>, without worrying about the setup.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  to="/create"
                  className={`rounded-sm inline-flex h-10 items-center justify-center bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`}
                >
                  Get Started
                </Link>

                {/* To Link to the documentation remove comments from the below button  */}
                
                {/* <Link
                    to="/docs"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                    Learn More
                </Link> */}

              </div>
            </div>

            <div>
            {/* Image for Mobile */}
            <img
              src={MobileHeroImage}
              alt="Mobile Hero Image for Snow the developer kit"
              className="block sm:hidden md:hidden lg:hidden mx-auto w-full h-auto rounded-xl object-cover"
            />

            {/* Image for Larger Screens */}
            <img
              src={HeroImage}
              alt="Hero Image for Snow the developer kit"
              className="hidden sm:block md:block lg:block mx-auto w-full h-auto rounded-xl object-cover lg:aspect-square"
            />

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

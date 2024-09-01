import { Link } from "react-router-dom";
import HeroImage from "../src/assets/hero.jpg";
import React from 'react';
import { Check } from 'lucide-react';
import Header from "./components/Header";
import FAQS from "./components/FAQ";
import Documentation from "./components/Documentation";
import Footer from "./components/Footer";

const btnColors = "rounded-sm hover:";


const Home = () => {
  return (
    <div className="">
        <Header />
    <div>
        <Hero />
        <Features />
        <PricingSection />
        <Documentation />
        <FAQS />
    </div>

      <Footer />
    </div>
  );
};

export default Home;






const Hero = () => {
    return(
        <>
          <section className="w-full py-4 md:py-10 lg:py-14 xl:py-22">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col gap-6 lg:flex-row lg:justify-center lg:gap-24">
                <div className="flex flex-col justify-center items-center lg:items-start space-y-4">
                  <div className="space-y-2 text-center lg:text-left">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Supercharge your SaaS with Snow
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                       Snow is a developer kit that simplifies building SaaS applications. With Neon and Drizzle ORM
                      integration, you can get started in just one step.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      to="https://github.com/shyynux/ snoww"
                      className={`${btnColors} inline-flex h-10 items-center justify-center bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`}
                    >
                      Get Started
                    </Link>
                    <Link
                      to="/docs"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <img
                  src={HeroImage}
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                />
              </div>
            </div>
          </section>
        </>
    )
}

const Features = () => {
    return(
        <section id="features" className="w-full py-6 md:py-12 lg:py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Discover  snoww's key features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Build SaaS faster with  snoww</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                 snoww provides a complete toolkit to build, deploy, and scale your SaaS application. With Neon and
                Drizzle ORM integration, you can get started in just one step.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Neon Integration</h3>
                    <p className="text-muted-foreground">
                      Seamlessly integrate Neon, the fastest Postgres database, into your SaaS.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Drizzle ORM</h3>
                    <p className="text-muted-foreground">
                      Use Drizzle, the type-safe ORM, to interact with your database without hassle.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">One-Step Setup</h3>
                    <p className="text-muted-foreground">
                      Get started with  snoww in just one step, no complex configuration required.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <img
              src={HeroImage}
              width="550"
              height="310"
              alt="Features"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
    )

}


interface PricingTierProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  isPremium: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({ title, price, features, buttonText, isPremium }) => (
  <div className={`flex flex-col p-6 bg-white rounded-lg shadow-md ${isPremium ? 'border-2 border-primary' : 'border border-gray-200'}`}>
    <h3 className="text-2xl font-bold">{title}</h3>
    <div className="mt-4 text-4xl font-bold">{price}</div>
    <ul className="mt-6 space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className="w-5 h-5 text-green-500 mr-2" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link
      to="#"
      className={`mt-8 inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
        isPremium
          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
          : 'bg-background text-foreground hover:bg-accent hover:text-accent-foreground border border-input'
      }`}
    >
      {buttonText}
    </Link>
  </div>
);

const PricingSection: React.FC = () => {
  const freeTierFeatures: string[] = [
    'Basic project management',
    'Up to 5 team members',
    '1GB storage',
    'Email support',
  ];

  const premiumTierFeatures: string[] = [
    'Advanced project management',
    'Unlimited team members',
    '100GB storage',
    'Priority support',
    'Custom integrations',
    'Advanced analytics',
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose Your Plan</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Select the perfect plan for your needs. Upgrade or downgrade at any time.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-6xl lg:gap-20 mt-8">
          <PricingTier
            title="Free Tier"
            price="$0/month"
            features={freeTierFeatures}
            buttonText="Get Started"
            isPremium={false}
          />
          <PricingTier
            title="Premium Tier"
            price="$29/month"
            features={premiumTierFeatures}
            buttonText="Upgrade Now"
            isPremium={true}
          />
        </div>
      </div>
    </section>
  );
};
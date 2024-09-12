import { Link } from "react-router-dom";
import { Check } from 'lucide-react';

interface PricingButtonProps {
    title: string;
}

interface PricingCardProps {
    title: string;
    subtitle: string;
    price:  number;
    features: string[];
}



const PricingHeader = () => {
    return (
        <div className="my-8 flex flex-col justify-center items-center">

              <div className="my-8 p-2 border bg-muted">
                <p> Pricing models just for you. </p>
              </div>

             <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Are you ready to ship your idea super fast?</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Launch your idea superfast with Snow, for a minimal one time price.
            </p>
          </div>
        </div>
    )
  }

const PricingButton: React.FC<PricingButtonProps> = ({ title }) => {
    return(
        <button className="w-full py-2 h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"> {title} </button>
    )
}

const PricingCard: React.FC<PricingCardProps> = ({ title, subtitle, price, features }) => {
    return(
        <div className="p-12 ">
        <h3 className="text-2xl font-bold"> {title} </h3>
        <h3 className="text-xl font-thin"> {subtitle} </h3>

        <div className="mt-4 text-4xl font-bold"> ${price} </div>

        <ul className="my-6 space-y-4">
        {features.map((feature, id) => (
            <li key={id} className="flex items-center">
            <Check className="w-5 h-5 text-green-500 mr-2" />
            <span> {feature} </span>
        </li>
        ))}
        </ul>                    
    </div>
    )
}

const pricingData = [
  {
    title: 'Free',
    subtitle: 'Perfect for hobby projects and early experimentation',
    price: 0,
    features: ['Unlimited projects', 'Basic support', 'Essential analytics', 'All landing page elements included'],
    buttonSubtext: "Start building, completely free",
  },
  {
    title: 'Premium',
    subtitle: 'For fast deployment and feature-rich projects',
    price: 49.99,
    features: ['Unlimited projects', 'Priority support', 'Advanced analytics', 'All landing page elements', 'Payment setup', 'Authentication & email setup'],
    buttonSubtext: "Upgrade for complete control",
  },
  {
    title: 'Lifetime',
    subtitle: 'One-time payment for lifetime updates and support',
    price: 249.99,
    features: ['Unlimited projects', 'Lifetime support', 'All future updates', 'All landing page elements', 'Payment setup', 'Authentication & email setup'],
    buttonSubtext: "Invest once, access forever",
  }
];



  
const Pricing = () => {
    return (
      <div className="my-8">

        
        <PricingHeader />
  
        <div className="flex sm:flex-row justify-center gap-x-8">
          {pricingData.map((plan, index) => (
            <div 
              key={index} 
              className="flex sm:flex-col rounded-md bg-card border hover:shadow-md w-80" 
            >
              <div className="flex sm:flex-col sm:flex-grow p-4">
                <PricingCard
                  title={plan.title}
                  subtitle={plan.subtitle}
                  price={plan.price}
                  features={plan.features}
                />
              </div>
              <div className="flex flex-col text-center justify-end mt-auto p-4">
                <Link to="/payment">
                <PricingButton title="☁️ Get Snow" />
                </Link>
                 <h3 className="text-xs my-1 font-light"> {plan.buttonSubtext} </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  



 

  export default Pricing;

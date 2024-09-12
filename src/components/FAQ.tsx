import React, { useState } from "react";

interface FaqData {
  question: string;
  answer: string;
}

const faqData: FaqData[] = [
  {
    question: "What is Snow?",
    answer: "Snow is a developer kit designed to simplify building, deploying, and scaling SaaS applications. It offers seamless integration with Neon and Drizzle ORM, allowing you to get started with just one step."
  },
  {
    question: "How does Snow integrate with Neon?",
    answer: "Snow integrates Neon, the fastest Postgres database, into your SaaS application seamlessly, ensuring reliable and high-performance database management."
  },
  {
    question: "What is Drizzle ORM and how does Snow use it?",
    answer: "Drizzle ORM is a type-safe ORM that simplifies database interactions. Snow uses Drizzle ORM to allow developers to interact with their databases efficiently and without hassle."
  },
  {
    question: "What does the one-step setup involve?",
    answer: "Snow's one-step setup is designed to get you started quickly without any complex configuration. Simply follow the straightforward setup process, and you're ready to build your SaaS application."
  },
  {
    question: "What are the pricing plans for Snow?",
    answer: "Snow offers two pricing plans: a Free Tier at $0/month with basic project management, up to 5 team members, and 1GB storage; and a Premium Tier at $29/month with advanced project management, unlimited team members, 100GB storage, priority support, and custom integrations."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can upgrade or downgrade your plan at any time to fit your needs. Simply choose the plan that works best for you."
  },
  {
    question: "What kind of support does Snow offer?",
    answer: "Snow provides email support for Free Tier users and priority support for Premium Tier users. The premium plan also includes advanced analytics and custom integrations."
  },
  {
    question: "How can I get started with Snow?",
    answer: "To get started with Snow, simply sign up, choose your plan, and follow the one-step setup process. You can start building your SaaS application right away."
  },
  {
    question: "Where can I find the documentation for Snow?",
    answer: "You can find comprehensive documentation on Snow's official website, which will guide you through all aspects of using the Snow developer kit."
  }
];

const FAQS: React.FC = () => {
  return (
    <section className="w-full my-12">

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">

        <div className="my-4 p-2 border bg-muted">
              <p> FAQ. </p>
          </div>
            
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently asked Questions </h2>
        </div>
        <div className="flex flex-col pt-4 sm:pt-10">
          {faqData.map((item, index) => (
            <FaqComponent
              key={index}
              question={item.question}
              answer={item.answer}
              customKey={index.toString()}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQS;

interface FaqComponentProps {
  question: string;
  answer: string;
  customKey: string;
}

const FaqComponent: React.FC<FaqComponentProps> = ({ question, answer, customKey }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="p-4 mx-2 sm:mx-0 my-2 flex-1 bg-white text-left rounded-lg shadow-md">
      <div className="flex flex-row justify-between cursor-pointer" onClick={handleButtonClick}>
        <div className="font-medium">{question}</div>
        <button
          className="text-black font-bold"
          onClick={handleButtonClick}
        >
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen ? (
        <div className="pt-2 text-sm text-gray-600">{answer}</div>
      ) : null}
    </div>
  );
};

import React from 'react';
import { Link } from "react-router-dom";

const Pending: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-6">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Feature In Progress</h1>
      <p className="max-w-[600px] text-muted-foreground md:text-xl mt-4">
        This feature is currently being developed. Please check back soon!
      </p>
      <div className="mt-6">
        <Link
          to="/"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Pending;

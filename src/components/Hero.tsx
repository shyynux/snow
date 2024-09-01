import { SVGProps } from "react";
import { Link } from "react-router-dom";
import { JSX } from "react/jsx-runtime";
import HeroImage from "../assets/hero.jpg";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link to="#" className="flex items-center justify-center"  >
          <CloudSnowIcon className="h-6 w-6" /> Snow 
          <span className="sr-only">Snow</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="#" className="text-sm font-medium hover:underline underline-offset-4"  >
            Features
          </Link>
          <Link to="#" className="text-sm font-medium hover:underline underline-offset-4"  >
            Pricing
          </Link>
          <Link to="#" className="text-sm font-medium hover:underline underline-offset-4"  >
            Integrations
          </Link>
          <Link to="#" className="text-sm font-medium hover:underline underline-offset-4"  >
            Docs
          </Link>
        </nav>
      </header>
      <main className="flex-1 mx-4">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
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
                    to="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                     
                  >
                    Get Started
                  </Link>
                  <Link
                    to="#"
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
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Build SaaS faster with Snow</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Snow provides a complete toolkit to build, deploy, and scale your SaaS application. With Neon and
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
                        Get started with Snow in just one step, no complex configuration required.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Pricing that fits your needs</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Snow offers flexible pricing options to support your SaaS journey, from early-stage to enterprise.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                to="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                 
              >
                Get Started
              </Link>
              <Link
                to="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                 
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
        <section id="integrations" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Integrations to power your SaaS</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Snow seamlessly integrates with the tools you already use, enabling you to build your SaaS faster.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <div className="grid grid-cols-3 gap-4">
                <img
                  src="/placeholder.svg"
                  width="100"
                  height="50"
                  alt="Neon"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <img
                  src="/placeholder.svg"
                  width="100"
                  height="50"
                  alt="Drizzle"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <img
                  src="/placeholder.svg"
                  width="100"
                  height="50"
                  alt="Vercel"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="docs" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Documentation</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Get started with Snow in minutes
                </h2>
                <Link
                  to="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                   
                >
                  Read the Docs
                </Link>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Support</div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Our team is here to help you every step of the way. Whether you need assistance with integration,
                  deployment, or scaling, we've got your back.
                </p>
                <Link
                  to="#"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                   
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Snow. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link to="#" className="text-xs hover:underline underline-offset-4"  >
            Terms of Service
          </Link>
          <Link to="#" className="text-xs hover:underline underline-offset-4"  >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CloudSnowIconDeleted(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Tree trunk */}
          <rect x="10" y="14" width="4" height="6" fill="none" stroke="currentColor" />
    
          {/* Tree branches and snow */}
          <path d="M12 2 L6 10 H18 L12 2" stroke="currentColor" fill="none" />
          <path d="M12 6 L4 14 H20 L12 6" stroke="currentColor" fill="none" />
          <path d="M12 10 L2 18 H22 L12 10" stroke="currentColor" fill="none" />
    
          {/* Snow on the tree (using dots or small paths) */}
          <path d="M10 8h.01" />
          <path d="M14 8h.01" />
          <path d="M8 12h.01" />
          <path d="M16 12h.01" />
          <path d="M6 16h.01" />
          <path d="M18 16h.01" />
        </svg>
      );
  }

  import React from 'react';

function CloudSnowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Define gradients for the tree and snow */}
      <defs>
        <linearGradient id="treeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#006400', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#32CD32', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="snowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#E0E0E0', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Tree trunk */}
      <rect x="20" y="32" width="8" height="12" fill="#8B4513" stroke="none" />

      {/* Tree branches */}
      <path d="M24 4 L10 24 H38 L24 4" fill="url(#treeGradient)" stroke="none" />
      <path d="M24 14 L6 32 H42 L24 14" fill="url(#treeGradient)" stroke="none" />
      <path d="M24 24 L2 40 H46 L24 24" fill="url(#treeGradient)" stroke="none" />

      {/* Snow on the tree */}
      <path d="M20 12 L24 10 L28 12 L26 14 L22 14 Z" fill="url(#snowGradient)" stroke="none" />
      <path d="M14 22 L24 18 L34 22 L30 24 L18 24 Z" fill="url(#snowGradient)" stroke="none" />
      <path d="M8 32 L24 26 L40 32 L36 34 L12 34 Z" fill="url(#snowGradient)" stroke="none" />
    </svg>
  );
}


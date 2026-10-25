"use client";

// src/components/Footer.jsx
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const accountLinks = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/parvez.patwary.2024", icon: FaFacebookF },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/miraz-ahammed", icon: FaLinkedinIn },
];

export default function Footer() {
  // Static initial value for prerender, updated on the client after mount
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-separator bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-lg font-bold text-white">
                N
              </span>
              <span className="text-xl font-bold tracking-tight">Nandolapur</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/70">
              A student-friendly platform to learn, grow and connect. Build your
              skills and shape your future with us.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Account
            </h3>
            <ul className="mt-4 space-y-3">
              {accountLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground/70">
              <li>Nandolapur, Bangladesh</li>
              <li>
                <a
                  href="mailto:contact.mirazahammed@gmail.com"
                  className="transition-colors hover:text-accent"
                >
                  contact.mirazahammed@gmail.com

                </a>
              </li>
              <li>
                <a
                  href="tel:+8801610634194"
                  className="transition-colors hover:text-accent"
                >
                  +880 1610-634194
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-separator pt-6 sm:flex-row">
          <p className="text-center text-sm text-foreground/60 sm:text-left">
            © {year} Nandolapur. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-separator text-foreground/70 transition-colors hover:border-accent hover:bg-accent hover:text-white"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
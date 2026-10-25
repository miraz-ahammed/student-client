"use client";

// src/components/Navbar.jsx
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@heroui/react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const go = (href) => {
    setOpen(false);
    router.push(href);
  };

  const linkClass = (href) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      pathname === href
        ? "bg-accent/10 text-accent"
        : "text-foreground/70 hover:bg-default hover:text-foreground"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-separator bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-lg font-bold text-white">
            N
          </span>
          <span className="text-xl font-bold tracking-tight">Nandolapur</span>
        </Link>

        {/* Right: Desktop routes + Auth */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.name}
            </Link>
          ))}

          <div className="ml-4 flex items-center gap-2">
            <Button variant="ghost" size="sm" onPress={() => go("/login")}>
              Login
            </Button>
            <Button variant="primary" size="sm" onPress={() => go("/register")}>
              Register
            </Button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-default md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-separator bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={linkClass(link.href)}
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-3 grid grid-cols-2 gap-2">
              <Button variant="secondary" onPress={() => go("/login")}>
                Login
              </Button>
              <Button variant="primary" onPress={() => go("/register")}>
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
// src/app/page.js
import Link from "next/link";
import {
  FiBookOpen,
  FiUsers,
  FiAward,
  FiClock,
  FiSmartphone,
  FiShield,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import Reveal from "@/components/Reveal";

const stats = [
  { value: "10K+", label: "Students" },
  { value: "200+", label: "Courses" },
  { value: "50+", label: "Mentors" },
  { value: "98%", label: "Satisfaction" },
];

const features = [
  {
    icon: FiBookOpen,
    title: "Quality Courses",
    text: "Carefully designed lessons that take you from basics to advanced, step by step.",
  },
  {
    icon: FiUsers,
    title: "Expert Mentors",
    text: "Learn from experienced teachers who guide and support you along the way.",
  },
  {
    icon: FiClock,
    title: "Learn Anytime",
    text: "Study at your own pace, whenever and wherever it suits you best.",
  },
  {
    icon: FiAward,
    title: "Certificates",
    text: "Earn a certificate after every course to showcase your new skills.",
  },
  {
    icon: FiSmartphone,
    title: "Any Device",
    text: "Fully responsive experience on mobile, tablet and desktop.",
  },
  {
    icon: FiShield,
    title: "Safe & Secure",
    text: "Your account and personal data are protected at every step.",
  },
];

const steps = [
  {
    no: "01",
    title: "Create an account",
    text: "Register for free in less than a minute.",
  },
  {
    no: "02",
    title: "Choose a course",
    text: "Pick what you want to learn from our growing library.",
  },
  {
    no: "03",
    title: "Start learning",
    text: "Follow the lessons, practice and track your progress.",
  },
];

const testimonials = [
  {
    name: "Rahim Uddin",
    role: "Student",
    text: "The lessons are simple and clear. I improved a lot in just a few weeks.",
  },
  {
    name: "Nusrat Jahan",
    role: "Student",
    text: "Mentors are very helpful and the platform is easy to use on my phone.",
  },
  {
    name: "Tanvir Hasan",
    role: "Student",
    text: "Best place to start learning. The certificate helped me a lot.",
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative isolate">
        {/* Animated background blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="animate-blob absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent/30 blur-3xl sm:h-96 sm:w-96" />
          <div className="animate-blob animation-delay-2000 absolute -right-24 top-24 h-72 w-72 rounded-full bg-purple-500/25 blur-3xl sm:h-96 sm:w-96" />
          <div className="animate-blob animation-delay-4000 absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
          {/* Left: text */}
          <div className="text-center lg:text-left">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-separator bg-background/70 px-4 py-1.5 text-xs font-medium backdrop-blur sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              New courses added every week
            </span>

            <h1 className="animate-fade-up animation-delay-200 mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Learn, Grow &amp; Build Your Future with{" "}
              <span className="bg-gradient-to-r from-accent via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Nandolapur
              </span>
            </h1>

            <p className="animate-fade-up animation-delay-400 mx-auto mt-5 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg lg:mx-0">
              A friendly learning platform made for students. Explore courses,
              learn from mentors and grow your skills at your own pace.
            </p>

            <div className="animate-fade-up animation-delay-600 mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/register"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition hover:scale-105 hover:shadow-xl sm:w-auto"
              >
                Get Started Free
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/courses"
                className="inline-flex w-full items-center justify-center rounded-full border border-separator bg-background/70 px-7 py-3 text-sm font-semibold backdrop-blur transition hover:bg-default sm:w-auto"
              >
                Browse Courses
              </Link>
            </div>

            <ul className="animate-fade-up animation-delay-800 mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-foreground/70 lg:justify-start">
              {["Free to join", "Certified courses", "Learn anywhere"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2">
                    <FiCheckCircle className="text-accent" />
                    {t}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Right: floating cards visual */}
          <div className="animate-fade-up animation-delay-400 relative mx-auto h-80 w-full max-w-md sm:h-96 lg:h-[28rem]">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent/20 via-purple-500/10 to-pink-500/20 backdrop-blur-sm" />

            {/* Main card */}
            <div className="animate-float absolute left-1/2 top-1/2 w-60 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-separator bg-background p-5 shadow-2xl sm:w-72">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white">
                  <FiBookOpen />
                </span>
                <div>
                  <p className="text-sm font-semibold">Web Development</p>
                  <p className="text-xs text-foreground/60">24 lessons</p>
                </div>
              </div>
              <div className="mt-5">
                <div className="mb-1 flex justify-between text-xs text-foreground/60">
                  <span>Progress</span>
                  <span>72%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-default">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-accent to-purple-500" />
                </div>
              </div>
            </div>

            {/* Small card top-right */}
            <div className="animate-float animation-delay-2000 absolute -right-2 top-6 flex items-center gap-2 rounded-xl border border-separator bg-background px-3 py-2 shadow-xl sm:-right-6">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/15 text-green-500">
                <FiAward />
              </span>
              <span className="text-xs font-semibold">Certificate earned</span>
            </div>

            {/* Small card bottom-left */}
            <div className="animate-float animation-delay-4000 absolute -left-2 bottom-8 flex items-center gap-2 rounded-xl border border-separator bg-background px-3 py-2 shadow-xl sm:-left-6">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/15 text-pink-500">
                <FiUsers />
              </span>
              <span className="text-xs font-semibold">10K+ learners</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-separator bg-default/40 p-6 sm:p-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="text-center">
              <p className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-foreground/70">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Why Nandolapur
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to learn better
          </h2>
          <p className="mt-4 text-foreground/70">
            Simple tools and great content, all in one place.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={(i % 3) * 120}>
                <div className="group h-full rounded-2xl border border-separator bg-background p-6 transition duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-xl">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-xl text-accent transition group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                    <Icon />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {f.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-default/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              How it works
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Start in three easy steps
            </h2>
          </Reveal>

          <div className="relative mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.no} delay={i * 150}>
                <div className="relative h-full rounded-2xl border border-separator bg-background p-6 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-purple-500 text-lg font-bold text-white shadow-lg shadow-accent/30">
                    {s.no}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            What our students say
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="h-full rounded-2xl border border-separator bg-background p-6 transition hover:shadow-xl">
                <div className="text-4xl leading-none text-accent/40">“</div>
                <blockquote className="mt-2 text-sm leading-relaxed text-foreground/80">
                  {t.text}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-pink-500 text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">
                      {t.name}
                    </span>
                    <span className="block text-xs text-foreground/60">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent via-purple-600 to-pink-600 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="animate-blob absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="animate-blob animation-delay-2000 absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

            <h2 className="relative text-2xl font-bold sm:text-4xl">
              Ready to start your learning journey?
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-sm text-white/85 sm:text-base">
              Join thousands of students already learning with Nandolapur.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/register"
                className="w-full rounded-full bg-white px-7 py-3 text-sm font-semibold text-purple-700 transition hover:scale-105 sm:w-auto"
              >
                Create Free Account
              </Link>
              <Link
                href="/login"
                className="w-full rounded-full border border-white/50 px-7 py-3 text-sm font-semibold transition hover:bg-white/10 sm:w-auto"
              >
                Login
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
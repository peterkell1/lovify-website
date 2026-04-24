import { Navbar } from "@/components/layout/header/Navbar";
import { Footer } from "@/components/layout/footer/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export const PageShell = ({ eyebrow, title, subtitle, children }: PageShellProps) => {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main className="bg-warm pt-40 pb-24 md:pt-48 md:pb-32">
        <header className="mx-auto max-w-3xl px-6 text-center">
          {eyebrow && (
            <p className="mb-4 text-base font-semibold tracking-wide text-text-sub uppercase">
              {eyebrow}
            </p>
          )}
          <h1 className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-black sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-sub font-medium md:text-xl">
              {subtitle}
            </p>
          )}
        </header>

        {children && (
          <div className="mx-auto mt-16 max-w-3xl px-6 md:mt-24">{children}</div>
        )}
      </main>
      <Footer />
    </>
  );
};

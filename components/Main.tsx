import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="flex-grow max-w-2xl mx-auto grid p-6 gap-6 xl:grid-cols-2 bg-teal-100">
      {children}
    </main>
  );
};
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col bg-teal-100 min-h-screen">
      <Head>
        <title>Test sklepu</title>
        <meta name="description" content="Jakiś opis sklepu" />
      </Head>
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

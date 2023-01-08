import Link from "next/link";

export const Header = () => {
  return (
    <header className="max-w-2xl mx-auto w-full">
      <nav className="bg-gray-700 px-4 py-2 text-white ">
        <Link className="p-4" href="/">
          Główna
        </Link>
        <Link className="p-4" href="/about">
          About
        </Link>
        <Link className="p-4" href="/products">
          Produkty
        </Link>
      </nav>
    </header>
  );
};

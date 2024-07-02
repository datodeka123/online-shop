"use client";
import { Nav, NavLink } from "@/components/Nav";
import SearchContextProvider from "./products/components/SearchContextProvider";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SearchContextProvider>
      <Nav>
        <NavLink href="/">მთავარი</NavLink>
        <NavLink href="/products">პროდუქტები</NavLink>
        <NavLink href="/orders">ჩემი შესყიდვები</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
    </SearchContextProvider>
  );
}

import { Nav, NavLink } from "@/components/Nav";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/">მთავარი</NavLink>
        <NavLink href="/products">პროდუქტები</NavLink>
        <NavLink href="/orders">ჩემი შესყიდვები</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
    </>
  );
}

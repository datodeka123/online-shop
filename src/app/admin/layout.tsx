import { Nav, NavLink } from "@/components/Nav";

export const dynamic = "force-dynamic";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/admin">მონაცემები</NavLink>
        <NavLink href="/admin/products">პროდუქტები</NavLink>
        <NavLink href="/admin/users">მომხმარებლები</NavLink>
        <NavLink href="/admin/orders">გაყიდვები</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
    </>
  );
}

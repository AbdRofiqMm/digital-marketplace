import { Button } from "@/components/ui/button";
import { NavbarLinks } from "./NavbarLinks";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  return (
    <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 px-4 md:px-8 mx-auto py-7">
      <div className="md:col-span-3">
        <h1 className="text-2xl font-semibold">
          Marshal <span className="text-primary">UI</span>
        </h1>
      </div>

      <NavbarLinks />

      <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
        <Button>Login</Button>
        <Button variant="secondary">Register</Button>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

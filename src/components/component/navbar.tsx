import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

export function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/m" className="flex items-center gap-2" prefetch={false}>
            <img
              src="/images/logo.png" // Ruta de tu imagen
              alt="Acme Inc"
              className="h-6 w-auto"
            />
            <span className="text-lg font-semibold">Acme Inc</span>
          </Link>
          <nav className="grid gap-4 py-6">
            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
              About
            </Link>
            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
              Services
            </Link>
            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-[150px] hidden lg:flex">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <img
            src="/images/logo.png" // Ruta de tu imagen
            alt="Acme Inc"
            className="h-6 w-auto"
          />
          <span />
        </Link>
      </div>
      <div className="flex w-full justify-center">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                About
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Services
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
              <img
                src="/placeholder.svg"
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
                style={{ aspectRatio: "36/36", objectFit: "cover" }}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Login</DropdownMenuItem>
            <DropdownMenuItem>Register</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon">
              <ShoppingCartIcon className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Cart</h4>
                <p className="text-sm text-muted-foreground">View and manage your cart items.</p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <div className="col-span-2">
                    <p className="font-medium">Product Name</p>
                    <p className="text-sm text-muted-foreground">$99.99</p>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <MinusIcon className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </Button>
                    <span>1</span>
                    <Button variant="ghost" size="icon">
                      <PlusIcon className="h-4 w-4" />
                      <span className="sr-only">Add</span>
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <div className="col-span-2">
                    <p className="font-medium">Another Product</p>
                    <p className="text-sm text-muted-foreground">$49.99</p>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <MinusIcon className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </Button>
                    <span>2</span>
                    <Button variant="ghost" size="icon">
                      <PlusIcon className="h-4 w-4" />
                      <span className="sr-only">Add</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">Total</p>
                <p className="font-medium">$199.98</p>
              </div>
              <div className="flex flex-col gap-2 lg:flex-row">
                <Button size="lg">Checkout</Button>
                <Button variant="outline" size="lg">
                  View Cart
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

// Los demás íconos permanecen igual

function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
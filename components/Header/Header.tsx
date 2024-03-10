import { Edit, Menu, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { MainNav } from "./MainNav";

const Header = () => {
  return (
    <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify between">
      <div className="flex items-center w-full md:2/3">
        <ul className="flex items-center ml-5"></ul>
        <Link href="/menu">
          <div className="h-9 px-3 rounded-md hover:bg-accent hover:text-accent-foreground">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </div>
        </Link>
        <Link href="/search">
          <div className="h-9 px-3 rounded-md hover:bg-accent hover:text-accent-foreground">
            <Search className="h-5 w-5" />
            {/* <span className="ml-2 text-sm font-bold">0</span> */}
            <span className="sr-only">Search</span>
          </div>
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 translate-y-4">
          <MainNav />
        </div>

        <div className="flex items-center space-x-1">
          <Link href="/shopping">
            <div className="h-9 px-3 rounded-md hover:bg-accent hover:text-accent-foreground">
              <ShoppingBag className="h-5 w-5" />
              <span className="ml-2 text-sm font-bold">0</span>
              <span className="sr-only">Cart</span>
            </div>
          </Link>
          {/* <ThemeToggle /> */}
          {process.env.NODE_ENV === "development" && (
            <Link href="/studio">
              <div className="h-9 px-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                <Edit className="h-5 w-5" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

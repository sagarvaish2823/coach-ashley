import { Menu } from "lucide-react";
import Link from "next/link";

import { links } from "./navbar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function NavbarMobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="h-8 w-8" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl text-gray-800">Menu</SheetTitle>
        </SheetHeader>
        <menu>
          {links.map((i) => (
            <li
              key={i.id}
              className="capitalize mt-4 hover:scale-110 transition-transform w-fit"
            >
              <Link className="flex gap-2 items-center" href={`/${i.name}`}>
                {i.icon}
                <span className="text-lg">{i.name}</span>
              </Link>
            </li>
          ))}
        </menu>
      </SheetContent>
    </Sheet>
  );
}

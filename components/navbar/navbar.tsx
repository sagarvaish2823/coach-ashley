import { Home, User, GraduationCap, Mic, AtSign, Mailbox } from "lucide-react";
import Link from "next/link";
import NavbarLogo from "./navbar-logo";
import NavbarMobileMenu from "./navbar-mobile-menu";
import Container from "../ui/container";

const IconClasses = "text-[#FF9A00]";

export const links = [
  {
    id: 0,
    name: "home",
    icon: <Home className={IconClasses} />,
  },
  {
    id: 1,
    name: "about",
    icon: <User className={IconClasses} />,
  },
  {
    id: 2,
    name: "coaching",
    icon: <GraduationCap className={IconClasses} />,
  },
  {
    id: 3,
    name: "podcast",
    icon: <Mic className={IconClasses} />,
  },
  {
    id: 4,
    name: "contact us",
    icon: <AtSign className={IconClasses} />,
  },
  {
    id: 5,
    name: "newsletter",
    icon: <Mailbox className={IconClasses} />,
  },
];

export default function Navbar() {
  return (
    <nav className="pt-2">
      <Container className="flex justify-between items-center">
        <div>
          <NavbarLogo />
        </div>
        {/* <menu className="hidden lg:block">
        {links.map((i) => (
          <li key={i.id} className="capitalize">
          <Link href={`/${i.name}`}>{i.name}</Link>
          </li>
          ))}
          </menu> */}
        <NavbarMobileMenu />
      </Container>
    </nav>
  );
}

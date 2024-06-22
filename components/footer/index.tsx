import {
  AtSign,
  GraduationCap,
  Home,
  Lock,
  Mailbox,
  Mic,
  User,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { LogoImage } from "@/lib/images";

import Container from "../ui/container";

const IconClasses = "text-[#FF9A00] icon_size";

const ImportantLinks = [
  {
    id: 1,
    name: "Privacy Policy",
    link: "#",
    icon: <Lock className={IconClasses} />,
  },
];

const links1 = [
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
    name: "contact us",
    icon: <AtSign className={IconClasses} />,
  },
];

const contentLinks = [
  {
    id: 1,
    name: "podcast",
    icon: <Mic className={IconClasses} />,
  },
  {
    id: 2,
    name: "newsletter",
    icon: <Mailbox className={IconClasses} />,
  },
];

interface IconProps {
  className?: string;
}

export const LinkedinIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={0}
    viewBox="0 0 448 512"
    className={className}
  >
    <path
      stroke="none"
      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
    />
  </svg>
);

export default function Footer() {
  return (
    <section className="bg-black text-white min-h-[30vh] py-8">
      <Container>
        <p className="text-center">
          Copyright © 2024 Born with a GIFT - All Rights Reserved.
        </p>
        <div className="lg:flex lg:justify-between pt-8">
          <div className="flex flex-col justify-center items-center lg:flex-none lg:justify-normal">
            <Image
              src={LogoImage}
              alt="logo"
              width={70}
              height={70}
              className="invert"
            />
            <h2>Born With a Gift</h2>
            <div className="pt-8">
              <h2 className="page_para">Connect with me</h2>
              <div className="flex justify-center gap-4 pt-4">
                <Link href={"https://www.linkedin.com/in/careetarobertgreen/"}>
                  <LinkedinIcon className="h-8 w-8" />
                </Link>
                <Link href={"https://www.linkedin.com/in/careetarobertgreen/"}>
                  <Youtube className="h-8 w-8" />
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:flex gap-16">
            <div>
              <h2 className="page_para mb-4 mt-16 lg:mt-0">Links</h2>
              <menu className="space-y-2">
                {links1.map(({ icon, id, name }) => (
                  <li
                    key={id}
                    className="capitalize hover:scale-110 transition-transform w-fit"
                  >
                    <Link className="flex gap-2 items-center" href={`/${name}`}>
                      {icon}
                      <span className="text-lg">{name}</span>
                    </Link>
                  </li>
                ))}
              </menu>
            </div>
            <div>
              <h2 className="page_para mb-4 mt-16 lg:mt-0">Content</h2>
              <menu className="space-y-2">
                {contentLinks.map(({ icon, id, name }) => (
                  <li
                    key={id}
                    className="capitalize hover:scale-110 transition-transform w-fit"
                  >
                    <Link className="flex gap-2 items-center" href={`/${name}`}>
                      {icon}
                      <span className="text-lg">{name}</span>
                    </Link>
                  </li>
                ))}
              </menu>
            </div>
            <div>
              <h2 className="page_para mb-4 mt-16 lg:mt-0">Policies</h2>
              <menu className="space-y-2">
                {ImportantLinks.map(({ icon, id, name, link }) => (
                  <li
                    key={id}
                    className="capitalize hover:scale-110 transition-transform w-fit"
                  >
                    <Link className="flex gap-2 items-center" href={link}>
                      {icon}
                      <span className="text-lg">{name}</span>
                    </Link>
                  </li>
                ))}
              </menu>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

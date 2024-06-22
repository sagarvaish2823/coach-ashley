import { LogoImage } from "@/lib/images";
import Image from "next/image";

export default function NavbarLogo() {
  return <Image src={LogoImage} alt="logo" width={50} height={50} />;
}

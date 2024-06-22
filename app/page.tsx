import { Fragment } from "react";
import { Bebas_Neue } from "next/font/google";
import { PodcastIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  AppleMusicLogoImage,
  AshleyImage,
  SpotifyLogoImage,
  YoutubeLogoImage,
} from "@/lib/images";

import Newsletter from "./_components/newsletter";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Born with a Gift",
  description: "A Test page for Ashley",
};

const font_used = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const imageData = [
  {
    alt: "spotify link",
    image: SpotifyLogoImage,
    link: "https://open.spotify.com/show/7yxobWIBIYU6hHve0u9fxH?si=c62a8a37d0054567",
  },
  {
    alt: "apple music link",
    image: AppleMusicLogoImage,
    link: "https://podcasts.apple.com/gb/podcast/unwrap-your-gift/id1657919091",
  },
  {
    alt: "youtube link",
    image: YoutubeLogoImage,
    link: "https://youtube.com/playlist?list=PLCxxJzW70a6-sPO3rRU3XQZ0HUynPDwB1&si=0f9iRyNJxGM3XHEB",
  },
];

export default function Home() {
  return (
    <section>
      <Container className="relative pt-4 lg:h-[60vh] lg:pt-16">
        <div className="lg:flex lg:justify-between lg:mr-24">
          <div>
            <h1 className="text-3xl lg:text-5xl font-light">
              Born with a <span className="font-bold">Gift</span>
            </h1>
            <p className="text-xs lg:text-base mt-2">
              Own Your GIFTS | Stand Out | Elevate Your Career Journey
            </p>
            <div className="mt-10 space-y-2">
              <div>
                <Button className="w-[10rem] rounded-xl bg-[#e04848]">
                  Let&apos;s Collaborate
                </Button>
              </div>
              <div>
                <Button className="w-[10rem] rounded-xl" variant={"outline"}>
                  Live Events
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="hidden lg:block">
              <div className="relative h-[15rem] w-[10rem] lg:h-[19rem] lg:w-[13rem]">
                <Image src={AshleyImage} className="z-20" alt="ashley" fill />
                <div className="absolute top-[-1rem] left-[-4.5rem]">
                  <p className="font-semibold text-gray-800">
                    Virtual Group
                    <br /> Coaching{" "}
                  </p>
                </div>
                <div className="absolute bottom-[-1rem] right-[-5.5rem]">
                  <p className="font-semibold text-gray-800">
                    Personalized <br />
                    coaching
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <section className="relative flex justify-center mt-12 lg:hidden">
        <div className="relative h-[15rem] w-[10rem]">
          <Image src={AshleyImage} className="z-20" alt="ashley" fill />
          <div className="absolute top-[-1rem] left-[-4.5rem]">
            <p className="font-semibold text-gray-800">
              Virtual Group
              <br /> Coaching{" "}
            </p>
          </div>
          <div className="absolute bottom-[-1rem] right-[-5.5rem]">
            <p className="font-semibold text-gray-800">
              Personalized <br />
              coaching
            </p>
          </div>
        </div>
      </section>
      <div>
        <p className="mt-10 py-2 text-5xl tracking-tight font-bold bg-[#e04848] text-center">
          BE BOLD
        </p>
      </div>
      <Container className="pt-8 w-[70%] lg:w-[40vw] lg:pt-16">
        <p className="text-base lg:text-xl font-semibold">
          I&apos;m Careeta Robert-Green,
        </p>
        <div className="mt-2">
          <p className="text-balance lg:text-lg text-base">
            An executive coach empowering leaders to embrace boldness and
            confidence. Through virtual group coaching, we&apos;ve guided
            clients like Google, Sony, and BBC to achieve career success.
            Let&apos;s embark on your transformative journey together.
          </p>
        </div>
      </Container>
      <Container className="pt-8 lg:pt-16">
        <p
          className={cn(
            font_used.className,
            "text-3xl lg:text-5xl text-center font-bold"
          )}
        >
          Make a Better Choice
        </p>
        <div className="flex justify-center lg:pt-6">
          <Button className="w-[10rem] rounded-xl bg-[#e04848]">
            Let&apos;s Colaborate
          </Button>
        </div>
      </Container>
      <Podcast />
      <Newsletter />
    </section>
  );
}

export function Podcast() {
  return (
    <Container className="mt-8 relative min-h-[14rem]">
      <div className="lg:flex lg:justify-between lg:w-[50vw] lg:mx-auto">
        <div className="lg:pt-16">
          <h2 className="text-xl lg:text-2xl font-bold text-left border-b-4 border-[#e04848] w-fit">
            Tune in
            <br /> Unwrap Your GIFT Podcast🎙️
          </h2>
          <p className="lg:text-lg text-base">
            Podcasts that inspire you grow.
          </p>
        </div>
        <div>
          <div className="relative z-20"></div>
          <div className="text-gray-200 mt-2">
            <PodcastIcon className="h-28 w-28 lg:h-[15rem] lg:w-[15rem] mx-auto" />
          </div>
          <div className="flex justify-center">
            <Button className="w-[10rem] rounded-xl bg-[#e04848]">
              Listen
            </Button>
          </div>
        </div>
      </div>
      <div className="my-4">
        <h3 className="text-xl lg:text-2xl lg:text-center lg:pt-16 font-semibold">
          Available on
        </h3>
      </div>
      <div>
        <div className="flex justify-center items-center gap-6">
          {imageData.map(({ alt, image, link }) => (
            <Link href={link} key={alt}>
              <Image src={image} alt={alt} height={120} width={120} />
            </Link>
          ))}
        </div>
      </div>
      {/* TODO: ADD LOGOS SPOTIFY, APPLE PODCAST, YOUTUBE - INFINITE CAROUSAL*/}
    </Container>
  );
}

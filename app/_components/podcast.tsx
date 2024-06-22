import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { PodcastIcon } from "lucide-react";

export default function Podcast() {
  return (
    <Container className="mt-8 relative min-h-[14rem]">
      <h2 className="text-xl font-bold text-left border-b-4 border-[#e04848] w-fit">
        Tune in
        <br /> Unwrap Your GIFT Podcast🎙️
      </h2>
      <div className="relative z-20">
        <p className="">Podcasts that inspire you grow.</p>
      </div>
      <div className="text-gray-200 mt-2">
        {/* <div className="absolute text-gray-200 left-1/2 z-10 mt-6 -translate-x-[50%]"> */}
        <PodcastIcon className="h-28 w-28 mx-auto" />
      </div>
      <div className="flex justify-center">
        <Button className="w-[10rem] rounded-xl bg-[#e04848]">Listen</Button>
      </div>
      <div className="my-4">
        <h3 className="text-lg font-semibold">Available on</h3>
      </div>
      {/* TODO: ADD LOGOS SPOTIFY, APPLE PODCAST, YOUTUBE - INFINITE CAROUSAL*/}
    </Container>
  );
}

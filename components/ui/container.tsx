import React from "react";

import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function Container({ children, className, id }: ContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "mx-8 md:mx-20 lg:mx-28 lg-2k:mx-auto lg-2k:max-w-[60vw]",
        className
      )}
    >
      {children}
    </section>
  );
}

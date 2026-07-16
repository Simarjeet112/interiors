"use client";

import { ReactNode } from "react";
import SmoothScrollProvider from "./SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import MouseGlow from "@/components/ui/MouseGlow";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Loader from "@/components/ui/Loader";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <Loader />
      <ScrollProgress />
      <MouseGlow />
      <CustomCursor />
      {children}
    </SmoothScrollProvider>
  );
}

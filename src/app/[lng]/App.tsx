"use client";
import FramerAnimatePresence from "@/components/AnimatePresence";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header/Header";
import { ThemeProvider } from "next-themes";
import React from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { ActiveLinkProvider } from "@/context/ActiveLinkContext";

const App = ({ children, lng }: { children: React.ReactNode; lng: any }) => {
  return (
    <ThemeProvider attribute='class' storageKey='devriser-theme' disableTransitionOnChange>
      <ActiveLinkProvider>
        <LazyMotion features={domAnimation} strict>
          <Header lng={lng} />
          <FramerAnimatePresence initial={false} mode='wait'>
            {children}
          </FramerAnimatePresence>
          <Footer lng={lng} />
        </LazyMotion>
      </ActiveLinkProvider>
    </ThemeProvider>
  );
};

export default App;

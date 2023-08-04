"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

const Theme = ({ children }: any) => {
  const [mounted, setMounted] = useState(false);

  //fix hydration error
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Theme;

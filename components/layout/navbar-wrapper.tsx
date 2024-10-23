"use client";

import { Navbar } from "./navbar";
import { useAuth } from "@clerk/nextjs";

export function NavbarWrapper() {
  const { isLoaded, userId } = useAuth();

  if (!isLoaded) {
    return null;
  }

  return <Navbar isAuthenticated={!!userId} />;
}
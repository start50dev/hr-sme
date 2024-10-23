import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@/components/auth/sign-in-button";
import { currentUser } from "@clerk/nextjs";
import { ThemeToggle } from "./theme-toggle";

export async function Navbar() {
  const user = await currentUser();

  return (
    <nav className="border-b">
      <div className="container flex h-16 items-center px-4">
        <div className="flex flex-1 items-center justify-between">
          <h1 className="text-2xl font-bold">Modern Web App</h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <SignInButton />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
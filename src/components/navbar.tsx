import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-32px)] max-w-[420px] -translate-x-1/2 items-center justify-between rounded-full bg-secondary px-4 py-2.5 md:top-10">
      <Image src="/images/logo.svg" alt="Logo" width={32} height={32} />
      <Button size="sm" className="rounded-full">Get started</Button>
    </nav>
  );
}

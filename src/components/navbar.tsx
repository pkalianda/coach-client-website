import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 flex w-[420px] -translate-x-1/2 items-center justify-between rounded-full bg-secondary px-4 py-2.5 md:top-10">
      <Image src="/images/glide-logo.svg" alt="Logo" width={66} height={18} className="transition-opacity hover:opacity-60" />
      <Button size="sm" className="rounded-full">Get started</Button>
    </nav>
  );
}

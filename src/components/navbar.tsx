import Image from "next/image";
import { WaitlistButton } from "@/components/waitlist-button";

export function Navbar() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-32px)] -translate-x-1/2 items-center justify-between rounded-full bg-neutral-200/30 backdrop-blur-md px-4 py-2.5 md:w-[420px] md:top-10">
      <Image src="/images/glide-logo.svg" alt="Logo" width={66} height={18} className="transition-opacity hover:opacity-60" />
      <WaitlistButton className="h-8 rounded-full px-4 text-sm">Get started</WaitlistButton>
    </nav>
  );
}

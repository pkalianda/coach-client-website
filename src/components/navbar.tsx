import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-32px)] max-w-[616px] -translate-x-1/2 items-center justify-between rounded-full bg-secondary px-4 py-2 md:top-10">
      <div className="flex items-center gap-1">
        <div className="size-4 rounded-sm bg-neutral-300" />
        <span className="text-base font-medium text-foreground">LOGO</span>
      </div>
      <Button className="h-10 rounded-full px-6">Get started</Button>
    </nav>
  );
}

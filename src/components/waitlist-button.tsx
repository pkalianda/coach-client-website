"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WaitlistModal } from "@/components/waitlist-modal";

interface WaitlistButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function WaitlistButton({ children, className }: WaitlistButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button className={className} onClick={() => setOpen(true)}>
        {children}
      </Button>
      <WaitlistModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

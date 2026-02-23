"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface WaitlistModalProps {
  open: boolean;
  onClose: () => void;
}

export function WaitlistModal({ open, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      // Two rAFs ensure the element is painted before we trigger the transition
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    } else {
      setVisible(false);
      // Keep mounted until exit transition finishes (100ms)
      const t = setTimeout(() => setMounted(false), 100);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!mounted) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Backdrop — fades in/out */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-150 ease-out"
        style={{ opacity: visible ? 1 : 0 }}
      />

      {/* Panel — scales + fades in with ease-out, out with ease-in */}
      <div
        className="relative w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-8 shadow-xl transition-[opacity,transform] ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.96)",
          transitionDuration: visible ? "150ms" : "100ms",
          transitionTimingFunction: visible ? "cubic-bezier(0,0,0.2,1)" : "cubic-bezier(0.4,0,1,1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground hover:bg-neutral-100 transition-colors"
          aria-label="Close"
        >
          <X className="size-4" />
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-3 py-4 text-center">
            <div className="text-2xl">🎉</div>
            <h2 className="text-xl font-medium text-foreground">You're on the list!</h2>
            <p className="text-sm text-muted-foreground">We'll be in touch when early access opens up.</p>
            <Button className="mt-2 h-10 rounded-full px-6" onClick={onClose}>
              Done
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-medium text-foreground">Get early access</h2>
              <p className="text-sm leading-6 text-muted-foreground">
                We are opening up Glide for beta testing and provide early access to select coaches. Add your email to join the list.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-10 w-full rounded-full border-0 bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors"
              />
              {status === "error" && (
                <p className="text-xs text-red-500">Something went wrong. Please try again.</p>
              )}
              <Button
                type="submit"
                className="h-10 rounded-full px-6"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Joining..." : "Join waitlist"}
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

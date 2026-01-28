export function Footer() {
  return (
    <footer className="w-full px-4 pb-10 md:px-8 lg:px-[200px]">
      <div className="flex items-center justify-between border-t border-border pt-10">
        <div className="flex items-center gap-1">
          <div className="size-4 rounded-sm bg-neutral-300" />
          <span className="text-sm font-medium text-foreground">Zuck</span>
        </div>
        <span className="text-sm font-medium text-muted-foreground">
          @2025
        </span>
      </div>
    </footer>
  );
}

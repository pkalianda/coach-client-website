interface FeatureBlockProps {
  title: string;
  description: string;
  reverse?: boolean;
  imageSrc?: string;
}

export function FeatureBlock({ title, description, reverse = false }: FeatureBlockProps) {
  return (
    <div className={`mx-auto flex w-full flex-col gap-10 md:gap-[72px] xl:w-[1200px] ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
      <div className="flex w-full flex-col gap-5 md:w-0 md:flex-1">
        <h3 className="text-2xl font-medium leading-8 text-foreground md:text-3xl md:leading-9">
          {title}
        </h3>
        <p className="text-base leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="aspect-[5/4] w-full overflow-hidden rounded-2xl bg-neutral-100 md:w-0 md:flex-1" aria-label="Image container" />
    </div>
  );
}

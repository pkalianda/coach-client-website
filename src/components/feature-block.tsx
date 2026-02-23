import Image from "next/image";

interface FeatureBlockProps {
  title: string;
  description: string;
  reverse?: boolean;
  imageSrc?: string;
  imageAnchor?: "bottom-right" | "bottom-center" | "bottom-left" | "center-left";
  imageWidth?: string;
}

export function FeatureBlock({ title, description, reverse = false, imageSrc, imageAnchor = "bottom-center", imageWidth = "75%" }: FeatureBlockProps) {
  const anchorClass = {
    "bottom-right": "bottom-0 right-0",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
    "bottom-left": "bottom-0 left-0",
    "center-left": "top-1/2 left-0 -translate-y-1/2",
  }[imageAnchor];

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
      <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl bg-neutral-100 md:w-0 md:flex-1" aria-label="Image container">
        {imageSrc && (
          <div className={`absolute ${anchorClass}`} style={{ width: imageWidth }}>
            <Image
              src={imageSrc}
              alt={title}
              width={1600}
              height={1200}
              quality={90}
              className="w-full h-auto select-none pointer-events-none"
              draggable={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}

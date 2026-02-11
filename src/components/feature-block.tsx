import Image from "next/image";

interface FeatureBlockProps {
  title: string;
  description: string;
  reverse?: boolean;
  imageSrc?: string;
}

export function FeatureBlock({ title, description, reverse = false, imageSrc }: FeatureBlockProps) {
  return (
    <div className={`flex flex-col items-start gap-8 lg:gap-20 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
      <div className="flex w-full flex-1 flex-col gap-5">
        <h3 className="text-2xl font-medium leading-8 text-foreground md:text-3xl md:leading-9">
          {title}
        </h3>
        <p className="text-base leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="aspect-[5/4] w-full shrink-0 overflow-hidden rounded-2xl lg:w-[543px]" aria-label="Image container">
        {imageSrc && (
          <Image src={imageSrc} alt="" width={543} height={434} className="h-full w-full object-cover" />
        )}
      </div>
    </div>
  );
}

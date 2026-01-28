interface FeatureBlockProps {
  title: string;
  description: string;
  reverse?: boolean;
  videoSrc?: string;
}

export function FeatureBlock({ title, description, reverse = false, videoSrc }: FeatureBlockProps) {
  return (
    <div className={`flex flex-col items-center gap-8 lg:gap-20 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
      <div className="flex w-full flex-1 flex-col gap-5">
        <h3 className="text-2xl font-medium leading-8 text-foreground md:text-3xl md:leading-9">
          {title}
        </h3>
        <p className="text-base leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
      {videoSrc ? (
        <video
          className="w-full shrink-0 rounded-2xl lg:w-[543px]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div className="aspect-video w-full shrink-0 rounded-2xl bg-secondary lg:w-[543px]" />
      )}
    </div>
  );
}

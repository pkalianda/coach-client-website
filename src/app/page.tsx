import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeatureBlock } from "@/components/feature-block";
import { WaitlistButton } from "@/components/waitlist-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="flex w-full flex-col gap-20 px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Hero Section */}
        <section className="flex w-full flex-col items-center gap-16 overflow-hidden pt-[160px] pb-16">
          <div className="flex w-full flex-col items-center gap-5 pt-6 pb-10">
            <h1 className="max-w-[600px] text-center text-[36px] font-medium leading-tight text-foreground md:text-4xl md:leading-[40px] lg:text-5xl lg:leading-[48px]">
              Client management made easier than your rest days
            </h1>
            <p className="max-w-[600px] text-center text-base leading-6 text-muted-foreground md:text-lg md:leading-7">
              Spend more time with your clients, less time managing. Build
              workouts, track progress, and handle payments—all in one place
            </p>
            <div className="flex items-center gap-2">
              <WaitlistButton className="h-10 rounded-full px-6">
                Get started
              </WaitlistButton>
            </div>
          </div>
          <div className="relative h-[220px] w-full overflow-hidden rounded-2xl md:h-[450px] md:rounded-3xl lg:h-[615px]">
            <Image src="/images/meshgradient.png" alt="" fill className="object-cover pointer-events-none select-none" draggable={false} />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-[1100px]">
              <Image
                src="/images/heroimg.png"
                alt="Glide dashboard"
                width={1920}
                height={1080}
                quality={90}
                className="w-full h-auto select-none pointer-events-none"
                draggable={false}
                priority
              />
            </div>
          </div>
        </section>

        <div className="flex w-full flex-col items-center gap-5">
          <h2 className="max-w-[600px] text-center text-[30px] font-medium leading-8 text-foreground md:text-4xl md:leading-10">
            Stop wasting time on never ending admin work
          </h2>
          <p className="max-w-[600px] text-center text-base leading-6 text-muted-foreground">
            Design personalized workout plans and multi-week programs for each
            client. Build your exercise library once, then mix and match to
            create unlimited variations. Give your clients professional
            programming they can follow anywhere.
          </p>
        </div>

        {/* Features Section */}
        <section className="flex flex-col overflow-hidden">
          <div className="flex w-full flex-col gap-20 pb-16">
            <FeatureBlock
              title="Create Workouts & Programs"
              description="Design personalized workout plans and multi-week programs for each client. Build your exercise library once, then mix and match to create unlimited variations. Give your clients professional programming they can follow anywhere."
              reverse
              imageSrc="/images/solimg1.png"
              imageAnchor="bottom-right"
            />
            <FeatureBlock
              title="Track Client Progress Remotely"
              description="Monitor workouts, nutrition, measurements, and check-ins all in one dashboard. Get real-time insights into what's working and adjust programs on the fly—no more scattered spreadsheets or endless text threads."
              imageSrc="/images/sol2img.png"
              imageAnchor="center-left"
              imageWidth="80%"
            />
            <FeatureBlock
              title="Manage Payments & Finances"
              description="Send invoices, process payments, and track your income in one place. See which clients have paid, who's overdue, and how your business is performing. Spend less time chasing payments and more time training."
              reverse
              imageSrc="/images/sol3img.png"
              imageAnchor="bottom-right"
              imageWidth="75%"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex w-full flex-col items-center overflow-hidden">
          <div className="flex w-full flex-col items-center gap-4">
            <Image src="/images/glide-logo.svg" alt="Logo" width={66} height={18} />
            <h2 className="max-w-[600px] text-center text-[36px] font-medium leading-10 text-foreground">
              Reach your goals while you help your clients reach theirs
            </h2>
            <p className="max-w-[600px] text-center text-base leading-6 text-muted-foreground">
              Join our beta testing waitlist and upgrade your coaching business
            </p>
            <WaitlistButton className="h-10 rounded-full px-6">
              Try Glide for free
            </WaitlistButton>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

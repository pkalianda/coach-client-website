import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeatureBlock } from "@/components/feature-block";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="mx-auto flex max-w-[1440px] flex-col gap-20">
        {/* Hero Section */}
        <section className="mx-auto flex w-full max-w-[970px] flex-col items-center gap-16 overflow-hidden pt-[160px] pb-16">
          <div className="flex w-full max-w-[970px] flex-col items-center gap-5 pt-6 pb-10">
            <h1 className="max-w-[600px] text-center text-3xl font-medium leading-tight text-foreground md:text-4xl md:leading-[40px] lg:text-5xl lg:leading-[48px]">
              Client management made easier than your rest days
            </h1>
            <p className="max-w-[600px] text-center text-base leading-6 text-muted-foreground md:text-lg md:leading-7">
              Spend more time with your clients, less time managing. Build
              workouts, track progress, and handle payments—all in one place
            </p>
            <div className="flex items-center gap-2">
              <Button className="h-10 rounded-full px-6">
                Get started
              </Button>
              <Button variant="secondary" className="h-10 rounded-full px-6">
                See demo
              </Button>
            </div>
          </div>
          <div
            className="relative h-[300px] w-full overflow-hidden rounded-2xl bg-neutral-100 md:h-[450px] md:rounded-3xl lg:h-[615px]"
          />
        </section>

        <div className="mx-auto flex w-[970px] max-w-[970px] flex-col items-center gap-5">
          <h2 className="max-w-[600px] text-center text-2xl font-medium leading-8 text-foreground md:text-4xl md:leading-10">
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
          <div className="mx-auto flex max-w-[970px] flex-col gap-20 pb-16">
            <FeatureBlock
              title="Create Workouts & Programs"
              description="Design personalized workout plans and multi-week programs for each client. Build your exercise library once, then mix and match to create unlimited variations. Give your clients professional programming they can follow anywhere."
              imageSrc="/images/sol1-img.png"
            />
            <FeatureBlock
              title="Track Client Progress Remotely"
              description="Monitor workouts, nutrition, measurements, and check-ins all in one dashboard. Get real-time insights into what's working and adjust programs on the fly—no more scattered spreadsheets or endless text threads."
              reverse
              imageSrc="/images/sol2-img.png"
            />
            <FeatureBlock
              title="Manage Payments & Finances"
              description="Send invoices, process payments, and track your income in one place. See which clients have paid, who's overdue, and how your business is performing. Spend less time chasing payments and more time training."
              imageSrc="/images/sol1-img.png"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex flex-col items-center overflow-hidden">
          <div className="flex w-[970px] max-w-[970px] flex-col items-center gap-4">
            <Image src="/images/cta-icon.svg" alt="" width={81} height={81} />
            <h2 className="max-w-[600px] text-center text-[36px] font-medium leading-10 text-foreground">
              Reach your goals while you help your clients reach theirs
            </h2>
            <p className="max-w-[600px] text-center text-base leading-6 text-muted-foreground">
              Join our beta testing waitlist and upgrade your coaching business
            </p>
            <Button className="h-10 rounded-full px-6">
              Try Glide for free
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeatureBlock } from "@/components/feature-block";
import { HeroWorkoutCard } from "@/components/hero-workout-card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="mx-auto max-w-[1440px]">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-8 overflow-hidden px-4 pt-26 md:gap-10 md:px-8 lg:px-[200px] lg:pt-[136px]">
          <div className="flex w-full max-w-[616px] flex-col items-center gap-5">
            <h1 className="text-center text-3xl font-medium leading-tight text-foreground md:text-4xl md:leading-[40px] lg:text-5xl lg:leading-[48px]">
              Client management made easier than your rest days
            </h1>
            <p className="max-w-[577px] text-center text-base leading-6 text-muted-foreground md:text-lg md:leading-7">
              Spend more time with your clients, less time managing. Build
              workouts, track progress, and handle payments—all in one place
            </p>
            <div className="flex w-full max-w-[200px] flex-col items-center gap-1 md:max-w-[171px]">
              <Button className="h-10 w-full rounded-full px-6">
                Get started for free
              </Button>
              <span className="text-center text-sm text-muted-foreground">
                No credit card required
              </span>
            </div>
          </div>
          <div
            className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat md:h-[450px] md:rounded-3xl lg:h-[615px]"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
          >
            <div
              className="absolute inset-0 rounded-2xl md:rounded-3xl"
              style={{
                background: "linear-gradient(to bottom, rgba(255,255,255,0) 23.14%, rgba(255,255,255,0.4) 100%)",
              }}
            />
            <div className="relative z-10">
              <HeroWorkoutCard />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="flex flex-col gap-16 overflow-hidden px-4 pt-16 md:gap-24 md:px-8 md:pt-24 lg:gap-[143px] lg:px-[200px] lg:pt-[120px]">
          <div className="flex w-full max-w-[439px] flex-col gap-5">
            <h2 className="text-2xl font-medium leading-8 text-foreground md:text-4xl md:leading-10">
              Stop wasting time on never ending admin work
            </h2>
            <p className="text-base leading-6 text-muted-foreground">
              Design personalized workout plans and multi-week programs for each
              client. Build your exercise library once, then mix and match to
              create unlimited variations. Give your clients professional
              programming they can follow anywhere.
            </p>
          </div>

          <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
            <FeatureBlock
              title="Create Workouts & Programs"
              description="Design personalized workout plans and multi-week programs for each client. Build your exercise library once, then mix and match to create unlimited variations. Give your clients professional programming they can follow anywhere."
              videoSrc="/videos/solutionOne.mp4"
            />
            <FeatureBlock
              title="Track Client Progress Remotely"
              description="Monitor workouts, nutrition, measurements, and check-ins all in one dashboard. Get real-time insights into what's working and adjust programs on the fly—no more scattered spreadsheets or endless text threads."
              reverse
              videoSrc="/videos/solutionTwo.mp4"
            />
            <FeatureBlock
              title="Manage Payments & Finances"
              description="Send invoices, process payments, and track your income in one place. See which clients have paid, who's overdue, and how your business is performing. Spend less time chasing payments and more time training."
              videoSrc="/videos/solutionThree.mp4"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex flex-col items-center overflow-hidden px-4 py-16 md:px-8 md:py-24 lg:px-[200px] lg:py-[120px]">
          <div className="flex w-full flex-col items-center gap-3">
            <h2 className="max-w-[613px] text-center text-2xl font-medium leading-8 text-foreground md:text-3xl md:leading-9">
              Reach your goals along with your clients
            </h2>
            <p className="text-center text-base leading-6 text-muted-foreground">
              Join our beta testing waitlist and upgrade your coaching business
            </p>
            <Button className="h-10 rounded-full px-6">
              Get started for free
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

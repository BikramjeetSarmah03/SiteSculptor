import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pricingCards } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <section className="h-full w-full md:pt-36 mt-[-150px] md:mt-0 relative flex items-center justify-center flex-col">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <p className="text-xs sm:text-base">Run your agency, in one place</p>
        <div className="bg-gradient-to-tr from-primary to-secondary-foreground bg-clip-text relative">
          <h1 className="text-3xl sm:text-7xl font-bold text-center md:text-[150px] xl:text-[250px] text-transparent">
            Site Sculptor
          </h1>
        </div>

        <div className="flex justify-center items-center relative md:mt-20 mt-10 mx-2">
          <Image
            src={"/assets/preview.png"}
            alt="preview"
            height={1200}
            width={1200}
            className="rounded-t-2xl border-2 border-muted"
          />
          <div className="bottom-0 top-1/2 bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>

      <section
        id="pricing"
        className="flex justify-center items-center gap-4 md:!mt-20 mt-[-80px] flex-col">
        <h1 className="text-4xl text-center">Choose what fits you right</h1>
        <p className="text-muted-foreground text-center text-xs sm:text-base">
          Our straightforward pricing plans are tailored to meet your needs. If{" "}
          {`you're`} not <br /> ready to commit you can get started for free
        </p>
        <div className="flex justify-center gap-4 flex-wrap mt-6">
          {pricingCards.map((card, idx) => (
            // TODO: Wire up free product from stripe
            <Card
              key={idx}
              className={cn(
                "w-[250px] sm:w-[300px] flex flex-col justify-between",
                card.title === "Unlimited Saas" && "border-2 border-primary"
              )}>
              <CardHeader>
                <CardTitle
                  className={cn(
                    "",
                    card.title !== "Unlimited Saas" && "text-muted-foreground"
                  )}>
                  {card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">{card.price}</span>
                <span className="text-muted-foreground">/m</span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div>
                  {card.features.map((feature) => (
                    <div key={feature} className="flex gap-2 items-center">
                      <CheckIcon className="text-muted-foreground" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/agency?plan=${card.priceId}`}
                  className={cn(
                    "w-full text-center p-2 bg-primary rounded-md text-background",
                    card.title !== "Unlimited Saas" && "!bg-muted-foreground"
                  )}>
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { educators } from "@/data/educator";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const EducatorCarousel = () => {
  return (
    <section className="lg:w-5/6 md:w-11/12 w-full mx-auto text-white lg:p-20 px-4 rounded-lg ">
      <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-center">
        Guiding You to <span className="text-[#06D6A0]">Success!</span>
      </h1>
      <p className="text-center text-gray-400 mb-6">
        Honoring Educators Who Inspire Excellence. Recognizing the dedication of
        teachers who shape the future of academic success.
      </p>

      <AnimatedTestimonials testimonials={educators} />
      {/*<Carousel>
        <CarouselPrevious className="absolute sm:block hidden -left-32 top-1/2"></CarouselPrevious>

        <CarouselContent>
          {educators.map((educator) => (
            <CarouselItem key={educator.id} className="sm:p-4">
              <div className="bg-white/15 rounded-3xl border border-primary/20 shadow-lg shadow-primary/5 sm:p-12 p-6 flex flex-col md:flex-row items-center md:items-start text-center md:text-left h-full">
                <div className="mt-4 md:w-1/2 h-full flex flex-col md:ml-2 md:space-y-10 space-y-4">
                  <h1 className="2xl:text-5xl text-3xl sm:text-4xl font-extrabold text-[#06D6A0] ">
                    Educator Spotlight
                  </h1>
                  <p className="text-gray-200 text-base 2xl:text-2xl sm:text-lg font-medium">{`"${educator.quote}"`}</p>
                  <p className="text-[#06D6A0] 2xl:text-2xl text-lg sm:text-xl font-semibold">
                    – {educator.name}
                  </p>
                </div>

                <div className="md:w-1/2 w-full mt-4 h-full md:mt-0 flex items-center justify-center md:justify-end sm:mb-0 mb-4 md:mr-10">
                  <Image
                    className="rounded-full size-72 xl:size-96"
                    src={educator.image}
                    alt={educator.name}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext className="absolute sm:block hidden -right-28 top-1/2"></CarouselNext>
      </Carousel>*/}
    </section>
  );
};

export default EducatorCarousel;

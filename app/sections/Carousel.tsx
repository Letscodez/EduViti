import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { educators } from "@/data/main";

const EducatorCarousel = () => {
  return (
    <div className="w-5/6 mx-auto text-white p-10 rounded-lg">
      <h1 className="text-5xl font-bold mb-2 text-center">
        Guiding You to <span className="text-green-400">Success!</span>
      </h1>
      <p className="text-center text-gray-400 mb-6">
        Honoring Educators Who Inspire Excellence. Recognizing the dedication of
        teachers who shape the future of academic success.
      </p>

      <Carousel>
        {/* Left Arrow */}
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <button className="text-white bg-gray-700 p-2 rounded-full">←</button>
        </CarouselPrevious>

        <CarouselContent>
          {/* Mapping over educators array */}
          {educators.map((educator) => (
            <CarouselItem key={educator.id} className="p-4">
              <div className="bg-white/15 rounded-3xl shadow-lg p-12 flex flex-col md:flex-row items-center md:items-start text-center md:text-left h-full">
                {/* Left: Text Content */}
                <div className="md:w-1/2 h-1/3 flex flex-col  justify-evenly sm:space-y-6 space-y-12 space-x-12 mt-14">
                  <h1 className="text-4xl font-extrabold text-green-400 ml-11">
                    Educator Spotlight
                  </h1>
                  <p className="text-gray-200 text-lg font-medium">{`"${educator.quote}"`}</p>
                  <p className="text-green-400/90 text-xl font-semibold">
                    – {educator.name}
                  </p>
                </div>

                {/* Right: Educator Image */}
                <div className="md:w-1/2 mt-4 md:mt-0 md:ml-6 flex justify-center md:justify-end">
                  <Image
                    className="rounded-full mx-auto size-96"
                    src={educator.image}
                    alt={educator.name}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Right Arrow */}
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button className="text-white bg-gray-700 p-2 rounded-full">→</button>
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default EducatorCarousel;

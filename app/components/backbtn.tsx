"use client";
import { vector_svg } from "@/images/main";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 bg-primary text-white rounded-lg p-2 hover:opacity-80 transition-all duration-200"
    >
      <Image
        src={vector_svg}
        alt="back"
        width={30}
        height={20}
        className="rotate-180 w-6"
      />
      <span className="text-bg text-lg font-black">Back</span>
    </button>
  );
};

export default BackButton;

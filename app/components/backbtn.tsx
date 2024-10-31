import { vector_svg } from "@/images/main";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // Navigates to the previous page
  };

  return (
    <button
      onClick={handleBack}
      className="bg-primary pl-4 rotate-180 w-16 h-12 rounded-lg hover:opacity-80"
    >
      <Image src={vector_svg} alt="back" width={30} height={20} className="" />
    </button>
  );
};
export default BackButton;

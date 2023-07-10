import { ImGithub } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import Link from "next/link";
const SocialMedia = () => {
  return (
    <div className="flex flex-row gap-6">
      <Link href="https://www.github.com/leungwoo" target="_blank">
        <ImGithub
          size={20}
          className=" md:w-[28px] md:h-[28px] w-[20px] h-[20px] text-[#6F6F6F] hover:text-text-accentBlue"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/richardleungwoogabriel"
        target="_blank"
      >
        <AiOutlineLinkedin
          size={20}
          className=" md:w-[28px] md:h-[28px] w-[20px] h-[20px] text-[#6F6F6F] hover:text-text-accentBlue"
        />
      </Link>
    </div>
  );
};

export default SocialMedia;

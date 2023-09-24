import { ImGithub } from "react-icons/im";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import Link from "next/link";
const SocialMedia = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center md:py-[52px] md:px-[52px] py-[48px] px-[16px] w-full gap-4">
      <h3 className="flex text-[18px] font-normal text-[#778295] dark:text-[#F3F8FF]">
        ©2023 Richard. All rights reserved.
      </h3>
      <div className="flex flex-row gap-5">
        <Link href="https://www.github.com/leungwoo" target="_blank">
          <ImGithub
            size={20}
            className=" w-6 h-6 sm:w-8 sm:h-8 text-[#778295] dark:text-[#F3F8FF]  hover:text-text-accentBlue dark:hover:text-text-accentBlue hover:duration-500 transition"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/richardleungwoogabriel"
          target="_blank"
        >
          <AiOutlineLinkedin
            size={20}
            className=" w-6 h-6 sm:w-8 sm:h-8 text-[#778295] dark:text-[#F3F8FF]  hover:text-text-accentBlue dark:hover:text-text-accentBlue hover:duration-500 transition"
          />
        </Link>
        {/* <Link href="https://www.instagram.com/leungwoo" target="_blank">
          <AiOutlineInstagram
            size={20}
            className=" w-6 h-6 sm:w-8 sm:h-8 text-[#778295] dark:text-[#F3F8FF]  hover:text-text-accentBlue hover:duration-500 transition"
          />
        </Link>
        <Link href="https://www.twitter.com/Dariusleungwoo" target="_blank">
          <AiOutlineTwitter
            size={20}
            className=" w-6 h-6 sm:w-8 sm:h-8 text-[#778295] dark:text-[#F3F8FF]  hover:text-text-accentBlue hover:duration-500 transition"
          />
        </Link> */}
      </div>
    </div>
  );
};

export default SocialMedia;

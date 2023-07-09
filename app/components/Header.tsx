import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-row z-50 fixed">
      <Link href="/">
        <Image src="/public/LOGO.png" alt="next" width={100} height={100} />
      </Link>
      <div>
        <Link href="/">Home</Link>
        <Link href="/casestudies">Case Studies</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/">Resume</Link>
      </div>
    </div>
  );
};

export default Header;

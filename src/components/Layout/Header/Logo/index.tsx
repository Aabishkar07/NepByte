import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image className="w-56"
        src={`${getImagePrefix()}images/logo/main.png`}
        alt="logo"
        width={160}
        height={50}
        // style={{ width: "auto", height: "auto" }}
        quality={100}
      />
    </Link>
  );
};

export default Logo;

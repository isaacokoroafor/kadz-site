import Image from "next/image";
import Link from "next/link";

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center">
        <Image src="/logo.png" width={100} height={100} alt="Novare Logo" />
        {/* <span className="inline-block text-xl font-bold">
          {siteConfig.name}
        </span> */}
      </Link>
    </div>
  );
}

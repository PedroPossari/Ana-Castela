import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/">
      <Image
        src="/images/logo.png"
        alt="Ana Castelo"
        width={150} 
        height={150} 
        className="object-contain" 
      />
    </Link>
  );
}

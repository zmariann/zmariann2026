import Image from "next/image";

export function HeroImg() {
  return (
    <Image
      src="/projects/ctrlaltcrip/hero.jpg"
      alt="CTRL+ALT+CRIP projekt fotó"
      width={1410}
      height={940}
      priority
      className="h-auto w-full"
    />
  );
}

export function Img0102() {
  return (
    <>
      <Image
        src="/projects/ctrlaltcrip/ctrlaltcrip-01.jpg"
        alt="CTRL+ALT+CRIP projekt fotó"
        width={659}
        height={988}
        priority
        className="h-auto w-full"
      />

      <Image
        src="/projects/ctrlaltcrip/ctrlaltcrip-02.jpg"
        alt="CTRL+ALT+CRIP projekt fotó"
        width={661}
        height={991}
        priority
        className="h-auto w-full"
      />
    </>
  );
}

export function Img03() {
  return (
    <Image
      src="/projects/ctrlaltcrip/ctrlaltcrip-03.jpg"
      alt="CTRL+ALT+CRIP projekt fotó"
      width={843}
      height={1264}
      priority
      className="h-auto w-full"
    />
  );
}

export function Img04() {
  return (
    <Image
      src="/projects/ctrlaltcrip/ctrlaltcrip-04.jpg"
      alt="CTRL+ALT+CRIP projekt fotó"
      width={1405}
      height={2107}
      priority
      className="h-auto w-full"
    />
  );
}

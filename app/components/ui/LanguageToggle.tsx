import Link from "next/link";

export default function LanguageToggle() {
  return (
    <div className="flex items-center gap-2 text-carrot">
      <Link href="/hu" className="font-medium text-base" aria-current="page">
        HU
      </Link>

      <span aria-hidden="true">|</span>

      <Link
        href="/en"
        className="font-bold"
      >
        EN
      </Link>
    </div>
  );
}

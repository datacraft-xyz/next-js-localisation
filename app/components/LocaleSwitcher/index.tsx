"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/app/hooks/useTranslation";
import { defaultLocale, locales } from "../../contants";

const LocaleSwitcher: FC = () => {
  const { locale } = useTranslation();
  const pathname = usePathname();
  return (
    <ul>
      {locales.map((l) => (
        <li key={l.locale}>
          <Link
            href={`/${l.locale}${
              locale === defaultLocale
                ? pathname
                : `/${pathname.split("/").slice(2).join("/")}`
            }`}
          >
            {l.locale}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LocaleSwitcher;

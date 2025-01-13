import { EnumLocale } from '../enums';
import { defaultLocale } from '../contants';

export default function localisedPath(locale: EnumLocale, path: string) {
  return locale === defaultLocale ? path : `/${locale}${path}`;
}

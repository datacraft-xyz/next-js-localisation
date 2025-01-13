import { EnumLocale } from "../enums";

const locales: any = {
  [EnumLocale.EN]: () =>
    import(`../locales/${EnumLocale.EN}.json`).then((module) => module.default),
  [EnumLocale.ES]: () =>
    import(`../locales/${EnumLocale.ES}.json`).then((module) => module.default),
};

export const getLocale = async (locale: EnumLocale) => locales[locale]?.();

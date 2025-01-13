import { EnumLocale } from "../enums";
import { getLocale } from "./locales";
import LocaleSwitcher from "../components/LocaleSwitcher";

interface Params {
  locale: EnumLocale;
}

interface Props {
  params: Promise<Params>;
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const translate = await getLocale(locale);

  return (
    <main>
      <h1>{translate.title}</h1>
      <h2>Locale: {locale.toUpperCase()}</h2>
      <h3>Switcher</h3>
      <LocaleSwitcher />
    </main>
  );
}

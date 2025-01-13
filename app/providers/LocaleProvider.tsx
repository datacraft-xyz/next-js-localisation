'use client';

import { createContext, FC, PropsWithChildren } from 'react';
import { EnumLocale } from '../enums';
import { defaultLocale } from '../contants';

interface Props {
  t: Record<string, any>;
  locale: EnumLocale;
};

export const LocaleContext = createContext<Props>({ t: {}, locale: defaultLocale });

const LocaleProvider: FC<PropsWithChildren<Props>> = ({ children, t, locale }) => {
  return (
    <LocaleContext.Provider value={{ t, locale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;

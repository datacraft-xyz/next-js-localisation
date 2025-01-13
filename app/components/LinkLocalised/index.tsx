'use client';

import { FC, ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/app/hooks/useTranslation';
// import utils
import localisedPath from '@/app/utils/localisedPath';

interface Props extends ComponentPropsWithoutRef<'a'> {
  href: string;
}

const LinkLocalised: FC<Props> = ({ children, href, ...rest }) => {
  const { locale } = useTranslation();
  return (
    <Link {...rest} href={localisedPath(locale, href)}>
      {children}
    </Link>
  );
};

export default LinkLocalised;

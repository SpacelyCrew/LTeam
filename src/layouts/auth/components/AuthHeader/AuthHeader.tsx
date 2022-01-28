import * as React from 'react';
import Link from 'next/link';

import { APP_TITLE } from '@/modules/core/meta/meta';

import * as Text from '@/common/components/system/Text';
import { Container } from '@/common/components/system/Container';

import * as S from './styled';

export type AuthHeaderProps = unknown;

export const AuthHeader = (): JSX.Element => {
  return (
    <S.AuthHeaderRoot>
      <Container>
        <Link href="/" passHref>
          <Text.Paragraph variant="h6" component="a">{APP_TITLE}</Text.Paragraph>
        </Link>
      </Container>
    </S.AuthHeaderRoot>
  );
};

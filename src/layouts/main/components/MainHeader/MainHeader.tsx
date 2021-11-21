import * as React from 'react';
import Link from 'next/link';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';
import { useColorMode } from 'theme-ui';
import Timeago from 'timeago-react';
import { useTranslation } from 'next-i18next';
import * as timeago from 'timeago.js';
import ru from 'timeago.js/lib/lang/ru';

import { APP_TITLE } from '@/modules/core/meta/meta';

import * as Text from '@/common/components/system/Text';
import { Stack } from '@/common/components/system/Stack';
import { Container } from '@/common/components/system/Container';
import { IconButton } from '@/common/components/system/IconButton';
import { DisplayOnBrowserMount } from '@/common/components/rehydration/DisplayOnBrowserMount';

import * as S from './styled';

timeago.register('ru', ru);

export type MainHeaderProps = unknown;

export const MainHeader = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Container>
      <S.MainHeaderRoot>
        <Link href="/" passHref>
          <Text.Heading variant="h6" component="a">{APP_TITLE}</Text.Heading>
        </Link>

        <DisplayOnBrowserMount>
          <Stack alignItems="center" space={3}>
            <Text.Heading variant="subtitle2" component="span">
              {t('lastUpdate')}:
              {' '}
              <Timeago
                datetime={process.env.NEXT_PUBLIC_APP_BUILD_TIME}
                locale={i18n.language}
              />
            </Text.Heading>

            <IconButton
              color="gray"
              type="button"
              onClick={() => setColorMode(colorMode === 'dark' ? 'default' : 'dark')}
            >
              {colorMode === 'default' ? <RiSunLine /> : <RiMoonLine />}
            </IconButton>
          </Stack>
        </DisplayOnBrowserMount>
      </S.MainHeaderRoot>
    </Container>
  );
};

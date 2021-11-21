import * as React from 'react';
import { ColorProps, TypographyProps } from 'styled-system';

import { SxProp } from '@/modules/core/css-in-js/sx';
import { OverridableComponent } from '@/modules/core/react/types/OverridableComponent';
import { captions } from '@/common/design/tokens/typography';

import * as S from './styled';

type SystemProps = SxProp & ColorProps & TypographyProps;

export interface CaptionProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>, SystemProps {
  /**
   * The variant of the Caption.
   */
  variant?: keyof typeof captions;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export interface CaptionTypeMap<P = {}, D extends React.ElementType = 'span'> {
  props: P & CaptionProps;
  defaultComponent: D;
}

export const Caption: OverridableComponent<CaptionTypeMap> = React.forwardRef((props, ref): JSX.Element => {
  const {
    children,
    variant = 'caption1',
    component,
    ...other
  } = props;

  return (
    // @ts-expect-error color attr type error
    <S.CaptionRoot as={component} variant={variant} {...other} ref={ref}>{children}</S.CaptionRoot>
  );
});

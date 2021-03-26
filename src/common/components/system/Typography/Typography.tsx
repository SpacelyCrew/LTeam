/* eslint-disable prefer-arrow-callback */
import React, {
  ReactNode,
  ElementType,
  HTMLAttributes,
  forwardRef,
} from 'react';

import { OverridableComponent } from '@/modules/core/react/types/OverridableComponent';

import * as S from './styled';

type TypoAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify';

export interface TypographyProps extends HTMLAttributes<ElementType> {
  /**
   * The content of the button.
   */
  children?: ReactNode;
  /**
   * Set the text-align on the component.
   */
  align?: TypoAlign;
  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom?: boolean;
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   */
  noWrap?: boolean;
  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph?: boolean;
  /**
   * The variant to use.
   */
  variant?: S.TypoVariant;
  /**
   * The mapped variants.
   */
  variantMapping?: Partial<Record<S.TypoVariant, string>>;
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color?: 'initial' | 'inherit' | 'primary' | 'textPrimary' | 'textSecondary' | 'error';
  /**
   * Controls the display type
   */
  display?: 'initial' | 'block' | 'inline';
}

const defaultVariantMapping: Record<S.TypoVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  subtitle1: 'h6',
  subtitle2: 'h6',
  subtitle3: 'h6',
  subtitle4: 'h6',
  subtitle5: 'h6',
  button: 'span',
  overline: 'span',
  body1: 'p',
  body2: 'p',
  caption1: 'span',
  caption2: 'span',
};

export interface TypographyTypeMap<P = {}, D extends React.ElementType = 'h1'> {
  props: P & TypographyProps;
  defaultComponent: D
}

const Typography: OverridableComponent<TypographyTypeMap> = forwardRef(function Typography(props, ref) {
  const {
    children,
    align = 'inherit',
    color = 'inherit',
    display = 'initial',
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = 'body1',
    variantMapping = defaultVariantMapping,
    ...other
  } = props;

  const Component = component
  || (paragraph ? 'p' : variantMapping[variant])
  || 'span';

  return (
    <S.Typo
      as={Component}
      className={className}
      align={align}
      color={color}
      display={display}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      paragraph={paragraph}
      variant={variant}
      ref={ref}
      {...other}
    >
      {children}
    </S.Typo>
  );
});

export default Typography;

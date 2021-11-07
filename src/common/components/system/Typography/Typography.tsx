/* eslint-disable prefer-arrow-callback */
import * as React from 'react';
import { SpaceProps } from 'styled-system';

import { OverridableComponent } from '@/modules/core/react/types/OverridableComponent';

import * as S from './styled';

export interface TypographyProps extends SpaceProps {
  /**
   * The content of the button.
   */
  children?: React.ReactNode;
  /**
   * Set the text-align on the component.
   */
  align?: React.CSSProperties['textAlign'];
  /**
   * Set the font-weight on the component.
   */
  fontWeight?: S.TypoWeight;
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   */
  noWrap?: boolean;
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
  color?: string | 'initial' | 'inherit' | 'primary' | 'secondary' | 'disabled' | 'success' | 'warning' | 'info' | 'error';
  /**
   * Controls the display type
   */
  display?: React.CSSProperties['display'];
}

export const defaultVariantMapping: Record<S.TypoVariant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  button: 'span',
  overline: 'span',
  body1: 'p',
  body2: 'p',
  caption: 'span',
};

// eslint-disable-next-line @typescript-eslint/ban-types
export interface TypographyTypeMap<P = {}, D extends React.ElementType = 'h1'> {
  props: P & TypographyProps;
  defaultComponent: D
}

/**
 * Use Typography component to present your design and content as clearly and efficiently as possible.
 */
export const Typography: OverridableComponent<TypographyTypeMap> = React.forwardRef(function Typography(props, ref) {
  const {
    children,
    align = 'inherit',
    color = 'inherit',
    display = 'initial',
    className,
    component,
    noWrap = false,
    variant = 'body1',
    variantMapping = defaultVariantMapping,
    ...other
  } = props;

  const Component = component
  || variantMapping[variant]
  || 'span';

  return (
    <S.Typo
      as={Component as React.ElementType}
      className={className}
      align={align}
      color={color}
      display={display}
      noWrap={noWrap}
      variant={variant}
      ref={ref}
      {...other}
    >
      {children}
    </S.Typo>
  );
});

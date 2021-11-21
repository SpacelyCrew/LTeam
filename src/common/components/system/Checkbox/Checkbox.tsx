/* eslint-disable prefer-arrow-callback */
import * as React from 'react';

import { CheckboxBase, CheckboxBaseProps } from '../CheckboxBase';
import * as Text from '../Text';

import * as S from './styled';

export interface CheckboxProps extends CheckboxBaseProps {
  /**
   * The label of the checkbox
   */
  label?: React.ReactNode;
}

export const Checkbox = React.forwardRef(function Checkbox(props: CheckboxProps, ref: React.ForwardedRef<HTMLLabelElement>): JSX.Element {
  const {
    label,
    checked,
    disabled = false,
    color = 'primary',
    inputRef,
  } = props;

  return (
    <S.CheckboxRoot disabled={disabled} ref={ref}>
      <CheckboxBase checked={checked} disabled={disabled} color={color} inputRef={inputRef} />

      {label && (
        <Text.Paragraph
          color={disabled ? 'text.disabled' : 'text.primary'}
          sx={{
            ml: 2,
          }}
        >
          {label}
        </Text.Paragraph>
      )}
    </S.CheckboxRoot>
  );
});

/**
 * @jest-environment jsdom
 */

import React, { ReactChild, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';

import { VisuallyHidden } from '../VisuallyHidden';

describe('<VisuallyHidden />', () => {
  const children: ReactChild = 'VisuallyHidden';

  it("renders as any HTML element", async () => {
    render(
      <VisuallyHidden component="div">{children}</VisuallyHidden>
    );

    const visuallyHidden = screen.getByText(children);
    expect(visuallyHidden.tagName).toBe("DIV");
  });
});

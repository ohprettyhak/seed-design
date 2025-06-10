"use client";

import { Checkmark } from "./checkbox";
import * as React from "react";

export interface CheckboxProps extends SeedCheckbox.RootProps {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

  rootRef?: React.Ref<HTMLLabelElement>;

  label?: React.ReactNode;
}

/**
 * @see https://seed-design.io/react/components/checkbox
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ inputProps, rootRef, label, variant = "square", ...otherProps }, ref) => {
    return (
      <SeedCheckbox.Root ref={rootRef} variant={variant} {...otherProps}>
        <Checkmark variant={variant} />
        <SeedCheckbox.Label>{label}</SeedCheckbox.Label>
        <SeedCheckbox.HiddenInput ref={ref} {...inputProps} />
      </SeedCheckbox.Root>
    );
  },
);
Checkbox.displayName = "Checkbox";

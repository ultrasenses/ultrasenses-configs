import React, {
  forwardRef,
  memo,
  ReactElement,
  ButtonHTMLAttributes,
} from "react";

import { Button as StyledButton, ButtonContent } from "./Button.style";
import { ButtonWidthVariant, ButtonVariant, ButtonSize } from "./Button.types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  widthVariant?: ButtonWidthVariant;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, ...props }, ref): ReactElement | null => {
      return (
        <StyledButton
          type="button"
          {...props}
          ref={ref}
          data-component="button"
        >
          <ButtonContent>{children}</ButtonContent>
        </StyledButton>
      );
    },
  ),
);

export default Button;

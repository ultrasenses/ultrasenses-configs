import styled, { css } from "styled-components";
import { colors } from "./Button.colors";
import { typography } from "./Button.typography";
import { ButtonSize, ButtonWidthVariant, ButtonVariant } from "./Button.types";

interface Props {
  widthVariant?: ButtonWidthVariant;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = styled.button<Props>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;

  border: none;
  cursor: pointer;
  overflow: hidden;

  max-width: 100%;

  transition: color 0.3s,
    background-color 0.3s,
    box-shadow 0.3s,
    border-color 0.3s;

  border-radius: 8px;
  user-select: none;

  ${({ size }) =>
    size === "S" &&
    css`
      height: 32px;
      padding: 0 16px;
      ${typography.buttonS}
    `}

  ${({ size }) =>
    (size === "M" || size === undefined) &&
    css`
      height: 40px;
      padding: 0 24px;
      ${typography.buttonM}
    `}

  ${({ size }) =>
    size === "L" &&
    css`
      height: 48px;
      padding: 0 24px;
      ${typography.buttonL}
    `}

  &:focus {
    box-shadow: 0 0 0 2px ${colors.states.button.focusOutline};
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({ variant }) =>
    (variant === "filled" || variant === undefined) &&
    css`
      color: ${colors.text.white};
      background-color: ${colors.states.button.filled.default};

      &:disabled {
        background-color: ${colors.states.button.filled.disable};
        color: ${colors.text.gray};
      }

      &:not(:disabled):hover {
        background-color: ${colors.states.button.filled.hover};
      }

      &:not(:disabled):active {
        background-color: ${colors.states.button.filled.press};
      }
    `}

  ${({ variant }) =>
    variant === "outline" &&
    css`
      border: 1px solid ${colors.states.button.outline.default};
      background: transparent; /* TODO: transparent? */
      color: ${colors.accent.blue};

      &:disabled {
        border-color: ${colors.states.button.outline.disable};
        color: ${colors.states.button.outline.disable};
      }

      &:not(:disabled):hover {
        border-color: ${colors.states.button.outline.hover};
      }

      &:not(:disabled):active {
        border-color: ${colors.states.button.outline.press};
      }
    `}

  ${({ variant }) =>
    variant === "text" &&
    css`
      border: none;
      background: transparent;
      color: ${colors.accent.blue};
      padding: 0px;
      height: auto;

      &:focus {
        box-shadow: none;
        color: ${colors.states.button.filled.hover};
      }

      &:disabled {
        color: ${colors.text.gray};
      }

      &:not(:disabled):hover {
        color: ${colors.states.button.filled.hover};
      }

      &:not(:disabled):active {
        color: ${colors.states.button.filled.press};
      }
    `}

  ${({ widthVariant }) =>
    widthVariant === "fix" &&
    css`
      display: inline-flex;
      min-width: 160px;
      max-width: 160px;
    `}

  ${({ widthVariant, size }) =>
    widthVariant === "fix" &&
    size === "L" &&
    css`
      min-width: 189px;
      max-width: 189px;
    `}

  ${({ widthVariant }) =>
    widthVariant === "full" &&
    css`
      display: flex;
      width: 100%;
    `}
`;

export const ButtonContent = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

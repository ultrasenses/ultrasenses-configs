declare class BaseTypography<N extends string> {
  protected nominal: N;
}

type TypographyType<T, N extends string> = T & BaseTypography<N>;

export type TypographyModel = TypographyType<"TypographyType", string>;

const baseFontFamily = "Suisse, sans-serif";

const createStyleTypography = (
  fontFamily: string,
  size: number,
  lineHeight: number,
  weight: string | number = 400,
  letterSpacing = 0,
) =>
  `font: ${weight} ${size}px/${lineHeight}px ${fontFamily};
  ${letterSpacing ? `letter-spacing: ${letterSpacing}px;` : ""}
  `.trim();

const createTypography = createStyleTypography.bind(null, baseFontFamily);

const adaptive = (
  desktop: string,
  tablet?: string,
  mobile?: string,
): TypographyModel =>
  `
  ${desktop}
  ${`@media (max-width: 1024px) {${tablet || desktop}}`}
  ${`@media (max-width: 600px) {${mobile || tablet || desktop}}`}
  `.trim() as TypographyModel;

const types = {
  bold64: createTypography(64, 72, 700),
  medium64: createTypography(64, 72, 600),
  regular64: createTypography(64, 72, 400),

  bold52: createTypography(52, 64, 700),
  medium52: createTypography(52, 64, 600),
  regular52: createTypography(52, 64, 400),

  bold40: createTypography(40, 48, 700),
  medium40: createTypography(40, 48, 600),
  regular40: createTypography(40, 48, 400),

  bold32: createTypography(32, 40, 700),
  medium32: createTypography(32, 40, 600),
  regular32: createTypography(32, 40, 400),

  bold24: createTypography(24, 32, 700),
  medium24: createTypography(24, 32, 600),
  regular24: createTypography(24, 32, 400),

  bold20: createTypography(20, 28, 700),
  medium20: createTypography(20, 28, 600),
  regular20: createTypography(20, 28, 400),

  bold18: createTypography(18, 22, 700),
  medium18: createTypography(18, 22, 600),
  regular18: createTypography(18, 22, 400),

  bold16: createTypography(16, 24, 700),
  medium16: createTypography(16, 24, 600),
  regular16: createTypography(16, 24, 400),

  bold14: createTypography(14, 20, 700),
  medium14: createTypography(14, 20, 600),
  regular14: createTypography(14, 20, 400),

  bold12: createTypography(12, 20, 700),
  medium12: createTypography(12, 20, 600),
  regular12: createTypography(12, 20, 400),

  bold10: createTypography(10, 20, 700),
  medium10: createTypography(10, 20, 600),
  regular10: createTypography(10, 20, 400),
};

export const typography = {
  ...types,

  head: {
    bold: adaptive(types.bold64, types.bold52, types.bold40),
    medium: adaptive(types.medium64, types.medium52, types.medium40),
    regular: adaptive(types.regular64, types.regular52, types.regular40),
  },

  adaptive52: {
    bold: adaptive(types.bold52),
    medium: adaptive(types.medium52),
    regular: adaptive(types.regular52),
  },

  adaptive40: {
    bold: adaptive(types.bold40),
    medium: adaptive(types.medium40),
    regular: adaptive(types.regular40),
  },

  adaptive32: {
    bold: adaptive(types.bold32),
    medium: adaptive(types.medium32),
    regular: adaptive(types.regular32),
  },

  adaptive24: {
    bold: adaptive(types.bold24),
    medium: adaptive(types.medium24),
    regular: adaptive(types.regular24),
  },

  adaptive20: {
    bold: adaptive(types.bold20),
    medium: adaptive(types.medium20),
    regular: adaptive(types.regular20),
  },

  adaptive18: {
    bold: adaptive(types.bold18),
    medium: adaptive(types.medium18),
    regular: adaptive(types.regular18),
  },

  adaptive16: {
    bold: adaptive(types.bold16),
    medium: adaptive(types.medium16),
    regular: adaptive(types.regular16),
  },

  adaptive14: {
    bold: adaptive(types.bold14),
    medium: adaptive(types.medium14),
    regular: adaptive(types.regular14),
  },

  adaptive12: {
    bold: adaptive(types.bold12),
    medium: adaptive(types.medium12),
    regular: adaptive(types.regular12),
  },

  adaptive10: {
    bold: adaptive(types.bold10),
    medium: adaptive(types.medium10),
    regular: adaptive(types.regular10),
  },
};

import { round, valueArrayToObject } from './helpers';

export type BreakpointOptions = 'small' | 'medium' | 'large' | 'default';
export type Breakpoints = { [k in BreakpointOptions]: string | undefined };
export type FontSizes = { [k in BreakpointOptions]: number } | number;
export type Spaces = { [k in BreakpointOptions]: number } | number;

export interface Tokens {
  space: Spaces;
  fontSizes: FontSizes;
  breakpoints: Breakpoints;
  colors: { [color: string]: string };
  [k: string]: any;
}

const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightDark = 700;

const baseSmallFontSize = 14;
const baseLargeFontSize = 16;
const smallLineHeight = 1.15;
const largeLineHeight = 1.45;

export const scales = {
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augmentedFourth: 1.414,
  perfectFifth: 1.5,
  goldenRatio: 1.618,
};

const breakpoints: Breakpoints = { default: undefined, small: '40em', medium: '52em', large: '64em' };

const buildResponsiveTypography = (baseOptions: { scale: number; baseSizes: Partial<FontSizes> }) => (fontOptions: {
  scaleStep: number;
  weight: number;
}) => {
  const { scale, baseSizes } = baseOptions;
  const { scaleStep, weight } = fontOptions;
  const reponsiveValues = Object.keys(baseSizes).reduce(
    (acc, breakpoint) => {
      const baselineFontSize = (baseSizes as any)[breakpoint];
      const fontSize = Math.pow(scale, scaleStep) * baselineFontSize;
      return {
        fontSize: {
          ...acc.fontSize,
          [breakpoint]: fontSize,
        },
        lineHeight: {
          ...acc.lineHeight,
          [breakpoint]: scaleStep > 0 ? smallLineHeight : largeLineHeight,
        },
      };
    },
    { fontSize: {}, lineHeight: {} },
  );

  return {
    fontSize: reponsiveValues.fontSize,
    fontWeight: weight,
    lineHeight: reponsiveValues.lineHeight,
  };
};

const baseTypography = buildResponsiveTypography({
  scale: scales.majorThird,
  baseSizes: { default: baseSmallFontSize, medium: baseLargeFontSize },
});

const fontSizes = valueArrayToObject([12, 14, 16, 20, 24, 34, 48, 60, 96], 'f'); // f12, f14, ...
const space = valueArrayToObject([0, 4, 8, 16, 20, 32], 's'); // s0, s4, s8, ...

const TextVariants = {
  h1: {
    ...baseTypography({
      scaleStep: 5,
      weight: fontWeightDark,
    }),
    margin: '0 0 1.25em 0',
  },
  h2: {
    ...baseTypography({
      scaleStep: 4,
      weight: fontWeightDark,
    }),
    margin: '0 0 1.25em 0',
  },
  h3: {
    ...baseTypography({
      scaleStep: 3,
      weight: fontWeightDark,
    }),
    margin: '0 0 1.25em 0',
  },
  h4: {
    ...baseTypography({
      scaleStep: 2,
      weight: fontWeightDark,
    }),
    margin: '0 0 1.25em 0',
  },
  h5: {
    ...baseTypography({
      scaleStep: 1,
      weight: fontWeightDark,
    }),
    margin: '0 0 1.25em 0',
  },
  h6: {
    ...baseTypography({
      scaleStep: 0,
      weight: fontWeightDark,
    }),
    margin: '0 0 1.25em 0',
  },
  subtitle: {
    ...baseTypography({
      scaleStep: 1,
      weight: fontWeightLight,
    }),
    margin: '0 0 1.25em 0',
  },
  bodyPrimary: {
    ...baseTypography({
      scaleStep: 0,
      weight: fontWeightRegular,
    }),
    margin: '0 0 1.25em 0',
  },
  bodySecondary: {
    ...baseTypography({
      scaleStep: -1,
      weight: fontWeightRegular,
    }),
    margin: '0 0 1.25em 0',
  },
};

const fontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
const tokens: Tokens = {
  fontFamily,
  fontSizes,
  space,
  breakpoints,
  colors: {
    white: '#FFF',
    primary: '#6C6C9B',
    yellow: '#FFEB66',
    shade: '#404052',
    shade20: '#6c6c9bcc',
  },
  textStyles: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
    },
  },
  Button: {
    fontFamily,
    cursor: 'pointer',
    textTransform: 'uppercase',
    transition: 'background 150ms ease-in',
    ...baseTypography({
      scaleStep: -1,
      weight: fontWeightDark,
    }),
    ':hover': {
      backgroundColor: 'shade20',
    },
  },
  ButtonVariants: {
    primary: {
      backgroundColor: 'primary',
      color: 'white',
    },
    secondary: {
      color: 'primary',
    },
  },
  Box: {},
  BoxVariants: {},
  Text: {
    fontFamily,
  },
  TextVariants,
};

export default tokens;

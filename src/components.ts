import styled from 'styled-components';
import {
  space,
  color,
  width,
  height,
  flex,
  order,
  alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  fontSize,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  textStyle,
  opacity,
} from 'styled-system';

import { variant, themed } from './helpers';
import { BoxProps, FlexBoxProps, TypographyProps, ButtonProps, ImageProps } from './types';

export const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
  },
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  variant({ key: 'BoxVariants' }),
  themed('Box'),
);

export const FlexBox = styled(Box)<FlexBoxProps>(
  {
    display: 'flex',
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  themed('FlexBox'),
);

export const Text = styled(Box)<TypographyProps>(
  {},
  fontFamily,
  fontWeight,
  textAlign,
  textStyle,
  lineHeight,
  letterSpacing,
  themed('Text'),
  variant({ key: 'TextVariants' }),
);
Text.defaultProps = {
  as: 'p',
};

export const Link = styled(Box)(themed('Link'));
Link.defaultProps = {
  as: 'a',
  color: 'blue',
};

export const Button = styled(Box)<ButtonProps>(
  {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  variant({ key: 'ButtonVariants' }),
  themed('Button'),
);
Button.defaultProps = {
  as: 'button',
  variant: 'primary',
  py: 's20',
  px: 's50',
};

export const Image = styled(Box)<ImageProps>(
  {
    maxWidth: '100%',
    height: 'auto',
  },
  height,
  borderRadius,
  themed('Image'),
);

Image.defaultProps = {
  as: 'img',
  m: 0,
};

export const Card = styled(Box)(
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  variant({ key: 'CardVariants' }),
  themed('Card'),
);

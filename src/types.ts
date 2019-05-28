import React from 'react';
import {
  SpaceProps,
  WidthProps,
  FontSizeProps,
  ColorProps,
  OrderProps,
  AlignSelfProps,
  FlexWrapProps,
  JustifyContentProps,
  FlexDirectionProps,
  AlignItemsProps,
  FontFamilyProps,
  FontWeightProps,
  TextAlignProps,
  LineHeightProps,
  LetterSpacingProps,
  BordersProps,
  FlexProps,
  BorderRadiusProps,
  ButtonStyleProps,
  BorderColorProps,
  HeightProps,
  BoxShadowProps,
  BackgroundImageProps,
  BackgroundPositionProps,
  BackgroundSizeProps,
  BackgroundRepeatProps,
  OpacityProps,
  TextStyleProps,
} from 'styled-system';

export interface ThemeProps {
  theme: { [k: string]: any };
}

export interface PolymorphicProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

export interface BaseStyledSystemProps extends ThemeProps, PolymorphicProps {}

export type BoxProps = BaseStyledSystemProps &
  SpaceProps &
  WidthProps &
  FontSizeProps &
  ColorProps &
  FlexProps &
  OrderProps &
  AlignSelfProps;

export type FlexBoxProps = BaseStyledSystemProps &
  FlexWrapProps &
  FlexDirectionProps &
  AlignItemsProps &
  JustifyContentProps;

export type TypographyProps = BaseStyledSystemProps &
  FontFamilyProps &
  FontWeightProps &
  TextAlignProps &
  TextStyleProps &
  LineHeightProps &
  LetterSpacingProps;

export type ButtonProps = BaseStyledSystemProps &
  SpaceProps &
  FontWeightProps &
  BordersProps &
  BorderColorProps &
  BorderRadiusProps &
  ButtonStyleProps;

export type ImageProps = BaseStyledSystemProps & HeightProps & BorderRadiusProps;

export type CardProps = BaseStyledSystemProps &
  BordersProps &
  BorderColorProps &
  BorderRadiusProps &
  BoxShadowProps &
  BackgroundImageProps &
  BackgroundSizeProps &
  BackgroundPositionProps &
  BackgroundRepeatProps &
  OpacityProps;

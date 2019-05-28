import * as styledSystem from 'styled-system';
import { ThemeProps } from './types';

export const round = (value: number) => {
  return Math.round(value * 1e5) / 1e5;
};

export const valueArrayToObject = (array: any[], prefix: string | null = null) =>
  array.reduce(
    (acc, entry, idx) => ({
      ...acc,
      [prefix ? `${prefix}${entry}` : idx]: entry,
    }),
    {},
  );

// based on https://github.com/developit/dlv
export const get = (obj: any, key: string = '', def: any, p = 0, undef = undefined) => {
  const lKey = key.split ? key.split('.') : [key];
  for (let p = 0; p < lKey.length; p++) {
    obj = obj ? obj[lKey[p]] : undef;
  }
  return obj === undef ? def : obj;
};

// loosely based on deepmerge package
export const merge = (a: { [k: string]: any }, b: { [k: string]: any }) => {
  const result: { [k: string]: any } = {};
  for (const key in a) {
    result[key] = a[key];
  }
  for (const key in b) {
    if (!a[key] || typeof a[key] !== 'object') {
      result[key] = b[key];
    } else {
      result[key] = merge(a[key], b[key]);
    }
  }
  return result;
};

export const resolveStyledSystemStyles = (theme: { [k: string]: any }, values: { [k: string]: any }) => {
  if (!values) {
    return null;
  }
  return Object.keys(values).reduce((acc, valueName) => {
    const styler = (styledSystem as any)[valueName];
    if (styler) {
      const propStyles = styler({
        theme,
        [valueName]: values[valueName],
      });
      return merge(acc, propStyles);
    }
    if (values && typeof values[valueName] === 'object') {
      const styles = resolveStyledSystemStyles(theme, values[valueName]) as any;
      return merge(acc, { [valueName]: styles });
    }
    return merge(acc, { [valueName]: values[valueName] });
  }, {});
};

export const variant = ({ key, prop = 'variant' }: { key: string; prop?: string }) => {
  const fn = (props: any) => {
    const variantValues = get(props.theme, [key, props[prop]].join('.'), null);
    if (variantValues === null) {
      return null;
    }
    return resolveStyledSystemStyles(props.theme, variantValues);
  };
  return fn;
};

export const themed = (key: string) => (props: ThemeProps) => resolveStyledSystemStyles(props.theme, props.theme[key]);

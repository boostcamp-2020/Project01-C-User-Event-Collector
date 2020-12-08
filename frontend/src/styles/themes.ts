import baseStyled, { css, ThemedStyledInterface } from 'styled-components';

const sizes = {
  desktop: 1167,
  tablet: 778,
  phone: 576,
};

// Iterate through the sizes and create a media template
const media = {
  desktop: args => undefined,
  tablet: args => undefined,
  phone: args => undefined,
};

Object.keys(sizes).reduce((acc, label: string) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(args.shift(), ...args)}
    }
  `;
  return acc;
}, media);

const color = {
  blue: '#2054ae',
  pink: '#c43683',
  black: '#000000',
  white: '#ffffff',
  darkgrey: '#222',
  lightgrey: '#f2f2f2',
  grey: '#555',
  mainBGColor: '#fbfbfb',
  headerNavColor: '#cccccc',
  highlight: '#ff1350',
  textColor: '#232323',
  greyFontColor: '#999',
  drakFontColor: '#232323',
  borderColor: '#e2e2e2',
};

const size = {
  sidebarWidth: '225px',
  bigCarouselContentWidth: '310px',
  smallCarouselContentWidth: '180px',
};

const font = {
  plain: `
  font-size: 14px;
  color: ${color.drakFontColor};
  `,
  sub: `
  font-size: 13px;
  color: ${color.greyFontColor};
  `,
  boldTitle: `
  font-size: 30px;
  font-weight: 700;
  color: ${color.drakFontColor};
  `,
  secTitle: `
  font-size: 17px;
  font-weight: 700;
  color: ${color.drakFontColor};
  `,
  magTitle: `
  font-size: 16px;
  color: ${color.drakFontColor};
  `,
};

const theme = {
  color,
  media,
  size,
  font,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;

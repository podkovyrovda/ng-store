const DARK = {
  'primary-color': '#455363',
  'background-color': '#1f2935',
  'text-color': '#fff',
  'counter-color': 'lightblue',
  'user-color': '#8c8787',
};

const LIGHT = {
  'primary-color': '#fff',
  'background-color': '#e5e5e5',
  'text-color': '#2d2d2d',
  'counter-color': 'lightskyblue',
  'user-color': 'lightgrey',
};

export const Themes = {
  DARK,
  LIGHT,
};

export type ThemeName = keyof typeof Themes;

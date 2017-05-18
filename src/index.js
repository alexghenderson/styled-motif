import Color from 'color';

// converts theme to object of colors
const recurse = (theme) => {
  const out = Object.keys(theme).reduce(
    (palette, key) => {
      try {
        palette[key] = (
          typeof theme[key] === 'object'
          ? (palette[key] = recurse(theme[key]))
          : (palette[key] = Color(theme[key]))
        );
      } catch (e) {
        palette[key] = theme[key];
      }
      return palette;
    }
  , {});
  return out;
};

const colors = (selector, theme) => {
  return selector(recurse(theme));
};

const path = (key, theme) => {
  const paths = key.split('.');
  const out = paths.reduce(
    (result, index) => {
      return result[index];
    }
  , theme);

  return out;
};

const motif = (arg) => (props) => {
  return (
    typeof arg === 'function'
    ? colors(arg, props.theme)
    : path(arg, props.theme)
  );
};

export default motif;

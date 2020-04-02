export const numberFormat = value => {
  return new Intl.NumberFormat("en").format(value);
};

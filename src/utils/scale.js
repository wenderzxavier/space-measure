import { APP_ID, LINEAR, PIXEL_FORMATTER, SCALE_UNITS_FORMATTER } from "./constants";

export const getCurrentScale = () => localStorage.getItem(`${APP_ID}_scale`);

export const getScaleUnit = () => localStorage.getItem(`${APP_ID}_unit`);

export const setScale = (scale) => localStorage.setItem(`${APP_ID}_scale`, scale);

export const setUnit = (unit) => localStorage.setItem(`${APP_ID}_unit`, unit);

const numberWithCommas = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatValue = (value, scalar = LINEAR) => {
  const currentUnit = getScaleUnit();
  const currentScale = getCurrentScale();

  const scaledValue = value / PIXEL_FORMATTER[currentScale];

  return `${numberWithCommas(scaledValue.toFixed(2))} ${SCALE_UNITS_FORMATTER[currentUnit][scalar]}`;
};

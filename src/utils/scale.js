import { APP_ID, LINEAR, PIXEL_FORMATTER, SCALE_UNITS_FORMATTER } from "./constants";

export const getCurrentScale = () => localStorage.getItem(`${APP_ID}_scale`);

export const getCustomScale = () => localStorage.getItem(`${APP_ID}_custom_scale`);

export const getScaleUnit = () => localStorage.getItem(`${APP_ID}_unit`);

export const setScale = (scale) => localStorage.setItem(`${APP_ID}_scale`, scale);

export const setCustomScale = (scale) => localStorage.setItem(`${APP_ID}_custom_scale`, scale);

export const setUnit = (unit) => localStorage.setItem(`${APP_ID}_unit`, unit);

const numberWithCommas = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatValue = (value = 0, scalar = LINEAR) => {
  const currentUnit = getScaleUnit();
  const currentScale = getCurrentScale();

  const scaledValue = value / PIXEL_FORMATTER[currentScale];

  if (scaledValue > 0) {
    return `${numberWithCommas(scaledValue.toFixed(2))} ${SCALE_UNITS_FORMATTER[currentUnit][scalar]}`;
  }

  return "-";
};

export const applyScale = (value) => {
  const currentScale = getCurrentScale();

  if (currentScale === "CUSTOM") {
    return value / getCustomScale();
  }

  return value / PIXEL_FORMATTER[currentScale];
};

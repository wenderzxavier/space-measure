import { APP_ID } from "./constants";

export const getCurrentScale = () => localStorage.getItem(`${APP_ID}_scale`);

export const getScaleUnit = () => localStorage.getItem(`${APP_ID}_unit`);

export const setScale = (scale) => localStorage.setItem(`${APP_ID}_scale`, scale);

export const setUnit = (unit) => localStorage.setItem(`${APP_ID}_unit`, unit);

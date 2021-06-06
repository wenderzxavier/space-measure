/* eslint-disable no-undef */
import { APP_ID } from "./constants";

export const getMiroViewport = async (position = {}) => {
  await miro.board.viewport.get(position);
};

export const createMiroWidget = async (data) => {
  await miro.board.widgets.create(data);
};

export const updateMiroWidget = async (id, metadata) =>
  await miro.board.widgets.update({
    id,
    metadata: {
      [APP_ID]: {
        ...metadata,
      },
    },
  });

export const showMiroNotification = (message) => {
  miro.showNotification(message);
};

export const showMiroErrorNotification = (message) => {
  miro.showErrorNotification(message);
};

export const getMiroWidgets = async (constraint) => {
  const widgets = await miro.board.widgets.get(constraint);
  return widgets;
};

export const initWidgetsCreatedListener = (fn) =>
  miro.addListener("WIDGETS_CREATED", ({ data }) => {
    fn(data);
  });

export const initWidgetTransformatioUpdatedListener = (fn) =>
  miro.addListener("WIDGETS_TRANSFORMATION_UPDATED", ({ data }) => {
    fn(data);
  });

export const initSelectionUpdatedListener = (fn) =>
  miro.addListener("SELECTION_UPDATED", ({ data }) => {
    fn(data);
  });

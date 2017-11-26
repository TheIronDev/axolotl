import ActionInputMap from '../const/action-input-map';
import CanvasActionEnum from '../const/canvas-action-enum';
import action from '../const/action';
import dispatcher from '../dispatcher';

const {
  ADD_OR_MODIFY_CANVAS_ITEM,
  HIGHLIGHT_CANVAS_ITEM,
  MODIFY_CANVAS_ITEM,
  REMOVE_CANVAS_ITEM,
  SET_SELECTED_CANVAS_ITEM,
  SET_PREVIEW_CANVAS_ITEM,
  UNSET_PREVIEW_CANVAS_ITEM,
  UPDATE_CURRENT_ACTION,
  UPDATE_CURRENT_ACTION_FILL,
  UPDATE_CURRENT_ACTION_LINE,
} = action;


/**
 * Adds or modifies a canvasItem to the currentCanvasItemList.
 * @param {!CanvasItem} canvasItem
 */
export const addOrModifyCanvasItem = dispatcher((canvasItem) => {
  return {
    type: ADD_OR_MODIFY_CANVAS_ITEM,
    payload: canvasItem
  };
});

/**
 * Highlights a canvasItem from the currentCanvasItemList.
 * @param {number} id
 */
export const highlightCanvasItem = dispatcher((id) => {
  return {
    type: HIGHLIGHT_CANVAS_ITEM,
    payload: id
  };
});

/**
 * Modifies selected canvas item
 * @param {!Object} canvasItem
 */
export const modifyCanvasItem = dispatcher((canvasItem) => {
  return {
    type: MODIFY_CANVAS_ITEM,
    payload: canvasItem
  };
});

/**
 * Removes a canvasItem from the currentCanvasItemList.
 * @param {number} id
 */
export const removeCanvasItem = dispatcher((id) => {
  return {
    type: REMOVE_CANVAS_ITEM,
    payload: id
  };
});

/**
 * Adds a canvasItem to the previewCanvasItemList.
 * @param {!CanvasItem} canvasItem
 */
export const setPreviewCanvasItem = dispatcher((canvasItem) => {
  return {
    type: SET_PREVIEW_CANVAS_ITEM,
    payload: canvasItem
  };
});

/**
 * Sets the currently selected canvasItem id. Its important to note we only
 * want to set the id and not the canvasItem object itself. The problem is that
 * if we are maintaining an object, we may end up storing a reference to
 * something that was removed from the currentCanvasItemList.
 * @param {!CanvasItem} canvasItem
 */
export const setSelectedCanvasItem = dispatcher((canvasItem) => {
  return {
    type: SET_SELECTED_CANVAS_ITEM,
    payload: {selectedCanvasItemId: canvasItem.id}
  };
});

/**
 * Clears the previewCanvasItemList.
 */
export const unsetPreviewCanvasItem = dispatcher(() => {
  return {
    type: UNSET_PREVIEW_CANVAS_ITEM,
    payload: {previewCanvasItemList: []}
  };
});

/**
 * Updates the current action.
 */
export const updateCurrentAction = dispatcher((actionInput) => {
  const currentAction = ActionInputMap[actionInput] || CanvasActionEnum.UNKNOWN;
  return {
    type: UPDATE_CURRENT_ACTION,
    payload: {currentAction}
  };
});

/**
 * Updates the current action's fill color.
 */
export const updateCurrentActionFill = dispatcher((currentActionFillColor) => {
  return {
    type: UPDATE_CURRENT_ACTION_FILL,
    payload: {currentActionFillColor}
  };
});

/**
 * Updates the current action's line color.
 */
export const updateCurrentActionLine = dispatcher((currentActionLineColor) => {
  return {
    type: UPDATE_CURRENT_ACTION_LINE,
    payload: {currentActionLineColor}
  };
});
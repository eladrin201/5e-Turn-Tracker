import * as types from '../constants/ActionTypes';

export const addActor = (actor) => ({type: types.ADD_ACTOR, actor});
export const editActor = (actor) => ({type: types.EDIT_ACTOR, actor});
export const removeActor = (actor) => ({type: types.REMOVE_ACTOR, actor});

import { ADD_ACTOR, EDIT_ACTOR, DELETE_ACTOR } from '../constants/ActionTypes';
import uuid from 'uuid/v4';

const initState = {
  actors: [],
  step: 1
}

export default function actors(state = initState, action) {
  switch(action.type) {
    case ADD_ACTOR:
      action.actor['id'] = uuid();

      let newState = Object.assign({}, state);
      newState.actors.push(action.actor);

      return {
        actors: newState.actors,
        step: newState.step+1
      }

    // case EDIT_ACTOR :
    //
    // case DELETE_ACTOR :

    default:
      return state;
  }
};

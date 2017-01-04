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
      console.log(action.actor);

      let newState = Object.assign({}, state);
      newState.actors.push(action.actor);

      return {
        actors: newState.actors,
        step: newState.step+1
      }

    case EDIT_ACTOR :
      let updatedState = Object.assign({}, state);

      for (let i = 0; i < updatedState.actors.length; i++) {
        if (updatedState.actors[i].id === action.actor.id) {
          updatedState.actors[i] = action.actor;

          return {
            actors: updatedState.actors,
            step: updatedState.step+1
          }
        }
      }

      return state;
    //
    // case DELETE_ACTOR :

    default:
      return state;
  }
};

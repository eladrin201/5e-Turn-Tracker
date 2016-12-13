import { ADD_ACTOR, EDIT_ACTOR, DELETE_ACTOR } from '../constants/ActionTypes';

const initState = {
  actor: [],
  id: 0
}

const actors = (state=initState, action) => {
  switch(action.type) {
    case ADD_ACTOR :
      let actorTemp = action.actor;
      let addActor = state.actor;
      let currentID = state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;

      actorTemp.id = currentID;
      addActor.push(actorTemp);
      return [
        {
          actor: [addActor],
          id: currentID
        },
        ... state
      ];
    // case EDIT_ACTOR :
    //
    // case DELETE_ACTOR :

    default :
      return state;
  }
};

export default actors;

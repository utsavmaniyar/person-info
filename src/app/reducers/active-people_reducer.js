import { PEOPLE_SELECTED } from '../actions/index';

export default function(state = null , action){


  switch(action.type){
    case PEOPLE_SELECTED:
    return action.payload.data;
  }

  return state;

}

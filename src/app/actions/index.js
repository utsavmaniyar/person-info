import axios from 'axios';

const Root_URL = 'https://tw-namegen.herokuapp.com';

export const PEOPLE_SELECTED = 'PEOPLE_SELECTED';
export function selectPeople(people){
  const url = `${Root_URL}/names/:3`;
  const personData = axios.get(url);
  return {
    type : PEOPLE_SELECTED,
    payload : personData
  };
}

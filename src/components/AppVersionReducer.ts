import {AppVersion} from "./AppVersion";
import {AppVersionAction} from "./AppVersionAction";

const initialState: AppVersion = {token: '', platform: '0', touristsState: ''};

export function appVersionReducer(state: AppVersion = initialState, action: AppVersionAction): AppVersion {
  switch (action.type) {
    case 'init':
      console.log('payload');
      console.log(action.payload);
      return {...state, ...action.payload};
    default:
      return state;
  }
}

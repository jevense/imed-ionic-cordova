import {AppVersion} from "./AppVersion";
import {AppVersionAction} from "./AppVersionAction";

const initialState: AppVersion = {token: '', platform: '', touristsState: ''};

export function appVersionReducer(state: AppVersion = initialState, action: AppVersionAction): AppVersion {
  switch (action.type) {
    case 'init':
      return {...state, ...action.payload};
    default:
      return state;
  }
}

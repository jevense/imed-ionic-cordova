import {Action} from "@ngrx/store";
import {AppVersion} from "./AppVersion";

export class AppVersionAction implements Action {
  readonly type = 'init';

  constructor(public payload: AppVersion) {
  }
}

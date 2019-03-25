import {Action} from "@ngrx/store";

export class SubjectAction implements Action {
  readonly type = 'subject';

  constructor(public payload:string) {
  }
}

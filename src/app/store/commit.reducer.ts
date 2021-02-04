import { Action, createReducer, on } from '@ngrx/store';
import * as commitsActions from './commit.actions';

export const commitFeatureKey = 'commits';

// I use Reducer as a pure function
//  in charge of modifying the state

export interface CommitsState {
  project: {
    name: string,
    user: string
  };
  data: [];
  CommitsError: any;
}

export const initialState: CommitsState = {

  project: {
    name: 'git-commit-history-angular',
    user: 'kasius',
  },
  data: [],
  CommitsError: null
};


export const reducerCommits = createReducer(
  initialState,

  // PROJECT
  on(commitsActions.loadProjectSucess, (state, payload) => {
    return {
      ...state, project: { name: payload.project.project, user: payload.project.user }
    };
  }
  ),
  on(commitsActions.loadProjectError, (state, payload) => ({
    ...state,
    payload
  })),
  // PROJECT

  // COMMITS
  on(commitsActions.loadCommits, state => state),
  on(commitsActions.loadCommitsSucess, (state, { data: payload }) => {
    return {
      ...state,
      data: payload,
      CommitsError: null
    };
  }
  ),
  on(commitsActions.loadCommitsError, (state, payload) => ({
    ...state,
    data: [],
    CommitsError: payload.CommitsError
  })),
  // COMMITS

);


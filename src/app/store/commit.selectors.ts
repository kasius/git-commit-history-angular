import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCommits from './commit.reducer';

// I use selectors to retrieve part
// of the global state of the application
// and in this way be able to access
// and listen for changes in the state
// of the app without having to be aware
// of the entire state of the app, if
// not only the parts that concern us

export const selectCommitState = createFeatureSelector<fromCommits.CommitsState>(
  fromCommits.commitFeatureKey
);

// COMMITS
export const getCommits = createSelector(selectCommitState,
  (state: fromCommits.CommitsState) => state.data
);
// COMMITS

// PROJECT
export const getProject = createSelector(selectCommitState,
  (state: fromCommits.CommitsState) => state.project
);
// PROJECT

// ERROR
export const getError = createSelector(selectCommitState,
  (state: fromCommits.CommitsState) => state.CommitsError
);
// ERROR


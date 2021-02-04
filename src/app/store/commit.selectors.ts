import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCommits from './commit.reducer';


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


import { createAction, props } from '@ngrx/store';
import { ProjectLigth } from './commit.model';

// Actions to trigger as needed in application

// PROJECT
export const loadProjectSucess = createAction('[Project] Change Success', props<{ project: ProjectLigth }>()
);

export const loadProjectError = createAction('[Project] Change Error', props<{ ProjectError: any }>());
// PROJECT

// COMMITS
export const loadCommits = createAction('[Commits] Load', props<{ project: ProjectLigth }>());

export const loadCommitsSucess = createAction('[Commits] Load Success', props<{ data: any[] }>()
);

export const loadCommitsError = createAction('[Commits] Load Error', props<{ CommitsError: any }>());
// COMMITS





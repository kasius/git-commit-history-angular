import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import * as commitsActions from './commit.actions';


@Injectable()
export class CommitEffects {

  private apiConnect = 'https://api.github.com/repos/';

  // Through effects and depending on the
  // triggered action, GITHUB API is consumed

  // COMMITS
  loadCommits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(commitsActions.loadCommits),
      concatMap((form: any) =>
        this.http.get<any>(`${this.apiConnect}${form.project.user}/${form.project.project}/commits`).pipe(map(res =>
          commitsActions.loadCommitsSucess({ data: res })
        ),
          catchError(err => of(commitsActions.loadCommitsError({ CommitsError: err }))
          ))))
  );
  // COMMITS

  constructor(
    private actions$: Actions,
    private http: HttpClient) { }

}

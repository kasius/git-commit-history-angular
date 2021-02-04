import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as commitsActions from './commit.actions';
import * as commitsSelectors from './commit.selectors';
import { Project, ProjectLigth } from './commit.model';

// I use a facade to have a black box that
// is in charge of receiving information and
// modifying the store through communication with reducer

@Injectable({
  providedIn: 'root'
})
export class CommitFacade {
  constructor(
    private store: Store<Project>) { }

  // PROJECT
  public loadProjectSucess(project: ProjectLigth) {
    this.store.dispatch(commitsActions.loadProjectSucess({
      project: { ...project }
    })
    );
  }

  public getProject$(): Observable<any> {
    return this.store.select(commitsSelectors.getProject);
  }
  // PROJECT

  // COMMITS
  public loadCommits(form: ProjectLigth) {
    this.store.dispatch(commitsActions.loadCommits({ project: form }));
  }

  public loadCommitsSuccess(commits: any[]) {
    this.store.dispatch(commitsActions.loadCommitsSucess({
      data: { ...commits }
    })
    );
  }

  public loadCommitsError(CommitsError: any) {
    this.store.dispatch(commitsActions.loadCommitsError({
      CommitsError: CommitsError
    })
    );
  }

  public getCommits$(): Observable<any[]> {
    return this.store.select(commitsSelectors.getCommits);
  }
  // COMMITS

  // ERROR
  public getError$(): Observable<any> {
    return this.store.select(commitsSelectors.getError);
  }
  // ERROR

}

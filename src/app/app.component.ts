import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommitFacade } from './store/commit.facade';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  // declarations
  public title = 'git-commit-history-angular';
  public project$: Observable<any>; // observable project
  public data$: Observable<any>; // observable commit list
  public error$: Observable<any>; // observable error
  public statusEditProject = false;
  public formProject: FormGroup; // Form Reactive
  public projectBase = { user: 'kasius', name: 'git-commit-history-angular' }; // Proyecto prueba git commit history Crossroads

  constructor(
    private fb: FormBuilder,
    private commitFacade: CommitFacade) {
    this.initForm();
    this.project$ = commitFacade.getProject$(); // observable to work reactive programming in html
    this.data$ = commitFacade.getCommits$(); // observable to manipulate commit data in HTML
    this.error$ = commitFacade.getError$(); // observable to manipulate error API in HTML
    commitFacade.getProject$().subscribe(project => { // subcription to work in typescript copy the data as it is modified we receive the changes and the new state thanks to the NGRX facade
      this.formProject.get('user').setValue(project.user); // We update form with data as state changes
      this.formProject.get('name').setValue(project.name); // We update form with data as state changes
      this.commitFacade.loadCommits({ user: this.formProject.value.user, project: this.formProject.value.name });
    })
  }

  // we initialize form
  public initForm() {
    this.formProject = this.fb.group(
      {
        user: [null, Validators.required],
        name: [null, Validators.required]
      }
    );
  }

  // we activate the project edit form
  public editProject() {
    this.statusEditProject = !this.statusEditProject
  }

  // we modify application state through NGRX to
  // consult for COMMIT of another project
  public changeProject(formProject: any) {
    this.commitFacade.loadProjectSucess({ user: formProject.user, project: formProject.name });
    this.commitFacade.loadCommits({ user: this.formProject.value.user, project: this.formProject.value.name });
  }
}

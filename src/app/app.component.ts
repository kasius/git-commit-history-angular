import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommitFacade } from './store/commit.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  // declarations
  project$: Observable<any>; // observable project
  data$: Observable<any>; // observable commit list
  error$: Observable<any>; // observable error
  title = 'git-commit-history-angular';
  public statusEditProject = false;
  public formProject: FormGroup;
  public projectBase = { user: 'kasius', name: 'git-commit-history-angular' }; // Proyecto prueba git commit history Crossroads

  constructor(
    private fb: FormBuilder,
    private commitFacade: CommitFacade) {
    this.initForm();
    this.project$ = commitFacade.getProject$(); // observable to work reactive programming in html
    this.data$ = commitFacade.getCommits$(); // observable to manipulate commit data in HTML
    this.error$ = commitFacade.getError$(); // observable to manipulate error API in HTML
    commitFacade.getCommits$()
      .subscribe(commits => {
        console.log('commits...');
        console.log(commits);
        console.log('commits...');
      });
    commitFacade.getProject$().subscribe(project => { // subcription to work in typescript copy the data as it is modified we receive the changes and the new state thanks to the NGRX facade
      console.log('project...');
      console.log(project);
      console.log('project...');
      this.formProject.get('user').setValue(project.user); // We update form with data as state changes
      this.formProject.get('name').setValue(project.name); // We update form with data as state changes
      this.commitFacade.loadCommits({ user: this.formProject.value.user, project: this.formProject.value.name });
    })
  }

  ngOnInit() {

  }

  initForm() {
    this.formProject = this.fb.group(
      {
        user: [null, Validators.required],
        name: [null, Validators.required]
      }
    );
  }

  public editProject() {
    this.statusEditProject = !this.statusEditProject
  }

  public changeProject(formProject: any) {
    console.log('formProject...');
    console.log(formProject);
    console.log('formProject...');
    this.commitFacade.loadProjectSucess({ user: formProject.user, project: formProject.name });
    this.commitFacade.loadCommits({ user: this.formProject.value.user, project: this.formProject.value.name });
  }
}

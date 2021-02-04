# GitCommitHistoryAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2

## Crossroads-Group Test Project Commit History for X Project

Angular application that allows to list the Commits of a valid public github project.

Default project: `https://github.com/kasius/git-commit-history-angular`

![Alt text](src/assets/img/project_1.png?raw=true "Title")


The application allows you to evaluate and view commits of any public project on GitHub, to evaluate another project you must press the Edit button

![Alt text](src/assets/img/projecto_2.png?raw=true "Title")


When pressing the edit button, a form is displayed that allows entering a VALID GitHub user and project name, when entering valid data the last 30 commits of the entered project are listed, additionally it is possible to re-list the GitCommitHistoryAngular project commit

you can try entering nrwl in user and nx in project, the result is the following (image)

![Alt text](src/assets/img/project_3.png?raw=true "Title")

when entering invalid data, an error is displayed with the possibility of returning to commits of the GitCommitHistoryAngular project

The API that is consumed is `https://api.github.com/repos/USERGITHUB/PROJECTGITHUB/commits`

## Used technology

1. Angular
2. Reactive programming
3. Container/Presentation Pattern
4. Bootstrap/Html/Sass
5. NGRX/Redux
    - Actions
    - Reducer
    - Effects
    - Selectors
    - Facade

## Raise project

Run git clone https://github.com/kasius/git-commit-history-angular.git

Access git-commit-history-angular

run: npm install

run: npm run start

The application must be uploaded in your browser at `http://localhost:7777` and you can now interact with the app

## Next steps
- Implement Pagination
- Server Side
- Graph with visual information of project Commits
- HTML Separation in Angular Components
- Implement environment in NX project

 `If you need me to implement these steps, you can tell me to spend more time and implement what is indicated.`
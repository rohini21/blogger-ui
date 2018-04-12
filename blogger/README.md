# Blogger

Blog is an app where a user can read, write and share stories.
This app covers the basic functionality of a blogger which are
- sign-up, login, logout (user-session)
- write, edit, publish, unpublish and delete blogs (CURD operations)
- user can view other user's blogs and profile.

## Project Structure
src is the root folder
It holds 
- index.html
- app (directives, modules and components, services)
- assets (images)

The data of the app is stored in local storage.
CRUD operations on data is done through services which internally uses LocalStorageService. 

The general page breakdown looks like this:
- User Signup, Login page.
- Dashboard. (User can search for published blogs and users here)
- Profile (Published blogs of particular user are displayed here)
- Blog view, create and edit pages.
- In blog edit page one can delete and publish/unpublish the data too.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
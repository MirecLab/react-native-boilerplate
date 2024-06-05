# Entirely customable mobile-app template

This project aims to be a boilerplate template to create a mobile app implementing those basic functionalities :
- Bottom Navbar ⛵
- Stack navigation on each pages 🏢
- Easy Light ☀️ and Dark 🌑 Themes implementation
- Authentication system with Firebase 🔥
- Sign-in with Google OAuth / Firebase 🔒

## How to install 

```
$ git clone https://github.com/Mirecos/react-native-templates
$ cd react-native-templates
$ npm install
```
Once dependencies are installed there is two more steps.

- First, fill the ```/src/config/firebase/FirebaseConfig.tsx``` file with your Firebase project informations. Those are given when creating a project with your firebase dashboard.
- Second, add a ```google-services.json``` at the root of the project. This file may be downloaded from ```settings->general``` in your firebase dashboard. Make sure to add an android application in the project's apps.

## Releases notes

<details>
  <summary>V 1.0</summary>
  Functionalities :
  
  - Bottom tab navigation
  - Stack navigation in each tab
  - Connection with e-mail / password
  - Connection with google
</details>

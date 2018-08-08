// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// Initialize Firebase
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB6GoI-n3SRAn2N0W7ltZcM57mnKT7DazI",
    authDomain: "bike-component-log.firebaseapp.com",
    databaseURL: "https://bike-component-log.firebaseio.com",
    projectId: "bike-componend-log",
    storageBucket: "bike-component-log.appspot.com",
    messagingSenderId: "801372508673"
  }
};








// export const environment = {
//   production: false,
//   firebase: {
//     apiKey: "AIzaSyA3KTJBBwdTlvsvc6qQHr992iKrxE-qvIo",
//     authDomain: "trackedme-angular.firebaseapp.com",
//     databaseURL: "https://trackedme-angular.firebaseio.com",
//     projectId: "trackedme-angular",
//     storageBucket: "",
//     messagingSenderId: "60959316518"
//   }
// };

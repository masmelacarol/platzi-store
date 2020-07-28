// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'https://platzi-store.herokuapp.com/products',
  firebase: {
    apiKey: 'AIzaSyAkcOYduwvxBFGx3T8k96j2Veu00pIAqbU',
    authDomain: 'platzi-store-master.firebaseapp.com',
    databaseURL: 'https://platzi-store-master.firebaseio.com',
    projectId: 'platzi-store-master',
    storageBucket: 'platzi-store-master.appspot.com',
    messagingSenderId: '763128926262',
    appId: '1:763128926262:web:7588e93eab67fe96240897',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'https://platzi-store.herokuapp.com/products',
  firebase: {
    apiKey: 'AIzaSyCMSoRfnVB2dY-ypC-TBntqFUzD1em9Phk',
    authDomain: 'platzi-store-pwa-master.firebaseapp.com',
    databaseURL: 'https://platzi-store-pwa-master.firebaseio.com',
    projectId: 'platzi-store-pwa-master',
    storageBucket: 'platzi-store-pwa-master.appspot.com',
    messagingSenderId: '602110461240',
    appId: '1:602110461240:web:e6a2ba7711c7161dd4edcd',
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

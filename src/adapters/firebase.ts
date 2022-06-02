import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

import firebaseConfig from 'config/firebase';

const firebase = initializeApp(firebaseConfig);

initializeAppCheck(firebase, {
  provider: new ReCaptchaV3Provider(`${process.env.REACT_APP_DEBUG_TOKEN}`),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});

export const db = getFirestore();

export default firebase;

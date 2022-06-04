import firebaseConfig from 'config/firebase';
import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { getFirestore } from 'firebase/firestore';

const firebase = initializeApp(firebaseConfig);

initializeAppCheck(firebase, {
  provider: new ReCaptchaV3Provider(`${process.env.REACT_APP_DEBUG_TOKEN}`),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});

export const db = getFirestore();

export default firebase;

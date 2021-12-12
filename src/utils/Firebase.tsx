// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAp1ymCNNTDpTpDtD-bVqmyYaqH3G6lya4',
  authDomain: 'farmly-6de9d.firebaseapp.com',
  projectId: 'farmly-6de9d',
  storageBucket: 'farmly-6de9d.appspot.com',
  messagingSenderId: '747102585302',
  appId: '1:747102585302:web:27b1398498fe8800aa6477',
  measurementId: 'G-BKJ3T2RFSB',
};

class Firebase {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  static init() {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
}

export default Firebase;

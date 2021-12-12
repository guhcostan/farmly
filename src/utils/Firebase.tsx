/* eslint-disable @typescript-eslint/explicit-function-return-type */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  Analytics,
  getAnalytics,
  logEvent,
  setUserProperties,
} from 'firebase/analytics';
import mixpanel from 'mixpanel-browser';
import firebase from 'firebase/compat';
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
  private static analytics: Analytics;

  static init() {
    const app = initializeApp(firebaseConfig);
    this.analytics = getAnalytics(app);
    mixpanel.init('8ffeb64a5bbb257c70f5160827b4c29f', { debug: true });
  }

  static logEvent(event: string, properties?: any) {
    logEvent(this.analytics, event, properties);
    mixpanel.track(event, properties);
  }

  static indentify(user: any) {
    setUserProperties(this.analytics, user);
    mixpanel.identify(user.id);
    mixpanel.people.set(user);
  }

  static login(email: string) {
    this.logEvent('Login', { email });
  }

  static signin(email: string) {
    this.logEvent('Register', { email });
  }
}

export default Firebase;

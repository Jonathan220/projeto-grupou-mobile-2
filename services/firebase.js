import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDVsv-OwjHE9QAWv8480SF2Jsh9ScwDe-o",
    authDomain: "grupou-26bb5.firebaseapp.com",
    databaseURL: "https://grupou-26bb5.firebaseio.com",
    projectId: "grupou-26bb5",
    storageBucket: "grupou-26bb5.appspot.com",
    messagingSenderId: "973413882385",
    appId: "1:973413882385:web:59ab9c8bf2c9eb72f22fb0"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

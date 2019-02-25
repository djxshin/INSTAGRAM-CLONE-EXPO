import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCnwSd0Ai5T3vZTOiYU9cyLnIhpsj2GWCs",
    authDomain: "instagram-clone-dc097.firebaseapp.com",
    databaseURL: "https://instagram-clone-dc097.firebaseio.com",
    projectId: "instagram-clone-dc097",
    storageBucket: "",
    messagingSenderId: "87251556228"
  };

firebase.initializeApp(config);

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
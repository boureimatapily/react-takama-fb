import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const Config = {
          apiKey: "AIzaSyCVIz6adEp_I7ffWB2G4_2IjDeuh51pLxw",
          authDomain: "takama-db64a.firebaseapp.com",
          databaseURL: "https://takama-db64a.firebaseio.com",
          projectId: "takama-db64a",
          storageBucket: "takama-db64a.appspot.com",
          messagingSenderId: "973704212252",
          appId: "1:973704212252:web:c2927424a47dae365c94d9"
    };
  firebase.initializeApp(Config);
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase
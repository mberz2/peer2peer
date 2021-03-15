import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDlj51rHotACZWK7wUvbvjuUTv9lHTuU08",
    authDomain: "mberz2chat.firebaseapp.com",
    projectId: "mberz2chat",
    storageBucket: "mberz2chat.appspot.com",
    messagingSenderId: "361329947931",
    appId: "1:361329947931:web:0374bcf87d6359a1b34fbe"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
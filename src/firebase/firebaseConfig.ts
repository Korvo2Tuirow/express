// Este arquivo contém a configuração do Firebase para um aplicativo web.
// Inclui a chave da API, o ID do projeto e outros detalhes necessários para conectar aos serviços do Firebase.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//colocar as chaves de acesso do Firebase aqui ou importar de um arquivo .env
const firebaseConfig = {

    apiKey: "AIzaSyAgzilObsT7Wh9gEogZACHXaVOllX_lyck",
    authDomain: "teste-bf813.firebaseapp.com",
    databaseURL: "https://teste-bf813-default-rtdb.firebaseio.com",
    projectId: "teste-bf813",
    storageBucket: "teste-bf813.firebasestorage.app",
    messagingSenderId: "728371231587",
    appId: "1:728371231587:web:3f6c9544f4513e19897156"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const realtime = getDatabase(app);

//npm install firebase
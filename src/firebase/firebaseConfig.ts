// Este arquivo contém a configuração do Firebase para um aplicativo web.
// Inclui a chave da API, o ID do projeto e outros detalhes necessários para conectar aos serviços do Firebase.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const realtime = getDatabase(app);


import React, {createContext} from 'react'
import { firebaseConfig } from './config';
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);


const FirebaseContext = createContext();

export default FirebaseContext;
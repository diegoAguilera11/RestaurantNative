import React, { useReducer, useState } from 'react'
import FirebaseContext, { firestore } from './FirebaseContext'
import FirebaseReducer from './FirebaseReducer'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { OBTAIN_MENU_SUCCESS } from '../../Types/types';

export const FirebaseState = ({ children }) => {

    // Crear state inicial 
    const initialState = {
        menu: [],
        categories: [],
        status: 'checking'
    }

    // useReducer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(FirebaseReducer, initialState);


    const obtainMenu = async () => {

        try {
            const saucers = await obtainSaucers();
            const categories = await obtainCategories();

            dispatch({
                type: OBTAIN_MENU_SUCCESS,
                payload: { saucers, categories }
            });

        } catch (error) {
            console.log(error);
        }

    }

    // funcion para obtener los platillos
    const obtainSaucers = async () => {
        return new Promise((resolve, reject) => {
            const q = query(collection(firestore, "products"), where("state", "!=", false));
            onSnapshot(q, (querySnapshot) => {

                const saucers = querySnapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                });
                resolve(saucers);
            }, reject);
        })
    }

    const obtainCategories = async () => {
        return new Promise((resolve, reject) => {
            const q = query(collection(firestore, "categories"));
            onSnapshot(q, (querySnapshot) => {

                const categories = querySnapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                });
                resolve(categories)
            }, reject);
        })
    }

    const [addProduct, setAddProdduct]  = useState(false);
    return (
        <FirebaseContext.Provider
            value={{
                firestore,
                ...state,
                obtainMenu,
                addProduct,
                setAddProdduct

            }}
        >
            {children}
        </FirebaseContext.Provider>
    )
}
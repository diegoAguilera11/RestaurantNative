import React, { useReducer } from 'react';
import OrderReducer from './OrderReducer'
import OrderContext from './OrderContext';
import { ADD_SOUCER, DELETE_SOUCER_ORDER, UPDATE_SOUCER, RESUME_TOTAL, DONE_ORDER } from '../../Types/types';

export const OrderState = ({ children }) => {

    // Add initial state
    const initialState = {
        order: [],
        total: 0,
        doneOrderID: ''
    }

    // make useReducer
    const [state, dispatch] = useReducer(OrderReducer, initialState);


    const addSoucer = (saucer) => {


        const existIndex = state.order.findIndex((item) => item.id === saucer.id);

        if (existIndex !== -1) {
            const updateOrder = state.order.map((item, index) =>
                (index === existIndex)
                    ?
                    {
                        ...item,
                        quantity: item.quantity + saucer.quantity,
                        saucerTotal: item.saucerTotal + saucer.saucerTotal
                    }
                    :
                    item
            );

            dispatch({
                type: UPDATE_SOUCER,
                payload: updateOrder
            })
        } else {
            dispatch({
                type: ADD_SOUCER,
                payload: saucer
            })
        }
    }


    const deleteSoucerOrder = (id) => {
        console.log(id);

        dispatch({
            type: DELETE_SOUCER_ORDER,
            payload: id
        })
    }


    const totalResume = (total) => {
        dispatch({
            type: RESUME_TOTAL,
            payload: total
        })
    }

    const submitCurrentOrder = (id) => {
        dispatch({
            type: DONE_ORDER,
            payload: id
        })
    }
    return (
        <OrderContext.Provider
            value={{
                ...state,
                addSoucer,
                deleteSoucerOrder,
                totalResume,
                submitCurrentOrder
            }}
        >
            {children}
        </OrderContext.Provider>
    )

}
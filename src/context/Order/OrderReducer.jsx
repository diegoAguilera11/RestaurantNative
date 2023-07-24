import { ADD_SOUCER, DELETE_SOUCER_ORDER, DONE_ORDER, RESUME_TOTAL, UPDATE_SOUCER } from "../../Types/types";


export default (state, action) => {
    switch (action.type) {
        case ADD_SOUCER:

            return {
                ...state,
                order: [...state.order, action.payload]
            }

        case UPDATE_SOUCER:
            return {
                ...state,
                order: action.payload
            }
        case DELETE_SOUCER_ORDER:
            return {
                ...state,
                order: state.order.filter(item => item.id !== action.payload)
            }
        case RESUME_TOTAL:
            return {
                ...state,
                total: action.payload
            }
        case DONE_ORDER:
            return {
                ...state,
                doneOrderID: action.payload
            }

        default:
            return state;
    }
}
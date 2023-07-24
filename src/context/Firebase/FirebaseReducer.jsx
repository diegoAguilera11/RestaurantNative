import { OBTAIN_MENU_SUCCESS } from "../../Types/types";

export default (state, action) => {
    switch (action.type) {
        case OBTAIN_MENU_SUCCESS:
            return {
                ...state,
                status: 'charged',
                menu: action.payload.saucers,
                categories: action.payload.categories
            }
        
        default:
            return state;
    }
}
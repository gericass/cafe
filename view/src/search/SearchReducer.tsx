
import {KEYWORD_CHANGED} from "./SearchAction";

const initialState = {
    searchKeyWord: null
};

const SearchReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case KEYWORD_CHANGED:
            return Object.assign({}, state, {searchKeyWord: action.keyword});
        default:
            return state;
    }
};

export default SearchReducer;
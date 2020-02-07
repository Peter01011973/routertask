import React, {useReducer} from 'react';
import './Paginator.css';

const Paginator = ({ totalPageCount, onPaginatorChange }) => {

    const initialPage = { currentPage: 1 }

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment": return { currentPage: state.currentPage < totalPageCount ? state.currentPage + 1 : state.currentPage };
            case "decrement": return { currentPage: state.currentPage > 1 ? state.currentPage - 1 : 1 };
            default: return { ...state }     
        }
    }
    const onChangeHandler = () => onPaginatorChange(state.currentPage)
    const [state, dispatch] = useReducer(reducer, initialPage)

    return (
        <div className='Paginator'>
            <button>1</button>
            <button onClick={() =>{ dispatch({ type: "decrement" });  onChangeHandler()}}>-</button>
            <button>{state.currentPage}</button>
            <button onClick={() =>{ dispatch({ type: "increment" });  onChangeHandler()}}>+</button>
            <button>{totalPageCount}</button>
        </div>
    )
}

export default Paginator

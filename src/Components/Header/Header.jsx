import React, {useState} from 'react';
import {connect} from "react-redux"
import  "./Header.css";




const Header = ({filter}) => {
    const [searchValue, setSearchValue] = useState('')
    console.log(searchValue)
    return (
        <header className="Header">
            <h1>Robot Friends</h1>
            <input placeholder="search" 
            onChange={e => {
                filter(e.target.value)
            }}
            />
        </header>
    );
};


const mapDispatchToProps = (dispatch) => ({
    filter: (txt) => dispatch({type: "FILTER_USERS", payload: txt})
})

export default connect(null, mapDispatchToProps)(Header);
import React, {useEffect} from 'react'
import Card from "../../Components/Card/Card"
import "./Robots.css"
import {fetchUsers} from "../../Redux/users/user-action"
import {connect} from "react-redux"

const Robots = ({fetchUsers,robots}) => {

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])
 
    return (
        <div className="rb-container">
        {robots.map((data)=> {
            return <Card name={data.name}
             email={data.email} 
             img={`https://robohash.org/${data.id}`}
             key={data.id}/>

        })}
        </div>
    );
};


const mapStateToProps = (state) => ({
    robots: state.robotz.updatedUsers
})

export default connect(mapStateToProps, {fetchUsers})(Robots);
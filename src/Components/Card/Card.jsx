import React from 'react';
import "./card.css"

const Card = ({name, email, img}) => {
    return (
        <div className="card">
            <img src={img} alt="robo"/>
           <span className="card-i">
          <span>
                Name: {name}
                </span> 
                <span>
                Email: {email}
                    </span> 
                    </span>
            
        </div>
    );
};

export default Card;
import React, {useState} from 'react'
import "./Home.css"
import I18n from '../../utills/I18n';

function Home(){
    const userscount =50;


    return (
        <div>
        <h1>{I18n( "welcomeMessege" )}</h1>
        <p> {I18n("normalMessege" )}</p>
        <h3>{I18n( "greetingMessege" )}</h3>

        <select 
        defaultValue={localStorage.getItem("lang")}
        onChange={(e)=>{
            localStorage.setItem("lang", e.target.value);
            window.location.reload();
        }}>
            <option value="mr">Marathi</option>
            <option value="hi">Hindi</option>
            <option value="en">English</option>
        </select>
        <p>
            {I18n("usersStateMessege", "<studentCount>", userscount)} 
        </p>
        </div>
    )
}

export default Home
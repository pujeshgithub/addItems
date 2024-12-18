import React, { useState } from 'react'
import style from './style.css';

 function FavPlayer() {
    const[FavPlayer, setPlayer]= useState(["Abdevillers", "Sanju Samson"])

    function AddPlayers(){
        let v = document.getElementById('inp').value
        if(v!== ''){
            setPlayer([...FavPlayer, v])
            document.getElementById('inp').value = ''
        }
        else{
            alert("Enter Faviorte Players")
        }
    }

    function DeletePlayers(){
        setPlayer(FavPlayer.slice(0, -1))
        let i = document.getElementById('para3').value
        document.getElementById('para3').innerHTML = "Last Deleted Player : " + FavPlayer[FavPlayer.length-1];
        if(FavPlayer.length == 0){
            document.getElementById('para3').innerHTML = "No More Player to Delete"
        }

    }
    
    

  return (
    <>
        <div id='FavPlayer'>
            <input type='text' placeholder='Enter Faviorte players' id='inp' />
            <button onClick={AddPlayers} className='btn1'>Add Player</button>
            <button onClick={DeletePlayers} className='btn2'>Delete Player</button>
            {FavPlayer.map(y=><h2>{y}</h2>)}
            <br/>
            <br/>
            <p id='para3' className='para'><span className='customSpan'>Deleted Items : </span></p>
        </div>
     </>
)
}

export default FavPlayer;

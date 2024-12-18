import React, { useState } from 'react'
import style from './style.css'


 function AddingBikes() {
    const[bikes, setBikes] = useState(["Royal Enfeild", "KTM"])
  
   
   function Adding(){
    let v = document.getElementById("favBikes").value;
        if(v!== ''){
            setBikes([...bikes, v ])
            document.getElementById('favBikes').value = ''
        }
        else{
            alert("Enter Fav Bike")
        }
    }
    function DeletingBikes(){
        
        setBikes(bikes.slice(0,-1))
        let val = document.getElementById("btn4").value
       document.getElementById("para1").innerHTML = "Last Deleted Bike : " + bikes[bikes.length-1]
       if(bikes.length == 0){
        document.getElementById('para1').innerHTML = "No More Bikes to Delete"
       }

    }
    
  return (
    <>
    <div id='Bikes'>
    
        <input type='text' placeholder='Enter Fav Bike' id='favBikes'></input>
        <button onClick={Adding} id='btn3'className='btn1' >Add Bike</button>
        <button onClick={DeletingBikes} id='btn4' className='btn2'>Delete Bike</button>
        
        {bikes.map(p=><h2>{p}</h2>)}
        <br/>
        <br/>
        <p id='para1' className='para'><span className='customSpan'>Deleted Items :</span> </p>
    </div>
    </>
  )
}

export default AddingBikes;

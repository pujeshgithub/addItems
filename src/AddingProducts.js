import React, { useState } from 'react'
import style from './style.css'

 function AddingProducts() {

    const [carNames, setCar] = useState(["KIA", "TATA"]);

    function AddingCar(){
        let v = document.getElementById('carName').value;
        if(v!== ''){
            setCar([...carNames, v])
            document.getElementById('carName').value =''
        }
        else{
            alert("Please Enter Car Name")
        }

    }

    function DeletingCar(){
        
        setCar(carNames.slice(0,-1))
        
        let i = document.getElementById('btn2').value;

        document.getElementById("para").innerHTML = "Last Car Deleted : "+ carNames[carNames.length-1]
        if(carNames.length == 0){
            document.getElementById("para").innerHTML = "No More Cars To Delete"
        }
        
        
        
    }


  return (
    <>
    <div id='Car'>
    
        <input type='text' placeholder='Enter Car Name' id='carName'></input>
        <button id='btn1' className='btn1' onClick={AddingCar}>Add Car</button>
        <button id='btn2' className='btn2' onClick={DeletingCar}>Delete Car</button>
        
        {carNames.map(x=><h2>{x}</h2>)}

        <br/>
        <br/>
        <p id='para' className='para'><span className ='customSpan'>Deleted Items : </span></p>
    </div>
    
    </>
  )
}


export default AddingProducts;


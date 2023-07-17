import {React,useState} from 'react';
import mango from './mango.png'
import banana from './banana.png'

export function FruitsCounter(){
    const[mangoCount,setMangoCount] = useState(0)
    const[bananaCount,setBananaCount] = useState(0)
    
    return(
        <>
        <div className='fruits-main w-100 vh-100 bg-warning p-5'>
            <div className='container row w-75 p-4 rounded-4 bg-light m-auto'>
                <div className='col-12 text-center pt-3'>
                    <h1 className='fw-bolder'>Bob ate <span className='text-warning'>{mangoCount}</span> mangoes <span className='text-warning'>{bananaCount}</span> bananas</h1>
                </div>
                <div className='col-sm-12 col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center p-4'>
                    <div><img src={mango} className='w-100 h-100'></img></div>
                    <div><button className='btn btn-primary' onClick={()=>{setMangoCount(mangoCount+1)}}>Eat Mango</button></div>
                </div>
                <div className='col-sm-12 col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center p-4'>
                    <div><img src={banana} className='w-100 h-75'></img></div>
                    <div><button className='btn btn-primary' onClick={()=>{setBananaCount(bananaCount+1)}}>Eat Banana</button></div> 
                </div>
            </div>
        </div>
        </>
    );
} 
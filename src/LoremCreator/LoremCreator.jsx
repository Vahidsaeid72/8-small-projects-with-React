import { useState } from 'react';
import './LoremCreator.css';
import data from './LoremData';

const LoremCreator = () => {
    const [count , setCount] = useState(0);
    const [text , setText] =useState([])
    
    const createparagraf = (e)=>{
        e.preventDefault();
        let amount = parseInt(count);
        if(count <= 0){
            amount=0
        }
        if(count>4){
            amount=4
        }
        setText(data.slice(0,amount))
    }
    return ( 
        <div className="myContetnt">
            <div className="mylorem"> 
            <h2 className='mb-3 p-4'>لورم ایپسوم ساز</h2>
            <form className="form-inline input-group w-50">
                <label className='p-2'> تعداد پاراگراف : </label>
                <input className='form-control w-25 m-1' type="number" name='total' value={count} onChange={(e)=>setCount(e.target.value)} />
                <button className="btn btn-danger rounded-2 border-0" onClick={createparagraf}>بساز</button>
            </form>
                 <article className="p-4">
                 {text.map((item,index)=> <p key={index}>{item}</p>)}
               </article>
            </div>
        </div>
     );
}
 
export default LoremCreator;
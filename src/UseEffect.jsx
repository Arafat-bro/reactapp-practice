import React,{useState,useEffect} from 'react';

const UseEffect = () => {
    
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    useEffect(() => {
        document.title = `Clicked ${num} times`;
    },[num]);

    const effect = () => {
        setNum(num + 1);
        
    }
    const effect_2 = () => {
        setNums(nums + 1);
        
    }

    return (
        <>
        <button onClick={effect} className="mb-5">Clicked {num}</button><br/>
        <button onClick={effect_2} className="mb-5">Clicked {nums}</button>
        </>
    )
}

export default UseEffect;
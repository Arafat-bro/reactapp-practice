import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Options from './Options';
const Api = () => {

    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [power, setPower] = useState();
    const [power_type, setPower_type] = useState();
    
    useEffect(() => {
        async function getData() {
            const result = await axios.get(`https://pokeapi.co/api/v2/berry/${num}`);
            // console.log(result);
            setName(result.data.name);
            setPower(result.data.natural_gift_power);
            setPower_type(result.data.natural_gift_type.name);
        }
        getData();
    });

        return (
            <>
                <h3>You Choose Pokemon number <span className="text-danger"> {num} </span> named <span className="text-danger"> {name} </span>. Containing <span className="text-danger"> {power} </span> natural powers. Main ability : <span className="text-danger"> {power_type} </span></h3>
                Select pockemon :
                <select value={num}
                    onChange={(event) => {
                        setNum(event.target.value);
                    }}>
                    <option >Select</option>
                    <Options/>
                </select>
            </>
        )
    
}
export default Api;
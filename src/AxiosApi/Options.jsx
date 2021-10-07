import React from 'react';

   const Options = () =>{
        var arr = [];

       for (let i = 1; i <= 100; i++) {
            
            arr.push(<option key={i} value={i}>{i}</option>)
        }

        return arr;
};

export default Options;
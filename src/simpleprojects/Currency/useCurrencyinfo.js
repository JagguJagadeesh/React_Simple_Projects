import { useState , useEffect } from 'react'

function useCurrencyinfo(currency) {
    
    const [data,setdata] = useState({});
    
    function fetchdata () {
        const url = `https://open.er-api.com/v6/latest/${currency }`;
        fetch(url)
        .then((res)=>res.json())
        .then((d)=>setdata(d.rates));
    }
    useEffect(()=>{
        fetchdata();
    })
    return data;
}

export default useCurrencyinfo
import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
     fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-10-06/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then(() => {setData(res[currency])})
    }, [currency])
    console.log("Data : ", data);
    return data;
}

export default useCurrencyInfo;
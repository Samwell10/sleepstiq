import "./Home.css"
import { motion } from "framer-motion";
import vape from "../../Assets/VAPE.png"
import sleeper from "../../Assets/sleeping.jpeg"
import Navbar from "../../Components/Navbar/Navbar";
import google from "../../Assets/google.png"
import forbes from "../../Assets/forbes.png"
import bloomberg from "../../Assets/bloomberg.png"
import sleepReview from "../../Assets/sleepreview.png"
import influencive from "../../Assets/industry.png"
import Customer from "../../Components/Customer/Customer";
import Product from "../../Components/Product/Product";
import Footer from "../../Components/Footer/Footer";
import ImageComponent from "../../Components/ImageComponent";
import axios from "axios"
import { useEffect, useState } from "react";
const Test = () => {
    const [data, setData] = useState([])
    const [amount, setAmount] = useState("")
    const [values, setValues] = useState("")
    const  [total, setTotal] = useState('')
    const fetchCurrency = () => {
        return axios.get("https://api.exchangerate-api.com/v4/latest/USD").then((res) => setData(res?.data?.rates))
    }
    console.log(data)
    const handleInput = (e) =>{
        let value = e.target.value
        setAmount(value)
    }
    const handelSelect = (e) =>{
        let value = e.target.value
        setValues(value)
    }
    useEffect(()=>{
        setTotal(amount * values)
    }, [amount, values])
    useEffect(() =>{
        fetchCurrency();
    },[])
    return ( 
        <div className="home">
            <form>
                <input
                    type="number"
                    Placeholder="Enter Amount in USD"
                    onChange={handleInput}
                ></input>
                <select
                    onChange={handelSelect}
                >
                    <optgroup>
                        {Object.keys(data).map((rate,index)=>{
                            return (
                                <option key={index} value={data[rate]}>{rate}</option>
                            )
                        })}
                    </optgroup>
                </select>

                <p>{total}</p>
            </form>
        </div>
    );
}
 
export default Test;
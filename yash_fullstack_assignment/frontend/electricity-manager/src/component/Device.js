import { useEffect, useState, useRef, useContext } from "react";
import { billContext } from "../context/data.provider";


const Device = ({ deviceName, consumption, img }) => {
    const { deviceConsumption, setDeviceConsumption } = useContext(billContext)
    const [switchStatus, setSwitchStatus] = useState("ON")
    const [powerConsumption, setPowerConsumption] = useState(0)
    const savedCallback = useRef();

    savedCallback.current = function () {
        if (switchStatus === "OFF") {
            setPowerConsumption(powerConsumption + consumption)
            const billObj = deviceConsumption
            billObj[deviceName] += consumption
            setDeviceConsumption(billObj)
        }
    }

    useEffect(() => {
        console.log("hello")
        const interval = setInterval(() => { savedCallback.current() }, 1000)
        return () => clearInterval(interval)
    }, [])


    return (
        <div style={{ display: "flex", justifyContent:"space-around" ,margin:"5px",alignItems:"center"}}>  <img src={img} style={{ width:"150px",maxHeight:"150px" }}></img>
            <div style={{padding:"10px"}}>

                <h3>device Name:{deviceName}</h3>
                <h3>consumption:{consumption}</h3>
                <h3>power consumption:{(deviceConsumption[deviceName]).toFixed(2)}</h3>
                <button className="btn btn-primary" onClick={() => {
                    (switchStatus === "ON") ? setSwitchStatus("OFF") : setSwitchStatus("ON");
                }}>{switchStatus}</button>
            </div>
        </div>
    )
}

export default Device;
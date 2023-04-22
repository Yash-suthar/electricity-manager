import { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import Device from "./Device";
import { billContext } from "../context/data.provider";
import tv from "../img/tv.jpg";
import fan from "../img/fan.jpg";
import microwave from "../img/microwave.jpg";
import bulb from "../img/bulb.jpg";
function useInterval(callback, delay) {
  const savedCallback = useRef();
  let {savedInterval} = useContext(billContext)

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);


  useEffect(() => {
   async function clearInterval (){ if(savedInterval.current){ await savedCallback.current();clearInterval(savedInterval.current)}}
   clearInterval();
    savedInterval.current= setInterval(() => {
      savedCallback.current();
    }, delay);
  
  }, [delay]);
}
function Room() {
  const deviceImage = [bulb, tv, microwave, fan];
  const [deviceData, setDeviceData] = useState([]);
  const { deviceConsumption, setDeviceConsumption } = useContext(billContext);

  useEffect(() => {
    async function fatchData() {
      const devices = await axios.get("http://localhost:3002/room/devices");

      setDeviceData(devices.data.result.devices);
    }
    fatchData();
  }, []);

  useInterval(() => {
    let sum = 0;
    for (const key in deviceConsumption) {
      sum += deviceConsumption[key];
    }

    console.log("called api");
    const data = {
      date: new Date(),
      totalConsumption: sum.toFixed(2),
      totalAmount: (sum * 5).toFixed(2),
    };
    console.log(data);
    const options = {
      method: "post",
      url: "http://localhost:3002/user/bills",
      data: data,
    };
    async function sendData() {
      try {
        await axios(options)
          .then(() =>
            setDeviceConsumption({ Fan: 0, TV: 0, Microwave: 0, Bulb: 0 })
          )
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    }
    sendData();
  }, 6000);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Room</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "35px",
          justifyContent: "space-around",
        }}
      >
        {deviceData.map((val, index) => {
          return (
            <Device
              deviceName={val.Name}
              consumption={val.consumption}
              img={deviceImage[index]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Room;

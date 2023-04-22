import { createContext, useState,useRef } from "react";
const billContext = createContext();
export default function DataProvider(props) {
  const [deviceConsumption,setDeviceConsumption] = useState({"Fan":0,"TV":0,"Microwave":0,"Bulb":0})
  const savedInterval = useRef();
  return (
    <billContext.Provider
      value={{
       setDeviceConsumption,
       deviceConsumption,
       savedInterval
      }}
    >
      {props.children}
    </billContext.Provider>
  );
}
export { billContext };
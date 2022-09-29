import {  CSSProperties } from "react";
import { HashLoader } from "react-spinners";



const override: CSSProperties = {
  display: "block",
  margin: "auto",
  paddin:10,
};

const styleDiv = {
    margin: 25
}

function Spinner() {

  return (
    <div className="sweet-loading" style={styleDiv}>
      
    <HashLoader cssOverride={override}  color="#6600cc" />
    </div>
  );
}

export default Spinner;
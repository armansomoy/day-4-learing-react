import React from "react";
import Watch from "../Watch/Watch";
import "./SunGlass.css";
import {
  add,
  multiply,
  divideTheFirstNumberByTheSecondNumber as devide,
} from "../../Utility/caluclulate";
// import {add} from '../../Utility/caluclulate';

const SunGlass = () => {
  const first = 10;
  const second = 20;
  const sum = add(first + second);
  const multiplier = multiply(first, second);
  const vag = devide(first, second); 
  return (
    <div>
      <h2>Sun Glass:</h2>
      <Watch></Watch>
    </div>
  );
};

export default SunGlass;

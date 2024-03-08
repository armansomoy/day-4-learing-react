import React, { useEffect, useState } from "react";
import Watch from "./componenets/Watch/Watch";

const Es6 = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

   // const watches = [
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 6",
  //     price: 399.0,
  //   },
  //   {
  //     id: 2,
  //     name: "Samsung Galaxy Watch 4",
  //     price: 249.99,
  //   },
  //   {
  //     id: 3,
  //     name: "Fitbit Versa 3",
  //     price: 229.95,
  //   },
  //   {
  //     id: 4,
  //     name: "Garmin Forerunner 945",
  //     price: 599.99,
  //   },
  //   {
  //     id: 5,
  //     name: "Huawei Watch GT 2 Pro",
  //     price: 299.99,
  //   },
  // ];
  return (
    <div>
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch}></Watch>
      ))}
    </div>
  );
};

export default Es6;

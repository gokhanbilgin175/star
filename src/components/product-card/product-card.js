import React from "react";
import Countries from "./countries (4).json";
const ProductCard = () => {
  const still = {
    backgroundColor: "red",
    color: "white",
  };
  return (
    <div>
      <select name="" id="" defaultValue="ulke">
        <option disabled value="ulke">
          bir şehir giriniz
        </option>
        {Countries.map((countrie, index) => (
          <option key={index}>{countrie.name}</option>
        ))}
      </select>

      <table>
        <thead>
          <tr>
            <td>adı</td>
            <td>dkfdfdfkd</td>
            <td>kofglfgkf</td>
          </tr>
        </thead>
        <tbody>
          {Countries.filter((item) => item.name.startsWith("B")).map(
            (item, i) => (
              <tr key={i} style={ i % 2 == 0 ? still : {...still,backgroundColor:"blue"} } >
             
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.code}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductCard;

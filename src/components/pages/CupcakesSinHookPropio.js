import React, { useEffect, useState } from "react";
import { get } from "axios";
import Cupcake from "../cards/Cupcake";

const Cupcakes = ({ uri, title }) => {
  const [cupcakes, setcupcakes] = useState([]);

  useEffect(() => {
    /* const data = async () => {
      try {
        const cupcake = await fetch(`http://localhost:3005/${uri}`);
        const response = await cupcake.json();
        setcupcakes(response);
      } catch (error) {
        console.log(error);
      }
    }; */

    const data = async () => {
      try {
        const cupcake = await get(`http://localhost:3005/${uri}`);
        setcupcakes(cupcake.data);
      } catch (error) {
        console.log(error);
      }
    };

    data();
  }, [uri]);

  const cupcakeIU = cupcakes.map(
    ({ id, descripcion, img, sabor, color, precio }) => (
      <Cupcake
        key={id}
        img={img}
        descripcion={descripcion}
        sabor={sabor}
        color={color}
        precio={precio}
      />
    )
  );

  return (
    <div className="ed-grid">
      {title && <h1>Pagina de Cupcake</h1>}
      {cupcakes ? (
        <section className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
          {cupcakeIU}
        </section>
      ) : (
        <span> Cargando...!!</span>
      )}
    </div>
  );
};

export default Cupcakes;

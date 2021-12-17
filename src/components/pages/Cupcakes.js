import React from "react";
import useFetch from "../../hooks/useFetch";
import Cupcake from "../cards/Cupcake";

const Cupcakes = ({ uri, title }) => {
  const [cupcakes, error] = useFetch(uri);

  if (error) {
    return <span> Hubo un error</span>;
  }

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

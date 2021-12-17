import { number, string } from "prop-types";
import "./Cupcake.css";

const Cupcake = ({ id, descripcion, img, sabor, color, precio }) => {
  return (
    <article
      key={id}
      className="s-radius-1 s-shadow-bottom background s-l-shadow-card-micro white-color s-pxy-2"
    >
      <img className="card-img" src={img} alt={sabor} />
      <p>{descripcion}</p>
      <span>Color: {color}</span>
      <span>Precio: {precio}</span>
    </article>
  );
};

Cupcake.propTypes = {
  precio: number,
  color: string.isRequired,
  descripcion: string.isRequired,
  sabor: string.isRequired,
  img: string,
};

Cupcake.defaultProps = {
  img: "https://p7.hiclipart.com/preview/957/835/814/cupcake-muffin-bakery-birthday-cake-food-silhouettes.jpg",
  precio: 0,
};

export default Cupcake;

import { useState } from "react";

const Partido = ({ idPartido, equipo1, equipo1_goles, equipo1_img, equipo2, equipo2_goles, equipo2_img, handleChange, puntos = 0 }) => {
  const partidoStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '5px 0'
  };

  const spanStyle = {
    margin: '0 5px'
  };
  const inputStyle = {
    width: "25px",
    padding:"5px"
  };

  const imgStyle = {
    width: '20px',
    height: '20px',
    margin: '0 5px'
  };


const [puntosEquipo1, setpuntosEquipo1] = useState(0)
const [puntosEquipo2, setpuntosEquipo2] = useState(0)


const [isReadOnly, setIsReadOnly] = useState(false); // 
  

  return (
    <div style={partidoStyle}>

     <span style={spanStyle}>{idPartido} </span>
      <img src={equipo1_img} alt={`${equipo1} flag`} style={imgStyle} />

      <span style={spanStyle}>{equipo1} </span>
      <input type="number" min={0}         readOnly={isReadOnly}
  style={inputStyle} onChange={(e) => {setpuntosEquipo1(e.target.value)}} /> 
      
      <span style={spanStyle}> vs </span>
      <span style={spanStyle}>{equipo2} </span>
      <input type="number" readOnly={isReadOnly} min={0} style={inputStyle} onChange={(e) => {setpuntosEquipo2(e.target.value)}} />

      <img src={equipo2_img} alt={`${equipo2} flag`} style={imgStyle} />

      <button onClick={(e) => {
        setIsReadOnly(true)
         e.preventDefault();
        handleChange({idPartido,puntosEquipo1,puntosEquipo2})} }>Enviar</button>
      <span style={spanStyle}>{puntos} </span>
      <span style={spanStyle}>{equipo1_goles} </span>
      <span style={spanStyle}>{equipo2_goles} </span>


    </div>
  );
};

export default Partido;
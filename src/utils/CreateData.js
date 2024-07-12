// createData.js
const PARTIDOS = 'https://bootcamp-2024-2d43236510d5.herokuapp.com/prode/partidos';
const EQUIPOS = 'https://bootcamp-2024-2d43236510d5.herokuapp.com/prode/equipos';

const getPartidos = async () => {
    const reqData = await fetch(PARTIDOS);
    const resData = await reqData.json();
    return resData.data;
} 

const getEquipos = async () => {
    const reqData = await fetch(EQUIPOS);
    const resData = await reqData.json();
    return resData.data;
} 

const createData = async () => {
    const partidos = await getPartidos();
    const equipos = await getEquipos();

    const newPartidos = partidos.map(partido => {
        const firstTeam = equipos.find(equipo => equipo.id == partido.score[0].team);
        const secondTeam = equipos.find(equipo => equipo.id == partido.score[1].team);

        return {
            idPartido: partido.id,
            equipo1: firstTeam.name,
            equipo1_goles: partido.score[0].goals,
            equipo1_img: firstTeam.flag,
            equipo2: secondTeam.name,
            equipo2_goles: partido.score[1].goals,
            equipo2_img: secondTeam.flag,
            
        };
    });

    return newPartidos;
}

export default createData;

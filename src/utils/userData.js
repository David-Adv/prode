import createData from "./CreateData"
export function userData (partidos) {
    const usuarios = ["pepito", "Pablo"]

     const user = {
            nombreUsuario: usuarios[1],
            infoPartidos: partidos  
     }
 
// localStorage.setItem("user1")

localStorage.setItem(usuarios[1], JSON.stringify(user));

}
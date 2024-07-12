export const manejarClick = (puntosUser1, input2, data1,data2)=>{
        
    
    
    const resultado = (equipo1, equipo2) =>{
        if(equipo1 == equipo2){
            return 'empate';
        }
        else if(equipo1 > equipo2)
            return 'gano equipo 1'
        else
        return 'gano equipo 2'
}


    const correctResult = resultado(data1, data2)
    const userResult = resultado(puntosUser1, input2)

    let puntaje = 0;

    
    if(puntosUser1 == data1){
        puntaje +=2;
    }
    if(input2 == data2){
        puntaje += 2;
    }
    if(correctResult == userResult)
        puntaje += 5;
    if(puntaje == 9)
        puntaje += 3


    return puntaje;
}


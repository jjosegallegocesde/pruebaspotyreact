import {servicioSpoty} from '../services/servicioSpoty.js'
import { useEffect, useState } from 'react'

export function Albumes (){

    //declarando mi primer useState
    const[canciones,setCanciones]=useState(null)
    const[carga,setCarga]=useState(true)

    useEffect(function(){

        servicioSpoty()
        .then(function(respuesta){
            setCanciones(respuesta.tracks)
            setCarga(false)
        })
        

    },[])

    if(carga){
        return(

            <>
                <h1>Cargando</h1>
            </>
        )

    }else{
        console.log(canciones)

        return(

            <>
                <h1>Hola soy albumes y soy un componente</h1>
            </>
        )

    }

    
    
}
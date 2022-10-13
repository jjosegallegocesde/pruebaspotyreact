import {servicioToken} from './token.js'

export async function servicioSpoty(){

    const URI="https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=US"

    let TOKEN=await servicioToken()

    
    TOKEN=TOKEN.token_type+' '+TOKEN.access_token;
    console.log(TOKEN);

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos
    


}
import './Musicos.css'

export function Musicos(){


    //un arreglo de objetos es formato comun al consumir un api
    let musicos=[
        {
            nombre:"en medellin 2009 su exito voy a ser bichota",
            rol:"2009-2015",
            url:"https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/camizama1.webp?alt=media&token=f257df94-685b-4334-a4fe-05e1ac58d9d9"
        },
        {
            nombre:"el gitarro",
            rol:"guitarrista",
            url:"https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/integrante1.jfif?alt=media&token=d4c3364e-f4c8-41f6-9d90-e894f2981cd1"
        }
    ]

    let conciertosMemorables=[
        {
            fecha:"",
            pais:"",
            descripcion:"",
            foto:"",
        }
    ]

    //mapeando un arreglo para hacer render

    

    return(
        <div className="row row-cols-1 row-cols-md-4 g-3 mt-5">
            

            {

                
                musicos.map(function(musico){
                    return(
                       <>
                       
                        <div className="col mt-3">
                            <div className="card h-100">
                                <img src={musico.url} className="img-fluid w-100 h-100" alt="foto"/>
                                <h1 className="text-center fuente">{musico.nombre}</h1>

                            </div>
                        </div>

                       </>
                    )
                })
            }

        </div>
    )



   
       
    


}
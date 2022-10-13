import './Integrantes.css'
import 'animate.css';
import WOW from 'wowjs';
import { useEffect } from 'react';


export function Integrantes(){

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
    }, [])

    return(
        <>
            <div className="row my-5 justify-content-center zoom">
                <div className="col-12 col-md-4">
                    <img src="https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/integrante1.jfif?alt=media&token=d4c3364e-f4c8-41f6-9d90-e894f2981cd1" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__bounce wow" data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>
                <div className='col-12 col-md-4 align-self-center border-start'>
                    <h2>Nombre del artista</h2>
                    <h3>Vocalista</h3>
                </div>
            </div>

            <div className="row my-5 justify-content-center zoom">
                <div className="col-12 col-md-4">
                    <img src="https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/integrante1.jfif?alt=media&token=d4c3364e-f4c8-41f6-9d90-e894f2981cd1" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__bounce wow" data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>
                <div className='col-12 col-md-4 align-self-center border-start'>
                    <h2>Nombre del artista</h2>
                    <h3>Vocalista</h3>
                </div>
            </div>
           
           

            

            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
            </div>
           
            
            
        </>
    )
}
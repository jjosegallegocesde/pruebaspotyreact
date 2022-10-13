import './Home.css'

import {SubMenu} from '../SubMenu/SubMenu.js'
import { Footer } from '../Footer/Footer.js'

export function Home(){

    let descripcionBanda="Incubus es una banda de rock alternativoestadounidense formado por el vocalista Brandon Boyd, guitarrista Mike Einziger y batería José Pasillas cuando estudiaban juntos y después expandieron con la inclusión del bajista Alex Dirk Lance Katunich y Gavin DJ Lyfe Koppell; ambos reemplazados finalmente por Ben Kenney y DJ Kilmore respectivamente. Para el 2001 tuvieron un enorme éxito con el sencillo Drive, seguido de su álbum Morning View.En 2003, la banda establece la fundación Make Yourself Foundation para donar dinero a fundaciones de beneficencia"

    return(
        <>
            <div className="banner">

            </div>

            <div className='bg-dark'>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center">INCUBUS</h1>
                            <p className='text-center'>{descripcionBanda}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <SubMenu></SubMenu>
            </div>

            <div>
                <Footer></Footer>
            </div>



        </>
    )

}
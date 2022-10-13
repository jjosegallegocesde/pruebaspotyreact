export function Carrusel(){
    return(

        <>
        
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/img2.jpg?alt=media&token=affea7be-ad0a-42c7-9dca-e852563dbb8f" height="800" className="w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/img2.jpg?alt=media&token=affea7be-ad0a-42c7-9dca-e852563dbb8f" className="w-100" height="800" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/img3.jpg?alt=media&token=157a349b-8aae-4828-92af-ee8d41d2b222" className="w-100" height="800" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>


        </>
    )
}
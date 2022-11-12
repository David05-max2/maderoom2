export const Carrousel = () => {
  return (
    <>
    <div className="mb-1">
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../../../public/closet/1.png" className="d-block w-100 img-fluid" alt="Oficina"/>
            <div className="carousel-caption d-none d-md-block">
              <h2>Remodela cada espacio de tu oficina y de tu hogar</h2>
              <p className="fs-3">Contactanos para cotizar tus diseños personalizados</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../../../public/closet/2.png" className="d-block w-100 img-fluid" alt="Escritorio"/>
            <div className="carousel-caption d-none d-md-block">
              <h2>Diseña tu propio escritorio a tu gusto</h2>
              <p className="fs-3">Escritorios Maderoom</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../../../public/closet/3.png" className="d-block w-100 img-fluid" alt="Cocina"/>
            <div className="carousel-caption d-none d-md-block">
              <h2>Diseña tu cocina a tu gusto</h2>
              <p className="fs-3">Cocinas Maderoom</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../../../public/closet/4.png" className="d-block w-100 img-fluid" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h2>Diseña tu cocina a tu gusto</h2>
              <p className="fs-3">Cocinas Maderoom</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </>
  )
}

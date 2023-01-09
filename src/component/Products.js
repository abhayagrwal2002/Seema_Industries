import React from 'react'
import img1 from './images/silicapowder.jpg'
import img2 from './images/quartzlumps.jpg'
import img4 from './images/silicagranules.jpg'
import img3 from './images/acidic-ramming-mass-manufacturer.jpg'
function Products() {
  return (
    <div className='container p-cont'>
        <div className="row">
       <div className="card border-0" style={{width:"20rem"}}>
        <img src={img1} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Silica/Quartz Powder</h5>
            <p className="card-text">Seema Industries manufactures best quality silica (Quartz) powder meeting all quality specifications for finest product. We are manufacturing silica (Quartz) powder in different mesh sizes and as per industry requirement</p>
            <a href='#' rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-primary">More</a>
            </div>
     </div>
     <div className="card border-0" style={{width:"20rem"}}>
        <img src={img2} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Quartz Granules</h5>
            <p className="card-text">Seema Industries manufactures best quality silica (Quartz) powder meeting all quality specifications for finest product. We are manufacturing silica (Quartz) powder in different mesh sizes and as per industry requirement</p>
            <a href='#' rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-primary">More</a>
            </div>
     </div>
     <div className="card border-0" style={{width:"20rem"}}>
        <img src={img3} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Ramming Mass</h5>
            <p className="card-text">Seema Industries manufactures best quality silica (Quartz) powder meeting all quality specifications for finest product. We are manufacturing silica (Quartz) powder in different mesh sizes and as per industry requirement</p>
            <a href='#' rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-primary">More</a>
            </div>
     </div>
     <div className="card border-0" style={{width:"20rem"}}>
        <img src={img4} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Quartz Grits</h5>
            <p className="card-text">Seema Industries manufactures best quality silica (Quartz) powder meeting all quality specifications for finest product. We are manufacturing silica (Quartz) powder in different mesh sizes and as per industry requirement</p>
            <a href='#' rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-primary">More</a>
            </div>
     </div>
     </div>
    </div>
  )
}

export default Products

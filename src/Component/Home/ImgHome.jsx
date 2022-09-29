import React from 'react'
import { Link } from 'react-router-dom'
const styleImagenes = {
    width: "80rem",
    height: "15rem",
    paddingTop : 10
}

const ImgHome = ({dir,img}) => {
  return (
    <div className='col-lg-6'  style={{padding: "10",margin:"1000"}}>
    <Link to ={dir}  className="btn  btn-outline" ><img src ={img} className="img-fluid" style={styleImagenes} alt="Combos"></img></Link>
    </div>
  )
}

export default ImgHome
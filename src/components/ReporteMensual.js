import React from 'react'
import logo from "../assets/logo.png";
import { Link } from "react-router-dom"

const ReporteMensual = () => {
  return (
    <div className="row">
    <div className="logohome col-lg-6 "></div>
    <div className="d-flex justify-content-center flex-column align-items-center col-lg-6">
      <img src={logo} height="100" width="100" alt="" />
      <h1 className="titulo text-center">Reporte mensual</h1>
      <Link className="btn btn-primary" to="/Admin">Volver</Link>
      <div class="card itemhome text-center">
        
      </div>
      <div className="d-flex justify-content-center">
        <div class="card itemhome text-center">
          <div class="card-body">
            <h5 class="card-title">Reporte de ventas mensual</h5>
            <p>Codigo: RP001</p>
            <p class="card-text">Productos vendidos:<br/></p>

            <div className="d-flex">

            <p class="card-text lista">
              <b>Item # 1</b>
              <br /> 232 U
            </p>
            <p class="card-text lista">
              <b>Item # 2</b>
              <br />176 U
            </p>
            <p class="card-text lista">
              <b>Item # 3</b>
              <br /> 378 U
            </p>
            <p class="card-text lista">
              <b>Item # 4</b>
              <br /> 324 U
            </p>

            </div>
            <h4>Ganancia:</h4>
            <br/>
            <h5><b>$ 2.570.532.234</b></h5>

            
            <Link class="btn btn-primary"
            
            >Descargar</Link>
          </div>
        </div>
      
      </div>
    </div>
  </div>

  )
}

export default ReporteMensual

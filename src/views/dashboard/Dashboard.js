import React, {lazy, useEffect, useState} from 'react'
import {CBadge, CCard, CCardBody, CCardHeader, CCol, CProgress, CRow} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from "axios";

const WidgetsDropdown = lazy(() => import('../clients/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../clients/WidgetsBrand.js'))

const Dashboard = () => {
  let [dashboardData, setDashboardData] = useState([]);


  useEffect(() => {
    const getInfo = async () => {
      const response = await axios.get('/api/dashbord', {
          headers: {
            //Authorization: 'Bearer ' + Token.jwtToken
          }
        }
      );
      console.log(response)
      setDashboardData(response.data);
      //console.log(partenersData)
    }
    getInfo()
  }, [])
  return (
    <>
      <WidgetsDropdown data={dashboardData}/>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Trafic {' & '} Ventes
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="6" xl="6">

                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Lundi
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="34"/>
                      <CProgress className="progress-xs" color="danger" value="78"/>
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Mardi
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="56"/>
                      <CProgress className="progress-xs" color="danger" value="94"/>
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Mercredi
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="12"/>
                      <CProgress className="progress-xs" color="danger" value="67"/>
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      jeudi
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="43"/>
                      <CProgress className="progress-xs" color="danger" value="91"/>
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      vendredi
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="22"/>
                      <CProgress className="progress-xs" color="danger" value="73"/>
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Samedi
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="53"/>
                      <CProgress className="progress-xs" color="danger" value="82"/>
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Dimanche
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="9"/>
                      <CProgress className="progress-xs" color="danger" value="69"/>
                    </div>
                  </div>
                  <div className="legend text-center">
                    <small>
                      <sup className="px-1"><CBadge shape="pill" color="info">&nbsp;</CBadge></sup>
                      Nouveaux clients
                      &nbsp;
                      <sup className="px-1"><CBadge shape="pill" color="danger">&nbsp;</CBadge></sup>
                      Clients récurrents
                    </small>
                  </div>
                </CCol>

                <CCol xs="12" md="6" xl="6">


                  <div className="progress-group mb-5">

                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon className="progress-group-icon" name="cil-globe-alt"/>
                      <span className="title">Organic Search</span>
                      <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="56"/>
                    </div>
                  </div>


                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon name="cib-facebook" className="progress-group-icon"/>
                      <span className="title">Facebook</span>
                      <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="15"/>
                    </div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon name="cib-twitter" className="progress-group-icon"/>
                      <span className="title">Twitter</span>
                      <span className="ml-auto font-weight-bold">37,564 <span className="text-muted small">(11%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="11"/>
                    </div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon name="cib-linkedin" className="progress-group-icon"/>
                      <span className="title">LinkedIn</span>
                      <span className="ml-auto font-weight-bold">27,319 <span
                        className="text-muted small">(8%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="8"/>
                    </div>
                  </div>


                </CCol>
              </CRow>

              <br/>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <WidgetsBrand withCharts data={dashboardData}/>


    </>
  )
}

export default Dashboard

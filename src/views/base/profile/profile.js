import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CListGroup, CListGroupItem, CRow} from '@coreui/react'
import {Col, Row} from "reactstrap";
import axios from "axios";

const Profile = () => {
  let [AdminData, setAdminData] = useState([]);
  const store = useSelector(state => state.auth);
  useEffect(() => {
    const getInfo = async () => {
      const response = await axios.get('/api/profile/' + store.userID);
      console.log(response)
      setAdminData(response.data)
    }
    getInfo()
  }, []);

  return (
    <div className='app flex-row animated fadeIn innerPagesBg'>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="12">
            <CCardGroup>
              <CCard className="p-4 userDetails ">
                <CCardBody>
                  <Row>
                    <Col className="p-4">
                      <h2>Profile</h2>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={{size: 1, order: 1, offset: 1}}>
                      <img
                        alt=''
                        className=''
                        style={{height: "170px", width: "170px"}}
                        src={AdminData.photo}
                      />
                    </Col>
                    <Col sm={{size: 8, order: 1, offset: 1}} style={{paddingLeft: 80}}>
                      <CListGroup>
                        <CListGroupItem><h5>Prénom : </h5><h5>{AdminData.firstName}</h5></CListGroupItem>
                        <CListGroupItem><h5>Nom : </h5><h5>{AdminData.lastName}</h5></CListGroupItem>
                        <CListGroupItem><h5>Adresse Email :</h5><h5> {AdminData.email}</h5></CListGroupItem>
                        <CListGroupItem><h5>Numéro de téléphone :</h5><h5> {AdminData.phone} </h5></CListGroupItem>
                      </CListGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>

                    </Col>
                  </Row>
                  <Row xs="4" style={{paddingTop: 20}}>
                    <Col xs="8">

                    </Col>
                    <Col>
                      <CButton block variant="outline" color="info" to="/profile/Settings">Modifier</CButton>
                    </Col>
                  </Row>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>

      </CContainer>
    </div>
  )
}

export default Profile

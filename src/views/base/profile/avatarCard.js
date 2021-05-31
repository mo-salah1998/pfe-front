import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormGroup,
  CInput,
  CInputFile,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CLabel,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {Col, Row} from "reactstrap";
import axios from "axios";
import {useHistory} from "react-router-dom";

const profileSettings = () => {

  let [AdminData, setAdminData] = useState([]);
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  const store = useSelector(state => state.auth);
  let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    //console.log(firstName,lastName,email,phone);

    axios.put('/api/profile/' + store.userID, {
      data: {
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'phone': phone,
      }
    })
      .then(function (response) {
        if (response.status === 200) {
          alert("les donners sont modifier");
          //window.location("/profile");
          history.push('/profile')

        }
      })
      .catch(function (error) {

        alert(error);

      });


  }


  useEffect(() => {
    const getInfo = async () => {
      const response = await axios.get('/api/profile/' + store.userID);
      console.log(response)
      setAdminData(response.data)
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setEmail(response.data.email);
      setPhone(response.data.phone);

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
                      <h2>Paramètre information </h2>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={{size: 1, order: 1, offset: 1}}>
                      <input type='file' style={{display: "none"}}/>
                      <img
                        alt=''
                        className=''
                        style={{height: "170px", width: "170px"}}
                        src={AdminData.photo}
                      />

                    </Col>
                    <Col sm={{size: 8, order: 1, offset: 1}} style={{paddingLeft: 80}}>
                      <CForm onSubmit={handleSubmit} className="form-horizontal">
                        <CFormGroup>
                          <CCol md="12">
                            <CLabel htmlFor="text-input">Prénom :</CLabel>
                            <CInputGroup>
                              <CInputGroupPrepend>
                                <CInputGroupText>
                                  <CIcon name="cil-user"/>
                                </CInputGroupText>
                              </CInputGroupPrepend>
                              <CInput id="input1-group1"
                                      name="input1-group1"
                                      defaultValue={AdminData.firstName}
                                      onChange={(e) => setFirstName(e.target.value)}/>
                            </CInputGroup>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup>
                          <CCol md="12">
                            <CLabel htmlFor="text-input">Nom :</CLabel>
                            <CInputGroup>
                              <CInputGroupPrepend>
                                <CInputGroupText>
                                  <CIcon name="cil-user"/>
                                </CInputGroupText>
                              </CInputGroupPrepend>
                              <CInput id="input1-group1"
                                      name="input1-group1"
                                      defaultValue={AdminData.lastName}
                                      onChange={(e) => setLastName(e.target.value)}/>
                            </CInputGroup>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup>
                          <CCol md="12">
                            <CLabel htmlFor="text-input">Adresse Email :</CLabel>
                            <CInputGroup>
                              <CInputGroupPrepend>
                                <CInputGroupText>
                                  <CIcon name="cil-user"/>
                                </CInputGroupText>
                              </CInputGroupPrepend>
                              <CInput id="input1-group1"
                                      name="input1-group1"
                                      type="email"
                                      defaultValue={AdminData.email}
                                      onChange={(e) => setEmail(e.target.value)}
                              />
                            </CInputGroup>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup>
                          <CCol md="12">
                            <CLabel htmlFor="text-input">Numéro de téléphone :</CLabel>
                            <CInputGroup>
                              <CInputGroupPrepend>
                                <CInputGroupText>
                                  <CIcon name="cil-user"/>
                                </CInputGroupText>
                              </CInputGroupPrepend>
                              <CInput id="input1-group1"
                                      name="input1-group1"
                                      defaultValue={AdminData.phone}
                                      onChange={(e) => setPhone(e.target.value)}
                              />
                            </CInputGroup>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup>
                          <CCol md="12">
                            <CLabel htmlFor="file-input">changer la photo de profile</CLabel>
                            <CInputFile id="file-input" name="file-input"/>
                          </CCol>
                        </CFormGroup>
                        <Row xs="4" style={{paddingTop: 20}}>
                          <Col xs="9">
                          </Col>
                          <Col>
                            <CButton block variant="outline"
                                     color="primary"
                                     type="submit">Enregistré </CButton>
                          </Col>
                        </Row>
                      </CForm>


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

export default profileSettings

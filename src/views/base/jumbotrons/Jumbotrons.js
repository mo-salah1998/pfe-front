import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import {DocsLink} from 'src/reusable'
import CIcon from '@coreui/icons-react';

const Jumbotrons = () => {
  const dispatch = useDispatch();
  const usr = useSelector((state) => state.username)
  const pwd = useSelector((state) => state.password)

  const [username, setUsername] = useState(usr);
  const [password, setPassword] = useState(pwd);
  const [success, setSuccess] = useState(false);

  const update = () => {
    dispatch({type: 'updateProfile', username, password})
    setSuccess(true)
  }
  return (
    <>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4 userDetails ">
                <CCardBody>
                  <CForm>
                    <h1>Profile</h1>
                    <p className="text-muted">Update your profile</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user"/>
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked"/>
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    {success && <p className='text-success'>Profile updated successfuly</p>}
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={update}>
                          Update
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default Jumbotrons

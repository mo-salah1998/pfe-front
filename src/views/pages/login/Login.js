import React, {useState} from 'react'

import {Link, useHistory} from "react-router-dom";
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
import CIcon from '@coreui/icons-react'
import axios from "axios";
import {authActions} from "../../../redux/actions/AuthAction";
import {useToasts} from "react-toast-notifications";
import {useDispatch} from "react-redux";

const Login = () => {

  //const { addToast } = useToasts();
  const {addToast} = useToasts();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  //const [authData, setAuthData] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    axios
      .post("api/auth/login", {
        email: email,
        password: password,
        //permission: 0, // admin (0-admin, 1-user)
        //socketID: socket.id,
      })
      .then(function (response) {
        setLoading(false);
        if (response.status === 200) {
          const authData = {
            jwtToken: response.data.token,
            fullname: "test",
            userID: response.data.userId,
            autoMatch: "response.data.account.autoMatch",
          };
          //setAuthData(authData)
          dispatch(authActions.signIn(authData));
          console.log(authData)

          //dispatch(authActions.signIn(authData));
          history.push("/dashboard");
        }
      })
      .catch(function (error) {
        setLoading(false); //
        console.log(error);
        addToast("Login information is incorrect", {
          appearance: "error", autoDismiss: true,
        });
      });
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CIcon
                  className="align-items-center"
                  name="logo-negative"
                  height={60}

                />
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-muted">Connectez-vous à votre compte</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user"/>
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="email"
                              placeholder="Email"
                              autoComplete="Email"
                              onChange={(e) => setEmail(e.target.value)}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked"/>
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password"
                              placeholder="Password"
                              autoComplete="current-password"
                              onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary"
                                 className="px-4"
                                 disabled={isLoading}
                                 type="submit">
                          {isLoading ? "Logging in..." : "se connecter"}
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0"> mot de pass oublié ?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>

            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login

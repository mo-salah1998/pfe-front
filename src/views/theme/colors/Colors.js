import React, {useEffect, useState} from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CCollapse,
  CDataTable,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CSpinner,
  CTabContent,
  CTabPane,
  CTabs,
} from '@coreui/react'
import {useSelector} from "react-redux";
import axios from "axios";


const Colors = () => {
  let [UsersData, setUserData] = useState([]);

  const Token = useSelector(state => state.auth);
  useEffect(() => {
    const onGetClient = async () => {
      const response = await axios.get('/api/client', {
          headers: {
            Authorization: 'Bearer ' + Token.jwtToken
          }
        }
      );

      //console.log(response)
      setUserData(response.data.users);
      //console.log(UsersData);
    }
    onGetClient()
    //console.log(UsersData)
  }, [])
  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }
  const [details, setDetails] = useState([])
  const fields = [
    {key: 'test', label: 'Nom', _style: {width: '20%'}},
    {key: 'test', label: 'Prenom', _style: {width: '20%'}},
    {key: 'test', _style: {width: '25%'}},
    {key: 'test', label: 'Telephone', _style: {width: '20%'}},
    {
      key: 'show_details',
      label: '',
      _style: {width: '1%'},
      sorter: false,
      filter: false
    }
  ]
  const getBadge = status => {
    switch (status) {
      case 'Active':
        return 'success'
      case 'Inactive':
        return 'secondary'
      case 'Pending':
        return 'warning'
      case 'Banned':
        return 'danger'
      default:
        return 'primary'
    }
  }

  return (
    <>
      <CRow>
        <CCol className="mb-4">
          <CCard>
            <CCardHeader>
              Gains
            </CCardHeader>

            <CCardBody>
              <CTabs>
                <CNav variant="tabs">
                  <CNavItem>
                    <CNavLink>
                      Food
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>
                      Service
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>
                      Shopping
                    </CNavLink>
                  </CNavItem>
                </CNav>
                <CTabContent>
                  <CTabPane>
                    <CRow>
                      <CCol>
                        <CCard>
                          <CCardHeader>
                            Food Gains
                          </CCardHeader>
                          <CCardBody>
                            <CDataTable
                              items={UsersData}
                              fields={fields}
                              columnFilter
                              tableFilter
                              footer
                              itemsPerPageSelect
                              itemsPerPage={5}
                              hover
                              sorter
                              activePage={1}
                              pagination
                              noItemsViewSlot={<div className="text-center my-5">
                                <CSpinner className="align-items-center"
                                          color="primary"
                                          style={{width: '3rem', height: '3rem', align: "center"}}
                                />
                              </div>
                              }
                              scopedSlots={{
                                'status':
                                  (item) => (
                                    <td>
                                      <CBadge color={getBadge(item.status)}>
                                        {item.status}
                                      </CBadge>
                                    </td>
                                  ),
                                'show_details':
                                  (item, index) => {
                                    return (
                                      <td className="py-2">
                                        <CButton
                                          color="primary"
                                          variant="outline"
                                          shape="square"
                                          size="sm"
                                          onClick={() => {
                                            toggleDetails(index)
                                            //onGetClientCliqued(item._id)
                                          }}
                                        >
                                          {details.includes(index) ? 'Hide' : 'Show'}
                                        </CButton>
                                      </td>
                                    )
                                  },
                                'details':
                                  (item, index) => {
                                    return (
                                      <CCollapse show={details.includes(index)}>
                                        <CCardBody>
                                          <h4>
                                            {item.username}
                                          </h4>
                                          <p className="text-muted">User since: {item.registered}</p>
                                          <CButton size="sm" color="info">
                                            User Settings
                                          </CButton>
                                          <CButton size="sm" color="danger" className="ml-1">
                                            Delete
                                          </CButton>
                                        </CCardBody>
                                      </CCollapse>
                                    )
                                  }
                              }}
                            />
                          </CCardBody>
                        </CCard>
                      </CCol>
                    </CRow>
                  </CTabPane>

                  <CTabPane>
                    <CRow>
                      <CCol>
                        <CCard>
                          <CCardHeader>
                            Service Gains
                          </CCardHeader>
                          <CCardBody>
                            <CDataTable
                              items={UsersData}
                              fields={fields}
                              columnFilter
                              tableFilter
                              footer
                              itemsPerPageSelect
                              itemsPerPage={5}
                              hover
                              sorter
                              pagination
                              border={false}
                              noItemsViewSlot={
                                <div className="text-center my-5">
                                  <CSpinner className="align-items-center"
                                            color="primary"
                                            style={{width: '3rem', height: '3rem', align: "center"}}
                                  />
                                </div>
                              }
                              scopedSlots={{
                                'rating':
                                  (item) => (
                                    <td>
                                      {item.rating.toFixed(2)}
                                    </td>
                                  ),
                                'joined':
                                  (item) => (
                                    <td>
                                      {item.joined.slice(0, 10)}
                                    </td>

                                  ),
                                'domain.type':
                                  (item) => (
                                    <td>
                                      <CBadge color={getBadge(item.domain.type)}>
                                        {item.domain.type}
                                      </CBadge>
                                    </td>

                                  ),
                                'show_details':
                                  (item, index) => {
                                    return (
                                      <td className="py-2">
                                        <CButton
                                          color="primary"
                                          variant="outline"
                                          shape="square"
                                          size="sm"
                                          onClick={() => {
                                            toggleDetails(index)
                                          }}
                                        >
                                          {details.includes(index) ? 'Hide' : 'Show'}
                                        </CButton>
                                      </td>
                                    )
                                  },
                                'details':
                                  (item, index) => {
                                    return (
                                      <CCollapse show={details.includes(index)}>
                                        <CCardBody>
                                          <h4>
                                            {item.username}
                                          </h4>
                                          <p className="text-muted">User since: {item.registered}</p>
                                          <CButton size="sm" color="info">
                                            User Settings
                                          </CButton>
                                          <CButton size="sm" color="danger" className="ml-1">
                                            Delete
                                          </CButton>
                                        </CCardBody>
                                      </CCollapse>
                                    )
                                  }
                              }}
                            />
                          </CCardBody>
                        </CCard>
                      </CCol>
                    </CRow>
                  </CTabPane>
                  <CTabPane>
                    <CRow>
                      <CCol>
                        <CCard>
                          <CCardHeader>
                            Shopping Gains
                          </CCardHeader>
                          <CCardBody>
                            <CDataTable
                              items={UsersData}
                              fields={fields}
                              columnFilter
                              tableFilter
                              footer
                              itemsPerPageSelect
                              itemsPerPage={5}
                              hover
                              sorter
                              pagination
                              noItemsViewSlot={
                                <div className="text-center my-5">
                                  <CSpinner className="align-items-center"
                                            color="primary"
                                            style={{width: '3rem', height: '3rem', align: "center"}}
                                  />
                                </div>
                              }
                              scopedSlots={{
                                'rating':
                                  (item) => (
                                    <td>
                                      {item.rating.toFixed(2)}
                                    </td>
                                  ),
                                'joined':
                                  (item) => (
                                    <td>
                                      {item.joined.slice(0, 10)}
                                    </td>

                                  ),
                                'domain.type':
                                  (item) => (
                                    <td>
                                      <CBadge color={getBadge(item.domain.type)}>
                                        {item.domain.type}
                                      </CBadge>
                                    </td>

                                  ),
                                'show_details':
                                  (item, index) => {
                                    return (
                                      <td className="py-2">
                                        <CButton
                                          color="primary"
                                          variant="outline"
                                          shape="square"
                                          size="sm"
                                          onClick={() => {
                                            toggleDetails(index)
                                          }}
                                        >
                                          {details.includes(index) ? 'Hide' : 'Show'}
                                        </CButton>
                                      </td>
                                    )
                                  },
                                'details':
                                  (item, index) => {
                                    return (
                                      <CCollapse show={details.includes(index)}>
                                        <CCardBody>
                                          <h4>
                                            {item.username}
                                          </h4>
                                          <p className="text-muted">User since: {item.registered}</p>
                                          <CButton size="sm" color="info">
                                            User Settings
                                          </CButton>
                                          <CButton size="sm" color="danger" className="ml-1">
                                            Delete
                                          </CButton>
                                        </CCardBody>
                                      </CCollapse>
                                    )
                                  }
                              }}
                            />
                          </CCardBody>
                        </CCard>
                      </CCol>
                    </CRow>
                  </CTabPane>
                </CTabContent>
              </CTabs>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Colors

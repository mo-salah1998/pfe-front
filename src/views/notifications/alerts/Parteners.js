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
import axios from "axios";
import {useSelector} from "react-redux";

const Parteners = () => {
  const onGetFoodParteners = async () => {
    //console.log(id)
    const response = await axios.get('/api/partner/withtype', {
      params: {
        type: 'food'
      }
    });
    setFoodPartenersData(response.data.partners);
    console.log(response)
  }
  const onGetServicesParteners = async () => {
    //console.log(id)
    const response = await axios.get('/api/partner/withtype', {
      params: {
        type: 'service'
      }
    });
    setServicePartenersData(response.data.partners);
    console.log(response)
  }
  const onGetShoppingParteners = async () => {
    //console.log(id)
    const response = await axios.get('/api/partner/withtype', {
      params: {
        type: 'shopping'
      }
    });
    setShoppingPartenersData(response.data.partners);
    //console.log(response)
  }
  let [partenersData, setPartenersData] = useState([]);
  let [foodPartenersData, setFoodPartenersData] = useState([]);
  let [servicePartenersData, setServicePartenersData] = useState([]);
  let [ShoppingPartenersData, setShoppingPartenersData] = useState([]);

  const Token = useSelector(state => state.auth);

  useEffect(() => {
    const onGetAllParteners = async () => {
      const response = await axios.get('/api/partner', {
          headers: {
            Authorization: 'Bearer ' + Token.jwtToken
          }
        }
      );
      console.log(response)
      setPartenersData(response.data.partners);
      console.log(partenersData)
    }
    onGetAllParteners()
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
    {key: 'partnerName', label: 'Partner Name', _style: {width: '20%'}},
    {key: 'joined', label: 'Date Rejoint', _style: {width: '20%'}},

    {key: 'rating', label: 'Rating', _style: {width: '20%'}},
    {key: 'email', _style: {width: '25%'}},
    {key: 'domain.type', label: 'Domain', _style: {width: '20%'}},
    {
      key: 'show_details',
      label: '',
      _style: {width: '1%'},
      sorter: false,
      filter: false
    }
  ]
  const getBadge = type => {
    switch (type) {
      case 'food':
        return 'success'
      case 'service':
        return 'info'
      case 'shopping':
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
              Partenaires
            </CCardHeader>
            <CCardBody>
              <CTabs>
                <CNav variant="tabs">
                  <CNavItem>
                    <CNavLink>
                      All
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink onClick={onGetFoodParteners}>
                      Food
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink onClick={onGetServicesParteners}>
                      Service
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink onClick={onGetShoppingParteners}>
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
                            Tous les Partenaires
                          </CCardHeader>
                          <CCardBody>
                            <CDataTable
                              items={partenersData}
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
                            Food Partenaires
                          </CCardHeader>
                          <CCardBody>
                            <CDataTable
                              items={foodPartenersData}
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
                            Services Partenaires
                          </CCardHeader>
                          <CCardBody>
                            <CDataTable
                              items={servicePartenersData}
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
                  <CTabPane>
                    <CRow>
                      <CCol>
                        <CCard>
                          <CCardHeader>
                            Shopping Partenaires
                          </CCardHeader>
                          <CCardBody>
                            <CDataTable
                              items={ShoppingPartenersData}
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

export default Parteners

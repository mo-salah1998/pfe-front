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
  CRow,
  CSpinner,
} from '@coreui/react'
import axios from "axios";
import {useSelector} from "react-redux";


const Clients = () => {

  let [UsersData, setUserData] = useState([]);
  let [currentPageSize, setCurrentPageSize] = useState(5);
  let [currentPage, setCurrentPage] = useState(1);
  const onGetClientCliqued = async (id) => {
    console.log(id)
    const response = await axios.get('/api/client/' + id);
    console.log(response)
    //setUserData( response.data.users );
    //console.log(UsersData);
    // setUserData({list: response});
    // console.log(UsersData);
  }
  // onPaginationChange = (limit) => {
  //   this.setState({ currentPageSize: limit });
  //   this.props.dispatch(getVerificationList(this.state.currentPage, limit));
  // };
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
    {key: 'firstName', label: 'Nom', _style: {width: '20%'}},
    {key: 'lastName', label: 'Prenom', _style: {width: '20%'}},
    {key: 'email', _style: {width: '25%'}},
    {key: 'phone', label: 'Telephone', _style: {width: '20%'}},
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
              Clients Liste
            </CCardHeader>

            <CCardBody>


              <CDataTable
                items={UsersData}
                fields={fields}
                columnFilter
                tableFilter
                footer
                itemsPerPageSelect
                itemsPerPage={currentPageSize}
                hover
                sorter
                activePage={currentPage}
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
                              onGetClientCliqued(item._id)
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
    </>
  )
}

export default Clients

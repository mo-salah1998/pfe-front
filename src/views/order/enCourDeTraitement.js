import React, {useEffect, useState} from "react";
import axios from "axios";
import {CButton, CCard, CCardBody, CCardHeader, CCol, CCollapse, CDataTable, CRow} from "@coreui/react";

const enCourDeTraitement = () => {
  const toNextStep = async (id) => {
    const response = await axios.patch('/api/order/preparedToTaked/' + id)
    console.log(response)
  }


  let [OrderData, setOrderData] = useState([]);
  useEffect(() => {
    const onGetClient = async () => {
      const response = await axios.get('/api/order/type', {

          params: {
            status: 'prepared'
          },
          headers: {
            //Authorization: 'Bearer ' + Token.jwtToken
          }
        }
      );

      //console.log(response)
      setOrderData(response.data.orders);

    }
    onGetClient()
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
    {key: '_id', label: 'Commande id', _style: {width: '20%'}},
    {key: 'client._id', label: 'Client', _style: {width: '20%'}},
    {key: 'partner.partnerName', label: 'livreur', _style: {width: '20%'}},
    {key: 'price', label: 'Prix', _style: {width: '20%'}},

    {
      key: 'show_details',
      label: '',
      _style: {width: '1%'},
      sorter: false,
      filter: false
    },
    {
      key: 'Next',
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
              les Commandes en cour de traitement
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>

                    <CCardBody>
                      <CDataTable
                        items={OrderData}
                        fields={fields}
                        columnFilter
                        tableFilter
                        footer
                        itemsPerPageSelect
                        itemsPerPage={5}
                        hover
                        sorter
                        pagination
                        scopedSlots={{
                          'client._id':
                            (item) => (
                              <td>
                                {item.client.firstName} {item.client.lastName}
                              </td>

                            ),
                          'partner.partnerName':
                            (item) => (
                              <td>
                                {item.partner.partnerName}
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
                          'Next':
                            (item, index) => {
                              return (
                                <td className="py-2">
                                  <CButton
                                    color="info"
                                    variant="outline"
                                    shape="square"
                                    size="sm"
                                    onClick={async () => {

                                      const response = await axios.patch('/api/order/preparedToTaked/' + item._id)

                                      //enCourDeTraitement(item._id)
                                    }}
                                  >
                                    Next
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
                                    <table className="table">
                                      <thead>
                                      <tr className="row">
                                        <th className="col">produit</th>
                                        <th className="col">prix</th>
                                        <th className="col">quantiter</th>

                                      </tr>
                                      </thead>
                                      <tbody>
                                      {item.items.map((items) => {
                                        return (<>
                                          <tr className="row">
                                            <td className="col">{items.product.name}</td>
                                            <td className="col">{items.product.basePrice}</td>
                                            <td className="col">{items.quantity}</td>
                                          </tr>
                                        </>)
                                        //let items.quantity
                                      })}
                                      </tbody>
                                    </table>


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
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}
export default enCourDeTraitement

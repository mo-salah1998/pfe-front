import React, {useState} from 'react'
import {
  CBadge, CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader, CCol, CCollapse, CDataTable, CNav, CNavItem, CNavLink, CRow, CTabContent, CTabPane, CTabs
} from '@coreui/react'
import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea
} from '@coreui/react-chartjs'
import {DocsLink} from 'src/reusable'
import usersData from "../users/UsersData";

const Charts = () => {
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
    {key: 'name', _style: {width: '40%'}},
    'registered',
    {key: 'role', _style: {width: '20%'}},
    {key: 'status', _style: {width: '20%'}},
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
              Index indentifiers
              <DocsLink name="CTabs"/>
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
                    <CNavLink>
                      En cour de traitement
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>
                      Valider
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>
                      Livrée
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>
                      Annuler
                    </CNavLink>
                  </CNavItem>

                </CNav>
                <CTabContent>
                  <CTabPane>
                    <CRow>
                      <CCol>
                        <CCard>
                          <CCardHeader>
                            Titre de Test
                          </CCardHeader>
                          <CCardBody>
                            <CDataTable
                              items={usersData}
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
                            Titre de Test
                          </CCardHeader>
                          <CCardBody>
                            <CDataTable
                              items={usersData}
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
                            Titre de Test
                          </CCardHeader>
                          <CCardBody>
                            <CDataTable
                              items={usersData}
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
                            Titre de Test
                          </CCardHeader>
                          <CCardBody>
                            <CDataTable
                              items={usersData}
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

export default Charts

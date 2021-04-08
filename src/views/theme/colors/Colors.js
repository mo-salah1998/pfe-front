import React, {useEffect, useState, createRef} from 'react'
import classNames from 'classnames'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody, CTabs, CNav, CNavItem, CNavLink, CTabContent, CTabPane, CDataTable, CBadge
} from '@coreui/react'
import {rgbToHex} from '@coreui/utils'
import {DocsLink} from 'src/reusable'
import usersData from "../../users/UsersData";

const fields = ['name', 'registered', 'role', 'status']

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
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


const Colors = () => {
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
                      Shopping
                    </CNavLink>
                  </CNavItem>
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
                              dark
                              hover
                              striped
                              bordered
                              size="sm"
                              itemsPerPage={10}
                              pagination
                              scopedSlots={{
                                'status':
                                  (item) => (
                                    <td>
                                      <CBadge color={getBadge(item.status)}>
                                        {item.status}
                                      </CBadge>
                                    </td>
                                  )
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
                              dark
                              hover
                              striped
                              bordered
                              size="sm"
                              itemsPerPage={10}
                              pagination
                              scopedSlots={{
                                'status':
                                  (item) => (
                                    <td>
                                      <CBadge color={getBadge(item.status)}>
                                        {item.status}
                                      </CBadge>
                                    </td>
                                  )
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
                              dark
                              hover
                              striped
                              bordered
                              size="sm"
                              itemsPerPage={10}
                              pagination
                              scopedSlots={{
                                'status':
                                  (item) => (
                                    <td>
                                      <CBadge color={getBadge(item.status)}>
                                        {item.status}
                                      </CBadge>
                                    </td>
                                  )
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

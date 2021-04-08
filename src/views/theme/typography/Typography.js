import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody, CCol, CDataTable, CBadge, CRow
} from '@coreui/react'
import {DocsLink} from 'src/reusable'
import usersData from "../../users/UsersData";

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
const fields = ['name', 'registered', 'role', 'status']
const Typography = () => {
  return (
    <>
      <CCard>
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
      </CCard>

    </>
  )
}

export default Typography

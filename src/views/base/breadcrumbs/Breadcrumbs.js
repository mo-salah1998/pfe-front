import React from 'react'
import {CCard, CCardBody, CCardGroup, CCardHeader, CCol, CRow, CWidgetProgressIcon} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {CChartBar, CChartPie} from "@coreui/react-chartjs";


const Breadcrumbs = () => {
  return (<>
      <CCard>
        <CCardHeader>
          Bar Chart

        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm="6" md="2">
              <CWidgetProgressIcon
                header="87.500"
                text="Visitors"
                color="gradient-info"
                inverse
              >
                <CIcon name="cil-people" height="36"/>
              </CWidgetProgressIcon>
            </CCol>
            <CCol sm="6" md="2">
              <CWidgetProgressIcon
                header="385"
                text="New Clients"
                color="gradient-success"
                inverse
              >
                <CIcon name="cil-userFollow" height="36"/>
              </CWidgetProgressIcon>
            </CCol>
            <CCol sm="6" md="2">
              <CWidgetProgressIcon
                header="1238"
                text="Products sold"
                color="gradient-warning"
                inverse
              >
                <CIcon name="cil-basket" height="36"/>
              </CWidgetProgressIcon>
            </CCol>
            <CCol sm="6" md="2">
              <CWidgetProgressIcon
                header="28%"
                text="Returning Visitors"
                color="gradient-primary"
                inverse
              >
                <CIcon name="cil-chartPie" height="36"/>
              </CWidgetProgressIcon>
            </CCol>
            <CCol sm="6" md="2">
              <CWidgetProgressIcon
                header="5:34:11"
                text="Avg. Time"
                color="gradient-danger"
                inverse
              >
                <CIcon name="cil-speedometer" height="36"/>
              </CWidgetProgressIcon>
            </CCol>
            <CCol sm="6" md="2">
              <CWidgetProgressIcon
                header="972"
                text="comments"
                color="gradient-info"
                inverse
              >
                <CIcon name="cil-speech" height="36"/>
              </CWidgetProgressIcon>
            </CCol>
          </CRow>

        </CCardBody>
      </CCard>
      <CCardGroup columns className="cols-2">
        <CCard>
          <CCardHeader>
            Bar Chart

          </CCardHeader>
          <CCardBody>

            <CChartBar
              datasets={[
                {
                  label: 'GitHub Commits',
                  backgroundColor: '#f87979',
                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                }
              ]}
              labels="indexes"
              options={{
                tooltips: {
                  enabled: true
                }
              }}
          />
        </CCardBody>
      </CCard>



      <CCard>
        <CCardHeader>
          Pie Chart
        </CCardHeader>
        <CCardBody>
          <CChartPie
            datasets={[
              {
                backgroundColor: [
                  '#41B883',
                  '#E46651',
                  '#00D8FF',
                  '#DD1B16'
                ],
                data: [40, 20, 80, 10]
              }
            ]}
            labels={['VueJs', 'EmberJs', 'ReactJs', 'AngularJs']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>


    </CCardGroup>
    </>
  )
}


export default Breadcrumbs

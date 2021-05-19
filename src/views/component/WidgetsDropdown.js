import React from 'react'
import {CCol, CRow, CWidgetDropdown} from '@coreui/react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'

const WidgetsDropdown = ({data}) => {

  return (
    <CRow>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header={data.nbTelechargement}
          text="Nombre de telechargement "
          footerSlot={
            <ChartLineSimple
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[65, 59, 84, 84, 51, 55, 40]}
              pointHoverBackgroundColor="primary"
              label="Nombre de telechargement"
              labels="months"
            />
          }
        >

        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header={data.nbTelechargementparJour}
          text="Nombre de Telechargementr aujourd'hui"
          footerSlot={
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[1, 18, 9, 17, 34, 22, 11]}
              pointHoverBackgroundColor="info"
              options={{elements: {line: {tension: 0.00001}}}}
              label="today download"
              labels="months"
            />
          }
        >

        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header={data.totalOrders}
          text="Nombre de commande passer"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{elements: {line: {borderWidth: 2.5}}}}
              pointHoverBackgroundColor="warning"
              label="Members"
              labels="months"
            />
          }
        >

        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header={data.totalPartenaires}
          text="Nombre de Partenaires"
          footerSlot={
            <ChartBarSimple
              className="mt-3 mx-3"
              style={{height: '70px'}}
              backgroundColor="rgb(250, 152, 152)"
              label="Members"
              labels="months"
            />
          }
        >

        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown

import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardGroup, CCardHeader, CCol, CRow, CWidgetProgressIcon} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {CChartBar, CChartPie} from "@coreui/react-chartjs";
import axios from "axios";

const Breadcrumbs = () => {
  let [statData, SetStatData] = useState([]);

  useEffect(() => {
    const onGetClient = async () => {
      const response = await axios.get('/api/statistique', {
          headers: {
            //Authorization: 'Bearer ' + Token.jwtToken
          }
        }
      );

      //console.log(response)
      SetStatData(response.data);
      // console.log(UsersData);
    }
    onGetClient()
    //console.log(UsersData)
  }, [])
  return (
    <>
      <CCard>
        <CCardHeader>
          Bar Chart

        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm="6" md="2">
              <CWidgetProgressIcon
                header={statData.TotalClient}
                text="Total Clients"
                color="gradient-info"
                inverse
              >
                <CIcon name="cil-people" height="36"/>
              </CWidgetProgressIcon>
            </CCol>
            <CCol sm="6" md="2">
              <CWidgetProgressIcon
                header={statData.newClient}
                text="Nouveaux Clients"
                color="gradient-success"
                inverse
              >
                <CIcon name="cil-userFollow" height="36"/>
              </CWidgetProgressIcon>
            </CCol>
            <CCol sm="6" md="2">
              <CWidgetProgressIcon
                header={statData.nbProduitVendue}
                text="Nombre Des Produits Vendue"
                color="gradient-warning"
                inverse
              >
                <CIcon name="cil-basket" height="36"/>
              </CWidgetProgressIcon>
            </CCol>
            <CCol sm="6" md="2">
              <CWidgetProgressIcon
                header={statData.nbProduitMoyPanier}
                text="moy produits par pannier"
                color="gradient-primary"
                inverse
              >
                <CIcon name="cil-chartPie" height="36"/>
              </CWidgetProgressIcon>
            </CCol>
            <CCol sm="6" md="2">
              <CWidgetProgressIcon
                header={statData.avgTime}
                text="Moy temps dans L'app"
                color="gradient-danger"
                inverse
              >
                <CIcon name="cil-speedometer" height="36"/>
              </CWidgetProgressIcon>
            </CCol>
            <CCol sm="6" md="2">
              <CWidgetProgressIcon
                header={statData.rate}
                text="clients feedback"
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
            Commande par moins

          </CCardHeader>
          <CCardBody>

            <CChartBar
              datasets={[
                {
                  label: 'Nombre de commande par moins',
                  backgroundColor: '#f87979',
                  data: statData.commandeParMois
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
          Les Commandes Par Categories
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
                data: statData.commandesParCategories
              }
            ]}
            labels={['Shopping', 'Food', 'Service']}
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

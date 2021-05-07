import React from 'react'
import CIcon from '@coreui/icons-react'
import axios from "axios";

//State = {list: []};
const onGetClient = async () => {
  const response = await axios.get('/api/client');
  // console.log(response);
  let clientData;
  clientData = response.data;
  console.log(clientData)
}

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Gains',
    to: '/theme/colors',
    icon: 'cil-dollar',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'L\'historique des Actions',
    to: '/theme/typography',
    icon: 'cil-pencil',
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Statistique',
    to: '/base/breadcrumbs',
    icon: 'cil-chart-pie',
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Messages',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Nouveau Messages',
        to: '/buttons/buttons',
        icon: 'cil-pencil',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Inbox',
        to: '/buttons/brand-buttons',
        icon: 'cil-inbox'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sent',
        to: '/buttons/button-groups',
        icon: "cil-share-boxed"
      }

    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Order',
    to: '/charts',
    icon: 'cil-basket'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Partenaires',
    to: '/parteners',
    icon: 'cil-people',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Clients',
    to: '/clients',
    icon: 'cil-people',
    onClick: onGetClient,

  },
  {
    _tag: 'CSidebarNavDivider'
  },


  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },

  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav

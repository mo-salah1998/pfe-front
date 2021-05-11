import React from 'react'
import CIcon from '@coreui/icons-react'

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
    icon: 'cil-pencil',
    'disabled': true,
    addLinkClass: 'c-disabled',

  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Statistique',
    to: '/base/breadcrumbs',
    icon: 'cil-chart-pie',
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Email',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Nouveau Email',
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
    _tag: 'CSidebarNavDropdown',
    name: 'Order',
    route: '/icons',
    icon: 'cil-basket',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All orders',
        to: '/icons/coreui-icons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'En cour de traitement',
        to: '/icons/coreui-icons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Enlevé',
        to: '/icons/flags',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Livrée',
        to: '/icons/brands',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Annuler',
        to: '/icons/brands',
      },
    ],
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

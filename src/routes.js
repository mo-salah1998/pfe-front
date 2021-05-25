import React from 'react';
import orderAnnuler from "./views/order/orderAnnuler";
import enCourDeTraitement from "./views/order/enCourDeTraitement";

const Toaster = React.lazy(() => import('./views/parteners/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const profileSettings = React.lazy(() => import('./views/base/jumbotrons/avatarCard'));

const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/email/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/email/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/email/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/email/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/order/All-orders/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/order/Livrée/Flags'));
const Brands = React.lazy(() => import('./views/order/enlevé/Brands'));
const Alerts = React.lazy(() => import('./views/parteners/alerts/Parteners'));
const Badges = React.lazy(() => import('./views/parteners/badges/Badges'));
const Modals = React.lazy(() => import('./views/parteners/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Clients = React.lazy(() => import('./views/clients/Clients'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const routes = [
  {path: '/', exact: true, name: 'Home'},
  {path: '/dashboard', name: 'Dashboard', component: Dashboard},
  {path: '/theme', name: 'Theme', component: Colors, exact: true},
  {path: '/theme/colors', name: 'Colors', component: Colors},
  {path: '/theme/typography', name: 'Typography', component: Typography},
  {path: '/base', name: 'Base', component: Cards, exact: true},
  {path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs},
  {path: '/base/cards', name: 'Cards', component: Cards},
  {path: '/base/carousels', name: 'Carousel', component: Carousels},
  {path: '/base/collapses', name: 'Collapse', component: Collapses},
  {path: '/base/forms', name: 'Forms', component: BasicForms},

  {path: '/base/list-groups', name: 'List Groups', component: ListGroups},
  {path: '/base/navbars', name: 'Navbars', component: Navbars},
  {path: '/base/navs', name: 'Navs', component: Navs},
  {path: '/base/paginations', name: 'Paginations', component: Paginations},
  {path: '/base/popovers', name: 'Popovers', component: Popovers},
  {path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar},
  {path: '/base/switches', name: 'Switches', component: Switches},
  {path: '/base/tables', name: 'Tables', component: Tables},
  {path: '/base/tabs', name: 'Tabs', component: Tabs},
  {path: '/base/tooltips', name: 'Tooltips', component: Tooltips},


  {path: '/profile', name: 'Profile', component: Jumbotrons, exact: true},
  {path: '/profile/Settings', name: 'Settings', component: profileSettings},

  {path: '/email', name: 'Buttons', component: Buttons, exact: true},
  {path: '/email/email', name: 'Buttons', component: Buttons},
  {path: '/email/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns},
  {path: '/email/button-groups', name: 'Button Groups', component: ButtonGroups},
  {path: '/email/brand-email', name: 'Brand Buttons', component: BrandButtons},
  {path: '/charts', name: 'Charts', component: Charts},


  {path: '/order', exact: true, name: 'Order', component: CoreUIIcons},
  {path: '/order/all', name: 'All Orders', component: CoreUIIcons},
  //{path: '/order/Livrée', name: 'Flags', component: Flags},
  {path: '/order/enlevé', name: 'Enlevé', component: Brands},
  {path: '/order/annuler', name: 'Anuler', component: orderAnnuler},
  {path: '/order/enCourDeTraitement', name: 'Traitement', component: enCourDeTraitement},
  {path: '/order/Livrée', name: 'Livrée', component: Flags},

  {path: '/parteners', name: 'Parteners', component: Alerts, exact: true},
  {path: '/parteners/alerts', name: 'Alerts', component: Alerts},
  {path: '/parteners/badges', name: 'Badges', component: Badges},
  {path: '/parteners/modals', name: 'Modals', component: Modals},
  {path: '/parteners/toaster', name: 'Toaster', component: Toaster},

  {path: '/clients', name: 'Clients', component: Clients},

  {path: '/users', exact: true, name: 'Users', component: Users},
  {path: '/users/:id', exact: true, name: 'User Details', component: User}
];

export default routes;

import { Home, Person, Equalizer, Assignment } from '@material-ui/icons';
import DashboardPage from '../views/Dashboard/Dashboard';

import UserProfile from '../views/UserProfile/UserProfile';
import Formation from '../views/Formation/Formation';
import Project from '../views/Project/Project';
import Skills from '../views/Skills/Skills';
export type Route = typeof dashboardRoutes[0];
const dashboardRoutes = [
  {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    navbarName: 'Material Dashboard',
    icon: Home,
    component: DashboardPage
  },
  {
    path: '/user',
    sidebarName: 'User Profile',
    navbarName: 'Profile',
    icon: Person,
    component: UserProfile
  },
  {
    path: '/formation',
    sidebarName: 'Formation',
    navbarName: 'Formation',
    icon: Assignment,
    component: Formation
  },
  {
    path: '/project',
    sidebarName: 'Project',
    navbarName: 'Project',
    icon: Equalizer,
    component: Project
  },
  {
    path: '/skills',
    sidebarName: 'Skills',
    navbarName: 'Skills',
    icon: Assignment,
    component: Skills
  },
  {
    path: '/',
    navbarName: 'Redirect',
    redirect: true,
    to: '/dashboard'
  }
];

export default dashboardRoutes;

import { Login } from './pages';
import { Account } from './pages/Account';
import Spinner from './components/Spinner';
import Loadable from 'react-loadable';

const Dashboard = Loadable({
  loader: () => import('./pages/Dashboard'),
  loading: Spinner
});

const Orders = Loadable({
  loader: () => import('./pages/Orders'),
  loading: Spinner
});

const Products = Loadable({
  loader: () => import('./pages/Products'),
  loading: Spinner
});

const NotFound = Loadable({
  loader: () => import('./pages/NotFound'),
  loading: Spinner
});

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/orders',
    component: Orders
  },
  {
    path: '/products',
    component: Products
  },
  {
    path: '/account',
    component: Account
  },
  {
    component: NotFound
  }
];

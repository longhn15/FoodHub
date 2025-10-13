import config from '~/config';
import { CustomerLayout, FooterOnly } from '~/layouts';
import CartDrawer from '~/pages/CartDrawer';
import Help from '~/pages/Help';
import Menu from '~/pages/Menu';
import Pay from '~/pages/Pay';

const publicRoutes = [
    { path: config.routes.menu, component: Menu, layout: CustomerLayout },
    { path: config.routes.help, component: Help, layout: CustomerLayout },
    { path: config.routes.cartdrawer, component: CartDrawer, layout: CustomerLayout},
    { path: config.routes.pay, component: Pay, layout: FooterOnly},
];

export  {publicRoutes};

import config from '~/config';

import { HeaderOnly, Layout2, Layout3, LayoutFix } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/ProFile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Project from '~/pages/Project';
import Register from '~/pages/SignUp';
import Login from '~/pages/SignIn';
import { Coin } from '~/pages/Coin';
import Live from '~/pages/Live';
import Layout4 from '~/layouts/Layout4';
//public route
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following, layout: LayoutFix },
    { path: config.routes.live, component: Live, layout: Layout2 },
    { path: config.routes.profile, component: Profile, layout: Layout3 },
    { path: config.routes.project, component: Project, layout: Layout4 },

    { path: config.routes.register, component: Register, layout: HeaderOnly },
    { path: config.routes.login, component: Login, layout: HeaderOnly },
    { path: config.routes.coin, component: Coin, layout: HeaderOnly },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };

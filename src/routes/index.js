import config from '~/config';

import { HeaderOnly, LayoutFix } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/ProFile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Project from '~/pages/Project';
import Register from '~/pages/SignUp';
import Login from '~/pages/SignIn';
//public route
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following, layout: LayoutFix },
    { path: config.routes.profile, component: Profile, layout: LayoutFix },
    { path: config.routes.project, component: Project, layout: LayoutFix },
    { path: config.routes.register, component: Register, layout: HeaderOnly },
    { path: config.routes.login, component: Login, layout: HeaderOnly },

    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };

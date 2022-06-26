import Home from '~/components/pages/Home';
import Following from '~/components/pages/Following/Following';
import Profile from '~/components/pages/ProFile';
import Upload from '~/components/pages/Upload/Upload';
import { HeaderOnly } from '~/layouts';
import Search from '~/components/pages/Search/Search';
import config from '~/config';
import Project from '~/components/pages/Project';
import { Register } from '~/components/pages/Register';
import { Login } from '~/components/pages/Login';
//public route
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.project, component: Project },
    { path: config.routes.register, component: Register },
    { path: config.routes.login, component: Login },

    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };

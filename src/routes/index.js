import Home from '~/components/pages/Home';
import Following from '~/components/pages/Following';
import Profile from '~/components/pages/ProFile';
import Upload from '~/components/pages/Upload';
import { HeaderOnly } from '~/components/Layout';
import Search from '~/components/pages/Search';
import routesConfig from '~/config/routes';

//public route
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];
const privatePoutes = [];
export { publicRoutes, privatePoutes };

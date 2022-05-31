import Home from '~/components/pages/Home';
import Following from '~/components/pages/Following';
import Profile from '~/components/pages/ProFile';
import Upload from '~/components/pages/Upload';
import { HeaderOnly } from '~/components/Layout';
import Search from '~/components/pages/Search';

//public route
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];
const privatePoutes = [];
export { publicRoutes, privatePoutes };

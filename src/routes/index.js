import config from '~/config';

import { HeaderOnly, Layout2, Layout3, LayoutFix, HeaderOnly1, HeaderOnlyFeedback, HeaderOnlyInbox } from '~/layouts';

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
import Setting from '~/pages/Setting';
import Feedback from '~/pages/Feedback';
import Inbox from '~/pages/Inbox';
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
    { path: config.routes.setting, component: Setting, layout: HeaderOnly1 },
    { path: config.routes.feedback, component: Feedback, layout: HeaderOnlyFeedback },
    { path: config.routes.inbox, component: Inbox, layout: HeaderOnlyInbox },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };

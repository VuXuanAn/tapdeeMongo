import React from 'react';

import ContactPage from './Page/scanNFC'
import Admin from './Page/admin'
import SettingAccount from './Page/settingAccount';
const Routes = [
    {
        path: '/admin',
        exact: false,
        main: () => <Admin />
    },
    {
        path: '/settingAccount',
        exact: false,
        main: () => < SettingAccount />
    },
    {
        path: '/:id',
        exact: true,
        main: ({ match }) => <ContactPage match={match} />
    },

];
export default Routes;
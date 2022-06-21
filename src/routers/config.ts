import { lazy } from 'react';

import { RouteItem } from '@types';
import { MainLayout } from '@layouts';
import { ROUTERS, EMPLOYEE_ROUTERS } from '@constants';

const PageListEmployee = lazy(() => import('@pages/employee/list'));
const PageAddEmployee = lazy(() => import('@pages/employee/add'));
const PageEditEmployee = lazy(() => import('@pages/employee/edit'));

export const routes: RouteItem[] = [
  {
    path: ROUTERS.EMPLOYEE,
    component: MainLayout,
    routes: [
      { path: `${ROUTERS.EMPLOYEE}${EMPLOYEE_ROUTERS.LIST}`, title: 'Summary', component: PageListEmployee },
      { path: `${ROUTERS.EMPLOYEE}${EMPLOYEE_ROUTERS.ADD}`, title: 'Add Employee', component: PageAddEmployee },
      {
        path: `${ROUTERS.EMPLOYEE}${EMPLOYEE_ROUTERS.EDIT}/:id`,
        title: 'Edit Employee',
        component: PageEditEmployee,
      },
    ],
  },
];

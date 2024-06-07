import { lazy } from 'react';

// Import components using lazy loading
const Dashboard = lazy(() => import('../pages/protected/Dashboard/Dashboard'));
const Library = lazy(() => import('../pages/protected/Library/Library'));
const Courses = lazy(() => import('../pages/protected/Courses/Courses'));
const Test = lazy(() => import('../pages/protected/Test/Test'))
const Messages = lazy(() => import('../pages/protected/Messages/Messages'))
const Help = lazy(() => import('../pages/protected/Help/Help'))
const Settings = lazy(() => import('../pages/protected/Settings/Settings'))

// Define routes
const routes = [
    {
        path: '/dashboard', // the url
        component: Dashboard, // view rendered
        service: true,
    },
    {
        path: '/library', // the url
        component: Library, // view rendered
    },
    {
        path: '/courses', // the url
        component: Courses, // view rendered
    },
    {
        path: '/test', // the url
        component: Test, // view rendered
    },
    {
        path: '/messages', // the url
        component: Messages, // view rendered
    },
    {
        path: '/help', // the url
        component: Help, // view rendered
    },
    {
        path: '/settings', // the url
        component: Settings, // view rendered
    },
    
]






// const routes = [
//     {
//         path: `/app/dashboard`,
//         element: <Dashboard />,
//         pageName: "Dashboard",
//         isProtected: true
//     },
//     {
//         path: '/app/library',
//         element: <Library />,
//         pageName: "Library",
//         isProtected: true
//     },
//     {
//         path: '/app/courses',
//         element: <Courses />,
//         pageName: "Courses",
//         isProtected: true
//     },
//     {
//         path: '/login-ch',
//         element: <h1>this is login</h1>,
//         pageName: "Courses",
//         isProtected: false
//     }
// ];

export default routes;

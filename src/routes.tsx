import {
    createHashRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'

import { AuthenticatedProtect, RequireAuth } from '@components/ProtectedPaths'
import { Paths } from '@constants'
import Home from '@pages/Home'
import Login from '@pages/Login'
import NotFound from '@pages/NotFound'
import Profile from '@pages/Profile'
import Root from '@pages/Root'
import SignUp from '@pages/SignUp'
import SingUpCredential from '@pages/SingUpCredential'
import TweetPage from '@pages/TweetPage'

const routes = [
    { path: Paths.NotFound, element: <NotFound /> },
    {
        path: Paths.SignUp,
        element: (
            <AuthenticatedProtect redirectTo="/profile">
                <SignUp />
            </AuthenticatedProtect>
        ),
    },
    {
        path: Paths.Login,
        element: (
            <AuthenticatedProtect redirectTo="/profile">
                <Login />
            </AuthenticatedProtect>
        ),
    },
    {
        path: Paths.SingUpCredential,
        element: (
            <AuthenticatedProtect redirectTo="/profile">
                <SingUpCredential />
            </AuthenticatedProtect>
        ),
    },
    {
        path: Paths.Profile,
        element: (
            <RequireAuth redirectTo="/login">
                <Profile />
            </RequireAuth>
        ),
    },
    {
        path: Paths.Tweet,
        element: (
            <RequireAuth redirectTo="/login">
                <TweetPage />
            </RequireAuth>
        ),
    },
    {
        path: Paths.Home,
        element: (
            <RequireAuth redirectTo="/login">
                <Home />
            </RequireAuth>
        ),
    },
]

export const router = createHashRouter(
    createRoutesFromElements(
        <Route path={Paths.SignUp} element={<Root />}>
            {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Route>
    )
)

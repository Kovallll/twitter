import {
    createHashRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'

import { ProtectedRoute, UnauthorizedRoute } from '@components/ProtectedPaths'
import { Paths } from '@constants'
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
            <UnauthorizedRoute redirectTo="/profile">
                <SignUp />
            </UnauthorizedRoute>
        ),
    },
    {
        path: Paths.Login,
        element: (
            <UnauthorizedRoute redirectTo="/profile">
                <Login />
            </UnauthorizedRoute>
        ),
    },
    {
        path: Paths.SingUpCredential,
        element: (
            <UnauthorizedRoute redirectTo="/profile">
                <SingUpCredential />
            </UnauthorizedRoute>
        ),
    },
    {
        path: Paths.Profile,
        element: (
            <ProtectedRoute redirectTo="/login">
                <Profile />
            </ProtectedRoute>
        ),
    },
    {
        path: Paths.Tweet,
        element: (
            <ProtectedRoute redirectTo="/login">
                <TweetPage />
            </ProtectedRoute>
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

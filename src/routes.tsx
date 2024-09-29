import {
    createHashRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'

import { Paths } from '@constants'
import Login from '@pages/Login'
import NotFound from '@pages/NotFound'
import Profile from '@pages/Profile'
import Root from '@pages/Root'
import SignUp from '@pages/SignUp'
import SingUpCredential from '@pages/SingUpCredential'

const routes = [
    { path: Paths.NotFound, element: <NotFound /> },
    { path: Paths.SignUp, element: <SignUp /> },
    { path: Paths.Login, element: <Login /> },
    { path: Paths.SingUpCredential, element: <SingUpCredential /> },
    { path: Paths.Profile, element: <Profile /> },
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

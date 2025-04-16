import { RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom'
import { Provider } from 'react-redux'
import { setNavigator } from './utils/navigation';
import { useNavigate } from 'react-router-dom';

import './styles/index.css'

import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
import YourMeal from './pages/YourMeal'
import Auth from './pages/Auth'
import MealDetail from './pages/MealDetail'
import NotFound from './pages/NotFound'
import Error from './pages/Error'
import store from './store/index.js'

// handle error router
const RouteErrorBoundary = () => {
    const error = useRouteError();
    // 404 Not Found Page
    if (error.status === 404) {
        return <NotFound />;
    }

    // For any other errors(server connection, network error,... )
    return <Error error={error} />;
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <RouteErrorBoundary />,
        children: [
            { index: true, element: <Home /> },
            { path: 'yourMeal', element: <YourMeal /> },
            { path: 'meal/:mealId', element: <MealDetail /> },
            { path: 'auth', element: <Auth /> },
            { path: 'error', element: <Error /> }
        ]
    }
]);

function App() {
    return <>
        <Provider store={store}>
            <RouterProvider router={router}>
            </RouterProvider>
        </Provider>
    </>
}

export default App

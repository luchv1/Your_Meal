import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../pages/RootLayout';
import Home from '../pages/Home';
import YourMeal from '../pages/YourMeal';
import Auth from '../pages/Auth';
import Error from '../pages/Error';
import MealDetail from '../pages/MealDetail';
import Category from '../pages/Category';

const router = [
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: 'yourMeal', element: <YourMeal /> },
            { path: 'meal/:mealId', element: <MealDetail /> },
            { path: 'auth', element: <Auth /> },
            { path: 'category', element: <Category /> }
        ]
    }
];

export default router;

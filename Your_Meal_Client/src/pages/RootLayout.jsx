import { useNavigate, Outlet } from "react-router-dom";

import Navigation from "../components/ui/Navigation";
import Footer from "../components/ui/Footer";
import Loader from "../components/ui/Loader";

const RootLayout = () => {
    return (
        <div className="food-website">
            <Navigation/>
            <main>
                <Loader/>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default RootLayout;
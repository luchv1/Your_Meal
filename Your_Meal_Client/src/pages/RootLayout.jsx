import { useNavigate, Outlet } from "react-router-dom";

import Navigation from "../components/ui/Navigation";
import Footer from "../components/ui/Footer";

const RootLayout = () => {
    return (
        <div className="food-website">
            <Navigation/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default RootLayout;
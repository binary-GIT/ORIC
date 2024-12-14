import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Footer from "../../components/Footer/footer"
import "../dashboard/dashboard.css"
import { PiFilesBold } from "react-icons/pi";

export default function Dashboard() {
    return (
        <div>
            <Navbar />
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="hero-heading">
                <div className="hero-heading-left">
                    <h1>Welcome</h1>
                    <h1>Dashboard User</h1>
                </div>
                <div className="icon">
                    <h1>
                        <PiFilesBold />
                    </h1>
                </div>
            </div>
            <div className="hero-section">
                <div className="hero-section-left">
                    <h1>My Dashboard</h1>
                    <div className="hero-section-left-f1">
                        <img src="./chart1.png" alt="Image not Loaded yet " />
                        <img src="./chart2.png" alt="Image not Loaded yet " /></div>
                    <div className="hero-section-left-s2">
                        <img src="./chart3.png" alt="Image not Loaded yet " />
                        <img src="./chart4.png" alt="Image not Loaded yet " /></div>
                </div>
                <div className="hero-section-2">
                    <h1>Access Forms</h1>
                    <button>RIC FORM 1</button>
                    <button>RIC FORM 2</button>
                    <button>RIC FORM 3</button>
                </div>

            </div>
            {/* <Footer /> */}
        </div>
    );
}
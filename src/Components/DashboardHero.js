import {React} from "react"
import Logo from "../Assets/logo.png"
import "../Styles/DashboardHero.css"
export default function DashboardHero () {
    return (
        <div className="dashboard-hero-container">
            <div className="dashboard-hero">
                <img src={Logo} alt="logo"/>
                <div className="health-data-container">
                    <div className="health-data-greeting"> hi </div>
                    <div className="health-data-heart">hi</div>
                    <div className="health-data-step">hi</div>
                    <div className="health-data-bp">h</div>
                    <div className="health-data-sleep">h</div>
                    <div className="health-data-overall">h</div>
                    <div className="health-data-graph">h</div>
                </div>
            </div>
        </div>
    )
}
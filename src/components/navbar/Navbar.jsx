import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import "./Navbar.scss"

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="left">
                <img src="https://i.ibb.co/yf1FZFY/Screenshot-2023-02-17-at-6-10-48-PM-removebg-preview.png" alt="" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>Populars</span>
                <span>Watchlist</span>
            </div>
            <div className="right">
                <Search className="icon"/>
                <span>KID</span>
                <Notifications className="icon"/>
                <div className="profile">
                    <ArrowDropDown className="icon"/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

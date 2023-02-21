import React, { useEffect, useState } from "react";
import { 
  Routes,
  Route,
  Link,
  Navigate,
  // useNavigate
} from "react-router-dom";
import { BiDownArrow,BiRightArrow } from "react-icons/bi";
import firstImpressionLogo from './assets/1stimpressionlogo.png'
import firstImpressionFooterLogo from './assets/1stimpfooterlogo.jpeg'
import FB from './assets/facebook.png'
import INS from './assets/instagram.png'
import TWT from './assets/twitter.png'
import Signin from "./components/signin"
import Signup from "./components/signup"
import Signout from "./components/signout"
import Home from "./components/home"
import Shopping from "./components/shopping"
import DesignConsultation from "./components/designConsultation"
import Aboutus from "./components/aboutus"
import Accessory from "./components/accessoryCollections";
import "./App.css"

function App() {
  const [scrolled,setScrolled] = useState(false)
  const [animate,setAnimate] = useState(false)
  // let navigate = useNavigate()
  // console.log("window.pageYOffset => ",window.pageYOffset)
  useEffect(()=>{
    const listenToScroll = () => {
      window.pageYOffset>100?setScrolled(true):setScrolled(false)
      window.pageYOffset>110?setAnimate(true):setAnimate(false)
    };
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  },[])
  // console.log("animate => ",animate)
  return (
      <>
        <header className={(scrolled?"affix":"")+(" ")+(animate?"animate":"")}>
          <Link to="/">
            <img src={firstImpressionLogo} alt="1st impression Logo" />
          </Link>
          <ul>
            <li className="position-relative dropdown">
              <span>Shopping Categories <BiDownArrow /></span>
              <ul className="menu">
                <li className="position-relative">
                  Living Room
                  <BiRightArrow />
                  <ul className="submenu">
                    <li>
                      <Link to="/sofa">Sofa</Link>
                    </li>
                    <li>
                      <Link to="/cornersofa">Corner Sofa</Link>
                    </li>
                    <li>
                      <Link to="/centertable">Center Table</Link>
                    </li>
                    <li>
                      <Link to="/sidetable">Side Table</Link>
                    </li>
                    <li>
                      <Link to="/singlechair">Single Chairs</Link>
                    </li>
                    <li>
                      <Link to="/ottomon&benches">Ottomon & Benches</Link>
                    </li>
                  </ul>
                </li>
                <li className="position-relative">
                  Dining Room
                  <BiRightArrow />
                  <ul className="submenu">
                    <li>
                      <Link to="/diningsets">Dining Sets</Link>
                    </li>
                    <li>
                      <Link to="/diningtables">Dining Tables</Link>
                    </li>
                    <li>
                      <Link to="/diningchairs">Dining Chairs</Link>
                    </li>
                    <li>
                      <Link to="/sideracks">Side Racks</Link>
                    </li>
                    <li>
                      <Link to="/hanginglights">Hanging Lights</Link>
                    </li>
                    <li>
                      <Link to="/wallmirrors">Wall Mirrors</Link>
                    </li>
                  </ul>
                </li>
                <li className="position-relative">
                  Bed Room
                  <BiRightArrow />
                  <ul className="submenu">
                    <li>
                      <Link to="/bedsets">Bed Sets</Link>
                    </li>
                    <li>
                      <Link to="/sidetable">Side Table</Link>
                    </li>
                    <li>
                      <Link to="/dressingtable">Dressing Table</Link>
                    </li>
                    <li>
                      <Link to="/bedroomchair">Bedroom Chairs</Link>
                    </li>
                    <li>
                      <Link to="/chester&wardrobe">Chester & Wardrobe</Link>
                    </li>
                    <li>
                      <Link to="/mirror">Mirror</Link>
                    </li>
                  </ul>
                </li>
                <li className="position-relative">
                  Kids Living
                  <BiRightArrow />
                  <ul className="submenu">
                    <li>Kids Bed</li>
                    <li>Bunker Bed</li>
                    <li>Kids Sofa</li>
                    <li>Kids Chester</li>
                    <li>Kids Table & Ottomon</li>
                    <li>Kids Lighting</li>
                  </ul>
                </li>
                <li className="position-relative">
                  Kitchen
                  <BiRightArrow />
                  <ul className="submenu">
                    <li>Cabinets</li>
                    <li>Counters</li>
                    <li>Sinks & Tabs</li>
                    <li>Appliances</li>
                    <li>Bar Chairs</li>
                    <li>Cookware</li>
                  </ul>
                </li>
                <li className="position-relative">
                  Lawn
                  <BiRightArrow />
                  <ul className="submenu">
                    <li>Soft Horticulture</li>
                    <li>Hard Horticulture</li>
                    <li>Indoor Plants</li>
                    <li>Lawn Sets</li>
                    <li>Lawn Benches</li>
                    <li>Lawn Lightings</li>
                  </ul>
                </li>
                <li className="position-relative">
                  Décor Accessories
                  <BiRightArrow />
                  <ul className="submenu">
                    <li>Rigs</li>
                    <li>Paintigs</li>
                    <li>Show Pieces</li>
                    <li>Wall Papers</li>
                    <li>Lamps</li>
                    <li>Cushions</li>
                  </ul>
                </li>
                <li className="position-relative">
                  Special Art
                  <BiRightArrow />
                  <ul className="submenu">
                    <li>Handmade Paintings</li>
                    <li>Blue Pottry</li>
                    <li>Handmade Lighting</li>
                    <li>Special collection</li>
                    <li>Handmade Rugs</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/design-consultation">
                <button type="button" className="head-btn">Design Consultation</button>
              </Link>
            </li>
            <li>
              <Link to="">Contact Us</Link>
            </li>
            <li>
              {localStorage.getItem("isLogged")?
              <Link to="/signout">Sign out</Link>:
              <Link to="/signup">Sign in / Sign up</Link>
              }
            </li>
          </ul>
        </header>
        <div className={scrolled?"routing":""}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shopping" element={<Shopping />} />
          <Route exact path="/design-consultation" element={<DesignConsultation />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signout" element={<Signout />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/sofa" element={<Accessory name="Sofa" />} />
          <Route exact path="/cornersofa" element={<Accessory name="Cornersofa" />} />
          <Route exact path="/centertable" element={<Accessory name="Centertable" />} />
          <Route exact path="/sidetable" element={<Accessory name="Sidetable" />} />
          <Route exact path="/singlechair" element={<Accessory name="Singlechair" />} />
          <Route exact path="/ottomon&benches" element={<Accessory name="Ottomon&benches" />} />
          <Route exact path="/diningsets" element={<Accessory name="Diningsets" />} />
          <Route exact path="/diningtables" element={<Accessory name="Diningtables" />} />
          <Route exact path="/diningchairs" element={<Accessory name="Diningchairs" />} />
          <Route exact path="/sideracks" element={<Accessory name="Sideracks" />} />
          <Route exact path="/hanginglights" element={<Accessory name="Hanginglights" />} />
          <Route exact path="/wallmirrors" element={<Accessory name="Wallmirrors" />} />
          <Route exact path="/bedsets" element={<Accessory name="Bedsets" />} />
          <Route exact path="/dressingtable" element={<Accessory name="Dressingtable" />} />
          <Route exact path="/bedroomchair" element={<Accessory name="Bedroomchair" />} />
          <Route exact path="/chester&wardrobe" element={<Accessory name="Chester&wardrobe" />} />
          <Route exact path="/mirror" element={<Accessory name="mirror" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
            {/* {token?(
              <>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/signout" element={<Signout />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </>
            ):(
              <>
                <Route exact path="/signin" element={<Signin />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route path="*" element={<Navigate to="/signin" replace />} />
              </>
            )} */}
        </Routes>
        </div>
        <footer>
          <div className="container pt-5 pb-5 d-flex">
            <div className="w-25 text-center d-inline-block">
              <img className="f-img" src={firstImpressionFooterLogo} alt="1st impression Logo" />
              <div className="social">
                <img src={FB} alt="Facebook" />
                <img src={INS} alt="Instagram" />
                <img src={TWT} alt="Twitter" />
              </div>
            </div>
            <div className="w-50 d-inline-block text-center list1">
              <div className="f-head">1st Impression</div>
              <ul>
                <li>Privacy</li>
                <li>Policies</li>
                <li>Terms and conditions</li>
              </ul>
              <ul>
                <li><Link to='/aboutus'>About us</Link></li>
                <li>Contact us</li>
                <li>How it works</li>
              </ul>
            </div>
            <div className="w-25 d-inline-block text-center list2">
              <div className="f-head">Get in touch</div>
              <ul>
                <li>
                  <span>Call us</span><br />
                  <span>021-237-0965</span>
                </li>
                <li>
                  <span>Email us</span><br />
                  <span>1stimpression@yahoo.com</span>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </>
    );
}

export default App;

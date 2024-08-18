import logo from '../assets/logonegro.png'
import underConstruction from '../assets/underConstruction.svg'

const Home = () => {
    return (
      <>
       <div className="main">
            <div className="izq">
                <img src={logo} alt="" className="logo"/>
                <div className="">
                    <p className="texto">Nuestra página se encuentra actualmente en construcción. Sin embargo, puedes contactarnos al correo:</p>
                    <p className="link_mail"><a href="mailto:info@mobel.com.co">info@mobel.com.co</a></p>
                </div>
            </div>
            <div className="der">
                <img src={underConstruction} alt="" className="construction_image"/>
            </div>
        </div>
      </>
    )
}
  
export { Home }
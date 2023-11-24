// ===========  images ====
import Logo from "../../assets/Images/Logo.png"

const Header = ({children}) => {
  return (
          <>
          
      <header>
           <div className={styles.logo_brand_container}>
                     <img src={Logo} alt="" />                                                                                                       
           </div>
           <nav>

           </nav>

           <div className="search_field_container">

           </div>

      </header>


          
          {children}
          </>
  )
}

export default Header

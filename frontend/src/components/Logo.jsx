import logo from "../assets/logo.jpeg";


function Logo() {

    return (

        <div className="logo">

            <img
                src={logo}
                alt="Expreso Andino"
            />

            <span>
                Expreso Andino
            </span>

        </div>

    );

}


export default Logo;
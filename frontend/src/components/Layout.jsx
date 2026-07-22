import Logo from "./Logo";


function Layout({
    children
}) {

    return (

        <>

            <header>

                <Logo />

            </header>


            {children}


        </>

    );

}


export default Layout;
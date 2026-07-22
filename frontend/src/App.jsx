import {
    Routes,
    Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import ShipmentDetail from "./pages/ShipmentDetail";
import Layout from "./components/Layout";


function App() {


    return (

        <Layout>

            <Routes>

                <Route
                    path="/"
                    element={<Dashboard />}
                />

                <Route
                    path="/shipments/:id"
                    element={<ShipmentDetail />}
                />
                
            </Routes>

        </Layout>

    );

}


export default App;
import {
    useEffect,
    useState
} from "react";


import api from "../api/axios";

import ShipmentTable from "../components/ShipmentTable";

import ShipmentStats from "../components/ShipmentStats";


function Dashboard() {


    const [shipments, setShipments] = useState([]);

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("ALL");

    const [loading, setLoading] = useState(true);



    useEffect(() => {

        api.get("/shipments/")

            .then((response) => {

                setShipments(response.data);

            })

            .catch((error) => {

                console.error(
                    "Error cargando envíos",
                    error
                );

            })

            .finally(() => {

                setLoading(false);

            });


    }, []);



    const filteredShipments = shipments.filter(
        (shipment) => {


            const matchesSearch =
                shipment.guide_number
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                );


            const matchesStatus =
                status === "ALL" ||
                shipment.status === status;


            return (
                matchesSearch &&
                matchesStatus
            );

        }
    );



    if (loading) {

        return (
            <h2>
                Cargando...
            </h2>
        );

    }



    return (

        <main>

            <h1>
                Gestión de Envíos
            </h1>

            <ShipmentStats
                shipments={shipments}
            />

            <div className="card">


                <div>


                    <input

                        type="text"

                        placeholder="Buscar por número de guía"

                        value={search}

                        onChange={(event) =>
                            setSearch(
                                event.target.value
                            )
                        }

                    />



                    <select

                        value={status}

                        onChange={(event) =>
                            setStatus(
                                event.target.value
                            )
                        }

                    >

                        <option value="ALL">
                            Todos
                        </option>


                        <option value="CREATED">
                            Creado
                        </option>


                        <option value="IN_TRANSIT">
                            En tránsito
                        </option>


                        <option value="DELIVERED">
                            Entregado
                        </option>


                    </select>


                </div>



                <ShipmentTable

                    shipments={filteredShipments}

                />


            </div>


        </main>

    );

}


export default Dashboard;
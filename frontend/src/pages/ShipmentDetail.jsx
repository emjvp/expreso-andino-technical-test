import {
    useEffect,
    useState
} from "react";


import {
    useParams,
    Link
} from "react-router-dom";


import api from "../api/axios";


import TrackingTimeline from "../components/TrackingTimeline";

import StatusBadge from "../components/StatusBadge";



function ShipmentDetail() {


    const { id } = useParams();


    const [shipment, setShipment] = useState(null);



    useEffect(() => {


        api.get(`/shipments/${id}/`)

            .then((response) => {

                setShipment(response.data);

            });


    }, [id]);



    if (!shipment) {

        return (
            <h2>
                Cargando...
            </h2>
        );

    }



    return (

        <main>

            <div className="card">
                <Link to="/">
                    ← Volver
                </Link>


                <h1>
                    Envío {shipment.guide_number}
                </h1>


                <section>

                    <p>
                        <strong>
                            Cliente:
                        </strong>

                        {" "}

                        {shipment.customer}

                    </p>


                    <p>
                        <strong>
                            Ruta:
                        </strong>

                        {" "}

                        {shipment.origin}

                        {" → "}

                        {shipment.destination}

                    </p>


                    <p>
                        <strong>
                            Estado:
                        </strong>

                        {" "}

                        <StatusBadge
                            status={shipment.status}
                        />
                    </p>


                </section>


                <h2>
                    Seguimiento
                </h2>


                <TrackingTimeline
                    events={shipment.tracking_events}
                />
            </div>

        </main>

    );

}


export default ShipmentDetail;
import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

function ShipmentTable({ shipments }) {


    return (

        <table>

            <thead>

                <tr>

                    <th>
                        Guía
                    </th>

                    <th>
                        Cliente
                    </th>

                    <th>
                        Origen
                    </th>

                    <th>
                        Destino
                    </th>

                    <th>
                        Estado
                    </th>

                    <th>
                        Acción
                    </th>

                </tr>

            </thead>


            <tbody>

                {
                    shipments.map((shipment) => (

                        <tr key={shipment.id}>

                            <td>
                                {shipment.guide_number}
                            </td>


                            <td>
                                {shipment.customer}
                            </td>


                            <td>
                                {shipment.origin}
                            </td>


                            <td>
                                {shipment.destination}
                            </td>


                            <td>
                                <StatusBadge
                                    status={shipment.status}
                                />                            
                            </td>


                            <td>

                                <Link
                                    to={`/shipments/${shipment.id}`}
                                >
                                    Ver
                                </Link>

                            </td>

                        </tr>

                    ))
                }

            </tbody>

        </table>

    );

}


export default ShipmentTable;
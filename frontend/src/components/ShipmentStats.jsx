function ShipmentStats({
    shipments
}) {


    const total = shipments.length;


    const inTransit = shipments.filter(
        shipment =>
            shipment.status === "IN_TRANSIT"
    ).length;


    const delivered = shipments.filter(
        shipment =>
            shipment.status === "DELIVERED"
    ).length;


    const created = shipments.filter(
        shipment =>
            shipment.status === "CREATED"
    ).length;



    return (

        <div className="stats">


            <div className="stat-card">

                <h3>
                    Total
                </h3>

                <span>
                    {total}
                </span>

            </div>



            <div className="stat-card">

                <h3>
                    En tránsito
                </h3>

                <span>
                    {inTransit}
                </span>

            </div>



            <div className="stat-card">

                <h3>
                    Entregados
                </h3>

                <span>
                    {delivered}
                </span>

            </div>



            <div className="stat-card">

                <h3>
                    Creados
                </h3>

                <span>
                    {created}
                </span>

            </div>


        </div>

    );

}


export default ShipmentStats;
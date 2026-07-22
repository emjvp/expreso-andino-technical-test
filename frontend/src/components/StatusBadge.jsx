function StatusBadge({
    status
}) {


    const labels = {

        CREATED: "Creado",

        IN_TRANSIT: "En tránsito",

        DELIVERED: "Entregado",

        OUT_FOR_DELIVERY: "En entrega"

    };


    return (

        <span className={`status ${status}`}>

            {
                labels[status] || status
            }

        </span>

    );

}


export default StatusBadge;
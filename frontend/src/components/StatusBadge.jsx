function StatusBadge({
    status
}) {


    const labels = {

        CREATED: "Creado",

        PICKED_UP: "Recogido",

        IN_TRANSIT: "En tránsito",

        DELIVERED: "Entregado",

        OUT_FOR_DELIVERY: "En entrega",

        RETURNED: "Devuelto"

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
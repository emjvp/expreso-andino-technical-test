function TrackingTimeline({
    events
}) {


    return (

        <ul>

            {
                events.map((event) => (

                    <li key={event.id}>

                        <strong>
                            {event.status}
                        </strong>


                        {" - "}


                        {event.location}


                        <br />


                        <small>
                            {
                                new Date(
                                    event.created_at
                                )
                                .toLocaleString()
                            }
                        </small>


                    </li>

                ))
            }

        </ul>

    );

}


export default TrackingTimeline;
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../Providers/Api";
import { UserContext } from "../../Providers/User";
import CardEvent from "../CardEvent";
import { Container } from "./style";

export const ContainerEventsBbc = () => {
  const [events, setEvents] = useState([]);

  const { user } = useContext(UserContext);
  const { getEventsByUser } = useContext(ApiContext);

  return (
    <Container>
      <h2>Pedidos Recebidos</h2>

      {events?.map((event, i) => {
        return (
          <CardEvent
            key={i}
            event={event}
            events={events}
            setEvents={setEvents}
          />
        );
      })}
    </Container>
  );
};

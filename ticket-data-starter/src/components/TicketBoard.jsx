import { useEffect, useState } from "react"
import { Button } from "react-bootstrap";
import Ticket from "./Ticket";

export default function TicketBoard(props) {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetch('https://cs571.org/s23/week6/api/tickets', {
            headers: {
                "X-CS571-ID": "ENTER_YOUR_BID"
            }
        })
            .then(res => res.json())
            .then(json => {
                setTickets(json.messages);
            })
    }, [])

    const createTicket = () => {
        // TODO: Make a POST to https://cs571.org/s23/week6/api/tickets
    }

    return <div>
        <h1>Ticket Board</h1>
        <p>Create a ticket...</p>
        {
            /* TODO Create fields for input values of a ticket name and a ticket body. */
        }
        <Button onClick={createTicket}>Create a Ticket</Button>
        <hr/>
        {
            tickets.map(t => <Ticket key={t.id} {...t}/>)
        }
    </div>
}
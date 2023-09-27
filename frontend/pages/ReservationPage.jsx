import { useEffect, useState } from "react"
import { getAllReservatios } from "../api/tasks.api";
import { useNavigate } from "react-router-dom";
import '../src/assets/css/style.css';

export function ReservationPage() {
    //return <ReservationListComponent/>;
    const [reservations, setReservations] = useState([]);
    useEffect(() => {
        async function loadReservations() {
            const res = await getAllReservatios();
            setReservations(res.data);
        }
        loadReservations();
    }, []);

    const navigate = useNavigate();

    return (
        <div className="container">
            <h1 className="text-center mt-5 mb-5">Reservations</h1>
            <table className="table table-dark table-hover ml-5 mr-5 ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Check-In</th>
                        <th scope="col">Check-Out</th>
                        <th scope="col">Room Type</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {reservations.map(reservation => (
                    <tbody className="table-group-divider" key={reservation.id}>
                        <tr>
                            <th scope="row">{reservation.id}</th>
                            <td>{reservation.first_name}</td>
                            <td>{reservation.last_name}</td>
                            <td>{reservation.email}</td>
                            <td>{reservation.checkin}</td>
                            <td>{reservation.checkout}</td>
                            <td>{reservation.room_type}</td>
                            <td>
                                <button onClick={() => { navigate(`/reservation-form/${reservation.id}`) }} className="btn btn-warning"><i className="fa-solid fa-pencil"></i></button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

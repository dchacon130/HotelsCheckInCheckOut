import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createReservation, deleteReservation, updateReservation, getReservationById } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

export function ReservationFormPage() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateReservation(params.id, data);
            toast.success('Reservation was Updated!');
        } else {
            await createReservation(data);
            toast.success('Reservation was Created!');
        }
        navigate("/reservations");
    });

    useEffect(() => {
        async function loadReservation() {
            if (params.id) {
                const { data } = await getReservationById(params.id);
                setValue('first_name', data.first_name);
                setValue('last_name', data.last_name);
                setValue('phone', data.phone);
                setValue('email', data.email);
                setValue('address', data.address);
                setValue('city', data.city);
                setValue('zip_code', data.zip_code);
                setValue('details', data.details);
                setValue('add_guests', data.add_guests);
                setValue('checkin', data.checkin);
                setValue('checkout', data.checkout);
                setValue('room_type', data.room_type);
                setValue('total', data.total);
            }
        }
        loadReservation();
    }, []);

    return (
        <div className="container">
            <h1 className="text-center mt-2 mb-2">Create a Reservation</h1>
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <p>First Name
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="form-label form-control mb-3"
                                        {...register("first_name", { required: true })}
                                    />{errors.first_name && <span className="alert alert-danger alert-xs" role="alert"><i className="fa-solid fa-triangle-exclamation"></i> This field is required</span>}</p>
                                <p>Last Name
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="form-label form-control mb-3"
                                        {...register("last_name", { required: true })}
                                    />{errors.last_name && <span className="alert alert-danger" role="alert"><i className="fa-solid fa-triangle-exclamation"></i> This field is required</span>}</p>
                                <p>Phone Number
                                    <input
                                        type="numer"
                                        placeholder="Phone Number"
                                        className="form-label form-control mb-3"
                                        {...register("phone", { required: true })}
                                    />{errors.phone && <span className="alert alert-danger" role="alert"><i className="fa-solid fa-triangle-exclamation"></i> This field is required</span>}</p>
                                <p>Email
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="form-label form-control mb-3"
                                        {...register("email", { required: true })}
                                    />{errors.email && <span className="alert alert-danger" role="alert"><i className="fa-solid fa-triangle-exclamation"></i> This field is required</span>}</p>
                            </div>
                            <div className="col-4">
                                <p>Address
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        className="form-label form-control mb-3"
                                        {...register("address", { required: true })}
                                    />{errors.address && <span className="alert alert-danger" role="alert"><i className="fa-solid fa-triangle-exclamation"></i> This field is required</span>}</p>
                                <p>City
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="form-label form-control mb-3"
                                        {...register("city", { required: true })}
                                    />{errors.city && <span className="alert alert-danger" role="alert"><i className="fa-solid fa-triangle-exclamation"></i> This field is required</span>}</p>
                                <p>Zip Code
                                    <input
                                        type="text"
                                        placeholder="Zip Code"
                                        className="form-label form-control mb-3"
                                        {...register("zip_code", { required: true })}
                                    />{errors.zip_code && <span className="alert alert-danger" role="alert"><i className="fa-solid fa-triangle-exclamation"></i> This field is required</span>}</p>
                                <p>Details
                                    <input
                                        type="text"
                                        placeholder="Details"
                                        className="form-label form-control mb-3"
                                        {...register("details", { required: true })}
                                    />{errors.details && <span className="alert alert-danger" role="alert"><i className="fa-solid fa-triangle-exclamation"></i> This field is required</span>}</p>
                                <p>Add guests
                                    <input
                                        type="text"
                                        placeholder="Add guests"
                                        className="form-label form-control mb-3"
                                        {...register("add_guests", { required: true })}
                                    />{errors.add_guests && <span className="alert alert-danger form-control" role="alert"><i className="fa-solid fa-triangle-exclamation"></i> This field is required</span>}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 text-start">
                        <p>Check In YYYY-MM-DD<br />
                            <input
                                type="date"
                                placeholder="Check In YYYY-MM-DD"
                                className="form-label form-control mb-3"
                                {...register("checkin", { required: true })}
                            />{errors.checkin && <span className="alert alert-danger form-control" role="alert"><i className="fa-solid fa-triangle-exclamation"></i> This field is required</span>}</p>
                        <p>Check Out YYYY-MM-DD<br />
                            <input
                                type="date"
                                placeholder="Check Out YYYY-MM-DD"
                                className="form-label form-control mb-3"
                                {...register("checkout", { required: true })}
                            />{errors.checkout && <span className="alert alert-danger form-control" role="alert"><i className="fa-solid fa-triangle-exclamation"></i> This field is required</span>}</p>

                        <p>Room type<br />
                            <input
                                type="text"
                                placeholder="Room type"
                                className="form-label form-control mb-3"
                                {...register("room_type", { required: true })}
                            /><br />{errors.room_type && <span className="alert alert-danger form-control" role="alert"><i className="fa-solid fa-triangle-exclamation"></i> This field is required</span>}</p>
                        <p>Total<br />
                            <div className="input-group mb-3">
                                <span className="input-group-text">$</span>
                                <input type="text"
                                    className="form-control" aria-label="Dollar amount (with dot and two decimal places)"
                                    {...register("total", { required: true })} /><br />
                                {errors.total && <span className="alert alert-danger form-control" role="alert"><i className="fa-solid fa-triangle-exclamation"></i> This field is required</span>}
                            </div>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-success float-end me-5"><i className="fa-regular fa-circle-check"></i></button>
                        {params.id &&
                            <a type="button" onClick={
                                async () => {
                                    const accepted = window.confirm(`Are you sure to delete the reservation ${params.id}`);
                                    if (accepted) {
                                        await deleteReservation(params.id);
                                        toast.success(`Reservation ${params.id} was Deleted!`);
                                        navigate("/reservations");
                                    }
                                }
                            } className="btn btn-danger"><i className="fa-solid fa-recycle"></i></a>
                        }
                    </div>
                </div>
            </form >
        </div >

    )
}

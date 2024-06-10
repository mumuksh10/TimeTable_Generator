import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";

const Classrooms = () => {
    const { classrooms } = usePage().props;

    return (
        <div className="container mt-5">
            <h1
                className="mb-4 text-center"
                style={{ fontWeight: "bold", color: "#0056b3" }}
            >
                Classrooms
            </h1>
            <div className="mb-4 text-right">
                <Link href="/classrooms/create" className="btn btn-success">
                    <i className="fas fa-plus mr-2"></i> Add Classroom
                </Link>
            </div>
            <div className="card shadow-sm">
                <div className="card-header bg-primary text-white">
                    <h5 className="mb-0">Classrooms List</h5>
                </div>
                <div className="card-body">
                    {classrooms.length > 0 ? (
                        <table className="table table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classrooms.map((classroom) => (
                                    <tr key={classroom.id}>
                                        <td>{classroom.name}</td>
                                        <td className="d-flex align-items-center">
                                            <Link
                                                href={`/classrooms/${classroom.id}/edit`}
                                                className="btn btn-sm btn-warning mr-2"
                                            >
                                                <i className="fas fa-edit"></i>{" "}
                                                Edit
                                            </Link>
                                            <Link
                                                href={`/classrooms/${classroom.id}/delete`}
                                                method="delete"
                                                className="btn btn-sm btn-danger"
                                            >
                                                <i className="fas fa-trash-alt"></i>{" "}
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div
                            className="alert alert-info text-center"
                            role="alert"
                        >
                            No classrooms available. Please add some classrooms.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Classrooms;

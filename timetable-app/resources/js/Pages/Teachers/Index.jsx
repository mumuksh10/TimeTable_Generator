// resources/js/Pages/Teachers/Index.jsx

import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";

const Teachers = () => {
    const { teachers } = usePage().props;

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <Link href="/" className="btn btn-secondary">
                    Back to Dashboard
                </Link>
            </div>
            <h1
                className="mb-4 text-center"
                style={{ fontWeight: "bold", color: "#007bff" }}
            >
                Teachers Management
            </h1>
            <div className="mb-4 text-right">
                <Link href="/teachers/create" className="btn btn-primary">
                    <i className="fas fa-plus mr-2"></i> Add New Teacher
                </Link>
            </div>
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h5 className="mb-0">Teachers List</h5>
                </div>
                <div className="card-body">
                    {teachers.length > 0 ? (
                        <table className="table table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Max Hours/Day</th>
                                    <th>Max Hours/Week</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teachers.map((teacher) => (
                                    <tr key={teacher.id}>
                                        <td>{teacher.id}</td>
                                        <td>{teacher.name}</td>
                                        <td>{teacher.max_hours_per_day}</td>
                                        <td>{teacher.max_hours_per_week}</td>
                                        <td className="text-center">
                                            <Link
                                                href={`/teachers/${teacher.id}/edit`}
                                                className="btn btn-sm btn-info mr-2"
                                            >
                                                <i className="fas fa-edit"></i>{" "}
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDelete(teacher.id)
                                                }
                                                className="btn btn-sm btn-danger"
                                            >
                                                <i className="fas fa-trash-alt"></i>{" "}
                                                Delete
                                            </button>
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
                            No teachers available. Please add some teachers.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Teachers;

// resources/js/Pages/Subjects/Index.jsx

import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";

const Subjects = () => {
    const { subjects } = usePage().props;

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
                Subjects
            </h1>
            <div className="mb-4 text-right">
                <Link href="/subjects/create" className="btn btn-success">
                    <i className="fas fa-plus mr-2"></i> Add Subject
                </Link>
            </div>
            <div className="card shadow-sm">
                <div className="card-header bg-primary text-white">
                    <h5 className="mb-0">Subjects List</h5>
                </div>
                <div className="card-body">
                    {subjects.length > 0 ? (
                        <table className="table table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subjects.map((subject) => (
                                    <tr key={subject.id}>
                                        <td>{subject.name}</td>
                                        <td className="d-flex align-items-center">
                                            <Link
                                                href={`/subjects/${subject.id}/edit`}
                                                className="btn btn-sm btn-warning mr-2"
                                            >
                                                <i className="fas fa-edit"></i>{" "}
                                                Edit
                                            </Link>
                                            <Link
                                                href={`/subjects/${subject.id}/delete`}
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
                            No subjects available. Please add some subjects.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Subjects;

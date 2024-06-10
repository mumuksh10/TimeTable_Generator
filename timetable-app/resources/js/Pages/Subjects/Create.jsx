// resources/js/Pages/Subjects/Create.jsx

import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const CreateSubject = () => {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        Inertia.post("/subjects", { name });
    };

    return (
        <div className="container mt-5">
            <h1
                className="mb-4 text-center"
                style={{ fontWeight: "bold", color: "#28a745" }}
            >
                Add New Subject
            </h1>
            <div className="card shadow-sm">
                <div className="card-header bg-success text-white">
                    <h5 className="mb-0">Subject Details</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Subject Name</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="Enter subject name"
                            />
                        </div>
                        <br />
                        <button
                            type="submit"
                            className="btn btn-success btn-block"
                        >
                            <i className="fas fa-save mr-2"></i> Save Subject
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateSubject;

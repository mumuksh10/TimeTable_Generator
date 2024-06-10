import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const CreateClassroom = () => {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        Inertia.post("/classrooms", {
            name,
        });
    };

    return (
        <div className="container mt-5">
            <h1
                className="mb-4 text-center"
                style={{ fontWeight: "bold", color: "#28a745" }}
            >
                Add New Classroom
            </h1>
            <div className="card shadow-sm">
                <div className="card-header bg-success text-white">
                    <h5 className="mb-0">Classroom Details</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Classroom Name</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="Enter classroom name"
                            />
                        </div>
                        <br />
                        <button
                            type="submit"
                            className="btn btn-success btn-block"
                        >
                            <i className="fas fa-save mr-2"></i> Save Classroom
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateClassroom;

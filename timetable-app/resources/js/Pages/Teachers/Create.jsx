// resources/js/Pages/Teachers/Create.jsx

import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const CreateTeacher = () => {
    const [name, setName] = useState("");
    const [maxHoursPerDay, setMaxHoursPerDay] = useState("");
    const [maxHoursPerWeek, setMaxHoursPerWeek] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        Inertia.post("/teachers", {
            name,
            max_hours_per_day: maxHoursPerDay,
            max_hours_per_week: maxHoursPerWeek,
        });
    };

    return (
        <div className="container mt-5">
            <h1
                className="mb-4 text-center"
                style={{ fontWeight: "bold", color: "#28a745" }}
            >
                Add New Teacher
            </h1>
            <div className="card">
                <div className="card-header bg-success text-white">
                    <h5 className="mb-0">Teacher Details</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Teacher Name</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="Enter teacher's name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="maxHoursPerDay">
                                Max Hours per Day
                            </label>
                            <input
                                type="number"
                                id="maxHoursPerDay"
                                className="form-control"
                                value={maxHoursPerDay}
                                onChange={(e) =>
                                    setMaxHoursPerDay(e.target.value)
                                }
                                required
                                placeholder="Enter max hours per day"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="maxHoursPerWeek">
                                Max Hours per Week
                            </label>
                            <input
                                type="number"
                                id="maxHoursPerWeek"
                                className="form-control"
                                value={maxHoursPerWeek}
                                onChange={(e) =>
                                    setMaxHoursPerWeek(e.target.value)
                                }
                                required
                                placeholder="Enter max hours per week"
                            />
                        </div>
                        <br />
                        <button
                            type="submit"
                            className="btn btn-success btn-block"
                        >
                            <i className="fas fa-save mr-2"></i> Save Teacher
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateTeacher;

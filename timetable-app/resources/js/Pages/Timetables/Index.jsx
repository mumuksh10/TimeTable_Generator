// resources/js/Pages/Timetables/Index.jsx

import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";

const Timetables = () => {
    const { classrooms, timetables } = usePage().props;
    const [selectedClassroom, setSelectedClassroom] = useState("");

    const handleGenerate = () => {
        if (selectedClassroom) {
            Inertia.post("/timetable/generate", {
                classroom_id: selectedClassroom,
            });
        } else {
            alert("Please select a classroom.");
        }
    };

    const handleGeneratePDF = () => {
        if (selectedClassroom) {
            window.open(
                `/timetable/pdf?classroom_id=${selectedClassroom}`,
                "_blank"
            );
        } else {
            alert("Please select a classroom.");
        }
    };

    return (
        <div className="container mt-5">
            <h1
                className="mb-4 text-center"
                style={{ fontWeight: "bold", color: "#007bff" }}
            >
                Timetables
            </h1>
            <div className="form-group">
                <label htmlFor="classroom" style={{ fontWeight: "bold" }}>
                    Select Classroom
                </label>
                <select
                    id="classroom"
                    className="form-control"
                    value={selectedClassroom}
                    onChange={(e) => setSelectedClassroom(e.target.value)}
                >
                    <option value="">-- Select Classroom --</option>
                    {classrooms.map((classroom) => (
                        <option key={classroom.id} value={classroom.id}>
                            {classroom.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="d-flex justify-content-start mt-3">
                <button
                    onClick={handleGenerate}
                    className="btn btn-primary mr-2"
                >
                    <i className="fas fa-calendar-alt mr-2"></i> Generate
                    Timetable
                </button>
                <button
                    onClick={handleGeneratePDF}
                    className="btn btn-secondary"
                >
                    <i className="fas fa-file-pdf mr-2"></i> Generate PDF
                </button>
            </div>

            {timetables.length > 0 && (
                <div className="card mt-5 shadow-sm">
                    <div className="card-header bg-primary text-white">
                        <h5 className="mb-0">Generated Timetables</h5>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Classroom</th>
                                    <th>Teacher</th>
                                    <th>Subject</th>
                                    <th>Day</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {timetables.map((timetable) => (
                                    <tr key={timetable.id}>
                                        <td>{timetable.classroom.name}</td>
                                        <td>{timetable.teacher.name}</td>
                                        <td>{timetable.subject.name}</td>
                                        <td>{timetable.day}</td>
                                        <td>{timetable.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Timetables;

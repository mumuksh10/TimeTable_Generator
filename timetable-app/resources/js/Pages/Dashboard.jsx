// resources/js/Pages/Dashboard.jsx

import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Dashboard = () => {
    return (
        <div className="container mt-5">
            <h1
                className="mb-4 text-center"
                style={{
                    fontWeight: "bold",
                    backgroundColor: "#f8d7da",
                    color: "#721c24",
                    padding: "10px",
                    borderRadius: "5px",
                }}
            >
                School Timetable Management
            </h1>
            <div className="row">
                {/* Teachers */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <div className="card-body text-center">
                            <div className="mb-3">
                                <i className="fas fa-chalkboard-teacher fa-3x text-primary"></i>
                            </div>
                            <h5 className="card-title">Manage Teachers</h5>
                            <p className="card-text">
                                Add, edit, or remove teacher information.
                            </p>
                            <Link href="/teachers" className="btn btn-primary">
                                Go to Teachers
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Classrooms */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <div className="card-body text-center">
                            <div className="mb-3">
                                <i className="fas fa-school fa-3x text-success"></i>
                            </div>
                            <h5 className="card-title">Manage Classrooms</h5>
                            <p className="card-text">
                                Add, edit, or remove classroom details.
                            </p>
                            <Link
                                href="/classrooms"
                                className="btn btn-success"
                            >
                                Go to Classrooms
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Subjects */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <div className="card-body text-center">
                            <div className="mb-3">
                                <i className="fas fa-book-open fa-3x text-info"></i>
                            </div>
                            <h5 className="card-title">Manage Subjects</h5>
                            <p className="card-text">
                                Add, edit, or remove subject information.
                            </p>
                            <Link href="/subjects" className="btn btn-info">
                                Go to Subjects
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timetable */}
            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <div className="card h-100">
                        <div className="card-body text-center">
                            <div className="mb-3">
                                <i className="fas fa-calendar-alt fa-3x text-warning"></i>
                            </div>
                            <h5 className="card-title">Generate Timetable</h5>
                            <p className="card-text">
                                Create and download timetables for your classes.
                            </p>
                            <Link href="/timetable" className="btn btn-warning">
                                Go to Timetable
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

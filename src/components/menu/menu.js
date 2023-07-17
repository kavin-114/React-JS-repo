import React from "react";
import { Link } from "react-router-dom";

export function MenuBar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light sticky-top menu-bar">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav menu-nav">
                            <Link to={"/"} className="text-decoration-none"><li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Hello World !!</a>
                            </li></Link>
                            <Link to={"/task2"} className="text-decoration-none">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Congrats Card</a>
                                </li>
                            </Link>
                            <Link to={"/task3"} className="text-decoration-none">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Super Over</a>
                                </li>
                            </Link>
                            <Link to={"/task4"} className="text-decoration-none">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Social Button</a>
                                </li>
                            </Link>
                            <Link to={"/task5"} className="text-decoration-none">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Notifications</a>
                                </li>
                            </Link>
                            <Link to={"/task6"} className="text-decoration-none">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Login</a>
                                </li>
                            </Link>
                            <Link to={"/task7"} className="text-decoration-none">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Technology Cards</a>
                                </li>
                            </Link>
                            <Link to={"/task8"} className="text-decoration-none">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Hooks Assignment</a>
                                </li>
                            </Link>
                            <Link to={"/task9"} className="text-decoration-none">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Fruits Counter</a>
                                </li>
                            </Link>
                            <Link to={"/task10"} className="text-decoration-none">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Feedback</a>
                                </li>
                            </Link>
                            <Link to={"/datefunction"} className="text-decoration-none">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Datefunction</a>
                                </li>
                            </Link>
                            <Link to={"/products"} className="text-decoration-none">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Products</a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
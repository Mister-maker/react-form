import React from "react";
import { auth } from "../config/firebase";

const HomePage = () => {
    const user = auth.currentUser;
    return <div>{user?.displayName}</div>;
};

export default HomePage;

import React from "react";
import { auth } from "../config/firebase";
import Lottie from "lottie-react";
import loaderAnimaiton from "../assets/animation.json";

const HomePage = () => {
    const user = auth.currentUser;
    return (
        <div>
            <Lottie
                animationData={loaderAnimaiton}
                loop={true}
                style={{ height: 200 }}
            />
            {user?.displayName}
        </div>
    );
};

export default HomePage;

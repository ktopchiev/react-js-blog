import { useState, useEffect } from "react";

//This is a custom hook for handling the size of the window
const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        const cleanUp = () => {
            console.log("handleResize has been cleaned up.")
            window.removeEventListener("resize", handleResize);
        }

        return cleanUp;
    }, [])

    return windowSize;
}

export default useWindowSize
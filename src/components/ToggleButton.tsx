import React, { useState } from "react";
import { IToggleButtonProps } from "../types/ToggleButtonProps";

const ToggleButton: React.FC<IToggleButtonProps> = ({
    isToggled = false,
    onToggle,
}) => {
    const [toggled, setToggled] = useState(isToggled);

    const handleToggle = () => {
        const newState = !toggled;
        setToggled(newState);
        if (onToggle) onToggle(newState);
    };

    return (
        <button
            onClick={handleToggle}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                toggled ? "bg-[#3652D9]" : "bg-gray-300"
            }`}
        >
            <div
                className={`h-4 w-4 bg-white rounded-full shadow-md transform transition-transform ${
                    toggled ? "translate-x-6" : ""
                }`}
            />
        </button>
    );
};

export default ToggleButton;

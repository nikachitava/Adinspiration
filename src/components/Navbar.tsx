import { useState } from "react";
import SubscribeInput from "./SubscribeInput";
import UserProfile from "./UserProfile";
import avatarImage from "/icons/avatar-icon.svg";

const Navbar = () => {
    const [activeItem, setActiveItem] = useState("Inspiration");

    const menuItems = ["Inspiration", "Templates", "Tools"];
    return (
        <header className="container py-[27.5px] flex items-center justify-start border-b border-b-grey-100">
            <h1 className="text-mainDark text-[21px] uppercase mr-[26px]">
                Adinspiration.com
            </h1>
            <nav className="flex items-center justify-between w-full">
                <ul className="flex items-center gap-6">
                    {menuItems.map((item) => (
                        <li
                            key={item}
                            className={` text-sm font-semibold cursor-pointer ${
                                activeItem === item
                                    ? "text-mainDark border-b-[4px] border-b-mainDark border-y-spacing-10"
                                    : "text-grey-600"
                            }`}
                            onClick={() => setActiveItem(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <SubscribeInput />
                <UserProfile name={"First name"} image={avatarImage} />
            </nav>
        </header>
    );
};

export default Navbar;

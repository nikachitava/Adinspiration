import { IUserProfileProps } from "../types/User";

const UserProfile: React.FC<IUserProfileProps> = ({ name, image }) => {
    return (
        <div className="flex items-center gap-[17px] bg-[#EFEFEF] rounded-[50px]  py-1 px-[17px]">
            <p className="text-black text-sm font-semibold">{name}</p>
            <img src={image} alt={`${name}-avatar`} />
        </div>
    );
};

export default UserProfile;

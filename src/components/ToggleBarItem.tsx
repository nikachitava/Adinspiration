import ToggleButton from "./ToggleButton";

interface IToggleBarItem {
    title: string;
    isToggled?: boolean;
}

const ToggleBarItem: React.FC<IToggleBarItem> = ({ title, isToggled }) => {
    return (
        <div className="flex items-center gap-[10px] bg-white border border-buttonStroke px-4 py-3 rounded-[50px]">
            <span className="text-mainDark font-medium text-sm">{title}</span>
            <ToggleButton isToggled={isToggled} />
        </div>
    );
};

export default ToggleBarItem;

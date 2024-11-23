interface ICardProps {
    status: string;
    image: string;
    title: string;
}

const Card: React.FC<ICardProps> = ({ status, image, title }) => {
    return (
        <div className="rounded-[20px] border border-[#E7EAEE] p-[15px] space-y-3">
            <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#10B981] font-medium">
                    {status}
                </span>
                <div className="flex items-center gap-2">
                    <img
                        src="/icons/canva-icon.svg"
                        alt="canva-icon"
                        className="cursor-pointer"
                    />
                    <img
                        src="/icons/share-icon.svg"
                        alt="share-icon"
                        className="p-[5px] bg-white rounded-full border border-[#E7EAEE] cursor-pointer"
                    />
                    <img
                        src="/icons/save-icon.svg"
                        alt="save-icon"
                        className="p-[5px] bg-white rounded-full border border-[#E7EAEE] cursor-pointer"
                    />
                </div>
            </div>
            <img src={image} alt={image} />
            <p className="font-medium text-mainDark text-[12px]">{title}</p>
        </div>
    );
};

export default Card;

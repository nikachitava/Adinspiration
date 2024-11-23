interface IFilterBarItemProps {
    title: string;
    quantity: number;
}

const FilterBarItem: React.FC<IFilterBarItemProps> = ({ title, quantity }) => {
    return (
        <div className="flex items-center gap-[10px] bg-white border border-buttonStroke px-4 py-3 rounded-[50px]">
            <span className="text-grey-600 font-medium text-sm t">{title}</span>
            <span className="text-sm text-grey-600 bg-grey-50 border border-grey-100 py-1 px-2 font-medium rounded-[5px]">
                {quantity}
            </span>
        </div>
    );
};

export default FilterBarItem;

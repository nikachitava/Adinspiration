import ToggleBarItem from "./ToggleBarItem";
import TypeListsFilterBar from "./TypeListsFilterBar";

const FilterBar = () => {
    return (
        <div className="flex items-center gap-4 mt-14">
            <div className="inline-flex items-center gap-2 bg-white border border-buttonStroke px-4 py-3 rounded-[50px]">
                <img src="/icons/search.svg" alt="search-icon" />
                <input
                    type="text"
                    placeholder="Search"
                    className="outline-none border-0"
                />
            </div>
            <ToggleBarItem title="Templates" isToggled={true} />
            <TypeListsFilterBar />
        </div>
    );
};

export default FilterBar;

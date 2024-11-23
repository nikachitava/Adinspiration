import {
    industriesList,
    objectivesList,
    psycologiesList,
    typesList,
} from "../DATA/FilterDataList";

const SideMenu = () => {
    return (
        <aside className="min-h-full min-w-[230px] px-[26px] space-y-4 bg-[#F9FAFB] border-r border-r-grey-100 py-8 ">
            <div>
                <h1 className="text-grey-700 font-bold text-[20px] mb-4">
                    Objective
                </h1>
                <ul className="space-y-1">
                    {objectivesList.map((objective, index) => (
                        <li
                            key={index}
                            className="text-grey-600 font-medium text-sm cursor-pointer"
                        >
                            {objective}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h1 className="text-grey-700 font-bold text-[20px] mb-4">
                    Types
                </h1>
                <ul className="space-y-1">
                    {typesList.map((type, index) => (
                        <li
                            key={index}
                            className="text-grey-600 font-medium text-sm cursor-pointer"
                        >
                            {type.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h1 className="text-grey-700 font-bold text-[20px] mb-4">
                    Industry
                </h1>
                <ul className="space-y-1">
                    {industriesList.map((industry, index) => (
                        <li
                            key={index}
                            className="text-grey-600 font-medium text-sm cursor-pointer"
                        >
                            {industry}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h1 className="text-grey-700 font-bold text-[20px] mb-4">
                    Psycology
                </h1>
                <ul className="space-y-1">
                    {psycologiesList.map((psycology, index) => (
                        <li
                            key={index}
                            className="text-grey-600 font-medium text-sm cursor-pointer"
                        >
                            {psycology}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default SideMenu;

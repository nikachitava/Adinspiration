import { useRef } from "react";
import { typesList } from "../DATA/FilterDataList";
import FilterBarItem from "./FilterBarItem";

const TypeListsFilterBar = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollRight = () => {
        if (carouselRef.current) {
            const container = carouselRef.current;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;

            if (container.scrollLeft >= maxScrollLeft - 1) {
                container.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                container.scrollBy({ left: 200, behavior: "smooth" });
            }
        }
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div
                ref={carouselRef}
                className="flex items-center gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
            >
                {typesList.map((type, index) => (
                    <FilterBarItem
                        key={index}
                        title={type.title}
                        quantity={type.quantity}
                    />
                ))}
            </div>

            <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow-md cursor-pointer rounded-full text-center"
            >
                <img src="/icons/arrow-right.svg" alt="Scroll Right" />
            </button>
        </div>
    );
};

export default TypeListsFilterBar;

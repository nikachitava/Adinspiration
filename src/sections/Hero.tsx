import FilterBar from "../components/FilterBar";
import HeroText from "../components/HeroText";

const Hero = () => {
    return (
        <section className="container w-full mt-10">
            <HeroText />
            <FilterBar />
        </section>
    );
};

export default Hero;

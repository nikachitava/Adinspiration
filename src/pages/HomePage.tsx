import Card from "../components/Card";
import SideMenu from "../components/SideMenu";
import Hero from "../sections/Hero";

const HomePage = () => {
    return (
        <section className="flex gap-10">
            <div className="w-[230px]">
                <SideMenu />
            </div>
            <div className="w-custom-homepage">
                <Hero />
                <section className="container flex items-center justify-between flex-wrap my-12">
                    <Card
                        status="new"
                        title="New Card"
                        image="/images/cover.svg"
                    />
                    <Card
                        status="new"
                        title="New Card"
                        image="/images/cover.svg"
                    />
                    <Card
                        status="new"
                        title="New Card"
                        image="/images/cover.svg"
                    />
                    <Card
                        status="new"
                        title="New Card"
                        image="/images/cover.svg"
                    />
                    <Card
                        status="new"
                        title="New Card"
                        image="/images/cover.svg"
                    />
                    <Card
                        status="new"
                        title="New Card"
                        image="/images/cover.svg"
                    />
                    <Card
                        status="new"
                        title="New Card"
                        image="/images/cover.svg"
                    />
                    <Card
                        status="new"
                        title="New Card"
                        image="/images/cover.svg"
                    />
                </section>
            </div>
        </section>
    );
};

export default HomePage;

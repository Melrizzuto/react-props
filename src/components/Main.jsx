import Card from "./Card";
import landscapes from "../data/landscape";

function Main() {
    return (
        <main className="container d-flex flex-wrap justify-content-center p-4 mt-4">
            {landscapes.map((landscape) => (
                <Card
                    key={landscape.id}
                    title={landscape.title}
                    description={landscape.description}
                    img={landscape.img} />
            ))}
        </main>
    );
}

export default Main;
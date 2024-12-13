import Card from "./Card";
import landscapes from "../data/posts";

function Main() {
    return (
        <main className="container d-flex flex-wrap justify-content-center p-4 mt-4">
            {landscapes.map((post) => (
                <Card
                    key={post.id}
                    title={post.title}
                    description={post.description}
                    tags={post.tags}
                    img={post.img} />
            ))}
        </main>
    );
}

export default Main;
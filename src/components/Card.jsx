import style from './Card.module.css';

function Card({ title, image, content, tags, published }) {
    //se il posts non è pubblicato ritorno null
    if (!published) return null;

    // imgs di default se non c'è
    const defaultImage = 'https://placehold.co/600x400';
    const imgSrc = image || defaultImage;

    //assegno i colori
    const tagColors = {
        trip: 'success',
        landscape: 'danger',
        lowcost: 'warning',
        expansive: 'primary',
    };

    return (
        <div className={`card m-1 ${style.card}`}>
            <img src={imgSrc} className={`card-img-top ${style.cardImg}`} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <div>
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`badge bg-${tagColors[tag] || 'secondary'} me-2 mb-2`}
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
                <a href="#" className={style.cardButton}>Leggi di più</a>
            </div>
        </div>
    );
}

export default Card;
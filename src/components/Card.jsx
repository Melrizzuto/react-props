import style from './Card.module.css';

function Card({ title, image, content, tags, }) {
    return (
        <div className={`card m-1 ${style.card}`}>
            <img src={image} className={`card-img-top ${style.cardImg}`} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <a href="#" className={`card-text ${style.aTags}`}>{"#" + tags.join(", #")}</a>
                <a href="#" className={style.cardButton}>Leggi di più</a>
            </div>
        </div>
    );
}

export default Card;
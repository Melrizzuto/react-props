import style from './Card.module.css';

function Card({ title, description, img }) {
    return (
        <div className={`card m-1 ${style.card}`}>
            <img src={img} className={`card-img-top ${style.cardImg}`} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className={style.cardButton}>Leggi di più</a>
            </div>
        </div>
    );
}

export default Card;
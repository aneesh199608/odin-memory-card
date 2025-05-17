function Card ({ id, name, image, onClick }) {
    return (
        <div className="nes-container is-rounded card" onClick={onClick}>
            <p className="title">{name}</p>
            <img
                src={image}
                alt={name}
                className="nes-avatar"
                style={{ imageRendering: 'pixelated'}}
            />
        </div>
    );
}

export default Card;
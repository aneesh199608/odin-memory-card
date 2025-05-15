function Card ({ id, name, image, onClick }) {
    return (
        <div className="nes-container is-rounded with-title card" onClick={onClick}>
            <p className="title">{name}</p>
            <img
                src={image}
                alt={name}
                className="nes-avatar is-large"
                style={{ imageRendering: 'pixelated'}}
            />
        </div>
    );
}

export default Card;
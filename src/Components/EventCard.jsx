const EventCard = (props) => {
    return (
        <div className={`card ${props.color}`} style={cardStyle}>
            <h3>{props.event}</h3>
            <p>{props.details}</p>
            <p><strong>Location:</strong> {props.location}</p>
            <p><strong>Time:</strong> {props.time}</p>
        </div>
    );
};

const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
    margin: '10px',
    backgroundColor: '#053a07ff',
    flex: '1 1 200px',
    boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
};

export default EventCard;

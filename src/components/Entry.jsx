import Pin from '/pin.png';

function Entry(props) {
    return (
        <div className='entry'>
            <img src={props.imageUrl} className='entry--img' />
            <div className='entry--info'>
                <div className='entry--info--location'>
                    <img src={Pin} />
                    <p className='entry--info--country'>{props.location.toUpperCase()}</p>
                    <a
                        href={props.googleMapsUrl}
                        target='_blank'
                        className='entry--info--gmaps'
                    >
                        View on Google Maps
                    </a>
                </div>
                <h1 className='entry--info--title'>{props.title}</h1>
                <div className='entry--info--dates'>
                    <h4>
                        {props.startDate} - {props.endDate}
                    </h4>
                </div>
                <p className='entry--info--description'>{props.description}</p>
            </div>
        </div>
    );
}

export default Entry;

import "../App.css"

export default function CityCard(props) {

  return (
      <div className='card'>
          <p>{props.name}</p>
          <img src={props.image} alt="Weather icon" /> 
          <div className="temperature">
            <p>Temp: {Math.round(props.temp)}°C</p>
            <p>Max:{Math.round(props.tempMax)}°C</p>
            <p>Min:{Math.round(props.tempMin)}°C</p> 
          </div>
          <p>{props.description}</p>
          <p>{props.humidity}%</p>
          <p>{props.day}</p>
          
          {/* <button title={props.title} type="submit" className="favoriteButton" onClick={props.onClick}><span id='buttonText'>{props.children}</span></button> */}
      </div>
  ); 
}
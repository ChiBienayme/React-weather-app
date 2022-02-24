import "../App.css"

export default function CityCard(props) {

  return (
      <div className='card'>
          <h1>{props.name}</h1>
          <img className="weather-icon" src={props.image} alt="Weather icon" /> 
          <div className="temperature">
            <p>Temp: {Math.round(props.temp)}°C</p>
            <p>Max:{Math.round(props.tempMax)}°C</p>
            <p>Min:{Math.round(props.tempMin)}°C</p> 
          </div>
          <p>{props.description}</p>
          <p>{props.humidity}%</p>
          <p>{props.day}</p>
          
      </div>
  ); 
}
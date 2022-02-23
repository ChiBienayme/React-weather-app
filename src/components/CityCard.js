import React from 'react';
import '../App.css';

export default function CityCard () {
  
    return (
        <div className="card mt-3 mx-auto" style={{ width: '60vw' }}>
        {apiData.main ? (
          <div class="card-body text-center">
            <img
              src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />

            <p className="h2">
              {kToC(apiData.main.temp)}&deg; C
            </p>

            <p className="h5">
              <i className="fas fa-map-marker-alt"></i>
              <strong>{apiData.name}</strong>
            </p>

            <div className="row mt-4">

              <div className="col-md-6">
                <p>
                  <i class="fas fa-temperature-low "></i>
                  <strong>
                    {kToC(apiData.main.temp_min)}&deg; C
                  </strong>
                </p>

                <p>
                  <i className="fas fa-temperature-high"></i>{' '}
                  <strong>
                    {kToC(apiData.main.temp_max)}&deg; C
                  </strong>
                </p>
              </div>

              <div className="col-md-6">
                <p>
                  <strong>{apiData.weather[0].main}</strong>
                </p>

                {/* <p>
                  <strong>
                    {countries.getName(apiData.sys.country, 'en', {
                      select: 'official',
                    })}
                  </strong>
                </p> */}
              </div>

            </div>
        </div>
  
    )
  
}


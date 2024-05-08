import React from 'react';
import './Services.css'

const Services = () => {

  return (
    <div>
      <div className='x'>
        <center><h1>OUR <span className='sp'>SCRIPTEX</span> SERVICES</h1></center>
        <div className='content'>
          
          <a href='apps/ageCalculator.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/age.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Age Calculator</h3>
            </div>
          </a>
          <a href='apps/alarmer.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/alarm.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Alarm</h3>
            </div>
          </a>
          <a href='apps/baterie.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/batterie.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Baterie Level</h3>
            </div>
          </a>
          <a href='apps/calandar.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/calendar.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Calendar</h3>
            </div>
          </a>
          <a href='apps/captcha.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/captcha.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Test Captcha</h3>
            </div>
          </a>

          <a href='apps/exchange.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/change.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Exchange $</h3>
            </div>
          </a>
          <a href='apps/meter.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/crono.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Crono</h3>
            </div>
          </a>
          <a href='apps/painting.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/paint.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Paint</h3>
            </div>
          </a>
          <a href='apps/pwdcheck.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/pwd2.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Check Password</h3>
            </div>
          </a>
          <a href='apps/pwdgen.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/pwd3.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Make Password</h3>
            </div>
          </a>
          
          <a href='apps/qr.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/qr.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>QR code</h3>
            </div>
          </a>
          <a href='apps/weather.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/weather.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Weather App</h3>
            </div>
          </a>
          <a href='apps/weight.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/weight2.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Weight</h3>
            </div>
          </a>
          <a href='apps/voicemaker.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/voice.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Voice Maker</h3>
            </div>
          </a>
          <a href='apps/calculator.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/calculator.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Calculator</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;

import './Services.css';

const Services = () => {
  return (
    <div>
      <div className='x'>
        <center><h1>OUR <span className='sp'>SCRIPTEX</span> SERVICES</h1></center>
        <div className='content'>
          
          <a href={import.meta.env.BASE_URL + 'apps/ageCalculator.html'}>
            <div className="cardo">
              <img src={import.meta.env.BASE_URL + 'images/age.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Age Calculator</h3>
            </div>
          </a>
          <a href={import.meta.env.BASE_URL + 'apps/alarmer.html'}>
            <div className="cardo">
              <img src={import.meta.env.BASE_URL + 'images/alarm.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Alarm</h3>
            </div>
          </a>
          <a href={import.meta.env.BASE_URL + 'apps/baterie.html'}>
            <div className="cardo">
              <img src={import.meta.env.BASE_URL + 'images/batterie.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Baterie Level</h3>
            </div>
          </a>
          <a href={import.meta.env.BASE_URL + 'apps/calandar.html'}>
            <div className="cardo">
              <img src={import.meta.env.BASE_URL + 'images/calendar.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Calendar</h3>
            </div>
          </a>
          <a href={import.meta.env.BASE_URL + 'apps/captcha.html'}>
            <div className="cardo">
              <img src={import.meta.env.BASE_URL + 'images/captcha.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Test Captcha</h3>
            </div>
          </a>

          <a href={import.meta.env.BASE_URL + 'apps/exchange.html'}>
            <div className="cardo">
              <img src={import.meta.env.BASE_URL + 'images/change.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Exchange $</h3>
            </div>
          </a>
          <a href={import.meta.env.BASE_URL + 'apps/meter.html'}>
            <div className="cardo">
              <img src={import.meta.env.BASE_URL + 'images/crono.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Crono</h3>
            </div>
          </a>
          <a href={import.meta.env.BASE_URL + 'apps/painting.html'}>
            <div className="cardo">
              <img src={import.meta.env.BASE_URL + 'images/paint.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Paint</h3>
            </div>
          </a>
          <a href={import.meta.env.BASE_URL + 'apps/pwdcheck.html'}>
            <div className="cardo">
              <img src={import.meta.env.BASE_URL + 'images/pwd2.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Check Password</h3>
            </div>
          </a>
          <a href={import.meta.env.BASE_URL + 'apps/pwdgen.html'}>
            <div className="cardo">
              <img src={import.meta.env.BASE_URL + 'images/pwd3.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Make Password</h3>
            </div>
          </a>
          
          <a href={import.meta.env.BASE_URL + 'apps/qr.html'}>
            <div className="cardo">
              <img src={import.meta.env.BASE_URL + 'images/qr.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>QR code</h3>
            </div>
          </a>
          <a href={import.meta.env.BASE_URL + 'apps/weather.html'}>
            <div className="cardo">
              <img src={import.meta.env.BASE_URL + 'images/weather.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Weather App</h3>
            </div>
          </a>
          <a href={import.meta.env.BASE_URL + 'apps/weight.html'}>
            <div className="cardo">
              <img src={import.meta.env.BASE_URL + 'images/weight2.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Weight</h3>
            </div>
          </a>
          <a href={import.meta.env.BASE_URL + 'apps/voicemaker.html'}>
            <div className="cardo">
              <img src={import.meta.env.BASE_URL + 'images/voice.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Voice Maker</h3>
            </div>
          </a>
          <a href={import.meta.env.BASE_URL + 'apps/calculator.html'}>
            <div className="cardo">
              <img src={import.meta.env.BASE_URL + 'images/calculator.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>Calculator</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
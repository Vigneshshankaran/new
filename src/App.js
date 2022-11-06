import './App.css';
import Data from './data.json'
import { SlBadge } from 'react-icons/sl';
import ReactPlayer from 'react-player/youtube'


function App() {
  return (
    <>
      {/* Profile Image */}
      <div className='pic-border'>
        <img className='profile-pic' src={Data.profile} alt={Data.name}></img>
      </div>

      {/* Name */}

      <div className='freelancer-name'>
        <h2 className='name-sty'>{Data.name}</h2>
      </div>

      {/* Designation */}

      <div className='designtion-container'>
        <h2 className='designation-txt'>{Data.roll}</h2>
      </div>

      {/* Whatsapp Number */}
      <div className='whats-num'>
        <h2 className="elementor-number" >{Data.phonenumber}</h2>
      </div>
      {/* Badge */}
      <div className='svg-container'>
        <a href={Data.badge} ><SlBadge className='svg-basge' /></a>
        <a href={Data.badge} ><SlBadge className='svg-basge' /></a>
        <a href={Data.badge} ><SlBadge className='svg-basge' /></a>
        <a href={Data.badge} ><SlBadge className='svg-basge' /></a>
        <a href={Data.badge} ><SlBadge className='svg-basge' /></a>
        <a href={Data.badge} ><SlBadge className='svg-basge' /></a>
        <a href={Data.badge} ><SlBadge className='svg-basge' /></a>
        <a href={Data.badge} ><SlBadge className='svg-basge' /></a>
        <a href={Data.badge} ><SlBadge className='svg-basge' /></a>
        <a href={Data.badge} ><SlBadge className='svg-basge' /></a>
      </div>
      {/* Bio/ About Us */}

      <div className='bio-sec'>
        <p>{Data.bio}</p>
      </div>

      <section className='services-section elementor-section'>
        <div className='services'>
          <h2 className='servies-text'>Services</h2>
          <h2 className='servies-texts'>These are the professional services I provide</h2>
          <ul>
            <li className='servies-texts'>Html</li>
          </ul>
        </div>
      </section>

      {/* Bio */}
      <section className="elementor-container elementor-column-gap-default elementor-section">
        <div className="elementor-row">
          <div className='data-element_type'>
            <div className='elementor-column-wrap'>
              <div className='elementor-widget-wrap'>
                <div className='elementor-element'>
                  <h2 className='elementor-size-default'>Personal Info</h2>
                </div>
              </div>
              <div className='elementor-widget-wrap1'>
                <p className='snipcss0-4-7-8'>Type of freelancer : </p>
                <p className='snipcss0-4-7-8'>Gender : </p>
                <p className='snipcss0-4-7-8'>Experience : </p>
                <p className='snipcss0-4-7-8'>Area served:</p>
                <p className='snipcss0-4-7-8'>Location: </p>
                <p className='snipcss0-4-7-8'>Category:</p>
              </div>
            </div>
          </div>
          <div className='elementor-column'>
            <div className='hello-img'>
              <img src="https://cozmohpixel.com/wp-content/uploads/2022/01/Girl_laptop-1518x1536.png" alt="" style={{ width: "300px", height: "300px" }} />

            </div>
            </div>
          </div>
          </section>

          <section className='name-my-works elementor-section'>
        <h2 className='myskill'>Skillset</h2>
        <p className='style-icon1'>{}</p>
      </section>
      <section className='elementor-row elementor-section'>
        <div className='elementor-column '>
          <div className="elementor-element">
            <h2 class="elementor-size-default">My work</h2>
            <div className='elementor-column'>

            </div>
          </div>
          <h2 className='elemetor-text'>These are the projects I have worked on for various clients</h2>

        </div>
        
        </section>

       <div className="flex-container">
          <img
            src={Data.profile}
            alt=""
            className="imageflex-row"
          ></img>
          <img
            src={Data.profile}
            alt=""
            className="imageflex-row"
          ></img>
          <img
            src={Data.profile}
            alt=""
            className="imageflex-row"
          ></img>
          <img
            src={Data.profile}
            alt=""
            className="imageflex-row"
          ></img>
          </div>

          <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='480px'
          height='240px'
        />
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='480px'
          height='240px'
        />
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='480px'
          height='240px'
        />
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='480px'
          height='240px'
        />
      </div>

      <h2 className='elementor-size-default'> Testimonials</h2>

<div className="container">
  
  <p>Chris Fox.</p>
  <p>John Doe saved us from a web disaster.</p>
</div>
    </>
  );
}

export default App;

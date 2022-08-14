import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Contacts = () => {
  return (
    <div className="contacts-wrapper" id="contacts">
      <div className="contacts-main">
        <div className="contacts-greeting">
          <h1 className="contacts-title">CONTACT ME</h1>
          <h2>I look forward to hearing from you!</h2>
        </div>
        <div className='contacts-icon-list'>
          <a
            href="https://www.linkedin.com/in/jason-whisnant-4965b730/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="contact-icon" icon={faLinkedin} />
          </a>
          <a href="mailto:tasups@gmail.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
          </a>
          <a href="https://github.com/Tasups" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="contact-icon" icon={faGithub} />
          </a>
          <a href="https://twitter.com/7asup" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="contact-icon" icon={faTwitter} />
          </a>
          <a
            href="https://www.instagram.com/tasups/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="contact-icon" icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
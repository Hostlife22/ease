import { motion } from 'framer-motion';
import { FaEnvelope, FaGlobeEurope, FaMapMarkerAlt, FaPhone, FaUser } from 'react-icons/fa';
import { Heading } from '../../components';
import './Contacts.scss';

function Contacts() {
  const transition = { type: 'tween', duration: 3 };
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, delay: custom * 0.6 },
    }),
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
  };

  return (
    <motion.div
      className="contacts"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}>
      <Heading span="contact" text="us" className="contacts__heading" />
      <motion.h3 className="contacts__subtitle" custom={1} variants={textAnimation}>
        Have You Any Questions ?
      </motion.h3>
      <motion.div
        className="contacts__info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ...transition, duration: 2 }}>
        <div className="contacts__info-item">
          <div className="contacts__icon">
            <FaPhone />
          </div>
          <h4>Call Us On</h4>
          <p>+48 516 671 635</p>
        </div>
        <div className="contacts__info-item">
          <div className="contacts__icon">
            <FaMapMarkerAlt />
          </div>
          <h4>Office</h4>
          <p>Katowice Dworzec PKP</p>
        </div>
        <div className="contacts__info-item">
          <div className="contacts__icon">
            <FaEnvelope />
          </div>
          <h4>Email</h4>
          <p>Noom@gmail.com</p>
        </div>
        <div className="contacts__info-item">
          <div className="contacts__icon">
            <FaGlobeEurope />
          </div>
          <h4>Website</h4>
          <p>
            <a href="https://example.com/">www.example.com</a>
          </p>
        </div>
      </motion.div>
      <div className="contacts__row">
        <motion.iframe
          className="contacts__map"
          title="google map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2409.4833685690337!2d19.01534220638995!3d50.259103689879915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4ef6221ac917f6c3!2sKatowice%20Dworzec%20PKP!5e0!3m2!1sru!2sde!4v1657895257494!5m2!1sru!2sde"
          allowFullScreen
          loading="lazy"
          custom={2}
          variants={textAnimation}
        />
        <motion.form
          className="contacts__form"
          custom={2}
          variants={{ ...textAnimation, hidden: { x: 100, opacity: 0 } }}
          onSubmit={handleSubmit}>
          <h3>Get in touch</h3>
          <div className="contacts__input-box">
            <FaUser />
            <input type="text" placeholder="name" />
          </div>
          <div className="contacts__input-box">
            <FaEnvelope />
            <input type="email" placeholder="email" />
          </div>
          <div className="contacts__input-box">
            <FaPhone />
            <input type="number" placeholder="number" />
          </div>
          <input type="submit" value="contact now" />
        </motion.form>
      </div>
      <motion.div
        className="contacts__shape"
        initial={{ opacity: 0, right: '15%' }}
        whileInView={{ opacity: 1, right: '30%' }}
        transition={{ ...transition, type: 'tween' }}
      />
    </motion.div>
  );
}

export default Contacts;

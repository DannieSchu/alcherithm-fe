import React from 'react';
import PropTypes from 'prop-types';
import GifLoader from 'react-gif-loader';
import styles from './PandaGreeting.css';

const PandaGreeting = ({ firstName }) => {
  const style = {
    marginTop: '6%',
    position: 'relative',
    right: '50%',
    width: '15rem',
    'z-index': '0'
  };

  return (
    <section className={styles.PandaGreeting}>
      <h3>Nice Work, {firstName}!</h3>
      <div>
        <GifLoader
          loading={true}
          imageSrc="https://emojis.slackmojis.com/emojis/images/1498192826/2489/dancingpanda.gif?1498192826"
          imageStyle={style}
          overlayBackground="rgba(0,0,0,0)" />
      </div>
    </section>
  );
};

PandaGreeting.propTypes = {
  firstName: PropTypes.string.isRequired
};

export default PandaGreeting;


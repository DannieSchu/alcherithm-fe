import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchChallenges } from '../services/challengesAPI';

const ChallengeContext = createContext();

export const ChallengeProvider = ({ children }) => {
  const [challenges, setChallenges] = useState({});

  useEffect(() => {
    fetchChallenges
      .then(json => setChallenges(json));
  }, []);

  return (
    <ChallengeContext.Provider value={{ challenges }}>
      {children}
    </ChallengeContext.Provider>
  );
};

ChallengeProvider.propTypes = {
  children: PropTypes.node
};


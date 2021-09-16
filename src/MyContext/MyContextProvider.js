import React, { useState } from 'react';
import QuestionsContext from './QuestionContext';
import StarwarsAPI from '../services/StarWarsAPI';

function QuestionsProvider() {
  const RetornoDaApi = StarwarsAPI();
  const [data, setData] = useState(RetornoDaApi);

  return (
    <QuestionsContext.Provider value={ { data } }>
      {children}
    </QuestionsContext.Provider>
  );
}

export default QuestionsProvider;

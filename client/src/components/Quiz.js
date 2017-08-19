import React from 'react';
import { quizcontent } from '../quizcontent';
const Quiz = ({match}) => {

  return (
    <div>
      { match.params.id}
    </div>
  )

}

export default Quiz;

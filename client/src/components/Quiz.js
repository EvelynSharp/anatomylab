import React from 'react';
import { quizcontent } from '../quizcontent';
const Quiz = ({match}) => {
  console.log(quizcontent)
  return (
    <div>
      { match.params.id}
    </div>
  )

}

export default Quiz;

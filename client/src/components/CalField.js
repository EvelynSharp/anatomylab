import React from 'react';
import { quizcontent } from '../quizcontent';
import moment from 'moment';

const getMondays = (month, year) => {
    let monthNum = moment.months().indexOf(month);
    let d = new Date( year, monthNum );
    let mondays = [];
    d.setDate(1);
    while (d.getDay() !== 1) {
        d.setDate(d.getDate() + 1);
    }
    while (d.getDay() !== 1) {
        d.setDate(d.getDate() + 1);
    }
    while (d.getMonth() === monthNum) {
        mondays.push(new Date(d.getTime()));
        d.setDate(d.getDate() + 7);
    }
  return mondays
}


const CalField = ({ history, month, year }) => {

  const visibility = (date) => {
    let quiz = quizcontent[Number(moment(date).format('ww')) - 1];
    let ifPast = moment(date).day(7) <= new Date();
    let ifContent =  quiz ? true : false;
    let ifEnable = ifContent ? quiz.enable : false;
    return !ifPast && ifContent && ifEnable ? true : false;
  }

  const handleClick = (history, ifView, week) => {
    if (ifView) {
      history.push(`/${week}`)
    }
  }
  return (
    <div >
      {month}
      { getMondays( month, year ).map( date => {
        let d = moment(date)
        let week = d.format('ww')
        let ifView = visibility(date)
        return (
          <div onClick={ () => handleClick(history, ifView, week ) } key={date} className={ ifView ? 'active' : 'inactive'}>
            { `Week ${week}  ${d.format('MM-DD-YY')}` }
          </div>
        )
      }) }
    </div>
  )

}

export default CalField;

import React, {useState, useEffect} from 'react';
import {DateControllerProps} from './HomePage';
import {getDateString} from './HomeUtils';

function DateController({ date, setDate, selectedOption }: DateControllerProps) {
    const dateString: string = getDateString(date);
  
    function handleNext() {
      let newDate = new Date(date);
      switch (selectedOption) {
        case 'Day':
          newDate.setDate(newDate.getDate() + 1);
          break;
        case 'Week':
          newDate.setDate(newDate.getDate() + 7);
          break;
        case 'Month':
          newDate.setMonth(newDate.getMonth() + 1);
          break;
        default:
          break;
      }
      setDate(newDate);
    }
  
    function handlePrev() {
      let newDate = new Date(date);
      switch (selectedOption) {
        case 'Day':
          newDate.setDate(newDate.getDate() - 1);
          break;
        case 'Week':
          newDate.setDate(newDate.getDate() - 7);
          break;
        case 'Month':
          newDate.setMonth(newDate.getMonth() - 1);
          break;
        default:
          break;
      }
      setDate(newDate);
    }
  
    return (
      <div id="date-controller">
        <button onClick={handlePrev}>Prev</button>
        <p>{dateString}</p>
        <button onClick={handleNext}>Next</button>
      </div>
    );
  }


export default DateController;
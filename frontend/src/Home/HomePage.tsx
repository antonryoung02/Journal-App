import React, {useState} from 'react';
import logo from './logo.svg';
import './HomePage.css';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation';
import DisplayWeek from './DisplayWeek';
import DisplayDay from './DisplayDay';
import DisplayMonth from './DisplayMonth';
import DateController from './DateController';
export interface DateControllerProps {
  date: Date;
  setDate: (date: Date) => void;
  selectedOption:string;
}
export interface DisplayProps {
  date: Date;
}

function Home() {

  const [selectedOption, setSelectedOption] = useState<string>('Day');
  const [date, setDate] = useState<Date>(new Date());

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Navigation />
      <h3>Home</h3>
      <select value={selectedOption} onChange={handleChange}>
        <option value="Day">Day</option>
        {/*<option value="Week">Week</option>*/}
        {/*<option value="Month">Month</option>*/}
      </select>
      <div id="date-controller-container">
      <DateController date={date} setDate={setDate} selectedOption={selectedOption}/>
      </div>
      {selectedOption === "Day" && <DisplayDay date={date}/>}
      {/*{selectedOption === "Week" && <DisplayWeek date={date}/>}*/}
      {/*{selectedOption === "Month" && <DisplayMonth date={date}/>}*/}
    </div>
  );
};

export default Home;

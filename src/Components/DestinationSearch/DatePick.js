import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePick = ({ handleTimeInput }) => {
  const [dateAndTime, setDateAndTime] = useState(new Date());

  handleTimeInput(dateAndTime);

  return (
    <DatePicker
      selected={dateAndTime}
      onChange={(date) => setDateAndTime(date)}
      showTimeSelect
      dateFormat="Pp"
    />
  );
};

export default DatePick;

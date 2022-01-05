import React from "react";

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import homepagecss from "../components/homepage-css.css";

function Homepage() {

    const [value, setValue] = React.useState(new Date());

    return (
        <div>
            <h1>
                ALL ABOARD THE PAIN TRAIN
            </h1>
            <div id = "date">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                        orientation="landscape"
                        openTo="day"
                        value={value}
                        shouldDisableDate={isWeekend}
                        onChange={(newValue) => {
                        setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>

            <div id = "check_in_buttons">
                <h2 class = "nametag">
                    Sean
                </h2>
                <h2 class = "nametag">
                    Steve
                </h2>
            </div>
            

        </div>

        


        
    )
}

export default Homepage;
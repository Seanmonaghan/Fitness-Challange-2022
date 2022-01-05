import React from "react";

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Grid } from "@mui/material";
import { Button, ButtonGroup } from "@mui/material";
import TextField from '@mui/material/TextField';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import homepagecss from "../components/homepage-css.css";
import { isSunday } from "date-fns";

function Homepage() {

    const [value, setValue] = React.useState(new Date());
    const [seanShame, setSeanShame] = React.useState(0);
    const [steveShame, setSteveShame] = React.useState(0);

    return (
        <div>
            <h1 id = "header">
                2022 Fitness Challenge
            </h1>
            <div id = "date">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                        orientation="landscape"
                        openTo="day"
                        value={value}
                        shouldDisableDate={isSunday}
                        onChange={(newValue) => {
                        setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
            

            <Grid id = "buttonContainer" container spacing = {2} justifyContent = "flex-end">
                <Grid item xs = {3}>
                    <h1>Sean</h1>
                    <ButtonGroup class = "buttons">
                        <Button style={{ fontSize: '70px', background: 'gray', margin: '10px'  }}  variant = "outlined" color = "primary">✔</Button>
                        <Button style={{ fontSize: '70px', background: 'gray', margin: '10px'  }} size="humongous" variant = "outlined" color = "error">✘</Button>
                    </ButtonGroup>
                    
                </Grid>

                <Grid item xs = {3}>
                    <h1>Steve</h1>
                    <ButtonGroup class = "buttons">
                        <Button style={{ fontSize: '70px', background: 'gray', margin: '10px' }} variant = "outlined" color = "primary">✔</Button>
                        <Button style={{ fontSize: '70px', background: 'gray', margin: '10px'  }} size="humongous" variant = "outlined" color = "error">✘</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
            

        </div>

        


        
    )
}

export default Homepage;
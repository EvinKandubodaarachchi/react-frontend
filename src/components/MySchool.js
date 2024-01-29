import { Card, CardContent, CardMedia, Grid, Slider, Typography } from '@mui/material';
import React, { useState } from 'react';

const schoolImages = [
    "https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.dailymirror.lk/media/images/image_1486098911-3d5ad1b977.jpg",
    "https://archives1.sundayobserver.lk/sites/default/files/styles/large/public/news/2019/02/16/z_p27-Swimming-1.jpg?itok=w32Rfk3I",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ20MlrhT7Z0Q5toBtKXq1viVSOGf7NcpjSg&usqp=CAU"
];
function MySchool(){
    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    }
    return ( 
   <Grid container spacing={3} justifyContent="center" alignItems="center">
    <Grid item xs={12} sm={8} md={6}>
        <Typography variant="h4" gutterBottom></Typography>
        <Slider value={sliderValue} onChange={handleSliderChange} min={0} max={schoolImages.length-1} step={1}
        marks valueLabelDisplay='auto' valueLabelFormat={(value)=> value+1} />
        <Card>
            <CardMedia component="img" alt={"School"} height="400" image={schoolImages[sliderValue]} />
            <CardContent>
                <Typography>School Details</Typography>
            </CardContent>
        </Card>
    </Grid>
   </Grid>
    );
}
export default MySchool;
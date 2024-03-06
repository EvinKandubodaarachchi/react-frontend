import { Card, CardContent, CardMedia, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const MyVillage = () => {

    const villageInfo = {
        name: "Kaduwela - SriLanka",
        title: "My Hometown",
        description: "Kaduwela (Sinhala: කඩුවෙල, Tamil: கடுவெலை) is a town in the Colombo District, Western Province, Sri Lanka. It is located about 16 km (9.9 mi) from Colombo city centre on the Colombo - Avissawella Old Road (Low Level Road) and about 18 km (11 mi) from Kollupitiya on the New Kandy Road from Ethulkotte to Kandy.Kaduwela was originally Kadudevola, a compound of Kadu (sword) and Devola (shrine). It was the location of a shrine of the goddess Pattini, linked to a golden sword used in the 'water cutting' ritual. The shrine is called the Purana Rankadu Pattini Maha Devale (ancient great shrine of the golden-sword Pattini).In another possibility Kaduwela simply means the jungle paddy field. Kadu means jungle (Sorata Thera's Sinhala–Sinhala dictionary) and wela means paddy field. There is also another Kaduwela in the Ukuwela division of Matale district.According to Robert Percival of the 19th Regiment of Foot, during the Revolt of 1797 against the Dutch, the Sinhalese threw up earthworks and established a fort here.After the British defeat in the 1st Kandyan War, Kaduwela was occupied by a small force of British sepoys and lascoreens. They were later reinforced by a mixed force of European troops and sepoys under Captain Charles Wilkinson Mercer of the 51st Regiment, prior to the Battle of Hanwella.",
        gallery: [
            { id: 1, imageUrl: 'https://www.discover.lk/assets/Dehiwala-Zoological-Garden2.jpg', caption: 'Beauty of Kaduwela' },
            { id: 2, imageUrl: 'https://i.ytimg.com/vi/E5WoVTAjcSs/maxresdefault.jpg', caption: 'Welcome to Kaduwela' },
            { id: 3, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBkuc53e3Q3QxRp4ln3WPrpVY3zv-jXly-9w&usqp=CAU', caption: 'A Glance of ' },
        ]
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper style={{ padding: 20 }}>
                    <Typography variant="h5" gutterBottom>
                        {villageInfo.title} is {villageInfo.name}
                    </Typography>
                    <Divider style={{ margin: '10px 0' }} />
                    <Typography variant="body1" >
                        {villageInfo.description}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper style={{ padding: 20 }}>
                    <Typography variant="h5" gutterBottom>
                        Here is my location!
                    </Typography>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.6797420242!2d79.97180318477403!3d6.929997440196124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256f2fd041817%3A0xc3964cf05a9089a4!2sKaduwela!5e0!3m2!1sen!2slk!4v1706544942753!5m2!1sen!2slk" width="400" height="300" allowfullscreen="" loading="lazy"></iframe>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                    Image Gallery
                </Typography>
                <Grid container spacing={2}>
                    {villageInfo.gallery.map((image) => (
                        <Grid item xs={12} sm={6} md={4} key={image.id}>
                            <Card>
                                <CardMedia component="img" height="140" image={image.imageUrl} alt={image.caption} />
                                <CardContent>
                                    <Typography variant="caption" color="textSecondary">
                                        {image.caption}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

        </Grid>
    );
};

export default MyVillage;
import { BottomNavigation, Button, Card, CardContent, Dialog, Divider, Typography } from '@mui/material';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

export default function PopUp({ props }) {
    const [open, setOpen] = useState(true);
    const closeHandle = () => setOpen(false)
    const URL = 'https://twitter.com';


    const sendInfo = () => {
        console.log('Enviando')
    }
    return (
        <Dialog open={open} onClose={closeHandle}>

            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.userName} / {props.userTwitterId}
                    </Typography>
                    <Divider />
                    <li>
                        <Typography variant="body2" color="text.secondary">
                            {props.tweet}
                        </Typography>
                    </li>
                    <Divider />
                    <li>
                        <Typography variant="body2" color="text.secondary">
                            {URL}{props.urlTweet}
                        </Typography>
                    </li>
                </CardContent>
            </Card>
            <Button><SendIcon /></Button>
        </Dialog>
    );
}
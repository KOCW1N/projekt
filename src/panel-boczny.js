import React from 'react';
import './panel-boczny.css';
import Zakladka from './panel-boczny-zakladki';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';

function Panel(){
    return(
        <div className="panel">

        { /* tu jakieś logo można wstawić */ }

        { /* zakladka w panelu 1 */ }
        <Zakladka Ikonka={HomeIcon} tekst="Główna" />

        { /* zakladka w panelu 2 */ }
        <Zakladka Ikonka={MailOutlineIcon} tekst="Wiadomości" />

        { /* zakladka w panelu 3 */ }
        <Zakladka Ikonka={PersonIcon} tekst="Profil" />

        { /* Przycisk - dodaj wpis */ }
        <Button variant="outlined" className="przyciskWpis" fullWidth>Testowy przycisk</Button>

        </div>
    );
}

export default Panel;



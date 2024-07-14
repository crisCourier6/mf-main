import React from 'react';
import { Button, Box} from '@mui/material';
import { Link } from 'react-router-dom';


const serviceList = [["Escanear alimento", "../../icons/barcode_scan.png", "https://192.168.100.6:4002/"], 
                     ["Buscar alimento", "../../icons/search.png", "/search"], 
                     ["Mis preferencias", "../../icons/fish-reject.png", "/users/" + window.localStorage.id + "/foodprefs"], 
                     ["Nutricionistas", "../../icons/expert(1).png", "/experts"], 
                     ["FOOD LOCAL", "../../icons/expert(1).png", "/food"], 
                     ["Tiendas saludables", "../../icons/store.png", "/stores"]]

export const HomeOptions = () => {
    return <Box 
    sx={{
      pt: 2,
      pb: 10,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      px: 2,
      gap: 4,
      color:"primary.contrastText"
    }}>
        {serviceList.map((service) => (
        <Button variant='contained' component={Link} to={service[2]}
        sx={{
          height: "75px",
          width: "70vw",
          maxWidth: "300px",
          borderRadius: "25px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          border: "3px solid",
          borderColor: "secondary.main",
          bgcolor:"secondary.main",
          color: "secondary.contrastText",
          px: 2,
          textTransform: "none",
          fontSize: 16,
          "&:hover":{
            border: "3px solid",
            bordercolor: "secondary.contrastText",
            bgcolor: "secondary.main"
          }
        }}>
            {service[0]}
          <Box
            component="img"
            sx={{
              height: 60,
              maxHeight: { xs: 40, md: 167 },
            }}
            alt="EyesFood logo"
            src={service[1]}
          />
        </Button>
      ))}
      </Box>
}
import React, { useEffect, useState } from 'react';
import { Button, Box, Typography, Grid, CircularProgress, Divider, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScannerIcon from '../svgs/ScannerIcon';
import SearchIcon from '../svgs/SearchIcon';
import FoodPrefsIcon from '../svgs/FoodPrefsIcon';
import ExpertIcon from '../svgs/ExpertIcon';
import StoreIcon from '../svgs/StoreIcon';
// import FoodListIcon from '../svgs/FoodListIcon';
import AccountIcon from '../svgs/AccountIcon';
import HistoryIcon from '../svgs/HistoryIcon';
import ArticlesIcon from '../svgs/ArticlesIcon';
import StatsIcon from '../svgs/StatsIcon';
import SubmissionsIcon from '../svgs/SubmissionsIcon';
import FoodListIcon from '../svgs/FoodListIcon';
import DiaryIcon from '../svgs/DiaryIcon';
import FoodEditIcon from '../svgs/FoodEditIcon';
import FoodEditPendingCount from '../microfrontends/food-edits/FoodEditPendingCount';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

type Option = {
  name:string,
  allowedRoles: string[]
  function: () => void
  icon: any
}

export const Help:React.FC<{isAppBarVisible:boolean}>= ({isAppBarVisible}) => {
  const navigate = useNavigate()
  const [allDone, setAllDone] = useState(true)
  const currentUserId = window.sessionStorage.getItem("id") || window.localStorage.getItem("id")
  const currentStoreId = window.sessionStorage.getItem("s_id") || window.localStorage.getItem("s_id")
  const currentExpertId = window.sessionStorage.getItem("e_id") || window.localStorage.getItem("e_id")

  
    return (allDone
            ?<Grid container display="flex" 
                flexDirection="column" 
                justifyContent="flex-start"
                alignItems="center"
                sx={{width: "100vw", maxWidth:"500px", gap:"5px", flexWrap: "wrap", pb: 7}}
            >
                 
            <Box
            sx={{
                marginTop: isAppBarVisible? "30px":0,
                width:"95%",
            }}
            > 
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h6">Barra de navegación</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" textAlign={"left"}>
                        <li>
                            La barra de navegación se ubica en la parte de arriba de la pantalla.
                        </li>
                        <li>
                            El botón ubicado a la izquierda abre un menú lateral con accesos directos a distintas funciones de la aplicación.
                        </li>
                        <li>
                            El botón ubicado a la derecha abre un menú lateral donde se puede revisar el perfil de usuario, ver notificaciones y cerrar sesión.
                        </li>
                        <li>
                            El logo de EyesFood puede ser presionado para ir al menú de inicio de la aplicación.
                        </li>
                        <li>
                            La barra de navegación se esconde al desplazar la pantalla hacia abajo, y vuelve a aparecer al desplazar la pantalla hacia arriba.
                        </li>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <ScannerIcon height={"24px"} width={"24px"}/>
                    <Typography variant="h6" sx={{pl:1}}>Escanear alimento</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" textAlign={"left"}>
                        <li>
                        EyesFood permite escanear el código de barras de un alimento para encontrar información acerca de éste en la
                        base de datos de OpenFoodFacts.
                        </li> 
                        <li>
                        Solo basta con enfocar el código con la cámara de tu dispositivo. Si es que el código
                        no es reconocido, también puedes ingresar el código numérico manualmente.
                        </li>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <SearchIcon height={"24px"} width={"24px"}/>
                    <Typography variant="h6" sx={{pl:1}}>Buscar alimento</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" textAlign={"left"}>
                        <li>
                        Para encontrar un alimento, ingresa su nombre o marca en el campo de búsqueda y luego
                        presiona el ícono de la lupa. 
                        </li> 
                        <li>
                        Los resultados pueden ser filtrados al presionar el ícono del embudo y elegir los alérgenos
                        que quieres evitar.
                        </li>
                        <li>
                        Si ya has registrado tus preferencias alimenticias, puedes rellenar el filtro al presionar el botón
                        "Rellenar con mis preferencias"
                        </li>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <HistoryIcon height={"24px"} width={"24px"}/>
                    <Typography variant="h6" sx={{pl:1}}>Historial de alimentos</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" textAlign={"left"}>
                        <li>
                        Tu historial de alimentos muestra los alimentos que has visto en la aplicación.
                        </li> 
                        <li>
                        Puedes ver la cantidad de likes y dislikes que tienen, además de los comentarios que poseen.
                        </li>
                        <li>
                        Si lo deseas también puedes eliminar alimentos del historial al presionar el botón del tacho de basura.
                        </li>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            </Box>
        </Grid>
        :<CircularProgress/>
    )
}
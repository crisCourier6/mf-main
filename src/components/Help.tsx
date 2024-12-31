import React, { useState } from 'react';
import { Box, Typography, Grid, CircularProgress, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
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
import EditIcon from '@mui/icons-material/Edit';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import ArticlesIcon from '../svgs/ArticlesIcon';
import StatsIcon from '../svgs/StatsIcon';
import FoodListIcon from '../svgs/FoodListIcon';
import DiaryIcon from '../svgs/DiaryIcon';

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
                        <li>
                        Si escaneas un producto que no está en nuestra base de datos, tienes la oportunidad de aportar a la comunidad, 
                        rellenando un formulario con la información del producto (No hace falta que llenes el formulario completo)
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
                        Si pinchas el nombre o la ímágen de un alimento verás su página completa, donde puedes ver su información nutricional,
                        consejos de consumo, tiendas que venden el producto y comentarios de la comunidad.
                        </li> 
                        {
                            currentExpertId && <>
                            <li>
                                Para agregar un consejo de consumo al alimento, pincha el botón "Agregar consejo" al fondo de la pantalla.
                            </li> 
                            <li>
                                Puedes editar o borrar consejos que has subido en la lista de consejos del alimento.
                            </li> 
                            </>
                        }
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
                    <EditIcon height="24px" width="24px" sx={{color: "primary.main"}}/>
                    <Typography variant="h6" sx={{pl:1}}>Editar alimento</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" textAlign={"left"}>
                        <li>
                        Puedes editar la página de un alimento si es que ves información errónea o información faltante.
                        </li> 
                        <li>
                        La barra con el nombre del alimento contiene la opción "Editar", la cual te lleva al formulario
                        del alimento, donde puedes agregar o editar información.
                        </li>
                        <li>
                        Cuando termines de llenar el formulario, pincha el botón "Guardar Cambios" al fondo de la página.
                        </li>
                        <li>
                        Si tu aporte es aceptado, podrás ver los cambios que hiciste la próxima vez que visites la página del alimento.
                        </li>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {
                currentExpertId && <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <FoodListIcon height={"24px"} width={"24px"}/>
                    <Typography variant="h6" sx={{pl:1}}>Aportes de usuarios</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" textAlign={"left"}>
                        <li>
                        Los aportes de usuarios contienen información nueva o editada de los alimentos registrados en EyesFood.
                        </li> 
                        <li>
                        Si apruebas un aporte, la información del alimento se actualizará en EyesFood y en OpenFoodFacts.
                        </li>
                        <li>
                        Si rechazas un aporte, tendrás que explicar porque lo rechazaste.
                        </li>
                        <li>
                        Puedes aceptar un aporte y luego ir a la página del alimento para editarlo si es que al aporte le faltaba información o tenía errores ortográficos.
                        </li>
                        <li>
                        Ya que eres nutricionista, tus aportes son aceptados automáticamente.
                        </li>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            }
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
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <AccountIcon height={"24px"} width={"24px"}/>
                    <Typography variant="h6" sx={{pl:1}}>Mi perfil</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" textAlign={"left"}>
                        <li>
                        En tu perfil puedes cambiar tu nombre o contraseña.
                        </li> 
                        {
                            currentStoreId && 
                            <li>
                                También puedes modificar la información de tu tienda y acceder a tu catálogo
                            </li>
                        }
                        {
                            currentExpertId && 
                            <li>
                                También puedes modificar la información de tu perfil profesional.
                            </li>
                        }
                        {
                            !currentStoreId &&
                            <li>
                                Además dispones de accesos directos a otras funciones importantes como tus preferencias alimenticias o tus medidas personales
                            </li>
                        }
                       
                        <li>
                        El símbolo de la campana en la barra que dice "Mi perfil" te permite acceder a tus notificaciones. Si ves un círculo naranjo
                        con un número encima de la campana, significa que tienes notificaciones sin leer.
                        </li>
                        
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {
                currentStoreId &&
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <FoodListIcon height={"24px"} width={"24px"}/>
                        <Typography variant="h6" sx={{pl:1}}>Mi catálogo</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle2" textAlign={"left"}>
                            <li>
                                Para agregar alimentos a tu catálogo, encuentra la página del alimento y pincha el botón "Agregar al catálogo"
                                al fondo de la pantalla.
                            </li> 
                            <li>
                                Si el alimento ya está en tu catálogo, el botón dirá "Eliminar del catálogo".
                            </li>
                            <li>
                                Si accedes a tu catálogo podrás cambiar el estado de cada alimento a "Agotado" o "Disponible".
                            </li>
                            <li>
                                También puedes eliminar alimentos en el mismo catálogo, además de poder pinchar el botón "Agregar productos" para
                                ir al buscador de alimentos.
                            </li>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            }
            {
                !currentStoreId && <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <ExpertIcon height={"24px"} width={"24px"}/>
                    <Typography variant="h6" sx={{pl:1}}>Nutricionistas</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" textAlign={"left"}>
                        <li>
                        EyesFood dispone de una red de nutricionistas, quienes comparten consejos de consumo en las páginas de alimentos y 
                        suben artículos con información que te puede servir para cuidar tu salud.
                        </li> 
                        <li>
                        Puedes ver el perfil profesional e información de contacto de cada nutricionista en caso de que
                        estes buscando la ayuda de un experto para mantener o mejorar tu salud alimenticia.
                        </li>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            }
            
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <StoreIcon height={"24px"} width={"24px"}/>
                    <Typography variant="h6" sx={{pl:1}}>Tiendas</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" textAlign={"left"}>
                        <li>
                        Las tiendas registradas en EyesFood se especializan en productos saludables. 
                        </li> 
                        <li>
                        Las páginas de alimentos contienen listados de tiendas que tienen dicho producto en su catálogo.
                        </li> 
                        <li>
                        Puedes ver el perfil de cada tienda para obtener información de su catálogo completo e información de contacto.
                        </li>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {
                !currentStoreId && <>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <FoodPrefsIcon height={"24px"} width={"24px"}/>
                        <Typography variant="h6" sx={{pl:1}}>Preferencias alimenticias</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle2" textAlign={"left"}>
                            <li>
                            Puedes seleccionar los alérgenos alimenticios que deseas evitar.
                            </li> 
                            <li>
                            Al ver la página de un alimento, te indicaremos si éste contiene estos alérgenos en la sección
                            QuickLook.
                            </li> 
                            <li>
                            Tambien puedes usar estas preferencias al buscar un alimento, pinchando el ícono del embudo.
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
                        <StatsIcon height={"24px"} width={"24px"}/>
                        <Typography variant="h6" sx={{pl:1}}>Mis medidas</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle2" textAlign={"left"}>
                            <li>
                            La lista de medidas te permite llevar registro de tus medidas personales.
                            </li> 
                            <li>
                            En la página de cada medida puedes pinchar el botón "Mostrar gráfico" para ver el progreso
                            de tus medidas en el tiempo
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
                    <DiaryIcon height={"24px"} width={"24px"}/>
                    <Typography variant="h6" sx={{pl:1}}>Mi diario alimenticio</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" textAlign={"left"}>
                        <li>
                        Los diarios alimenticios te permiten registrar tus comidas, tanto las que ya consumiste como las que deseas consumir.
                        </li> 
                        <li>
                        Al pinchar la opción "Ver registros" de un diario, puedes ver un calendario, donde puedes seleccionar el día donde
                        quieres añadir el registro.
                        </li> 
                        <li>
                        Cada registro posee un título (ej: Desayuno), detalles (ej: Pan con queso) y hora. Pincha el botón "Guardar" 
                        para agregar tu registro.
                        </li> 
                        <li>
                        Si pinchas el botón "Descargar" obtendrás tu diario en formato PDF.
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
                    <ArticlesIcon height={"24px"} width={"24px"}/>
                    <Typography variant="h6" sx={{pl:1}}>Artículos de salud</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" textAlign={"left"}>
                        <li>
                        Los artículos de salud son compartidos por los nutricionistas de EyesFood.
                        </li> 
                        {
                            currentExpertId && <>
                            <li>
                                Puedes pinchar el botón "Subidos por mi" para ver solo los artículos que tu has agregado.
                            </li>
                            <li>
                                Para agregar un nuevo enlace de artículo, pincha el botón "Agregar artículo"
                            </li>
                            </>
                        }
                        <li>
                        Al pinchar "Ver artículo", éste se abrirá en una nueva pestaña en tu navegador.
                        </li> 
                        <li>
                        En la descripción de cada artículo puedes ver el nombre del nutricionista que lo subió.
                        </li> 
                        <li>
                        Si pinchas el nombre del nutricionista, verás su perfil.
                        </li> 
                    </Typography>
                </AccordionDetails>
            </Accordion>
                </>
            }
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <CommentRoundedIcon height={"24px"} width={"24px"} sx={{color: "primary.main"}}/>
                    <Typography variant="h6" sx={{pl:1}}>Comentarios</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" textAlign={"left"}>
                        <li>
                        Puedes escribir comentarios en las páginas de alimentos, perfiles de nutricionistas y tiendas. 
                        </li> 
                        <li>
                        Tambien puedes marcar la opción "Recomendado" si es que tu comentario es una recomendación del nutricionista o tienda.
                        </li> 
                        <li>
                        Los comentarios pueden ser ocultados o eliminados por el soporte técnico de EyesFood.
                        </li>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            </Box>
        </Grid>
        :<CircularProgress/>
    )
}
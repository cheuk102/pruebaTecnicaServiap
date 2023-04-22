import { QueryPersonaje } from "../helpers/QueryPersonaje";
import { BotonConsultar } from "../styled-components/Button";
import { CardHistorial } from "../styled-components/CardHistorial";
import { ImagenMiniatura } from "../styled-components/ImagenMiniatura";
import { TextoInfo } from "../styled-components/TextoInfo";
import { TituloHistorial } from "../styled-components/Titulo";


export function History({personajes, onLoadCharacter}) {
    
    const prueba = (personaje) => {
        onLoadCharacter(personaje);
    }

    if(personajes.length > 0) {

        let historial = personajes.map(personaje => {
            return (
                <CardHistorial key={personaje.id} className="card_historial">
                    <ImagenMiniatura src={personaje.image} alt="imagenPersonaje" />
                    <TextoInfo pantalla='historial'>{personaje.name}</TextoInfo>
                    <BotonConsultar key={personaje.id} onClick={() => prueba(personaje)}>View</BotonConsultar>
                </CardHistorial>
            );
        });


        return (
            <>
            <TituloHistorial>History</TituloHistorial>
            {historial}
            </>
        );
    }
}
import '../App.css';
import { Contenedor, ContenedorInfo, ContenedorTexto } from '../styled-components/Contenedores';
import { Imagen } from '../styled-components/Imagen';
import { Subtitulo } from '../styled-components/Subtitulo';
import { TextoInfo } from '../styled-components/TextoInfo';
import { Titulo } from '../styled-components/Titulo';
import { TituloInfo } from '../styled-components/TituloInfo';

export function CardPersonaje({ personaje }) {
  const date = new Date(personaje.created);

  return (
    <Contenedor>
      <div>
        <Imagen src={personaje.image} alt='imagenPersonaje' />
      </div>
      <ContenedorInfo>
        <Titulo>{personaje.name}</Titulo>
        <Subtitulo>CHARACTER ID: {personaje.id}</Subtitulo>
        <hr />
        <ContenedorTexto>
          <TituloInfo>Status:</TituloInfo>
          <TextoInfo>{personaje.status}</TextoInfo>
          <hr />
        </ContenedorTexto>
        <ContenedorTexto>
          <TituloInfo>Species:</TituloInfo>
          <TextoInfo>{personaje.species}</TextoInfo>
          <hr />
        </ContenedorTexto>
        <ContenedorTexto>
          <TituloInfo>Type:</TituloInfo>
          <TextoInfo>{personaje.type}</TextoInfo>
          <hr />
        </ContenedorTexto>
        <ContenedorTexto>
          <TituloInfo>Gender:</TituloInfo>
          <TextoInfo>{personaje.gender}</TextoInfo>
          <hr />
        </ContenedorTexto>
        <ContenedorTexto>
          <TituloInfo>Origin:</TituloInfo>
          <TextoInfo>{personaje.origin.name}</TextoInfo>
          <hr />
        </ContenedorTexto>
        <ContenedorTexto>
          <TituloInfo>Location:</TituloInfo>
          <TextoInfo>{personaje.location.name}</TextoInfo>
          <hr />
        </ContenedorTexto>
        <ContenedorTexto>
          <TituloInfo>Created:</TituloInfo>
          <TextoInfo>{date.toDateString()}</TextoInfo>
          <hr />
        </ContenedorTexto>
      </ContenedorInfo>
    </Contenedor>
  );
}

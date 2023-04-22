import { CardPersonaje } from "../componentes/CardPersonaje";
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { NoInfo } from "../styled-components/NoInfo";
import { Blocks } from "react-loader-spinner";

export const QueryPersonaje = ({id, onNewCharacter}) => {
  return (
    <Query
      query={gql`
        {
          character(id: ${id}) {
            id
            name
            image
            status
            species
            type
            gender
            origin {
              name
            }
            location {
              name
            }
            created
          }
        }
      `}>
      {({ loading, error, data }) => {
        if (loading) {
          return (<Blocks
          visible={true}
          height="100"
          width="100"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper loader"
          />)
        }
        if (error) return <p>Error al cargar</p>;

          if (data.character !== null) {
            onNewCharacter(data.character);
            return <CardPersonaje personaje={data.character}></CardPersonaje>;
          } else {
            return <NoInfo>No se ha cargado ningún personaje</NoInfo>
          }
      }}
    </Query>
  );
};

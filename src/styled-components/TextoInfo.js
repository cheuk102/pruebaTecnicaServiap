import styled from 'styled-components'

export const TextoInfo = styled.span`
    font-size: ${props => props.pantalla === 'historial' ? ' 1.5rem' : ' 1rem'};
    float: right;
`
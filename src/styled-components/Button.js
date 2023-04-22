import styled from 'styled-components'

export const Button = styled.button`
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    border: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 12px;
    width: max-content;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0.875rem 1rem;
    margin-top: 20px;
    background: linear-gradient(135deg, rgb(48, 206, 231), rgb(130, 101, 252));
    color: rgb(255, 255, 255);
    margin-left: auto;
    margin-right: 8rem;

    &:hover {
        background: linear-gradient(135deg, rgb(130, 101, 252), rgb(48, 206, 231));
    }
`;

export const BotonConsultar = styled.button`
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 12px;
    width: max-content;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0.625rem 1.25rem;
    border: 1px solid rgb(130, 101, 252);
    color: rgb(130, 101, 252);
    background-color: transparent;

    &:hover {    
        border-radius: 5px;
        cursor: pointer;
        font-weight: 600;
        border: none;
        color: #fff;
        background: rgb(130, 101, 252);
    }
`;
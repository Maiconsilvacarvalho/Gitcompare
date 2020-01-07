import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
`;

export const Form = styled.form `
    margin-top:20px;
    width: 100%;
    max-width: 400px;
    display: flex;
    input{
        flex: 1;
        height: 55px;
        padding: 0 20px;
        background: #FFF;
        border: 0;
        font-size: 18px;
        color: #444;
        border-radius: 3px;
    }

    button{
        height: 55px;
        padding: 0 20px;
        margin-left: 10px;
        background:#63f5b8;
        color: #FFF;
        border: 0;
        font-size: 20px;
        font-weight:bold;

        &:hover{
          background:#52d89f;
        }
        }

`;

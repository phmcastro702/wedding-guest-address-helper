import React from "react";
import styled from "styled-components";

const MainForm = () => {
    return (
        <FormContainer>
            <FormBox>
                <FormTitle>Por favor confirme seu endereço para o envio do convite:</FormTitle>
                <FormBody>
                    <InputContainer>
                        <label for="firstName">Nome</label>
                        <FormInput type="text" id="firstName" name="guestFirstName" required />
                    </InputContainer>
                    <InputContainer>
                        <label for="lastName">Sobrenome</label>
                        <FormInput type="text" id="lastName" name="guestLastName" required />
                    </InputContainer>
                    <InputContainer>
                        <label for="address">Endereço</label>
                        <FormInput type="text" id="address" name="guestAddress" placeholder="Rua Lorem" required />
                    </InputContainer>
                    <FormInput type="submit" id="send" />
                </FormBody>
            </FormBox>
        </FormContainer>
    );
};


const FormContainer = styled.div`

    width: 90%;
    height: 100vh;
    position: absolute;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 10px;

`;

const FormBox = styled.div`

    grid-column: 1 / 7;
    grid-row: 2 / 6;
    background-color: white;
    border-radius: 45px;
    box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px;

`;

const FormTitle = styled.h3`
    font-family: 'Indie Flower', cursive;
    font-size: 30px;
`;

const FormBody = styled.form`
    display: grid;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
`;

const FormInput = styled.input`

    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;

`;

const InputContainer = styled.div`

    label {
        position: relative;
    }
    

`;



export { MainForm };
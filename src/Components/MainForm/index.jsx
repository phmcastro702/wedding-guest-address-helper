import React from "react";
import styled from "styled-components";

const MainForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const guestData = {};
        [...e.target].forEach(el => { guestData[el.name] = el.value; });
        console.table(guestData);

    }

    return (
        <FormContainer>
            <FormBox>
                <FormTitle>Por favor confirme seu endereço para o envio do convite:</FormTitle>
                <FormBody onSubmit={handleSubmit}>
                    <InputContainer>
                        <p>Nome</p>
                        <FormInput type="text" id="firstName" name="guestFirstName" required />
                    </InputContainer>
                    <InputContainer>
                        <p>Sobrenome</p>
                        <FormInput type="text" id="lastName" name="guestLastName" required />
                    </InputContainer>
                    <InputContainer>
                        <p>Endereço</p>
                        <FormInput type="text" id="address" name="guestAddress" placeholder="Rua Lorem" required />
                    </InputContainer>
                    <SubmitInput type="submit" id="send" />
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
    grid-template-rows: repeat(12, 1fr);
    gap: 10px;

`;

const FormBox = styled.div`

    grid-column: 1 / 7;
    grid-row: 3 / 12;
    background-color: white;
    border-radius: 45px;
    box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px;
    margin-top: 40px;
`;

const FormTitle = styled.h3`
    font-family: 'Indie Flower', cursive;
    font-size: 30px;
`;

const FormBody = styled.form`
    display: grid;
    justify-content: center;
    /* align-items: center; */
    /* row-gap: 20px; */
`;

const FormInput = styled.input`

    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;

`;

const SubmitInput = styled.input`
    margin-top: 20px;
`;

const InputContainer = styled.div`

    position: relative;
    

`;



export { MainForm };
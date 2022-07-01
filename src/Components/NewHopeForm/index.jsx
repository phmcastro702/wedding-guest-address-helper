import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button, LinearProgress } from '@material-ui/core';
import styled from 'styled-components';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        // margin: '0 auto',

    },
    card: {
        width: '90%',
        // height: 'auto',
        // paddingTop: '10px',
        paddingBottom: '20px',
        boxShadow: 'rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px',

    },
    input: {
        width: '70%',
        margin: '5px 0',

    },
    submitInput: {
        width: '70%',
        marginTop: '20px',
        // backgroundColor: '#d4a600',

    },
    sendingBar: {
        width: '100%',
        position: 'absolute',
        bottom: '0',
    }
}));



const NewHopeForm = () => {
    const classes = useStyles();
    const [sending, setSending] = useState(false);
    const [guestDataSent, setGuestDataSent] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        const guestData = {};
        [...e.target].forEach(el => {
            if (el.name) {
                guestData[el.name] = el.value;
            }
        });
        // console.table(guestData);

        try {
            const setGuestData = await fetch('http://192.168.30.148:3002/api/guest', { method: 'POST', body: JSON.stringify(guestData), headers: { 'Content-Type': 'application/json' } });
            const data = await setGuestData.json();
            setSending(false);
            if (data.success) {
                setGuestDataSent(true);
            }
            else {
                setShowError(true);
            }
        } catch (error) {
            setSending(false);
            setShowError(true);
        }

    }

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.card}>
                {
                    !guestDataSent ? (
                        <>
                            <FormTitle>Por favor confirme seu endereço para o envio do convite:</FormTitle>
                            <form className={classes.root} onSubmit={handleSubmit}>
                                <TextField type="text" name="guestFirstName" className={classes.input} label="Nome" required variant="outlined" />
                                <TextField type="text" name="guestLastName" className={classes.input} label="Sobrenome" required variant="outlined" />
                                <TextField type="text" name="guestAddress" className={classes.input} label="Endereço" required variant="outlined" />
                                <TextField type="text" name="guestPostalCode" className={classes.input} label="CEP" required variant="outlined" />
                                {/* <TextField type="submit" variant="outlined" id="submitInput" className={classes.submitInput} /> */}
                                <Button type="submit" variant="contained" color="primary" className={classes.submitInput}>
                                    Enviar
                                    {sending && <LinearProgress className={classes.sendingBar} hidden={false} />}
                                </Button>
                                {showError && <ErrorMessage> Algo deu errado, por favor tente novamente. </ErrorMessage>}
                            </form>
                        </>
                    ) : (
                        <FormTitle> Endereço enviado com sucesso! <br /> Obrigado! </FormTitle>
                    )
                }

            </Paper>
        </div >
    );
};

const FormTitle = styled.h3`
    font-family: 'Indie Flower', cursive;
    font-size: 25px;
    text-align: center;
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 15px;
    text-align: center;
`;



export { NewHopeForm };
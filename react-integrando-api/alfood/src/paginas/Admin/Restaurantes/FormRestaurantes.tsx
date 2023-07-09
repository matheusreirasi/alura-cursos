import React, {FormEvent, useEffect, useState} from "react"
import { Box, Button, TextField, Typography } from "@mui/material"
import http from "../../../api"
import { useParams } from "react-router-dom"


const FormRestaurantes = () => {
  const parametros = useParams()

  useEffect(() => {
   if (parametros.id) {
    http.get(`restaurantes/${parametros.id}/`)
      .then(resposta => setNomeRestaurante(resposta.data.nome))
   } 
  }, [parametros])
  
  const [nomeRestaurante, setNomeRestaurante] = useState('')

  const submeterForm = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault()

    if (parametros.id) {
      http.put(`restaurantes/${parametros.id}/`, {
        nome: nomeRestaurante
      })
        .then(()=> alert("Restaurante atualizado com sucesso!!!"))

    } else {
      http.post("restaurantes/", {
        nome: nomeRestaurante
      })
        .then(()=> alert("Restaurante cadastrado com sucesso!!!"))
    }

  }

  return (

    <Box sx={{display: "flex", flexDirection: 'column', alignItems: 'center'}} flexGrow={1}>
      <Typography component="h1">
        Formulário de Restaurantes
      </Typography>
      <Box component='form' onSubmit={submeterForm} sx={{width: '100%'}}>
        <TextField
          id="standard-basic"
          value={nomeRestaurante}
          onChange={ evento => setNomeRestaurante(evento.target.value)}
          label="Insira o restaurante"
          variant="standard"
          fullWidth
          required
        />
        <Button type="submit" variant="outlined" fullWidth>
          Enviar!
        </Button>
      </Box>
    </Box>
  )
}

export default FormRestaurantes
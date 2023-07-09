import React, {FormEvent, useEffect, useState, ChangeEvent} from "react"
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import http from "../../../api"
import ITag from "../../../interfaces/ITag"
import IRestaurante from "../../../interfaces/IRestaurante"


const FormPratos = () => {
  const parametros = useParams()

  const [nomePrato, setNomePrato] = useState('')
  const [descricaoPrato, setDescricaoPrato] = useState('')
  const [tags, setTags] = useState< ITag[] >([])
  const [tag, setTag] = useState('')
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]> ([])
  const [restaurante, setRestaurante] = useState('')
  const [imagem, setImagem] = useState<File | null>(null)

  const selecionarImagem = (evento: ChangeEvent<HTMLInputElement>) => {
    if (evento.target.files?.length) {
      setImagem(evento.target.files[0])
    }
  }

  useEffect(() => {

    http.get<{tags: ITag[]}>('tags/')
      .then(resposta => setTags(resposta.data.tags))
    http.get<IRestaurante[]>('restaurantes/')
      .then(resposta => setRestaurantes(resposta.data))

    if (parametros.id) {
      http.get(`pratos/${parametros.id}/`)
        .then(resposta => setNomePrato(resposta.data.nome))
    } 
  }, [parametros])
  

  const submeterForm = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    /*
    if (parametros.id) {
      http.put(`pratos/${parametros.id}/`, {
        nome: nomePrato
      })
        .then(()=>{
          alert("Prato atualizado com sucesso!!!")
        })

    } else {
      http.post("pratos/", {
        nome: nomePrato
      })
        .then(()=>{
          alert("Prato cadastrado com sucesso!!!")
        })
    }
    */

    const formData = new FormData()

    formData.append('nome', nomePrato)
    formData.append('descricao', descricaoPrato)
    formData.append('tag', tag)
    formData.append('restaurante', restaurante)

    imagem && formData.append('imagem', imagem)

    http.request({
      url:'pratos/',
      method:'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: formData
    })
      .then(() => alert('Prato cadastrado com sucesso!'))
      .catch(err => console.log(err))

  }

  return (

    <Box sx={{display: "flex", flexDirection: 'column', alignItems: 'center'}} flexGrow={1}>
      <Typography component="h1">
        Formulário de pratos
      </Typography>
      <Box component='form' onSubmit={submeterForm} sx={{width: '100%'}}>
        <TextField
          id="standard-basic"
          value={nomePrato}
          onChange={ evento => setNomePrato(evento.target.value)}
          label="Insira o prato"
          variant="standard"
          fullWidth
          required
          margin="dense"
        />
        <TextField
          id="standard-basic"
          value={descricaoPrato}
          onChange={ evento => setDescricaoPrato(evento.target.value)}
          label="Insira a descrição do prato"
          variant="standard"
          fullWidth
          required
          margin="dense"
        />
        <FormControl fullWidth margin="dense">
          <InputLabel id='select-tag'>
            Tag
          </InputLabel>
          <Select labelId="select-tag" value={tag} onChange={evento => setTag(evento.target.value)}>
            {tags.map( tag => <MenuItem key={tag.id} value={tag.value}>
              {tag.value}
            </MenuItem>)}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="dense">
          <InputLabel id='select-restaurante'>
            Nome do restaurante
          </InputLabel>
          <Select labelId="select-restaurante" value={restaurante} onChange={evento => setRestaurante(evento.target.value)}>
            {restaurantes.map( restaurante => <MenuItem key={restaurante.id} value={restaurante.id}>
              {restaurante.nome}
            </MenuItem>)}
          </Select>
        </FormControl>

        <input type="file" onChange={selecionarImagem} />

        <Button type="submit" variant="outlined" fullWidth>
          Enviar!
        </Button>
      </Box>
    </Box>
  )
}

export default FormPratos

// Foi criado um state personalizado para fazer a requisição das tags da API e um state para mostrar a tag selecionada dentre as opções do select. Esse segundo state é uma string padrão, logo não precisa criar uma interface para ele.

//Outro método de enviar essa formulário de pratos seria colocar encType='multipart/form-data' na box do formulário pois assim possibilitaria o envio de arquivos como uma imagem ou áudio ao invés de somente textos que o JSON já reconhece.
import { useEffect, useState } from "react"
import IRestaurante from "../../../interfaces/IRestaurante"
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material"
import http from "../../../api"
import { Link } from "react-router-dom"

const AdminRestaurantes = () => {

  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

  useEffect(() => {
    http.get("restaurantes/")
      .then(resposta => {setRestaurantes(resposta.data)})
  }, [])

  const excluirRestaurante = (restauranteSeraExcluido: IRestaurante) => {
    http.delete(`restaurantes/${restauranteSeraExcluido.id}/`)
      .then(() => {
        const listaRestaurantes = restaurantes.filter(restaurante => restaurante.id !== restauranteSeraExcluido.id)
        setRestaurantes([...listaRestaurantes])
      })
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Nome </TableCell>
            <TableCell> Ação </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurantes.map((restaurante) => (
            <TableRow
              key={restaurante.nome}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {restaurante.nome}
              </TableCell>
              <TableCell>
                [ <Link to={`/admin/restaurantes/${restaurante.id}`}> Editar </Link> ]
              </TableCell>
              <TableCell>
                <Button variant="outlined" color="error" onClick={() => excluirRestaurante(restaurante)}>
                  Excluir
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AdminRestaurantes
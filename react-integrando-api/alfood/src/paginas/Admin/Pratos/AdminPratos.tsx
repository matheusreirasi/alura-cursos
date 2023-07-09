import { useEffect, useState } from "react"
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material"
import http from "../../../api"
import { Link } from "react-router-dom"
import IPrato from "../../../interfaces/IPrato"

const AdminPratos = () => {

  const [pratos, setPratos] = useState<IPrato[]>([])

  useEffect(() => {
    http.get("pratos/")
      .then(resposta => {setPratos(resposta.data)})
  }, [])

  const excluirPrato = (pratoSeraExcluido: IPrato) => {
    http.delete(`restaurantes/${pratoSeraExcluido.id}/`)
      .then(() => {
        const listaPratos = pratos.filter(prato => prato.id !== pratoSeraExcluido.id)
        setPratos([...listaPratos])
      })
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Nome </TableCell>
            <TableCell> Tag </TableCell>
            <TableCell> Imagem </TableCell>
            <TableCell> Ação </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pratos.map((prato) => (
            <TableRow
              key={prato.nome}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {prato.nome}
              </TableCell>
              <TableCell component="th" scope="row">
                {prato.tag}
              </TableCell>
              <TableCell component="th" scope="row">
                [ <a href={prato.imagem} target="_blank" rel="noreferrer"> Ver imagem </a>]
              </TableCell>
              <TableCell>
                [ <Link to={`/admin/pratos/${prato.id}`}> Editar </Link> ]
              </TableCell>
              <TableCell>
                <Button variant="outlined" color="error" onClick={() => excluirPrato(prato)}>
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

export default AdminPratos
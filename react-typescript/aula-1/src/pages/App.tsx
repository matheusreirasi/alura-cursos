import React, {useState} from 'react';
import Formulario from '../components/Formulario/Formulario';
import Lista from '../components/Lista/Lista';
import Cronometro from '../components/Cronometro/Cronometro';
import style from "./App.module.scss"
import { ITarefa } from '../types/tarefas';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()

  const selecionaTarefa = (tarefaSelecionada: ITarefa)=>{
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  const finalizarTarefa = () => {
    if (selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa
      }))
    }
  }

  return (
    <div className={style.AppStyle}>

      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa}/>
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
    </div>
  );
}

export default App;

//Teve que ser passado tarefas para cá porque quando se utiliza props somente é possível um componente pai passar um props para um componente filho. Não é possível passar props de um componente filho para um componente pai. Como era necessário passar os valores do formulário para lista, foi passado tarefas e setTarefas para cá. Agora essa conversa ocorre porque foi criado parâmetros(props) para cada componente que eu criei e através desses props que um valor contido em um componente aparece em outro componente
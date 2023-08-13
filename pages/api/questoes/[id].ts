import type { NextApiRequest, NextApiResponse } from 'next'
import questoes from '../bancoDeQuestoes'

export default function handler(
  req: any,
  res: NextApiResponse<any>
) {
  const idSelecionado = +req.query.id

  const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

  if(unicaQuestaoOuNada.length === 1){
    const questaoSelecionada = unicaQuestaoOuNada[0]
    res.status(200).json(questaoSelecionada.paraObjeto())
  } else {
    res.status(204).send 
  }

  res.status(200).json(questoes[0].paraObjeto())
}

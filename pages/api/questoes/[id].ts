import type { NextApiRequest, NextApiResponse } from 'next'
import questoes from '../bancoDeQuestoes'

export default function handler(
  req: any,
  res: NextApiResponse<any>
) {
  res.status(200).json(questoes[0].paraObjeto())
}

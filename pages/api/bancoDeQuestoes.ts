import QuestaoModel from "@/model/questao";
import RespostaMotel from "@/model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual bicho transmite a doença de Chagas?',[
        RespostaMotel.errada("Abelha"),
        RespostaMotel.errada("Barata"),
        RespostaMotel.errada("Pulga"),
        RespostaMotel.certa("Barbeiro")
    ]),
    new QuestaoModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',[
        RespostaMotel.errada("Caju"),
        RespostaMotel.errada("Côco"),
        RespostaMotel.errada("Chuchu"),
        RespostaMotel.certa("Abóbora")
    ]),
]

export default questoes
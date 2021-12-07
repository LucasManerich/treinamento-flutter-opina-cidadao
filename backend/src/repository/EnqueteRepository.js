const EnquenteSituacao = require('../enum/EnquenteSituacao');
const db = require('../utils/database');

const EnqueteRepository = {
  /**
   * Realiza a geração de um ID
   */
  geraId() {
    const ultimoItem = db.get('enquetes').takeRight(1).first().value();
    let proximoId = 1;
    
    // se existirem enquetes na base de dados, vamos buscar pelo ID do último elemento e incrementar o número
    if(ultimoItem) {
      const { id } = ultimoItem;
      proximoId = id + 1;
    }

    return proximoId;
  },

  /**
   * Insere uma enquete na base de dados
   */
  insereEnquete(titulo, dataLimite) {
    const item = {
      id: this.geraId(),
      titulo: titulo,
      situacao: EnquenteSituacao.Disponivel,
      dataLimite: dataLimite, 
    }

    // salva na base de dados
    db.get('enquetes').push(item).write();
    
    return item
  },

  inserePergunta() {
    
  },

  /**
   * Retorna todas as enquetes
   */
  getEnquetes() {
    return db.get('enquetes').value();
  },

  /**
   * Exclui uma enquetes
   */
  excluiEnquete(id) {
    db.get('enquetes').remove({ id }).write();
  },

  /**
   * Altera a situação da enquetes
   */
  alteraSituacaoEnquete(situacao, id) {
    db.get('enquetes').find({ id }).assign({ situacao }).write();
  }
}

module.exports = EnqueteRepository;
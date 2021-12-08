const EnqueteRepository = require("../repository/EnqueteRepository");

module.exports = {
  
  /**
   * @api {get} /enquete/:id/pergunta Listar Perguntas
   * @apiGroup Perguntas
   * @apiDescription Endpoint de listagem de perguntas
   * 
   * @apiSuccessExample {json} Sucesso
   *    HTTP/1.1 200 OK
   *    [
   *      {
   *        "id": 1,
   *        "titulo": "Segurança Pública",
   *        "opcoes": [
   *          "Novas Viaturas para a GCM",
   *          "Instalação de câmeras na área central",
   *          "etc"
   *        ],
   *      }
   *    ]
   *
   */
  listarPerguntas(request, response) {
    const { id } = request.params;
    const enquetes = EnqueteRepository.getPerguntasFromEnquete(Number(id));
    return response.json(enquetes);
  },

  
  /**
   * @api {post} /enquete/:id/pergunta Listar Perguntas
   * @apiGroup Perguntas
   * @apiDescription Endpoint de listagem de perguntas
   * 
   * @apiSuccessExample {json} Sucesso
   *    HTTP/1.1 200 OK
   *    {
   *      "sucesso": true
   *    }
   */
  incluirPergunta(request, response) {
    const { id } = request.params;
    const { titulo, opcoes } = request.body;
    EnqueteRepository.inserePergunta(Number(id), titulo, opcoes);
    return response.json({ sucesso: true });
  },
}

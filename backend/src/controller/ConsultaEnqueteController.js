const EnqueteRepository = require("../repository/EnqueteRepository");

module.exports = {
  
  /**
   * @api {get} /enquete Listar as Enquetes
   * @apiGroup Enquentes
   * @apiDescription Endpoint de listagem de enquentes
   * 
   * @apiSuccessExample {json} Sucesso
   *    HTTP/1.1 200 OK
   *    [
   *      {
   *        "id": 1,
   *        "titulo": "Segurança Pública",
   *        "data_limite": "24/12/2021",
   *        "situacao": "DISPONIVEL"
   *      }
   *    ]
   *
   */
  listarEnquetes(request, response) {
    const enquetes = EnqueteRepository.getEnquetes();
    return response.json(enquetes);
  },

  /**
   * @api {post} /enquete Incluir enquente
   * @apiGroup Enquentes
   * @apiDescription Endpoint de listagem de enquentes
   * 
   * @apiSuccessExample {json} Sucesso
   *    HTTP/1.1 200 OK
   *    {
   *      "sucesso": true
   *    }
   */
  incluirEnquete(request, response) {
    const { titulo, data_limite } = request.body;
    
    if(!titulo) {
      return response.status(400).json({ msg: 'O campo "titulo" é obrigatório!' })
    }

    if(!data_limite) {
      return response.status(400).json({ msg: 'O campo "data_limite" é obrigatório!' })
    }

    EnqueteRepository.insereEnquete(titulo, data_limite);
    return response.json({ sucesso: true });
  },
}

function validateForm(form) {
  var msg = ""

  //Candidato
  if (form.getValue("nome") == "") {
    msg += "Campo Nome não foi preenchido <br>"
  }
  if (form.getValue("email") == "") {
    msg += "Campo E-mail não foi preenchido <br>"
  }
  if (form.getValue("telefone") == "") {
    msg += "Campo Telefone não foi preenchido <br>"
  }
  if (form.getValue("dataNascimento") == "") {
    msg += "Campo Data de nascimento não foi preenchido <br>"
  }
  if (form.getValue("cpf") == "") {
    msg += "Campo CPF não foi preenchido <br>"
  }

  //informacoes da vaga
  if (form.getValue("tipoContrato") == "") {
    msg += "Campo Tipo de Contrato não foi selecionado <br>"
  }
  if (
    form.getValue("medio") != "on" &&
    form.getValue("tecnico") != "on" &&
    form.getValue("superior") != "on"
  ) {
    msg += "Campo Escolaridade não foi selecionado <br>"
  }
  if (form.getValue("salario") == "") {
    msg += "Campo Salário não foi preenchido <br>"
  }

  //Endereco
  if (form.getValue("cep") == "") {
    msg += "Campo CEP não foi preenchido <br>"
  }
  if (form.getValue("estado") == "") {
    msg += "Campo Estado não foi preenchido <br>"
  }
  if (form.getValue("cidade") == "") {
    msg += "Campo Cidade não foi preenchido <br>"
  }
  if (form.getValue("bairro") == "") {
    msg += "Campo Bairro não foi preenchido <br>"
  }
  if (form.getValue("logradouro") == "") {
    msg += "Campo Logradouro não foi preenchido <br>"
  }
  if (form.getValue("numero") == "") {
    msg += "Campo Número não foi preenchido <br>"
  }

  //Dados bancarios
  if (form.getValue("banco") == "") {
    msg += "Campo Banco não foi preenchido <br>"
  }
  if (form.getValue("conta") == "") {
    msg += "Campo Conta não foi preenchido <br>"
  }
  if (form.getValue("tipoConta") == "") {
    msg += "Campo Tipo de Conta não foi selecionado <br>"
  }

  //Responsaveis
  var responsaveis = form.getChildrenIndexes("responsaveisTabela")

  if (responsaveis.length == 0) {
    msg += "Nenhum Responsável foi selecionado <br>"
  }

  if (msg != "") {
    throw msg
  }
}

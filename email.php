<?php
//1 – Definimos Para quem vai ser enviado o email
$para = "daniel_dxp@outlook.com";
//2 - resgatar o nome digitado no formulário e  grava na variavel $nome
$nome = $_POST['nome'];
$email = $_POST['email'];
// 3 - resgatar o assunto digitado no formulário e  grava na variavel
//$assunto
$assunto = "[CONTATO] - Website Front-end Developer";
 //4 – Agora definimos a  mensagem que vai ser enviado no e-mail
$mensagem = "<strong>Nome:  </strong>".$nome;
$mensagem .= "<br><strong>E-mail:  </strong>".$email;
$mensagem .= "<br>  <strong>Mensagem: </strong>"
.$_POST['mensagem'];

//5 – agora inserimos as codificações corretas e  tudo mais.
$headers =  "Content-Type:text/html; charset=UTF-8\n";
$headers .= "From:  dominio.com.br<daniel_dxp@outlook.com>\n";
//Vai ser //mostrado que  o email partiu deste email e seguido do nome
$headers .= "X-Sender:  <daniel_dxp@outlook.com>\n";
//email do servidor //que enviou
$headers .= "X-Mailer: PHP  v".phpversion()."\n";
$headers .= "X-IP:  ".$_SERVER['REMOTE_ADDR']."\n";
$headers .= "Return-Path:  <daniel_dxp@outlook.com>\n";
//caso a msg //seja respondida vai para  este email.
$headers .= "MIME-Version: 1.0\n";

mail($para, $assunto, $mensagem, $headers);  //função que faz o envio do email.
?>
<?php

  if(isset($_POST['email']) && $_POST['email'] != '') {

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['message'];
  
    $to = 'daniel_dxp@outlook.com';
    $subject = '[CONTATO] - Website Front-end Developer';
    $body = "Nome: ".$nome."\r\n"
            ."E-mail: ".$email."\r\n"
            ."Mensagem: ".$mensagem;
      
    mail($to,$subject,$body);
  }
?>
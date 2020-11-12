<?php

if(isset($_POST['email']) && !empty($_POST['email'])) {

  $nome = addcslashes($_POST['nome']);
  $email = addcslashes($_POST['email']);
  $mensagem = addcslashes($_POST['message']);

  $to = 'daniel_dxp@outlook.com';
  $subject = '[CONTATO] - Website Front-end Developer';
  $body = "Nome: ".$nome."\r\n"
          ."E-mail: ".$email."\r\n"
          ."Mensagem: ".$mensagem;
  $header = "From:dfs@netlify.app"."\r\n"
            ."Reply-to:".$email."\r\n"
            ."X=Mailer:PHP/".phpversion();
  
  if(mail($to,$subject,$body,$header)){
    echo("EMAIL ENVIADO");
  } else {
    echo("EMAIL NÃO ENVIADO")
  }
}



?>
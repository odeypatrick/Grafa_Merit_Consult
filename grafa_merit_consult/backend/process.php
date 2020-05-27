<?php
//Backend Mail Process to Grafameritconsult@gmail.com

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['msg'])){
    $name  = $_POST['name'];
    $email = $_POST['email'];
    $msg   = $_POST['msg'];

    //  mail variables

    $headers =   "MIME-Version: 1.0" ."\r\n";
    $headers .= "Content-Type:text/html;charset=UTF-8" . "\r\n";

    //aditional headers
    $headers .= "FROM: ". $name ."<". $email .">". "\r\n";
    
    $subject   = "Contact request from ".$name;
    
    $to     =   'joseph.patrick@lmu.edu.ng';

    $body   =   "<div style='padding: 20px; border-radius: 10px;font-family: raleway; border: 1px solid #ccc;background: #121212'>
                    <h2 style='text-align: center;'>Contact Request</h2>
                    <p style='text-transform: capitalize;font-size: 20px;'>". $name ."<p>
                    <p style='font-size: 20px;'>". $email ."<p>
                    <p style='line-height: 1.5em;'>". $msg ."</p>
                </div>";


    // sending the mail

    if(mail( $to , $subject , $body , $headers )){
        echo "Thanks for contacting us. We 'll be in touch soon.";
    }
    else{
        echo "Could not send mail";
    }
}
else{
    echo "invalid vars";
}
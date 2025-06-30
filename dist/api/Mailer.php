<?php
error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE); // disable warnings and notices so in case of warning the response is still valid JSON

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$sucess = true;
$exception = "";

$email = "ajurvedavostrave@email.cz";

function GetHeaders($emailFrom)
{
  $headers = "from: {$emailFrom} \n";
  $headers .= "MIME-Version: 1.0' \n";
  $headers .= "X-mailer: phpWebmail \n";
  $headers .= "Content-type: text/html; charset=UTF-8 \n";

  return $headers;
}

try {
  $data = json_decode(file_get_contents("php://input"), true);
  
  if (!mail($email, $data['name'], $data['message'], GetHeaders($data['email']))) {
    throw new Exception("Mail was not send successfully");
  }

} 
catch (Exception $e) {
  echo json_encode(array(
    "sucess" => false,
    "error" => $e->getMessage()
  ));
  
  exit();
}

$response = array(
  "sucess" => $sucess,
  "error" => $exception
);

echo json_encode($response);
?>
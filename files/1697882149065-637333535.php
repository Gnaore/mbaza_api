<?php
date_default_timezone_set('UTC');
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=UTF-8');
header("Access-Control-Expose-Headers: Content-Length, X-JSON, filename");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS, filename");
header("Access-Control-Allow-Headers:  Origin, X-Requested-With, Content-Type, filename, Accept, Access-Control-Allow-Headers, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS, filename");
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) header("Access-Control-Allow-Headers:
{$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    exit(0);
}

try {
    //webApi
    $pdo = new PDO('mysql:host=91.234.195.113;port=3306;dbname=c2209298c_mbaza;charset=utf8', 'c2209298c_mbaza', 'eXpri2kip');
    return $pdo;
} catch (Exception $e) {
    retour_json(false, "Connexion à la base de donnée impossible");
}

function retour_json($success, $msg, $results = NULL)
{
    $retour["success"] = $success;
    $retour["message"] = $msg;
    $retour["results"] = $results;
    echo json_encode($retour);
}

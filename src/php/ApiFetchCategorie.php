<?php
/**
 * Created by PhpStorm.
 * User: aaagabichou
 * Date: 17-02-22
 * Time: 13:49
 */
//header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Origin: http://decorator-arches-17418.netlify.com");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, If-Modified-Since, Cache-Control, Pragma");

require_once ('config.php');

$strSQL = "SELECT * FROM t_categorie";

if ($objResultCategorie = $objConnMySQLi->query($strSQL)) {
    while ($objLigneCategorie = $objResultCategorie->fetch_object()) {
        $arrCategorie['categorie'][] = array(
            'id' => $objLigneCategorie->id_categorie,
            'slug' => $objLigneCategorie->slug,
            'categorie' => $objLigneCategorie->nom_categorie
        );
    }
    $objResultCategorie->free_result();
}
echo json_encode($arrCategorie);

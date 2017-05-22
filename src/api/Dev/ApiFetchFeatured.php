<?php
/**
 * Created by PhpStorm.
 * User: aaagabichou
 * Date: 17-02-22
 * Time: 13:49
 */
header("Access-Control-Allow-Origin: http://localhost:3000");
//header("Access-Control-Allow-Origin: http://sickadelicposters.netlify.com");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, If-Modified-Since, Cache-Control, Pragma");

require_once ('config.php');

$strSQL = "SELECT * FROM t_affiche WHERE featured = 1";

if ($objResultAffiche = $objConnMySQLi->query($strSQL)) {
    while ($objLigneAffiche = $objResultAffiche->fetch_object()) {
        $arrAffiche['posters'][] = array(
            'id' => $objLigneAffiche->id_affiche,
            'titre' => $objLigneAffiche->titre,
            'description' => $objLigneAffiche->description,
            'prix' => $objLigneAffiche->prix,
            'img' => $objLigneAffiche->chm_image,
            'featured' => $objLigneAffiche->featured,
            'categorie' => $objLigneAffiche->id_categorie
        );
    }
    $objResultAffiche->free_result();
}
echo json_encode($arrAffiche);

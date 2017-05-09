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

if(isset($_GET['data'])){
    $categorie = $_GET['data'];
}
else{
    $categorie = 'all';
}

if($categorie !== 'all'){
    $strSQL = "SELECT * FROM t_affiche INNER JOIN t_categorie ON t_affiche.id_categorie=t_categorie.id_categorie WHERE slug = '".$categorie."'";

    if ($objResultAffiche = $objConnMySQLi->query($strSQL)) {
        while ($objLigneAffiche = $objResultAffiche->fetch_object()) {
            $arrAffiche['posters'][] = array(
                'id' => $objLigneAffiche->id_affiche,
                'titre' => $objLigneAffiche->titre,
                'description' => $objLigneAffiche->description,
                'prix' => $objLigneAffiche->prix,
                'img' => $objLigneAffiche->chm_image
            );
        }
        $objResultAffiche->free_result();
    }
    echo json_encode($arrAffiche);
}
else{
    $strSQL = "SELECT * FROM t_affiche";

    if ($objResultAffiche = $objConnMySQLi->query($strSQL)) {
        while ($objLigneAffiche = $objResultAffiche->fetch_object()) {
            $arrAffiche['posters'][] = array(
                'id' => $objLigneAffiche->id_affiche,
                'titre' => $objLigneAffiche->titre,
                'description' => $objLigneAffiche->description,
                'prix' => $objLigneAffiche->prix,
                'img' => $objLigneAffiche->chm_image
            );
        }
        $objResultAffiche->free_result();
    }
    echo json_encode($arrAffiche);
}


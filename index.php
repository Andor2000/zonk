<?php
  session_start();
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title><?php echo $title; ?> </title>

    <link rel="stylesheet" href="css/bootstrap.css">
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"> -->
    <link rel="stylesheet" href="css/style.css">
</head>


<body class="body_fon container">
    <!-- Шапка -->
    <?php include("header.php"); ?>



    <!-- начальное меню -->
    <!-- <div class="main_form">
        <div> <h1 style="color:white; font-size:80px">ЗОНК</h1> </div>
        <?php //include("rejimi.php"); ?>
    </div> -->

    <!-- Modal -->
    <?php //include("modal_risk.php"); ?>

    <?php include("play.php"); ?>



    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
</body>

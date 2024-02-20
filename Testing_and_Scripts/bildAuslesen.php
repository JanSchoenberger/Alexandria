<!DOCTYPE html>
<html>
<head>
    <title>Bildergalerie</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Bildergalerie</h1>

    <?php
    try {
        require_once("../includes/dbh.inc.php");
        $query = "SELECT * FROM pictures";

        $stmt = $pdo->prepare($query);
        $stmt->execute();

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            // Die Bilddaten sind binär, also müssen wir sie in Base64 konvertieren, um sie als Bildquelle zu verwenden
            $bildData = base64_encode($row['picture']);
            echo '<img src="data:image/jpeg;base64,' . $bildData . '">';
        }

        $pdo = null;
        $stmt = null;
    } catch (PDOException $e) {
        die("Connection failed". $e->getMessage());
    }
    ?>

</body>
</html>
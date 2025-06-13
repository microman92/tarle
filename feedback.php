<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $name = !empty($_POST['name']) ? $_POST['name'] : '';
    $tel = !empty($_POST['phone']) ? $_POST['phone'] : '';

    $tg_bot_token = '7534274378:AAHwW-if-b7PRWk0k4ezxVotCIWnJmEsZK8';
    $chat_id = '-4865221832';

    $text = "Получена обратная связь:\n\nИмя: $name\nТелефон: $tel \n";
    $url = "https://api.telegram.org/bot$tg_bot_token/sendMessage?chat_id=$chat_id&text=" . urlencode($text);


    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    $response_data = json_decode($response, true);

    if (isset($response_data['ok']) && $response_data['ok']) {
        echo json_encode(['status' => 'success', 'message' => 'Сообщение отправлено в Telegram']);
    } else {
        $error_message = isset($response_data['description']) ? $response_data['description'] : 'Неизвестная ошибка';
        echo json_encode(['status' => 'error', 'message' => 'Ошибка при отправке в Telegram: ' . $error_message]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Некорректный метод запроса']);
}
?>

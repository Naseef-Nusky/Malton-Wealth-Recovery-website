<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'ok' => false,
        'message' => 'Method not allowed.',
    ]);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput ?: '', true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'message' => 'Invalid request payload.',
    ]);
    exit;
}

function get_field(array $source, string $key): string
{
    $value = $source[$key] ?? '';
    return trim((string) $value);
}

$fullName = get_field($data, 'fullName');
$mobile = get_field($data, 'mobile');
$email = get_field($data, 'email');
$amountLost = get_field($data, 'amountLost');
$scamType = get_field($data, 'scamType');

if ($fullName === '' || $mobile === '' || $email === '' || $amountLost === '' || $scamType === '') {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'message' => 'Please complete all required fields.',
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'message' => 'Please provide a valid email address.',
    ]);
    exit;
}

$to = 'naseefnusky09@gmail.com';
$subject = 'New enquiry from website contact form';

$plainBody = implode("\n", [
    'A new enquiry was submitted on the Malton Wealth Recovery website.',
    '',
    'Full name: ' . $fullName,
    'Mobile number: ' . $mobile,
    'Email address: ' . $email,
    'Approximate amount lost: ' . $amountLost,
    'Type of scam: ' . $scamType,
    '',
    'Submitted at: ' . gmdate('Y-m-d H:i:s') . ' UTC',
]);

$safeReplyTo = preg_replace('/[\r\n]+/', '', $email);

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Malton Wealth Recovery <Info@maltonwealthrecovery.com>',
    'Reply-To: ' . $safeReplyTo,
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail($to, $subject, $plainBody, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'Mail server is not configured correctly on this host. Please contact support or use SMTP.',
    ]);
    exit;
}

echo json_encode([
    'ok' => true,
    'message' => 'Enquiry sent successfully.',
]);

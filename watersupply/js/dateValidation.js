function setupDateValidationLimits() {

    const targetDateInput =
        document.getElementById(
            'targetDeliveryDate'
        );

    if (!targetDateInput) return;

    const currentDate =
        new Date()
        .toISOString()
        .split('T')[0];

    targetDateInput.min =
        currentDate;

    targetDateInput.value =
        currentDate;
}
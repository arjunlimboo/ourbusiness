function setupInteractiveFormControls() {

    const btnSchedule =
        document.getElementById(
            'btnScheduleAction'
        );

    const btnOrder =
        document.getElementById(
            'btnOrderNowAction'
        );

    const dateInput =
        document.getElementById(
            'targetDeliveryDate'
        );

    const slotInput =
        document.getElementById(
            'targetDeliverySlot'
        );

    if (btnSchedule) {

        btnSchedule.addEventListener(
            'click',
            () => {

                const selectedDate =
                    dateInput.value;

                const selectedTime =
                    slotInput.options[
                        slotInput.selectedIndex
                    ].text;

                triggerToastNotification(
                    `Delivery scheduled for ${selectedDate} (${selectedTime})`
                );
            }
        );
    }

    if (btnOrder) {

        btnOrder.addEventListener(
            'click',
            () => {

                triggerToastNotification(
                    'Order submitted successfully!'
                );

            }
        );
    }
}
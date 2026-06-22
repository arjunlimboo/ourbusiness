function setupRegionalRouteChecker() {

    const verifyBtn =
        document.getElementById(
            'btnCheckAreaLocation'
        );

    const areaInput =
        document.getElementById(
            'routeAreaInput'
        );

    const outputDisplay =
        document.getElementById(
            'routeValidationDisplay'
        );

    if (
        !verifyBtn ||
        !areaInput ||
        !outputDisplay
    ) {
        return;
    }

    verifyBtn.addEventListener(
        'click',
        () => {

            const query =
                areaInput.value.trim();

            if (!query) {

                outputDisplay.style.display =
                    'block';

                outputDisplay.style.color =
                    '#ef4444';

                outputDisplay.innerHTML =
                    '<i class="fas fa-times-circle"></i> Please enter a location.';

                return;
            }

            outputDisplay.style.display =
                'block';

            outputDisplay.style.color =
                '#2e7d32';

            outputDisplay.innerHTML =
                `<i class="fas fa-check-circle"></i> Delivery available in <strong>${query}</strong>.`;

        }
    );
}
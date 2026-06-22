function setupScrollAnimations() {

    const metrics =
        document.querySelectorAll(
            '.metric-num'
        );

    metrics.forEach(metric => {

        const targetValue =
            parseInt(
                metric.getAttribute(
                    'data-target'
                )
            );

        let currentValue = 0;

        const increment =
            Math.ceil(
                targetValue / 50
            );

        const timer =
            setInterval(() => {

                currentValue += increment;

                if (
                    currentValue >=
                    targetValue
                ) {

                    metric.innerText =
                        targetValue.toLocaleString() +
                        '+';

                    clearInterval(
                        timer
                    );

                } else {

                    metric.innerText =
                        currentValue.toLocaleString() +
                        '+';
                }

            }, 30);

    });

}
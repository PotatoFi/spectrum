export const zoomTiers = {
    lowest: {
        threshold: 0.25,
        frequency: {
            step: 1000,
            minorSteps: 250,
            showAsGHz: true,
            ghzDecimals: 0,
        },
    },
    low: {
        threshold: 1,
        frequency: {
            step: 500,
            minorSteps: 100,
            showAsGHz: true,
            ghzDecimals: 1,
        },
    },
    medium: {
        threshold: 2,
        frequency: {
            step: 100,
            minorSteps: 50,
            showAsGHz: true,
            ghzDecimals: 1,
        },
    },
    high: {
        threshold: 10,
        frequency: {
            step: 20,
            minorSteps: 10,
            showAsGHz: false,
            ghzDecimals: 2,
        },
    },
    highest: {
        threshold: 20,
        frequency: {
            step: 10,
            minorSteps: 1,
            showAsGHz: false,
            ghzDecimals: 3,
        },
    },
    infinity: {
        threshold: Infinity,
        frequency: {
            step: 2,
            minorSteps: 1,
            showAsGHz: false,
            ghzDecimals: 0,
        },
    },
};

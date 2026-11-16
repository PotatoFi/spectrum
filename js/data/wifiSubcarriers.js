export const wifiSubcarriers = {
    "S1G-1": {
        spacing: 31.25,
        subcarriers: [[1, 13]],
        pilots: [7], // Page 3253 in 802.11-2020
        nulls: [0],
        inset: 0.09375, // 3 guard subcarriers:0.03125 * 3
    },

    "S1G-2": {
        spacing: 31.25,
        subcarriers: [[1, 28]],
        pilots: [7, 21],
        nulls: [0],
        inset: 0.125, //4 guard subcarriers: 0.03125 * 4
    },
    "S1G-4": {
        spacing: 31.25,
        subcarriers: [[3, 58]],
        pilots: [11, 25, 53],
        nulls: [[0, 2]],
        inset: 0.1875, // 6 guard subcarriers: 0.03125 * 6
    },
    "S1G-8": {
        spacing: 31.25,
        subcarriers: [[2, 122]],
        pilots: [11, 39, 75, 103],
        nulls: [[0, 1]],
        inset: 0.1875, // 6 guard subcarriers: 0.03125 * 6
    },
    "S1G-16": {
        spacing: 31.25,
        subcarriers: [[6, 250]],
        pilots: [25, 53, 89, 117, 139, 167, 203, 231],
        nulls: [[0, 5]],
        inset: 0.1875, // 6 guard subcarriers: 0.03125 * 6
    },
    OFDM: {
        spacing: 312.5,
        subcarriers: [[1, 26]],
        pilots: [7, 21],
        nulls: [0],
        inset: 1.875,
    },

    "HT-20": {
        // Page 2881 and 2910 of 802.11-2020
        spacing: 312.5,
        subcarriers: [[1, 28]],
        pilots: [7, 21],
        nulls: [0],
        inset: 1.25,
    },

    "HT-40": {
        // Page 2881 2910 of 802.11-2020
        spacing: 312.5,
        subcarriers: [[2, 58]],
        pilots: [11, 25, 53],
        nulls: [0],
        inset: 1.875, // 5 guard subcarriers: 0.3125 * 5
    },

    "VHT-20": {
        spacing: 312.5,
        subcarriers: [[1, 28]], // Page 3046 of 802.11-2020: -28 to -1 and 1 to 28
        pilots: [7, 21], // Page 3086 of 802.11-2020
        nulls: [0],
        inset: 1.25,
    },

    "VHT-40": {
        spacing: 312.5,
        subcarriers: [[2, 58]], // Page 3041 of 802.11-2020
        pilots: [11, 25, 53], // Page 3086 of 802.11-2020
        nulls: [[0, 2]], // Wild guess, same as S1G?
        inset: 1.8751,
    },

    "VHT-80": {
        spacing: 312.5,
        subcarriers: [[2, 122]], // Page 3041 of 802.11-2020
        pilots: [11, 39, 75, 103], // Page 3086 of 802.11-2020
        nulls: [[0, 1]], // Wild guess, same as S1G?
        inset: 1.875,
    },

    "VHT-160": {
        spacing: 312.5,
        subcarriers: [[6, 250]], // Page 3041 of 802.11-2020
        pilots: [25, 53, 89, 117, 139, 167, 203, 231], // Page 3087 of 802.11-2020
        nulls: [[0, 5]], // Wild guess, same as S1G?
        inset: 1.875,
    },
};

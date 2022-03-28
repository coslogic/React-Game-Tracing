import "../stylesheets/styles.css";
import "../stylesheets/button.css";

import { useEffect, useRef, useState } from "react";
import { prePathUrl } from "../components/CommonFunctions";
import Phaser from "phaser"
import BaseImage from "../components/BaseImage";
import { Player } from '@lottiefiles/react-lottie-player';

const maskInfoList = [
    { size: '48% 71%', position: '49.2% 55%' },
    { size: '41% 71%', position: '47.4% 55%' },
    { size: '41% 71%', position: '49.6% 55%' },
    { size: '40% 73%', position: '49.2% 55%' },
    { size: '40.5% 72%', position: '46.3% 55%' },
    { size: '40% 71%', position: '49.3% 55%' },
    { size: '40% 71%', position: '49.3% 55%' },
    { size: '40% 71%', position: '49.3% 55%' },
    { size: '40% 71%', position: '49.3% 55%' },
    { size: '40% 71%', position: '50.5% 55%' },
]

const iconPathList = [
    ['SB03_Train_Icon', 'SB03_Flag_Icon', 'SB03_Wiestle_Icon'],
    ['SB03_Bird_Icon', 'SB03_Fether_Icon', 'SB03_Tree_Icon'],
    ['SB03_Hotair_Balloon_Icon', 'SB03_Cloud_Icon', 'SB03_Aeroplane_Icon'],
    ['SB03_Boat_Icon', 'SB03_Shell_Icon', 'SB03_Fish_Icon'],
    ['SB03_Rabbit_Icon', 'SB03_Mango_Icon', 'SB03_Flower_Icon'],
    ['SB03_Tent_Icon', 'SB03_Balloon_Icon', 'SB03_Ice_Cream_Icon'],
    ['SB03_Ball_Icon', 'SB03_Bucket_Icon', 'SB03_Spade_Icon'],
    ['SB03_Apple_Icon', 'SB03_Insect_Icon', 'SB03_Leaf_Icon'],
    ['SB03_Frog_Icon', 'SB03_Butterfly_Icon', 'SB03_Mushroom_Icon'],
    ['SB03_Watermelon_Icon', 'SB03_Pumpkin_Icon', 'SB03_Coconut_Icon'],
]


const animtionList = [
    { path: 'SB03_01_1', scale: 0.4, left: 0.323, top: 0.195 },
    { path: 'SB03_02_1', scale: 0.4, left: 0.283, top: 0.158 },
    { path: 'SB03_03_1', scale: 0.4, left: 0.3, top: 0.16 },
    { path: 'SB03_04_1', scale: 0.4, left: 0.295, top: 0.16 },
    { path: 'SB03_05_1', scale: 0.4, left: 0.3, top: 0.17 },
    { path: 'SB03_06_1', scale: 0.4, left: 0.295, top: 0.16 },
    { path: 'SB03_07_1', scale: 0.4, left: 0.295, top: 0.16 },
    { path: 'SB03_08_1', scale: 0.4, left: 0.295, top: 0.16 },
    { path: 'SB03_09_1', scale: 0.4, left: 0.295, top: 0.16 },
    { path: 'SB03_10_1', scale: 0.4, left: 0.303, top: 0.16 },
]


const showingLayoutList = [

    [
        {
            wPath: 'SB03_L01_Engine_Prop',
            tPath: 'SB_03_NT_TI_01_engine',
            s: 1.5, r: -0.25, b: 0.1
        },

        {
            wPath: 'SB03_L01_Flag_Prop',
            tPath: 'SB_03_NT_TI_01_flag',
            s: 1.5, r: -0.25, b: 0.1
        },

        {
            wPath: 'SB03_L01_Wishel_Prop',
            tPath: 'SB_03_NT_TI_01_whistle',
            s: 1.5, r: -0.25, b: -0.2
        }
    ],

    [
        {
            wPath: 'SB03_L02_Bird_Prop',
            tPath: 'SB_03_NT_TI_02_birds',
            s: 1.5, r: -0.25, b: 0.00
        },

        {
            wPath: 'SB03_L02_Fether_Prop',
            tPath: 'SB_03_NT_TI_02_feathes',
            s: 1.5, r: -0.25, b: 0.0
        },

        {
            wPath: 'SB03_L02_Tree_Prop',
            tPath: 'SB_03_NT_TI_02_trees',
            s: 1.5, r: -0.25, b: -0.2
        }
    ],
    [
        {
            wPath: 'SB03_L03_Hot_air_Balloon_Prop',
            tPath: 'SB_03_NT_TI_03_hot air balloons',
            s: 1.5, r: -0.25, b: 0.1
        }
        ,

        {
            wPath: 'SB03_L03_Cloud_Prop',
            tPath: 'SB_03_NT_TI_03_clouds',
            s: 1.8, r: -0.4, b: -0.15
        },
        {
            wPath: 'SB03_L03_Aeroplane_Prop',
            tPath: 'SB_03_NT_TI_03_aeroplane',
            s: 1.5, r: -0.25, b: 0.1
        }


    ],
    [
        {
            wPath: 'SB03_L04_Boat_Prop',
            tPath: 'SB_03_NT_TI_04_boat',
            s: 1.2, r: -0.1, b: 0.2
        },
        {
            wPath: 'SB03_L04_Shell_Prop',
            tPath: 'SB_03_NT_TI_04_shells',
            s: 1.4, r: -0.2, b: 0.1
        },

        {
            wPath: 'SB03_L04_Fish_Prop',
            tPath: 'SB_03_NT_TI_04_fish',
            s: 1.2, r: -0.1, b: 0.1
        },


    ],
    [

        {
            wPath: 'SB03_L05_Rabbit_Prop',
            tPath: 'SB_03_NT_TI_05_rabbits',
            s: 1.5, r: -0.25, b: 0.1
        },
        {
            wPath: 'SB03_L05_Mango_Prop',
            tPath: 'SB_03_NT_TI_05_mangoes',
            s: 1.5, r: -0.25, b: 0.0
        },
        {
            wPath: 'SB03_L05_Flower_Prop',
            tPath: 'SB_03_NT_TI_05_flowers',
            s: 1.5, r: -0.25, b: 0.0
        },
    ],

    [
        {
            wPath: 'SB03_L06_Tent_Prop',
            tPath: 'SB_03_NT_TI_06_tent',
            s: 1.2, r: -0.1, b: 0.2
        },

        {
            wPath: 'SB03_L06_Balloon_Prop',
            tPath: 'SB_03_NT_TI_06_colourful balloon',
            s: 1.5, r: -0.25, b: 0.0, ts: 2, tb: 0.18
        },

        {
            wPath: 'SB03_L06_Ice_Cream_Prop',
            tPath: 'SB_03_NT_TI_06_icecream candy stick',
            s: 1.5, r: -0.25, b: 0.2
        }
    ],
    [
        {
            wPath: 'SB03_L07_Ball_Prop',
            tPath: 'SB_03_NT_TI_07_balls',
            s: 1.2, r: -0.1, b: 0.1
        },

        {
            wPath: 'SB03_L07_Bucket_Prop',
            tPath: 'SB_03_NT_TI_07_toy buckets',
            s: 1.2, r: -0.1, b: 0.1
        },

        {
            wPath: 'SB03_L07_Spades_Prop',
            tPath: 'SB_03_NT_TI_07_spades',
            s: 1.2, r: -0.1, b: 0.15
        }
    ],
    [
        {
            wPath: 'SB03_L08_Apple_Tree_Prop',
            tPath: 'SB_03_NT_TI_08_apple trees',
            s: 1.2, r: -0.1, b: 0.15
        },

        {
            wPath: 'SB03_L08_Insect_Prop',
            tPath: 'SB_03_NT_TI_08_insects',
            s: 1.2, r: -0.1, b: 0.05
        },

        {
            wPath: 'SB03_L08_Leaf_Prop',
            tPath: 'SB_03_NT_TI_08_leaf',
            s: 1.2, r: -0.1, b: 0.15
        }
    ],
    [
        {
            wPath: 'SB03_L09_Frog_Prop',
            tPath: 'SB_03_NT_TI_09_frog',
            s: 1.2, r: -0.1, b: 0.15
        },

        {
            wPath: 'SB03_L09_Butterfly_Prop',
            tPath: 'SB_03_NT_TI_09_butterfly',
            s: 1.2, r: -0.1, b: 0.2
        },

        {
            wPath: 'SB03_L09_Mushroom_Prop',
            tPath: 'SB_03_NT_TI_09_mushroom',
            s: 1.2, r: -0.1, b: 0.25
        }
    ],

    [
        {
            wPath: 'SB03_L10_Watermelon_Prop',
            tPath: 'SB_03_NT_TI_10_watermelon',
            s: 1.2, r: -0.1, b: 0.15
        },

        {
            wPath: 'SB03_L10_Pumpkin_Prop',
            tPath: 'SB_03_NT_TI_10_pumpkin',
            s: 1.2, r: -0.1, b: 0.2
        },

        {
            wPath: 'SB03_L10_Coconut_Prop',
            tPath: 'SB_03_NT_TI_10_coconut',
            s: 1.2, r: -0.1, b: 0.25
        }
    ],
]

const titleList = [
    { path: 'SB_03_NT_TI_01' },
    { path: 'SB_03_NT_TI_02' },
    { path: 'SB_03_NT_TI_03' },
    { path: 'SB_03_NT_TI_04' },
    { path: 'SB_03_NT_TI_05' },
    { path: 'SB_03_NT_TI_06' },
    { path: 'SB_03_NT_TI_07' },
    { path: 'SB_03_NT_TI_08' },
    { path: 'SB_03_NT_TI_09' },
    { path: 'SB_03_NT_TI_10' },
]

const letterPosList = [
    {
        base: { x: 635, y: 370 },
        highlight: [
            { s: 0.37, l: 0.31, t: 0.2 },
        ],

        white: { s: 0.4, l: 0.324, t: 0.194 },
        yellow: { s: 0.4, l: 0.302, t: 0.158 },

    },
    {
        base: { x: 620, y: 370 },
        highlight: [
            { s: 0.39, l: 0.295, t: 0.15 },
            { s: 0.39, l: 0.295, t: 0.385 },
        ],

        white: { s: 0.4, l: 0.284, t: 0.158 },
        yellow: { s: 0.4, l: 0.284, t: 0.158 },

    },
    {
        base: { x: 638, y: 370 },
        highlight: [
            { s: 0.39, l: 0.3, t: 0.05 },
            { s: 0.39, l: 0.3, t: 0.275 },
        ],

        white: { s: 0.4, l: 0.298, t: 0.158 },
        yellow: { s: 0.4, l: 0.298, t: 0.158 },

    },
    {
        base: { x: 635, y: 370 },
        highlight: [
            { s: 0.39, l: 0.22, t: 0.07 },
            { s: 0.39, l: 0.31, t: 0.23 },
            { s: 0.39, l: 0.351, t: 0.245 },
        ],
        white: { s: 0.4, l: 0.294, t: 0.158 },
        yellow: { s: 0.4, l: 0.294, t: 0.158 },

    },
    {
        base: { x: 610, y: 370 },
        highlight: [
            { s: 0.39, l: 0.305, t: 0.19 },
            { s: 0.39, l: 0.345, t: -0.035 },
        ],
        white: { s: 0.4, l: 0.300, t: 0.17 },
        yellow: { s: 0.4, l: 0.3, t: 0.158 },
    },

    {
        base: { x: 635, y: 370 },
        highlight: [
            { s: 0.4, l: 0.295, t: 0.16 },
        ],
        white: { s: 0.4, l: 0.295, t: 0.16 },
        yellow: { s: 0.4, l: 0.295, t: 0.16 },

    },
    {
        base: { x: 635, y: 370 },
        highlight: [
            { s: 0.39, l: 0.305, t: -0.05 },
            { s: 0.39, l: 0.305, t: 0.2 },
        ]
        ,
        white: { s: 0.4, l: 0.295, t: 0.16 },
        yellow: { s: 0.4, l: 0.295, t: 0.16 },

    },
    {
        base: { x: 635, y: 370 },
        highlight: [
            { s: 0.39, l: 0.30, t: 0.17 },
        ],
        white: { s: 0.4, l: 0.295, t: 0.16 },
        yellow: { s: 0.4, l: 0.295, t: 0.16 },

    },
    {
        base: { x: 635, y: 370 },
        highlight: [
            { s: 0.39, l: 0.30, t: 0.06 },
            { s: 0.39, l: 0.37, t: 0.23 },
        ],
        white: { s: 0.4, l: 0.295, t: 0.16 },
        yellow: { s: 0.4, l: 0.295, t: 0.16 },

    },
    {
        base: { x: 645, y: 370 },
        highlight: [
            { s: 0.39, l: 0.175, t: 0.16 },
            { s: 0.39, l: 0.37, t: 0.17 },
        ],
        white: { s: 0.4, l: 0.303, t: 0.16 },
        yellow: { s: 0.4, l: 0.303, t: 0.16 },

    },



]

var lineLengthList =
    [87, 75, 87, 50, 70, 65,
        65, 65, 85, 75];

var HeavyLengthList = [
]


const firstPosList = [
    [
        { x: 633, y: 153 },

    ],
    [
        { x: 520, y: 312 },
        { x: 486, y: 525, letter_start: true }

    ],
    [
        { x: 520, y: 303 },
        { x: 559, y: 383, letter_start: true },
    ],
    [
        { x: 530, y: 153 },
        { x: 515, y: 417, letter_start: true },
        { x: 701, y: 260, letter_start: true },
        { x: 700, y: 262, letter_start: true },
    ],
    [
        { x: 548, y: 166 },
        { x: 532, y: 367 },
        { x: 548, y: 219, letter_start: true },
    ],
    [
        { x: 684, y: 175 },
    ],

    [
        { x: 477, y: 212 },
        { x: 734, y: 196, letter_start: true },
    ],
    [
        { x: 640, y: 207 },
    ],
    [
        { x: 721, y: 310 },
        { x: 721, y: 265, letter_start: true, },
    ],
    [
        { x: 474, y: 165 },
        { x: 736, y: 214, letter_start: true },
    ],

]

const firstPos = { x: 380, y: 255 }

const movePath = [
    [
        [
            { x: 635, y: 216 },
            { x: 635, y: 573 },
        ],
    ],
    [
        [

            { x: 529, y: 283 },
            { x: 541, y: 257 },
            { x: 554, y: 240 },
            { x: 570, y: 226 },
            { x: 590, y: 216 },
            { x: 610, y: 211 },
            { x: 631, y: 208 },
            { x: 654, y: 211 },
            { x: 672, y: 221 },
            { x: 688, y: 239 },
            { x: 698, y: 256 },
            { x: 703, y: 280 },
            { x: 708, y: 305 },
            { x: 701, y: 328 },
            { x: 690, y: 348 },
            { x: 681, y: 367 },
            { x: 667, y: 389 },
            { x: 654, y: 406 },
            { x: 639, y: 420 },
            { x: 629, y: 435 },
            { x: 611, y: 455 },
            { x: 591, y: 475 },
            { x: 572, y: 495 },
            { x: 498, y: 569 },
        ],

        [
            { x: 562, y: 527 },
            { x: 754, y: 529 },
        ],
    ],
    [
        [

            { x: 552, y: 244 },
            { x: 570, y: 230 },
            { x: 592, y: 216 },
            { x: 618, y: 210 },
            { x: 639, y: 209 },
            { x: 658, y: 208 },
            { x: 682, y: 214 },
            { x: 703, y: 230 },
            { x: 714, y: 247 },
            { x: 718, y: 269 },
            { x: 718, y: 291 },
            { x: 708, y: 313 },
            { x: 691, y: 331 },
            { x: 671, y: 339 },
            { x: 651, y: 345 },
            { x: 619, y: 347 },
            { x: 577, y: 348 },
        ],

        [

            { x: 628, y: 365 },
            { x: 654, y: 365 },
            { x: 680, y: 373 },
            { x: 699, y: 383 },
            { x: 712, y: 398 },
            { x: 718, y: 416 },
            { x: 721, y: 437 },
            { x: 721, y: 462 },
            { x: 716, y: 481 },
            { x: 701, y: 498 },
            { x: 677, y: 515 },
            { x: 645, y: 524 },
            { x: 613, y: 525 },
            { x: 589, y: 518 },
            { x: 564, y: 507 },
            { x: 510, y: 475 },
        ],
    ],
    [
        [

            { x: 533, y: 210 },
            { x: 529, y: 454 },
        ],

        [


            { x: 555, y: 418 },
            { x: 784, y: 416 },
        ],
        [

            { x: 701, y: 310 },
            { x: 701, y: 572 },
        ]
    ],
    [
        [

            { x: 548, y: 218 },
            { x: 548, y: 391 },
        ],

        [



            { x: 558, y: 348 },
            { x: 592, y: 325 },
            { x: 623, y: 318 },
            { x: 659, y: 320 },
            { x: 684, y: 335 },
            { x: 708, y: 359 },
            { x: 726, y: 387 },
            { x: 736, y: 416 },
            { x: 736, y: 451 },
            { x: 723, y: 484 },
            { x: 698, y: 514 },
            { x: 664, y: 532 },
            { x: 630, y: 535 },
            { x: 591, y: 529 },
            { x: 563, y: 514 },
            { x: 512, y: 467 },
        ],
        [


            { x: 583, y: 219 },
            { x: 770, y: 219 },
        ]
    ],
    [
        [

            { x: 642, y: 209 },
            { x: 612, y: 241 },
            { x: 589, y: 277 },
            { x: 580, y: 297 },
            { x: 567, y: 332 },
            { x: 554, y: 376 },
            { x: 542, y: 415 },
            { x: 542, y: 443 },
            { x: 552, y: 482 },
            { x: 571, y: 510 },
            { x: 595, y: 526 },
            { x: 630, y: 539 },
            { x: 666, y: 534 },
            { x: 697, y: 514 },
            { x: 714, y: 490 },
            { x: 724, y: 462 },
            { x: 726, y: 430 },
            { x: 713, y: 396 },
            { x: 691, y: 370 },
            { x: 663, y: 353 },
            { x: 628, y: 347 },
            { x: 587, y: 355 },
            { x: 556, y: 361 },
        ],
    ],

    [
        [


            { x: 546, y: 212 },
            { x: 774, y: 212 },
        ],
        [

            { x: 708, y: 249 },
            { x: 554, y: 565 },
        ]
    ],

    [
        [

            { x: 635, y: 207 },
            { x: 601, y: 212 },
            { x: 585, y: 226 },
            { x: 567, y: 248 },
            { x: 559, y: 273 },
            { x: 556, y: 294 },
            { x: 559, y: 312 },
            { x: 567, y: 329 },
            { x: 582, y: 344 },
            { x: 601, y: 356 },
            { x: 623, y: 364 },
            { x: 652, y: 374 },
            { x: 676, y: 386 },
            { x: 692, y: 400 },
            { x: 710, y: 426 },
            { x: 713, y: 453 },
            { x: 710, y: 479 },
            { x: 700, y: 502 },
            { x: 681, y: 521 },
            { x: 655, y: 530 },
            { x: 623, y: 533 },
            { x: 595, y: 529 },
            { x: 577, y: 511 },
            { x: 561, y: 487 },
            { x: 557, y: 459 },
            { x: 562, y: 429 },
            { x: 569, y: 405 },
            { x: 585, y: 393 },
            { x: 601, y: 382 },
            { x: 624, y: 371 },
            { x: 656, y: 361 },
            { x: 677, y: 350 },
            { x: 697, y: 336 },
            { x: 708, y: 313 },
            { x: 712, y: 297 },
            { x: 712, y: 271 },
            { x: 703, y: 246 },
            { x: 689, y: 229 },
            { x: 670, y: 215 },
            { x: 631, y: 205, },
        ]
    ],
    [
        [
            { x: 720, y: 266 },
            { x: 713, y: 250 },
            { x: 706, y: 238 },
            { x: 695, y: 226 },
            { x: 681, y: 216 },
            { x: 664, y: 209 },
            { x: 646, y: 204 },
            { x: 628, y: 203 },
            { x: 609, y: 207 },
            { x: 592, y: 214 },
            { x: 579, y: 221 },
            { x: 568, y: 229 },
            { x: 556, y: 246 },
            { x: 547, y: 264 },
            { x: 545, y: 277 },
            { x: 545, y: 297 },
            { x: 547, y: 312 },
            { x: 551, y: 324 },
            { x: 558, y: 337 },
            { x: 566, y: 349 },
            { x: 575, y: 359 },
            { x: 587, y: 366 },
            { x: 596, y: 372 },
            { x: 607, y: 375 },
            { x: 689, y: 375 },
        ],
        [
            { x: 721, y: 314, w: 90 },
            { x: 721, y: 573 },
        ]
    ],
    [
        [

            { x: 474, y: 218 },
            { x: 469, y: 578 },
        ],
        [

            { x: 711, y: 214 },
            { x: 691, y: 220 },
            { x: 680, y: 229 },
            { x: 662, y: 244 },
            { x: 651, y: 261 },
            { x: 643, y: 281 },
            { x: 636, y: 298 },
            { x: 630, y: 320 },
            { x: 629, y: 339 },
            { x: 628, y: 359 },
            { x: 629, y: 379 },
            { x: 630, y: 399 },
            { x: 633, y: 425 },
            { x: 640, y: 448 },
            { x: 646, y: 464 },
            { x: 655, y: 482 },
            { x: 663, y: 494 },
            { x: 674, y: 506 },
            { x: 689, y: 515 },
            { x: 704, y: 524 },
            { x: 724, y: 525 },
            { x: 744, y: 524 },
            { x: 759, y: 518 },
            { x: 772, y: 510 },
            { x: 785, y: 497 },
            { x: 794, y: 482 },
            { x: 804, y: 468 },
            { x: 813, y: 445 },
            { x: 816, y: 423 },
            { x: 821, y: 403 },
            { x: 819, y: 379 },
            { x: 820, y: 354 },
            { x: 819, y: 330 },
            { x: 813, y: 305 },
            { x: 809, y: 282 },
            { x: 797, y: 263 },
            { x: 786, y: 244 },
            { x: 769, y: 225 },
            { x: 709, y: 208 },
        ]
    ],

]

const subObjectList = [
    [7, 650, 200, 30, 100],
    [9, 740, 213, 40, 100]
]

const moveObjList = []

const brushColorList = [
    0x8436ff,
    0xdd35ef,
    0xe84f4f
]

var repeatStep = 0;

//state variants
let stepCount = 0;

// drawing variants

let isFirst = true;
var curves = [];
var curve = null;


var subCurves = [];
var subCurve = null;

// lemming varients
var graphics
var subGraphics

var subObject
var completedStepNum = 0;
var circleObj

// var yOutLine, wOutLine

var highlightList = []
var highCurrentNum = 0;

var currentImgNumOriginal = 0;
var currentLingLength = 40

let posList = []
var path
var isSubExist = false;
let prePath

export default function Scene({ nextFunc, _geo, currentLetterNum, startTransition
}) {

    const letterNum = currentLetterNum;


    const preName = prePathUrl() + 'images/SB_03_NT_Number-Interactive/' +
        (letterNum + 1) + '/SB_03_NT_' + (letterNum != 9 ? 'O' : '') + (letterNum + 1) + '_'

    prePath = 'SB_03_NT_Number-Interactive/' +
        (letterNum + 1) + '/SB_03_NT_' + (letterNum != 9 ? 'O' : '') + (letterNum + 1) + '_'

    const parentObject = useRef()
    const drawingPanel = useRef();
    const showingImg = useRef();
    const animationRef = useRef();
    const playerRef = useRef();
    const markParentRef = useRef();

    const subObjectsRef = useRef();
    const whiteHighRef = useRef()
    const yellowHighRef = useRef()
    const highlightRefList =
        Array.from({ length: letterPosList[letterNum].highlight.length }, ref => useRef())

    const markRefList = [useRef(), useRef(), useRef()]
    const reviewImgList = [useRef(), useRef(), useRef()]
    const markBaseList = [useRef(), useRef(), useRef()]
    const showingOriginImgList = [useRef(), useRef(), useRef()]

    const [rendering, setRendering] = useState(0)

    const drawingGaameconfig = {
        type: Phaser.AUTO,
        width: 1280,
        height: 720,
        parent: 'DrawingDiv',
        mipmapFilter: 'LINEAR_MIPMAP_LINEAR',
        transparent: true,
        physics: {
            default: 'matter',
            matter: {
                gravity: {
                    y: 0.8
                },
                enableSleep: true,
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update

        }
    };

    const highlightGameConfig = {
        type: Phaser.AUTO,
        width: 1280,
        height: 720,
        transparent: true,
        parent: 'highlightDiv',
        scene: {
            preload: highlight_preload,
            create: highlight_create,
        }
    };

    let currentPath = movePath[letterNum][stepCount]

    useEffect(() => {

        drawingPanel.current.className = 'hideObject'
        markParentRef.current.className = 'hideObject'

        subObjectsRef.current.className = 'hideObject'

        new Phaser.Game(highlightGameConfig)

        setTimeout(() => {
            new Phaser.Game(drawingGaameconfig);
        }, 500);

        setTimeout(() => {
            playerRef.current.play();
        }, 1000);

        parentObject.current.className = 'aniObject'
        currentLingLength = lineLengthList[letterNum]

        // reviewFunc()

        // showingDrawingPanel()

        return () => {
            currentImgNumOriginal = 0;
            repeatStep = 0;
            stepCount = 0;
            completedStepNum = 0;
            highCurrentNum = 0;
            currentImgNumOriginal = 0;

            isFirst = true;

            curve = null;
            curves = [];

            subCurves = [];
            subCurve = null;

            highlightList = []
        }

    }, [])


    const showingDrawingPanel = () => {
        startTransition(2)
        setTimeout(() => {
            animationRef.current.className = 'hideObject'
            drawingPanel.current.className = 'showObject'
            markParentRef.current.className = 'showObject'
        }, 300);
        subObjectsRef.current.className = 'appear'

    }

    function reviewFunc() {
        if (letterNum < 12) {
            let param = 0
            setTimeout(() => {
                markBaseList.map((markBase, value) => {
                    if (markBase.current != null)
                        setTimeout(() => {
                            markBase.current.style.transition = '1s'
                            markBase.current.style.transform = 'translate(' +
                                (_geo.width * (-0.115 - 0.225 * (2 - value) + param) - _geo.left) + 'px,' +
                                (_geo.height * (0.35) + _geo.top)
                                + 'px) rotateZ(-360deg) scale(2)'

                            // markBase.current.style.right = _geo.width * (0.14 + 0.3 * (2 - value)) + _geo.left + 'px'
                            // markBase.current.style.top = 0.4 * _geo.height + _geo.top + 'px'

                            setTimeout(() => {
                                markBase.current.className = 'disapear'
                            }, 600);
                        }, 1000 * value);
                })


                setTimeout(() => {
                    reviewImgList.map((value, index) => {
                        if (value.current != null)
                            setTimeout(() => {
                                // showingOriginImgList[index].current.setClass('disappear')
                                value.current.style.transition = '1.2s'
                                setTimeout(() => {
                                    value.current.style.transform = 'scale(1.15)'
                                    setTimeout(() => {
                                        value.current.style.transform = 'scale(1)'
                                    }, 4000);
                                }, 2000);
                            }, 7000 * index + 1000);
                    })
                }, 3000);

                let nextTime = 28000;
                setTimeout(() => {
                    parentObject.current.style.transition = '0.5s'
                    parentObject.current.className = 'disappear'
                    setTimeout(() => {
                        nextFunc()
                    }, 500);

                }, nextTime);

                reviewImgList.map((value, index) => {
                    if (value.current != null)
                        setTimeout(() => {
                            value.current.className = 'appear'
                        }, 1000 * index + 800);
                })
            }, 1000);
        }
        else {
            setTimeout(() => {
                nextFunc()
            }, 500);
        }

        drawingPanel.current.className = 'disapear'
    }

    function preload() {
        // this.load.image('letterBase', preName + 'Grey.svg');  //not svg , png

        letterPosList[letterNum].highlight.map((item, index) => {
            this.load.image('letterHighlight' + (index + 1), preName + 'Arrow-' + (index + 1) + '.svg');
        })
    }


    function create() {
        graphics = this.add.graphics();
        subGraphics = this.add.graphics();

        letterPosList[letterNum].highlight.map((item, index) => {
            highlightList[index] = this.add.image(item.x, item.y, 'letterHighlight' + (index + 1))
        })

        highlightList.map((highlight, index) => {
            if (index > 0)
                highlight.visible = false
        })

        curve = new Phaser.Curves.Spline([firstPosList[letterNum][0].x, firstPosList[letterNum][0].y]);
        subCurve = new Phaser.Curves.Spline([firstPosList[letterNum][0].x, firstPosList[letterNum][0].y]);


        circleObj = this.add.circle(movePath[letterNum][0][0].x, movePath[letterNum][0][0].y, 100, 0xffffdd, 0.0)

        circleObj.setInteractive({ cursor: 'default' })

        subObjectList.map((obj, index) => {
            if (obj[0] == letterNum) {
                subObject = this.add.rectangle(
                    obj[1], obj[2],
                    obj[3], obj[4],
                    0x999999)
                isSubExist = true
            }
        })


        let isMoving = false;

        circleObj.on('pointerdown', function (pointer) {
            if (!isMoving) {
                circleObj.on('pointermove', moveFunc, this);
                // if (!isFirst) {
                //     curve = new Phaser.Curves.Spline([pointer.x, pointer.y]);
                //     isFirst = !isFirst
                // }
                curves.push(curve);
                subCurves.push(subCurve);

                isMoving = true;
            }

            if (firstPosList[letterNum][stepCount].p != null && firstPosList[letterNum][stepCount].p == true) {



                isMoving = false;

                completedStepNum = 0;
                curve.addPoint(firstPosList[letterNum][stepCount].x, firstPosList[letterNum][stepCount].y);
                currentPath.map(path => {
                    curve.addPoint(path.x, path.y);
                })
                graphics.lineStyle(100, brushColorList[repeatStep]);

                if (stepCount == movePath[letterNum].length - 1) {

                    yellowHighRef.current.setClass('appear')
                    graphics.lineStyle(100, brushColorList[repeatStep]);

                    highlightRefList[highlightRefList.length - 1].current.setClass('disappear')
                    let showingTime = 2000

                    if (letterNum < 12) {
                        showingImg.current.className = 'appear'

                        setTimeout(() => {
                            showingImg.current.style.transform = 'scale(1.1)'
                            setTimeout(() => {
                                showingImg.current.className = 'disapear'
                                showingImg.current.style.transform = 'scale(1)'

                            }, 3000);
                        }, 2000);
                        showingTime = 6000
                    }

                    // alert('finished')
                    circleObj.y = 10000;
                    moveObjList[repeatStep].y = 10000


                    curves.forEach(function (c) {
                        c.draw(graphics, 100);
                    });

                    markRefList[repeatStep].current.setUrl('SB_04_Progress bar/SB_04_progress bar_03.svg')

                    setTimeout(() => {
                        if (repeatStep < 2) {

                            currentImgNumOriginal++
                            setRendering(currentImgNumOriginal);

                            yellowHighRef.current.setClass('disappear')

                            highlightRefList.map((highlight, index) => {
                                if (index > 0)
                                    highlight.current.setClass('hideObject')
                                else
                                    highlight.visible.setClass('appear')
                            })

                            // fomart values....

                            highCurrentNum = 0
                            currentLingLength = lineLengthList[letterNum]
                            stepCount = 0;
                            repeatStep++;
                            isFirst = true;
                            completedStepNum = 0;
                            let optimizedPosition = movePath[letterNum][0][0]
                            //.............

                            currentPath = movePath[letterNum][stepCount]

                            circleObj.x = optimizedPosition.x;
                            circleObj.y = optimizedPosition.y;

                            moveObjList[repeatStep].visible = true

                            moveObjList[repeatStep].x = optimizedPosition.x;
                            moveObjList[repeatStep].y = optimizedPosition.y


                            graphics.clear();
                            curve = new Phaser.Curves.Spline([firstPosList[letterNum][0].x, firstPosList[letterNum][0].y]);
                            curves = []
                        }
                        else {
                            reviewFunc();
                        }

                    }, showingTime);
                }
                else {

                    curves.forEach(function (c) {
                        c.draw(graphics, 100);
                    });


                    circleObj.off('pointermove', moveFunc, this);

                    stepCount++

                    currentPath = movePath[letterNum][stepCount]

                    circleObj.x = movePath[letterNum][stepCount][0].x;
                    circleObj.y = movePath[letterNum][stepCount][0].y;

                    moveObjList[repeatStep].x = movePath[letterNum][stepCount][0].x;
                    moveObjList[repeatStep].y = movePath[letterNum][stepCount][0].y;

                    setTimeout(() => {

                        if (firstPosList[letterNum][stepCount].letter_start != null
                            && firstPosList[letterNum][stepCount].letter_start) {
                            highlightRefList[highCurrentNum].current.setClass('disappear')

                            highCurrentNum++

                            highlightRefList[highCurrentNum].current.setClass('appear')
                        }

                        curve = new Phaser.Curves.Spline([firstPosList[letterNum][stepCount].x, firstPosList[letterNum][stepCount].y]);
                        curves = []

                        HeavyLengthList.map(value => {
                            if (value[0] == letterNum && value[1] == stepCount) {
                                currentLingLength = 90
                            }
                        })
                        curve.addPoint(circleObj.x, circleObj.y);
                    }, 200);
                }
            }
        }, this);


        circleObj.on('pointermove', moveFunc, this);

        function moveFunc(pointer) {
            if (pointer.isDown && isMoving) {
                let currentPath = movePath[letterNum][stepCount]

                var x = pointer.x;
                var y = pointer.y;

                let minDistance = 1000;
                let currentMinDisIndex = completedStepNum;
                let lastIndex = completedStepNum + 2;
                if (lastIndex > currentPath.length)
                    lastIndex = currentPath.length

                for (let i = completedStepNum; i < lastIndex; i++) {
                    if (minDistance > Phaser.Math.Distance.Between(x, y, currentPath[i].x, currentPath[i].y)) {
                        minDistance = Phaser.Math.Distance.Between(x, y, currentPath[i].x, currentPath[i].y)
                        currentMinDisIndex = i;
                    }
                }

                let nextIndex;
                if (currentMinDisIndex == 0)
                    nextIndex = 1;
                else if (currentMinDisIndex == currentPath.length - 1)
                    nextIndex = currentMinDisIndex - 1;

                else {
                    if (Phaser.Math.Distance.Between(x, y, currentPath[currentMinDisIndex + 1].x, currentPath[currentMinDisIndex + 1].y) >
                        Phaser.Math.Distance.Between(x, y, currentPath[currentMinDisIndex - 1].x, currentPath[currentMinDisIndex - 1].y))
                        nextIndex = currentMinDisIndex - 1;
                    else
                        nextIndex = currentMinDisIndex + 1;
                }

                if (currentMinDisIndex >= completedStepNum && currentMinDisIndex - completedStepNum <= 1) {

                    let fromIndex = currentPath[currentMinDisIndex].x > currentPath[nextIndex].x ? nextIndex : currentMinDisIndex
                    let toIndex = currentPath[currentMinDisIndex].x > currentPath[nextIndex].x ? currentMinDisIndex : nextIndex

                    let x1 = currentPath[fromIndex].x
                    let x2 = currentPath[toIndex].x
                    let y1 = currentPath[fromIndex].y
                    let y2 = currentPath[toIndex].y

                    let optimizedPosition = currentPath[currentMinDisIndex]
                    minDistance = 1000

                    let isDrawable1 = false;
                    let isDrawable2 = false;


                    if (x1 != x2)
                        for (let i = 0; i < Math.abs(currentPath[fromIndex].x
                            - currentPath[toIndex].x) / 0.1; i += 0.1) {
                            let currentXPos = x1 + i;
                            let currentYPos = y1 + (y2 - y1) / (x2 - x1) * (currentXPos - x1)

                            if (minDistance > Phaser.Math.Distance.Between(x, y, currentXPos, currentYPos)) {
                                minDistance = Phaser.Math.Distance.Between(x, y, currentXPos, currentYPos)
                                optimizedPosition = { x: currentXPos, y: currentYPos }
                            }
                        }

                    else {
                        let addY = y2 > y1 ? y1 : y2;
                        for (let i = 0; i < Math.abs(y1 - y2) / 0.1; i += 0.1) {
                            let currentXPos = x1;
                            let currentYPos = addY + i

                            if (minDistance > Phaser.Math.Distance.Between(x, y, currentXPos, currentYPos)) {
                                minDistance = Phaser.Math.Distance.Between(x, y, currentXPos, currentYPos)
                                optimizedPosition = { x: currentXPos, y: currentYPos }
                            }
                        }

                    }

                    if (x1 > x2 && optimizedPosition.x >= x2
                        && optimizedPosition.x <= x1)
                        isDrawable1 = true;

                    if (x1 <= x2 && optimizedPosition.x <= x2 && optimizedPosition.x >= x1)
                        isDrawable1 = true;

                    if (y1 > y2 && optimizedPosition.y >= y2
                        && optimizedPosition.y <= y1)
                        isDrawable2 = true;

                    if (y1 <= y2 && optimizedPosition.y <= y2 && optimizedPosition.y >= y1)
                        isDrawable2 = true;

                    if (isDrawable1 && isDrawable2) {
                        if (currentMinDisIndex >= completedStepNum) {

                            if (minDistance < 30) {

                                if (completedStepNum != currentMinDisIndex && currentMinDisIndex > 0) {
                                    subGraphics.lineStyle(currentLingLength, brushColorList[repeatStep]);

                                    subCurve.addPoint(
                                        currentPath[currentMinDisIndex - 1].x,
                                        currentPath[currentMinDisIndex - 1].y
                                    )

                                    subCurves.forEach(function (c) {
                                        c.draw(subGraphics, currentLingLength);
                                    });
                                }


                                completedStepNum = currentMinDisIndex
                                x = optimizedPosition.x
                                y = optimizedPosition.y

                                let compDistance = Phaser.Math.Distance.Between(x, y, currentPath[currentPath.length - 1].x,
                                    currentPath[currentPath.length - 1].y)

                                if (compDistance < 40 && currentMinDisIndex == currentPath.length - 1) {


                                    isMoving = false;
                                    x = currentPath[currentPath.length - 1].x
                                    y = currentPath[currentPath.length - 1].y

                                    completedStepNum = 0;
                                    // for (let i = 0; i < currentMinDisIndex; i++)
                                    //     curve.addPoint(currentPath[i])
                                    curve.addPoint(x, y);

                                    if (stepCount == movePath[letterNum].length - 1) {
                                        if (isSubExist)
                                            subObject.visible = false
                                        yellowHighRef.current.setClass('appear')
                                        graphics.lineStyle(100, brushColorList[repeatStep]);

                                        highlightRefList[highlightRefList.length - 1].current.setClass('disappear')


                                        let showingTime = 2000

                                        if (letterNum < 12) {
                                            showingImg.current.className = 'appear'

                                            setTimeout(() => {
                                                showingImg.current.style.transform = 'scale(1.1)'
                                                setTimeout(() => {
                                                    showingImg.current.className = 'disapear'
                                                    showingImg.current.style.transform = 'scale(1)'

                                                }, 3000);
                                            }, 2000);
                                            showingTime = 6000
                                        }


                                        // alert('finished')
                                        circleObj.y = 10000;
                                        moveObjList[repeatStep].y = 10000


                                        curves.forEach(function (c) {
                                            c.draw(graphics, 100);
                                        });

                                        subCurves.forEach(function (c) {
                                            c.draw(subGraphics, 100);
                                        });


                                        if (isSubExist && firstPosList[letterNum][stepCount].isSub)
                                            subObject.visible = false;

                                        markRefList[repeatStep].current.setUrl('SB_04_Progress bar/SB_04_progress bar_03.svg')

                                        setTimeout(() => {
                                            if (repeatStep < 2) {

                                                currentImgNumOriginal++
                                                setRendering(currentImgNumOriginal);

                                                yellowHighRef.current.setClass('disappear')

                                                highlightRefList.map((highlight, index) => {
                                                    if (index > 0)
                                                        highlight.current.setClass('disappear')
                                                    else
                                                        highlight.current.setClass('appear')
                                                })

                                                // fomart values....

                                                highCurrentNum = 0
                                                currentLingLength = lineLengthList[letterNum]
                                                stepCount = 0;

                                                currentPath = movePath[letterNum][stepCount]

                                                repeatStep++;



                                                isFirst = true;
                                                completedStepNum = 0;
                                                optimizedPosition = movePath[letterNum][0][0]
                                                //.............

                                                circleObj.x = optimizedPosition.x;
                                                circleObj.y = optimizedPosition.y;

                                                moveObjList[repeatStep].visible = true

                                                moveObjList[repeatStep].x = optimizedPosition.x;
                                                moveObjList[repeatStep].y = optimizedPosition.y

                                                if (isSubExist)
                                                    subObject.visible = true

                                                graphics.clear();
                                                curve = new Phaser.Curves.Spline([firstPosList[letterNum][0].x, firstPosList[letterNum][0].y]);
                                                curves = []


                                                subCurve = new Phaser.Curves.Spline([firstPosList[letterNum][0].x, firstPosList[letterNum][0].y]);
                                                subCurves = []
                                            }
                                            else {
                                                reviewFunc();
                                            }

                                        }, showingTime);
                                    }
                                    else {

                                        curves.forEach(function (c) {
                                            c.draw(graphics, 100);
                                        });

                                        subCurves.forEach(function (c) {
                                            c.draw(subGraphics, 100);
                                        });

                                        circleObj.off('pointermove', moveFunc, this);

                                        stepCount++

                                        currentPath = movePath[letterNum][stepCount]

                                        if (isSubExist && firstPosList[letterNum][stepCount].isSub)
                                            subObject.visible = false;

                                        circleObj.x = movePath[letterNum][stepCount][0].x;
                                        circleObj.y = movePath[letterNum][stepCount][0].y;

                                        moveObjList[repeatStep].x = movePath[letterNum][stepCount][0].x;
                                        moveObjList[repeatStep].y = movePath[letterNum][stepCount][0].y;

                                        setTimeout(() => {

                                            if (firstPosList[letterNum][stepCount].letter_start != null
                                                && firstPosList[letterNum][stepCount].letter_start) {

                                                highlightRefList[highCurrentNum].current.setClass('hideObject')

                                                highCurrentNum++

                                                highlightRefList[highCurrentNum].current.setClass('appear')
                                            }

                                            curve = new Phaser.Curves.Spline([firstPosList[letterNum][stepCount].x, firstPosList[letterNum][stepCount].y]);
                                            curves = []

                                            subCurve = new Phaser.Curves.Spline([firstPosList[letterNum][stepCount].x, firstPosList[letterNum][stepCount].y]);
                                            subCurves = []

                                            HeavyLengthList.map(value => {
                                                if (value[0] == letterNum && value[1] == stepCount) {
                                                    currentLingLength = 90
                                                }
                                            })

                                            curve.addPoint(circleObj.x, circleObj.y);

                                        }, 200);
                                    }
                                }

                                else {

                                    if (currentPath[currentMinDisIndex].w != null)
                                        currentLingLength = currentPath[currentMinDisIndex].w

                                    graphics.lineStyle(currentLingLength, brushColorList[repeatStep]);
                                    curve.addPoint(x, y);

                                    curves.forEach(function (c) {
                                        c.draw(graphics, 100);
                                    });

                                    circleObj.x = optimizedPosition.x;
                                    circleObj.y = optimizedPosition.y;

                                    moveObjList[repeatStep].x = optimizedPosition.x;
                                    moveObjList[repeatStep].y = optimizedPosition.y

                                }

                            }
                        }


                    }
                }
            }
        }


        // var fs = this.add.circle(firstPos.x, firstPos.y, 3, 0x000000, 0.5)
        path = new Phaser.Curves.Path(firstPos.x, firstPos.y);

        this.input.on('pointerdown1', function (pointer) {

            posList.push({ x: pointer.x, y: pointer.y })

            posList.map(pos => {
                path.lineTo(pos.x, pos.y);
            })

            console.log('{x:' + pointer.x.toFixed(0) + ', y:' + pointer.y.toFixed(0) + '},')
            // graphics.clear()

            posList = []



            graphics.lineStyle(2, 0x000000, 1);
            path.draw(graphics);
            graphics.fillStyle(0x000000, 1);

            path = new Phaser.Curves.Path(pointer.x, pointer.y);

        }, this);
    }


    function update() {

    }

    // highlight game

    function highlight_preload() {

        for (let i = 0; i < 3; i++)
            this.load.image('icon' + (i + 1), prePathUrl() + 'images/SB_03_NT_Icons/' + iconPathList[letterNum][i] + '.svg');

        // this.load.image('wOutLine', preName + 'White-Highlight.svg');
        // this.load.image('yOutLine', preName + 'Yellow-Highlight.svg');
    }

    function highlight_create() {

        for (let i = 0; i < 3; i++) {
            let obj = this.add.sprite(movePath[letterNum][0][0].x, movePath[letterNum][0][0].y, 'icon' + (i + 1));
            obj.setScale(0.75)
            obj.visible = false

            moveObjList[i] = obj
        }

        moveObjList[0].visible = true



    }



    return (
        <div
            className="hideObject"
            ref={parentObject}
        >
            {/* <BaseImage
                    scale={0.05}
                    posInfo={{ r: 0.03 + 0.075, t: 0.05 }}
                    url="SB_04_hand_tool/hand.svg"
                /> */}

            <div
                ref={showingImg}
                className='hideObject'
                style={{
                    position: 'fixed', width: _geo.width * 0.25 + 'px',
                    height: _geo.height * 0.25 + 'px',
                    right: _geo.left + _geo.width * 0.08 + 'px',
                    bottom: _geo.top + _geo.height * 0.03 + 'px',
                    pointerEvents: 'none',
                    transform: 'scale(1)'
                }}>
                <BaseImage
                    scale={showingLayoutList[letterNum][currentImgNumOriginal].s}
                    posInfo={{
                        b: showingLayoutList[letterNum][currentImgNumOriginal].b,
                        r: showingLayoutList[letterNum][currentImgNumOriginal].r
                    }}
                    url={"SB_03_NT_Prop-Interactive/" + showingLayoutList[letterNum][currentImgNumOriginal].wPath + ".svg"}

                />
                <BaseImage
                    style={{
                        transform: 'scale(' + (showingLayoutList[letterNum][currentImgNumOriginal].ts
                            ? showingLayoutList[letterNum][currentImgNumOriginal].ts : 1) * 1.3 + ')'
                    }}
                    posInfo={{ r: 0.0, b: showingLayoutList[letterNum][currentImgNumOriginal].tb ? showingLayoutList[letterNum][currentImgNumOriginal].tb : 0.0 }}

                    url={"SB_03_NT_Text-Interactive/" + showingLayoutList[letterNum][currentImgNumOriginal].tPath + ".svg"}
                />
            </div>
            {
                [0, 1, 2].map(value =>
                    <div
                        ref={reviewImgList[value]}
                        className='hideObject'
                        style={{
                            position: 'fixed', width: _geo.width * 0.2 + 'px',
                            height: _geo.height * 0.18 + 'px',
                            left: _geo.left + _geo.width * (0.1 + 0.3 * value) + 'px',
                            bottom: _geo.top + _geo.height * 0.2 + 'px',
                            pointerEvents: 'none',
                            transform: 'scale(1)',
                        }}>
                        <BaseImage
                            ref={showingOriginImgList[value]}
                            scale={showingLayoutList[letterNum][value].s}
                            posInfo={{
                                b: showingLayoutList[letterNum][value].b + 0.3,
                                r: showingLayoutList[letterNum][value].r
                            }}
                            url={"SB_03_NT_Prop-Interactive/" + showingLayoutList[letterNum][value].wPath + ".svg"}
                        />


                        <BaseImage
                            posInfo={{
                                r: 0.02,
                                b: showingLayoutList[letterNum][value].tb ?
                                    (showingLayoutList[letterNum][value].tb + 0.3) : 0.3
                            }}

                            style={{
                                transform: 'scale(' + (showingLayoutList[letterNum][value].ts
                                    ? showingLayoutList[letterNum][value].ts : 1) * 1.3 + ')'
                            }}
                            url={"SB_03_NT_Text-Interactive/" + showingLayoutList[letterNum][value].tPath + ".svg"}
                        />
                    </div>
                )
            }
            <div ref={markParentRef}>
                {
                    [0, 1, 2].map(value =>
                        <div
                            ref={markBaseList[2 - value]}
                            style={{
                                position: 'fixed',
                                width: _geo.width * 0.06 + 'px',
                                height: _geo.width * 0.06 + 'px',
                                right: _geo.width * (0.03 + 0.075 * value) + 'px',
                                top: 0.05 * _geo.height + 'px',
                                pointerEvents: 'none'
                            }}>
                            <BaseImage
                                ref={markRefList[2 - value]}
                                url="SB_04_Progress bar/SB_04_progress bar_04.svg"
                            />
                        </div>
                    )
                }
            </div>

            <div ref={drawingPanel}>
                <div id='DrawingDiv'
                    style={{
                        position: 'fixed', width: _geo.width,
                        height: _geo.height,
                        left: _geo.left, top: _geo.top,
                        WebkitMaskImage: 'url("' + preName + 'Grey.svg")',
                        WebkitMaskPosition: maskInfoList[letterNum].position,
                        WebkitMaskSize: maskInfoList[letterNum].size,
                        WebkitMaskRepeat: "no-repeat",
                        overflow: 'hidden',
                        background: '#999999'
                    }}
                >
                </div>
                <div
                    ref={subObjectsRef}
                    style={{
                        position: 'fixed',
                        width: _geo.width, height: _geo.height,
                        left: _geo.left, top: _geo.top,
                        pointerEvents: 'none',
                    }}
                >
                    {
                        letterPosList[letterNum].highlight.map((value, index) =>
                            <BaseImage
                                ref={highlightRefList[index]}
                                scale={value.s}
                                posInfo={{
                                    t: value.t,
                                    l: value.l
                                }}
                                className={index > 0 ? 'hideObject' : ''}
                                url={prePath + 'Arrow-' + (index + 1) + '.svg'}
                            />
                        )
                    }
                    <BaseImage
                        ref={whiteHighRef}
                        scale={letterPosList[letterNum].white.s}
                        posInfo={{
                            t: letterPosList[letterNum].white.t,
                            l: letterPosList[letterNum].white.l
                        }}
                        url={prePath + 'White-Highlight.svg'}
                    />


                    <BaseImage
                        ref={yellowHighRef}
                        scale={letterPosList[letterNum].yellow.s}
                        posInfo={{
                            t: letterPosList[letterNum].yellow.t,
                            l: letterPosList[letterNum].yellow.l
                        }}
                        className='hideObject'
                        url={prePath + 'Yellow-Highlight.svg'}
                    />
                </div>



                <div id='highlightDiv'
                    style={{
                        position: 'fixed',
                        width: _geo.width, height: _geo.height,
                        left: _geo.left, top: _geo.top,
                        pointerEvents: 'none',
                    }}
                >
                </div>


                <BaseImage
                    scale={0.22}
                    posInfo={{
                        b: 0.35,
                        l: 0.1
                    }}
                    url={"SB_03_NT_Text-Interactive/" + titleList[letterNum].path + ".svg"}
                />
            </div>

            <div
                ref={animationRef}

            >
                <Player
                    ref={playerRef}
                    onEvent={(e) => {
                        if (e == 'complete')
                            showingDrawingPanel();
                    }}
                    keepLastFrame={true}

                    src={prePathUrl() + 'lottieFiles/main/' + animtionList[letterNum].path + '.json'}
                    style={{
                        position: 'fixed',
                        width: _geo.width * animtionList[letterNum].scale,
                        left: _geo.left + _geo.width * animtionList[letterNum].left,
                        top: _geo.top + _geo.height * animtionList[letterNum].top,
                        pointerEvents: 'none',
                        overflow: 'visible'
                    }}
                >
                    {/* <Controls visible={false} buttons={['play', 'frame', 'debug']} /> */}
                </Player>
            </div>




        </div >
    );
}


import "../stylesheets/styles.css";
import "../stylesheets/button.css";

import { useEffect, useRef } from "react";
import BaseImage from "../components/BaseImage";
import { prePathUrl } from "../components/CommonFunctions";



const transformlist = [
    { x: -40, y: 20, s: 1.8 },
    { x: -40, y: 0, s: 1.8 },
    { x: -50, y: 15, s: 2 },
    { x: -30, y: -20, s: 1.6 },
    { x: 35, y: -30, s: 1.8 },
    { x: 0, y: -50, s: 2 },
    { x: -30, y: -50, s: 2 },
    { x: 0, y: -30, s: 2 },
    { x: 5, y: -60, s: 2.4 },
    { x: -5, y: -50, s: 2 },
]

const scaleImageList = [
    "SB03_BG_02",
    "SB03_BG_03_Sky",
    "SB03_BG_04",
    "SB03_BG_05",
    "SB03_BG_06",
    "SB03_BG_07",
    "SB03_BG_08",
    "SB03_BG_09",
    "SB03_BG_10",
    "SB03_BG_11",
    "SB03_BG_12",
]

const propList = [
    {
        path: 'SB03_Train_Engine_FG', s: 0.25, l: 0.6, t: 0.143,
        style: { transform: 'rotate(-3deg)' }
    },
    { path: 'SB03_Bird_FG', s: 0.3, l: 0.6, t: 0.3 },
    { path: 'SB03_Hot_air_balloon_FG', s: 0.35, l: 0.6, t: 0.2 },
    { path: 'SB03_Boat_FG', s: 0.55, l: 0.4, t: 0.4 },
    { path: 'SB03_Rabbit_FG', s: 0.3, l: 0.15, t: 0.4 },
    { path: 'SB03_Tent_FG', s: 0.6, l: 0.2, t: 0.45 },
    { path: 'SB03_Ball_FG', s: 0.2, l: 0.55, t: 0.68 },
    { path: 'SB03_Apple_Tree_FG', s: 0.8, l: 0.1, t: 0.22 },
    { path: 'SB03_Frog_FG', s: 0.4, l: 0.3, t: 0.53 },
    { path: 'SB03_Watermelon_FG', s: 0.6, l: 0.25, t: 0.45 },
]


export default function Scene({ nextFunc, _baseGeo, currentLetterNum
}) {
    const parentObject = useRef()

    useEffect(() => {

        setTimeout(() => {
            parentObject.current.style.transform = 'translate(0%,0%) scale(1)'
            parentObject.current.style.transition = '4s'
        }, 1500);
        setTimeout(() => {

            parentObject.current.style.transform =
                'translate(' + transformlist[currentLetterNum].x +
                '%,' + transformlist[currentLetterNum].y +
                '%) scale(' + transformlist[currentLetterNum].s + ')'

            setTimeout(() => {
                parentObject.current.style.transition = '0.8s'
                parentObject.current.className = 'hide'
                setTimeout(() => {
                    nextFunc()
                }, 800);
            }, 5000);
        }, 2000);

        return () => {
        }

    }, [])



    return (
        <div
            className="aniObject"
            ref={parentObject}
            style={{
                position: "fixed", width: _baseGeo.width + "px"
                , height: _baseGeo.height + "px",
                left: _baseGeo.left + 'px',
                top: _baseGeo.top + 'px',
            }}
        >
            <div
                style={{
                    position: "absolute", width: '100%'
                    , height: '100%',
                    left: '0%',
                    top: '0%'
                }} >
                <img
                    width={'100%'}
                    style={{
                        position: 'absolute',
                        left: '0%',
                        top: '0%',

                    }}
                    src={prePathUrl() + "images/SB_03_NT_BG/" + scaleImageList[currentLetterNum] + ".svg"}
                />
            </div>
            <BaseImage
                url={'SB_03_NT_FG/' + propList[currentLetterNum].path + '.svg'}
                scale={propList[currentLetterNum].s}
                style={propList[currentLetterNum].style ? propList[currentLetterNum].style : null}
                posInfo={{ l: propList[currentLetterNum].l, t: propList[currentLetterNum].t }}
            />
        </div>
    );
}


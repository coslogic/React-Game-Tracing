import React from 'react';
import "../stylesheets/styles.css";
import { prePathUrl } from '../components/CommonFunctions';


export default function Scene1({ nextFunc, _geo }) {

    return (
        <div className='aniObject'>
            {/* <div
                style={{
                    position: "fixed", width: _geo.width * 0.35,
                    left: _geo.width * 0.05 + _geo.left
                    , bottom: (_geo.height * 0.1 + _geo.top) + "px",
                    pointerEvents: 'none',
                    userSelect: 'none'
                }}>
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/SB_04_Intro_BG/SB_04_intro_BG_02.svg"}
                />
            </div>

            <div
                style={{
                    position: "fixed", width: _geo.width * 0.2,
                    left: _geo.width * 0.65 + _geo.left
                    , bottom: (_geo.height * 0.6 + _geo.top) + "px",
                    pointerEvents: 'none',
                    userSelect: 'none'
                }}>
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/SB_04_Intro_BG/SB_04_intro_BG_04.svg"}
                />
            </div> */}
        </div>
    );
}

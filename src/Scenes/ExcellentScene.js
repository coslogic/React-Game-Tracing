import React, { useEffect } from 'react';
import "../stylesheets/styles.css";
import { prePathUrl } from "../components/CommonFunctions"
import BaseImage from '../components/BaseImage';

let timerList = []

export default function Scene18({ nextFunc, _geo, audioList, _baseGeo }) {

    useEffect(() => {


        return () => {
        }
    }, [])


    return (
        <div className='aniObjectDelay'>
            <div
                style={{
                    position: "fixed", width: _baseGeo.width + "px",
                    height: _baseGeo.height + "px"
                    , left: _baseGeo.left + "px",
                    top: _baseGeo.bottom + "px",
                }}>
                <BaseImage
                    url={"SB05_Shaabash_BG/SB_05_shaabash_02.svg"}
                />
            </div>

            <div
                className='excellentText'
                style={{
                    position: "fixed", width: _baseGeo.width + "px",
                    height: _baseGeo.height + "px"
                    , left: _baseGeo.left + "px",
                    top: _baseGeo.bottom + "px",
                }}>
                <BaseImage

                    url={"SB05_Shaabash_BG/SB_05_shaabash_03.svg"}
                />
                <BaseImage
                    scale={0.6}
                    posInfo={{ l: 0.2, t: 0.2 }}
                    url={"SB05_Shaabash_BG/SB_05_shaabash_04.svg"}
                />
                <BaseImage
                    scale={0.3}
                    posInfo={{ l: 0.35, t: 0.4 }}
                    url={"SB05_Shaabash_BG/SB_05_shaabash_05.svg"}
                />
            </div>

            <div className='aniObjectDelay'>
                <div className='commonButton'
                    style={{
                        position: "fixed", width: _geo.width * 0.08 + "px",
                        left: _geo.width * 0.47 + _geo.left + "px",
                        height: _geo.width * 0.1 + "px",
                        bottom: "1%",
                        cursor: 'pointer',
                    }}
                    onClick={() => {
                        setTimeout(() => {
                            nextFunc();
                        }, 200);
                    }}
                >
                    <img
                        width={"100%"}
                        draggable={false}
                        src={prePathUrl() + "images/Buttons/Replay_Blue.svg"}
                    />
                </div>
            </div>

        </div >
    );
}

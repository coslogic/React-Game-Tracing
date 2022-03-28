
import React, { useState, useEffect, useRef } from 'react';

import TitleScene from "../Scenes/TitleScene";
import IntroScene from "../Scenes/IntroScene";
import ScaleScene from "../Scenes/ScaleScene";
import DrawingScene from "../Scenes/DrawingScene";
import ExcellentScene from "../Scenes/ExcellentScene";

import "../stylesheets/styles.css";
import "../stylesheets/button.css";

import { prePathUrl } from "./CommonFunctions";

const Switch = props => {
  const { test, children } = props
  // filter out only children with a matching prop
  return children.find(child => {
    return child.props.value === test
  })
}

var __geo;
var backgroundImageIndex = 0;
var currentLetterNum = 0;

var backgroundImageList = [
  "SB_04_intro_BG_01", //1
  "SB03_Leter_Tracing_BG", //1
  "SB03_Leter_Tracing_BG", //1
  "Excellent"
];


const App = ({ geo, _setBackground, __controlBacksound, _startTransition,
  _hideIntroTitle, _showIntroTitle, baseGeo, _isBackloaded, _audioList
}, ref) => {

  const [index, setIndex] = useState(0);
  const [_isBackSoundPlaying, _setBackgroundPlaying] = useState(true);
  const musicRef = useRef();
  __geo = geo;

  useEffect(
    () => {
      return () => {
      }
    }, []
  )

  function controlBacksound() {
    __controlBacksound();
    if (_isBackSoundPlaying) {
      _setBackgroundPlaying(false);
    }
    else {
      _setBackgroundPlaying(true);
    }
  }

  const transitionSceneList = [3, 8, 15]
  function changeBackgroundImage(judgeNum) {
    if (judgeNum == 1)
      _hideIntroTitle();
    let sendNum = -1;
    if (judgeNum == 0)
      sendNum = 0;
    if (transitionSceneList.includes(judgeNum))
      sendNum = 1;
    if (judgeNum != backgroundImageIndex) {
      backgroundImageIndex = judgeNum;
      _setBackground(backgroundImageList[judgeNum], sendNum);
    }
  }

  function setFomart(sceneNum) {
    if (sceneNum == 1 && musicRef.current.className != 'commonButton') {
      musicRef.current.className = 'introText'
      setTimeout(() => {
        musicRef.current.className = 'commonButton'
      }, 1000);

    }
    setIndex(sceneNum);
    changeBackgroundImage(sceneNum);
  }

  React.useImperativeHandle(ref, () => ({
    nextFunc: () => {
      setFomart(1);
      _hideIntroTitle()

    },
    showMusicBtn: () => {

    }
  }))

  function nextFunc() {
    setFomart(index + 1);
  }

  function goHome() {
    currentLetterNum = 0;
    backgroundImageIndex = 0;
    musicRef.current.className = 'hideObject'

    _audioList.backAudio.pause();
    _audioList.backAudio.currentTime = 0;

    setIndex(0);
    _showIntroTitle();
    _setBackground(backgroundImageList[0])
  }

  function nextShowLetter() {
    if (currentLetterNum < 12) {
      currentLetterNum++
      setFomart(1);
    }
    else {
      goHome();

    }
  }

  return (
    <div >
      <div className={_isBackloaded ? '' : 'hideObject'}>
        <Switch test={index}>
          <TitleScene nextFunc={nextFunc} _geo={__geo} value={0} />
          <ScaleScene currentLetterNum={currentLetterNum} nextFunc={nextFunc} _baseGeo={baseGeo} audioList={_audioList} _geo={__geo} value={1} />
          <DrawingScene
            startTransition={_startTransition}
            currentLetterNum={currentLetterNum} nextFunc={nextFunc} _baseGeo={baseGeo} audioList={_audioList} _geo={__geo} value={2} />
          <ExcellentScene nextFunc={goHome} _baseGeo={baseGeo} audioList={_audioList} _geo={__geo} value={3} />

        </Switch>
      </div>

      <div
        ref={musicRef}
        className='hideObject'
        style={{
          position: "fixed", width: '5%',
          left: '2%',
          top: "47.5%",
          cursor: 'pointer',
        }}
        onClick={controlBacksound}
      >
        <img

          width={"100%"}
          draggable={false}
          src={prePathUrl() + "images/Buttons/" + (!_isBackSoundPlaying ? "Audio_mute" : "Audio_unmute") + ".svg"}
        />
      </div>
    </div >
  );
}

export default React.forwardRef(App);

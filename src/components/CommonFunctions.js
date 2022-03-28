import "../stylesheets/styles.css";

var intervalList = []
var innerIntervalList = []
var timerList = []
var refList = []

var buildFolderList = [
    'ee02_nt_1_tr',
    'ee02_nt_2_tr',
    'ee02_nt_3_tr',
    'ee02_nt_4_tr',
    'ee02_nt_5_tr',
    'ee02_nt_6_tr',
    'ee02_nt_7_tr',
    'ee02_nt_8_tr',
    'ee02_nt_9_tr',
    'ee02_nt_0_tr',
    'ee02_nt_10_tr'
]
export function initialAudio(audioList) {
    let allkeys = Object.keys(audioList)
    for (let i = 0; i < allkeys.length; i++) {
        audioList[allkeys[i]].play().catch(error => { })
            .catch(error => {
            })
        audioList[allkeys[i]].pause()
    }
}

export function setLoop(audio) {
    audio.addEventListener('ended', () => {
        audio.currentTime = 0;
        audio.play().catch(error => { })
    },
        false)
}

export function hideButtonFunc(object) {
    if (object != null)
        object.className = 'hideItemBtn'
}


export function getMaskStyle(info) {

    let maskStyle = {
        position: "absolute", width: info.scale + "%",
        height: info.scale + "%"
        , left: -(info.scale - 100) / 2 + "%",
        bottom: -(info.scale - 100) / 2 + "%",
        WebkitMaskImage: 'url("' + prePathUrl() + 'images/' + info.url + '.svg")',
        WebkitMaskRepeat: "no-repeat",
        backgroundColor: "white"
    }

    return maskStyle;
}

export function blinkFunc(refList, delay, interval, delRefList = []) {
    var currentNum = timerList.length;
    var isPlus = true;
    var currentIndex = 0;

    if (delRefList.length > 0)
        delRefList.map(ref => {
            ref.current.setClass('character-disappear')
        })
    if (refList[0].current != null)
        refList[0].current.setClass('character-appear')

    timerList.push(
        setTimeout(() => {

            intervalList.push(
                setInterval(() => {
                    if (innerIntervalList[currentNum] != null)
                        clearInterval(innerIntervalList[currentNum])
                    innerIntervalList[currentNum] = setInterval(() => {
                        if (refList[currentIndex].current != null)
                            refList[currentIndex].current.setClass('character-disappear')
                        if (isPlus) {
                            if (currentIndex < refList.length - 1)
                                currentIndex++;
                            else {
                                isPlus = false
                                currentIndex--
                            }
                        }
                        else {
                            if (currentIndex > 0)
                                currentIndex--;
                            else {
                                isPlus = true;
                                currentIndex = 0;
                                clearInterval(innerIntervalList[currentNum])
                            }
                        }
                        if (refList[currentIndex].current != null)
                            refList[currentIndex].current.setClass('character-appear')
                    }, 100);
                }, interval)
            )
        }, delay)
    )
    return currentNum;
}

export function stopBlinkFunc(num) {
    clearInterval(intervalList[num])
    clearTimeout(timerList[num])
    clearInterval(innerIntervalList[num])
}


let sharePrePath = ''

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    sharePrePath = './'
} else {
    // production code
    sharePrePath = './'
}

export const prePathUrl = () => sharePrePath;

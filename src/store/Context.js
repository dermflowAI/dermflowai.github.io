import React from 'react'

import appLogo from '../images/LogoDermFlowAI.svg'
import {Typography, Image} from 'antd';

import appleStoreBadge from '../images/apple_store_badge.svg'
import googlePlayBadge from '../images/google_play_badge.png'

import coverImage from '../images/landing-phone-vertical.png'

import phoneVertical from '../images/landing-phone-vertical.png'
import happyPhone from '../images/dermflow-welcome.png'
import neutralPhone from '../images/dermflow-upload.png'
import generousPhone from '../images/dermflow-convo.png'
import endConvoPhone from '../images/dermflow-end.png'

import phoneVerticalBlack from '../images/phone-vertical-black.png'
// endorsement images
import dreamhub_filled from '../images/dreamhub_filled.png'
import voiceqna_filled from '../images/voiceqna_fill_v2_gradient.png'
import voicemirror_filled from '../images/voice_mirror_v_1024.png'
import bazipaipai_unfilled from '../images/bazipaipai_64.png'
import spindrifthome_filled from '../images/sh_unfill_1024.png'


// section images
import guitar from '../images/guitar.jpg'
import event_phones from '../images/landing-phone-vertical.png'
import foggy_blue from '../images/landing-phone-vertical.png'
import purple_phones from '../images/purple_phones.png'
import purple_light from '../images/purple_light.jpg'
import concert_classic from '../images/landing-phone-vertical.png'

import WifiOffIcon from '@mui/icons-material/WifiOff';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import SignalCellularNodataIcon from '@mui/icons-material/SignalCellularNodata';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import TimerIcon from '@mui/icons-material/Timer';
import discordImage from '../images/discord.png'
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
const appleStoreLink = 'https://testflight.apple.com/join/GYledVYM';

function UserInfoPanel() {

    return (<div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }}>
    <Tooltip title="Trusted providers!">
        <IconButton>
            <AssuredWorkloadIcon />
        </IconButton>
    </Tooltip>
    <Tooltip title="No more waiting in the clinics!">
        <IconButton>
            <TimerIcon />
        </IconButton>
    </Tooltip>
    <Tooltip title="Seemless integration of medical history!">
        <IconButton>
            <MedicalInformationIcon />
        </IconButton>
    </Tooltip>
    <Tooltip title="Completely secure!">
        <IconButton>
            <AdminPanelSettingsIcon />
        </IconButton>
    </Tooltip>
    </div>)
}

function EmoticonPanel() {

    return (<div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }}>
        <Typography>
            Tip to your satisfaction!
        </Typography>
        <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }}>
    <Tooltip title="Completely Offline!">
        <IconButton>
            <WifiOffIcon />
        </IconButton>
    </Tooltip>
    <Tooltip title="No network access needed!">
        <IconButton>
            <SignalCellularNodataIcon />
        </IconButton>
    </Tooltip>
    <Tooltip title="No data stored on Cloud!">
        <IconButton>
            <CloudOffIcon />
        </IconButton>
    </Tooltip>
    <Tooltip title="Completely secure, no user data collected!">
        <IconButton>
            <AdminPanelSettingsIcon />
        </IconButton>
    </Tooltip>
    </div>
    </div>)
}

function IPhoneScreenShot(props) {

    return (
        <div style={{
            overflow: 'hidden',
            width: '100%'
        }}>
            <Image 
                style={{
                    marginTop: '-25%',
                    height: '80vh'
                }}
                preview={false} src={props.image}> 
            </Image>
        </div>
    )
}

export const initialState = {
    // when in dev, change appURL to local url
    // appURL: 'http://localhost:3000',  
    // when in production, change appURL to real url
    appURL: 'https://amplichat.com',

    appLogo: appLogo,
    appName: 'Dermflow.AI',

    coverTitle: 'Dermflow.AI',
    coverText: 'Empowering Dermatology, with AI!',
    appleStoreBadge: appleStoreBadge,
    appleStoreLink,
    googlePlayBadge: googlePlayBadge,
    googlePlayLink: 'https://apps.apple.com/us/app/amplichat/id1499570373',

    coverImage: happyPhone,

    endorsementTitle: `Hangout with your favorite people on your favorite apps`,
    endorsementText: `AmpliChat powers conversations within DreamHub, VoiceQnA, VoiceMirror, BaZiPaiPai, and SpindriftHome.`,
    endorsementList: [
        {
            title: `DreamHub: Visualized Stories`,
            titleColor: `orangeRed`,
            image: dreamhub_filled,
            URL: `https://dreamhub.app`,
        },
        {
            title: `VoiceQnA: Speak a New Language`,
            titleColor: `forestGreen`,
            image: voiceqna_filled,
            URL: `https://voiceqna.com`,
        },
        {
            title: `VoiceMirror: Travel Translator`,
            titleColor: `blue`,
            image: voicemirror_filled,
            URL: `https://voiceqna.com/mirror`,
        },
        {
            title: `BaZiPaiPai: Know Your Destiny`,
            titleColor: `black`,
            image: bazipaipai_unfilled,
            URL: `https://bazipaipai.com`,
        },
        {
            title: `SpindriftHome: HOA Management`,
            titleColor: `orangeRed`,
            image: spindrifthome_filled,
            URL: `https://spindrifthome.com`,
        },
    ],

    sectionList: [
        {
            'title': `DermFlow.AI`,
            'text': `Empowering Dermatology with AI: Physician's assistant, now at your fingertips. In 3 simple steps, receive the treatment you need!`,
            'additionalTextComponents': <UserInfoPanel />,
            'image': happyPhone,
            'mobileImage': <IPhoneScreenShot image={happyPhone}/>,
            'appleStoreBadge' : appleStoreBadge,
            'appleStoreLink' : appleStoreLink,
            'appLogo': appLogo
        },
        {
            'title': `1. Click and Upload!`,
            'text': `Click a picture of the skin problem that is bothering you. Upload it on iDermflow to start the consultation! It's that simple.`,
            'image': neutralPhone,
            'mobileImage': <IPhoneScreenShot image={neutralPhone}/>,
        },
        {
            'title': `2. Chat!`,
            'text': `Dermflow.AI, your virtual physician-assistant, will process the uploaded image, and ask you relevant questions. Have a conversation with the expert AI, answering some questions about necessary details.`,
            'image': generousPhone,
            'mobileImage': <IPhoneScreenShot image={generousPhone}/>,
        },
        {
            'title': `3. Receive a treatment plan!`,
            'text': `Once Dermflow.AI receives the necessary details, the triage report is generated and passed on to the physician. Your treatment plan is on it's way!`,
            'image': endConvoPhone,
            'mobileImage': <IPhoneScreenShot image={endConvoPhone}/>,
        }
    ],
    sectionListBkp: [
        {
            'title': `Rounded Tip`,
            'text': `Love seeing round figures on your statements? Use RoundedTip, get the exact tip amount for your bill so that you can see some rounded amounts on your card statements.`,
            'image': happyPhone,
        },
        {
            'title': `Event Networking Made Easy`,
            'text': `Tired of shouting over the music to talk to your friends at concerts and events? Our app makes it easy to chat with others in real-time, so you can enjoy the experience without missing out on socializing.`,
            'image': guitar,
        },
        {
            'title': `Expand Your Event Community`,
            'text': `Meet like-minded people and share your excitement for the latest events and concerts.`,
            'image': event_phones,
        },
        {
            'title': `Enhance Event Experience`,
            'text': `Get instant access to a community of passionate event and concert-goers with our app! Chat with others before, during, and after the event to enhance your experience and create memories that last a lifetime.`,
            'image': foggy_blue,
        },
        {
            'title': `Chat with Attendees`,
            'text': `Don't let social anxiety get in the way of enjoying your favorite events and concerts! With our app, you can chat with others and make new friends in a safe, welcoming environment.`,
            'image': purple_phones,
        },
        {
            'title': `Discover New Events and Friends`,
            'text': `Our app is the perfect way to enhance your experience at events and concerts! Connect with others, share your thoughts and opinions, and discover new artists and events to love.`,
            'image': purple_light,
        },
        {
            'title': `Connect with Concert Fans`,
            'text': `Whether you're a seasoned concert-goer or a first-time attendee, our app is the perfect way to connect with others and make the most of your experience. Download now and start chatting!`,
            'image': concert_classic,
        },
    ],
    discordImage: discordImage,
    discordLink: 'https://discord.com/invite/aFQPYyAVDq',
}

const initialContext = {
    state: initialState,
    dispatch: () => null,
}

export const Context = React.createContext(initialContext)

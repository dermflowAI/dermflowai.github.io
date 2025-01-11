import {
    Typography,
    Layout,
    Row,
    Col,
    Affix,
    Image,
    Button,
    Tooltip,
    Popover,
} from 'antd'

import {
    DownloadOutlined,
} from '@ant-design/icons'

import {
    motion,
} from 'framer-motion'

import {
    useContext,
} from 'react'

import { Context } from './store/Context'

import { SectionItemImageOnTheRight, SectionList, FloatTextCol, FloatImageCol } from './Desktop';
// props: sectionItem, backgroundColor
function SectionItem(props) {
    return (
        <Row justify='center' align='top' style={{'backgroundColor': props.backgroundColor, 'height': '700px', 'padding': '70px 20px'}}>
            <motion.div 
                    initial={{x: -300, opacity: 0}} 
                    whileInView={{x: 0, opacity: 1, transition: {type: 'spring', bounce: 0, duration: 1}}} 
                    viewport={{once: true}}>
                <Row justify='center'>
                    <Typography.Title level={2}>
                        {props.sectionItem.title}
                    </Typography.Title>
                </Row>
                <Row justify='center'>
                    <Typography style={{'fontSize': '16px'}}>
                        {props.sectionItem.text}
                    </Typography>
                </Row>
            </motion.div>

            <motion.div 
                    initial={{x: -300, opacity: 0}} 
                    whileInView={{x: 0, opacity: 1, transition: {type: 'spring', bounce: 0, duration: 1}}} 
                    viewport={{once: true}}>
                <Image preview={false} src={props.sectionItem.image} style={{'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}></Image>
            </motion.div>
        </Row>
    )
}

// props: sectionList
// function SectionList(props) {
//     return (
//         <>
//         {
//             props.sectionList.map((sectionItem, index) => {
//                 return (
//                     <SectionItem sectionItem={sectionItem} backgroundColor={index % 2 === 0? 'white': null} />    
//                 )

//             })
//         }
//         </>
//     )
// }

function Mobile() {
    const {state, dispatch} = useContext(Context)

    const elements = [];

    state.sectionList.forEach((sectionItem, i) => {
        if(i === 0) {
            elements.push(<FloatTextCol {...sectionItem} skipTitle={true} mobile/>);
        } else {
            elements.push(<FloatTextCol {...sectionItem} mobile/>);
        }
        elements.push(<FloatImageCol {...sectionItem} mobile/> );
    })

    return (
        <Layout style={{'overflow-x': 'hidden'}}>
            <Affix offsetTop={0}>
                <Layout.Header style={{'background': 'white', 'width': '100%'}}>
                    <Row justify='center' align='middle' style={{'backgroundColor': 'white', 'width': '100%', 'height': '100%'}}>
                        <Col>
                            <Image width={30} height={30} preview={false} style={{borderRadius: '5px'}} src={state.appLogo}></Image>
                        </Col>
                        <Col>
                            <Typography.Title level={3} style={{'color': 'black', 'marginLeft': '10px'}}>{state.appName}</Typography.Title>
                        </Col>
                
                    </Row>
                </Layout.Header>
            </Affix>

            <Layout.Content>
            {/* <SectionList sectionList={state.sectionList} mobile/> */}
                {/* cover headline */}
                {
                    <div style={{
                        display: 'flex', 
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                        }}>
                    {
                        elements.map((element) => {
                            return <div style={{marginBottom: '10px'}}>{element}</div>
                        }
                        )
                    }
                    </div>
                }

                {/* policies */}
                <Row justify="center" align='middle' style={{'backgroundColor': 'white', 'padding': '0 0 40px 0'}}>
                    <Col>
                        <Typography.Text type="secondary" style={{'fontSize': 12}}>
                            {state.appName} © {new Date().getFullYear()}
                        </Typography.Text>
                    </Col>
                </Row>

            </Layout.Content>

            {/*
            <Layout.Footer>


            </Layout.Footer>
            */}

            </Layout>
    )
}

export default Mobile

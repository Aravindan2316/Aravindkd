import React, { useState, useEffect } from "react"
import { styled } from '../../stitches.config';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tablecomponent from '../../components/table'
import {
    faTrain,
    faPlane,
} from "@fortawesome/free-solid-svg-icons";
const Box = styled('div', {})

const Text = styled('p', {})
const Bold = styled('b', {})
const Line = styled('hr', {
    border: 'none',
    height: '0.1px',
    color: '#333',
    backgroundColor: ' #333',
    width: '100%'
})
const Horizontalbox = styled('div', {
    '@bp3': {
        height: 'auto',
        width: '80%',  
        display: 'flex',
        flexDirection: 'column',
    },
    '@bp2': {
        display: 'none'
    }
})
const Icon = styled(FontAwesomeIcon, {})
const Box2 = styled('div', {
    '@bp3': {
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'
    },
    '@bp2': { display: 'none' }
})
const Hoverview = styled('div', {
    display: 'flex', flexDirection: 'row', height: 'fit-content'
})
const Unorderlist = styled('ul', {})
const List = styled('li', {})
const Spantag = styled('span', {})
const Angle = styled('a', {})
export default function Home() {
    const [isHovering, setIsHovering] = useState([
        {
            nights: 3,
            cityid: '01',
            cityname: 'Goa',
            bollval: false,
            tooltipval: false,
            icon: faTrain,
            days: [
                {
                    day: 1,
                    slots: [
                        {
                            name: 'Fullday',
                            span: 3,
                            type: 'Arrive in Malaga airport. Get transferred to your hotel..'
                        }
                    ]
                },
                {
                    day: 2,
                    slots: [
                        {
                            name: 'Morning to noon',
                            span: 2,
                            type: 'Checkout of your hotel. Take your train from Malaga to Seville. Check-in to your new hotel.'
                        },
                        {
                            name: 'Evening',
                            span: 1,
                            type: 'Activity scheduled.'
                        }
                    ]
                }
            ]
        },
        {
            nights: 3,
            cityid: '02',
            cityname: 'kerala',
            bollval: false,
            tooltipval: false,
            icon: 'faPlane',
            icon: faPlane,
            days: [
                {
                    day: 3,
                    slots: [
                        {
                            name: 'Morning',
                            span: 1,
                            type: 'Arrive_today...'
                        },
                        {
                            name: 'Noon to Evening',
                            span: 2,
                            type: 'event scheduled.'
                        }
                    ]
                },
                {
                    day: 4,
                    slots: [
                        {
                            name: 'Morning to noon',
                            span: 2,
                            type: 'Checkout of your hotel. Take your train from Prague to Vienna. Check-in to your new hotel.'
                        },
                        {
                            name: 'Evening',
                            span: 1,
                            type: 'Activity scheduled.'
                        }
                    ]
                },
                {
                    day: 5,
                    slots: [
                        {
                            name: 'Morning',
                            span: 1,
                            type: 'Activity'
                        },
                        {
                            name: 'noon',
                            span: 1,
                            type: 'Activity'
                        },
                        {
                            name: 'Evening',
                            span: 1,
                            type: 'Activity scheduled.'
                        }
                    ]
                }
            ]
        },
        {
            nights: 3,
            cityid: '02',
            cityname: 'kerala',
            bollval: false,
            tooltipval: false,
            icon: 'faPlane',
            icon: faPlane,
            days: [
                {
                    day: 3,
                    slots: [
                        {
                            name: 'Morning',
                            span: 1,
                            type: 'Arrive_today...'
                        },
                        {
                            name: 'Noon to Evening',
                            span: 2,
                            type: 'event scheduled.'
                        }
                    ]
                },
                {
                    day: 4,
                    slots: [
                        {
                            name: 'Morning to noon',
                            span: 2,
                            type: 'Checkout of your hotel. Take your train from Prague to Vienna. Check-in to your new hotel.'
                        },
                        {
                            name: 'Evening',
                            span: 1,
                            type: 'Activity scheduled.'
                        }
                    ]
                },
                {
                    day: 5,
                    slots: [
                        {
                            name: 'Morning',
                            span: 1,
                            type: 'Activity'
                        },
                        {
                            name: 'noon',
                            span: 2,
                            type: 'Activity'
                        },
                    ]
                }
            ]
        },

    ]);
    const len = isHovering.length;
    const handleMouseOver = (val) => {
        setIsHovering(
            isHovering.map((e, ind) => ind == val ? ({ ...e, bollval: true }) : ({ ...e, bollval: false }))
        )
    };
    const handleMouseOut = (val) => {
        setIsHovering(
            isHovering.map((e, ind) => ind == val ? ({ ...e, bollval: false }) : ({ ...e, bollval: false }))
        )
    };
    const data = [
        { sapan: 3, title: 'Morning' },
    ]
    return (
        <Box >
            <Box css={{ height: '70px', display: 'flex', alignItems: 'center', width: '100%', }}>
                <Bold css={{ paddingLeft: '10%' }}>PICKYOURTRAIL</Bold>
            </Box>
           
            <Line></Line>
            <Box css={{ height: '170px' }}>
                <Text css={{ fontSize: '$6', color: 'black', paddingLeft: '10%' }}>6nights to ooty,goa and kerala...</Text>
            </Box>
            <Line></Line>
            <Box css={{ '@bp2': { width: '100%' }, '@bp3': { flexDirection: 'row', display: 'flex', } }}>
                {/* <Tablecomponent /> */}
                <Box css={{
                    '@bp2': { width: '100%', justifyContent: 'center', display: 'flex', flexDirection: 'column' },
                    '@bp3': { width: '70%', display: 'flex', flexDirection: 'column', paddingLeft: '80px' }
                }}>
                    {isHovering.map((val, index) => {
                        return (
                            <Box key={index} css={{ paddingTop: index == 0 ? 10 : 0 }}>
                                <Box css={{
                                    '@bp3': {
                                        display: 'table', width: '90%', height: 'fit-content',
                                    },
                                    '@bp2': {
                                        display: 'flex', width: '100%', flexDirection: 'column'
                                    }
                                }}>
                                    <Box css={
                                        {
                                            '@bp3': {
                                                display: 'table-row', backgroundColor: '#ebeef2', borderTopRightRadius: 10, borderTopLeftRadius: 10
                                            },
                                            '@bp2': {
                                                display: 'flex', width: '100%',
                                            }
                                        }}>
                                        <Box css={{
                                            '@bp3': {
                                                display: 'table-cell', borderStyle: 'solid', borderWidth: '1px', borderColor: '#e0e0e0', borderTopRightRadius: 10, borderTopLeftRadius: 10,

                                            },
                                            '@bp2': {
                                                display: 'none'
                                            }
                                        }}>
                                            <Text css={{ paddingLeft: '20px' }}><Bold>{val.cityname}</Bold>--{val.days.length}night stay</Text>
                                        </Box>
                                        <Box css={{
                                            '@bp3': { display: 'none' },
                                            '@bp2': {
                                                display: 'flex', height: '104px', width: '100%',
                                                backgroundImage: `url(${'https://pyt-images.imgix.net/images/city/2400xh/porto.jpg?w=300&h=104&fit=crop&crop=faces&dpr=1&auto=format,compress,enhance&q=40'})`,
                                                backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                                                // backgroundColor:'black',
                                                flexWrap: 'wrap',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                backgroundPosition: '50%',
                                                textAlign: 'center', color: 'White',

                                                '&::after': {
                                                    content: "",
                                                    position: 'absolute',
                                                    width: '100%',
                                                    height: '104px',
                                                    background:'transparent',
                                                    background: 'linear-gradient(180deg,transparent,rgba(0,0,0,.9))',
                                                    // backgroun
                                                }
                                            }

                                        }}>
                                            <Bold css={{ color: 'White',zIndex:1 }}>Porto</Bold>
                                            <Spantag css={{ fontSize: '13px', lineHeight: '1.32', letterSpacing: '.25px',zIndex:1 }}>
                                                1
                                                night stay
                                                |
                                                <Angle css={{ color: '#1fc0e5' }} href="#">Change</Angle>
                                            </Spantag>
                                        </Box>
                                    </Box>
                                    {val.days.map((e, ind) => {
                                        return (
                                            <Box key={ind} css={{
                                                '@bp3': {
                                                    display: 'table-row', width: 'auto', flexDirection: 'row'
                                                },
                                                '@bp2': {
                                                    display: 'flex', width: '100%', flexDirection: 'column'
                                                }
                                            }}>
                                                <Box css={{
                                                    '@bp3': {
                                                        display: 'flex', height: '100px', width: '15%', borderStyle: 'solid', borderWidth: '1px',
                                                        borderColor: '#e0e0e0', justifyContent: 'center', alignItems: 'center', float: 'left'
                                                    },
                                                    '@bp2': {
                                                        display: 'flex', width: '100%', backgroundColor: 'hsla(0,0%,80%,.3)', height: '40px',
                                                        alignItems: 'center'
                                                    }
                                                }}>
                                                    <Box css={{
                                                        '@bp3': {
                                                            display: 'table-cell'
                                                        },
                                                        '@bp2': {
                                                            display: 'flex', color: '#777', fontWeight: '600', paddingLeft: '10px'
                                                        }
                                                    }}>
                                                        Day 0{e.day}
                                                    </Box>
                                                </Box>

                                                {e.slots.map((a, i) => {
                                                    return (
                                                        <Box key={i} css={{
                                                            '@bp3': {
                                                                display: 'table-column', float: 'left', width: a.span == 3 ? '84.3%' : a.span == 2 ? '56.5%' : '27.47%',
                                                                height: '100px', borderStyle: 'solid', borderWidth: 1,
                                                                borderColor: '#e0e0e0'
                                                            },
                                                            '@bp2': {
                                                                display: 'flex', backgroundColor: '#FFFFFF', width: '100%'
                                                            }
                                                        }}>
                                                            <Box css={{
                                                                '@bp3': {
                                                                    display: 'flex', flexDirection: 'row',
                                                                },
                                                                '@bp2': {
                                                                    display: 'flex', flexDirection: 'row', width: '100%', height: '100px',
                                                                    borderStyle: 'solid', borderWidth: '1px', borderColor: '#e0e0e0',
                                                                }
                                                            }}>
                                                                <Box css={{
                                                                    '@bp3': {
                                                                        display: 'flex', paddingLeft: '10px', paddingTop: 30
                                                                    },
                                                                    '@bp2': {
                                                                        display: 'flex', width: '20%', justifyContent: 'center', paddingTop: '5%'
                                                                    }
                                                                }}>
                                                                    <Box css={{ height: 30, width: 30, backgroundColor: '#2c2f42', borderRadius: '50%', }}>

                                                                    </Box>
                                                                </Box>
                                                                <Box css={{
                                                                    '@bp3': {
                                                                        display: 'flex', flexDirection: 'column', paddingLeft: '15px', paddingTop: 30
                                                                    },
                                                                    '@bp2': {
                                                                        display: 'flex', flexDirection: 'column', width: '85%', paddingTop: '5%'
                                                                    }
                                                                }}>
                                                                    <Box css={{ fontSize: '14px', fontWeight: 'normal', color: '#777', }}>{a.name}</Box>
                                                                    <Box css={{ fontSize: '12px', fontWeight: 'normal', '@bp2': { paddingTop: 10 }, '@bp3': { paddingTop: 10 } }}>{a.type}</Box>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    )
                                                })}
                                            </Box>
                                        )
                                    })}

                                </Box>
                                {
                                    index + 1 == isHovering.length ?
                                        null :
                                        <Box css={{ display: 'flex', justifyContent: 'center', paddingRight: '10%' }}>
                                            <Box css={{
                                                '@bp2': {
                                                    display: 'flex',
                                                    height: 100, width: 210, flexDirection: 'column',
                                                    backgroundImage: `url(${'https://pyt-images.imgix.net/images/web_app/itinerary/fly_line.svg'})`,
                                                    backgroundSize: 'contain',
                                                    "&::before": {
                                                        content: `''`,
                                                        // position: 'absolute',
                                                        width: '20px',
                                                        height: '20px',
                                                        borderRadius: '50%',
                                                        backgroundColor: '#aaa',
                                                        marginRight: '100%',
                                                        marginBottom: '5%'
                                                    },
                                                    "&::after": {
                                                        content: `''`,
                                                        // position: 'absolute',
                                                        width: '20px',
                                                        height: '20px',
                                                        borderRadius: '50%',
                                                        backgroundColor: '#aaa',
                                                        marginTop: '-1%',
                                                        marginLeft: '100%'
                                                    },
                                                    justifyContent: 'center', alignItems: 'center'
                                                },
                                                '@bp3': {
                                                    display: 'flex',
                                                    height: 90, width: 250, flexDirection: 'column',
                                                    backgroundImage: `url(${'https://pyt-images.imgix.net/images/web_app/itinerary/fly_line.svg'})`,
                                                    backgroundSize: 'unset',
                                                    backgroundRepeat: 'no-repeat',
                                                    "&::before": {
                                                        content: `''`,
                                                        position: 'absolute',
                                                        width: '20px',
                                                        height: '20px',
                                                        borderRadius: '50%',
                                                        backgroundColor: '#aaa',
                                                        marginRight: '17.5%',
                                                        marginBottom: '6%'
                                                    },
                                                    "&::after": {
                                                        content: `''`,
                                                        position: 'absolute',
                                                        width: '20px',
                                                        height: '20px',
                                                        borderRadius: '50%',
                                                        backgroundColor: '#aaa',
                                                        marginLeft: '14.5%',
                                                        marginTop: '6%'
                                                    },
                                                    justifyContent: 'center', alignItems: 'center'
                                                }
                                            }}>
                                                <Box css={{}}>
                                                    <Box css={{
                                                        display: 'flex', height: '30px', width: '30px', borderRadius: '50%', backgroundColor: '#53576d',
                                                        justifyContent: 'center', alignItems: 'center',
                                                    }}>
                                                        <Icon
                                                            icon={val.icon}
                                                            css={{ fontSize: '12px', color: "white" }}
                                                        />
                                                    </Box>
                                                </Box>
                                                <Box css={{ fontSize: '$2', fontWeight: 'bold', marginTop: 5 }}>Travel to {val.icon == faPlane ? 'Plane' : 'Train'}</Box>
                                            </Box>
                                        </Box>
                                }
                            </Box>
                        )
                    })}
                </Box>

                <Box css={{
                    '@bp3': {
                        width: '30%', padding: '8px 0 16px', height: 'fit-content'
                    }, '@bp2': { display: 'none' }
                }}>
                    <Horizontalbox>
                        {isHovering.map((val, i) => {
                            return (
                                <Box key={i}>
                                    <Box2 css={{ paddingTop: i == 0 ? '10%' : 0, }}
                                        onMouseOver={() => handleMouseOver(i)} onMouseOut={() => handleMouseOut(i)}>
                                        <Box css={{ '@bp2': { display: 'none' } }}>
                                            <Box css={{ padding: 10 }}>
                                                {val.cityname}
                                            </Box>
                                        </Box>
                                        {val.bollval ? <Hoverview>
                                            <Box css={{
                                                display: 'flex', borderRadius: 50, border: '1px solid #1895b3', height: 20, width: 20,
                                                alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
                                            }}>-</Box>
                                            <Spantag css={{
                                                position: 'absolute', visibility: 'visible',
                                            }}></Spantag>
                                            <Box css={{ marginLeft: 5 }}>{`${val.days.length}n`}</Box>
                                            <Box css={{
                                                display: 'flex', borderRadius: 50, borderCollapse: 'collapse', border: '1px solid #1895b3', height: 20, width: 20,
                                                alignItems: 'center', justifyContent: 'center', marginLeft: 5
                                            }}>+</Box>
                                        </Hoverview> : null}
                                    </Box2>
                                    <Box>
                                        <Box css={{ padding: 10 }}>
                                            <Icon
                                                icon={val.icon}
                                                css={{ fontSize: '12px', color: "black" }}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        })}
                    </Horizontalbox>
                </Box>
            </Box>
        </Box >
    )
}


{/* <Box css={{
    '@bp3': {
        display: 'table-row', width: 'auto', flexDirection: 'row'
    },
    '@bp2': {
        display: 'flex', width: '100%', flexDirection: 'column'
    }
}}>
    <Box css={{
        '@bp3': {
            display: 'flex', height: '100px', width: '15%', borderStyle: 'solid', borderWidth: '1px',
            borderColor: '#e0e0e0', justifyContent: 'center', alignItems: 'center', float: 'left'
        },
        '@bp2': {
            display: 'flex', width: '100%', backgroundColor: 'hsla(0,0%,80%,.3)', height: '40px',
            alignItems: 'center'
        }
    }}>
        <Box css={{
            '@bp3': {
                display: 'table-cell'
            },
            '@bp2': {
                display: 'flex', color: '#777', fontWeight: '600', paddingLeft: '10px'
            }
        }}>
            Day 01
        </Box>
    </Box>

    {data.map((e, i) => {
        return (
            <Box css={{
                '@bp3': {
                    display: 'table-column', float: 'left', borderStyle: 'solid', borderWidth: '1px',
                    borderColor: '#e0e0e0', width: e.sapan == 3 ? '84.1%' : e.sapan == 2 ? '56%' : '26.9%',
                    height: '100px',
                },
                '@bp2': {
                    display: 'flex', backgroundColor: '#FFFFFF', width: '100%'
                }
            }}>
                <Box css={{
                    '@bp3': {
                       display:'flex', flexDirection: 'row', paddingLeft: '15px'
                    },
                    '@bp2': {
                        display: 'flex', 
                    }
                }}>
                    <Box css={{
                        '@bp3':{
                           display:'flex'
                        },
                        '@bp3':{
                        display:'flex',height:'fit-content'
                        }
                    }}>
                     <h2>h</h2>
                    </Box>
                    <Box css={{display:'flex',}}>
                        <Text css={{ fontSize: '$3', fontWeight: 'normal', color: '#777' }}>Morning</Text>
                        <Text css={{ fontSize: '$3', fontWeight: 'normal' }}>Arrived....</Text>
                    </Box>
                </Box>
            </Box>
        )
    })}
</Box> */}
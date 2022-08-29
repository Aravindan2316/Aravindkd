import { styled } from '../stitches.config';
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrain,
    faPlane,
} from "@fortawesome/free-solid-svg-icons";
const Box = styled('div', {})
const Table = styled('div', {
})
const Text = styled('p', {})
const Bold = styled('b', {})
const Line = styled('hr', {
    border: 'none',
    height: '0.1px',
    color: '#333',
    backgroundColor: ' #333'
})
const Icon = styled(FontAwesomeIcon, {})

const Tablescreen = () => {
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
                            // span: 1,
                            type: 'Activity scheduled.'
                        }
                    ]
                },
                {
                    day: 3,
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
            icon: faTrain,
            days: [
                {
                    day: 6,
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
                    day: 7,
                    slots: [
                        {
                            name: 'Morning to noon',
                            span: 2,
                            type: 'Activity'
                        },
                        {
                            name: 'Evening',
                            span: 1,
                            type: 'Activity scheduled.'
                        }
                    ]
                },
                {
                    day: 8,
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
        }
    ]);
    const len = isHovering.length;

    return (
        <Box css={{}}>
            <Table css={{paddingLeft:'100%'}}>
                {isHovering.map((val, index) => {
                    return (
                        <Box key={index}>
                            <Box css={{ display: 'table', width: '100%', marginTop: index == 0 ? '50px' : null }}>
                                {/* table header */}
                                <Box css={{ display: 'table-row', backgroundColor: '#ebeef2', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                    <Box css={{ display: 'table-cell', borderStyle: 'solid', borderWidth: '1px', borderColor: '#e0e0e0', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                        <Text css={{ paddingLeft: '20px' }}><Bold>{val.cityname}</Bold>--{val.days.length}night stay</Text>
                                    </Box>
                                </Box>
                                {/* table body */}
                                {val.days.map((e, i) => {
                                    return (
                                        <Box key={i} css={{ display: 'table-row', width: 'auto' }}>
                                            <Box css={{
                                                display: 'flex', float: 'left', height: '100px', width: '15%', borderStyle: 'solid', borderWidth: '1px', borderColor: '#e0e0e0', justifyContent: 'center', alignItems: 'center',
                                                borderBottomLeftRadius: len == i + 1 ? 20 : null
                                            }}>
                                                <Box css={{ display: 'table-cell' }}>
                                                    Day 0{e.day}
                                                </Box>
                                            </Box>
                                            {e.slots.map((a, ind) => {
                                                return (
                                                    <Box key={ind} css={a.span == 3 ? {
                                                        display: 'table-column', float: 'left', borderStyle: 'solid', borderWidth: '1px', borderBottomRightRadius: len == ind + 1 ? 20 : null,
                                                        borderColor: '#e0e0e0', width: '84.4%', height: '100px',
                                                    } : a.span == 2 ? {
                                                        display: 'table-column', float: 'left', borderStyle: 'solid', borderWidth: '1px',
                                                        borderColor: '#e0e0e0', height: '100px', width: '56%', borderBottomRightRadius: len == ind + 1 ? 20 : null
                                                    } : {
                                                        display: 'table-column', float: 'left', borderStyle: 'solid', borderWidth: '1px',
                                                        borderColor: '#e0e0e0', height: '100px', width: '27.9%', borderBottomRightRadius: len == ind + 1 ? 20 : null
                                                    }}>
                                                        <Box css={{ display: 'flex', flexDirection: 'row', paddingLeft: '$3', marginTop: '1%' }}>
                                                            <Box css={{ paddingTop: 10 }}>
                                                                <Box css={{ height: 30, width: 30, backgroundColor: '#2c2f42', borderRadius: '50%', }}>
                                                                </Box>
                                                            </Box>
                                                            <Box css={{ paddingLeft: '$1' }}>
                                                                <Text css={{ fontSize: '$3', fontWeight: 'normal', color: '#777' }}>{a.name}</Text>
                                                                <Text css={{ fontSize: '$3', fontWeight: 'normal' }}>{a.type}</Text>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                )
                                            })}
                                        </Box>
                                    )
                                })}
                            </Box>
                            {index + 1 == len ?
                                null : <Box css={{ display: 'flex', justifyContent: 'center', paddingRight: '10%' }}>
                                    <Box css={{
                                        display: 'flex',
                                        height: 80, width: 210, flexDirection: 'column',
                                        backgroundImage: `url(${'https://pyt-images.imgix.net/images/web_app/itinerary/fly_line.svg'})`,
                                        backgroundSize: 'contain',
                                        "&::before": {
                                            content: `''`,
                                            position: 'absolute',
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            backgroundColor: '#aaa',
                                            marginBottom: '5.5%',
                                            marginRight: '14.4%'
                                        },
                                        "&::after": {
                                            content: `''`,
                                            position: 'absolute',
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            backgroundColor: '#aaa',
                                            marginTop: '5.5%',
                                            marginLeft: '14.5%'
                                        },
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <Box css={{ marginTop: 20, display: 'inline-block' }}>
                                            <Box css={{
                                                display: 'flex', height: '30px', width: '30px', borderRadius: '50%', backgroundColor: '#53576d',
                                                justifyContent: 'center', alignItems: 'center'
                                            }}>
                                                <Icon
                                                    icon={val.icon}
                                                    css={{ fontSize: '12px', color: "white" }}
                                                />
                                            </Box>
                                        </Box>
                                        <Text css={{ fontSize: '$2', fontWeight: 'bold', display: 'inline' }}>Travel to {val.icon == faPlane ? 'Plane' : 'Train'}</Text>
                                    </Box>
                                </Box>}
                        </Box>
                    )
                })}
            </Table>
        </Box>
    )
}
export default Tablescreen
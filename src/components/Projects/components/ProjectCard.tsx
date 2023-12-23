import { Box, Button, Typography } from '@mui/material';
import React, { StyleHTMLAttributes, useEffect, useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { motion, useAnimationControls } from 'framer-motion'
import Tilt from 'react-next-tilt';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export const ProjectCard = ({
    project
}: {
    project: {
        id: string;
        title: string;
        subtitle: string;
        url?: string;
        icon?: string;
        images?: string[];
        package?: boolean;
        comingSoon?: boolean;
    },
}) => {
    const [hovering, setHovering] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const style = useStyle()


    return (
        <Box sx={style.container}>
            <Tilt
                disabled={modalOpen || !hovering}
                disabledFilter='grayscale(0)'
                borderRadius={'25px'}
                style={{
                    ...style.projectCard,
                    pointerEvents: modalOpen ? 'none' : 'auto',
                    transform: 'none !important',
                }}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                onClick={() => {
                    setModalOpen(true)
                    setHovering(false)
                }}
            >
                <Box
                    component={'img'}
                    sx={style.cardFront}
                    src={project.icon}
                />
                {project.comingSoon && (
                    <Box
                        sx={{
                            backgroundColor: '#b32431',
                            color: 'white',
                            lineHeight: 1,
                            position: 'absolute',
                            right: '0',
                            top: '0',
                            width: '50%',
                            height: '50%',
                            // transform: 'rotate(45deg)',
                            whiteSpace: 'nowrap',
                            borderRadius: '0 25px 0 0 ',
                            clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
                        }}
                    >
                        <span
                            style={{
                                position: 'absolute',
                                transform: 'rotate(45deg)',
                                transformOrigin: '100% 50%',
                                top: '60%',
                                right: '10%',
                                fontSize: '1.2vw'
                            }}
                        >
                            COMING SOON
                        </span>
                    </Box>
                )}
                <motion.div
                    //using style reference from useStyle was not acceptable by the component for some reason so here we are
                    style={{
                        height: '100%',
                        color: 'white',
                        display: 'flex',
                        borderRadius: '25px',
                        perspective: '1000px',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        transformStyle: 'preserve-3d',
                        transition: 'background-color 0.5s',
                        backgroundColor: `rgba(0, 0, 0, ${hovering ? 0.5 : 0})`,
                    }}
                >
                    <Box
                        style={{
                            ...style.textContainer,
                            opacity: hovering ? 1 : 0,
                            width: '100%'
                        }}
                    >
                        <Typography fontSize={'1.8rem'}>{project.title}</Typography>
                        <Typography fontSize={'1.2rem'}>{project.subtitle.split(' ').slice(0, 10).join(' ')}...</Typography>
                    </Box>
                    <Box
                        style={{
                            ...style.buttonContainer,
                            opacity: hovering ? 1 : 0
                        }}
                    >
                        <Button
                            variant={'contained'}
                            sx={style.detailsButton}
                            onClick={() => {
                                setModalOpen(true)
                                setHovering(false)
                            }}
                        >
                            More Details
                        </Button>
                    </Box>
                </motion.div>
                <Modal size='lg' isOpen={modalOpen} toggle={() => setModalOpen(v => !v)}>
                    <ModalHeader
                        toggle={() => setModalOpen(v => !v)}
                        style={{
                            alignItems: 'flex-start',
                            padding: '5%'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start'
                            }}
                        >
                            <Box
                                display='flex'
                                gap={2}
                                alignItems={'flex-start'}
                            >

                                <img
                                    src={project.icon}
                                    style={{
                                        width: '20%',
                                        height: 'auto',
                                        aspectRatio: '1 / 1',
                                        borderRadius: '20px'
                                    }}
                                />
                                <Box>
                                    <Typography variant={'h4'}>{project.title}{project.package ? ' (NPM Package)' : ''}</Typography>
                                    <Typography variant={'subtitle1'}>{project.subtitle}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </ModalHeader>
                    <ModalBody style={{
                        paddingRight: 0,
                        paddingLeft: 0
                    }}>
                        {/* <hr style={{ width: '90%' }} /> */}
                        <Box
                            display='flex'
                            justifyContent={'center'}
                            width={'100%'}
                        >
                            {!project.images?.length ? (
                                <Typography variant={'h2'}>No images</Typography>
                            ) : (
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={0}
                                    pagination={{

                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    style={{
                                        width: '100%'
                                    }}
                                >
                                    {project.images?.map(image => (
                                        <SwiperSlide
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <img
                                                src={image}
                                                alt="image"
                                                style={{
                                                    width: '90%'
                                                }}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}
                        </Box>
                    </ModalBody>
                    {!project.comingSoon && (
                        <ModalFooter
                            style={{
                                background: '#eeeeee'
                            }}
                        >
                            <Button
                                onClick={() => window.open(project.url, '_blank')}
                            >
                                Visit {project.package ? 'Package' : 'Website'}
                            </Button>
                        </ModalFooter>
                    )}
                </Modal>
            </Tilt >
        </Box >
    )
}

const useStyle = () => ({
    container: {
        // width: '23%'
    },
    projectCard: {
        width: '100%',
        aspectRatio: '1 / 1',
        borderRadius: '25px',
        backgroundSize: 'cover',
        cursor: 'pointer',
    },
    cardFront: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: '25px',
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        boxShadow: '0 0 30px rgb(131, 131, 131)'
    },
    textContainer: {
        width: '100%',
        height: '100%',
        flex: 1,
        overflow: 'hidden',
        translate: '5px 0 50px',
        transition: 'opacity 0.5s',
        padding: '7.5%',
    },
    buttonContainer: {
        width: '100%',
        padding: '15px',
        translate: '0 -10px 50px',
        transition: 'opacity 0.5s'
    },
    detailsButton: {
        margin: '10px auto',
        textAlign: 'center',
        display: 'flex',
    }
})


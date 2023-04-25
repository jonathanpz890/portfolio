import React, { useState } from 'react'
import './App.css';
import { Intro } from './components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, EffectCreative } from "swiper";
import { SwiperEvents } from 'swiper/types';

const App = () => {
    const [deformIntro, setDeformIntro] = useState(false)
    const swiperScroll = (s: any) => {
        const index = s.realIndex;
        const prevIndex = s.previousRealIndex;
        if (index === 1 && prevIndex === 0) {
            setDeformIntro(true)
        } else if (index === 0 && prevIndex === 1) {
            setDeformIntro(false)
        }
    }

    return (
        <>
            {/* <Intro /> */}
            <Swiper
                style={{
                    width: '100vw',
                    height: '100vh'
                }}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, '-20', -1],
                    },
                    next: {
                        shadow: true,
                        translate: [0, '100%', 0],
                    },
                }}
                direction={"vertical"}
                slidesPerView={1}
                speed={800}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, EffectCreative]}
                className="mySwiper"
                onScroll={(s) => swiperScroll(s)}
            >
                <SwiperSlide>
                    <Intro deformIntro={deformIntro}/>
                </SwiperSlide>
                <SwiperSlide style={{ background: 'red', height: '100vh' }}>Slide 2</SwiperSlide>
                <SwiperSlide style={{ background: 'blue', height: '100vh' }}>Slide 3</SwiperSlide>
                <SwiperSlide style={{ background: 'green', height: '100vh' }}>Slide 4</SwiperSlide>
            </Swiper>
        </>
    );
}

export default App;
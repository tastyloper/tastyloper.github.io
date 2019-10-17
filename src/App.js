import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';
import './App.css'

class App extends Component {
  render() {
    const params = {
      direction: 'vertical',
      slidesPerView: 'auto',
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }
    return (
      <>
        <div className="swiper-wrap">
          <Swiper {...params}>
            <div>Slide #1</div>
            <div>Slide #2</div>
            <div>Slide #3</div>
            <div>Slide #4</div>
            <div>Slide #5</div>
          </Swiper>
        </div>
      </>
    )
  }
}

export default App;

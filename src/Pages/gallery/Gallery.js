import React,{ useEffect, useState } from 'react';
import './Gallery.css';
/*   Import img    */
import img from '@/imgs/index';
/*   Import img    */
const images = [
  img.gallery.gallery1,
  img.gallery.gallery2,
  img.gallery.gallery3,
  img.gallery.gallery4,
  img.gallery.gallery5,
  img.gallery.gallery6,
  img.gallery.gallery7,
  img.gallery.gallery8,
  img.gallery.gallery9,
  img.gallery.gallery10,
  img.gallery.gallery11,
  img.gallery.gallery12,
];
class Carousel extends React.Component {
	constructor() {
		super();
		
		this.state = {
			currentIndex: 0,
			isTransitioning: false,
			goingLeft: false
		};
	}
	
	componentDidMount() {
		window.addEventListener('keyup', this.onKeyUp);
	}
	
	componentWillUnmount() {
		window.removeEventListener('keyup', this.onKeyUp);
	}
	
	onKeyUp = (e) => {
		if (e.keyCode) {
			if (e.keyCode === 39) {
				this.showNextSet();
			} else if (e.keyCode === 37) {
				this.showPrevSet();
			}
		}
	}

	render() {
		const { images } = this.props;
		const { currentIndex, isTransitioning, goingLeft } = this.state;
		
		return (
			<div className="carousel__wrapper">
				<div className="carousel__container">
					{images.map((img, index) => {
						let className = 'carousel__image'
						if (index === currentIndex) className += ' active';
						
						return <img src={img} className={className} key={index} alt="" />;
					})}
				</div>
				<div className="carousel__controls">
					<button className="carousel__button" onClick={this.showPrevSet}><i className="fa fa-arrow-left"></i></button>
					<button className="carousel__button" onClick={this.showNextSet}><i className="fa fa-arrow-right"></i></button>
				</div>
			</div>
		);
	}
	
	showPrevSet = () => {
		const currentIndex = (this.state.currentIndex - 1 + this.props.images.length) % this.props.images.length;
		this.setState({ currentIndex });
	}
	
	showNextSet = () => {
		const currentIndex = (this.state.currentIndex + 1) % this.props.images.length;
		this.setState({ currentIndex });
	}
   myInterval = setInterval(() => {
    this.showPrevSet();
  }, 6000);
}
export const Gallery = () => {
  return(
    <div className='App-gallery'>
      <div className='Item-gallery'>
        <Carousel images={images} />
      </div>
    </div>
  );
}

import React from 'react'

export default function ScrollBarImages(props) {
    const images = () => {
        let arr = []
        arr.push(<div className="carousel-item active">
            <img src={props.images[0]} className="" alt="..."  style={{ height: props.height, width: props.width }}/>
        </div>)
        for (var i = 1; i < props.images.length; i++) {
            arr.push(<div className="carousel-item">
                <img src={props.images[i]} className=" " alt="..." style={{ height: props.height, width: props.width }}/>
            </div>)
        }
        return arr
    }
    return (
        <div>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    {images()}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>



        </div>
    )
}

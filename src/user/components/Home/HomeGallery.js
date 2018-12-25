import React,{Component} from "react";


const photo = [
    { img: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599' },
    { img:"https://source.unsplash.com/Dm-qxdynoEc/800x799" },
    { img: "https://source.unsplash.com/qDkso9nvCg0/600x799"},
    { img:"https://source.unsplash.com/iecJiKe_RNg/600x799" },
    { img: "https://source.unsplash.com/NQSWvyVRIJk/800x599"},
    { img:"https://source.unsplash.com/PpOHJezOalU/800x599"}
  ];

  const PhotoCard = props => {
    const photos = props.photo;
  
    return (
        
          <img src={photos.img} alt="" className="photo-card"/>
  
    );
  };


  class HomeGallery extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Photo: photo
      };
    }
    render() {
      return (
            <div className="photoContainer">
              {this.state.Photo
                .map(card => (
                  <PhotoCard photo={card} />
                ))}
            </div>
      );
    }
  }

  export default HomeGallery;
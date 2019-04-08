import React, { Component } from 'react';
// import logo from './logo.svg';
import images from "./images.json";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import ImageCard from "./components/ImageCard";
import './App.css';

class App extends Component {
  state = {
    images,
    clickedImages: [],
    score: 0
  };

  shuffleImages = array => {
    array.sort((a, b) => 0.5 - Math.random());
    return array;
  };

  imageClick = event => {
    console.log(event.target);
    const currentImage = event.target.alt;
    const alreadyClicked = this.state.clickedImages.indexOf(currentImage) > -1;

    if (alreadyClicked) {
      alert("You Lose!");
      this.setState({
        images: this.shuffleImages(images),
        clickedImages: [],
        score: 0
      });
    } else {
      this.setState(
        {
          images: this.shuffleImages(images),
          clickedImages: this.state.clickedImages.concat(currentImage),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 12) {
            alert("You WIN!");
            this.setState({
              images: this.shuffleImages(images),
              clickedImages: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Header
          title="Clicky"
          desc="A Memory Game."
          rules="Click on an image to earn points, but don't click on any more than once!"
        />
        <ScoreBoard score={this.state.score} />
        <Wrapper>
          {/*  */}
          {this.state.images.map(image => (
            <ImageCard
              imageClick={this.imageClick}
              id={image.id}
              key={image.id}
              image={image.imageURL} />
          ))}
        </Wrapper>
      </div>
    );
  }
}

//   render() {
//     return (
//       <div>
//         <Header
//           title="ReMemory"
//           desc="A React memory game."
//           rules="Click on an image to earn points, but don't click on an image more than once."
//         />
//         <ScoreBoard score={this.state.score} />
//         <Wrapper>
//           {/* maps over this.state.images and renders an ImageCard component for each image object */}
//           {this.state.images.map(image => (
//             <ImageCard
//               imageClick={this.imageClick}
//               id={image.id}
//               key={image.id}
//               image={image.imageURL}
//             />
//           ))}
//         </Wrapper>
//       </div>
//     );
//   }
// }

export default App;

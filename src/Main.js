import React, {Component} from 'react';
import './Main.css'

let corgiImages = [
  {
    id:1,
    link: "https://images1.sw-cdn.net/product/picture/710x528_13759834_8482145_1461180027.jpg",
    description: "LOOK AT THIS FLASH CORGI!"
  },{
    id:2,
    link: "https://s.hdnux.com/photos/54/20/60/11602948/3/1024x1024.jpg",
    description: "THIS CORGI IS A HOTDOG!"
  },{
    id:3,
    link: "https://media.mnn.com/assets/images/2018/02/cora_corgi.PNG.653x0_q80_crop-smart.png",
    description: "SQUISHY FACEEEE!"
  },{
    id:4,
    link: "http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/istock_000020098551_small.jpg?itok=HRH4u1Go&resize=1100x619",
    description: "KING OF THE CANINES"
  },{
    id:5,
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1K7qpwdLLkYKxOQWeVp7LcEG8fg1hNONI7CJiKLr_3K4JK-uZA",
    description: "TENNIS CHAMPION!"
  },{
    id:6,
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfuuft68gyDPRAtAiK-IdGinSJ0SHlQfKMdcifExOiiEnGA2a5Kg",
    description: "ANATOMY OF A GOOD BOY"
  },{
    id:7,
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-JwlLMy0m6md2IAanIDb5XzrkOTONMUaB_IqTHyuxFH-uKha",
    description: "DERP"
  },{
    id:8,
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNrxRWSND28Obd6d4KqZk-mn9PTa44LDINZfTDLH8_a_7U_yNvgw",
    description: "ANCHORMAN FREEZE FRAME!"
  },{
    id:9,
    link: "http://i.imgur.com/avULT6O.jpg",
    description: "NOT ZELDA, THIS IS LINK DOGGO"
  },{
    id:10,
    link: "https://i.kinja-img.com/gawker-media/image/upload/s--LgUGhZL4--/c_fill,f_auto,fl_progressive,g_center,h_675,q_80,w_1200/o8tlchnifvmoxs1hzmto.jpg",
    description: "TREAT ASSASSIN"
  } ]

class Main extends Component {
  render(){
    let corgis = corgiImages.map(function(corgi){
      return(
        <div key={corgi.id} class="corgi_contents">
      <img src={corgi.link}/>
      <p class="description"> {corgi.description} </p>
      </div>
      )
    });
    return(
      <main>
        <ul class="image_class">
          {corgis}
        </ul>
      </main>
    );
  }
}

export default Main;

import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Sonido Pop",
            artist: "Radio ",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://frontend.radiohdvivo.com/sonidopop/live",
            active: true,
        },
      
    ];
}

export default chillHop;


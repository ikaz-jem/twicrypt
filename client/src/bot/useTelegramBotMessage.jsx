
import axios from "axios";



export const useTelegramBotMessage = (message)=>{

const chatId ="@ikazjemtest"
const botToken = "6344685153:AAES_WcrCiP-v3KyjlGejYFbYrDDwOxN3Go"

    const sendMessage = async () => {
        try {
          const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
          });
          console.log('Message sent:', response.data);
        } catch (error) {
          console.error('Error sending message:', error);
        }
      };


      return sendMessage

}

import axios from "axios";



export const useTelegramBotMedia = (data)=>{

const chatId ="@twicrypt"
const botToken = "6610376100:AAFYGutw1S5t2hhmO-IJdSguiBOLfPmGJVA"

    const sendMedia = async () => {
        try {
          const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
            chat_id: chatId,
            caption: data?.message,
            photo:data?.photo,
            parse_mode: 'HTML',
            has_spoiler:false
          });
          // console.log('Message sent:', response.data);
        } catch (error) {
          // console.error('Error sending message:', error);
        }
      };


      return sendMedia

}
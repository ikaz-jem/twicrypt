import Popup from "./Popup";
import toast from 'react-hot-toast';


export const ActivatePopup =   toast.custom(
    (t) => (
      <Popup image={'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/bitcoin-logo-btc-crypto-mining-cryptocurrency-gift-thomas-larch.jpg'} uint256={0} show={true} message={"show.description"} title={"show.title"} showSpinner={true} hash={"transaction is indexing ..."}/>
    ),
    { position: "bottom-right", id: "nc-product-notify", duration: 30000 }
  );
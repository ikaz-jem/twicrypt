
import bsc from '../../../media/icons/bsc.svg'
import bsctestnet from '../../../media/icons/bsctestnet.svg'
import eth from '../../../media/icons/eth.svg'
import eth2 from '../../../media/icons/eth2.svg'
export const  FilterData = ([

  {
  tab:'All Nfts',
  url:"./all-nfts",
  links:[
    {
      title:'Create Listing',
      val:'create-listing',
    },
    {
      title:'Create Listing',
    },
    {
      title:'Create Listing',
    },
  ]
  },

  {
  tab:'Listings on sale',
  url:'./all-listings',
  links:['']
  },

  {
  tab:'My listings',
  url:'my-listings',
  links:['']
  },

  {
  tab:'My-Nfts',
  url:'my-nfts',
  links:[
    {
      title:'My Twicrypt Collection',
      val:''
    },
    {
      title:'Binance Smart Chain',
      val:'bsc',
      icon:bsc
    },
    {
      title:'Ethereum',
      val:'ethereum',
      icon:eth2
    },
    {
      title:'binance Testnet',
      val:'bsctestnet',
      icon:bsctestnet
    },
    {
      title:'goerli',
      val:'goerli',
      icon:eth
    },
  ]
  }

])
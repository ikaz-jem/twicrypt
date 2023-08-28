
export const MEGAMENU_TEMPLATES= [
  {
    
    href: "/",
    name: "Home Page",
    children: [
      {  href: "/", name: "Home  1" },
      {  href: "/home2", name: "Home  2", isNew: true },
      {  href: "/", name: "Header  1" },
      {  href: "/home2", name: "Header  2", isNew: true },
      {  href: "/", name: "Coming Soon" },
    ],
  },
  {
    
    href: "/",
    name: "Shop Pages",
    children: [
      {  href: "/page-collection", name: "Category Page 1" },
      {  href: "/page-collection-2", name: "Category Page 2" },
      {  href: "/product-detail", name: "Product Page 1" },
      {  href: "/product-detail-2", name: "Product Page 2" },
      {  href: "/cart", name: "Cart Page" },
      {  href: "/checkout", name: "Checkout Page" },
    ],
  },
  {
    
    href: "/",
    name: "Other Pages",
    children: [
      {  href: "/checkout", name: "Checkout Page" },
      {  href: "/page-search", name: "Search Page" },
      {  href: "/cart", name: "Cart Page" },
      {  href: "/account", name: "Accout Page" },
      {  href: "/account-my-order", name: "Order Page" },
      {  href: "/subscription", name: "Subscription" },
    ],
  },
  {
    
    href: "/",
    name: "Blog Page",
    children: [
      {  href: "/blog", name: "Blog Page" },
      {  href: "/blog-single", name: "Blog Single" },
      {  href: "/about", name: "About Page" },
      {  href: "/contact", name: "Contact Page" },
      {  href: "/login", name: "Login" },
      {  href: "/signup", name: "Signup" },
    ],
  },
];

const OTHER_PAGE_CHILD = [
  {
    
    href: "/product-detail",
    name: " Smart Contracts",
    type: "dropdown",
    children: [
      {
        
        href: "/product-detail-2",
        name: "Token Contract",
      },
      {
        
        href: "/product-detail-2",
        name: "NFT Contract",
      },
      {
        
        href: "/product-detail",
        name: "Presale Contract",
      },
      {
        
        href: "/product-detail-2",
        name: "Private Sale Contract",
      },
      {
        
        href: "/product-detail-2",
        name: "NFT Sale Contract",
      },
      {
        
        href: "/product-detail-2",
        name: "Whitelist Contract",
      },
      {
        
        href: "/product-detail-2",
        name: "Donation Contract",
      },
    ],
  },
  {
    
    href: "/",
    name: "Contract Cloner",
  },
  {
    
    href: "/home2",
    name: "Create whitelist",
  },
  {
    
    href: "/cart",
    name: "Create NFT contract",
  },
  {
    
    href: "/checkout",
    name: "Create Presale Contract",
  },
  {
    
    href: "/page-search",
    name: "Dev Wallet Checker",
  },
  {
    
    href: "/account",
    name: "Whales Checker",
  },
  
 
  {
    
    href: "/about",
    name: "///",
    type: "dropdown",
    children: [
      {
        
        href: "/about",
        name: "About",
      },
      {
        
        href: "/contact",
        name: "Contact us",
      },
      {
        
        href: "/login",
        name: "Login",
      },
      {
        
        href: "/signup",
        name: "Signup",
      },
      {
        
        href: "/subscription",
        name: "Subscription",
      },
    ],
  },
  {
    
    href: "/blog",
    name: "///",
    type: "dropdown",
    children: [
      {
        
        href: "/blog",
        name: "/////",
      },
      {
        
        href: "/blog-single",
        name: "Blog Single",
      },
    ],
  },
  {
    
    href: "/page-collection",
    name: "////",
    type: "dropdown",
    children: [
      {
        
        href: "/page-collection",
        name: "Category page 1",
      },
      {
        
        href: "/page-collection-2",
        name: "Category page 2",
      },
    ],
  },
];


///navigations single page


export const NAVIGATION_DEMO_2= [
  {
    
    href: "/traders",
    name: "Traders LeaderBoard",
  },
  {
        
    href: "/product-detail-2",
    name: "Donation Contract",
  },
  {
        
    href: "/product-detail-2",
    name: "Donation Contract",
  },
  {
        
    href: "/product-detail-2",
    name: "Donation Contract",
  },
  {
        
    href: "/product-detail-2",
    name: "Donation Contract",
  },
  {
    
    href: "/coins",
    name: "Coins",
  },
  {
    
    href: "/launchpads",
    name: "LaunchPads",
    type: "megaMenu",
    children: MEGAMENU_TEMPLATES,
  },
  {
    
    href: "/page-search",
    name: "Tools",
    type: "dropdown",
    children: OTHER_PAGE_CHILD,
  },
];



/*

prev navigation


[
  {
    
    href: "/page-collection",
    name: "Presale",
  },
  {
    
    href: "/page-collection",
    name: "Audit",
  },
  {
    
    href: "/page-collection-2",
    name: "KYC",
  },

  {
    
    href: "/page-collection-2",
    name: "Tokens",
  },
  {
    
    href: "/page-search",
    name: "LaunchPads",
    type: "megaMenu",
    children: MEGAMENU_TEMPLATES,
  },
  {
    
    href: "/page-search",
    name: "Explore",
    type: "dropdown",
    children: OTHER_PAGE_CHILD,
  },
];


*/

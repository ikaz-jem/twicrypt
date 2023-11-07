



const Footer = ()=>{


return(

    <div className="index__footer footer">
    <div className="footer__panel panel">
      <div className="wrapper container space space--xlarge">
        <h3 className="heading">It’s for you, folks</h3>

        <div className="container container--medium container--center">
          <h4 className="lead">I needed flexible and easily customizable slider and carousel. There wasn't any that would meet my needs. So it came about, Glide.js</h4>
        </div>

        <a href="docs/index-2.html" className="button button--secondary gutter gutter--xsmall">
        

          <span>Make a contribution</span>
        </a>
      </div>
    </div>

    <div className="footer__wrapper wrapper container container--xlarge container--center space space--large">
      <section>
        <p className="text-white font-bold">All rights reserved</p>

        <p className="text-white font-bold">
          Copyright © 2022-{((new Date()).getFullYear())} <a href="https://twicrypt.com/" className="text-blue-500 font-bold hover:text-pink-500">Twicrypt</a>
        </p>
      </section>

      <ul className="list list--inline list--unstyle gutter gutter--small">
        <li className="list__item">
          <a href="http://github.com/jedrzejchalubek">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </li>

        <li className="list__item">
          <a href="http://twitter.com/jedrzejchalubek">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544A8.127 8.127 0 0 1 5.5 16.898a5.778 5.778 0 0 0 4.252-1.189 2.879 2.879 0 0 1-2.684-1.995 2.88 2.88 0 0 0 1.298-.049c-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359a2.877 2.877 0 0 1-.889-3.835 8.153 8.153 0 0 0 5.92 3.001 2.876 2.876 0 0 1 4.895-2.62 5.73 5.73 0 0 0 1.824-.697 2.884 2.884 0 0 1-1.263 1.589 5.73 5.73 0 0 0 1.649-.453 5.765 5.765 0 0 1-1.433 1.489z" />
            </svg>
          </a>
        </li>

        <li className="list__item">
          <a href="http://dribbble.com/jedrzejchalubek">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
              <path d="M11.455 9.985c-1.419.417-3.11.632-5.067.646a5.798 5.798 0 0 1 3.003-3.784 26.112 26.112 0 0 1 2.064 3.138zm.965 1.93a21.04 21.04 0 0 0-.391-.835c-1.622.51-3.561.769-5.804.772L6.217 12c0 1.404.504 2.692 1.34 3.695 1.266-1.901 2.891-3.164 4.863-3.78zm-3.97 4.641a5.73 5.73 0 0 0 5.624.836 22.837 22.837 0 0 0-1.19-4.352c-1.819.542-3.285 1.714-4.434 3.516zm7.075-9.13A5.75 5.75 0 0 0 12 6.217c-.49 0-.964.068-1.418.184a27.176 27.176 0 0 1 2.035 3.172c1.236-.524 2.204-1.24 2.908-2.147zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-5 0a7 7 0 1 0-14.001.001A7 7 0 0 0 19 12zm-5.824-1.349c.157.324.305.651.447.98 1.26-.217 2.641-.204 4.143.042a5.748 5.748 0 0 0-1.354-3.403c-.807 1.005-1.89 1.798-3.236 2.381zm.914 2.132a23.936 23.936 0 0 1 1.119 4.023 5.797 5.797 0 0 0 2.497-3.909c-1.317-.228-2.522-.268-3.616-.114z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>

)

}

export default Footer
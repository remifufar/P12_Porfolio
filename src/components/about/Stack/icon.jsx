import React from 'react';


function Icon({ icon, link, }) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
            <a href={link} >
              <img
                className="svg"
                src={`/assets/img/svg/social/${icon}.svg`}
                alt="lien"
              ></img>
            </a>
            </div>
            
        </section>
    )
}

export default Icon;
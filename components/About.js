import React from 'react'
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos optio magni nostrum repudiandae error porro veritatis tenetur esse qui nobis quia non voluptatem ex dolor iure explicabo dolorum, molestiae corporis?</p>
        </div>
    )
}

export default Rainbow(About)
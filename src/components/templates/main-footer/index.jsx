import React from 'react'

import Grid from '../../utils/grid'

export default props => (
    <div className="bg-theme">
    <footer className="container">
        <div className="row">
            <Grid cols="12-12-12-12-12">
                <img src={ './favicon.ico' } alt=""></img>
            </Grid>
            <Grid cols="12-12-12-12-12">
                © 2018 Copyright:
                <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
            </Grid>
        </div>
    </footer>
    </div>
)
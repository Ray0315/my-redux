import React, { Component } from 'react'
import Bar from '../Bar'

const main = (props) => {
    const {tt} = props
    return (
        <div>
            <Bar />
            {tt}
        </div>
    )
}

export default main

// export default class Menu extends Component
import React, { Component } from 'react';
import Paginate from '../utils/Paginate/paginate'

class ShowTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Paginate 
                    url={'https://jsonbin.org/ray0315/test'}
                    perPage={5} />
            </div>
        )
    }
}

export default ShowTable;
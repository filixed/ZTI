import React, {Component} from 'react';
import Auxil from '../../hoc/Auxilary'

import cssClass from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSide: false
    }

    CloseSide = () =>{
        this.setState({showSide: false})
    }

    SideToggle = () => {
        this.setState( (prevState) => {
            return{showSide: !prevState.showSide}
        } )
    }

    render() {
        return(
            <Auxil>
                <Toolbar toggleClicked={this.SideToggle} />
                <SideDrawer open={this.state.showSide} closed={this.CloseSide} />
                <main className={cssClass.Content}>
                    {this.props.children}
                </main>
            </Auxil>
        )
    }
}


export default Layout;
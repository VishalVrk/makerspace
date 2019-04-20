import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideDrawer';
//import logo from '../../resources/images/logo.png'
export default class Header extends Component {
  
  state={
    drawerOpen:false,
    headerShow:false,
    shadow:'none'

  }

  toggleDrawer=(value)=>{
    this.setState({
      drawerOpen:value
    })
  }

  handleScroll=()=>{
    console.log('user scrolling')
    if(window.scrollY>0){
      this.setState({
        headerShow:true,
        shadow:''
      })
    }
    else{
      this.setState({
        headerShow:false,
        shadow:'none'
      })
    }
  }


  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll);
  }

  render() {
    return (
      <div>
        <AppBar 
        position= "fixed"
        style={{
                backgroundColor:this.state.headerShow?'#2f2f2f':'transparent',
                boxShadow:this.state.shadow,
                height:55,
                padding:"10px"
        }}
        >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">
      {/*<img src={logo} style={{width: 75, height: 50, paddingTop:"5px",paddingBottom:"5.5px",cursor:"pointer"}} alt="Logo" />*/}
            <h4 className="Maker-logo"
            style={{
              paddingBottom:'30px',
              fontSize:'25px'
            }}
            >Makers Tribe</h4>
            </div>
          </div>

          <IconButton
          aria-label="Menu"
          color="inherit"
          onClick={()=> this.toggleDrawer(true)}
          >
            <MenuIcon 
            className="Menu-icon"
            style={{paddingBottom:"30px"}}/>
          </IconButton>
          <SideDrawer
          open={this.state.drawerOpen}
          onClose={(value)=>{
                this.toggleDrawer(value)
          }}
          onOpen={(value)=>{
            this.toggleDrawer(value)
          }}


          />
        </Toolbar>
        </AppBar>
      </div>
    )
  }
}

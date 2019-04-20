import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const SideDrawer=(props)=> {
  return (
    <SwipeableDrawer
    anchor="right"
    open={props.open}
    onClose={()=>props.onClose(false) }
    onOpen={()=>props.onOpen(true)}
    disableBackdropTransition
    >
    <List component="nav" style={{width:250}}>
    <ListItem button onClick={()=>{console.log('Featured')}}>
      Home
      </ListItem>
      <ListItem button onClick={()=>{console.log('Featured')}}>
      About
      </ListItem>
      <ListItem button onClick={()=>{console.log('Featured')}}>
      Products
      </ListItem>
      <ListItem button onClick={()=>{console.log('Featured')}}>
      Docs
      </ListItem>
      <ListItem button onClick={()=>{console.log('Featured')}}>
      Contact 
      </ListItem>
    </List>
    </SwipeableDrawer>
  )
}
export default SideDrawer;
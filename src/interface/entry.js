/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Route } from 'react-router';
import { ToastContainer } from 'react-toastify';
/* ------------------------- External Dependencies -------------------------- */
import DialogFactory from 'containers/dialog/DialogFactory'
import DrawerFactory from 'containers/drawer/DrawerFactory'
import MenuDrawer from 'components/menus/MenuDrawer'
import Block from 'atoms/Block'
import {
  EthersInfuraConnect,
  EthersGanacheConnect,
} from 'containers'
 
import DashboardEntry from './Dashboard'

// Toast Settings
import toast from 'settings/toast';


const EthereumConnection = props => ({
  ganache: <EthersGanacheConnect/>,
  infura: <EthersInfuraConnect chain="rinkeby" />
}['ganache'])



export default () =>
<div>
  <Block z={[500]} >
    <EthereumConnection/>
    <DrawerFactory>
        <MenuDrawer/>
      </DrawerFactory>
    <DialogFactory/>
    <ToastContainer {...toast}/>
  </Block>
  <Block z={[300]} o={0.999999} >
      <Route path="/" component={DashboardEntry} />
  </Block>
</div>

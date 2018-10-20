/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Switch } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import { dashboard as dashboardRoutes } from 'routes'
import { 
  Route, Absolute
 } from 'atomic'
/*--- : Zones ---*/
import DashboardHeader from 'layout/zones/dashboard/DashboardHeader'
import DashboardMain from 'layout/zones/dashboard/DashboardMain'
import DashboardAside from 'layout/zones/dashboard/DashboardAside'
import DashboardFooter from 'layout/zones/dashboard/DashboardFooter'

/*--- Panels ---*/
import DashboardMainPanelLeft from 'layout/panels/dashboard/DashboardMainPanelLeft'
import DashboardMainPanelRight from 'layout/panels/dashboard/DashboardMainPanelRight'
import DashboardMainPanelContent from 'layout/panels/dashboard/DashboardMainPanelContent'

// Header
import DashboardHeaderRoutes  from 'routes/dashboard/DashboardHeaderRoutes'

// Aside
import DashboardAsideRoutes from 'routes/dashboard/DashboardAsideRoutes'
import DashboardAsideSmallRoutes from 'routes/dashboard/DashboardAsideSmallRoutes'

const HeaderStates = {
  small: [
    <DashboardHeaderRoutes/>
  ],
  normal: [
    <DashboardHeaderRoutes/>
  ],
  large: [
    <DashboardHeaderRoutes/>
  ]
}

const FooterExample = ()=>
<Absolute left right top bottom bg='blue'>
  Footer Enabled
</Absolute>

const FooterStates = {
  small: [
    <FooterExample/>,
  ],
  normal: [
    <FooterExample/>,
  ],
  large: [
    <FooterExample/>,
  ]
}

const AsideStates = {
  small: [
    <DashboardAsideSmallRoutes/>,
  ],
  normal: [
    <DashboardAsideRoutes/>,
  ],
  large: [
    <DashboardAsideRoutes/>,
  ]
}

/* ---------------------------- Module Package ------------------------------ */
export default  ({
    regions, zones,
    aside, footer, header, main,
    ...props
}) => 
<Absolute left right top bottom of='hidden' >
  {/* Header : Zone */}
  {!zones.header ? null: (
    <DashboardHeader {...header.layout} >
      { HeaderStates[header.status.size] || null }
    </DashboardHeader>
  )}

  {/* Main : Zone */}
  {!zones.main ? null: (
    <DashboardMain {...main.layout}>
      {!zones.panelLeft 
        ? null 
        :<DashboardMainPanelLeft {...main.regions.panelLeft.layout}>
          <PerfectScrollbar>
          { dashboardRoutes.map(route=> !route.panelLeft ? null : <Route strict path={route.path} component={route.panelLeft} />)}
          </PerfectScrollbar> 
        </DashboardMainPanelLeft>}
      {!zones.mainContent 
        ? null 
        :<DashboardMainPanelContent {...main.regions.content.layout}>
          <PerfectScrollbar>
            <Switch>
              { dashboardRoutes.map(route=> !route.main ? null : <Route strict path={route.path} component={route.main} {...route.props} />)}
            </Switch>
          </PerfectScrollbar> 
        </DashboardMainPanelContent>}
      {!zones.panelRight 
        ? null 
        :<DashboardMainPanelRight {...main.regions.panelRight.layout}>
          <PerfectScrollbar>
          { dashboardRoutes.map(route=> !route.panelRight ? null : <Route strict path={route.path} component={route.panelRight} />)}
          </PerfectScrollbar> 
        </DashboardMainPanelRight>}
    </DashboardMain>
  )}

  {/* Aside : Zone */}
  {!zones.aside ? null :(
    <DashboardAside {...aside.layout}>
      <PerfectScrollbar>
        { AsideStates[aside.status.size] || null }
      </PerfectScrollbar>
    </DashboardAside>
  )}

  {/* Footer : Zone */}
  {!zones.footer ? null :(
    <DashboardFooter {...footer.layout}>
      <PerfectScrollbar >
        { FooterStates[aside.status.size] || null }
      </PerfectScrollbar>
    </DashboardFooter>
  )}
</Absolute>
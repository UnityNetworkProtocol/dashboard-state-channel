import { svg } from 'assets'

export default [
{
  title: 'Dashboard',
  to: '/',
  svg: svg.commerceOnlineBanking,
  icon: {
    svgColor: 'white'
  },
  styled: {
    pl: 15,
  },
},
{
  title: 'State Channel',
  to: '/state-channels',
  svg: svg.management,
  icon: {
    svgColor: 'white'
  },
  styled: {
    pl: 15,
  },
},
{
  title: 'Transfers',
  to: '/transfers',
  styled: {
    pl: 15,
  },
  svg: svg.commerceInvoice,
  icon: {
    svgColor: 'white'
  },
},
{
  title: 'Tokens Staked',
  to: '/tokens',
  styled: {
    pl: 15,
  },
  svg: svg.conversion,
  icon: {
    svgColor: 'white'
  },
},
{
  title: 'Settings',
  to: '/settings',
  styled: {
    pl: 15,
  },
  svg: svg.cog,
  icon: {
    svgColor: 'white'
  },
},
]
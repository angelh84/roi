import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Product from '@/components/Product'
import Industry from '@/components/Industry'
import SalesMethod from '@/components/SalesMethod'
import Chargebacks from '@/components/Chargebacks'
import AverageTicket from '@/components/AverageTicket'
import ChargebackManagement from '@/components/ChargebackManagement'
import ChargebackWinsInHouse from '@/components/ChargebackWinsInHouse'
import ChargebackWinsThirdParty from '@/components/ChargebackWinsThirdParty'
import ThirdParty from '@/components/ThirdParty'
import Crm from '@/components/Crm'
import CrmOther from '@/components/CrmOther'
import Contact from '@/components/Contact'
import Calculating from '@/components/Calculating'
import Results from '@/components/Results'
import v404 from '@/components/v404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/industry',
      name: 'industry',
      component: Industry
    },
    {
      path: '/sales-method',
      name: 'sales-method',
      component: SalesMethod
    },
    {
      path: '/chargebacks',
      name: 'chargebacks',
      component: Chargebacks
    },
    {
      path: '/average-ticket',
      name: 'average-ticket',
      component: AverageTicket
    },
    {
      path: '/chargeback-management',
      name: 'chargeback-management',
      component: ChargebackManagement
    },
    {
      path: '/chargeback-wins-in-house',
      name: 'chargeback-wins-in-house',
      component: ChargebackWinsInHouse
    },
    {
      path: '/chargeback-wins-third-party',
      name: 'chargeback-wins-third-party',
      component: ChargebackWinsThirdParty
    },
    {
      path: '/third-party',
      name: 'third-party',
      component: ThirdParty
    },
    {
      path: '/crm',
      name: 'crm',
      component: Crm
    },
    {
      path: '/crm-other',
      name: 'crm-other',
      component: CrmOther
    },
    {
      path: '/contact',
      name: 'conctact',
      component: Contact
    },
    {
      path: '/calculating',
      name: 'calculating',
      component: Calculating
    },
    {
      path: '/results',
      name: 'results',
      component: Results
    },
    {
      path: '/404',
      name: 'v404',
      component: v404
    },
    {
      path: '*',
      redirect: '/404'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition)
        } else {
          resolve({ x: 0, y: 0 })
        }
      }, 250)
    })
  }
})

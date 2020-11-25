import Vue from 'vue'
import Router from 'vue-router'

import Home from '/home/iai/workOcen3/25112020/1149/src/views/Home'

import ReceiptFine from '/home/iai/workOcen3/25112020/1149/src/views/ReceiptFine'
import ReceiptReport from '/home/iai/workOcen3/25112020/1149/src/views/ReceiptReport'
import ReceiptLK from '/home/iai/workOcen3/25112020/1149/src/views/ReceiptLK'

// Report
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/receiptLK',
      component: ReceiptLK
    },
    {
      path: '/receiptFine',
      component: ReceiptFine
    },
    {
      path: '/receiptReport',
      component: ReceiptReport
    }
  ]
})
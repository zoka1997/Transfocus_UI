/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
// import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
// import {
//   ListsWidget2,
//   ListsWidget3,
//   ListsWidget4,
//   ListsWidget6,
//   TablesWidget5,
//   TablesWidget10,
//   MixedWidget8,
//   CardsWidget7,
//   CardsWidget17,
//   CardsWidget20,
//   ListsWidget26,
//   EngageWidget10,
// } from '../../../_metronic/partials/widgets'


// THIS PAGE IS MAIN PAGE OR HOME PAGE OF WEBSITE
// const DashboardPage: FC = () => (
//   <>
//     <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
     
//     </div>
//   </>
// )

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      {/* <DashboardPage /> */}
    </>
  )
}

export {DashboardWrapper}


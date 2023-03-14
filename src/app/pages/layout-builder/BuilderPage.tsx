/* eslint-disable jsx-a11y/anchor-is-valid */
// import clsx from 'clsx'
import React from 'react'
import { EnquiryGrid } from '../../components/EnquiryGrid'
//import { getUserById } from '../../modules/apps/user-management/users-list/core/_requests'
// import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
// import {getLayoutFromLocalStorage, ILayout, LayoutSetup} from '../../../_metronic/layout/core'

const BuilderPage: React.FC = () => {
  const text1 = {
    color: 'darkgrey',
    paddingLeft: '15px',
    paddingTop: '10px',
  }

  const faSolid = {
    paddingRight: '8px',
  }
  return (
    <>
      <div className='card mb-10 pb-20'>
        <h3 style={text1}>
          <i style={faSolid} className='fa-solid fa-shuffle fs-2' /> Enquiry V2
        </h3>
        <EnquiryGrid />
      </div>

      {/* <div className='card mb-10 pb-20'>
        <h3 style={text1}>Job Details</h3>
      </div> */}
    </>
  )
}

export {BuilderPage}

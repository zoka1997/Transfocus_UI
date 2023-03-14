import * as React from 'react'
import {
  DataGrid,
  Selection,
  FilterRow,
  HeaderFilter,
  GroupPanel,
  Scrolling,
  // Editing,
  Grouping,
  Column,
  ColumnChooser,
  StateStoring,
} from 'devextreme-react/data-grid'
import {useAPI} from '../hooks/useAPI'
import '../../app/components/EnquiryGrid.css'
import {ReactNode} from 'react'
import { Button } from 'devextreme-react'

export interface IEnquiryGridProps {}

export function EnquiryGrid(props: IEnquiryGridProps) {
  const API_URL = 'https://localhost:7191/api/EnquiryView'
  // console.log(enquiry ,"enquiry")
  // Style DataGrid
  const dGrid = {
    padding: '15px',
  }
  // Style DataGrid End

  const {data, error, loading} = useAPI({
    API_URL,
    method: 'string',
    headers: {'Content-Type': 'application/json'},
  })

  if (loading) {
    return <h6>Loading Enquiry data</h6>
  }
  //console.log(data)
  if (error) {
    return <h6>{error}</h6>
  }

  const statusJobHelper = (container:any,options:any,settings: any): ReactNode => {
    // debugger
    //console.log(container)
    const JobData = options.data
    if (settings.IsCustomer) {
      return (
        "<label class='jobleg-status dxml-width " +
        JobData.JobStatusColor +
        "'>" +
        JobData.JobStatus +
        '</label>'
      )
    } else {
      return (
        "<a type='button' onclick='OptimizedEnquiryModule.ShowJobLegs(this)' data-id='" +
        JobData.JobID +
        "' data-legcount='" +
        JobData.JobLegCount +
        "' class='jobleg-status  dxml-width  " +
        JobData.JobStatusColor +
        "'>" +
        JobData.JobStatus +
        '</a>'
      )
+
      (
        '</br><small>Completed ' +
          JobData.FinishedJobLegCount +
          ' / ' +
          JobData.JobLegCount +
          '</small>'
      )
    }

    // TODO finish
    if (JobData.JobStatusID === 'CAN') {
      //$("</br><small>" + jobData.CancelReason + "</small>").appendTo(container);
    }
  }

  const jobPriceHelper = (data: {data: {jobId: string; jobPrice: string}}) => {
    //console.log(data)
    const jobPrice = parseFloat(data.data.jobPrice).toFixed(2)
    return (
      <label
        id={`btn-total-profit-${data.data.jobId}`}
        className='trip-status dxml-width btn info'
      >
        <Button className='custom-jobPrice-btn'>${jobPrice}</Button>
      </label>
    )
  }

  return (
    <div style={dGrid} id='enquiry-data' className='enquiry-data'>
      <DataGrid
        dataSource={data}
        keyExpr='jobId'
        showBorders={true}
        height={300}
        remoteOperations={true}
        allowColumnResizing={true}
      >
        <Selection mode='multiple' />

        <StateStoring enabled={true} type='localStorage' storageKey='Id' />
        <FilterRow visible={true} />
        <HeaderFilter visible={true} />
        <GroupPanel visible={false} />
        <Scrolling mode='virtual' />

        <ColumnChooser enabled={true} mode='dragAndDrop' />

        {/* <Editing
             mode="popup"
             allowAdding={true}
             allowDeleting={true}
             allowUpdating={true}
         /> */}

        <Grouping autoExpandAll={false} />

        <Column dataField='#' caption='#' visible={true} />

        <Column
          dataField='jobNumber'
          caption='Job No'
          visible={true}
          minWidth={40}
          allowHeaderFiltering={false}
        />

        <Column dataField='jobDate' caption='Job Date' visible={true} />

        <Column dataField='customer' caption='Customer' visible={true} />

        <Column dataField='receiverName' caption='Receiver Name' visible={true} />

        <Column dataField='productsDetail' caption='Products Detail' visible={true} />

        <Column dataField='unitRates' caption='Unit Rates' visible={true} />

        <Column
          dataField='jobPrice'
          caption='Job Price'
          visible={true}
          minWidth={20}
          allowFiltering={false}
          cellRender={jobPriceHelper}
        />

        <Column dataField='jobPriceStatus' caption='Status Price' visible={true} minWidth={40} />

        <Column
          dataField='jobStatus'
          caption='Status Job'
          visible={true}
          minWidth={40}
          calculateFilterExpression={{
            function(value: any, selectedFilterOperations: any, target: any) {
              if (target === 'filterRow') {
                return ['JobStatus', selectedFilterOperations, value]
              } else {
                return ['JobStatusID', selectedFilterOperations, value]
              }
            },
          }}
          // cellTemplate={statusJobHelper}
        />

        <Column dataField='isPODRequired' caption='POD Status' visible={true} />

        <Column dataField='signedDetails' caption='Signed Details' visible={true} />

        <Column dataField='invoiceNo' caption='Invoice' visible={true} />
        {/* Table with visible false start */}
        <Column dataField='jobDateEntered' caption='Job Date Entered' visible={false} />

        <Column dataField='jobEnteredBy' caption='Job Entered By' visible={false} />

        <Column dataField='customerAccount' caption='Customer Account' visible={false} />

        <Column dataField='customerEntity' caption='Customer Entity' visible={false} />

        <Column dataField='senderNote' caption='Sender Note' visible={false} />

        <Column dataField='senderPhone' caption='Sender Phone' visible={false} />

        <Column dataField='senderGroup' caption='Sender Group' visible={false} />

        <Column dataField='receiverNote' caption='Reciver Note' visible={false} />

        <Column dataField='receiverPhone' caption='Reciver Phone' visible={false} />

        <Column dataField='receiverGroup' caption='Reciver Group' visible={false} />

        <Column dataField='specialInstructions' caption='Special Instructions' visible={false} />

        <Column dataField='jobDescription' caption='Job Description' visible={false} />

        <Column dataField='conref' caption='Con Ref' visible={false} />

        <Column dataField='cusref' caption='Cus Ref' visible={false} />

        <Column dataField='po' caption='PO' visible={false} />

        <Column dataField='reference4' caption='Ref 4' visible={false} />

        <Column dataField='reference5' caption='Ref 5' visible={false} />

        <Column dataField='reference6' caption='Ref 6' visible={false} />

        <Column dataField='reference7' caption='Ref 7' visible={false} />

        <Column dataField='reference8' caption='Ref 8' visible={false} />

        <Column dataField='reference9' caption='Ref 9' visible={false} />

        <Column dataField='reference10' caption='Ref 10' visible={false} />

        <Column dataField='deliver' caption='Deliver' visible={false} />

        <Column dataField='operations' caption='Operations' visible={false} />

        <Column dataField='pricingType' caption='Pricing Status' visible={false} />

        <Column dataField='jobNotes' caption='Job Notes' visible={false} />

        <Column dataField='pricingNotes' caption='Pricing Notes' visible={false} />

        <Column dataField='jobLegBottleTrack' caption='Bottle Tracking' visible={false} />

        <Column dataField='jobLegCustomActivity' caption='Custom Activity' visible={false} />

        <Column dataField='podphotoCount' caption='Photo POD' visible={false} />

        <Column dataField='invoiceDate' caption='Invoice Date' visible={false} />

        <Column dataField='jobContact' caption='Job Contact' visible={false} />

        <Column dataField='shipping Units' caption='Shipping Units' visible={false} />

        <Column dataField='jobDepot' caption='Job Depot' visible={false} />

        <Column dataField='jobReady' caption='Job Ready' visible={false} />

        <Column dataField='jobRequired' caption='Job Required' visible={false} />

        <Column dataField='jobLegCount' caption='Job Leg Count' visible={false} />

        <Column dataField='activePODs' caption='PODs' visible={false} />

        <Column dataField='jobProductOwner' caption='Job Product Owner' visible={false} />

        <Column dataField='priceCalculated' caption='Price Calculated' visible={false} />

        <Column dataField='isCustomerPODRequired' caption='POD Requirements' visible={false} />

        <Column dataField='jobBookingType' caption='Job Booking Type' visible={false} />

        <Column dataField='JobWeightType' caption='Job Wgt Type' visible={false} />

        <Column dataField='jobQuantity' caption='Job Qty' visible={false} />

        <Column dataField='jobPallets' caption='Job Pal' visible={false} />

        <Column dataField='jobWeight' caption='Job Wgt' visible={false} />

        <Column dataField='jobCubicWeight' caption='Job Cub Wgt' visible={false} />

        <Column dataField='jobCubic' caption='Job Cubic' visible={false} />

        <Column dataField='jobSpace' caption='Job Space' visible={false} />

        <Column dataField='jobKms' caption='Job Kms' visible={false} />

        <Column dataField='jobHours' caption='Job Hours' visible={false} />

        <Column dataField='jobWaiting' caption='Job Waiting' visible={false} />

        <Column dataField='jobDrops' caption='Job Drops' visible={false} />

        <Column dataField='jobCost' caption='Job Cost' visible={false} />

        <Column dataField='jobExpense' caption='Job Expense' visible={false} />

        <Column dataField='JobProfit' caption='Job Profit' visible={false} />

        <Column dataField='jobProfitPercentage' caption='Job Profit %' visible={false} />

        <Column dataField='senderName' caption='Sender Name' visible={false} />

        <Column dataField='senderLocation' caption='Sender Location' visible={false} />

        <Column dataField='senderAddress' caption='Sender Address' visible={false} />

        <Column dataField='senderSuburb' caption='Sender Suburb' visible={false} />

        <Column dataField='senderState' caption='Sender State' visible={false} />

        <Column dataField='senderPostcode' caption='Sender Postcode' visible={false} />

        <Column dataField='senderPZone' caption='Sender P-Zone' visible={false} />

        <Column dataField='senderAZone' caption='Sender A-Zone' visible={false} />

        <Column dataField='senderCZone' caption='Sender C-Zone' visible={false} />

        <Column dataField='senderDZone' caption='Sender D-Zone' visible={false} />

        <Column dataField='reciverLocation' caption='Reciver Location' visible={false} />

        <Column dataField='reciverAddress' caption='Reciver Address' visible={false} />

        <Column dataField='reciverSuburb' caption='Reciver Suburb' visible={false} />

        <Column dataField='reciverState' caption='Reciver State' visible={false} />

        <Column dataField='reciverPostCode' caption='Reciver PostCode' visible={false} />

        <Column dataField='reciverPZone' caption='Reciver P-Zone' visible={false} />

        <Column dataField='reciverAZone' caption='Reciver A-Zone' visible={false} />

        <Column dataField='reciverCZone' caption='Reciver C-Zone' visible={false} />

        <Column dataField='reciverDZone' caption='Reciver D-Zone' visible={false} />

        <Column dataField='trackingCode' caption='Tracking Code' visible={false} />

        <Column dataField='products' caption='Products' visible={false} />

        <Column dataField='productName' caption='Product Name' visible={false} />

        <Column dataField='productDescription' caption='Product Description' visible={false} />

        <Column
          dataField='customerInvoicingFrequency'
          caption='Customer Invoicing Frequency'
          visible={false}
        />

        <Column dataField='firstLegManifestNumber' caption='First Leg Manifest' visible={false} />

        <Column dataField='ID' caption='Editable Job Legs' visible={false} />
      </DataGrid>
    </div>
  )
}

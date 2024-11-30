import React from 'react'
import AddQuotationFormModel from './AddQuotationFormModel'
import SupplyItem from './SupplyItem'


export default function Supplies(props) {
    let [supplies,setSupplies]= React.useState([])
    let [quotationSupply,setQuotationSupply]= React.useState({})
    React.useEffect(()=>{
        setSupplies(props.supplies)
    },props.supplies)
    const suppliesElement=supplies.map(supply=>{
        let key=Math.random()*1000+""
        return(
            <SupplyItem {...supply} key={key} setQuotationSupply={setQuotationSupply}/>
        )
    })
    return (
        <div className='' style={{margin:'70px'}}>
            <AddQuotationFormModel supply={quotationSupply}/>
            <h2>Supplies</h2><hr/>
            <p>Following are the Supplies</p>
            <div className='d-flex' >
                <div className='row'>
                    {
                        suppliesElement
                    }
                </div>
                
            </div>
        </div>
    )
}

import React from 'react'
import AddSupplyFormModel from './AddSupplyFormModel'
import SupplyItem from './SupplyItem'
import Services from '../../services/Service'


export default function Supplies(props) {
    let [supply,setSupply]= React.useState({})
    let [update,setUpdate]= React.useState(false)
    
    let supplies=props.supplies
    const deleteSupply=(id)=>{
        Services.deleteSupply(id,props.setSupplies)        
    }
    const suppliesElement=supplies.map(supply=>{
        let key=Math.random()*1000+""
        console.log("in",supply)
        return(
            <SupplyItem {...supply} key={key} setSupply={setSupply} setUpdate={setUpdate} deleteSupply={deleteSupply}/>
        )
    })

    return (
        <div className='' style={{margin:'70px'}}>
            <AddSupplyFormModel setSupplies={props.setSupplies} supply={supply} update={update} setUpdate={setUpdate}/>
            <h2>Supplies</h2>
            <p>Following are the supplies</p><hr/>
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

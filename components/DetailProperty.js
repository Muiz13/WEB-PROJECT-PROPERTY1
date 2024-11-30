import React, { useRef } from 'react'
import { useParams } from 'react-router';
import Services from '../Services/Services'
import emailjs from '@emailjs/browser';
import ScrollBarImages from './ScrollBarImages';
import addCommas from "./Commas"


export default function DetailProperty() {
  const { id } = useParams();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_iic14rt', 'template_701kagm_quote', form.current, 'zvfCeLwjmCvgC8uem')
      .then((result) => {
        e.target.reset()
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  let [property, setProperty] = React.useState({ file: [] })
  React.useEffect(() => {
    Services.getProperty(id, setProperty)
  }, [])

  const capt = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  console.log(property)
  const dimensionsTable = () => {
    return <table className='table table-striped  text-center py-3'>
      <thead>
        <tr className='text-center'>
          <th colSpan='2'>Dimensions - feet</th>
        </tr>
        <tr><th>Length</th><th>Width</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>{property.length}</td><td>{property.width}</td>
        </tr>
      </tbody>
    </table>
  }
  const detailsTable = () => {
    return <div className='py-3'>
      <h5>Specifications</h5><hr />
      <table className='table table-striped table-hover  my-1'>
        <tbody>
          <tr><th>Property</th><td>{capt(property.category) == 'House' ? 'Home' : capt(property.category)}</td></tr>
          <tr><th>Type</th><td>{capt(property.propertyType)}</td></tr>
          {property.category == "house" ? <tr><th>Specific</th><td>{capt(property.propertySubType)}</td></tr> : ''}
          <tr><th>Size</th><td>{property.size} Marla</td></tr>
          {property.noBedrooms ? <tr><th>Bedrooms</th><td>{property.noBedrooms}</td></tr> : ''}
          <tr><th>For</th><td>{capt(property.propertyTypeRentSale)}</td></tr>
          <tr><th>Price</th><td>{capt(addCommas(property.price))} PKR</td></tr>
          <tr><th>Address</th><td>{capt(property.scheme) + ", " + capt(property.city)} </td></tr>
          {property.link ? <tr><th>Location</th><td><a target="_blank" href={property.link} className='btn btn-outline-primary btn-sm'>Location</a>
          </td></tr> : ''}

        </tbody>
      </table>
    </div>
  }

  const detatilsBody = () => {
    let comp = '';
    let { category } = property
    if (category == 'house' || category == 'plot') {
      comp = <div>
        {dimensionsTable()}
        {detailsTable()}
        <div className='py-4 text-justify'>
          <h5>Description:</h5>
          <pre>{property.description}</pre>
          <hr />
        </div>
      </div>
    } else if (category == "project") {
      comp = <div>
        <div className='py-3'>
          <h5>Type</h5>
          <pre>{capt(property.category)} </pre><hr />
        </div>
        <div className='py-3'>
          <h5>Size</h5>
          <pre>{property.size} Marla</pre><hr />
        </div>
        <div className='py-3'>
          <h5>Address</h5>
          <pre>{property.scheme + ", " + property.city}</pre>
          {property.link ? <a target="_blank" href={property.link} className='btn btn-primary btn-sm'>Location</a> : ''}<hr />
        </div>
        <div className='py-3 text-justify'>
          <h5>Description</h5>
          <pre>{property.description}</pre><hr />
        </div>
      </div>

    }
    return comp
  }



  const styleOpacity = {
    opacity: "0.8"
  }
  console.log("width", window.innerWidth)

  return (
    <div className='my-5'>
      <div className='d-flex justify-content-between'>
        <div className='container col-8'>
          <div className='row'>
            <div className='card rounded py-4 px-5'>
              <div className='mb-1'>
                <h2>{property.title}</h2>
                <div className='d-flex justify-content-between'>
                  <h5>{property.scheme + " " + property.city}</h5>
                  {property.price ? <h5 className='text-primary'>Price: {addCommas(property.price)} PKR</h5> : ''}
                </div>
              </div>
              <div className='d-flex'>
                <div >
                  {/* {image()} */}
                  <ScrollBarImages images={property.file} height={window.innerWidth <= 700 ? '300px' : '500px'} width={window.innerWidth <= 700 ? '45vh' : '790px'} />
                </div>
              </div>

              <div className='my-5'>
                <hr />
                <h3>Details</h3>
                {detatilsBody()}
              </div>
            </div>
          </div>
        </div>






        <div className='col-3' style={{ marginRight: "10px" }}>
          <section className='' style={{ background: "#f4f4f4", padding: '30px' }}>
            <div className='mb-3'>
              <h5 className='text-info'>HOW WE CAN HELP YOU?</h5>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <input type="text" className="form-control" name="user_name" aria-describedby="nameHelp" placeholder='Name *' required style={styleOpacity} />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" name="user_email" aria-describedby="emailHelp" placeholder='Email Address *' required style={styleOpacity} />
                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control" name="user_phone_number" placeholder='Phone' required style={styleOpacity} />
              </div>
              <div className="mb-3">
                <textarea type="text" name="message" className="form-control" rows="5" placeholder='Message *' required style={styleOpacity}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Send Message</button>
            </form>
          </section>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Message Sent!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h5>Thank you for contacting us. We will responde at our earliest</h5>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function AddQuotationFormModel(props) {
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
    console.log(props)
    const bottomMarginStyle = {
        marginBottom: "5px"
    }
    const styleOpacity = {
        opacity: "0.8"
    }
    return (
        <div>
            <div className="modal fade" id="quotationFormModel" tabIndex="-1" aria-labelledby="quotationFormModelLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title text-center" id="quotationFormModelLabel"> Create Quotation</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='m-1'>
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="form-group mb-3">
                                        <input type="text" className="form-control text-center" name="supply_item_name" value={`Quotation for ${props.supply.title}`}  />
                                    </div>

                                    <div className="form-group mb-3">
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
                                    <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#confirmationModal">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="confirmationModal" tabindex="-1" aria-labelledby="confirmationModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="confirmationModalLabel">Message Sent!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h5>Thank you for sending us your quotation. We will responde at our earliest</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



























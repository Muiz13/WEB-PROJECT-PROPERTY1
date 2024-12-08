import React from 'react'

export default function AddQuotationFormModel(props) {
    const styleOpacity = {
        opacity: "0.8"
    };

    return (
        <div className="modal fade" id="quotationFormModel" tabIndex="-1" aria-labelledby="quotationFormModelLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title text-center" id="quotationFormModelLabel">Create Quotation</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='m-1'>
                            <form action="https://formspree.io/f/mgvebeqa" method="POST">
                                <div className="form-group mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control text-center" 
                                        name="supply_item_name" 
                                        value={`Quotation for ${props.supply.title}`} 
                                        readOnly
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="name" 
                                        placeholder='Name *' 
                                        required 
                                        style={styleOpacity} 
                                    />
                                </div>
                                <div className="mb-3">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        name="email" 
                                        placeholder='Email Address *' 
                                        required 
                                        style={styleOpacity} 
                                    />
                                </div>
                                <div className="mb-3">
                                    <input 
                                        type="tel" 
                                        className="form-control" 
                                        name="phone" 
                                        placeholder='Phone' 
                                        required 
                                        style={styleOpacity} 
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea 
                                        name="message" 
                                        className="form-control" 
                                        rows="5" 
                                        placeholder='Message *' 
                                        required 
                                        style={styleOpacity}
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#confirmationModal"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Confirmation Modal */}
            <div className="modal fade" id="confirmationModal" tabIndex="-1" aria-labelledby="confirmationModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="confirmationModalLabel">Message Sent!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h5>Thank you for sending us your quotation. We will respond at our earliest</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



























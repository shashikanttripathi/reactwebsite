import React from "react"
import "./Contact.css"

const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <h1>Some awesome</h1>
                            <h2> things in the world</h2>
                            <p>feel free to ask anything about the transportation</p>

                        </div>

                        <form className="col-5">
                            <h1>Contact us</h1>
                            <p>feel free to ask</p>
                            <div class="form-group">
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Email address" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Phone no" />
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Query" rows="3"></textarea>
                            </div>
                            <div className="buttonsubmit">
                                <button type="submit" class="btn btn-primary mb-2">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
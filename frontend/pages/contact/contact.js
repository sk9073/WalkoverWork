import Layout from '../../components/Layout';
import Link from 'next/link';
import ButtonMailto from './mailto.js';

const ContactPage = () => {
    return (
        <Layout>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Frequently Asked Questions :</h2>
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="accordion-item">
                                    <h4 className="accordion-header" id="panelsStayOpen-headingOne" >
                                    <button type="button" class="btn btn-primary btn-lg btn-block" className="accordion-button" style={{padding :"5px"}} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        How to publish the report?
                                    </button>
                                    </h4>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button type="button" class="btn btn-primary btn-lg btn-block" className="accordion-button" style={{padding :"5px"}} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        How to comment on a Report?
                                    </button>
                                    </h4>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button type="button" class="btn btn-primary btn-lg btn-block" className="accordion-button" style={{padding :"5px"}} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        How to Edit the Report?
                                    </button>
                                    </h4>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Report an Issue to the Sys Admin :</h2>
                            <button type="button" class="btn btn-outline-primary" onClick={() => window.location = 'mailto:yourmail@gmail.com'}>Contact Me</button>
                        </div>
                    </div>                    
                </div>
        </Layout>
    );
};

export default ContactPage;

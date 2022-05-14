import Layout from '../../components/Layout';
import Link from 'next/link';


const AboutPage = () => {
    return (
        <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 pt-5 pb-5">
                            <h1>Ethical Guidelines</h1>
                            
                            <ul>
                                <li>Declare to your chosen journal that your manuscript is not published elsewhere</li>
                                <li>Declare any conflicts of interest</li>
                                <li>Check all co-authors meet criteria for authorship and ensure appropriate acknowledgements made in the manuscript</li>
                                <li>Include appropriate funding statements in the manuscript</li>
                                <li>Show informed consent and provide assurances that participants’ rights are protected*</li>
                                <li>Be alert to bias and follow guidelines for accurate and complete reporting of research</li>
                                <li>Inform the journal if you subsequently find errors in your research</li>
                                <li>Refer the citations if any</li>
                            </ul>
                        </div>
                        <div className="col-md-4 pt-5 pb-5"><img style={{width:"300px"}} src={'https://freepngimg.com/thumb/signs/40500-8-guide-png-free-photo.png'} alt="Logo" /></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h1>About the Repository</h1>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus arcu, imperdiet vitae elit eu, sollicitudin volutpat libero. Phasellus non quam rutrum, auctor urna quis, cursus risus. Etiam cursus eros mauris, et tempor nibh facilisis id. Pellentesque vestibulum ex sagittis luctus imperdiet. Pellentesque dolor nulla, lobortis eget ornare non, viverra sed nulla. Curabitur ut est dolor. Maecenas vitae bibendum ex, non posuere dolor. Integer eu sagittis nibh. Morbi nibh ex, rhoncus non ligula eget, porta fermentum quam.</h6>
                            <h6>Aliquam sed justo vestibulum, egestas sem in, vulputate metus. Curabitur fermentum ligula in faucibus vehicula. Praesent non arcu eros. Donec mattis laoreet libero in tempus. Sed interdum felis turpis, eu lacinia nisl pretium a. Mauris dapibus justo sapien, ac tempus urna venenatis eu. Sed nec luctus lectus, et euismod purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h1>Our Partners</h1>
                        </div>
                    </div>
                    <div className="row">
                         <div className="col-md-4 pt-5 pb-5"><img style={{width:"300px"}} src={'https://img.freepik.com/free-vector/abstract-letter-x-logo-design-with-dots-square-shape-technology-digital-business-company_432266-137.jpg'} alt="Logo" /></div>
                         <div className="col-md-4 pt-5 pb-5"><img style={{width:"300px"}} src={'https://img.freepik.com/free-vector/abstract-letter-x-logo-design-with-dots-square-shape-technology-digital-business-company_432266-137.jpg'} alt="Logo" /></div>
                         <div className="col-md-4 pt-5 pb-5"><img style={{width:"300px"}} src={'https://img.freepik.com/free-vector/abstract-letter-x-logo-design-with-dots-square-shape-technology-digital-business-company_432266-137.jpg'} alt="Logo" /></div>
                    </div>
                </div>
        </Layout>
    );
};

export default AboutPage;

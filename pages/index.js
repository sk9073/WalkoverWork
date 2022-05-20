import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"><img style={{width:"100%",padding:"10px",top:"50px"}} src={'https://www.papertownsindia.com/wp-content/uploads/2017/09/Guide-to-self-publishing.jpg'} alt="Logo" /></div>
                    <div className="col-md-8">
                                <h2 style={{color:"blueviolet"}}>Want to add your Document??</h2>
                                <h6 style={{lineHeight:1.5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus arcu, imperdiet vitae elit eu, sollicitudin volutpat libero. Phasellus non quam rutrum, auctor urna quis, cursus risus. Etiam cursus eros mauris, et tempor nibh facilisis id. Pellentesque vestibulum ex sagittis luctus imperdiet. Pellentesque dolor nulla, lobortis eget ornare non, viverra sed nulla. Curabitur ut est dolor. Maecenas vitae bibendum ex, non posuere dolor. Integer eu sagittis nibh. Morbi nibh ex, rhoncus non ligula eget, porta fermentum quam.</h6>
                    </div>
                </div>

                <br /><br /><br />

                <div className="row">
                    <div className="col-md-8">
                                <h2 style={{color:"blueviolet"}}>Wanna see your works?</h2>
                                <h6 style={{lineHeight:1.5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus arcu, imperdiet vitae elit eu, sollicitudin volutpat libero. Phasellus non quam rutrum, auctor urna quis, cursus risus. Etiam cursus eros mauris, et tempor nibh facilisis id. Pellentesque vestibulum ex sagittis luctus imperdiet. Pellentesque dolor nulla, lobortis eget ornare non, viverra sed nulla. Curabitur ut est dolor. Maecenas vitae bibendum ex, non posuere dolor. Integer eu sagittis nibh. Morbi nibh ex, rhoncus non ligula eget, porta fermentum quam.</h6>
                    </div>
                    <div className="col-md-4"><img style={{width:"100%",padding:"10px",top:"50px"}} src={'https://p.kindpng.com/picc/s/224-2242055_readers-digest-logo-red-hd-png-download.png'} alt="Logo" /></div>
                </div>

            </div>
        </Layout>
    );
};

export default Index;

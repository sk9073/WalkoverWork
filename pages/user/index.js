import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import Link from 'next/link';

const UserIndex = () => {
    const styleObj = {
        maxWidth: "20em",
        margin: "1em",
        font: "1.5rem/1.4 Georgia, serif",
        }

    return (
        <Layout>
            <Private>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ul class="list-group">
                                <li className="list-group-item">
                                    <Link href="/user/crud/category-tag" id = "cct">
                                        <a>Create Category & Tags</a>
                                    </Link>
                                </li>
                                
                                <li className="list-group-item" id= "pr">
                                    <a href="/user/crud/blog">Publish Documents</a>
                                </li>

                                <li className="list-group-item" id="ud">
                                    <Link href="/user/crud/blogs">
                                        <a>Update/Delete Documents</a>
                                    </Link>
                                </li>

                                <li className="list-group-item" id= "up">
                                    <a href="/user/update">Update profile</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8">
                                <h2 style={{color:"blueviolet"}}>So Whats in your dashboard?</h2>
                                <h6 style={{lineHeight:2.0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus arcu, imperdiet vitae elit eu, sollicitudin volutpat libero. Phasellus non quam rutrum, auctor urna quis, cursus risus. Etiam cursus eros mauris, et tempor nibh facilisis id. Pellentesque vestibulum ex sagittis luctus imperdiet. Pellentesque dolor nulla, lobortis eget ornare non, viverra sed nulla. Curabitur ut est dolor. Maecenas vitae bibendum ex, non posuere dolor. Integer eu sagittis nibh. Morbi nibh ex, rhoncus non ligula eget, porta fermentum quam.</h6>
                        </div>
                    </div>
                    <br /><br /><br />

                    <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-10">
                                <q style={styleObj}>Many ideas grow better when transplanted into another mind than the one where they sprang up.</q>
                                <h6 style={{fontStyle: 'italic',textAlign:'right'}}>--Oliver Wendell Holmes</h6>
                            </div>
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default UserIndex;

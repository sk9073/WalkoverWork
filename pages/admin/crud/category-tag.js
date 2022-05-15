import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import Category from '../../../components/crud/Category';
import Tag from '../../../components/crud/Tag';
import Link from 'next/link';

const CategoryTag = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                                    <h2>Create Categories<i className="fa-solid fa-folder-bookmark"></i></h2>
                                    <Category />
                        </div>
                        <div className="col-md-6">
                                    <h2>Create Tags<i className="fa-solid fa-tags"></i></h2>
                                    <Tag />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default CategoryTag;

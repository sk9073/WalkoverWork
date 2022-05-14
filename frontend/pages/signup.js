import Layout from '../components/Layout';
import SignupComponent from '../components/auth/SignupComponent';
import Link from 'next/link';
import styles from '../styles/Signup.module.css'

const Signup = () => {
    return (
        <Layout>
            <div className="container-fluid">
                <div className={styles.hero_image}>
                <h2 className="text-center pt-4 pb-4" id={styles.hero_text}>Sign Up</h2>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <SignupComponent />
                    </div>
                </div>
                </div>
            </div>
        </Layout>
    );
};

export default Signup;


import { Header } from '../components/Header';

function HeaderOnly1({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className=" content"> {children} </div>
            </div>
        </div>
    );
}

export default HeaderOnly1;

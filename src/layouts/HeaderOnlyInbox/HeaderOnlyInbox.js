import { Header } from '../components/Header';

function HeaderOnlyInbox({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className=" content"> {children} </div>
            </div>
        </div>
    );
}

export default HeaderOnlyInbox;

import { Header } from '../components/Header';
<<<<<<< HEAD

=======
>>>>>>> ddca8f464dd341e4be5ffc26e6549888b081a9b8
function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className=" content"> {children} </div>
            </div>
        </div>
    );
}

export default HeaderOnly;

import ContractMenu from "../../components/ContractMenu";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import SideNav from "../../components/SideNav";
import "./contract.css";

export default function Contract() {
    return(
        <div className="contract__container">
            <Header/>
            <div className="contract__nav">
                    <SideNav/>
                <div className="contact__main">
                    <NavBar/>
                    <ContractMenu/>
                </div>
            </div>
            
        </div>
    )
}
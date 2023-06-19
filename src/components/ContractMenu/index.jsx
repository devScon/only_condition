import ContractCard from "../ContractCard";
import "./contractmenu.css";

export default function ContractMenu() {
    return(
        <div className="contractmenu__container">
            <nav class="contractmenu__menu">
                <ul>
                    <li><a href="/">Overview</a></li>
                    <li><a href="/">view/Edit Contract</a></li>
                    <li><a href="/">Invoice reconciliation</a></li>
                    <li><a href="/">Client profile</a></li>
                </ul>
            </nav>
            <div className="contract__card">
                <ContractCard/>
            </div>
        </div>
    )

}
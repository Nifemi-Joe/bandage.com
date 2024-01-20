import Brand from "../../images/hooli.svg";
import Brand1 from "../../images/lyft.svg";
import Brand2 from "../../images/brand-3.svg";
import Brand3 from "../../images/stripe.svg";
import Brand4 from "../../images/aws.svg";
import Brand5 from "../../images/brand-4.svg";
const ClientCard = () => {
    return (
        <div className="main-container bg-grey">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-2">
                        <img src={Brand} alt="Brand"/>
                    </div>
                    <div className="col-md-2">
                        <img src={Brand1} alt="Brand"/>
                    </div>
                    <div className="col-md-2">
                        <img src={Brand2} alt="Brand"/>
                    </div>
                    <div className="col-md-2">
                        <img src={Brand3} alt="Brand"/>
                    </div>
                    <div className="col-md-2">
                        <img src={Brand4} alt="Brand"/>
                    </div>
                    <div className="col-md-2">
                        <img src={Brand5} alt="Brand"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ClientCard
import Service1 from "../../images/service-1.svg";
import Service2 from "../../images/service-2.svg"
import Service3 from "../../images/service-3.svg"
const FeaturesCard = () => {
    return (
        <div className="main-container">
            <div className="container">
                <div className="row h-auto">
                    <div className="main-content">
                        <h2 className="second-text-color">Featured Products</h2>
                        <h3>THE BEST SERVICES</h3>
                        <p>Problems trying to resolve the conflict between </p>
                    </div>
                </div>
                <div className="row w-85 h-100">
                    <div className="product tab tab-group">
                        <div className="tab-content">
                            <div className="tab-one">
                                <div className="row flex-wrap h-100">
                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="image-container">
                                                <img src={Service1} alt="Service"/>
                                            </div>
                                            <h3>Easy Wins</h3>
                                            <p className="second-text-color">Get your best looking smile now!</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="image-container">
                                                <img src={Service2} alt="Service"/>
                                            </div>
                                            <h3>Concrete</h3>
                                            <p className="second-text-color">Defalcate is most focused in helping you discover your most beautiful smile</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="image-container">
                                                <img src={Service3} alt="Service"/>
                                            </div>
                                            <h3>Hack Growth</h3>
                                            <p className="second-text-color">Overcame any hurdle or any other problem.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeaturesCard
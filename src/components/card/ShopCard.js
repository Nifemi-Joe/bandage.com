import "../../css/ShopCardCSS.css"
const ShopCard = () => {
    return (
        <div className="main-container">
            <div className="container">
                <div className="row h-600">
                    <div className="col-md-4">
                        <div className="card-item  bg-1">
                            <div className="card-content">
                                <h6 className="fw-bold success-text-color">5 Items</h6>
                                <h6 className="fw-bold fs-4 ">FURNITURE</h6>
                                <h6 className="fw-bold">Read More</h6>
                            </div>
                        </div>
                    </div>
                    <div className="block-container">
                        <div className="col-md-4">
                            <div className="card-item bg-2">
                                <div className="card-content">
                                    <h6 className="fw-bold success-text-color">5 Items</h6>
                                    <h6 className="fw-bold fs-4 ">FURNITURE</h6>
                                    <h6 className="fw-bold">Read More</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-item bg-3">
                                <div className="card-content">
                                    <h6 className="fw-bold success-text-color">5 Items</h6>
                                    <h6 className="fw-bold fs-4 ">FURNITURE</h6>
                                    <h6 className="fw-bold">Read More</h6>
                                </div>
                            </div>
                            <div className="card-item bg-3">
                                <div className="card-content">
                                    <h6 className="fw-bold success-text-color">5 Items</h6>
                                    <h6 className="fw-bold fs-4 ">FURNITURE</h6>
                                    <h6 className="fw-bold">Read More</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShopCard;
import Close from "../../images/close.svg"
const SuccessModal = ({product}) => {
    const close = () => {
        console.log(document.querySelector('#modal-container'))
        document.querySelector('#modal-container').style.opacity = 0;
        setTimeout(()=>{
            document.querySelector('#modal-container').style.display = "none";
        }, 500)
    }
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return (
        <div className="modal-container" id="modal-container">
            <div className="modal-content">
                <div className="modal-header">
                    <h4>Successfully added to basket</h4>
                    <button onClick={() => close()}><img src={Close} alt="Close"/></button>
                </div>
                <div className="modal-body">
                    <div className="image-container">
                        <img src={product.thumbnail} alt="Close"/>
                    </div>
                    <div className="modal-text">
                        <h5>{product.title}</h5>
                        <h5>{USDollar.format(product.price)}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SuccessModal
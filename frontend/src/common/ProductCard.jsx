export function ProductCard({ productData }) {
    return (
        <div className="col-12 px-2 px-lg-4 col-lg-3">
            <div className="position-relative">
                <img src={productData.image} alt="" className="w-100" />
                <div className={productData.offerpercent!='' ? productData.checkNew ? "offer_percent_new position-absolute":'offer_percent position-absolute':'d-none'}>-{productData.offerpercent}%</div>
                <div className={productData.checkNew ? "new_prd_ico position-absolute":'d-none'}>New</div>
            </div>
            <div className="row row-cols-2 justify-content-between px-1 pt-3">
                <div className="col prd_name">{productData.title}</div>
                <div className="col prd_price text-end">₹{productData.discountedprice} <sup className={productData.price!='' ? '' : 'd-none'}>₹{productData.price}</sup></div>
            </div>
            <div className="smell pt-2 pb-3 pb-lg-4 px-1">{productData.description}</div>
            <div className="cart_btn position-relative">
                <button>ADD TO CART</button>
                <div className="add_cart_ico position-absolute">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="#0C0D12" />
                        <path d="M9 12H15" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 9V15" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
import { useState } from "react"

export function Faq() {
    let [openFaq,updateOpenFaq] = useState(-1);
    return (
        <>
            <div className="faq_head mb-lg-5 mb-4">
                FAQS
            </div>
            <div className="row justify-content-between">
                <div className="col-lg-4 col-12 faq_options">
                    <div className="faq_title mb-3 active_faq">Product & Promos</div>
                    <div className="faq_title mb-3">Delivery</div>
                    <div className="faq_title mb-3">Refunds</div>
                </div>
                <div className="col-lg-7 col-12">
                    <div className="faq_main pt-lg-0">
                        <div className="faq_ques_top row align-items-lg-center align-items-start" onClick={()=>updateOpenFaq(openFaq===0 ? -1: 0)}>
                            <div className="faq_ques col-10">Are candles safe for babies to toddlers?</div>
                            <div className="col-2 text-end fs-1">{openFaq===0 ? '-':'+'}</div>
                        </div>
                        <div className={openFaq===0 ? 'faq_ans row open_faq_ans': 'faq_ans row'}>
                            <div className="col-lg-8 col-10 pt-2">
                            Absolutely, because we just use organic ingredients and does not use hazardous chemicals 
                            </div>
                        </div>
                    </div>
                    <div className="faq_main">
                        <div className="faq_ques_top row align-items-lg-center align-items-start" onClick={()=>updateOpenFaq(openFaq===1 ? -1: 1)}>
                            <div className="faq_ques col-10">After the smell runs out, will it pollute the environment?</div>
                            <div className="col-2 text-end fs-1">{openFaq===1 ? '-':'+'}</div>
                        </div>
                        <div className={openFaq===1 ? 'faq_ans row open_faq_ans': 'faq_ans row'}>
                            <div className="col-lg-8 col-10 pt-2">
                            Absolutely, because we just use organic ingredients and does not use hazardous chemicals 
                            </div>
                        </div>
                    </div>
                    <div className="faq_main">
                        <div className="faq_ques_top row align-items-lg-center align-items-start" onClick={()=>updateOpenFaq(openFaq===2 ? -1: 2)}>
                            <div className="faq_ques col-10">Are the materials used for the manufacture of chemicals?</div>
                            <div className="col-2 text-end fs-1">{openFaq===2 ? '-':'+'}</div>
                        </div>
                        <div className={openFaq===2 ? 'faq_ans row open_faq_ans': 'faq_ans row'}>
                            <div className="col-lg-8 col-10 pt-2">
                            Absolutely, because we just use organic ingredients and does not use hazardous chemicals 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
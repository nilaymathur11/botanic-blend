import { Navbar } from "../common/Navbar";
import Hero from '../images/hero.jpg'
import discount_img from '../images/discount_img.jpg'
import prd_info_img1 from '../images/prd_info_img1.jpg'
import prd_info_img2 from '../images/prd_info_img2.jpg'
import prd_info_img3 from '../images/prd_info_img3.jpg'
import prd_info_img4 from '../images/prd_info_img4.jpg'
import prd_info_img5 from '../images/prd_info_img5.jpg'
import { BotanicProducts } from "../common/BotanicProducts";
import { ProductCard } from "../common/ProductCard";
import { Faq } from "../common/Faq";
import { Footer } from "../common/Footer";

export function Home() {
    let HomeProducts = BotanicProducts.filter((v, i) => {
        if (i <= 3) {
            return v;
        }
    })
    return (
        <>
            <div className="container-fluid mx-0">
                <Navbar />
                <header className="row">
                    <div className="col-lg-4 head_left px-0 d-none d-lg-block">
                        <img className="w-100" src={Hero} alt="" />
                    </div>
                    <div className="col-lg-8 row head_right mx-0 d-none d-lg-flex">
                        <div className="col-11">
                            <div className="scandal">#SCANDLEXPERIENCE</div>
                            <div className="hero_text">Always <span className="cool">cool and soothe</span> your feelings available in a variety of <span className="candle">candle</span></div>
                            <div><button className="black_btn">Discover Products</button></div>
                        </div>
                    </div>
                    <div className="col-12 head_right d-lg-none d-block">
                        <div className="light_spaced_text">#SCANDLEXPERIENCE</div>
                        <div className="hero_text">Always <span className="cool">cool and soothe</span> your feelings available in a variety of <span className="candle">candle</span></div>
                        <div className="text-center"><button className="black_btn">Discover Products</button></div>
                    </div>
                    <div className="col-lg-4 head_left px-0 d-block d-lg-none">
                        <img className="w-100" src={Hero} alt="" />
                    </div>
                </header>
            </div>
            <div className="middle">
                <div className="trending_section">
                    <div className="custom_container_lg">
                        <div className="light_spaced_text">
                            TRENDING
                        </div>
                        <div className="popular">
                            Shop our popular candle products
                        </div>
                        <div className="row justify-content-between pt-3 pt-lg-5 gap-4 gap-lg-0">
                            {
                                HomeProducts.map((v, i) => {
                                    return (
                                        <ProductCard key={i} productData={v} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="custom_container2_lg">
                        <div className="trending_discount" style={{ backgroundImage: `url(${discount_img})` }}>
                            <div className="row justify-content-start trending_discount_pad mx-0">
                                <div className="col-12 col-lg-3">
                                    <div className="trending_percent">
                                        <span>35%</span>
                                        <span className="ms-2 ms-lg-4">OFF</span>
                                    </div>
                                    <div className="trending_phrase mt-4">
                                        Make the most of your
                                        #scandlexperience
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="show_more">
                        <button>Show More</button>
                    </div>
                </div>
                <div className="products_info custom_top_padding custom_bottom_padding">
                    <div className="container-lg">
                        <div className="product_img_big">
                            <img src={prd_info_img1} alt="" className="w-100" />
                        </div>
                        <div className="row py-lg-5 py-3 mx-0">
                            <div className="prd_info1 col-12 col-lg-5 pe-5">
                                We make products with quality materials so you get a very good product
                            </div>
                        </div>
                        <div className="row pt-lg-3 pt-lg-0">
                            <div className="col-12 col-lg-6 prd_info_img2">
                                <img src={prd_info_img2} alt="" className="w-100" />
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="prd_info_img3">
                                    <img src={prd_info_img3} alt="" className="w-100" />
                                </div>
                                <div className="prd_text_bold py-2">
                                    Durable
                                </div>
                                <div className="prd_text_desc">
                                    The life of the candle reaches 6 months since it is used and still feels the smell
                                </div>
                            </div>
                        </div>
                        <div className="row pt-3 pt-lg-5">
                            <div className="col-12 col-lg-6">
                                <div className="prd_info_img3">
                                    <img src={prd_info_img4} alt="" className="w-100" />
                                </div>
                                <div className="prd_text_bold py-2">
                                    Calm
                                </div>
                                <div className="prd_text_desc">
                                    The aroma emitted by the candles soothes the feeling and the room is of course very durable
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 prd_info_img2 pt-3 pt-lg-0">
                                <img src={prd_info_img5} alt="" className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="middle_faq custom_top_padding custom_bottom_padding">
                    <div className="container-lg">
                        <Faq/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    )
}
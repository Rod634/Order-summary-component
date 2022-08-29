import heroImg from "../assets/illustration-hero.svg";
import planImg from "../assets/icon-music.svg";

type PropsType = {
    title: string,
    description: string,
    planType: string,
    planPrice: string
};

export default function SummaryBox({title, description, planType, planPrice } : PropsType) {

    return (
        <div className="box">
            <div className="img_box">
                <img src={heroImg} alt="" />
            </div>
            <div className="box_info">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="plan_info">
                    <img src={planImg} alt="" />
                    <h3>{planType}</h3>
                    <p>{planPrice}</p>
                    <a href="#">Change</a>
                </div>
                <button>Proced to Payment</button>
                <a href="#">Cancel Order</a>
            </div>
        </div>
    )

}
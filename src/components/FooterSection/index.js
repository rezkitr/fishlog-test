import Button from "./Button";
import SocialButton from "./SocialButton";

const FooterSection = () => {
    return (
        <div className="px-28 py-16 bg-main-blue text-white">
            <div className="grid grid-cols-2 mb-16">
                <div>
                    <h1 className="font-black text-4xl">
                        Join us and be a part of building the fisheries
                        ecosystem in Indonesia!
                    </h1>
                </div>
                <div className="flex gap-32 justify-end">
                    <Button text="Buyer" />
                    <Button text="Supplier" />
                </div>
            </div>
            <div className="grid grid-cols-2 border-solid border-b border-white pb-8">
                <div>
                    <h5 className="font-bold text-xl mb-3">
                        PT. Rantai Pasok Teknologi
                    </h5>
                    <p className="text-sm">
                        Aviso Office, Epicentrum Walk, Lt 3 A306-307,
                        <br />
                        Setiabudi, Jakarta Selatan
                        <br />
                        Telp. 0251 8579380
                    </p>
                </div>
                <div className="flex justify-end gap-14">
                    <div>
                        <h5 className="font-bold text-lg mb-3">Partnership</h5>
                        <div className="flex flex-col gap-1 text-sm">
                            <a href="#">Buyer</a>
                            <a href="#">Supplier</a>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold text-lg mb-3">Company</h5>
                        <div className="flex flex-col gap-1 text-sm">
                            <a href="#">About</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Blog</a>
                            <a href="#">Career</a>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://fishlog.co.id/_next/static/images/delivery-7ddb65d2cc7713d7f5f74f827f735c3f.png"
                            alt="footer"
                            width={120}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <p className="text-xs">© 2023 FishLog. All rights reserved</p>
                <div>
                    <p className="font-semibold text-sm ml-2">Find us on</p>
                    <div className="flex items-center gap-1 mt-2">
                        <SocialButton iconClass="fa-instagram" />
                        <SocialButton iconClass="fa-youtube-play" />
                        <SocialButton iconClass="fa-facebook" />
                        <SocialButton iconClass="fa-twitter" />
                        <SocialButton iconClass="fa-linkedin-square" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;

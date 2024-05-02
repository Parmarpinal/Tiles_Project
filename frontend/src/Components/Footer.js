import { Link } from "react-router-dom";

const Footer = ()=>{
    return(
        <>
            <div class="container-fluid bg-dark text-light footer pt-2 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start fw-normal mb-4">Tiles</h4>
                        <a class="btn btn-link" href="">Livingroom tiles</a>
                        <a class="btn btn-link" href="">Bedroom tiles</a>
                        <a class="btn btn-link" href="">Bathroom tiles</a>
                        <a class="btn btn-link" href="">Kitchen tiles</a>
                        <a class="btn btn-link" href="">Outdoor tiles</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start fw-normal mb-4">Contact</h4>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Bapasitaram chowk,Katargam,Surat.</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+98562 89632</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>shreeshyamceramic123@gmail.com</p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start fw-normal mb-4">Opening</h4>
                        <h5 class="text-light fw-normal">Monday - Saturday</h5>
                        <p>09AM - 09PM</p>
                        <h5 class="text-light fw-normal">Sunday</h5>
                        <p>10AM - 01PM</p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start fw-normal mb-4">Newsletter</h4>
                        <p>For any query please send us your response.</p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; Shree Shyam Ceramic, All Right Reserved. 
							<br/>
							{/* This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author\’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support.  */}
							Designed By Pinal Parmar.
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <a href="">Home</a>
                                <a href="">About</a>
                                <a href="">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}
export default Footer;
import React from "react"
import './footer.css';
function  Footer (){
    return(
        
    <div class="container-fluid justify-content-center px-0 ">
    {/* <div class="card py-5 border-0 px-0 mx-0">
        <div class="card-body text-center">
            <div class="row  justify-content-center">
            <i class="fab fa-facebook-f"></i>
                <div class="col-auto"><h6><b>Still have more questions ?</b></h6><small class="text-muted">Call/Text <span class="mx-2"><b>+91.1630.412.999</b></span>and with real person.</small>
                    <div class="row justify-content-center"><div class="col-10"><button type="button" class="btn btn-primary btn-lg btn-block my-5">Try it for free</button><h6> <b>100% Money Back Guarantee</b></h6> <small class="text-muted">If you'r not satsified for any reason, we'll refund your money</small></div></div>
                </div>
            </div>
        </div>
    </div> */}
    <footer>
        <div class="row justify-content-around mb-0 pt-5 mx-4">
            <div class="col-xl-2 col-md-4 order-xl-1 order-4 mr-xl-0 my-auto"><ul class="list-unstyled mt-md-3 mt-5"><li>Social Media</li><li className="social"> <span> <i class="fa fa-facebook" aria-hidden="true"></i></span>  <span> <i class="fa fa-instagram" aria-hidden="true"></i> </span> <span> <i class="fa fa-twitter" aria-hidden="true"></i> </span> </li>
            </ul><ul class="list-unstyled my-xl-4 my-md-3"><li>Copyright</li>
            <li>&#9400; JoinMyRide 2022</li></ul>
             </div>
            <div class="col-xl-2 col-md-3 pt-4 order-1"><ul class="list-unstyled"><li class="mt-md-0 mt-4">Our Solution</li><li>Intergrated Security </li><li>Core Features</li><li>Product Features</li><li>Pricing</li></ul></div>
            <div class="col-xl-2 col-md-3 pt-4 order-2"><ul class="list-unstyled"><li class="mt-md-0 mt-4">Your needs</li><li>Intergrated Security </li><li>Core Features</li><li>Product Features</li><li>Pricing</li></ul></div>
            <div class="col-xl-auto col-md-3 pt-4 my-sm-0 order-md-3 order-sm-1 "><ul class="list-unstyled"><li class="mt-md-0 mt-4">Offer</li><li>Intergrated Security </li><li>Core Features</li><li>Product Features</li><li>Pricing</li></ul></div>
            {/* <div class="col-xl-auto col-md-6 col-12  pt-4 my-sm-0 order-6  "><div class="form-group "><label for="email" class="mb-3"><b>Subscribe to our newsletter and Get 10% off</b></label><input type="email" class="form-control form-control-lg" placeholder="Enter email" id="email"/></div><button type="button" class="btn btn-primary btn-lg btn-block my-2 Subscribe mt-4 mb-3">Subscribe</button></div> */}
        </div>
        {/* <div class="row justify-content-center px-3 py-3 pt-5"><div class="col text-center"><p class="mb-0">*These statement have not evaluated by the Food and Drug Addministrations.</p><p>This product is not intented to diagonse,treat,cure, or prevent any disease.</p></div></div> */}
    </footer>
</div>


)
}
export default Footer
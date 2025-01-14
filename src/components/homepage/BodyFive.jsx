import { Link } from "react-router-dom";

function BodyFive() {
 
    return(
        <div class="container-fluid bg-body-tertiary">
    <div class="container pt-5  pb-5">
      <h1 class="pt-5 fw-bold text-center pb-4 holvi-features">Holvi features</h1>
      <p class="text-center fs-4 pb-5 say-hello">Say hello to your new business banking tools.</p>
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="container5">
            <h3 class="fw-bold mb-4">Banking</h3>
            <p>Online business account with 500 free SEPA transfers per month.</p>
            <Link to="" class="text-decoration-none text-dark fw-bold">Learn more <i class="bi bi-arrow-right"></i></Link>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="container5 mb-2">
            <h3 class="fw-bold mb-4">Holvi cards</h3>
            <p>Debit, credit and virtual cards. Pay worldwide in practically any way.</p>
            <Link to="" class="text-decoration-none text-dark fw-bold">Learn more <i class="bi bi-arrow-right"></i></Link>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="container5">
            <h3 class="fw-bold mb-4">Invoicing</h3>
            <p>Create, send, track and store invoices. Get instant notifications on paid invoices.</p>
            <Link to="" class="text-decoration-none text-dark fw-bold">Learn more <i class="bi bi-arrow-right"></i></Link>
          </div>
        </div>
      </div>
      <div class="row mt-5 pt-5 pb-5">
        <div class="col-12 col-md-4">
          <div class="container5">
            <h3 class="fw-bold mb-4">Bookkeeping</h3>
            <p>Manage receipts and prep for tax time. Bookkeeping, online or in-app.</p>
            <Link to="" class="text-decoration-none text-dark fw-bold">Learn more <i class="bi bi-arrow-right"></i></Link>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="container5">
            <h3 class="fw-bold mb-4">Holvi app</h3>
            <p>Managing business finances on the go has never been easier. Available for iOS and Android.</p>
            <Link to="" class="text-decoration-none text-dark fw-bold">Learn more <i class="bi bi-arrow-right"></i></Link>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="container5">
            <h3 class="fw-bold mb-4">Support</h3>
            <p>Get fast answers in our help centre and from our customer support team.</p>
            <Link to="" class="text-decoration-none text-dark fw-bold">Learn more <i class="bi bi-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
}
export default BodyFive;
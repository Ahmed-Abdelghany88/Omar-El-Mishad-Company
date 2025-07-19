
import footericon from '../assets/img/footericon.png';
import '../components/footer.css';
const Footer2 = () => {

  
  return (
    <footer id="footer2" className="footer2 dark-background">
      <div className="container-foot2 footer-top2">
        <div className="row-footer2 gy-4">

          {/* Footer Contact */}
          
            <div className="footer-contact2">
              <div>
                <img src={footericon} className="footer-img2" alt="Omar ElMishad Company footer logo" />
              </div>
              <p>Sole proprietorship</p>
              <p><i className="bi bi-whatsapp" />: +44 7477 140271</p>
              <p>331-008-793: رقم التسجيل الضريبى</p>
            </div>
        

        </div>
      </div>
    </footer>
  );
};

export default Footer2;

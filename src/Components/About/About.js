import "./about.css";
import ava from '../../img/Programming.png'
import pdf from '../Document/CV-ĐoànLiêngTiến-FresherFrontend.pdf';

function About() {

  const PDFfile = () => {
    if (pdf) {
      window.open(pdf)
    }
  }

  return (
    <div className="">
      <div className="info" >
        <div style={{ width: '800px', margin: 'auto'}}>
          <img className="setImg"  alt="" src={ava} style={{ borderRadius: '20px', width: '22em',border:"5px solid white" }} />
        </div>
        <div style={{ width: '800px'}}>
          <h3 style={{ color: 'white',textTransform:"uppercase" ,fontFamily:"ca"}}>Let's get know about me closer</h3>
          <p style={{ color: "white", fontSize: '25px', fontWeight: '90', textIndent: '30px'}}>
            Có 6 tháng kinh nghiệm maintain và phát triển dự án phần mền sử dụng
            framework Angular. Đã có cơ hội tham gia phát triển sản phẩm cho khu du lịch
            Làng Hoa Sadec khi còn trong quá trình thực tập. Là sinh viên đã tốt nghiệp vào
            tháng 2 năm 2023 và mục tiêu trở thành Fullstack develop, tôi mong muốn có cơ
            hội học hỏi thêm kinh nghiệm, sẵn sàng học hỏi kiến thức mới và phát triển bản
            thân.</p>
          <button className="button" type="button" style={{ margin: '40px', float: 'right' }} onClick={PDFfile}>
            <span className="button__text">Download</span>
            <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default About;

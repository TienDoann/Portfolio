import "./Home.css";
import ava from '../../img/ava2.png'
import fb from '../../img/fb.png'
import git from '../../img/github.png'
import linked from '../../img/linked.png'
function Home() {
  return (
    <div className="">
      <div className="content">
        <div className="introduction">
          <p>Hi, my name is Đoàn Liêng Tiến</p>
          <p>This is my portfolio</p>
          <div style={{textAlign:"left", paddingTop:"10px", fontSize: "20px",display: 'flex'}}> 
            <p>Follow me on: </p>
            <a href="https://www.facebook.com/peno.nope.9"><img alt="" src={fb} id="cont" style={{background:'white'}}/></a>
            <a href="https://github.com/TienDoann"><img alt="" src={git} id="cont" style={{background:'white'}}/></a>
            <a href="https://www.linkedin.com/in/ti%E1%BA%BFnnn-%C4%91o%C3%A0nnn-40a2b0245/"><img alt="" src={linked} id="cont"style={{background:'white'}}/></a>
          </div>
        </div>
        <img alt="" src={ava}/>
      </div>
    </div>
  );
}
export default Home;

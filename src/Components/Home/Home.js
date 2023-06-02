import "./Home.css";
import ava from '../../img/ava2.png'
function Home() {
  return (
    <div className="gif">
      <div className="content">
        <div className="introduction">
          <p>Hi, my name Đoàn Liêng Tiến</p>
          <p>This is my portfolio</p>
        </div>
        <img alt="" src={ava}/>
      </div>
    </div>
  );
}
export default Home;

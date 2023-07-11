import './project.css'
function Project() {
    return (
        <div>
            <h1 style={{color:'white'}}>Some Highlight Project</h1>
            <div style={{display:'flex'}}>
            <div class="card">
                <div class="main-content">
                    <div class="header">
                        <span>Article on</span>
                        <span>2021-2022</span>
                    </div>
                    <p class="heading">Quản lý Bán hàng linh kiện điện tử</p>
                    <div class="categories">
                        <span>ASP.NET</span>
                    </div>
                    <p className='src'>Source: https://github.com/TienDoann/ProjectDA3-MVC</p>
                </div>
                <div class="footer">
                    by Đoàn Liêng Tiến
                </div>
            </div>
            <div class="card">
                <div class="main-content">
                    <div class="header">
                        <span>Article on</span>
                        <span>2020-2021</span>
                    </div>
                    <p class="heading">Lập trình Game trên thiết bị di động</p>
                    <div class="categories">
                        <span>Java</span>
                    </div>
                    <p className='src'>Source: https://github.com/TienDoann/MobileGame</p>
                </div>
                <div class="footer">
                    by Đoàn Liêng Tiến
                </div>
            </div>
            <div class="card">
                <div class="main-content">
                    <div class="header">
                        <span>Article on</span>
                        <span>2021-2022</span>
                    </div>
                    <p class="heading">Lập trình game với thư viện PyGame</p>
                    <div class="categories">
                        <span>Python</span>
                        <span>Pygame</span>
                    </div>
                    <p className='src'>Source: https://github.com/TienDoann/PyGame</p>
                </div>
                <div class="footer">
                    by Đoàn Liêng Tiến
                </div>
            </div>
            <div class="card">
                <div class="main-content">
                    <div class="header">
                        <span>Article on</span>
                        <span>2022</span>
                    </div>
                    <p class="heading">Hệ thống quản lý bán và kiểm soát vé khu du lịch Làng Hoa Sadec</p>
                    <div class="categories">
                        <span>Angular</span>
                        <span>React native</span>
                        <span>.Net Core 6</span>
                    </div>
                    <p className='src'>Source: (private)</p>
                </div>
                <div class="footer">
                    by Cty TNHH Điện điện tử C&T DevTeam
                </div>
            </div>
            </div>
        </div>
    );
}
export default Project;

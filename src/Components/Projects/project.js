import './project.css';
import React from 'react';

const projectsData = [
    {
        id: 1,
        title: 'Quản lý Bán hàng linh kiện điện tử',
        date: '2021-2022',
        tech: ['ASP.NET'],
        link: 'https://github.com/TienDoann/ProjectDA3-MVC',
        author: 'Đoàn Liêng Tiến'
    },
    {
        id: 2,
        title: 'Lập trình Game trên thiết bị di động',
        date: '2020-2021',
        tech: ['Java'],
        link: 'https://github.com/TienDoann/MobileGame',
        author: 'Đoàn Liêng Tiến'
    },
    {
        id: 3,
        title: 'Lập trình game với thư viện PyGame',
        date: '2021-2022',
        tech: ['Python', 'Pygame'],
        link: 'https://github.com/TienDoann/PyGame',
        author: 'Đoàn Liêng Tiến'
    },
    {
        id: 4,
        title: 'Hệ thống quản lý bán và kiểm soát vé khu du lịch Làng Hoa Sadec',
        date: '2022',
        tech: ['Angular', 'React native', '.Net Core 6'],
        link: null,
        author: 'Cty TNHH Điện điện tử C&T DevTeam'
    }
];

const ProjectCard = ({ project }) => {
    const handleClick = () => {
        if (project.link) {
            window.location.href = project.link;
        }
    };

    return (
        <div className="card">
            <div className="main-content">
                <div className="header">
                    <span>Article on</span>
                    <span>{project.date}</span>
                </div>
                <p className="heading">{project.title}</p>
                <div className="categories">
                    {project.tech.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>
                {project.link && (
                    <p className="src">
                        <button className="btnPro" onClick={handleClick}>
                            Xem
                        </button>
                    </p>
                )}
            </div>
            <div className="footer">{project.author}</div>
        </div>
    );
};

function Project() {
    const titleStyle = {
        color: 'white',
        fontFamily: 'ca',
        textTransform: 'uppercase'
    };

    return (
        <div>
            <h1 style={titleStyle}>Some Highlight Project</h1>
            <div className="container">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Project;

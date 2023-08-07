import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            UniPin WebStudio
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                О НАС
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                ПРЕИМУЩЕСТВА
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                УСТЛУГИ
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                ГАЛЕРЕЯ
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                ОТЗЫВЫ
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                КОМАНДА
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                КОНТАКТЫ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

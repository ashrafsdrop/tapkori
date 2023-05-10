import React, { Component } from "react";
import "./users.css";

export class Users extends Component {
  constructor() {
    super();
  }

  componentDidMount() {}
  render() {
    return (
      <>
        <div className="users" style={{ backgroundColor: "rgba(0,0,0,0.88)" }}>
          <div className="card">
            <div className="avatar-holder">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950"
                alt="Albert Einstein"
              />
            </div>
            <div className="name">
              <a href="https://codepen.io/AlbertFeynman/" target="_blank">
                Gandu Agun
              </a>
              <div className="posti">
                <p className="position">
                  ceon of ganfuuu dasdsd sadsad sadsad sadsad
                </p>
                
              </div>

            </div>
            
            <div className="ds-info">
              <div className="ds pens">
                <h6 title="Number of pens created by the user">
                  <i className="fas fa-edit" />
                </h6>
                <p>29</p>
              </div>
              <div className="ds projects">
                <h6 title="Number of projects created by the user">
                  <i className="fas fa-project-diagram" />
                </h6>
                <p>0</p>
              </div>
              <div className="ds posts">
                <h6 title="Number of posts">
                  <i className="fas fa-comments" />
                </h6>
                <p>0</p>
              </div>
            </div>
            <br />
            <div className="button">
              <a href="#" className="btn">
                Follow <i className="fas fa-user-plus" />
              </a>
            </div>
            <div className="ds-skill">
              <h6>
                Skill <i className="fa fa-code" aria-hidden="true" />
              </h6>
              <div className="skill html">
                <h6>
                  <i className="fab fa-html5" /> HTML5{" "}
                </h6>
                <div className="bar bar-html">
                  <p>95%</p>
                </div>
              </div>
              <div className="skill css">
                <h6>
                  <i className="fab fa-css3-alt" /> CSS3{" "}
                </h6>
                <div className="bar bar-css">
                  <p>90%</p>
                </div>
              </div>
              <div className="skill javascript">
                <h6>
                  <i className="fab fa-js" /> JavaScript{" "}
                </h6>
                <div className="bar bar-js">
                  <p>75%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Users;

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
            <div className="ds-top"></div>
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
              <div className="button">
              <a href="#" className="btn">
                Follow <i className="fas fa-user-plus" />
              </a>
            </div>

            </div>
            
            <div className="ds-info">
              <div className="ds pens">
                <h6 title="Number of pens created by the user">
                  <a className="links" href="#"><i className="fas fa-broadcast-tower" /></a>
                </h6>
                <p>29</p>
              </div>
              <div className="ds projects">
                <h6 title="Number of projects created by the user">
                <a className="links" href="#"><i className="fas fa-project-diagram" /></a>
                </h6>
                <p>0</p>
              </div>
              <div className="ds posts">
                <h6 title="Number of posts">
                <a className="links" href="#"><i className="far fa-paper-plane" /></a>
                </h6>
                <p>0</p>
              </div>
            </div>
            <br />
            
            <div className="ds-skill">
              <h6 className="titles">
                Other Information
              </h6>
              <div className="skill html">
                <h6>
                  <i className="fas fa-phone" /> HTML5{" "}
                </h6>
                
              </div>
              <div className="skill css ds pens">
                <h6>
                  <i className="fas fa-phone " /> CSS3{" "}
                </h6>
                
              </div>
              <div className="skill javascript">
                <h6>
                  <i className="fas fa-map-signs" /> JavaScript{" "}
                </h6>
                
              </div>
              <div className="skill javascript">
                <h6>
                  <i className="fas fa-at" /> JavaScript{" "}
                </h6>
                
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Users;

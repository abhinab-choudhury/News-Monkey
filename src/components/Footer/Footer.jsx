import './Footer.css'
import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div >
        <section className="footer-section text-center">
          <footer>
            <div className="p-4">

              <div className="row">

                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                  <h5 className="text-uppercase">🎉🎉 Welcome 🎉🎉</h5>

                  <p>
                    Discover news from various categories, including politics, technology, science, entertainment, sports, and more. Customize your news feed to focus on what matters most to you.
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                  <h5 className="heading">Contact us</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="https://www.instagram.com/_abhinab_choudhury_/">Instagram</a>
                    </li>
                    <li>
                      <a href="https://twitter.com/abhinabc_">Twitter</a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/abhinab-choudhury-18022822b/"> LinkedIn</a>
                    </li>
                    <li>
                      <a href="https://youtube.com/@-abhinab?si=R_PLCetdwFj03FcV">Youtube</a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
              Version 3.6.5
            </div>
          </footer>

        </section>
      </div>
    )
  }
}

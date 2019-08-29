import React, { Component } from 'react';

class HomeCards extends Component {
  render() {
    return (
      <div>
        <section className="page-card">
          <div className="container-fluid">
            <div className="row">
              <div
                className="card text-white bg-warning mb-3"
                style="max-width: 18rem;"
              >
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h5 className="card-title">Warning card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomeCards;
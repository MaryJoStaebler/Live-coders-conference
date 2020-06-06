import React, { Component } from "react";

class ScheduleCard extends Component {
  state = {};
  render() {
    let avatar;
    if (this.props.infos.avatar !== "") {
      avatar = this.props.infos.avatar;
    } else {
      avatar = "./img/speakers/placeholder.jpg";
    }
    return (
      <div className="col-lg-4 col-md-6 schedule-card__container-col">
        <div
          className="schedule-card"
          data-aos="fade-right"
          data-aos-delay={100 * this.props.index}
        >
          <div className="schedule-card__avatar">
            <div
              className="schedule-avatar__container"
              style={{
                backgroundImage: "url(" + avatar + ")",
              }}
            ></div>
          </div>
          <div className="schedule-card__infos">
            <p className="schedule-card__title">
              <strong>{this.props.infos.speaker}</strong>
            </p>
            <p className="schedule-card__title">{this.props.infos.title}</p>
            <div className="schedule-infos__time">
              <span className="schedule__time">
                <img
                  srcSet="./img/icons/watch-purple.svg"
                  src="./img/icons/watch-purple.png"
                  alt="watch"
                  className="schedule-time__watch"
                />
                {this.props.infos.times.start}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScheduleCard;

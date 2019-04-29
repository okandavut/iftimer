import React, { PropTypes, Component } from "react";

class Countdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hours: 0,
            min: 0,
            sec: 0
        };
    }

    componentDidMount() {
        // update every second
        this.interval = setInterval(() => {
            const date = this.calculateCountdown(this.props.date);
            date ? this.setState(date) : this.stop();
        }, 1000);
    }

    componentWillUnmount() {
        this.stop();
    }

    calculateCountdown(endDate) {
        let diff =
            (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

        // clear countdown when date is reached
        if (diff <= 0) return false;

        const timeLeft = {
            hours: 0,
            min: 0,
            sec: 0
        };

        if (diff >= 3600) {
            // 60 * 60
            timeLeft.hours = Math.floor(diff / 3600);
            diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
            timeLeft.min = Math.floor(diff / 60);
            diff -= timeLeft.min * 60;
        }
        timeLeft.sec = diff;
        return timeLeft;
    }

    stop() {
        clearInterval(this.interval);
    }

    addLeadingZeros(value) {
        value = String(value);
        while (value.length < 2) {
            value = "0" + value;
        }
        return value;
    }

    render() {
        const countDown = this.state;

        return (
            <div className="Countdown">
                <span className="Countdown-col">
                    <span className="Countdown-col-element">
                        <strong>{this.addLeadingZeros(countDown.hours)}</strong>
                        <span>Saat</span>
                    </span>
                </span>

                <span className="Countdown-col">
                    <span className="Countdown-col-element">
                        <strong>{this.addLeadingZeros(countDown.min)}</strong>
                        <span>Dakika</span>
                    </span>
                </span>

                <span className="Countdown-col">
                    <span className="Countdown-col-element">
                        <strong>{this.addLeadingZeros(countDown.sec)}</strong>
                        <span>Saniye</span>
                    </span>
                </span>
            </div>
        );
    }
}

Countdown.defaultProps = {
    date: new Date()
};

export default Countdown;

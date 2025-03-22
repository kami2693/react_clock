import { Component } from 'react';

interface Props {
  clockName: string;
}

export class Clock extends Component<Props> {
  private timerId: number | null = null;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.forceUpdate();
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName } = this.props;
    if (prevProps.clockName !== clockName) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { clockName } = this.props;
    const currentTime = new Date().toUTCString().slice(-12, -4);

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>
        {' time is '}
        <span className="Clock__time">
          {currentTime}
        </span>
      </div>
    );
  }
}

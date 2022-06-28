import React, {Component, Suspense} from "react";
import Lottie from "react-lottie";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    const animationData = this.props.animationData;
    const defaultOptions = {
      loop: this.props.loop ? this.props.loop : true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <Suspense fallback={<Loading />}>
        <Lottie options={defaultOptions} height={this.props.height} width={this.props.width} isClickToPauseDisabled={true} />
      </Suspense>
    );
  }
}

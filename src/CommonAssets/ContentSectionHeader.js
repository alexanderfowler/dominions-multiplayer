import React from "react";
import PropTypes from "prop-types";
import "./ContentSectionHeader.css";

export default class ContentSectionHeader extends React.Component {
    static propTypes = {
        sectionHeaderText: PropTypes.string,
        leftSidePicture: PropTypes.element,
        rightSidePicture: PropTypes.element,
    };

    render() {
        return (
            <div>
                <div className="Content-zero-size-div">
                {
                    this.props.leftSidePicture == null ? null :
                        <img src={this.props.leftSidePicture} className="Content-img Content-img-left" alt="lhs img"></img>
                }
                </div>
                <div className="Content-section-header">
                    <div className="Content-row">
                        <span className="Content-text">{this.props.sectionHeaderText}
                        </span>
                    </div>
                    <div className="Content-zero-size-div Content-right-justify">
                        {
                            this.props.rightSidePicture == null ? null :
                                <img src={this.props.rightSidePicture} className="Content-img Content-img-right" alt="rhs img"></img>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

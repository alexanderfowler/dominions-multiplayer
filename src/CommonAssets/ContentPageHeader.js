import React from "react";
import PropTypes from "prop-types";
import "./ContentPageHeader.css";

export default class ContentPageHeader extends React.Component {
    static propTypes = {
        sectionHeaderText: PropTypes.string,
    };

    render() {
        return (
            <h1 className="Content-page-header">{this.props.sectionHeaderText}
            </h1>
        );
    }
}

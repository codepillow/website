import React from 'react';
import PropTypes from 'prop-types';
import style from './index.scss';

export function Svg(props) {
    const Element = props.el;
    const className =
        `svg-container ${style.root}` +
        (props.className ? ` ${props.className}` : '');

    return (
        <Element
            style={props.style}
            className={className}
            dangerouslySetInnerHTML={{ __html: props.svg }}
        />
    );
}

Svg.propTypes = {
    className: PropTypes.string,
    el: PropTypes.string.isRequired,
    style: PropTypes.object,
    svg: PropTypes.string.isRequired,
};

Svg.defaultProps = {
    el: 'span',
};
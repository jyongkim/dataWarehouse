import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function IconWithTooltip(props) {
    const {Icon, text, action} = props
    return (
        <OverlayTrigger
            key="right"
            placement="right"
            overlay={
                <Tooltip id={`tooltip-right`}>
                    {text}
                </Tooltip>
            }
            >
            <Icon style={{ cursor: 'pointer', marginLeft:'10px' }} onClick={() => action()}></Icon>
            </OverlayTrigger>
    );
}

export default IconWithTooltip;
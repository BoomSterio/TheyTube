import React from 'react'
import './ToolIcon.css'
import {Fade} from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip'
import withStyles from '@material-ui/core/styles/withStyles'

const ToolIcon = ({Icon, title}) => {
    const StyledTooltip = withStyles({
        tooltip: {
            fontSize: "14px",
            backgroundColor: "rgba(96, 96, 96, 0.85)"
        }
    })(Tooltip);

    return (
        <div className={'toolIcon'}>
            <StyledTooltip title={title} TransitionComponent={Fade}>
                <Icon className={'icon'}/>
            </StyledTooltip>
        </div>
    )
}

export default ToolIcon
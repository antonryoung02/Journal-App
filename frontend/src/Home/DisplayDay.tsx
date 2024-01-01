import {DisplayProps} from './HomePage';
import {getDateString} from './HomeUtils';
function DisplayDay({date}:DisplayProps) {
    return  (
        <div id="display-day">
            <div id="display-day-container">
                <p>This is a day component</p>
                <p>{getDateString(date)}</p>
            </div>
        </div>
    )
}

export default DisplayDay;
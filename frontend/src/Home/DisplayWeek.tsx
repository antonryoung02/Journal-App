//TODO not implemented for now
import {DisplayProps} from './HomePage';
import {getDateString} from './HomeUtils';
function DisplayWeek({date}:DisplayProps) {
    return  (
        <div>
            <p>This is a week component</p>
            <p>{getDateString(date)}</p>
        </div>
    )
}

export default DisplayWeek;
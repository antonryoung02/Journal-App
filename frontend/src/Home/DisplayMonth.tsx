//TODO not implemented for now
import {DisplayProps} from './HomePage';
import {getDateString} from './HomeUtils';
function DisplayMonth({date}:DisplayProps) {
    return  (
        <div>
            <p>This is a month component</p>
            <p>{getDateString(date)}</p>
        </div>
    )
}

export default DisplayMonth;
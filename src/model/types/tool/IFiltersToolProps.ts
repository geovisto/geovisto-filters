// Geovisto core
import {
    IMapFilterManager,
    IMapFilterRule,
    IMapToolProps
} from "geovisto";


/**
 * This type provides the specification of the filters tool props model.
 * 
 * @author Jiri Hynek
 */
type IFiltersToolProps = IMapToolProps & {
    manager?: IMapFilterManager;
    rules?: IMapFilterRule[];
}
export default IFiltersToolProps;
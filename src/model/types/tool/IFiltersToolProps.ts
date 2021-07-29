// Geovisto core
import {
    IMapToolProps
} from "geovisto";

import IMapFilterManager from "../filter/IMapFilterManager";
import IMapFilterRule from "../filter/IMapFilterRule";

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
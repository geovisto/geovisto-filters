// Geovisto core
import {
    IMapFilterManager,
    IMapFilterRule,
    IMapToolDefaults
} from "geovisto";

import IFiltersToolConfig from "./IFiltersToolConfig";


/**
 * This interface declares functions which return the default state values.
 * 
 * @author Jiri Hynek
 */
interface IFiltersToolDefaults extends IMapToolDefaults {

    /**
     * It returns default config if no config is given.
     */
    getConfig(): IFiltersToolConfig;

    /**
     * It returns default filters manager.
     */
    getFiltersManager(): IMapFilterManager;

    /**
     * It returns default filter rules.
     */
    getFilterRules(): IMapFilterRule[];
}
export default IFiltersToolDefaults;
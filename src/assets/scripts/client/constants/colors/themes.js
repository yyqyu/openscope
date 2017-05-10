import { COLOR } from './colors';
import { WIND_VANE_THEME } from './windVaneThemes';
import { TERRAIN_THEME } from './terrainThemes';
import { DATA_BLOCK_THEME } from './dataBlockThemes';

const DEFAULT = {
    AIRSPACE_FILL: COLOR.AIRSPACE_RADIUS_FILL,
    AIRSPACE_PERIMETER: COLOR.AIRSPACE_RADIUS_STROKE,
    BACKGROUND: COLOR.MODERATE_GREEN,
    COMPASS_HASH: COLOR.LIGHT_SILVER,
    COMPASS_TEXT: COLOR.WHITE,
    CROSSHAIR_STROKE: COLOR.CROSSHAIR_STROKE,
    DATA_BLOCK: DATA_BLOCK_THEME.DEFAULT,
    FIX_FILL: COLOR.WHITE_05,
    FIX_TEXT: COLOR.WHITE_05,
    PROJECTED_TRACK_LINES: COLOR.WHITE,
    RADAR_TARGET_IN_RANGE: COLOR.WHITE,
    RADAR_TARGET_OUTSIDE_RANGE: COLOR.LIGHT_SILVER,
    RADAR_TARGET_PROJECTION_ARRIVAL: COLOR.RED_06,
    RADAR_TARGET_PROJECTION_DEPARTURE: COLOR.BLUE_06,
    RADAR_TARGET_PROJECTION_ESTABLISHED_ON_APPROACH: COLOR.RED,
    RANGE_RING_COLOR: COLOR.AIRSPACE_RANGE_RING_COLOR,
    RESTRICTED_AIRSPACE: COLOR.RESTRICTED_AIRSPACE_STROKE,
    RING_CONFLICT: COLOR.WHITE_02,
    RING_VIOLATION: COLOR.RED,
    RUNWAY: COLOR.WHITE_04,
    RUNWAY_EXTENDED_CENTERLINE: COLOR.DARK_PALE_GREEN,
    RUNWAY_LABELS: COLOR.WHITE_08,
    SID: COLOR.BLUE_06,
    TERRAIN: TERRAIN_THEME.DEFAULT,
    TOP_ROW_TEXT: COLOR.WHITE_08,
    TRAILING_SEPARATION_INDICATOR: COLOR.RED_08,
    WIND_VANE: WIND_VANE_THEME.DEFAULT,
    VIDEO_MAP: COLOR.VIDEO_MAP_STROKE
};

export const THEME = {
    DEFAULT: DEFAULT
};
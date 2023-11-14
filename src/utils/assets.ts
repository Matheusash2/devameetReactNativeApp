import { ImageSourcePropType, MatrixTransform, PerpectiveTransform, RotateTransform, RotateXTransform, RotateYTransform, RotateZTransform, ScaleTransform, ScaleXTransform, ScaleYTransform, SkewXTransform, SkewYTransform, TranslateXTransform, TranslateYTransform } from "react-native"

interface IImagePath {
    [key: string]: ImageSourcePropType
}

interface IObjectPosition {
    [key: string]: {
        left: number,
        top: number,
        scale:
        | (
              | PerpectiveTransform
              | RotateTransform
              | RotateXTransform
              | RotateYTransform
              | RotateZTransform
              | ScaleTransform
              | ScaleXTransform
              | ScaleYTransform
              | TranslateXTransform
              | TranslateYTransform
              | SkewXTransform
              | SkewYTransform
              | MatrixTransform
          )[]
    }

}

export const avatars: IImagePath = {
    avatar_01_back: require('../assets/avatar/avatar_01_back.png'),
    avatar_01_front: require('../assets/avatar/avatar_01_front.png'),
    avatar_01_left: require('../assets/avatar/avatar_01_left.png'),
    avatar_01_right: require('../assets/avatar/avatar_01_right.png'),
    avatar_02_back: require('../assets/avatar/avatar_02_back.png'),
    avatar_02_front: require('../assets/avatar/avatar_02_front.png'),
    avatar_02_left: require('../assets/avatar/avatar_02_left.png'),
    avatar_02_right: require('../assets/avatar/avatar_02_right.png'),
    avatar_03_back: require('../assets/avatar/avatar_03_back.png'),
    avatar_03_front: require('../assets/avatar/avatar_03_front.png'),
    avatar_03_left: require('../assets/avatar/avatar_03_left.png'),
    avatar_03_right: require('../assets/avatar/avatar_03_right.png'),
    avatar_04_back: require('../assets/avatar/avatar_04_back.png'),
    avatar_04_front: require('../assets/avatar/avatar_04_front.png'),
    avatar_04_left: require('../assets/avatar/avatar_04_left.png'),
    avatar_04_right: require('../assets/avatar/avatar_04_right.png'),
    avatar_05_back: require('../assets/avatar/avatar_05_back.png'),
    avatar_05_front: require('../assets/avatar/avatar_05_front.png'),
    avatar_05_left: require('../assets/avatar/avatar_05_left.png'),
    avatar_05_right: require('../assets/avatar/avatar_05_right.png'),
    avatar_06_back: require('../assets/avatar/avatar_06_back.png'),
    avatar_06_front: require('../assets/avatar/avatar_06_front.png'),
    avatar_06_left: require('../assets/avatar/avatar_06_left.png'),
    avatar_06_right: require('../assets/avatar/avatar_06_right.png'),
    avatar_07_back: require('../assets/avatar/avatar_07_back.png'),
    avatar_07_front: require('../assets/avatar/avatar_07_front.png'),
    avatar_07_left: require('../assets/avatar/avatar_07_left.png'),
    avatar_07_right: require('../assets/avatar/avatar_07_right.png'),
    avatar_08_back: require('../assets/avatar/avatar_08_back.png'),
    avatar_08_front: require('../assets/avatar/avatar_08_front.png'),
    avatar_08_left: require('../assets/avatar/avatar_08_left.png'),
    avatar_08_right: require('../assets/avatar/avatar_08_right.png'),
    avatar_09_back: require('../assets/avatar/avatar_09_back.png'),
    avatar_09_front: require('../assets/avatar/avatar_09_front.png'),
    avatar_09_left: require('../assets/avatar/avatar_09_left.png'),
    avatar_09_right: require('../assets/avatar/avatar_09_right.png'),
}

export const objectsPosition: IObjectPosition = {
    chair_01_blue: { left: -9, top: -12, scale: [{ scale: 0.5 }] },
    chair_01_red: { left: -9, top: -12, scale: [{ scale: 0.5 }] },
    chair_01_white: { left: -9, top: -12, scale: [{ scale: 0.5 }] },
    chair_01_yellow: { left: -9, top: -12, scale: [{ scale: 0.5 }] },
    chair_01: { left: 2, top: -12, scale: [{ scale: 0.5 }] },
    chair_02: { left: 2, top: -12, scale: [{ scale: 0.5 }] },
    chair_03: { left: 2, top: -12, scale: [{ scale: 0.5 }] },
    couch_01: { left: -27, top: -15, scale: [{ scale: 0.52 }] },
    couch_02: { left: -27, top: -15, scale: [{ scale: 0.52 }] },
    couch_03: { left: -27, top: -15, scale: [{ scale: 0.52 }] },
    decor_01: { left: -2, top: -15, scale: [{ scale: 0.5 }] },
    decor_02: { left: -2, top: -15, scale: [{ scale: 0.5 }] },
    decor_03: { left: -2, top: -15, scale: [{ scale: 0.5 }] },
    decor_04: { left: -2, top: -15, scale: [{ scale: 0.5 }] },
    decor_05: { left: -2, top: -15, scale: [{ scale: 0.5 }] },
    decor_06: { left: -2, top: -15, scale: [{ scale: 0.5 }] },
    floor_01: { left: -50, top: -86, scale: [{ scaleX: 1 }, { scaleY: 0.7 }] },
    floor_02: { left: -50, top: -86, scale: [{ scaleX: 1 }, { scaleY: 0.7 }] },
    floor_04: { left: -50, top: -86, scale: [{ scaleX: 1 }, { scaleY: 0.7 }] },
    floor_05: { left: -50, top: -86, scale: [{ scaleX: 1 }, { scaleY: 0.7 }] },
    floor_06: { left: -50, top: -86, scale: [{ scaleX: 1 }, { scaleY: 0.7 }] },
    nature_01: { left: -7, top: -19, scale: [{ scale: 0.5 }] },
    nature_02: { left: -7, top: -19, scale: [{ scale: 0.5 }] },
    nature_03: { left: -7, top: -19, scale: [{ scale: 0.5 }] },
    nature_04: { left: -14, top: -19, scale: [{ scale: 0.5 }] },
    nature_05: { left: -7, top: -19, scale: [{ scale: 0.5 }] },
    nature_06: { left: -7, top: - 19, scale: [{ scale: 0.5 }] },
    nature_07: { left: -7, top: - 19, scale: [{ scale: 0.5 }] },
    nature_08: { left: -7, top: - 19, scale: [{ scale: 0.5 }] },
    nature_09: { left: -7, top: - 19, scale: [{ scale: 0.5 }] },
    rug_01: { left: -18, top: - 39, scale: [{ scaleX: 0.65 }, { scaleY: 0.62 }] },
    rug_02: { left: -35, top: - 40, scale: [{ scaleX: 0.65 }, { scaleY: 0.65 }] },
    rug_03: { left: -18, top: - 39, scale: [{ scaleX: 0.65 }, { scaleY: 0.62 }] },
    table_01: { left: -7, top: - 39, scale: [{ scale: 0.55 }] },
    table_02: { left: -7, top: - 39, scale: [{ scale: 0.55 }] },
    table_03: { left: -16, top: - 39, scale: [{ scale: 0.55 }] },
    table_04: { left: -14, top: - 19, scale: [{ scale: 0.55 }] },
    table_05: { left: -14, top: - 19, scale: [{ scale: 0.55 }] },
    table_06: { left: -14, top: - 19, scale: [{ scale: 0.55 }] },
    wall_01: { left: 0, top: -20, scale: [{ scaleX: 1 }, { scaleY: 0.5 }] },
    wall_02: { left: 0, top: -20, scale: [{ scaleX: 1 }, { scaleY: 0.5 }] },
    wall_03: { left: 0, top: -20, scale: [{ scaleX: 1 }, { scaleY: 0.5 }] },
    avatar: { left: -2, top: -15, scale: [{ scale: 0.55 }] },
};

export const objectsPaths: IImagePath = {
    chair_01_blue_back: require("../assets/chair/chair_01_blue_back.png"),
    chair_01_blue_front: require("../assets/chair/chair_01_blue_front.png"),
    chair_01_blue_left: require("../assets/chair/chair_01_blue_left.png"),
    chair_01_blue_right: require("../assets/chair/chair_01_blue_right.png"),
    chair_01_red_back: require("../assets/chair/chair_01_red_back.png"),
    chair_01_red_front: require("../assets/chair/chair_01_red_front.png"),
    chair_01_red_left: require("../assets/chair/chair_01_red_left.png"),
    chair_01_red_right: require("../assets/chair/chair_01_red_right.png"),
    chair_01_white_back: require("../assets/chair/chair_01_white_back.png"),
    chair_01_white_front: require("../assets/chair/chair_01_white_front.png"),
    chair_01_white_left: require("../assets/chair/chair_01_white_left.png"),
    chair_01_white_right: require("../assets/chair/chair_01_white_right.png"),
    chair_01_yellow_back: require("../assets/chair/chair_01_yellow_back.png"),
    chair_01_yellow_front: require("../assets/chair/chair_01_yellow_front.png"),
    chair_01_yellow_left: require("../assets/chair/chair_01_yellow_left.png"),
    chair_01_yellow_right: require("../assets/chair/chair_01_yellow_right.png"),
    chair_02_back: require("../assets/chair/chair_02_back.png"),
    chair_02_front: require("../assets/chair/chair_02_front.png"),
    chair_02_left: require("../assets/chair/chair_02_left.png"),
    chair_02_right: require("../assets/chair/chair_02_right.png"),
    chair_03_back: require("../assets/chair/chair_03_back.png"),
    chair_03_front: require("../assets/chair/chair_03_front.png"),
    chair_03_left: require("../assets/chair/chair_03_left.png"),
    chair_03_right: require("../assets/chair/chair_03_right.png"),
    couch_01_back: require("../assets/couch/couch_01_back.png"),
    couch_01_front: require("../assets/couch/couch_01_front.png"),
    couch_01_left: require("../assets/couch/couch_01_left.png"),
    couch_01_right: require("../assets/couch/couch_01_right.png"),
    couch_02_back: require("../assets/couch/couch_02_back.png"),
    couch_02_front: require("../assets/couch/couch_02_front.png"),
    couch_02_left: require("../assets/couch/couch_02_left.png"),
    couch_02_right: require("../assets/couch/couch_02_right.png"),
    couch_03_back: require("../assets/couch/couch_03_back.png"),
    couch_03_front: require("../assets/couch/couch_03_front.png"),
    couch_03_left: require("../assets/couch/couch_03_left.png"),
    couch_03_right: require("../assets/couch/couch_03_right.png"),
    decor_01: require("../assets/decor/decor_01.png"),
    decor_02: require("../assets/decor/decor_02.png"),
    decor_03: require("../assets/decor/decor_03.png"),
    decor_04: require("../assets/decor/decor_04.png"),
    decor_05: require("../assets/decor/decor_05.png"),
    decor_06_front: require("../assets/decor/decor_06_front.png"),
    decor_06_left: require("../assets/decor/decor_06_left.png"),
    decor_06_right: require("../assets/decor/decor_06_right.png"),
    floor_01: require("../assets/floor/floor_01.png"),
    floor_02: require("../assets/floor/floor_02.png"),
    floor_04: require("../assets/floor/floor_04.png"),
    floor_05: require("../assets/floor/floor_05.png"),
    floor_06: require("../assets/floor/floor_06.png"),
    nature_01: require("../assets/nature/nature_01.png"),
    nature_02: require("../assets/nature/nature_02.png"),
    nature_03: require("../assets/nature/nature_03.png"),
    nature_04: require("../assets/nature/nature_04.png"),
    nature_05: require("../assets/nature/nature_05.png"),
    nature_06: require("../assets/nature/nature_06.png"),
    nature_07: require("../assets/nature/nature_07.png"),
    nature_08: require("../assets/nature/nature_08.png"),
    nature_09: require("../assets/nature/nature_09.png"),
    rug_01: require("../assets/rug/rug_01.png"),
    rug_02: require("../assets/rug/rug_02.png"),
    rug_03: require("../assets/rug/rug_03.png"),
    table_01: require("../assets/table/table_01.png"),
    table_02: require("../assets/table/table_02.png"),
    table_03: require("../assets/table/table_03.png"),
    table_04: require("../assets/table/table_04.png"),
    table_05: require("../assets/table/table_05.png"),
    table_06: require("../assets/table/table_06.png"),
    wall_01: require("../assets/wall/wall_01.png"),
    wall_02: require("../assets/wall/wall_02.png"),
    wall_03: require("../assets/wall/wall_03.png"),
   }
   
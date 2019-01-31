

export default {
    extends: [
        "./at-rule",
        "./block",
        "./color",
        "./comment",
        "./declaration-block",
        "./font-family",
        "./function",
        "./general",
        "./keyframe-declaration",
        "./media-features",
        "./property",
        "./selector",
        "./string",
        "./unit"
    ].map(require.resolve)
};

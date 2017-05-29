/**
 * The purpose of this function is to get the  dark shades of the color
 * @params primaryColor, blendValue
 * @return Color:String
 * */

export default blend = (colorPrimary, blendValue) => {
    colorPrimary = String(colorPrimary).replace(/[^0-9a-f]/gi, '');
    if (colorPrimary.length < 6) {
        colorPrimary = colorPrimary[0]+colorPrimary[0]+colorPrimary[1]+colorPrimary[1]+colorPrimary[2]+colorPrimary[2];
    }
    blendValue = blendValue || 0;
    let rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
        c = parseInt(colorPrimary.substr(i*2,2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * blendValue)), 255)).toString(16);
        rgb += ("00"+c).substr(c.length);
    }

    return rgb;
}
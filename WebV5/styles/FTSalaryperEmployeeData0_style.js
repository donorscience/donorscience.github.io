var size = 0;
var ranges_FTSalaryperEmployeeData0 = [[17737.000000, 35170.450000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(252,251,253,1.0)'})})
    })]],
[35170.450000, 40528.828571, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(219,219,235,1.0)'})})
    })]],
[40528.828571, 45751.600000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(162,159,203,1.0)'})})
    })]],
[45751.600000, 49895.437143, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(106,81,163,1.0)'})})
    })]],
[49895.437143, 76557.333333, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(63,0,125,1.0)'})})
    })]]];
var styleCache_FTSalaryperEmployeeData0={}
var style_FTSalaryperEmployeeData0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("median_ft_salary");
    var labelText = "";
    var key = "";
    size = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if ("" !== null) {
        labelText = String("");
    } else {
        labelText = ""
    }
    var style = ranges_FTSalaryperEmployeeData0[0][2];
    for (i = 0; i < ranges_FTSalaryperEmployeeData0.length; i++){
        var range = ranges_FTSalaryperEmployeeData0[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    key = value + "_" + labelText
    if (!styleCache_FTSalaryperEmployeeData0[key]){
        var text = new ol.style.Text({
                font: '11.7px \'Noto Sans\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_FTSalaryperEmployeeData0[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_FTSalaryperEmployeeData0[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};
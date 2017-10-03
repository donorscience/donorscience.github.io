var size = 0;


var style_HearingLossPrevalencebyDisseminationArea_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("CHHA_Hearingloss_Prevs_final (1)_HLoss_Prev");
    var labelText = "";
    size = 0;
    var labelFont = "font: '11.7px \'Noto Sans\', sans-serif'";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if ("" !== null) {
        labelText = String("");
    }
    if (value > 0.000000 && value <= 0.056714) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,245,240,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })]
                    } else if (value > 0.056714 && value <= 0.113429) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(254,214,196,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })]
                    } else if (value > 0.113429 && value <= 0.170143) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(252,164,135,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })]
                    } else if (value > 0.170143 && value <= 0.226857) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(252,112,80,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })]
                    } else if (value > 0.226857 && value <= 0.283571) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(235,54,42,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })]
                    } else if (value > 0.283571 && value <= 0.340286) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(186,20,25,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })]
                    } else if (value > 0.340286 && value <= 0.397000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(103,0,13,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })]
                    };

    return style;
}
function update() {

    var features = lyr_HearingLossPrevalencebyDisseminationArea_0.getSource().getFeatures();
    features.forEach(function(feature){
        var context = {
            feature: feature,
            variables: {}
        };

        // Get the label text as a string
        var text = "";

        // Get the center point in pixel space
        var center = ol.extent.getCenter(feature.getGeometry().getExtent());
        var pixelCenter = map.getPixelFromCoordinate(center);

        var size = 12;
        var halfText = (size + 1) * (text.length / 4);

        // Create a bounding box for the label using known pixel heights
        var minx = parseInt(pixelCenter[0] - halfText);
        var maxx = parseInt(pixelCenter[0] + halfText);

        var maxy = parseInt(pixelCenter[1] - (size / 2));
        var miny = parseInt(pixelCenter[1] + (size / 2));

        // Get bounding box points back into coordinate space
        var min = map.getCoordinateFromPixel([minx, miny]);
        var max = map.getCoordinateFromPixel([maxx, maxy]);

        // Create the bounds
        var bounds = {
            bottomLeft: min,
            topRight: max
        };
        // Weight longer labels higher, use their name as the ID
        labelEngine.ingestLabel(bounds, text, text.length, feature)

    });

    // Call the label callbacks for showing and hiding
    labelEngine.update();

};

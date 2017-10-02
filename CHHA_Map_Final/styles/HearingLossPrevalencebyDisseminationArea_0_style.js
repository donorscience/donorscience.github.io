var size = 0;


var style_HearingLossPrevalencebyDisseminationArea_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("CHHA_Hearingloss_Prevs_final_HLoss_Prev");
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
    if (value > 0.000000 && value <= 0.093625) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(225,240,255,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })]
                    } else if (value > 0.093625 && value <= 0.187250) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(200,221,240,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })]
                    } else if (value > 0.187250 && value <= 0.280875) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(115,179,216,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })]
                    } else if (value > 0.280875 && value <= 0.374500) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(40,121,185,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })]
                    } else if (value > 0.374500 && value <= 0.468125) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(8,48,107,0.6)'}),
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

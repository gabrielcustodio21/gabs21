function setBlack (pixel){
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
}

function addBorder (img, borderThck){
    var width = img.getWidth();
    var height = img.getHeight();
    var wborder = width - borderThck;
    var hborder = height - borderThck;
    for (var pixel of img.values()){
        if (pixel.getX() >= wborder || pixel.getX()<= borderThck ){
            setBlack(pixel);    
        }
        if (pixel.getY() >= hborder || pixel.getY()<= borderThck ){
            setBlack(pixel);
        }    
    }
    print (img);
    
}



var pandaImg = new SimpleImage("smallpanda.png");
addBorder(pandaImg, 10)
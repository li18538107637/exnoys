<!DOCTYPE html>  
<html>  
<head>  
    <title>test</title>  
    <meta charset="utf-8">  
</head>  
<style type="text/css">  
    .frame{  
        width: 200px;  
        height: 50px;  
        border:1px solid #000;  
        border-radius: 10px;  
        position: relative; 
top:10rem;		
    }  
    .triangle{  
     width: 10px;
    height: 50px;
    display: inline-block;
    position: absolute;
    top: -44px;
    right: 10px;
    background-color: #fff;
    border-right: 1px solid #000;
    transform: rotate(210deg);
    -ms-transform: rotate(210deg);
    -moz-transform: rotate(210deg);
    -webkit-transform: rotate(210deg);
    -o-transform: rotate(210deg); 
    }  
	.triangle1{
    width: 0px;
    height: 45px;
    display: inline-block;
    position: absolute;
    top: -44px;
    right: 13px;
    background-color: #fff;
    border-left: 1px solid #000;
    transform: rotate(18deg);
    -ms-transform: rotate(18deg);
    -moz-transform: rotate(225deg);
    -webkit-transform: rotate(18deg);
    -o-transform: rotate(18deg);
}
</style>  
<body>  
<div class="frame">  
    <span class="triangle"></span>
<span class="triangle1"></span>  
</div>   
</html>  
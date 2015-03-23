<?php
    //ÉèÖÃ½ÓÊÕÊý¾ÝµÄ¸ñÊ½
	header('Content-Type: application/json; charset=utf-8'); 
    //»ñÈ¡¿Í»§¶Ë·¢ËÍÀ´µÄÊý¾Ý	
	$data = json_decode(file_get_contents("php://input"));
	/*
	 »ñÈ¡¸÷¸öÊôÐÔÖµ£¬±£´æÖÁ·þÎñÆ÷ÖÐ
	 ...
	*/
	//·µ»Ø¸üÐÂ³É¹¦µÄ±êÖ¾
	die(json_encode(array('code'=>'0')));
?>
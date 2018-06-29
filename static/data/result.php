<?php

echo "<script>alert('提交成功')</script>";
@extract($_POST);  
 
$filename = "log.txt";
                           
    $fp=fopen("$filename", "a+"); 
    if ( !is_writable($filename) ){
        die("文件:" .$filename. "不可写，请检查！");
    }else{
        $str = $username."\r\n".$tel."\r\n".$content."\r\n\r\n";       
        fwrite($fp,$str);  
         fclose($fp);    
    }
 
?>
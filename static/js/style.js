var btn = document.getElementById('clicked');
var cover=document.getElementById('fix');
var mask=document.getElementById('mask');
var allmiao=document.getElementById('allmiao');
btn.addEventListener('click',function(){
            cover.style.display='block';
            mask.style.display='block';

            var miao1 = document.getElementById('getname').value;
            document.getElementById('userName').innerText = miao1;

            var radio = document.getElementById("getpause");  
            for (i=0; i<radio.length; i++) {  
            	if (radio[i].checked) {  
            		document.getElementById('pause').innerText = radio[i].value;  
            	}  
            } 
            var miao3 = document.getElementById('getdir').value;
            document.getElementById('dir').innerText = miao3;
            var miao4 = document.getElementById('getemail').value;
            document.getElementById('email').innerText = miao4;
			var miao5 = document.getElementById('getcontent').value;
			document.getElementById('content').innerText = miao5;
        })
mask.addEventListener('click',function(){
            cover.style.display='none';
            mask.style.display='none';
        })
allmiao.addEventListener('click',function(){
			alert('提交成功');
            window.location('Untitled-ly.html');
        })


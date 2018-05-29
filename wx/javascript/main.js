			$(document).ready(function(){
				// 点击发送按钮
					var send=$('#send');
					send.on('click',function(){ 

						var main=$('#main'); 
	     				var text=$('#in_text');     				
	     				if(text.val()==''){
	     					alert("输入为空"); //输入为空提醒
	     				}else{
	     					new_text='<li  class="to"><img class="touxiang fr" src="./img/头像1.jpg"> <div ><span class="text fr">'+text.val()+'</span><i></i></div><div class="clear"></div></li>';
	     					main.append(new_text); //发送信息添加聊天窗口
	     					text.val(''); //输入框重置
	     					}
 					});

 					var send_type=$('#send_type');
 					send_type.on('click',function(){ 
 						//切换输入模式
 						var yuyin=$('#yuyin');
 						var in_text=$('#in_text');
	 					var img=["yuyin.png","jianpang.png"] 
	 					var imgtitle=send_type.attr("title");

	 					if(imgtitle=='yuyin'){//点击语音输入
	 						send_type.attr('title','jianpang'); //图标换为键盘
	 						send_type.attr('src','./img/jianpang.png');
	 						in_text.hide();//文本框隐藏
	 						yuyin.show();//语音框弹出

	 					}else{//点击键盘输入

	 						send_type.attr('title','yuyin');//图标换为语音
	 						send_type.attr('src','./img/yuyin.png');
	 						yuyin.hide();//语音框隐藏
	 						in_text.show();	 //文本框弹出
	 					}						 						     				
     				});	   

     				var yuyin=$('#yuyin');
     				var yuyin_img=	$('#yuyin_img')
	 				yuyin.mousedown(function(){//点击 按住说话按钮
	 					yuyin.css("background-color","#fff"); 
	 					yuyin_img.show();//显示语音输入状态
	 				});

	 				yuyin.mouseup(function(){//松开 按住说话按钮
	 					yuyin.css("background-color","#f3f3f3");
	 					yuyin_img.hide();//隐藏语音输入状态
	 				});
	 				                          
				});

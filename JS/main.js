
				var vm = new Vue({
					el:"#root",
					data:{
						list:[{},{},{},{},{}]
					},					
					beforeMount:function(){
						const self=this;
						lists=self.list;
						console.log(lists);
						var i=0;
		               $.ajax(
                            {
                            url:"../xml/blog.xml",      //发送请求的文件
                            type:"get",          //设置提交方式
                            dataType:"xml",   
                                //接收服务端数据的格式
                           
                            success:function(xml){   //发送成功时执行这个函数，xml代表返回的xml形式的数据
                                $(xml).find("blog").each(function(){
                                   lists[i].title = $(this).find("title").text();
                                   lists[i].bf = $(this).find("bf").text();
                                   lists[i].text = $(this).find("html").text();
                                   lists[i].img = $(this).find("img").text();
                                   lists[i].date = $(this).find("date").text();
                                   lists[i].herf ="/blogl.html?id="+ $(this).find("ide").text();
                                   i++;
                                                                  
                                });
                            },
                              //发生错误时执行此函数           
                              //XMLHttpRequest.status表示请求状态，200表示成功
                              //XMLHttpRequest.readyState表示接收状态4表示接收完毕
                            error:function(XMLHttpRequest, textStatus, errorThrown){
                                alert(XMLHttpRequest.status);
                                alert(XMLHttpRequest.readyState);
                            }
                            }

                      );
                    }
		            })


		
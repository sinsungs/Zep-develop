// blueman.png를 객체화 하여 blueman 변수에 저장
// let book = App.loadSpritesheet("book.png");

App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {

			// if(obj.text == 1) {
			// 	sender.showConfirm("새로운 책을 추가하시겠습니까 ? ", (result) => {
            //         Map.putObject(29, 13, book);
			// 	});
				
			// }

            if(obj.text == 1) {

                    // App.httpGet(
                    //     "http://ec2-43-201-154-148.ap-northeast-2.compute.amazonaws.com/index.php",
                    //     null,
                    //     function (res) {

                    //         sender.showAlert(res.title, function() {
                        
                    //         })
                    //         sender.showAlert(res.content, function() {
                        
                    //         })

                            
                    //     }
                    // );

                    


                        sender.showConfirm("첫번째 도서의 베스트 독후감을 읽어보시겠습니까 ?", (result) => {
                            if(result == true){
                                setTimeout(function(){

                                    sender.showAlert(result);
                                    
                                }, 300);
                            }
                        })
                     
                    
 


			}

            if(obj.text == 11) {

                sender.showPrompt("첫번째 추천 도서의 독후감을 작성해주세요.", function(inputText){
                
                })

            }

            if(obj.text == 2) {

                sender.showConfirm("두번째 도서의 베스트 독후감을 읽어보시겠습니까 ?", (result) => {
                    setTimeout(function(){

                        sender.showAlert(result);
                        
                    }, 300);
                    
                })

			}

            if (obj.text == 2) {
                sender.showConfirm("두번째 도서의 베스트 독후감을 읽어보시겠습니까?", (result) => {
                    setTimeout(function() {

                        const report = "이 책은 흥미로운 이야기와 깊은 의미를 담고 있어서 매우 흥미로웠습니다. 저자는 강렬한 서술력을 가지고 있어서 이야기에 몰입할 수 있었고, 인물들의 성장과 변화를 잘 그려냈습니다. 또한 책에서 다루는 주제들이 현대 사회에 대한 고민과 함께 잘 반영되어 있어 생각할 거리가 많았습니다. 이 책은 꼭 읽어보시기를 추천합니다!";
                        sender.showAlert(report);
     
                    }, 300);
                });
            }

            if(obj.text == 22) {

                sender.showPrompt("두번째 추천 도서의 독후감을 작성해주세요.", function(inputText){
                
                })

			}

            if(obj.text == 4) {

                sender.showConfirm("네번째 도서의 독후감을 읽어보시겠습니까 ?", (result) => {
                    setTimeout(function(){
                        sender.showAlert(result);
                    }, 300);
                    
                })

			}

            if(obj.text == 5) {

                sender.tag = {
                    widget: null,
                };
            
                sender.tag.widget = sender.showWidget("sample.html", "top", 600, 500);
                sender.tag.widget.onMessage.Add(function (sender, msg) {
                    // 위젯에서 App으로 'type: close'라는 메시지를 보내면 위젯을 파괴함
                    if (msg.type == "close") {
                        sender.showCenterLabel("위젯이 닫혔습니다.");
                        sender.tag.widget.destroy();
                        sender.tag.widget = null;
                       
                    }

                    if (sender.tag.widget) {
                        sender.tag.widget.sendMessage({
                            // text: "블루맨",
                            // 추천 도서 리스트 (랭킹)
                            // 추천 도서 리스트별 추천 수 
                            // 추천 도서 별 독후감 작성 수 
                        });
                    }
                });

			}




//             //UI가 노출될 위치(정렬, 가로, 세로) 값을 변수로 사전에 제작
// let postion = 'middle';
// let width = 400;
// let height = 400;

// // my.html로 state라는 태그를 만들어 hello라는 값을 전달
// let _widget = App.showWidget('my.html', position, width, height);
// _widget.sendMessage({
// 	state: "hello",
// }); 


            } else {
                App.sayToAll(`obj is null`, 0xFFFFFF);
            }
        }
    });


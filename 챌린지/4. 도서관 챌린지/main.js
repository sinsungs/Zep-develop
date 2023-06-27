// blueman.png를 객체화 하여 blueman 변수에 저장
// let book = App.loadSpritesheet("book.png");

App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {

            // if(obj.text == 1) {

            //             sender.showConfirm("첫 번째 추천 도서 [역행자]\n한 줄 독후감를 읽어보시겠습니까?", (result) => {
            //                 if(result == true){
            //                     setTimeout(function(){

            //                         const report = "독서자는 이 책을 통해 깊은 감동과 인생의 깨달음을 얻을 수 있습니다.";
            //                         sender.showAlert(report);
                                    
            //                     }, 300);
            //                 }
            //             })
			// }
            
            // if (obj.text == 2) {
            //     sender.showConfirm("두 번째 추천 도서 [유연함의 힘]\n한 줄 독후감을 읽어보시겠습니까?", (result) => {
            //         setTimeout(function() {

            //             const report = "책에서 다루는 주제들이 현대 사회에 대한 고민과 함께 잘 반영되어 있어 생각할 거리가 많았습니다.";
            //             sender.showAlert(report);
     
            //         }, 300);
            //     });
            // }

            if(obj.text == 1) {

                sender.showPrompt("1번째 추천 도서 [퍼핏 쇼]\n한 줄 독후감 작성해주세요.", function(inputText){
                
                })

            }

            if(obj.text == 2) {

                sender.showPrompt("2번째 추천 도서 [그랜트의 식물감성]\n한 줄 독후감 작성해주세요.", function(inputText){
                
                })

			}

            
            if(obj.text == 3) {

                sender.showPrompt("3번째 추천 도서 [한류외전]\n한 줄 독후감 작성해주세요.", function(inputText){
                
                })

			}

            
            if(obj.text == 4) {

                sender.showPrompt("4번째 추천 도서 [챗 GPT 활용법]\n한 줄 독후감 작성해주세요.", function(inputText){
                
                })

			}

            
            if(obj.text == 5) {

                sender.showPrompt("5번째 추천 도서 [반려견 예절교육]\n한 줄 독후감 작성해주세요.", function(inputText){
                
                })

			}

            
            if(obj.text == 6) {

                sender.showPrompt("6번째 추천 도서 [마케팅 이야기]\n한 줄 독후감 작성해주세요.", function(inputText){
                
                })

			}



            } else {
                App.sayToAll(`obj is null`, 0xFFFFFF);
            }
        }
    });


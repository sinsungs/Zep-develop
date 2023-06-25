App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {

			// const currentTime = formatKoreanTime(new Date());

			// function formatKoreanTime(date) {
			//   const koreanOffset = 9 * 60; // offset in minutes
			//   const utc = date.getTime() + (date.getTimezoneOffset() * 60000); // convert to UTC
			//   const koreanTime = new Date(utc + (koreanOffset * 60000)); // add KST offset in minutes
			//   const year = koreanTime.getFullYear();
			//   const month = ('0' + (koreanTime.getMonth() + 1)).slice(-2);
			//   const day = ('0' + koreanTime.getDate()).slice(-2);
			//   const hours = ('0' + koreanTime.getHours()).slice(-2);
			//   const minutes = ('0' + koreanTime.getMinutes()).slice(-2);
			//   const seconds = ('0' + koreanTime.getSeconds()).slice(-2);
			//   return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
			// }


			const quotes = [ "삶이 있는 한 희망은 있다",
			"살아가는 것은 치열한 전투이다",
			"하루에 3시간씩 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다",
			"현재에 집중할 수 있다면 항상 행복할 것이다",
			"진정한 웃음은 고통을 이겨내고 그로부터 즐거움을 배우는 것이다",
			"일에서 행복을 찾아야 행복이 무엇인지 알게 된다",
			"하나님은 용감한 자를 절대 버리지 않는다",
			"행복의 문이 하나 닫히면 다른 문이 열린다",
			"우리는 우리에게 열려 있는 문을 잃어버린다",
			"피할 수 없다면 즐겨라"];

			const randomIndex = Math.floor(Math.random() * quotes.length);

			const randomQuote = quotes[randomIndex];
			
			const text = "미라클 모닝 인증을 위해\n" + "명언을 정확하게 입력해주세요\n\n" +  randomQuote
			const textx = "다시 입력 해주세요 !"
			const texto = sender.name + "님 미라클 모닝 인증에 성공하셨습니다 !"

			/* 미라클 모닝 START */
			if(obj.text == 1) {
				function promptForInput() {
					sender.showPrompt(text, function(inputText, result){

						App.sayToAll(randomQuote);
						App.sayToAll(result);

						if(inputText == randomQuote){
						
							App.httpPostJson(
								// "http://13.124.53.124:8080/zep/register",
								"https://godsaengplanner.com/challenge/zepverify",

								{
									// "test-header": "zep",
								},
								{
									cid: 1,
									cvzepid: sender.id,
									// cvtime: currentTime,
									cvsuccessornot: 1
								},
								(res) => {
									
									App.sayToAll(`HTTP Result: ${JSON.stringify(res)}`);
								}
							);	

							sender.showAlert(texto, function() {

							});
						} else {
							// sender.showAlert(textx, function() {
							// 	// Call the promptForInput function again to run the prompt again
							// 	promptForInput();
							//   });
						
							sender.showAlert("다시 입력 해 주세요", function() {
							});
							// promptForInput();
						}
						
						// if (inputText != randomQuote){
						// 	sender.showAlert("다시 입력 해 주세요", function() {
						// 	});
						// 	// promptForInput();
						// }
						
						
					})  
				}
				promptForInput();
			}

			/* 미라클 모닝 END */

			if(obj.text == 2) {

                    App.httpPostJson(
						// "http://13.124.53.124:8080/zep/list",
						"https://godsaengplanner.com/challenge/zepverify",
						{
							cid: 1,
						},
                        function (res) {	

							const zepRanks = JSON.parse(res);

							App.sayToAll(zepRanks);

							sender.tag = {
								widget: null,
							};
							
							sender.tag.widget = sender.showWidget("rank.html", "top", 530, 650);
							sender.tag.widget.onMessage.Add(function (sender, data) {
								if (data.type == "close") {
									sender.showCenterLabel("위젯이 닫혔습니다.");
									sender.tag.widget.destroy();
									sender.tag.widget = null;
								}
				
								App.sayToAll(data.ss);
								
							});
				
							sender.sendUpdated();
							
								// html로 데이터 보내는 부분 
								if (sender.tag.widget) {
									sender.tag.widget.sendMessage({
										// cid: cid,
										// cvzepid: cvzepid,
										// cvtime: cvtime,
										// cvsuccessornot: cvsuccessornot,
										zepRanks : zepRanks
									});
									
								}		
                        }
                    );

					// sender.tag = {
					// 	widget: null,
					// };
		


			}

        } 
	} else {
		App.sayToAll(`obj is null`, 0xFFFFFF);
	}
});






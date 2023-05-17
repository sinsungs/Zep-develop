App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {

			const currentTime = formatKoreanTime(new Date());

			function formatKoreanTime(date) {
			  const koreanOffset = 9 * 60; // offset in minutes
			  const utc = date.getTime() + (date.getTimezoneOffset() * 60000); // convert to UTC
			  const koreanTime = new Date(utc + (koreanOffset * 60000)); // add KST offset in minutes
			  const year = koreanTime.getFullYear();
			  const month = ('0' + (koreanTime.getMonth() + 1)).slice(-2);
			  const day = ('0' + koreanTime.getDate()).slice(-2);
			  const hours = ('0' + koreanTime.getHours()).slice(-2);
			  const minutes = ('0' + koreanTime.getMinutes()).slice(-2);
			  const seconds = ('0' + koreanTime.getSeconds()).slice(-2);
			  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
			}
			

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
			
			const text = "챌린지 인증을 위해 오늘의 명언 '" + randomQuote + "' 정확하게 입력해주세요 "
			const textx = "다시 입력 해주세요 !"
			const texto = sender.name + "님 미라클 모닝 인증에 성공하셨습니다 !"

			/* 미라클 모닝 START */
			if(obj.text == 1) {
				function promptForInput() {
					sender.showPrompt(text, function(inputText){

						App.sayToAll(randomQuote);

						if(inputText == randomQuote){
							
							App.httpPostJson(
								"http://ec2-43-201-154-148.ap-northeast-2.compute.amazonaws.com/index.php",
								// "http://localhost:8080/api/zepeto",
								{
									// "test-header": "zep",
								},
								{
									cid: 1,
									cvzepid: sender.name,
									cvtime: currentTime,
									cvsuccessornot: 1
								},
								(res) => {
									
									App.sayToAll(`HTTP Result: ${JSON.stringify(res)}`);
								}
							);	

							sender.showAlert(texto, function() {
								// sender.showAlert("오늘의 명언 : " + quotes[0], function() {
								// 	sender.spawnAtMap("ADd52m", "8J6PRM");
								// });

							});
						} else {
							sender.showAlert(textx, function() {
								// Call the promptForInput function again to run the prompt again
								promptForInput();
							  });
						}
					})  
				}
				promptForInput();
			}

			/* 미라클 모닝 END */

			if(obj.text == 2) {
				sender.showAlert(currentTime, function() {

				})
			}


        } 
	} else {
		App.sayToAll(`obj is null`, 0xFFFFFF);
	}
});



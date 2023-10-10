var Python = "다음은 Python 알고리즘 퀴즈입니다.\n\n"
        + "오늘의 문제:\n"
        + "다음 코드의 출력 결과는 무엇일까요?\n\n"
        + "a = 1\n"
        + "b = 2\n"
        + "c = a if a > b else b\n"
        + "print(c)\n"

var Java = '다음은 Java 알고리즘 퀴즈입니다.\n\n'
        + '오늘의 문제:\n'
        + '다음 코드의 실행 출력결과는?\n\n'
        + 'int a = 1;\n'
        + 'int b = 2;\n'
        + 'int c = (a > b) ? a : b;\n'
        + 'System.out.println(c);\n';

var JS = "다음은 JavaScript 알고리즘 퀴즈입니다.\n\n"
		+ "오늘의 문제:\n"
		+ "다음 코드의 출력 결과는 무엇일까요?\n\n"
		+ "var a = 1;\n"
		+ "var b = 2;\n"
		+ "var c = (a > b) ? a : b;\n"
		+ "console.log(c);\n";

var quizData = [
	{ question: "1. OSI 계층 중 1계층은 무엇인가요?\n(정답 : xxxx)", answer: "물리계층" },
	{ question: "2. OSI 계층 중 4계층은 무엇인가요?\n(정답 : xxxx)", answer: "전송계층" },
	{ question: "3. OSI 계층 중 7계층은 무엇인가요?\n(정답 : xxxx)", answer: "응용계층" },
	{ question: "4. IP의 동작 과정에서의 전송 오류가 발생하는 경우에 오류 정보를 전송하는 목적으로 사용하는 프로토콜은?\n(정답 : xxxx) 대문자", answer: "ICMP"},
	{ question: "5. IP 네트워크상에서 IP 주소를 MAC 주소(물리 주소)로 변환하는 프로토콜은?\n(정답 : xxx) 대문자", answer: "ARP"},
	{ question: "6. 시스템에 고의로 실패를 유도하고, 시스템의 정상적 복귀 여부를 테스트하는 기법은?\n(정답 : xxxxx)", answer: "회복테스트"},
	{ question: "7. 불법적인 소프트웨어가 접근하여 시스템을 파괴하지 못하도록 소스코드 내의 보안적인 결함을 미리 점검하는 테스트 기법은?\n(정답 : xxxxx)", answer: "안전테스트"},
	{ question: "8. 시스템 간의 정보 전송을 위한 데이터 형식, 코딩, 신호 레벨 등의 규정은?\n(정답 : xx)", answer: "구문"},
	{ question: "9. 시스템 간의 정보 전송을 위한 제어 정보로 조정과 에러 처리를 위한 규정은?\n(정답 : xx)", answer: "의미"},
	{ question: "10. 분산 저장소 방식으로 로컬 저장소와 원격 저장소로 분리되어 분산 저장하는 방식의 형상 관리 도구는 무엇인가?\n(정답 : xxx) 대문자", answer: "GIT"},
	{ question: "11. 정규화된 엔터티, 속성, 관계에 대해 성능 향상과 개발 운영의 단순화를 위해 중복, 통합, 분리 등을 수행하는 데이터 모델링의 기법은 무엇인가?\n(정답 : xxxx)", answer: "반정규화"},
	{ question: "12. 오류보고, 상황보고, 경로제어정보 전달 기능이 있는 프로토콜로 메시지 형식은 8바이트의 헤더와 가변 길이의 데이터 영역으로 분리\n(정답 : xxxx) 대문자", answer: "ICMP"},
	{ question: "13. 송수신 간의 패킷 단위로 데이터를 교환하는 네트워크에서 정보를 주고받는 데 사용하는 통신 프로토콜은 ?\n(정답 : xx)", answer: "IP"},
	{ question: "14. 하나의 트랜잭션이 실행하는 동안 특정 데이터 항목에 대해서 다른 트랜잭션이 동시에 접근하지 못하도록 상호배제(Mutual Exclusive)기능을 제공하는 기법은 ?\n(정답 : xx)", answer: "로킹"},
	{ question: "15. 어떠한 검증도 수행하지 않고 일단 트랜잭션을 수행하고, 트랜잭션 종료 시 검증을 수행하여 데이터베이스에 반영하는 기법은 ?\n(정답 : xxxxx)", answer: "낙관적검증"},
	{ question: "16. 누구나 쉽게 이해하고, 쉽게 사용할 수 있어야 한다는 UI 설계 원칙으로 부특성에는 쉬운 검색, 쉬운 사용성, 일관성이 있다\n(정답 : xxx", answer: "직관성"},
	{ question: "17. 초보와 숙련자 모두가 쉽게 배우고 사용할 수 있게 제작해야 한다는 UI 설계 원칙은?\n(정답 : xxx)", answer: "학습성"},
	{ question: "18. 프로세스가 도착하는 시점에 가장 작은 서비스 시간을 갖는 프로세스가 종료 시까지 자원을 점유하는 비선점형 알고리즘은?\n(정답 : xxx) 대문자", answer: "SJF"},
	{ question: "19. 시스템 부하가 많아서 준비 큐에 있는 낮은 등급의 프로세스가 무한정 기다리는 현상을 말한다\n(정답 : xxxx)", answer: "기아현상"},
	{ question: "20. 호스트 컴퓨터와 인접 라우터가 멀티캐스트 그룹 멤버십을 구성하는 데 사용하는 통신 프로토콜은 ?\n(정답 : xxxx) 대문자", answer: "IGMP"},
];


App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {
            
			// const quiz = " "
			const quizx = "다시 입력 해주세요"
			const quizo = sender.name + "님 코딩 챌린지 인증에 성공하셨습니다 !"

				let pyquizAnswer = "2"
				let javaquizAnswer = "2"
				let jsquizAnswer = "2"



            if(obj.text == 1) {
                sender.showConfirm("정산기 문제 풀기 도전하시겠습니까 ?", (result) => {
					if(result == true){

						function promptForInput() {
							var randomIndex = Math.floor(Math.random() * quizData.length);
							var currentQuestion = quizData[randomIndex].question;
							var currentAnswer = quizData[randomIndex].answer;
					
							sender.showPrompt(currentQuestion, function (inputText) {
								if (inputText === currentAnswer) {

									App.httpPostJson(
										// "http://13.124.53.124:8080/zep/register",
										"https://godsaengplanner.com/challenge/zepverify",
		
										{
											// "test-header": "zep",
										},
										{
											cid: 2,
											cvzepid: sender.id,
											// cvtime: currentTime,
											cvsuccessornot: 1
										},
										(res) => {
											
											App.sayToAll(`HTTP Result: ${JSON.stringify(res)}`);
										}
									);	

									sender.showConfirm("정답입니다 ! \n다음 문제 드릴까요 ?", (result) => {
										// sender.spawnAt(10, 41, 1);
										if(result == true){
										promptForInput();
										}
									});
								} else {
									sender.showAlert(quizx, function () {
										// promptForInput();
									});
								}
							});
						}
					
						promptForInput();

					}
                })
            }

			/* 파이썬 퀴즈 START */

			if(obj.text == 2) {
                sender.showConfirm("파이썬 챌린지에 참가하시겠습니까 ?", (result) => {

				if(result == true){

					function promptForInput() {

						sender.showPrompt( Python , function(inputText){
							if(inputText.toLowerCase() == pyquizAnswer.toLowerCase()){

								App.httpPostJson(
									"https://godsaengplanner.com/challenge/zepverify",
									// "http://ec2-43-201-154-148.ap-northeast-2.compute.amazonaws.com/index.php",
									// "http://localhost:8080/api/zepeto",
									{
										// "test-header": "zep",
									},
									{
										cid: 2,
										cvzepid: sender.id,
										// cvtime: currentTime,
										cvsuccessornot: 1
									},
									(res) => {
										
										App.sayToAll(`HTTP Result: ${JSON.stringify(res)}`);
									}
								);	

								sender.showAlert(quizo, function() {

								});
							} else {
								sender.showAlert(quizx, function() {

									// promptForInput();
								});
							}
						})  
					}
					
					promptForInput();
				}
                });
			}
		
			/* 파이썬 퀴즈 END */

            /* 자바 퀴즈 START */

			if(obj.text == 3) {
                sender.showConfirm("자바 챌린지에 참가하시겠습니까 ?", (result) => {

				if(result == true){
					
					function promptForInput() {

						sender.showPrompt( Java , function(inputText){
							if(inputText.toLowerCase() == javaquizAnswer.toLowerCase()){
								App.httpPostJson(
									"https://godsaengplanner.com/challenge/zepverify",
									// "http://ec2-43-201-154-148.ap-northeast-2.compute.amazonaws.com/index.php",
									// "http://localhost:8080/api/zepeto",
									{
										// "test-header": "zep",
									},
									{
										cid: 2,
										cvzepid: sender.id,
										// cvtime: currentTime,
										cvsuccessornot: 1
									},
									(res) => {
										
										App.sayToAll(`HTTP Result: ${JSON.stringify(res)}`);
									}
								);	

								sender.showAlert(quizo, function() {

								});
							} else {
								sender.showAlert(quizx, function() {

									// promptForInput();

								});
							}
						})  
					}
					promptForInput();
				}
                });
			}
		
			/* 자바 퀴즈 END */

			/* 자스 퀴즈 START */

			if(obj.text == 4) {
                sender.showConfirm("자바스크립트 챌린지에 참가하시겠습니까 ?", (result) => {
				
					if(result == true){	
						function promptForInput() {
							sender.showPrompt( JS , function(inputText){
								if(inputText.toLowerCase() == jsquizAnswer.toLowerCase()){
									
									App.httpPostJson(
										"https://godsaengplanner.com/challenge/zepverify",
										// "http://ec2-43-201-154-148.ap-northeast-2.compute.amazonaws.com/index.php",
										// "http://localhost:8080/api/zepeto",
										{
											// "test-header": "zep",
										},
										{
											cid: 2,
											cvzepid: sender.id,
											// cvtime: currentTime,
											cvsuccessornot: 1
										},
										(res) => {
											
											App.sayToAll(`HTTP Result: ${JSON.stringify(res)}`);
										}
									);	

									sender.showAlert(quizo, function() {

									});
								} else {
									sender.showAlert(quizx, function() {

										// promptForInput();

									});
								}
							})  
						}
						promptForInput();
					}	
                });
            }

		
			/* 자스 퀴즈 END */

            if(obj.text == 5) {
			    sender.showAlert('C언어 챌린지는 준비중입니다', function() {
                    
                })
            }
			if(obj.text == 6) {
				sender.showAlert("코딩 챌린지에 오신걸 \n 환영합니다.", function() {
				});

			}

			if(obj.text == 99) {

                    App.httpPostJson(
						// "http://13.124.53.124:8080/zep/list",
						// "https://godsaengplanner.com/challenge/zepverify",
						"https://godsaengplanner.com/zep/codingchallenge",
						{

						},
						{
							c_id: 2,
						},
                        (res) => {	

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
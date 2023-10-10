// 플레이어가 입장할 때 동작하는 함수
App.onJoinPlayer.Add(function (player) {
	player.tag = {
		widget: null,
	};

	player.tag.widget = player.showWidget("rank.html", "top", 530, 650);
	player.tag.widget.onMessage.Add(function (player, data) {
		if (data.type == "close") {
			player.showCenterLabel("위젯이 닫혔습니다.");
			player.tag.widget.destroy();
			player.tag.widget = null;
		}
	});
	player.sendUpdated();
});

// q를 누르면 동작하는 함수
App.addOnKeyDown(81, function (player) {
	if (player.tag.widget) {
		player.tag.widget.sendMessage({
			title : "정보처리 산업기사",
			rank: "5",
			like : "100",
			text: "블루맨",
		});
	}
});



// q를 누르면 동작하는 함수
App.addOnKeyDown(81, function (player) {

	App.httpGet(
		"http://ec2-43-201-154-148.ap-northeast-2.compute.amazonaws.com/index.php",
		null,
		function (res) {	

			if (player.tag.widget) {
				player.tag.widget.sendMessage({
					// cid: res.cid,
					// cvzepid: res.cvzepid,
					// cvtime: res.cvtime,
					// cvsuccessornot: res.cvsuccessornot
					res
				});
			}
			
		}
	);



});

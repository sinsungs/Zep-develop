// 플레이어가 입장할 때 동작하는 함수
App.onJoinPlayer.Add(function (player) {
	player.tag = {
		widget: null,
	};

	player.tag.widget = player.showWidget("sample.html", "top", 300, 300);
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

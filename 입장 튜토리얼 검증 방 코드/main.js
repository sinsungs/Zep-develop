App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {

          
			if(obj.text == 1) {
                if(sender.isGuest){
                    sender.title = "GUEST";
                    sender.sendUpdated();
                    sender.showAlert(`로그인 유저만 챌린지를 수행할 수 있습니다.`, function() {

                    })
                  } else {
                        sender.showAlert(`${sender.name}님 갓생챌린지에 오신것을 환영합니다`, function() {
                        sender.spawnAtMap("ADd52m", "8J6PRM");
                    })
                  }
			}


        } 
	} else {
		App.sayToAll(`obj is null`, 0xFFFFFF);
	}
});
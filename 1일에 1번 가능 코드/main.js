// Get the current user and challenge information
const currentUser = 'username';
const currentChallenge = 'challengeName';

// Get the last executed information for the current user and challenge
const lastExecuted = App.getStorage(`${currentUser}_${currentChallenge}_lastExecuted`);
const storedUser = App.getStorage(`${currentUser}_${currentChallenge}_user`);

// Get today's date
const today = new Date().toLocaleDateString();

// Check if the code has already been executed today for the current user and challenge
if (lastExecuted === today && storedUser === currentUser) {
  console.log('Code already executed today for this user and challenge');
} else {
  // Execute the code here
  console.log('Executing code...');

  // Store today's date and user as the last executed information for the current user and challenge
  App.setStorage(`${currentUser}_${currentChallenge}_lastExecuted`, today);
  App.setStorage(`${currentUser}_${currentChallenge}_user`, currentUser);
}



App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
        if (obj !== null) {
            if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {

                if(obj.text == 94) {
                    const currentUser = sender.id
                    const currentChallenge = obj.text;

            }
        } else {
            App.sayToAll(`obj is null`, 0xFFFFFF);
        }
    }
});

// setStorage가 아닌 get요청으로 받아야하고
// if문ㅇ로 시간과 sender.id 와 c.id와 3개를 검증해야 함 그래야지만 
// 오늘 챌린지를 참가한 적이 있는지가 검증이 된다 
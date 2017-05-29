window.addEventListener('load', function () {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'send_flag.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send('give_me_flag=1');
  xhr.addEventListener('load', function (e) {
    // can you get the flag?
  });
});

function show_flag() {
  var s = [0x77, 0x65, 0x62, 0x34, 0x62, 0x7B, 0x4A, 0x41, 0x56, 0x41, 0x53, 0x43, 0x52, 0x49, 0x50, 0x54, 0x5F, 0x46, 0x4C, 0x41, 0x47, 0x7D];
  var s2 = '';
  for (var i = 0; i < s.length; i++) {
    s2 += String.fromCharCode(s[i]);
  }
  alert(s2);
}

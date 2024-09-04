// ข้อมูลที่ต้องการส่ง
var data = {
    username: "Player1",
    score: 100
};

// ส่งข้อมูลด้วย HTTP POST
fetch('https://script.google.com/macros/s/AKfycbw2cUM2pLQDBv5QMpP1q-p_33Ww52FAczGTcHDgiR4/exec', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
.then(response => response.text())
.then(result => {
    console.log('Success:', result);
})
.catch(error => {
    console.error('Error:', error);
});

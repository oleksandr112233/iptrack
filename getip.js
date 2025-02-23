function fetchIP() {
            var request = new XMLHttpRequest();
            request.open('GET', 'https://api64.ipify.org?format=json', true);
            request.onreadystatechange = function () {
                if (request.readyState === 4 && request.status === 200) {
                    var data = JSON.parse(request.responseText);
                    document.getElementById('ip-address').innerText = data.ip;
                } else if (request.readyState === 4) {
                    document.getElementById('ip-address').innerText = 'Could not fetch IP';
                }
            };
            request.send();
        }
        fetchIP();
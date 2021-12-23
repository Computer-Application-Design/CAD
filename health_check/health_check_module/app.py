##2017156015 박승찬 구현한 개발 영역
##시나리오2를위한 컨테이너들 상태를 확인하는 헬스체크 모듈

from flask import Flask
import requests

app = Flask(__name__)
@app.route('/')
def ping_service():
    return '[health_check_module] Hello, I am health_check container! nice to meet u!!'
@app.route('/ping')
def do_ping():
    para = 0
    ping = '[health_check_module] ---ping-->'
    response = ' '
    health_check_message = ' '
    try:
        response = requests.get('http://user_con:3001/pong')

    except requests.exceptions.RequestException as e:
        print('\n Cannot receive pong from the user_con container\n')
        para = 1
    if (para == 1) :
        health_check_message = health_check_message + 'Cannot receive pong from the user_con container\n'
    else :
        health_check_message = health_check_message + ping + response.text

    para = 0

    try:
        response = requests.get('http://admin_con:4000/pong')
    except requests.exceptions.RequestException as e:
        print('\n Cannot receive pong from the admin_con container\n')
        para = 1
        
    if (para == 1) :
        health_check_message = health_check_message + 'Cannot receive pong from the admin_con container\n'
    else :
        health_check_message = health_check_message + ping + response.text

    para = 0

    try:
        response = requests.get('http://shop_con:4001/pong')
    except requests.exceptions.RequestException as e:
        print('\n Cannot receive pong from the shop_con container\n')
        para = 1
        
    if (para == 1) :
        health_check_message = health_check_message + 'Cannot receive pong from the shop_con container\n'
    else :
        health_check_message = health_check_message + ping + response.text
    return health_check_message

if __name__ == "__main__":
    app.run(host ='0.0.0.0', port = 5000, debug = True)


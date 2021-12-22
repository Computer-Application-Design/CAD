from flask import Flask
import requests

app = Flask(__name__)
@app.route('/')
def ping_service():
    return '[health_check_module] Hello, I am health_check container! nice to meet u!!'
@app.route('/ping')
def do_ping():
    ping = '[health_check_module] ---ping-->'
    response = ' '
    health_check_message = ' '
    try:
        response = requests.get('http://1main_app_1:3000/pong')
    except requests.exceptions.RequestException as e:
        print('\n Cannot receive pong from the 1main_app_1 container\n')
        health_check_message = health_check_message + 'Cannot receive pong from the 1main_app_1 container\n'
    health_check_message = health_check_message + ping + response.text

    return health_check_message

if __name__ == "__main__":
    app.run(host ='0.0.0.0', port = 5000, debug = True)

from flask import Flask, request, jsonify
import requests
import json

app = Flask(__name__)

# Replace with your OpenAI API key
api_key = ''


def generate_text(prompt, temp):
    try:
        # Set up headers for OpenAI API request
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {api_key}'
        }
        
        # Prepare data to send to OpenAI API
        payload = {
            "model": "gpt-3.5-turbo",  # Use the appropriate model
            "messages": [{"role": "user", "content": prompt}],
            "temperature": float(temp)
        }

        # Make request to OpenAI API
        url = "https://api.openai.com/v1/chat/completions"
        response = requests.post(url, headers=headers, json=payload, timeout=10)

        # Check if the request was successful
        if response.status_code != 200:
            print(f"API call failed with status {response.status_code}: {response.text}")
            return {'status': 'error', 'text': f'API call failed with status {response.status_code}'}

        # Process API response
        response_data = response.json()
        content = response_data['choices'][0]['message']['content']
        return {'status': 'ok', 'text': content}

    except Exception as e:
        return {'status': 'error', 'text': str(e)}

@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    prompt = data.get('prompt', '')
    temp = data.get('temp', 0.7)
    
    result = generate_text(prompt, temp)

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)

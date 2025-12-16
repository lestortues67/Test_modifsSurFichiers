import os
import re
import shutil
from flask import Flask, render_template, request, jsonify, send_from_directory
from datetime import datetime


ROOT_FOLDER = os.path.join(os.path.dirname(__file__), 'templates')


app = Flask(__name__, static_folder='static')




# --- Routes ---
@app.route('/')
def index():
    # return render_template('page_attribut_Is.html')
    return "Hello"

@app.route('/page1')
def page1():
    return render_template('page1.html')

@app.route('/page2')
def page2():
    return render_template('page2.html')

if __name__ == '__main__':
    os.makedirs(ROOT_FOLDER, exist_ok=True)
    app.run(debug=True)







# @app.route('/save', methods=['POST'])
# def save_page():
#     data = request.json
#     title = data.get('title', '').strip()
#     content = data.get('content', '')

#     if not title:
#         return jsonify({'success': False, 'message': 'Le titre de la page ne peut pas être vide.'}), 400

#     # Générer un nom de fichier propre
#     filename = title.lower().replace(' ', '_')
#     filename = re.sub(r'[^a-z0-9_]', '', filename) + '.html'
#     filepath = os.path.join(ROOT_FOLDER, filename)

#     # Template Bootstrap pour le rendu final
#     template_string = """
#     <!DOCTYPE html>
#     <html lang="fr">
#     <head>
#         <meta charset="UTF-8">
#         <meta name="viewport" content="width=device-width, initial-scale=1.0">
#         <title>{{ title }}</title>
#         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
#         <style>
#             body { background-color: #f8f9fa; }
#             .page-container { width: 80%; margin-left:auto; margin-right:auto; padding-top:40px; padding-bottom:40px; }
#             h1 { color: #0d6efd; }
#             p, li, span, div { font-weight: 400; } /* fw-normal */
#         </style>
#     </head>
#     <body>
#         <div class="page-container">
#             <h1 class="fs-1">{{ title }}</h1>
#             <div class="fw-normal">
#                 {{ content|safe }}
#             </div>
#         </div>
#     </body>
#     </html>
#     """

#     try:
#         html_to_save = render_template_string(template_string, title=title, content=content)
#         with open(filepath, 'w', encoding='utf-8') as f:
#             f.write(html_to_save)
#         return jsonify({'success': True, 'message': f'Fichier {filename} sauvegardé avec succès.'})
#     except Exception as e:
#         return jsonify({'success': False, 'message': f'Erreur lors de la sauvegarde du fichier: {e}'}), 500



# # ❌ garde seulement UNE version de /files
# @app.route('/files/<path:filename>')
# def serve_file(filename):
#     return send_from_directory(ROOT_FOLDER, filename)


# if __name__ == '__main__':
#     if not os.path.exists(ROOT_FOLDER):
#         os.makedirs(ROOT_FOLDER)
#     app.run(debug=True)
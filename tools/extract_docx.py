import sys
import zipfile
import re
from pathlib import Path

def extract_text(docx_path):
    p = Path(docx_path)
    if not p.exists():
        print(f"File not found: {docx_path}", file=sys.stderr)
        sys.exit(2)
    with zipfile.ZipFile(p, 'r') as z:
        xml = z.read('word/document.xml').decode('utf-8')
    text = re.sub(r'<w:p[^>]*>', '\n', xml)
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'\n\s+', '\n', text)
    return text.strip()

if __name__ == '__main__':
    # Try workspace-relative path first
    default = Path('cQ.docx')
    path = sys.argv[1] if len(sys.argv) > 1 else str(default)
    out = extract_text(path)
    print(out)

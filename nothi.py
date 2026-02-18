import zipfile
import xml.etree.ElementTree as ET
import os
import glob

base = r'D:\New folder\claude-code\TuneEng'
docx_files = glob.glob(os.path.join(base, '**', '*.docx'), recursive=True)

for f in docx_files:
    try:
        z = zipfile.ZipFile(f)
        tree = ET.fromstring(z.read("word/document.xml"))
        ns = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
        texts = []
        for t in tree.iter(f"{{{ns}}}t"):
            if t.text:
                texts.append(t.text)
        out = os.path.splitext(f)[0] + ".txt"
        with open(out, "w", encoding="utf-8") as fp:
            fp.write(" ".join(texts))
        print(f"OK: {os.path.basename(f)} -> {os.path.basename(out)}")
    except Exception as e:
        print(f"ERR: {os.path.basename(f)}: {e}")

import sys
from PyQt5.QtWidgets import *

app = QApplication(sys.argv)
print("argv:" + sys.argv[0])
label = QLabel("Hello PyQt")
label.show()
app.exec_()
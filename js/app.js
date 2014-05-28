var textarea = document.getElementById('terminal');

function Terminal(domElement, mode, theme) {
  var self = this;

  this.shell      = null;
  this.domElement = domElement;

  this.editor = CodeMirror.fromTextArea(domElement, {
    mode: mode,
    theme: theme,
    viewportMargin: Infinity,
    gutters: ['breakpoints'],
    extraKeys: {
      Enter: function Enter() {
        self.executeCode();
      }
    }
  });

  this.editor.markText(CodeMirror.Pos(this.editor.firstLine()), CodeMirror.Pos(this.editor.lastLine()), {readOnly: true, className: 'initial-text'});

  this.editor.on('beforeChange', this.beforeChange);

  this.shell = null;
  this.initShell();
}

Terminal.prototype.beforeChange = function beforeChange(cm, change) {
  var a = 1;
};

Terminal.prototype.initShell = function initShell() {
  var self = this;

  // if (this.shell !== null) {
  //   this.shell.terminate();
  // }

  this.shell = new Worker('js/shell.js');

  this.shell.addEventListener('message', function message(e) {
    //self.initShell();

    self.addLine(e.data);
  });

  this.shell.addEventListener('error', function error(e) {
    //self.initShell();
    self.addLine(e.message, 'error');
  });
};

Terminal.prototype.addLine = function addLine(content, type, noLineBreak) {
  var lastLine  = term.editor.lineInfo(term.editor.lastLine());
  var separator = '\n';
  
  if(noLineBreak) {
    separator = '';
  }

  this.editor.markText(CodeMirror.Pos(this.editor.firstLine()), CodeMirror.Pos(this.editor.lastLine() - 1), {readOnly: true});

  if(type === 'input') {
    this.editor.replaceRange(separator + content, CodeMirror.Pos(term.editor.lastLine()));
    term.editor.addLineClass(term.editor.lastLine(), 'text', 'terminal-input');
  } else if(type === 'initial') {
    this.editor.replaceRange(separator + content, CodeMirror.Pos(term.editor.lastLine()));
    term.editor.addLineClass(term.editor.lastLine(), 'text', 'initial-text');
    this.editor.markText(CodeMirror.Pos(this.editor.lastLine()), CodeMirror.Pos(this.editor.lastLine()), {readOnly: true});
  } else {

    if(lastLine.textClass !== 'terminal-input') {
      this.addLine('', 'input');
    }

    this.editor.replaceRange(separator + content, CodeMirror.Pos(term.editor.lastLine() - 1));
    this.editor.markText(CodeMirror.Pos(this.editor.lastLine() - 1), CodeMirror.Pos(this.editor.lastLine() - 1), {readOnly: true});

    if(type === 'plain') {
      term.editor.addLineClass(term.editor.lastLine() - 1, 'text', 'plain-text');
    } else if(type === 'error') {
      term.editor.addLineClass(term.editor.lastLine() - 1, 'text', 'code-error');
    }
  }
};

Terminal.prototype.executeCode = function executeCode() {
  var lastLine = term.editor.lineInfo(term.editor.lastLine());

  this.shell.postMessage(lastLine.text);
  this.addLine('', 'input');
};

var term = new Terminal(textarea, 'javascript', 'ambiance');

term.addLine('help()', 'input');

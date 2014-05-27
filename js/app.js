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

  this.editor.on('beforeChange', this.beforeChange);

  this.shell = null;
  this.initShell();
}

Terminal.prototype.beforeChange = function beforeChange(cm, change) {
  var a = 1;
};

Terminal.prototype.beforeSelectionChange = function beforeSelectionChange(cm, details) {
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

    var result = e.data.result;

    self.addLine(result);
    self.addLine('', 'input');
    console.log(e.data.code + ' //=> ' + e.data.result);
  });

  this.shell.addEventListener('error', function error(e) {
    //self.initShell();
    term.addLine(e.message, 'error');
    term.addLine('', 'input');
    console.error(e.message);
  });
};

Terminal.prototype.addLine = function addLine(content, type, multilines) {
  var lastLine  = term.editor.lineInfo(term.editor.lastLine());
  var separator = '';

  if(lastLine.text !== '') {
    separator = '\n';
  }

  this.editor.replaceRange(separator + content, CodeMirror.Pos(term.editor.lastLine()));
  
  if(type === 'input') {
    term.editor.addLineClass(term.editor.lastLine(), 'text', 'terminal-input');
  }

  if(type === 'plain') {
    term.editor.addLineClass(term.editor.lastLine(), 'text', 'plain-text');
  } else if(type === 'error') {
    term.editor.addLineClass(term.editor.lastLine(), 'text', 'code-error');
  }
};

Terminal.prototype.executeCode = function executeCode() {
  var lastLine = term.editor.lineInfo(term.editor.lastLine());

  this.shell.postMessage(lastLine.text);
};

var term = new Terminal(textarea, 'javascript', 'ambiance');

term.addLine('Welcome to a self guided tour of my profile shell.', 'plain');
term.addLine('This shell is written in JavaScript. It is executed in a web worker.', 'plain');
term.addLine('It is sandboxed, so have fun of trying to hack it :)', 'plain');
term.addLine('\n', 'plain');
term.addLine('Get started with this function: `help()`', 'plain');
term.addLine('To try out an interactive discover, type: `tour()`', 'plain');
term.addLine('a', 'input');

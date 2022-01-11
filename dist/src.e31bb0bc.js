// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
var questionOutput = document.querySelector('[data-question]');
var scoreOutput = document.querySelector('[data-text]');
var indexOfQuestionOutput = document.querySelector('.index-of-question'),
    allQuestionsOutput = document.querySelector('.all-questions');
var variant1 = document.querySelector('.var1'),
    variant2 = document.querySelector('.var2'),
    variant3 = document.querySelector('.var3');
var allVariants = document.querySelectorAll('.variant__btn');
var circle1 = document.querySelector('#circle-1'),
    circle2 = document.querySelector('#circle-2'),
    circle3 = document.querySelector('#circle-3');
var allCircles = document.querySelectorAll('.circle__item');
var indexOfCircle = 0;
var startPage = document.querySelector('[data-startPage]');
var modal = document.querySelector('[data-modal]');
var startBtn = document.querySelector('[data-start]');
var nextBtn = document.querySelector('[data-nextBtn]');
var restartBtn = document.querySelector('[data-restart]');
var indexOfQuestion = 0;
var score = 0;
var complitedQuestionsId = [];
var questions = [{
  id: 1,
  question: "Сколько домашних у твоей ЛП?",
  answers: ["2", "3", "4"],
  correctAnswer: 2
}, {
  id: 2,
  question: "Как зовут родителей твоей ЛП?",
  answers: ["Игорь и Анна", "Федя и Гриша", "Андрей и Оксана"],
  correctAnswer: 0
}, {
  id: 3,
  question: "Какая марка машины у папы твоей ЛП?",
  answers: ["Жигули", "Рено", "Фольцваген"],
  correctAnswer: 1
}, {
  id: 4,
  question: "Каким видом спорта занимается твоя ЛП?",
  answers: ["Рисование", "Танци", "Кикбоксинг"],
  correctAnswer: 2
}, {
  id: 5,
  question: "Какая любимая игра твоей ЛП?",
  answers: ["Roblox", "Peppi House", "Brawl Stars"],
  correctAnswer: 0
}];
allQuestionsOutput.textContent = questions.length;

var renderQuestion = function renderQuestion() {
  nextBtn.disabled = true;
  questionOutput.textContent = questions[indexOfQuestion].question;
  variant1.innerHTML = questions[indexOfQuestion].answers[0];
  variant2.innerHTML = questions[indexOfQuestion].answers[1];
  variant3.innerHTML = questions[indexOfQuestion].answers[2];
  complitedQuestionsId.push(questions[indexOfQuestion].id);
};

var quizStart = function quizStart() {
  startPage.classList.add('hidden');
};

var quizEnd = function quizEnd() {
  modal.classList.remove('hidden');

  switch (score) {
    case 1 || 2:
      return scoreOutput.textContent = "\u0434\u043E \u041B\u041F \u0435\u0449\u0451 \u0434\u0430\u043B\u0435\u043A\u043E, \u0432\u0441\u0435\u0433\u043E \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 =(";

    case 3:
      return scoreOutput.textContent = "\u041D\u0435 \u043F\u043B\u043E\u0445\u043E! \u0422\u0432\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 3 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u0430";

    case 4:
      return scoreOutput.textContent = 'Хорошо Подруга! Всего 1 не правильный ответ!';

    case 5:
      return scoreOutput.textContent = 'Сразу видно кто моя Лучшая Подруга! Все ответы правильные';

    default:
      return scoreOutput.textContent = 'Ничего про меня не знаешь совсем =(';
  }
};

var disableBtns = function disableBtns() {
  allVariants.forEach(function (item) {
    return item.disabled = true;
  });
};

var enableBtns = function enableBtns() {
  allVariants.forEach(function (item) {
    item.disabled = false;
    item.classList.remove('correct', 'wrong');
  });
};

var activeCircle = function activeCircle(status) {
  allCircles[indexOfCircle].classList.add(status);
  indexOfCircle += 1;
};

var quizRestart = function quizRestart() {
  modal.classList.add('hidden');
  score = 0;
  indexOfQuestion = 0;
  indexOfCircle = 0;
  indexOfQuestionOutput.textContent = indexOfQuestion + 1;
  allCircles.forEach(function (item) {
    return item.classList.remove('correct', 'wrong');
  });
  enableBtns();
  renderQuestion();
};

window.addEventListener('load', function () {
  renderQuestion();
});
startBtn.addEventListener('click', function () {
  quizStart();
});
nextBtn.addEventListener('click', function () {
  indexOfQuestion += 1;
  indexOfQuestionOutput.textContent = indexOfQuestion + 1;
  enableBtns();
  indexOfQuestion === questions.length ? quizEnd() : renderQuestion();
});
restartBtn.addEventListener('click', function () {
  quizRestart();
});
allVariants.forEach(function (variant) {
  variant.addEventListener('click', function (e) {
    nextBtn.disabled = false;
    var answer = Number(e.target.dataset.num);

    if (answer === questions[indexOfQuestion].correctAnswer) {
      e.target.classList.add('correct');
      disableBtns();
      activeCircle('correct');
      score += 1;
    } else {
      e.target.classList.add('wrong');
      disableBtns();
      activeCircle('wrong');
    }
  });
});
},{}],"C:/Users/Игорь/AppData/Roaming/nvm/v14.18.1/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "22607" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Игорь/AppData/Roaming/nvm/v14.18.1/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map
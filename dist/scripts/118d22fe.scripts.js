'use strict';
angular.module('eTuneBookApp', [
  'ui.router',
  'ngGrid',
  'ngBootstrap',
  'ngTouch',
  'chieffancypants.loadingBar',
  'ngAnimate',
  'gapi'
]);
angular.module('eTuneBookApp').config([
  '$locationProvider',
  function ($locationProvider) {
    $locationProvider.html5Mode(false);
  }
]);
angular.module('eTuneBookApp').config([
  '$sceProvider',
  function ($sceProvider) {
    $sceProvider.enabled(false);
  }
]);
angular.module('eTuneBookApp').config([
  '$stateProvider',
  function ($stateProvider) {
    var main = {
        name: 'main',
        url: '',
        view: 'main',
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      };
    var book = {
        name: 'book',
        parent: main,
        url: '/book',
        views: {
          '@main': {
            templateUrl: 'views/book.html',
            controller: 'bookCtrl'
          }
        }
      };
    var bookedit = {
        name: 'bookedit',
        parent: book,
        url: '',
        views: {
          '@main': {
            templateUrl: 'views/bookedit.html',
            controller: 'bookeditCtrl'
          }
        }
      };
    var playlists = {
        name: 'playlists',
        abstract: true,
        parent: main,
        url: '/playlists',
        views: {
          '@main': {
            templateUrl: 'views/playlists.html',
            controller: 'playlistsCtrl'
          },
          'booktitle@main': { templateUrl: 'views/booktitle.html' }
        }
      };
    var playlistlist = {
        name: 'playlistlist',
        parent: playlists,
        url: '',
        views: {
          '@playlists': {
            templateUrl: 'views/playlistlist.html',
            controller: 'playlistlistCtrl'
          }
        }
      };
    var playlist = {
        name: 'playlist',
        parent: playlists,
        url: '/{playlistId}',
        templateUrl: 'views/playlist.html',
        controller: 'playlistCtrl'
      };
    var sets = {
        name: 'sets',
        abstract: true,
        parent: main,
        url: '/sets',
        views: {
          '@main': {
            templateUrl: 'views/sets.html',
            controller: 'setsCtrl'
          },
          'booktitle@main': { templateUrl: 'views/booktitle.html' }
        }
      };
    var setlist = {
        name: 'setlist',
        parent: sets,
        url: '?type&key&color&skill&evt&band&plmin&plmax&freqcomp&freq&updmin&updmax',
        views: {
          '@sets': {
            templateUrl: 'views/setlist.html',
            controller: 'setlistCtrl'
          },
          'filter@setlist': {
            templateUrl: 'views/filter.html',
            controller: 'filterCtrl'
          }
        }
      };
    var set = {
        name: 'set',
        parent: sets,
        url: '/{tuneSetId}',
        templateUrl: 'views/set.html',
        controller: 'setCtrl'
      };
    var tunes = {
        name: 'tunes',
        abstract: true,
        parent: main,
        url: '/tunes',
        views: {
          '@main': {
            templateUrl: 'views/tunes.html',
            controller: 'tunesCtrl'
          },
          'booktitle@main': { templateUrl: 'views/booktitle.html' }
        }
      };
    var tunelist = {
        name: 'tunelist',
        parent: tunes,
        url: '?type&key&color&skill&evt&band&plmin&plmax&freqcomp&freq&updmin&updmax',
        views: {
          '@tunes': {
            templateUrl: 'views/tunelist.html',
            controller: 'tunelistCtrl'
          },
          'filter@tunelist': {
            templateUrl: 'views/filter.html',
            controller: 'filterCtrl'
          }
        }
      };
    var tune = {
        name: 'tune',
        abctract: true,
        parent: tunes,
        url: '/{intTuneId}',
        templateUrl: 'views/tune.html',
        controller: 'tuneCtrl'
      };
    var tunesets = {
        name: 'tunesets',
        parent: tune,
        url: '/sets',
        templateUrl: 'views/tunesets.html',
        controller: 'tunesetsCtrl'
      };
    var tunevideos = {
        name: 'tunevideos',
        parent: tune,
        url: '/videos',
        templateUrl: 'views/tunevideos.html',
        controller: 'tunevideosCtrl'
      };
    var tunevideo = {
        name: 'tunevideo',
        parent: tunevideos,
        url: '/{source}/{code}',
        templateUrl: 'views/tunevideo.html',
        controller: 'tunevideoCtrl'
      };
    var tuneabc = {
        name: 'tuneabc',
        parent: tune,
        url: '/abc',
        templateUrl: 'views/tuneabc.html',
        controller: 'tuneabcCtrl'
      };
    var tunepractice = {
        name: 'tunepractice',
        parent: tune,
        url: '/practice',
        templateUrl: 'views/tunepractice.html',
        controller: 'tunepracticeCtrl'
      };
    var tuneinfo = {
        name: 'tuneinfo',
        parent: tune,
        url: '/info',
        templateUrl: 'views/tuneinfo.html',
        controller: 'tuneinfoCtrl'
      };
    var abc = {
        name: 'abc',
        parent: main,
        url: '/abc',
        views: {
          '@main': {
            templateUrl: 'views/abc.html',
            controller: 'abcCtrl'
          },
          'booktitle@main': { templateUrl: 'views/booktitle.html' }
        }
      };
    var filter = {
        name: 'filter',
        url: '',
        templateUrl: 'views/filter.html',
        controller: 'filterCtrl'
      };
    var info = {
        name: 'info',
        parent: main,
        url: '/info',
        templateUrl: 'views/info.html',
        controller: 'infoCtrl'
      };
    var introduction = {
        name: 'info.introduction',
        parent: info,
        url: '/introduction',
        templateUrl: 'views/introduction.html'
      };
    var getstarted = {
        name: 'info.getstarted',
        parent: info,
        url: '/getstarted',
        templateUrl: 'views/getstarted.html'
      };
    var manual = {
        name: 'info.manual',
        parent: info,
        url: '/manual',
        templateUrl: 'views/manual.html'
      };
    var releasenotes = {
        name: 'info.releasenotes',
        parent: info,
        url: '/releasenotes',
        templateUrl: 'views/releasenotes.html'
      };
    var feedback = {
        name: 'info.feedback',
        parent: info,
        url: '/feedback',
        templateUrl: 'views/feedback.html'
      };
    var credits = {
        name: 'info.credits',
        parent: info,
        url: '/credits',
        templateUrl: 'views/credits.html'
      };
    $stateProvider.state(main).state(book).state(playlists).state(sets).state(tunes).state(abc).state(info).state(bookedit).state(playlist).state(playlistlist).state(set).state(setlist).state(filter).state(tunelist).state(tune).state(tunesets).state(tuneabc).state(tuneinfo).state(tunepractice).state(tunevideos).state(tunevideo).state(introduction).state(getstarted).state(manual).state(releasenotes).state(feedback).state(credits);
  }
]);
angular.module('eTuneBookApp').value('GoogleApp', {
  apiKey: 'AIzaSyDz8AxR3gRMYpVQs4HUw879ZsFeKYTJoWk',
  clientId: '344379596022.apps.googleusercontent.com',
  scopes: [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/youtube',
    'https://www.googleapis.com/auth/userinfo.profile'
  ]
});
angular.module('eTuneBookApp').factory('debounce', [
  '$timeout',
  '$q',
  function ($timeout, $q) {
    return function (func, wait, immediate) {
      var timeout;
      var deferred = $q.defer();
      return function () {
        var context = this, args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) {
            deferred.resolve(func.apply(context, args));
            deferred = $q.defer();
          }
        };
        var callNow = immediate && !timeout;
        if (timeout) {
          $timeout.cancel(timeout);
        }
        timeout = $timeout(later, wait);
        if (callNow) {
          deferred.resolve(func.apply(context, args));
          deferred = $q.defer();
        }
        return deferred.promise;
      };
    };
  }
]);
'use strict';
angular.module('eTuneBookApp').controller('mainCtrl', [
  '$scope',
  '$window',
  '$location',
  '$timeout',
  '$rootScope',
  '$state',
  '$stateParams',
  'eTuneBookService',
  'GAPI',
  'Drive',
  function ($scope, $window, $location, $timeout, $rootScope, $state, $stateParams, eTuneBookService, GAPI, Drive) {
    $scope.exampleFileNameWithoutAbc = eTBk.EXAMPLE_FILENAME_WITHOUTABC;
    $scope.exampleVersion = eTBk.EXAMPLE_VERSION;
    $.fn.colorPicker.defaults.colors = [
      'F5F5F5',
      'CCFFCC',
      'EFEBD6',
      'FFFF99',
      'C7DAD4',
      'BFE4FF',
      'D8CFE6',
      'FFE6E6',
      'EEE6FF',
      'E6FFE6',
      'FFCCBF',
      'FFFFFF',
      'CCCCFF',
      'FFFFCC',
      'FF9980'
    ];
    $scope.tuneBook = eTuneBookService.getTuneBookFromLocalStorage();
    if ($scope.tuneBook != null && $scope.tuneBook.hasOwnProperty('tuneSets')) {
    } else {
      $scope.tuneBook = eTuneBookService.initializeTuneBook();
      $state.transitionTo('info.introduction');
    }
    $window.mobilecheck = function () {
      var check = false;
      (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
          check = true;
      }(navigator.userAgent || navigator.vendor || window.opera));
      return check;
    };
    $scope.loadBxplTuneBook = function () {
      $timeout(function () {
        try {
          $scope.tuneBook = eTuneBookService.getDefaultFromServer();
        } catch (e) {
          alert('eTuneBook cannot import ' + eTBk.EXAMPLE_FILENAME + ' due to: ' + e.toString());
        } finally {
          eTuneBookService.storeTuneBookAbc();
          if ($state.is('tunelist')) {
            $state.transitionTo('setlist');
          } else {
            $state.transitionTo('tunelist');
          }
        }
      }, 0);
    };
    $scope.initializeTuneBook = function () {
      $scope.tuneBook = eTuneBookService.initializeTuneBook();
      eTuneBookService.storeTuneBookAbc();
      $state.transitionTo('tuneabc', { intTuneId: $scope.tuneBook.tuneSets[0].tuneSetPositions[0].tune.intTuneId });
    };
    $scope.editTuneBook = function () {
      $state.transitionTo('book');
    };
    $scope.showPlaylists = function () {
      initActiveMenu();
      $scope.playlistsMenuActive = true;
      $state.transitionTo('playlistlist');
    };
    $scope.showSets = function () {
      initActiveMenu();
      $scope.setsMenuActive = true;
      $state.transitionTo('setlist');
    };
    $scope.showTunes = function () {
      initActiveMenu();
      $scope.tunesMenuActive = true;
      $state.transitionTo('tunelist');
    };
    $scope.showInfo = function () {
      initActiveMenu();
      $scope.infoMenuActive = true;
      $state.transitionTo('info.introduction');
    };
    function initActiveMenu() {
      $scope.bookMenuActive = false;
      $scope.playlistsMenuActive = false;
      $scope.setsMenuActive = false;
      $scope.tunesMenuActive = false;
      $scope.infoMenuActive = false;
    }
    $scope.putTuneBookToLocalStorage = function () {
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.importTuneBook = function (abc, fileName) {
      $timeout(function () {
        try {
          $scope.tuneBook = eTuneBookService.getTuneBookFromImportedFile(abc, fileName);
        } catch (e) {
          alert('eTuneBook cannot import ' + fileName + ' due to: ' + e.toString());
        } finally {
          eTuneBookService.storeTuneBookAbc();
          if ($state.is('tunelist')) {
            $state.transitionTo('setlist');
          } else {
            $state.transitionTo('tunelist');
          }
        }
      }, 0);
    };
    $scope.selectFileOnGoogleDrive = function () {
      var promise = GAPI.init();
      promise.then(function (result) {
        loadPicker();
      }, function (error) {
        alert('Failed: ' + error);
      });
    };
    function loadPicker() {
      gapi.load('picker', { 'callback': createPicker });
    }
    function createPicker() {
      var docsView = new google.picker.DocsView(google.picker.ViewId.DOCUMENTS).setIncludeFolders(true);
      var picker = new google.picker.PickerBuilder().addView(docsView).setAppId(GAPI.app.apiKey).setOAuthToken(GAPI.app.oauthToken.access_token).setCallback(pickerCallback).build();
      picker.setVisible(true);
    }
    function pickerCallback(data) {
      var url = 'nothing';
      if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
        var doc = data[google.picker.Response.DOCUMENTS][0];
        url = doc[google.picker.Document.URL];
        var promise = Drive.getFiles(doc[google.picker.Document.ID]);
        promise.then(function (file) {
          importTuneBookFromGoogleDrive(file);
        }, function (error) {
          alert('Failed: ' + error);
        });
      }
    }
    function importTuneBookFromGoogleDrive(file) {
      if (file.downloadUrl) {
        var accessToken = GAPI.app.oauthToken.access_token;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', file.downloadUrl);
        xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
        xhr.onload = function () {
          eTuneBookService.getTuneBookFromImportedFile(xhr.responseText, file.title);
          eTuneBookService.storeTuneBookAbc();
          if ($state.is('tunelist')) {
            $state.transitionTo('setlist');
          } else {
            $state.transitionTo('tunelist');
          }
        };
        xhr.onerror = function () {
          alert('Fehler beim Download des TuneBooks');
        };
        xhr.send();
      } else {
        alert('Fehler beim Laden des TuneBooks (kein Download-Link)');
      }
    }
    ;
    $scope.exportTuneBook = function (startDownload) {
      $state.transitionTo('abc');
    };
    $scope.$watch(function () {
      return $location.path();
    }, function () {
      var path = $location.path();
      var pathSplits = path.split('/');
      var beginOfPath = pathSplits[1].substring(0, 4);
      initActiveMenu();
      if (beginOfPath == 'sets') {
        if (pathSplits.length == 2) {
          $scope.setsMenuActive = true;
        }
      } else if (beginOfPath == 'tune') {
        if (pathSplits.length == 2) {
          $scope.tunesMenuActive = true;
        }
      } else if (beginOfPath == 'book') {
        $scope.bookMenuActive = true;
      } else if (beginOfPath == 'play') {
        if (pathSplits.length == 2) {
          $scope.playlistsMenuActive = true;
        }
      } else if (beginOfPath == 'abc') {
        $scope.bookMenuActive = true;
      } else if (beginOfPath == 'info') {
        $scope.infoMenuActive = true;
      }
    });
    $rootScope.$on('$stateChangeSuccess', function (event, to, toParams, from, fromParams) {
      $rootScope.$previousState = from;
      $rootScope.$previousStateParams = fromParams;
    });
  }
]);
'use strict';
angular.module('eTuneBookApp').controller('bookCtrl', [
  '$scope',
  '$location',
  '$timeout',
  '$rootScope',
  '$state',
  '$stateParams',
  'eTuneBookService',
  function bookCtrl($scope, $location, $timeout, $rootScope, $state, $stateParams, eTuneBookService) {
    $scope.tuneBook = eTuneBookService.getCurrentTuneBook();
    $scope.edit = function () {
      $state.transitionTo('bookedit', $stateParams);
    };
  }
]);
'use strict';
angular.module('eTuneBookApp').controller('bookeditCtrl', [
  '$scope',
  '$location',
  '$timeout',
  '$rootScope',
  '$state',
  '$stateParams',
  'eTuneBookService',
  function bookeditCtrl($scope, $location, $timeout, $rootScope, $state, $stateParams, eTuneBookService) {
    $scope.tuneBook = eTuneBookService.getCurrentTuneBook();
    $scope.tuneBookName = angular.copy($scope.tuneBook.name);
    $scope.tuneBookVersion = angular.copy($scope.tuneBook.version);
    $scope.tuneBookDescription = angular.copy($scope.tuneBook.description);
    $scope.save = function () {
      $scope.tuneBook.name = angular.copy($scope.tuneBookName);
      $scope.tuneBook.version = angular.copy($scope.tuneBookVersion);
      $scope.tuneBook.description = angular.copy($scope.tuneBookDescription);
      eTuneBookService.storeTuneBookAbc();
      $state.transitionTo('book', $stateParams);
    };
    $scope.cancel = function () {
      $state.transitionTo('book', $stateParams);
    };
  }
]);
'use strict';
angular.module('eTuneBookApp').controller('abcCtrl', [
  '$scope',
  '$location',
  '$timeout',
  '$rootScope',
  '$state',
  'eTuneBookService',
  'GAPI',
  'Drive',
  function ($scope, $location, $timeout, $rootScope, $state, eTuneBookService, GAPI, Drive) {
    $scope.abcOption = eTuneBookService.createDefaultAbcOption();
    $scope.tuneBook = eTuneBookService.getCurrentTuneBook();
    exportTuneBook(false);
    function exportTuneBook(startDownload) {
      var date = moment(new Date());
      $scope.tuneBook.version = date.format('YYYY-MM-DDTHH:mm');
      $scope.exportedTuneBook = eTuneBookService.writeAbc($scope.abcOption);
      saveTuneBookAsFile($scope.exportedTuneBook, startDownload);
    }
    $scope.saveTuneBookToGoogleDrive = function () {
      var promise = GAPI.init();
      promise.then(function (result) {
        loadPicker();
      }, function (error) {
        alert('Failed: ' + error);
      });
    };
    function loadPicker() {
      gapi.load('picker', { 'callback': createPicker });
    }
    function createPicker() {
      var docsView = new google.picker.DocsView(google.picker.ViewId.FOLDERS).setIncludeFolders(true).setMimeTypes('application/vnd.google-apps.folder').setSelectFolderEnabled(true);
      var picker = new google.picker.PickerBuilder().addView(docsView).setAppId(GAPI.app.apiKey).setOAuthToken(GAPI.app.oauthToken.access_token).setCallback(pickerCallback).build();
      picker.setVisible(true);
    }
    function pickerCallback(data) {
      if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
        var doc = data[google.picker.Response.DOCUMENTS][0];
        insertFile($scope.exportedTuneBook, doc[google.picker.Document.ID]);
      }
    }
    function insertFile(abc, folderId, callback) {
      var boundary = '-------314159265358979323846';
      var delimiter = '\r\n--' + boundary + '\r\n';
      var close_delim = '\r\n--' + boundary + '--';
      var date = moment();
      var tuneBookVersion = date.format('YYYY-MM-DDTHH:mm');
      var fileNameToSaveAs = 'TuneBook-' + tuneBookVersion;
      var contentType = 'text/plain';
      var metadata = {
          'title': fileNameToSaveAs,
          'mimeType': contentType,
          'parents': [{ 'id': folderId }]
        };
      var base64Data = abc;
      var multipartRequestBody = delimiter + 'Content-Type: application/json\r\n\r\n' + JSON.stringify(metadata) + delimiter + 'Content-Type: ' + contentType + '\r\n' + '\r\n' + base64Data + close_delim;
      var request = gapi.client.request({
          'path': '/upload/drive/v2/files',
          'method': 'POST',
          'params': { 'uploadType': 'multipart' },
          'headers': { 'Content-Type': 'multipart/mixed; boundary="' + boundary + '"' },
          'body': multipartRequestBody
        });
      if (!callback) {
        callback = function (file) {
          console.log(file);
          alert('\'' + file.title + '\' exported to Google Drive');
        };
      }
      request.execute(callback);
    }
    function saveTuneBookAsFile(exportedTuneBookAsText, startDownload) {
      var exportedTuneBookAsBlob = new Blob([exportedTuneBookAsText], { type: 'text/plain' });
      var fileNameToSaveAs = 'My TuneBook';
      var downloadLink = document.getElementById('saveTuneBookToFile');
      downloadLink.href = createObjectURL(exportedTuneBookAsBlob);
      downloadLink.download = fileNameToSaveAs;
      if (startDownload) {
        downloadLink.click();
      }
    }
    function createObjectURL(file) {
      if (window.webkitURL) {
        return window.webkitURL.createObjectURL(file);
      } else if (window.URL && window.URL.createObjectURL) {
        return window.URL.createObjectURL(file);
      } else {
        return null;
      }
    }
    $scope.toggleFingeringAbc = function () {
      $scope.abcOption.fingering = !$scope.abcOption.fingering;
      exportTuneBook(false);
    };
    $scope.toggleTuneSetAbc = function () {
      $scope.abcOption.tuneSet = !$scope.abcOption.tuneSet;
      exportTuneBook(false);
    };
    $scope.togglePlaylistAbc = function () {
      $scope.abcOption.playlist = !$scope.abcOption.playlist;
      exportTuneBook(false);
    };
    $scope.togglePlayDateAbc = function () {
      $scope.abcOption.playDate = !$scope.abcOption.playDate;
      exportTuneBook(false);
    };
    $scope.toggleSkillAbc = function () {
      $scope.abcOption.skill = !$scope.abcOption.skill;
      exportTuneBook(false);
    };
    $scope.toggleColorAbc = function () {
      $scope.abcOption.color = !$scope.abcOption.color;
      exportTuneBook(false);
    };
    $scope.toggleAnnotationAbc = function () {
      $scope.abcOption.annotation = !$scope.abcOption.annotation;
      exportTuneBook(false);
    };
    $scope.toggleSiteAbc = function () {
      $scope.abcOption.website = !$scope.abcOption.website;
      exportTuneBook(false);
    };
    $scope.toggleTubeAbc = function () {
      $scope.abcOption.video = !$scope.abcOption.video;
      exportTuneBook(false);
    };
  }
]);
'use strict';
angular.module('eTuneBookApp').controller('playlistsCtrl', [
  '$scope',
  '$location',
  '$timeout',
  '$rootScope',
  '$state',
  '$stateParams',
  'eTuneBookService',
  function ($scope, $location, $timeout, $rootScope, $state, $stateParams, eTuneBookService) {
  }
]);
'use strict';
angular.module('eTuneBookApp').controller('playlistlistCtrl', [
  '$scope',
  '$window',
  '$location',
  '$timeout',
  '$rootScope',
  '$state',
  '$stateParams',
  'eTuneBookService',
  function playlistlistCtrl($scope, $window, $location, $timeout, $rootScope, $state, $stateParams, eTuneBookService) {
    var columnDefs, rowTempl, aggregateTemplate;
    $scope.playlists = eTuneBookService.getPlaylists();
    $scope.showPlaylist = function (playlist) {
      $state.transitionTo('playlist', { playlistId: playlist.id });
    };
    $scope.sortPlaylistIdAsNumber = function (playlist) {
      if (isNaN(playlist.id)) {
        return playlist.id;
      }
      return parseInt(playlist.id);
    };
    $scope.edit = function (playlist) {
      $scope.playlistToBeEdited = playlist;
      angular.element('#PlaylistEditor').modal('show');
    };
    $scope.copy = function (playlist) {
      eTuneBookService.copyPlaylist(playlist.id);
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.doneEditing = function (playlist) {
      eTuneBookService.storeTuneBookAbc();
      angular.element('#PlaylistEditor').modal('hide');
    };
    $scope.delete = function (playlist) {
      eTuneBookService.deletePlaylist(playlist.id);
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.newPlaylist = function () {
      $scope.playlistToBeEdited = eTuneBookService.addEmptyPlaylist();
      angular.element('#PlaylistEditor').modal('show');
    };
  }
]);
'use strict';
angular.module('eTuneBookApp').controller('playlistCtrl', [
  '$scope',
  '$location',
  '$timeout',
  '$rootScope',
  '$state',
  '$stateParams',
  'eTuneBookService',
  '$window',
  function ($scope, $location, $timeout, $rootScope, $state, $stateParams, eTuneBookService, $window) {
    $scope.playlistId = $stateParams['playlistId'];
    $scope.playlist = eTuneBookService.getPlaylist($scope.playlistId);
    $scope.tuneBook = eTuneBookService.getCurrentTuneBook();
    eTuneBookService.initializeTuneSetPositionPlayInfosForPlaylist($scope.playlistId);
    $scope.moveUp = function (playlistPosition) {
      $scope.playlist = eTuneBookService.moveUpPlaylistPosition($scope.playlistId, playlistPosition.position);
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.moveDown = function (playlistPosition) {
      $scope.playlist = eTuneBookService.moveDownPlaylistPosition($scope.playlistId, playlistPosition.position);
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.showSet = function (playlistPosition) {
      $state.transitionTo('set', { tuneSetId: playlistPosition.tuneSet.tuneSetId });
    };
    $scope.showTune = function (intTuneId) {
      $state.transitionTo('tune', { intTuneId: intTuneId });
    };
    $scope.sortTuneSetPositionAsNumber = function (tuneSetPosition) {
      if (isNaN(tuneSetPosition.position)) {
        return tuneSetPosition.position;
      }
      return parseInt(tuneSetPosition.position);
    };
    $scope.sortPlaylistPositionAsNumber = function (playlistPosition) {
      if (isNaN(playlistPosition.position)) {
        return playlistPosition.position;
      }
      return parseInt(playlistPosition.position);
    };
    $scope.editPlaylistPosition = function (playlistPosition) {
      $scope.playlistPositionToBeEdited = playlistPosition;
      $scope.tuneSet = playlistPosition.tuneSet;
      angular.element('#PlaylistPositionEditor').modal('show');
    };
    $scope.editPlaylistTuneSetPosition = function (playlistPosition, tuneSetPosition) {
      $scope.playlistTuneSetPositionToBeEdited = tuneSetPosition;
      $scope.partPlayInfo = eTuneBookService.initializePartPlayInfo();
      angular.element('#PlaylistTuneSetPositionEditor').modal('show');
    };
    $scope.doneEditingPlaylistPosition = function (playlistPosition) {
      if (playlistPosition.name == '') {
        playlistPosition.name = playlistPosition.tuneSet.tuneSetName;
      }
      eTuneBookService.storeTuneBookAbc();
      angular.element('#PlaylistPositionEditor').modal('hide');
    };
    $scope.doneEditingPlaylistTuneSetPosition = function (tuneSetPosition) {
      eTuneBookService.storeTuneBookAbc();
      angular.element('#PlaylistTuneSetPositionEditor').modal('hide');
    };
    $scope.deletePlaylistPosition = function (playlistPosition) {
      eTuneBookService.deletePlaylistPosition($scope.playlistId, playlistPosition.position);
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.addPartPlayInfo = function (tuneSetPositionPlayInfo, partPlayInfo) {
      tuneSetPositionPlayInfo.addPartPlayInfo(partPlayInfo);
      eTuneBookService.storeTuneBookAbc();
      $scope.partPlayInfo = eTuneBookService.initializePartPlayInfo();
    };
    $scope.editPartPlayInfo = function (partPlayInfo) {
      $scope.partPlayInfo = partPlayInfo;
    };
    $scope.deletePartPlayInfo = function (tuneSetPositionPlayInfo, partPlayInfo) {
      tuneSetPositionPlayInfo.deletePartPlayInfo(partPlayInfo);
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.moveUpPartPlayInfo = function (tuneSetPositionPlayInfo, partPlayInfo) {
      tuneSetPositionPlayInfo.moveUpPartPlayInfo(partPlayInfo);
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.moveDownPartPlayInfo = function (tuneSetPositionPlayInfo, partPlayInfo) {
      tuneSetPositionPlayInfo.moveDownPartPlayInfo(partPlayInfo);
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.loadDefaulAnnotation = function (tuneSetPosition) {
      tuneSetPosition.currentTuneSetPositionPlayInfo.annotation = tuneSetPosition.annotation;
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.loadDefaulRepeat = function (tuneSetPosition) {
      tuneSetPosition.currentTuneSetPositionPlayInfo.repeat = tuneSetPosition.repeat;
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.newPlaylistPosition = function () {
      $scope.playlistPositionToBeEdited = eTuneBookService.addEmptyPlaylistPosition($scope.playlistId);
      angular.element('#PlaylistPositionEditor').modal('show');
    };
    $scope.justPlayedTheSet = function (tuneSet) {
      var now = new Date();
      eTuneBookService.addTuneSetPlayDate(tuneSet, now);
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.justPlayedTheTune = function (tune) {
      var now = new Date();
      eTuneBookService.addTunePlayDate(tune, now);
      eTuneBookService.storeTuneBookAbc();
    };
  }
]);
'use strict';
angular.module('eTuneBookApp').controller('setsCtrl', [
  '$scope',
  '$location',
  '$timeout',
  '$rootScope',
  '$state',
  '$stateParams',
  'eTuneBookService',
  function ($scope, $location, $timeout, $rootScope, $state, $stateParams, eTuneBookService) {
    $scope.playDateFilter = 'All Sets';
  }
]);
'use strict';
angular.module('eTuneBookApp').controller('setlistCtrl', [
  '$scope',
  '$window',
  '$location',
  '$timeout',
  '$rootScope',
  '$state',
  '$stateParams',
  'eTuneBookService',
  function setlistCtrl($scope, $window, $location, $timeout, $rootScope, $state, $stateParams, eTuneBookService) {
    var filterOptions, columnDefs, rowTempl, aggregateTemplate;
    filterOptions = {};
    filterOptions.key = $stateParams['key'];
    filterOptions.type = $stateParams['type'];
    filterOptions.color = $stateParams['color'];
    filterOptions.skill = $stateParams['skill'];
    filterOptions.event = $stateParams['evt'];
    filterOptions.band = $stateParams['band'];
    filterOptions.plmin = $stateParams['plmin'];
    filterOptions.plmax = $stateParams['plmax'];
    filterOptions.freqcomp = $stateParams['freqcomp'];
    filterOptions.freq = $stateParams['freq'];
    filterOptions.updmin = $stateParams['updmin'];
    filterOptions.updmax = $stateParams['updmax'];
    $scope.tuneSetPositions = eTuneBookService.getTuneSetPositionsFiltered(filterOptions);
    rowTempl = '<div ng-style="{ \'cursor\': row.cursor }" ' + 'ng-repeat="col in renderedColumns" ' + 'style="background-color:{{row.entity.tune.color}}" ' + 'class="ngCell {{col.cellClass}} {{col.colIndex()}}" ng-cell></div>';
    aggregateTemplate = '<div ng-style="rowStyle(row)" class="ngAggregate"> <span class="ngAggregateText"><a href="#/sets/{{row.label}}" title="Show The Set" >{{row.label CUSTOM_FILTERS}}{{aggFC(row)}}</a></span> <div class="{{row.aggClass()}}"></div><button type="button" ng-click="justPlayedTheSet(row.label)" class="btn btn-default col-xs-offset-8 col-sm-offset-8 col-md-offset-8 col-lg-offset-8" title="Just played"><i class="glyphicon glyphicon-ok-circle"></i></button> </div>';
    $scope.tuneSetPositionsSelected = [];
    if ($window.mobilecheck()) {
      columnDefs = [
        {
          field: 'tuneSetId',
          displayName: '',
          width: '0%',
          sortable: false,
          groupable: false
        },
        {
          field: 'position',
          displayName: '',
          width: '0%',
          sortable: false,
          groupable: false
        },
        {
          field: 'tune.title',
          displayName: 'Set',
          cellFilter: 'eliminateThe',
          width: '60%',
          sortable: false,
          groupable: false,
          cellTemplate: '<a href="#/tunes/{{row.entity.tune.intTuneId}}" title="Show The Tune" >{{row.entity.tune.title}}</a>'
        },
        {
          field: 'tune.lastPlayed',
          displayName: 'Played',
          cellFilter: 'fromNow',
          width: '30%',
          sortable: false,
          groupable: false
        }
      ];
    } else {
      columnDefs = [
        {
          field: 'tuneSetId',
          displayName: '',
          width: '0%',
          sortable: false,
          groupable: false
        },
        {
          field: 'position',
          displayName: '',
          width: '0%',
          sortable: false,
          groupable: false
        },
        {
          field: 'tune.title',
          displayName: 'Set',
          cellFilter: 'eliminateThe',
          width: '50%',
          sortable: false,
          groupable: false,
          cellTemplate: '<a href="#/tunes/{{row.entity.tune.intTuneId}}" title="Show The Tune" >{{row.entity.tune.title}}</a>'
        },
        {
          field: 'tune.type',
          displayName: 'Type',
          width: '8%',
          sortable: false,
          groupable: false
        },
        {
          field: 'tune.key',
          displayName: 'Key',
          width: '7%',
          sortable: false,
          groupable: false
        },
        {
          field: 'tune.lastPlayed',
          displayName: 'Played',
          cellFilter: 'fromNow',
          width: '10%',
          sortable: false,
          groupable: false
        },
        {
          field: 'tune.frequencyPlayed',
          displayName: 'Frequency',
          width: '7%',
          sortable: false,
          groupable: false
        },
        {
          field: 'tune.skill',
          displayName: 'Skill',
          width: '8%',
          sortable: false,
          groupable: false
        },
        {
          field: 'tune.lastModified',
          displayName: 'Modified',
          cellFilter: 'fromNow',
          width: '10%',
          sortable: false,
          groupable: false
        }
      ];
    }
    $scope.setList = {
      data: 'tuneSetPositions',
      selectedItems: $scope.tuneSetPositionsSelected,
      multiSelect: false,
      sortInfo: {
        fields: ['position'],
        directions: ['asc']
      },
      groups: ['tuneSetId'],
      groupsCollapsedByDefault: false,
      aggregateTemplate: aggregateTemplate,
      rowTemplate: rowTempl,
      columnDefs: columnDefs
    };
    $scope.aggFC = function (row) {
      var target, env, envDefined, name, theSplits, tuneSetInfo;
      tuneSetInfo = '';
      for (var i = 0; i < row.children.length; i++) {
        if (row.children[i].entity.position == '1') {
          target = row.children[i].entity.tuneSetTarget;
          env = row.children[i].entity.tuneSetEnv;
          name = row.children[i].entity.tuneSetName;
          if (name != null && name != 'undefined' && name != '') {
          } else {
            name = row.children[i].entity.tune.title;
          }
          theSplits = [];
          theSplits = name.split(',');
          name = theSplits[0];
          tuneSetInfo = tuneSetInfo + ' ' + name;
        }
      }
      envDefined = false;
      if (env != null && env != 'undefined' && env != '') {
        tuneSetInfo = tuneSetInfo + ' (' + env;
        envDefined = true;
      }
      if (target != null && target != 'undefined' && target != '') {
        if (!envDefined) {
          tuneSetInfo = tuneSetInfo + '(' + target;
        } else {
          tuneSetInfo = tuneSetInfo + ': ' + target;
        }
        tuneSetInfo = tuneSetInfo + ')';
      }
      return tuneSetInfo;
    };
    if ($rootScope.$previousState != undefined && $rootScope.$previousState.name == 'set') {
      $timeout(function () {
        var previousFirstSetPosition = eTuneBookService.getFirstTuneSetPositionById($rootScope.$previousStateParams.tuneSetId);
        var grid = $scope.setList.ngGrid;
        var rowIndex = grid.data.indexOf(previousFirstSetPosition);
        grid.$viewport.scrollTop(grid.rowMap[rowIndex] * grid.config.rowHeight);
      }, 0, false);
    }
    $scope.setList.filterOptions = {
      filterText: '',
      useExternalFilter: false
    };
    $scope.$watch('search', function (searchText) {
      if (searchText) {
        if (searchText != '') {
          var searchQuery = 'Set:' + searchText + ';';
          $scope.setList.filterOptions.filterText = searchQuery;
        } else {
        }
      }
    });
    $scope.justPlayedTheSet = function (tuneSetId) {
      var now = new Date();
      eTuneBookService.addTuneSetPlayDate(eTuneBookService.getTuneSet(tuneSetId), now);
      eTuneBookService.storeTuneBookAbc();
    };
  }
]);
'use strict';
angular.module('eTuneBookApp').controller('setCtrl', [
  '$scope',
  '$location',
  '$timeout',
  '$rootScope',
  '$state',
  '$stateParams',
  'eTuneBookService',
  function ($scope, $location, $timeout, $rootScope, $state, $stateParams, eTuneBookService) {
    $scope.tuneSetId = $stateParams['tuneSetId'];
    $scope.tuneSet = eTuneBookService.getTuneSet($scope.tuneSetId);
    $scope.tuneBook = eTuneBookService.getCurrentTuneBook();
    $scope.firstTuneSetPositions = eTuneBookService.getFirstTuneSetPositions();
    $scope.currentFirstTuneSetPosition = eTuneBookService.getFirstTuneSetPosition($scope.tuneSet);
    setTargetTuneSetPositionsForMoving();
    $scope.editTuneSetPosition = function (tuneSetPosition) {
      $scope.tuneSetPositionToBeEdited = tuneSetPosition;
      angular.element('#TuneSetPositionEditor').modal('show');
    };
    $scope.editTuneSet = function (tuneSet) {
      $scope.tuneSetToBeEdited = tuneSet;
      angular.element('#TuneSetEditor').modal('show');
    };
    $scope.showSampleDots = function (tuneSetPosition) {
      $timeout(function () {
        var showHere = 'sampleDotsViewerForTune' + tuneSetPosition.tune.id + 'Set' + tuneSetPosition.tuneSetId;
        var tuneAbc = eTuneBookService.getSampleAbc(tuneSetPosition.tune);
        var sampleDotsScale = 0.9;
        var sampleDotsStaffWidth = 960;
        ABCJS.renderAbc(showHere, tuneAbc, {}, {
          scale: sampleDotsScale,
          paddingtop: 0,
          paddingbottom: 0,
          staffwidth: sampleDotsStaffWidth
        }, {});
      }, 0, false);
    };
    $scope.moveTune = function (tuneSetPosition) {
      $scope.tuneSetPositionToBeMoved = tuneSetPosition;
      angular.element('#TuneSetPositionMover').modal('show');
    };
    $scope.doneMoving = function (tuneSetPosition, targetTuneSetPosition, beforeOrAfter, moveOrCopy) {
      angular.element('#TuneSetPositionMover').modal('hide');
      $scope.movedTuneSetPosition = null;
      var tuneSetDeleted = false;
      var targetTuneSetId = null;
      var targetPosition = 1;
      if (targetTuneSetPosition != null && targetTuneSetPosition != undefined) {
        targetTuneSetId = targetTuneSetPosition.tuneSetId;
        targetPosition = targetTuneSetPosition.position;
      }
      tuneSetDeleted = eTuneBookService.moveTuneSetPosition(tuneSetPosition.tuneSetId, tuneSetPosition.position, targetTuneSetId, targetPosition, beforeOrAfter, moveOrCopy);
      eTuneBookService.storeTuneBookAbc();
      if (tuneSetDeleted) {
        $state.transitionTo('tune', { intTuneId: tuneSetPosition.tune.intTuneId });
      }
    };
    $scope.deleteTuneSetPosition = function (tuneSetPosition) {
      var tuneSetDeleted = false;
      tuneSetDeleted = eTuneBookService.deleteTuneSetPosition(tuneSetPosition.tuneSetId, tuneSetPosition.position);
      eTuneBookService.storeTuneBookAbc();
      if (tuneSetDeleted) {
        $state.transitionTo('tune', { intTuneId: tuneSetPosition.tune.intTuneId });
      }
    };
    $scope.doneTuneSetPositionEditing = function () {
      angular.element('#TuneSetPositionEditor').modal('hide');
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.putTuneBookToLocalStorage = function () {
      eTuneBookService.storeTuneBookAbc();
    };
    function setTargetTuneSetPositionsForMoving() {
      $scope.targetTuneSetPositionsForMoving = eTuneBookService.getTuneSetPositions();
    }
    $scope.justPlayedTheSet = function (tuneSet) {
      var now = new Date();
      eTuneBookService.addTuneSetPlayDate(tuneSet, now);
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.justPlayedTheTune = function (tune) {
      var now = new Date();
      eTuneBookService.addTunePlayDate(tune, now);
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.showTune = function (intTuneId) {
      $state.transitionTo('tune', { intTuneId: intTuneId });
    };
    $scope.sortTuneSetPositionAsNumber = function (tuneSetPosition) {
      if (isNaN(tuneSetPosition.position)) {
        return tuneSetPosition.position;
      }
      return parseInt(tuneSetPosition.position);
    };
    $scope.loadRandomTuneSet = function (playDateFilter) {
      $scope.$parent.playDateFilter = playDateFilter;
      var tuneSetId = eTuneBookService.getRandomTuneSetId(playDateFilter);
      $state.transitionTo('set', { tuneSetId: tuneSetId });
    };
  }
]);
'use strict';
angular.module('eTuneBookApp').controller('tuneCtrl', [
  '$scope',
  '$location',
  '$timeout',
  '$rootScope',
  '$state',
  '$stateParams',
  'eTuneBookService',
  function ($scope, $location, $timeout, $rootScope, $state, $stateParams, eTuneBookService) {
    $scope.intTuneId = $stateParams['intTuneId'];
    $scope.tune = eTuneBookService.getTune($scope.intTuneId);
    $scope.tunes = eTuneBookService.getTunes();
    $scope.currentState = 'Dots';
    renderAbc($scope.tune);
    $scope.showTuneSets = function () {
      var sets = eTuneBookService.getTuneSetsByIntTuneId($scope.intTuneId);
      if (sets.length == 0 || sets.length > 1) {
        initActiveMenu();
        $scope.tuneSetsMenuActive = true;
        $state.transitionTo('tunesets', { intTuneId: $scope.intTuneId });
      } else {
        $state.transitionTo('set', { tuneSetId: sets[0].tuneSetId });
      }
    };
    $scope.showTuneVideos = function () {
      initActiveMenu();
      $scope.tuneVideosMenuActive = true;
      $state.transitionTo('tunevideos', { intTuneId: $scope.intTuneId });
    };
    $scope.showTuneAbc = function () {
      initActiveMenu();
      $scope.tuneAbcMenuActive = true;
      $state.transitionTo('tuneabc', { intTuneId: $scope.intTuneId });
    };
    $scope.showTunePractice = function () {
      initActiveMenu();
      $scope.tunePracticeMenuActive = true;
      $state.transitionTo('tunepractice', { intTuneId: $scope.intTuneId });
    };
    $scope.showTuneInfo = function () {
      initActiveMenu();
      $scope.tuneInfoMenuActive = true;
      $state.transitionTo('tuneinfo', { intTuneId: $scope.intTuneId });
    };
    function initActiveMenu() {
      $scope.tuneSetsMenuActive = false;
      $scope.tuneVideosMenuActive = false;
      $scope.tuneAbcMenuActive = false;
      $scope.tunePracticeMenuActive = false;
      $scope.tuneInfoMenuActive = false;
    }
    function renderAbc(tune) {
      $timeout(function () {
        var showHere = 'renderTheDotsFor' + $scope.intTuneId;
        var playHere = 'renderMidi';
        var tuneAbc = skipFingering(tune.pure);
        var dotsScale = 1;
        ABCJS.renderAbc(showHere, tuneAbc, {}, { scale: dotsScale }, {});
      }, 0, false);
    }
    function skipFingering(tuneAbc) {
      return tuneAbc;
    }
    $scope.tuneUp = function () {
      eTuneBookService.tuneUp($scope.intTuneId);
      renderAbc($scope.tune);
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.tuneDown = function () {
      eTuneBookService.tuneDown($scope.intTuneId);
      renderAbc($scope.tune);
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.editTuneInfo = function () {
      $state.transitionTo('tuneinfo', { intTuneId: $scope.tune.intTuneId });
    };
    $scope.editTune = function () {
      $state.transitionTo('tuneabc', { intTuneId: $scope.tune.intTuneId });
    };
    $scope.justPlayedTheTune = function (tune) {
      var now = new Date();
      eTuneBookService.addTunePlayDate(tune, now);
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.loadRandomTune = function (playDateFilter) {
      $scope.$parent.playDateFilter = playDateFilter;
      var intTuneId = eTuneBookService.getRandomIntTuneId(playDateFilter);
      $state.transitionTo('tune', { intTuneId: intTuneId });
    };
    $scope.$watch(function () {
      return $state.is('tune');
    }, function () {
      if ($state.is('tune')) {
        $scope.currentState = 'Dots';
      }
    });
  }
]);
'use strict';
angular.module('eTuneBookApp').controller('tunesetsCtrl', [
  '$scope',
  '$location',
  '$timeout',
  '$rootScope',
  '$state',
  '$stateParams',
  'eTuneBookService',
  function ($scope, $location, $timeout, $rootScope, $state, $stateParams, eTuneBookService) {
    $scope.intTuneId = $stateParams['intTuneId'];
    $scope.$parent.currentState = 'Sets';
    $scope.tuneSetPositions = eTuneBookService.getTuneSetsAsTuneSetPositions($scope.intTuneId);
    $scope.tuneSetPositionsSelected = [];
    var rowTempl = '<div ng-style="{ \'cursor\': row.cursor }" ' + 'ng-repeat="col in renderedColumns" ' + 'style="background-color:{{row.entity.tune.color}}" ' + 'class="ngCell {{col.cellClass}} {{col.colIndex()}}" ng-cell></div>';
    var aggregateTemplate = '<div ng-click="row.toggleExpand()" ng-style="rowStyle(row)" class="ngAggregate"> <span class="ngAggregateText">{{row.label CUSTOM_FILTERS}}{{aggFC(row)}}</span> <div class="{{row.aggClass()}}"></div> </div>';
    $scope.tuneSetList = {
      data: 'tuneSetPositions',
      selectedItems: $scope.tuneSetPositionsSelected,
      multiSelect: false,
      sortInfo: {
        fields: ['position'],
        directions: ['asc']
      },
      groups: ['tuneSetId'],
      groupsCollapsedByDefault: false,
      aggregateTemplate: aggregateTemplate,
      rowTemplate: rowTempl,
      afterSelectionChange: function () {
        $state.transitionTo('set', { tuneSetId: $scope.tuneSetPositionsSelected[0].tuneSetId });
      },
      columnDefs: [
        {
          field: 'tuneSetId',
          displayName: '',
          width: '0%',
          sortable: false,
          groupable: false
        },
        {
          field: 'position',
          displayName: '',
          width: '0%',
          sortable: false,
          groupable: false
        },
        {
          field: 'tune.title',
          displayName: 'Set',
          cellFilter: 'eliminateThe',
          width: '50%',
          sortable: false,
          groupable: false
        },
        {
          field: 'tune.type',
          displayName: 'Type',
          width: '20%',
          sortable: false,
          groupable: false
        },
        {
          field: 'tune.key',
          displayName: 'Key',
          width: '20%',
          sortable: false,
          groupable: false
        }
      ]
    };
    $scope.aggFC = function (row) {
      var target, env, envDefined, name, theSplits, tuneSetInfo;
      tuneSetInfo = '';
      for (var i = 0; i < row.children.length; i++) {
        if (row.children[i].entity.position == 1) {
          target = row.children[i].entity.tuneSetTarget;
          env = row.children[i].entity.tuneSetEnv;
          name = row.children[i].entity.tuneSetName;
          if (name != null && name != 'undefined' && name != '') {
          } else {
            name = row.children[i].entity.tune.title;
          }
          theSplits = [];
          theSplits = name.split(',');
          name = theSplits[0];
          tuneSetInfo = tuneSetInfo + ' ' + name;
        }
      }
      envDefined = false;
      if (env != null && env != 'undefined' && env != '') {
        tuneSetInfo = tuneSetInfo + ' (' + env;
        envDefined = true;
      }
      if (target != null && target != 'undefined' && target != '') {
        if (!envDefined) {
          tuneSetInfo = tuneSetInfo + '(' + target;
        } else {
          tuneSetInfo = tuneSetInfo + ': ' + target;
        }
        tuneSetInfo = tuneSetInfo + ')';
      }
      return tuneSetInfo;
    };
    $scope.newTuneSet = function () {
      eTuneBookService.initializeTuneSet($scope.intTuneId);
      $scope.tuneSetPositions = eTuneBookService.getTuneSetsAsTuneSetPositions($scope.intTuneId);
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.putTuneBookToLocalStorage = function () {
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.removeTuneSetPosition = function (tuneSetPosition) {
      for (var i = 0; i < $scope.tuneBook.tuneSets.length; i++) {
        if ($scope.tuneBook.tuneSets[i].tuneSetId == tuneSetPosition.tuneSetId) {
          $scope.tuneBook.tuneSets[i].tuneSetPositions.splice($scope.tuneBook.tuneSets[i].tuneSetPositions.indexOf(tuneSetPosition), 1);
          if ($scope.tuneBook.tuneSets[i].tuneSetPositions.length == 0) {
            $scope.tuneBook.tuneSets.splice(i, 1);
          }
        }
      }
    };
  }
]);
'use strict';
angular.module('eTuneBookApp').controller('tuneabcCtrl', [
  '$scope',
  '$location',
  '$timeout',
  '$rootScope',
  '$state',
  '$stateParams',
  'eTuneBookService',
  function tuneabcCtrl($scope, $location, $timeout, $rootScope, $state, $stateParams, eTuneBookService) {
    $scope.intTuneId = $stateParams['intTuneId'];
    $scope.tune = eTuneBookService.getTune($scope.intTuneId);
    $scope.$parent.currentState = 'Abc';
    $timeout(function () {
      var editHere = 'abcEditorFor' + $scope.intTuneId;
      var showHere = 'renderTheDotsFor' + $scope.intTuneId;
      new ABCJS.Editor(editHere, { canvas_id: showHere });
    }, 0, false);
    setOptions();
    $scope.tuneEditModus = true;
    $scope.noteEditModus = false;
    $scope.abcEditor = 'Tune Editor';
    $scope.setTuneEditModus = function () {
      $scope.tuneEditModus = true;
      $scope.noteEditModus = false;
      $scope.abcEditor = 'Tune Editor';
    };
    $scope.setNoteElementEditModus = function () {
      $scope.tuneEditModus = false;
      $scope.noteEditModus = true;
      $scope.abcEditor = 'Note Editor';
    };
    $scope.doneEditing = function (tune) {
      if (!tune.pure) {
        eTuneBookService.deleteTuneSetPositionsAndTune(tune.intTuneId);
        $state.transitionTo('setlist');
      } else {
        tune.title = eTuneBookService.getTuneTitle(tune);
        tune.type = eTuneBookService.getTuneType(tune);
        tune.key = eTuneBookService.getTuneKey(tune);
        tune.id = eTuneBookService.getTuneId(tune);
      }
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.doneSelecting = function (abc, selectionStart, selectionEnd) {
      var abcSelection, abcNoteElement, abcChars, abcChar, openingBangIndex;
      abcNoteElement = initAbcNoteElement();
      abcSelection = {
        abcBase: abc,
        startIndex: selectionStart,
        endIndex: selectionEnd,
        abc: 'undefined',
        abcNoteElement: abcNoteElement
      };
      deselectOptions();
      abcSelection.abc = abc.slice(selectionStart, selectionEnd);
      abcChars = abcSelection.abc.split('');
      for (var i = 0; i < abcChars.length; i++) {
        abcChar = abcChars[i];
        if (abcChar == ' ') {
        } else if (abcChar == '!') {
          if (openingBangIndex == undefined) {
            openingBangIndex = selectionStart + i;
          } else {
            if (abcNoteElement.finger.index != undefined) {
              abcNoteElement.finger.endSignIndex = selectionStart + i;
            }
            openingBangIndex = undefined;
          }
        } else if (abcNoteElement.finger.index == undefined && openingBangIndex != undefined) {
          if (!isNaN(parseInt(abcChar))) {
            for (var y = 0; y < $scope.fingerOptions.length; y++) {
              if (abcChar == $scope.fingerOptions[y].abc) {
                abcNoteElement.finger.index = selectionStart + i;
                abcNoteElement.finger.abc = abcChar;
                $scope.fingerOption = $scope.fingerOptions[y];
                abcNoteElement.finger.startSignIndex = openingBangIndex;
              }
            }
          }
        } else if (abcChar == '"') {
          if (abcNoteElement.chordSymbol.startSignIndex == undefined) {
            abcNoteElement.chordSymbol.startSignIndex = selectionStart + i;
          } else if (abcNoteElement.chordSymbol.endSignIndex == undefined) {
            abcNoteElement.chordSymbol.endSignIndex = selectionStart + i;
            for (var z = 0; z < $scope.chordOptions.length; z++) {
              if (abcNoteElement.chordSymbol.abc == $scope.chordOptions[z].abc) {
                $scope.chordOption = $scope.chordOptions[z];
              }
            }
          }
        } else if (abcNoteElement.chordSymbol.startSignIndex != undefined && abcNoteElement.chordSymbol.endSignIndex == undefined) {
          if (abcNoteElement.chordSymbol.abc == undefined) {
            abcNoteElement.chordSymbol.abc = abcChar;
          } else {
            abcNoteElement.chordSymbol.abc = abcNoteElement.chordSymbol.abc + abcChar;
          }
        } else if (abcChar == '_' || abcChar == '=' || abcChar == '^') {
          if (abcNoteElement.accidental.startIndex == undefined) {
            abcNoteElement.accidental.startIndex = selectionStart + i;
            abcNoteElement.accidental.abc = abcChar;
          } else {
            abcNoteElement.accidental.abc = abcNoteElement.accidental.abc + abcChar;
          }
        } else if (abcNoteElement.note.index == undefined) {
          if (abcNoteElement.accidental.startIndex != undefined && abcNoteElement.accidental.endIndex == undefined) {
            abcNoteElement.accidental.endIndex = selectionStart + i;
            abcNoteElement.accidental.endIndex = abcNoteElement.accidental.endIndex - 1;
            for (var z = 0; z < $scope.accidentalOptions.length; z++) {
              if (abcNoteElement.accidental.abc == $scope.accidentalOptions[z].abc) {
                $scope.accidentalOption = $scope.accidentalOptions[z];
              }
            }
          }
          for (var z = 0; z < $scope.noteOptions.length; z++) {
            if (abcChar == $scope.noteOptions[z].abc) {
              abcNoteElement.note.index = selectionStart + i;
              $scope.noteOption = $scope.noteOptions[z];
            }
          }
        } else if (abcChar == ',' || abcChar == '\'') {
          if (abcNoteElement.octave.startIndex == undefined) {
            abcNoteElement.octave.startIndex = selectionStart + i;
            abcNoteElement.octave.abc = abcChar;
          } else {
            abcNoteElement.octave.abc = abcNoteElement.octave.abc + abcChar;
          }
        } else {
          if (abcNoteElement.octave.startIndex != undefined && abcNoteElement.octave.endIndex == undefined) {
            abcNoteElement.octave.endIndex = selectionStart + i;
            abcNoteElement.octave.endIndex = abcNoteElement.octave.endIndex - 1;
            for (var z = 0; z < $scope.octaveOptions.length; z++) {
              if (abcNoteElement.octave.abc == $scope.octaveOptions[z].abc) {
                $scope.octaveOption = $scope.octaveOptions[z];
              }
            }
          }
          if (!isNaN(parseInt(abcChar)) || abcChar == '/' || abcChar == '>' || abcChar == '<') {
            if (abcNoteElement.noteLength.startIndex == undefined) {
              abcNoteElement.noteLength.startIndex = selectionStart + i;
              abcNoteElement.noteLength.abc = abcChar;
            } else {
              abcNoteElement.noteLength.abc = abcNoteElement.noteLength.abc + abcChar;
            }
          }
        }
      }
      if (abcNoteElement.octave.startIndex != undefined) {
        for (var z = 0; z < $scope.octaveOptions.length; z++) {
          if (abcNoteElement.octave.abc == $scope.octaveOptions[z].abc) {
            abcNoteElement.octave.endIndex = abcNoteElement.octave.startIndex + abcNoteElement.octave.abc.length - 1;
            $scope.octaveOption = $scope.octaveOptions[z];
          }
        }
      }
      if (abcNoteElement.noteLength.startIndex != undefined) {
        for (var z = 0; z < $scope.noteLengthOptions.length; z++) {
          if (abcNoteElement.noteLength.abc == $scope.noteLengthOptions[z].abc) {
            abcNoteElement.noteLength.endIndex = abcNoteElement.noteLength.startIndex + abcNoteElement.noteLength.abc.length - 1;
            $scope.noteLengthOption = $scope.noteLengthOptions[z];
          }
        }
      }
      $scope.abcSelection = abcSelection;
    };
    function initAbcNoteElement() {
      var abcNoteElement, chordSymbol, finger, graceNote, accidental, note, octave, noteLength;
      chordSymbol = {
        startSignIndex: undefined,
        abc: undefined,
        endSignIndex: undefined,
        add: function (abc, startSignIndex) {
          this.abc = abc;
          this.startSignIndex = startSignIndex;
          this.endSignIndex = this.startSignIndex + abc.length + 1;
          return this.endSignIndex - this.startSignIndex + 1;
        },
        delete: function () {
          var index = this.endSignIndex - this.startSignIndex + 1;
          this.abc = undefined;
          this.startSignIndex = undefined;
          this.endSignIndex = undefined;
          return index;
        },
        change: function (abc) {
          var index = abc.length - this.abc.length;
          this.abc = abc;
          this.endSignIndex = this.startSignIndex + abc.length + 1;
          return index;
        },
        moveRight: function (index) {
          if (this.startSignIndex != undefined) {
            this.startSignIndex = this.startSignIndex + index;
            this.endSignIndex = this.endSignIndex + index;
          }
        },
        moveLeft: function (index) {
          if (this.startIndex != undefined) {
            this.startSignIndex = this.startSignIndex - index;
            this.endSignIndex = this.endSignIndex - index;
          }
        }
      };
      finger = {
        startSignIndex: undefined,
        index: undefined,
        abc: undefined,
        endSignIndex: undefined,
        add: function (abc, startSignIndex) {
          this.abc = abc;
          this.startSignIndex = startSignIndex;
          this.index = this.startSignIndex + 1;
          this.endSignIndex = this.index + 1;
          return this.endSignIndex - this.startSignIndex + 1;
        },
        delete: function () {
          var index = this.endSignIndex - this.startSignIndex + 1;
          this.abc = undefined;
          this.startSignIndex = undefined;
          this.index = undefined;
          this.endSignIndex = undefined;
          return index;
        },
        change: function (abc) {
          this.abc = abc;
        },
        moveRight: function (index) {
          if (this.startSignIndex != undefined) {
            this.startSignIndex = this.startSignIndex + index;
            this.index = this.index + index;
            this.endSignIndex = this.endSignIndex + index;
          }
        },
        moveLeft: function (index) {
          if (this.startSignIndex != undefined) {
            this.startSignIndex = this.startSignIndex - index;
            this.index = this.index - index;
            this.endSignIndex = this.endSignIndex - index;
          }
        }
      };
      accidental = {
        startIndex: undefined,
        abc: undefined,
        endIndex: undefined,
        add: function (abc, startIndex) {
          this.abc = abc;
          this.startIndex = startIndex;
          this.endIndex = this.startIndex + abc.length - 1;
          return this.endIndex - this.startIndex + 1;
        },
        delete: function () {
          var index = this.endIndex - this.startIndex + 1;
          this.abc = undefined;
          this.startIndex = undefined;
          this.endIndex = undefined;
          return index;
        },
        change: function (abc) {
          var index = abc.length - this.abc.length;
          this.abc = abc;
          this.endIndex = this.startIndex + abc.length - 1;
          return index;
        },
        moveRight: function (index) {
          if (this.startIndex != undefined) {
            this.startIndex = this.startIndex + index;
            this.endIndex = this.endIndex + index;
          }
        },
        moveLeft: function (index) {
          if (this.startIndex != undefined) {
            this.startIndex = this.startIndex - index;
            this.endIndex = this.endIndex - index;
          }
        }
      };
      note = {
        index: undefined,
        abc: undefined,
        change: function (abc) {
          this.abc = abc;
        },
        moveRight: function (index) {
          if (this.index != undefined) {
            this.index = this.index + index;
          }
        },
        moveLeft: function (index) {
          if (this.index != undefined) {
            this.index = this.index - index;
          }
        }
      };
      octave = {
        startIndex: undefined,
        abc: undefined,
        endIndex: undefined,
        add: function (abc, startIndex) {
          this.abc = abc;
          this.startIndex = startIndex;
          this.endIndex = this.startIndex + abc.length - 1;
          return this.endIndex - this.startIndex + 1;
        },
        delete: function () {
          var index = this.endIndex - this.startIndex + 1;
          this.abc = undefined;
          this.startIndex = undefined;
          this.endIndex = undefined;
          return index;
        },
        change: function (abc) {
          var index = abc.length - this.abc.length;
          this.abc = abc;
          this.endIndex = this.startIndex + abc.length - 1;
          return index;
        },
        moveRight: function (index) {
          if (this.startIndex != undefined) {
            this.startIndex = this.startIndex + index;
            this.endIndex = this.endIndex + index;
          }
        },
        moveLeft: function (index) {
          if (this.startIndex != undefined) {
            this.startIndex = this.startIndex - index;
            this.endIndex = this.endIndex - index;
          }
        }
      };
      noteLength = {
        startIndex: undefined,
        abc: undefined,
        endIndex: undefined,
        add: function (abc, startIndex) {
          this.abc = abc;
          this.startIndex = startIndex;
          this.endIndex = this.startIndex + abc.length - 1;
          return this.endIndex - this.startIndex + 1;
        },
        delete: function () {
          var index = this.endIndex - this.startIndex + 1;
          this.abc = undefined;
          this.startIndex = undefined;
          this.endIndex = undefined;
          return index;
        },
        change: function (abc) {
          var index = abc.length - this.abc.length;
          this.abc = abc;
          this.endIndex = this.startIndex + abc.length - 1;
          return index;
        },
        moveRight: function (index) {
          if (this.startIndex != undefined) {
            this.startIndex = this.startIndex + index;
            this.endIndex = this.endIndex + index;
          }
        },
        moveLeft: function (index) {
          if (this.startIndex != undefined) {
            this.startIndex = this.startIndex - index;
            this.endIndex = this.endIndex - index;
          }
        }
      };
      abcNoteElement = {
        chordSymbol: chordSymbol,
        finger: finger,
        accidental: accidental,
        note: note,
        octave: octave,
        noteLength: noteLength,
        addChord: function (abc) {
          var startSignIndex, index;
          if (this.finger.startSignIndex != undefined) {
            startSignIndex = this.finger.startSignIndex;
          } else if (this.accidental.startIndex != undefined) {
            startSignIndex = this.accidental.startIndex;
          } else if (this.note.index != undefined) {
            startSignIndex = this.note.index;
          } else {
          }
          index = this.chordSymbol.add(abc, startSignIndex);
          this.finger.moveRight(index);
          this.accidental.moveRight(index);
          this.note.moveRight(index);
          this.octave.moveRight(index);
          this.noteLength.moveRight(index);
        },
        deleteChord: function () {
          var index;
          index = this.chordSymbol.delete();
          this.finger.moveLeft(index);
          this.accidental.moveLeft(index);
          this.note.moveLeft(index);
          this.octave.moveLeft(index);
          this.noteLength.moveLeft(index);
        },
        changeChord: function (abc) {
          var index;
          index = this.chordSymbol.change(abc);
          if (index > 0) {
            this.finger.moveRight(index);
            this.accidental.moveRight(index);
            this.note.moveRight(index);
            this.octave.moveRight(index);
            this.noteLength.moveRight(index);
          } else if (index < 0) {
            index = index * -1;
            this.finger.moveLeft(index);
            this.accidental.moveLeft(index);
            this.note.moveLeft(index);
            this.octave.moveLeft(index);
            this.noteLength.moveLeft(index);
          }
        },
        addFinger: function (abc) {
          var startSignIndex, index;
          if (this.accidental.startIndex != undefined) {
            startSignIndex = this.accidental.startIndex;
          } else if (this.note.index != undefined) {
            startSignIndex = this.note.index;
          } else {
          }
          index = this.finger.add(abc, startSignIndex);
          this.accidental.moveRight(index);
          this.note.moveRight(index);
          this.octave.moveRight(index);
          this.noteLength.moveRight(index);
        },
        deleteFinger: function () {
          var index;
          index = this.finger.delete();
          this.accidental.moveLeft(index);
          this.note.moveLeft(index);
          this.octave.moveLeft(index);
          this.noteLength.moveLeft(index);
        },
        changeFinger: function (abc) {
          this.finger.change(abc);
        },
        addAccidental: function (abc) {
          var startIndex, index;
          if (this.note.index != undefined) {
            startIndex = this.note.index;
          } else {
          }
          index = this.accidental.add(abc, startIndex);
          this.note.moveRight(index);
          this.octave.moveRight(index);
          this.noteLength.moveRight(index);
        },
        deleteAccidental: function () {
          var index;
          index = this.accidental.delete();
          this.note.moveLeft(index);
          this.octave.moveLeft(index);
          this.noteLength.moveLeft(index);
        },
        changeAccidental: function (abc) {
          var index;
          index = this.accidental.change(abc);
          if (index > 0) {
            this.note.moveRight(index);
            this.octave.moveRight(index);
            this.noteLength.moveRight(index);
          } else if (index < 0) {
            index = index * -1;
            this.note.moveLeft(index);
            this.octave.moveLeft(index);
            this.noteLength.moveLeft(index);
          }
        },
        changeNote: function (abc) {
          this.note.change(abc);
        },
        addOctave: function (abc) {
          var startIndex, index;
          if (this.note.index != undefined) {
            startIndex = this.note.index + 1;
          } else {
          }
          index = this.octave.add(abc, startIndex);
          this.noteLength.moveRight(index);
        },
        deleteOctave: function () {
          var index;
          index = this.octave.delete();
          this.noteLength.moveLeft(index);
        },
        changeOctave: function (abc) {
          var index;
          index = this.octave.change(abc);
          if (index > 0) {
            this.noteLength.moveRight(index);
          } else if (index < 0) {
            index = index * -1;
            this.noteLength.moveLeft(index);
          }
        },
        addNoteLength: function (abc) {
          var startIndex, index;
          if (this.octave.index != undefined) {
            startIndex = this.octave.index + 1;
          } else if (this.note.index != undefined) {
            startIndex = this.note.index + 1;
          } else {
          }
          index = this.noteLength.add(abc, startIndex);
        },
        deleteNoteLength: function () {
          var index;
          index = this.noteLength.delete();
        },
        changeNoteLength: function (abc) {
          var index;
          index = this.noteLength.change(abc);
        }
      };
      return abcNoteElement;
    }
    function extractAbcElement() {
    }
    $scope.changeChord = function (chordOption) {
      $scope.$emit('chordChange', chordOption);
    };
    $scope.changeFinger = function (fingerOption) {
      $scope.$emit('fingerChange', fingerOption);
    };
    $scope.changeGraceNote = function (graceNoteOption) {
      $scope.$emit('graceNoteChange', graceNoteOption);
    };
    $scope.changeAccidental = function (accidentalOption) {
      $scope.$emit('accidentalChange', accidentalOption);
    };
    $scope.changeNote = function (noteOption) {
      $scope.$emit('noteChange', noteOption);
    };
    $scope.changeOctave = function (octaveOption) {
      $scope.$emit('octaveChange', octaveOption);
    };
    $scope.changeNoteLength = function (noteLengthOption) {
      $scope.$emit('noteLengthChange', noteLengthOption);
    };
    function setChordOptions() {
      var chordOption, chordOptions;
      chordOptions = [];
      chordOption = {};
      chordOption.abc = 'bm';
      chordOption.sort = 'bm';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'B';
      chordOption.sort = 'B';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'a#m';
      chordOption.sort = 'a#m';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'A#';
      chordOption.sort = 'A#';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'am';
      chordOption.sort = 'am';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'A';
      chordOption.sort = 'A';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'g#m';
      chordOption.sort = 'g#m';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'G#';
      chordOption.sort = 'G#';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'gm';
      chordOption.sort = 'gm';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'G';
      chordOption.sort = 'G';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'f#m';
      chordOption.sort = 'f#m';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'F#';
      chordOption.sort = 'F#';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'fm';
      chordOption.sort = 'fm';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'F';
      chordOption.sort = 'F';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'em';
      chordOption.sort = 'em';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'E';
      chordOption.sort = 'E';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'd#m';
      chordOption.sort = 'd#m';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'D#';
      chordOption.sort = 'D#';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'dm';
      chordOption.sort = 'dm';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'D';
      chordOption.sort = 'D';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'c#m';
      chordOption.sort = 'c#m';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'C#';
      chordOption.sort = 'C#';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'cm';
      chordOption.sort = 'cm';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = 'C';
      chordOption.sort = 'C';
      chordOptions.push(chordOption);
      chordOption = {};
      chordOption.abc = '--';
      chordOption.sort = '--';
      chordOptions.push(chordOption);
      $scope.chordOption = chordOption;
      $scope.chordOptions = chordOptions;
    }
    function setFingerOptions() {
      var fingerOption, fingerOptions;
      fingerOptions = [];
      fingerOption = {};
      fingerOption.abc = '1';
      fingerOptions.push(fingerOption);
      fingerOption = {};
      fingerOption.abc = '2';
      fingerOptions.push(fingerOption);
      fingerOption = {};
      fingerOption.abc = '3';
      fingerOptions.push(fingerOption);
      fingerOption = {};
      fingerOption.abc = '4';
      fingerOptions.push(fingerOption);
      fingerOption = {};
      fingerOption.abc = '5';
      fingerOptions.push(fingerOption);
      fingerOption = {};
      fingerOption.abc = '--';
      fingerOptions.push(fingerOption);
      $scope.fingerOption = fingerOption;
      $scope.fingerOptions = fingerOptions;
    }
    function setAccidentalOptions() {
      var accidentalOption, accidentalOptions;
      accidentalOptions = [];
      accidentalOption = {};
      accidentalOption.abc = '^^';
      accidentalOption.sort = '^^';
      accidentalOptions.push(accidentalOption);
      accidentalOption = {};
      accidentalOption.abc = '^';
      accidentalOption.sort = '^';
      accidentalOptions.push(accidentalOption);
      accidentalOption = {};
      accidentalOption.abc = '=';
      accidentalOption.sort = '=';
      accidentalOptions.push(accidentalOption);
      accidentalOption = {};
      accidentalOption.abc = '_';
      accidentalOption.sort = '_';
      accidentalOptions.push(accidentalOption);
      accidentalOption = {};
      accidentalOption.abc = '__';
      accidentalOption.sort = '__';
      accidentalOptions.push(accidentalOption);
      accidentalOption = {};
      accidentalOption.abc = '--';
      accidentalOption.sort = '--';
      accidentalOptions.push(accidentalOption);
      $scope.accidentalOption = accidentalOption;
      $scope.accidentalOptions = accidentalOptions;
    }
    function setNoteOptions() {
      var noteOption, noteOptions;
      noteOptions = [];
      noteOption = {};
      noteOption.abc = 'C';
      noteOption.frequency = '261.626';
      noteOptions.push(noteOption);
      noteOption = {};
      noteOption.abc = 'D';
      noteOption.frequency = '293.665';
      noteOptions.push(noteOption);
      noteOption = {};
      noteOption.abc = 'E';
      noteOption.frequency = '329.628';
      noteOptions.push(noteOption);
      noteOption = {};
      noteOption.abc = 'F';
      noteOption.frequency = '349.228';
      noteOptions.push(noteOption);
      noteOption = {};
      noteOption.abc = 'G';
      noteOption.frequency = '391.995';
      noteOptions.push(noteOption);
      noteOption = {};
      noteOption.abc = 'A';
      noteOption.frequency = '440.000';
      noteOptions.push(noteOption);
      noteOption = {};
      noteOption.abc = 'B';
      noteOption.frequency = '493.883';
      noteOptions.push(noteOption);
      noteOption = {};
      noteOption.abc = 'c';
      noteOption.frequency = '523.251';
      noteOptions.push(noteOption);
      noteOption = {};
      noteOption.abc = 'd';
      noteOption.frequency = '587.33';
      noteOptions.push(noteOption);
      noteOption = {};
      noteOption.abc = 'e';
      noteOption.frequency = '659.255';
      noteOptions.push(noteOption);
      noteOption = {};
      noteOption.abc = 'f';
      noteOption.frequency = '698.456';
      noteOptions.push(noteOption);
      noteOption = {};
      noteOption.abc = 'g';
      noteOption.frequency = '783.991';
      noteOptions.push(noteOption);
      noteOption = {};
      noteOption.abc = 'a';
      noteOption.frequency = '880.000';
      noteOptions.push(noteOption);
      noteOption = {};
      noteOption.abc = 'b';
      noteOption.frequency = '987.767';
      noteOptions.push(noteOption);
      noteOption = {};
      noteOption.abc = '--';
      noteOption.frequency = '000.000';
      noteOptions.push(noteOption);
      $scope.noteOption = noteOption;
      $scope.noteOptions = noteOptions;
    }
    function setOctaveOptions() {
      var octaveOption, octaveOptions;
      octaveOptions = [];
      octaveOption = {};
      octaveOption.abc = '\'\'';
      octaveOption.sort = '\'\'';
      octaveOptions.push(octaveOption);
      octaveOption = {};
      octaveOption.abc = '\'';
      octaveOption.sort = '\'';
      octaveOptions.push(octaveOption);
      octaveOption = {};
      octaveOption.abc = ',';
      octaveOption.sort = ',';
      octaveOptions.push(octaveOption);
      octaveOption = {};
      octaveOption.abc = ',,';
      octaveOption.sort = ',,';
      octaveOptions.push(octaveOption);
      octaveOption = {};
      octaveOption.abc = '--';
      octaveOption.sort = '--';
      octaveOptions.push(octaveOption);
      $scope.octaveOption = octaveOption;
      $scope.octaveOptions = octaveOptions;
    }
    function setNoteLengthOptions() {
      var noteLengthOption, noteLengthOptions;
      noteLengthOptions = [];
      noteLengthOption = {};
      noteLengthOption.abc = '2';
      noteLengthOptions.push(noteLengthOption);
      noteLengthOption = {};
      noteLengthOption.abc = '/2';
      noteLengthOptions.push(noteLengthOption);
      noteLengthOption = {};
      noteLengthOption.abc = '/';
      noteLengthOptions.push(noteLengthOption);
      noteLengthOption = {};
      noteLengthOption.abc = '<';
      noteLengthOptions.push(noteLengthOption);
      noteLengthOption = {};
      noteLengthOption.abc = '>';
      noteLengthOptions.push(noteLengthOption);
      noteLengthOption = {};
      noteLengthOption.abc = '3/2';
      noteLengthOptions.push(noteLengthOption);
      noteLengthOption = {};
      noteLengthOption.abc = '3';
      noteLengthOptions.push(noteLengthOption);
      noteLengthOption = {};
      noteLengthOption.abc = '4';
      noteLengthOptions.push(noteLengthOption);
      noteLengthOption = {};
      noteLengthOption.abc = '/4';
      noteLengthOptions.push(noteLengthOption);
      noteLengthOption = {};
      noteLengthOption.abc = '//';
      noteLengthOptions.push(noteLengthOption);
      noteLengthOption = {};
      noteLengthOption.abc = '5';
      noteLengthOptions.push(noteLengthOption);
      noteLengthOption = {};
      noteLengthOption.abc = '6';
      noteLengthOptions.push(noteLengthOption);
      noteLengthOption = {};
      noteLengthOption.abc = '7';
      noteLengthOptions.push(noteLengthOption);
      noteLengthOption = {};
      noteLengthOption.abc = '8';
      noteLengthOptions.push(noteLengthOption);
      noteLengthOption = {};
      noteLengthOption.abc = '/8';
      noteLengthOptions.push(noteLengthOption);
      noteLengthOption = {};
      noteLengthOption.abc = '///';
      noteLengthOptions.push(noteLengthOption);
      noteLengthOption = {};
      noteLengthOption.abc = '--';
      noteLengthOptions.push(noteLengthOption);
      $scope.noteLengthOption = noteLengthOption;
      $scope.noteLengthOptions = noteLengthOptions;
    }
    function setOptions() {
      setChordOptions();
      setFingerOptions();
      setAccidentalOptions();
      setNoteOptions();
      setOctaveOptions();
      setNoteLengthOptions();
    }
    function deselectOptions() {
      deselectChordOptions();
      deselectFingerOptions();
      deselectAccidentalOptions();
      deselectNoteOptions();
      deselectOctaveOptions();
      deselectNoteLengthOptions();
    }
    function deselectChordOptions() {
      for (var i = 0; i < $scope.chordOptions.length; i++) {
        if ($scope.chordOptions[i].abc == '--') {
          $scope.chordOption = $scope.chordOptions[i];
        }
      }
    }
    function deselectFingerOptions() {
      for (var i = 0; i < $scope.fingerOptions.length; i++) {
        if ($scope.fingerOptions[i].abc == '--') {
          $scope.fingerOption = $scope.fingerOptions[i];
        }
      }
    }
    function deselectAccidentalOptions() {
      for (var i = 0; i < $scope.accidentalOptions.length; i++) {
        if ($scope.accidentalOptions[i].abc == '--') {
          $scope.accidentalOption = $scope.accidentalOptions[i];
        }
      }
    }
    function deselectNoteOptions() {
      for (var i = 0; i < $scope.noteOptions.length; i++) {
        if ($scope.noteOptions[i].abc == '--') {
          $scope.noteOption = $scope.noteOptions[i];
        }
      }
    }
    $scope.selectNoteOptions = function (abc) {
      for (var i = 0; i < $scope.noteOptions.length; i++) {
        if ($scope.noteOptions[i].abc == abc) {
          $scope.noteOption = $scope.noteOptions[i];
        }
      }
    };
    function deselectOctaveOptions() {
      for (var i = 0; i < $scope.octaveOptions.length; i++) {
        if ($scope.octaveOptions[i].abc == '--') {
          $scope.octaveOption = $scope.octaveOptions[i];
        }
      }
    }
    function deselectNoteLengthOptions() {
      for (var i = 0; i < $scope.noteLengthOptions.length; i++) {
        if ($scope.noteLengthOptions[i].abc == '--') {
          $scope.noteLengthOption = $scope.noteLengthOptions[i];
        }
      }
    }
  }
]);
'use strict';
angular.module('eTuneBookApp').controller('tuneinfoCtrl', [
  '$scope',
  '$location',
  '$timeout',
  '$rootScope',
  '$state',
  '$stateParams',
  'eTuneBookService',
  function ($scope, $location, $timeout, $rootScope, $state, $stateParams, eTuneBookService) {
    $scope.intTuneId = $stateParams['intTuneId'];
    $scope.tune = eTuneBookService.getTune($scope.intTuneId);
    $scope.$parent.currentState = 'Info';
    $scope.tuneWebsites = $scope.tune.wsites;
    $scope.tuneWebsitesSelected = [];
    $scope.tuneWebsiteList = {
      data: 'tuneWebsites',
      selectedItems: $scope.tuneWebsitesSelected,
      multiSelect: false,
      enableCellSelection: true,
      enableRowSelection: true,
      enableCellEditOnFocus: true,
      columnDefs: [
        {
          field: '',
          cellTemplate: '<button class="btn btn-xs btn-default" ng-click="openWebsite(row)"><i class="glyphicon glyphicon-play" title="Jump to"></i></button>',
          enableCellEdit: false,
          width: '10%'
        },
        {
          field: 'url',
          displayName: 'URL',
          enableCellEdit: true,
          editableCellTemplate: '<input style="width: 100%" ng-model="COL_FIELD" ng-blur="storeTuneBook()"/>',
          width: '75%'
        },
        {
          field: '',
          cellTemplate: '<button class="btn btn-xs btn-default" ng-click="deleteWebsite(row)"><i class="glyphicon glyphicon-trash" title="Delete Website"></i></button>',
          enableCellEdit: false,
          width: '10%'
        }
      ]
    };
    $scope.deleteWebsite = function (row) {
      eTuneBookService.deleteWebsite($scope.intTuneId, row.entity.url);
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.storeTuneBook = function () {
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.newWebsite = function () {
      eTuneBookService.addWebsite($scope.intTuneId, '');
    };
    $scope.openWebsite = function (row) {
      window.open(row.entity.url);
    };
  }
]);
'use strict';
angular.module('eTuneBookApp').controller('tunepracticeCtrl', [
  '$scope',
  '$location',
  '$timeout',
  '$rootScope',
  '$state',
  '$stateParams',
  'eTuneBookService',
  function ($scope, $location, $timeout, $rootScope, $state, $stateParams, eTuneBookService) {
    $scope.intTuneId = $stateParams['intTuneId'];
    $scope.tune = eTuneBookService.getTune($scope.intTuneId);
    $scope.tunePlayDates = $scope.tune.playDates;
    $scope.tunePlayDatesSelected = [];
    $scope.$parent.currentState = 'Practice';
    $scope.tunePlayDateList = {
      data: 'tunePlayDates',
      selectedItems: $scope.tunePlayDatesSelected,
      multiSelect: false,
      columnDefs: [
        {
          field: 'playDate',
          displayName: 'Played',
          cellFilter: 'date: \'yyyy-MM-dd HH:mm\'',
          width: '50%'
        },
        {
          field: 'playDate',
          displayName: '',
          cellFilter: 'fromNow',
          width: '50%'
        }
      ]
    };
    setSkillTypes();
    function setSkillTypes() {
      $scope.skillTypes = eTuneBookService.getSkillTypes();
      for (var i = 0; i < $scope.skillTypes.length; i++) {
        if ($scope.skillTypes[i].description == $scope.tune.skill) {
          $scope.skillType = $scope.skillTypes[i];
        }
      }
    }
    $scope.setSkill = function (skillType) {
      $scope.tune.skill = skillType.description;
      eTuneBookService.storeTuneBookAbc();
    };
  }
]);
'use strict';
angular.module('eTuneBookApp').controller('tunesCtrl', [
  '$scope',
  '$location',
  '$timeout',
  '$rootScope',
  '$state',
  'eTuneBookService',
  function ($scope, $location, $timeout, $rootScope, $state, eTuneBookService) {
    $scope.playDateFilter = 'All Tunes';
  }
]);
'use strict';
angular.module('eTuneBookApp').controller('tunelistCtrl', [
  '$scope',
  '$window',
  '$location',
  '$timeout',
  '$rootScope',
  '$state',
  '$stateParams',
  'eTuneBookService',
  function tunelistCtrl($scope, $window, $location, $timeout, $rootScope, $state, $stateParams, eTuneBookService) {
    var filterOptions, columnDefs, rowTempl;
    filterOptions = {};
    filterOptions.key = $stateParams['key'];
    filterOptions.type = $stateParams['type'];
    filterOptions.color = $stateParams['color'];
    filterOptions.skill = $stateParams['skill'];
    filterOptions.event = $stateParams['evt'];
    filterOptions.band = $stateParams['band'];
    filterOptions.plmin = $stateParams['plmin'];
    filterOptions.plmax = $stateParams['plmax'];
    filterOptions.freqcomp = $stateParams['freqcomp'];
    filterOptions.freq = $stateParams['freq'];
    filterOptions.updmin = $stateParams['updmin'];
    filterOptions.updmax = $stateParams['updmax'];
    $scope.tunes = eTuneBookService.getTunesFiltered(filterOptions);
    $scope.tunesSelected = [];
    rowTempl = '<div ng-style="{ \'cursor\': row.cursor }" ' + 'ng-repeat="col in renderedColumns" ' + 'style="background-color:{{row.entity.color}}" ' + 'class="ngCell {{col.cellClass}} {{col.colIndex()}}" ng-cell></div>';
    if ($window.mobilecheck()) {
      columnDefs = [
        {
          field: 'title',
          displayName: 'Tune',
          cellFilter: 'eliminateThe',
          width: '60%',
          cellTemplate: '<a href="#/tunes/{{row.entity.intTuneId}}" title="Show The Tune" >{{row.entity.title}}</a>'
        },
        {
          field: 'type',
          displayName: 'Type',
          width: '10%'
        },
        {
          field: 'lastPlayed',
          displayName: 'Played',
          cellFilter: 'fromNow',
          width: '30%'
        }
      ];
    } else {
      columnDefs = [
        {
          field: 'title',
          displayName: 'Tune',
          cellFilter: 'eliminateThe',
          width: '50%',
          cellTemplate: '<a href="#/tunes/{{row.entity.intTuneId}}" title="Show The Tune" >{{row.entity.title}}</a>'
        },
        {
          field: 'type',
          displayName: 'Type',
          width: '10%'
        },
        {
          field: 'key',
          displayName: 'Key',
          width: '5%'
        },
        {
          field: 'lastPlayed',
          displayName: 'Played',
          cellFilter: 'fromNow',
          width: '10%'
        },
        {
          field: 'frequencyPlayed',
          displayName: 'Frequency',
          width: '7%'
        },
        {
          field: 'skill',
          displayName: 'Skill',
          width: '8%'
        },
        {
          field: 'lastModified',
          displayName: 'Modified',
          cellFilter: 'fromNow',
          width: '10%'
        }
      ];
    }
    $scope.tuneList = {
      data: 'tunes',
      selectedItems: $scope.tunesSelected,
      multiSelect: false,
      rowTemplate: rowTempl,
      columnDefs: columnDefs
    };
    $scope.tuneList.filterOptions = {
      filterText: '',
      useExternalFilter: false
    };
    $scope.newTune = function () {
      var newTuneSet = eTuneBookService.initializeTuneAndTuneSet();
      $state.transitionTo('tuneabc', { intTuneId: newTuneSet.tuneSetPositions[0].tune.intTuneId });
    };
    $scope.$watch('search', function (searchText) {
      if (searchText) {
        var searchQuery = 'title:' + searchText + ';';
        $scope.tuneList.filterOptions.filterText = searchQuery;
      }
    });
    if ($rootScope.$previousState != undefined && $rootScope.$previousState.name == 'tune') {
      $timeout(function () {
        var previousTune = eTuneBookService.getTune($rootScope.$previousStateParams.intTuneId);
        var grid = $scope.tuneList.ngGrid;
        var rowIndex = grid.data.indexOf(previousTune);
        grid.$viewport.scrollTop(grid.rowMap[rowIndex] * grid.config.rowHeight);
      }, 0, false);
    }
  }
]);
'use strict';
angular.module('eTuneBookApp').controller('filterCtrl', [
  '$scope',
  '$location',
  '$timeout',
  '$rootScope',
  '$state',
  '$stateParams',
  'eTuneBookService',
  function ($scope, $location, $timeout, $rootScope, $state, $stateParams, eTuneBookService) {
    $scope.tuneBook = eTuneBookService.getCurrentTuneBook();
    setFilterOptions();
    var type = $stateParams['type'];
    if (type == '' || type == null) {
      type = 'All Types';
    }
    setSelectedTuneSetTypeFilter(type);
    var key = $stateParams['key'];
    if (key == '' || key == null) {
      key = 'All Keys';
    }
    setSelectedTuneSetKeyFilter(key);
    var color = $stateParams['color'];
    if (color == '' || color == null) {
      color = 'All Colors';
    }
    setSelectedTuneSetColorFilter(color);
    var skill = $stateParams['skill'];
    if (skill == '' || skill == null) {
      skill = 'All Skills';
    }
    setSelectedTuneSetSkillFilter(skill);
    var event = $stateParams['evt'];
    if (event == '' || event == null) {
      event = 'All Events';
    }
    setSelectedTuneSetEventFilter(event);
    var band = $stateParams['band'];
    if (band == '' || band == null) {
      band = 'All Bands';
    }
    setSelectedTuneSetBandFilter(band);
    $scope.tuneSetPlayRangeFilter = {
      startDate: moment('05.10.2012', 'DD.MM.YYYY'),
      endDate: moment()
    };
    var playMin = $stateParams['plmin'];
    if (playMin != null && playMin != '') {
      $scope.tuneSetPlayRangeFilter.startDate = moment(playMin, 'DD.MM.YYYY');
    }
    var playMax = $stateParams['plmax'];
    if (playMax != null && playMax != '') {
      $scope.tuneSetPlayRangeFilter.endDate = moment(playMax, 'DD.MM.YYYY');
    }
    $scope.tuneSetUpdateRangeFilter = {
      startDate: moment('05.10.2012', 'DD.MM.YYYY'),
      endDate: moment()
    };
    var updateMin = $stateParams['updmin'];
    if (updateMin != null && updateMin != '') {
      $scope.tuneSetUpdateRangeFilter.startDate = moment(updateMin, 'DD.MM.YYYY');
    }
    var updateMax = $stateParams['plmax'];
    if (updateMax != null && updateMax != '') {
      $scope.tuneSetUpdateRangeFilter.endDate = moment(updateMax, 'DD.MM.YYYY');
    }
    $scope.ranges = {
      'Today': [
        moment().startOf('day'),
        moment().add('days', 1)
      ],
      'Yesterday': [
        moment().subtract('days', 1),
        moment().subtract('days', 1)
      ],
      'Last 7 Days': [
        moment().subtract('days', 7),
        moment()
      ],
      'Last 30 Days': [
        moment().subtract('days', 30),
        moment()
      ],
      'This Month': [
        moment().startOf('month'),
        moment()
      ],
      'Last Month': [
        moment().subtract('month', 1).startOf('month'),
        moment().subtract('month', 1).endOf('month')
      ],
      'Maximum Range': [
        moment('05.10.2012', 'DD.MM.YYYY'),
        moment()
      ]
    };
    var freqComp = $stateParams['freqcomp'];
    if (freqComp == null) {
      freqComp = '';
    }
    var freq = $stateParams['freq'];
    if (freq == null) {
      freq = '';
    }
    $scope.freqencyComparator = freqComp;
    $scope.tuneSetFrequencyForFilter = freq;
    $scope.editSetFilter = function () {
      angular.element('#SetFilter').modal('show');
    };
    function setSelectedTuneSetTypeFilter(type) {
      for (var i = 0; i < $scope.tuneSetTypesForFilter.length; i++) {
        if ($scope.tuneSetTypesForFilter[i].type == type) {
          $scope.tuneSetTypeForFilter = $scope.tuneSetTypesForFilter[i];
        }
      }
    }
    function setSelectedTuneSetKeyFilter(key) {
      for (var i = 0; i < $scope.tuneSetKeysForFilter.length; i++) {
        if ($scope.tuneSetKeysForFilter[i].key == key) {
          $scope.tuneSetKeyForFilter = $scope.tuneSetKeysForFilter[i];
        }
      }
    }
    function setSelectedTuneSetEventFilter(event) {
      for (var i = 0; i < $scope.tuneSetEventsForFilter.length; i++) {
        if ($scope.tuneSetEventsForFilter[i].event == event) {
          $scope.tuneSetEventForFilter = $scope.tuneSetEventsForFilter[i];
        }
      }
    }
    function setSelectedTuneSetBandFilter(band) {
      for (var i = 0; i < $scope.tuneSetBandsForFilter.length; i++) {
        if ($scope.tuneSetBandsForFilter[i].band == band) {
          $scope.tuneSetBandForFilter = $scope.tuneSetBandsForFilter[i];
        }
      }
    }
    function setSelectedTuneSetColorFilter(color) {
      for (var i = 0; i < $scope.tuneSetColorsForFilter.length; i++) {
        if ($scope.tuneSetColorsForFilter[i].color == color) {
          $scope.tuneSetColorForFilter = $scope.tuneSetColorsForFilter[i];
        }
      }
    }
    function setSelectedTuneSetSkillFilter(skill) {
      for (var i = 0; i < $scope.skillTypes.length; i++) {
        if ($scope.skillTypes[i].description == skill) {
          $scope.skillType = $scope.skillTypes[i];
        }
      }
    }
    function setTuneSetTypesForFilter() {
      var tuneSetTypeForFilter = {};
      var tuneSetTypesForFilter = [];
      var addToTypeFilter = true;
      if ($scope.hasOwnProperty('tuneBook')) {
        for (var i = 0; i < $scope.tuneBook.tuneSets.length; i++) {
          for (var c = 0; c < $scope.tuneBook.tuneSets[i].tuneSetPositions.length; c++) {
            addToTypeFilter = true;
            for (var z = 0; z < tuneSetTypesForFilter.length; z++) {
              if (tuneSetTypesForFilter[z].type == $scope.tuneBook.tuneSets[i].tuneSetPositions[c].tune.type) {
                addToTypeFilter = false;
              }
            }
            if (addToTypeFilter) {
              tuneSetTypeForFilter = {};
              tuneSetTypeForFilter.type = $scope.tuneBook.tuneSets[i].tuneSetPositions[c].tune.type;
              tuneSetTypesForFilter.push(tuneSetTypeForFilter);
            }
          }
        }
      }
      tuneSetTypeForFilter = {};
      tuneSetTypeForFilter.type = 'All Types';
      tuneSetTypesForFilter.unshift(tuneSetTypeForFilter);
      $scope.tuneSetTypesForFilter = tuneSetTypesForFilter;
    }
    function setTuneSetKeysForFilter() {
      var tuneSetKeyForFilter = {};
      var tuneSetKeysForFilter = [];
      var addToKeyFilter = true;
      if ($scope.hasOwnProperty('tuneBook')) {
        for (var i = 0; i < $scope.tuneBook.tuneSets.length; i++) {
          for (var c = 0; c < $scope.tuneBook.tuneSets[i].tuneSetPositions.length; c++) {
            addToKeyFilter = true;
            for (var z = 0; z < tuneSetKeysForFilter.length; z++) {
              if (tuneSetKeysForFilter[z].key == $scope.tuneBook.tuneSets[i].tuneSetPositions[c].tune.key) {
                addToKeyFilter = false;
              }
            }
            if (addToKeyFilter) {
              tuneSetKeyForFilter = {};
              tuneSetKeyForFilter.key = $scope.tuneBook.tuneSets[i].tuneSetPositions[c].tune.key;
              tuneSetKeyForFilter.sort = tuneSetKeyForFilter.key;
              tuneSetKeysForFilter.push(tuneSetKeyForFilter);
            }
          }
        }
      }
      tuneSetKeyForFilter = {};
      tuneSetKeyForFilter.key = 'All Keys';
      tuneSetKeyForFilter.sort = '';
      tuneSetKeysForFilter.unshift(tuneSetKeyForFilter);
      $scope.tuneSetKeysForFilter = tuneSetKeysForFilter;
    }
    function setTuneSetEventsForFilter() {
      var tuneSetEventForFilter = {};
      var tuneSetEventsForFilter = [];
      var addToEventFilter = true;
      var selectedTuneSetEventForFilter = new Array();
      if ($scope.hasOwnProperty('tuneBook')) {
        for (var i = 0; i < $scope.tuneBook.playlists.length; i++) {
          addToEventFilter = true;
          for (var z = 0; z < tuneSetEventsForFilter.length; z++) {
            if (tuneSetEventsForFilter[z].event == $scope.tuneBook.playlists[i].event) {
              addToEventFilter = false;
            }
          }
          if ($scope.tuneBook.playlists[i].event != 'undefined' && $scope.tuneBook.playlists[i].event != '' && addToEventFilter) {
            tuneSetEventForFilter = {};
            tuneSetEventForFilter.event = $scope.tuneBook.playlists[i].event;
            tuneSetEventsForFilter.push(tuneSetEventForFilter);
          }
        }
      }
      tuneSetEventForFilter = {};
      tuneSetEventForFilter.event = 'All Events';
      tuneSetEventsForFilter.unshift(tuneSetEventForFilter);
      $scope.tuneSetEventsForFilter = tuneSetEventsForFilter;
    }
    function setTuneSetBandsForFilter() {
      var tuneSetBandForFilter = {};
      var tuneSetBandsForFilter = [];
      var addToBandFilter = true;
      if ($scope.hasOwnProperty('tuneBook')) {
        for (var i = 0; i < $scope.tuneBook.playlists.length; i++) {
          addToBandFilter = true;
          for (var z = 0; z < tuneSetBandsForFilter.length; z++) {
            if (tuneSetBandsForFilter[z].band == $scope.tuneBook.playlists[i].band) {
              addToBandFilter = false;
            }
          }
          if ($scope.tuneBook.playlists[i].band != 'undefined' && $scope.tuneBook.playlists[i].band != '' && addToBandFilter) {
            tuneSetBandForFilter = {};
            tuneSetBandForFilter.band = $scope.tuneBook.playlists[i].band;
            tuneSetBandsForFilter.push(tuneSetBandForFilter);
          }
        }
      }
      tuneSetBandForFilter = {};
      tuneSetBandForFilter.band = 'All Bands';
      tuneSetBandsForFilter.unshift(tuneSetBandForFilter);
      $scope.tuneSetBandsForFilter = tuneSetBandsForFilter;
    }
    function setTuneSetColorsForFilter() {
      var tuneSetColorForFilter = {};
      var tuneSetColorsForFilter = [];
      var addToColorFilter = true;
      if ($scope.hasOwnProperty('tuneBook')) {
        for (var i = 0; i < $scope.tuneBook.tuneSets.length; i++) {
          for (var c = 0; c < $scope.tuneBook.tuneSets[i].tuneSetPositions.length; c++) {
            addToColorFilter = true;
            for (var z = 0; z < tuneSetColorsForFilter.length; z++) {
              if (tuneSetColorsForFilter[z].color == $scope.tuneBook.tuneSets[i].tuneSetPositions[c].tune.color) {
                addToColorFilter = false;
              }
            }
            if (addToColorFilter) {
              tuneSetColorForFilter = {};
              tuneSetColorForFilter.color = $scope.tuneBook.tuneSets[i].tuneSetPositions[c].tune.color;
              tuneSetColorForFilter.text = '     ';
              tuneSetColorsForFilter.push(tuneSetColorForFilter);
            }
          }
        }
      }
      tuneSetColorForFilter = {};
      tuneSetColorForFilter.color = 'All Colors';
      tuneSetColorForFilter.text = '     ';
      tuneSetColorsForFilter.unshift(tuneSetColorForFilter);
      $scope.tuneSetColorsForFilter = tuneSetColorsForFilter;
    }
    function setFilterOptions() {
      setTuneSetTypesForFilter();
      setTuneSetKeysForFilter();
      setTuneSetColorsForFilter();
      setSkillTypes();
      setTuneSetEventsForFilter();
      setTuneSetBandsForFilter();
    }
    function setSkillTypes() {
      var skillTypes = eTuneBookService.getSkillTypes();
      var skillType = {};
      skillType.skill = '';
      skillType.description = 'All Skills';
      skillTypes.unshift(skillType);
      $scope.skillTypes = skillTypes;
    }
    $scope.applySetFilter = function () {
      angular.element('#SetFilter').modal('hide');
      $timeout(function () {
        var key, type, color, skill, event, band, playmin, playmax, freqcomp, freq, updatemin, updatemax;
        type = $scope.tuneSetTypeForFilter.type;
        key = $scope.tuneSetKeyForFilter.key;
        color = $scope.tuneSetColorForFilter.color;
        skill = $scope.skillType.description;
        event = $scope.tuneSetEventForFilter.event;
        band = $scope.tuneSetBandForFilter.band;
        playmin = $scope.tuneSetPlayRangeFilter.startDate.format('DD.MM.YYYY');
        playmax = $scope.tuneSetPlayRangeFilter.endDate.format('DD.MM.YYYY');
        updatemin = $scope.tuneSetUpdateRangeFilter.startDate.format('DD.MM.YYYY');
        updatemax = $scope.tuneSetUpdateRangeFilter.endDate.format('DD.MM.YYYY');
        freqcomp = $scope.freqencyComparator;
        freq = $scope.tuneSetFrequencyForFilter;
        if ($scope.tuneSetTypeForFilter.type == 'All Types') {
          type = '';
        }
        if ($scope.tuneSetKeyForFilter.key == 'All Keys') {
          key = '';
        }
        if ($scope.tuneSetColorForFilter.color == 'All Colors') {
          color = '';
        }
        if ($scope.skillType.description == 'All Skills') {
          skill = '';
        }
        if ($scope.tuneSetEventForFilter.event == 'All Events') {
          event = '';
        }
        if ($scope.tuneSetBandForFilter.band == 'All Bands') {
          band = '';
        }
        if (playmin == '05.10.2012') {
          playmin = '';
          playmax = '';
        }
        if (updatemin == '05.10.2012') {
          updatemin = '';
          updatemax = '';
        }
        $state.transitionTo($state.current.name, {
          key: key,
          type: type,
          color: color,
          skill: skill,
          evt: event,
          band: band,
          plmin: playmin,
          plmax: playmax,
          freqcomp: freqcomp,
          freq: freq,
          updmin: updatemin,
          updmax: updatemax
        });
      }, 1000);
    };
  }
]);
'use strict';
angular.module('eTuneBookApp').controller('infoCtrl', [
  '$scope',
  '$location',
  '$timeout',
  '$rootScope',
  '$state',
  'eTuneBookService',
  function infoCtrl($scope, $location, $timeout, $rootScope, $state, eTuneBookService) {
  }
]);
'use strict';
angular.module('eTuneBookApp').controller('tunevideosCtrl', [
  '$scope',
  '$location',
  '$timeout',
  '$rootScope',
  '$state',
  '$stateParams',
  'eTuneBookService',
  function ($scope, $location, $timeout, $rootScope, $state, $stateParams, eTuneBookService) {
    $scope.intTuneId = $stateParams['intTuneId'];
    $scope.tune = eTuneBookService.getTune($scope.intTuneId);
    $scope.$parent.currentState = 'Videos';
    $scope.tuneVideos = $scope.tune.videos;
    $scope.tuneVideosSelected = [];
    $scope.tuneVideoList = {
      data: 'tuneVideos',
      selectedItems: $scope.tuneVideosSelected,
      multiSelect: false,
      afterSelectionChange: function () {
        if ($scope.tuneVideosSelected.length > 0) {
          $state.transitionTo('tunevideo', {
            intTuneId: $scope.intTuneId,
            source: $scope.tuneVideosSelected[0].source,
            code: $scope.tuneVideosSelected[0].code
          });
        }
      },
      enableCellSelection: true,
      enableRowSelection: true,
      enableCellEditOnFocus: true,
      columnDefs: [
        {
          field: 'code',
          displayName: 'Code',
          enableCellEdit: true,
          editableCellTemplate: '<input ng-model="COL_FIELD" ng-blur="storeTuneBook()"/>',
          width: '25%'
        },
        {
          field: 'description',
          displayName: 'Description',
          enableCellEdit: true,
          editableCellTemplate: '<input ng-model="COL_FIELD" ng-blur="storeTuneBook()"/>',
          width: '60%'
        },
        {
          field: '',
          cellTemplate: '<button class="btn btn-xs btn-default" ng-click="deleteVideo(row)"><i class="glyphicon glyphicon-trash" title="Delete Video"></i></button>',
          enableCellEdit: false,
          width: '10%'
        }
      ]
    };
    $scope.deleteVideo = function (row) {
      eTuneBookService.deleteVideo($scope.intTuneId, row.entity.source, row.entity.code);
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.storeTuneBook = function () {
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.newVideo = function () {
      eTuneBookService.addVideo($scope.intTuneId, 'ytube', '', '');
    };
  }
]);
'use strict';
angular.module('eTuneBookApp').controller('tunevideoCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  'eTuneBookService',
  function ($scope, $state, $stateParams, eTuneBookService) {
    $scope.intTuneId = $stateParams['intTuneId'];
    $scope.code = $stateParams['code'];
    $scope.source = $stateParams['source'];
    $scope.tuneVideoCode = angular.copy($scope.code);
    $scope.tuneVideoDescription = '';
    $scope.video = {};
    $scope.videoUrl = '';
    if ($scope.code != '') {
      $scope.video = eTuneBookService.getVideo($scope.intTuneId, $scope.source, $scope.code);
      $scope.tuneVideoDescription = angular.copy($scope.video.description);
      $scope.videoUrl = '//www.youtube.com/embed/' + $scope.tuneVideoCode;
    }
    $scope.save = function () {
      if ($scope.tuneVideoCode == $scope.code) {
        $scope.video.description = angular.copy($scope.tuneVideoDescription);
      } else {
        $scope.video = eTuneBookService.addVideo($scope.intTuneId, $scope.source, $scope.tuneVideoCode, $scope.tuneVideoDescription);
        $state.transitionTo('tunevideo', {
          intTuneId: $scope.intTuneId,
          source: $scope.source,
          code: $scope.tuneVideoCode
        });
        $scope.$parent.tuneVideosSelected = [];
        $scope.$parent.tuneVideosSelected.push($scope.video);
      }
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.delete = function () {
      eTuneBookService.deleteVideo($scope.intTuneId, $scope.source, $scope.tuneVideoCode);
      $state.transitionTo('tunevideos', { intTuneId: $scope.intTuneId });
      eTuneBookService.storeTuneBookAbc();
    };
    $scope.load = function () {
      $scope.videoUrl = '//www.youtube.com/embed/' + $scope.tuneVideoCode;
    };
  }
]);
'use strict';
angular.module('eTuneBookApp').factory('eTuneBookService', function () {
  var eTBkModule = function (eTBk) {
      var eTBK_STORAGE_ID_TUNEBOOK = 'etbk-tuneBook';
      var eTBK_STORAGE_ID_SETTINGS = 'etbk-settings';
      var eTBK_VERSION = '1.2.1';
      var ABC_VERSION = '2.1';
      var eTBK_DEFAULT_COLOR = '#F5F5F5';
      var eTBK_DEFAULT_MODIFICATIONDATE_STRING = '1966-04-05T22:00';
      var eTBK_PATTERN_FINGER = /!\d!/g;
      var eTBk_EXAMPLE_FILENAME = 'Irish Tunes - Martin Fleischmann.abc';
      var eTBk_EXAMPLE_FILENAME_WITHOUTABC = 'Irish Tunes - Martin Fleischmann';
      var eTBk_EXAMPLE_VERSION = '2014-03-02';
      var currentTuneBook;
      var TuneBook = function (abc) {
        var This = this;
        var book = new ABCJS.TuneBook(abc);
        This.header = book.header;
        This.name = getAbcValue(This.header, '%%etbk:bname ', '');
        This.version = getAbcValue(This.header, '%%etbk:bvers ', '');
        This.description = getAbcValue(This.header, '%%etbk:bdesc ', '');
        This.tuneSets = extractTuneSets(book);
        This.playlists = extractPlaylists(This);
        extractPlaylistPositions(This);
        This.tuneSetPositionPlayInfos = extractTuneSetPositionPlayInfos(This);
      };
      function extractPlaylists(tuneBook) {
        var playlists, playlistDefinitionDirectives;
        playlists = [];
        playlistDefinitionDirectives = getAbcValues(tuneBook.header, '%%etbk:plldf ');
        if (playlistDefinitionDirectives.length > 0) {
          for (var y = 0; y < playlistDefinitionDirectives.length; y++) {
            var playlistId = getPlaylistId(playlistDefinitionDirectives[y]);
            var playlistName = getPlaylistName(playlistDefinitionDirectives[y]);
            var playlistEvent = getPlaylistEvent(playlistDefinitionDirectives[y]);
            var playlistBand = getPlaylistBand(playlistDefinitionDirectives[y]);
            var playlist = [];
            playlist = createPlaylist(playlistId, playlistName, playlistEvent, playlistBand);
            playlists.push(playlist);
          }
        }
        return playlists;
      }
      function extractPlaylistPositions(tuneBook) {
        var playlistPositionDirectives;
        playlistPositionDirectives = getAbcValues(tuneBook.header, '%%etbk:pllps ');
        if (playlistPositionDirectives.length > 0) {
          for (var z = 0; z < playlistPositionDirectives.length; z++) {
            var playlistId = getPlaylistId(playlistPositionDirectives[z]);
            var position = getPlaylistPositionPosition(playlistPositionDirectives[z]);
            var tuneSetId = getPlaylistPositionTuneSetId(playlistPositionDirectives[z]);
            var name = getPlaylistPositionName(playlistPositionDirectives[z]);
            var annotation = getPlaylistPositionAnnotation(playlistPositionDirectives[z]);
            var tuneSet = getTuneSetById(tuneBook, tuneSetId);
            if (name == '') {
              name = eliminateThe(tuneSet.tuneSetName);
              name += ' Set';
            }
            var playlistPosition = createPlaylistPosition(playlistId, position, tuneSet, name, annotation);
            var playlist = getPlaylistById(tuneBook, playlistId);
            playlist.addPlaylistPosition(playlistPosition);
          }
        }
      }
      function extractTuneSetPositionPlayInfos(tuneBook) {
        var tuneSetPositionPlayInfoDirectives, playlistId, playlistPositionNr, tuneSetId, tuneSetPositionNr, repeat, partPlayInfoDirective, annotation, partPlayInfos, tuneSetPositionPlayInfo, playlistPosition, tuneSetPosition, tuneSetPositionPlayInfos;
        tuneSetPositionPlayInfoDirectives = getAbcValues(tuneBook.header, '%%etbk:plltp ');
        tuneSetPositionPlayInfos = [];
        if (tuneSetPositionPlayInfoDirectives.length > 0) {
          for (var z = 0; z < tuneSetPositionPlayInfoDirectives.length; z++) {
            playlistId = getSubDirective(tuneSetPositionPlayInfoDirectives[z], 'pll:', ',');
            playlistPositionNr = getSubDirective(tuneSetPositionPlayInfoDirectives[z], 'pllpos:', ',');
            tuneSetId = getSubDirective(tuneSetPositionPlayInfoDirectives[z], 'tnset:', ',');
            tuneSetPositionNr = getSubDirective(tuneSetPositionPlayInfoDirectives[z], 'tnsetpos:', ',');
            repeat = getSubDirective(tuneSetPositionPlayInfoDirectives[z], 'rep:', ',');
            partPlayInfoDirective = getSubDirective(tuneSetPositionPlayInfoDirectives[z], 'arr:{', '}');
            partPlayInfos = extractPartPlayInfos(partPlayInfoDirective);
            annotation = getSubDirective(tuneSetPositionPlayInfoDirectives[z], 'ant:', ',');
            playlistPosition = getPlaylistPosition(tuneBook, playlistId, playlistPositionNr);
            tuneSetPosition = getTuneSetPositionByPosition(playlistPosition.tuneSet, tuneSetPositionNr);
            tuneSetPositionPlayInfo = createTuneSetPositionPlayInfo(playlistPosition, tuneSetPosition, repeat, partPlayInfos, annotation);
            tuneSetPositionPlayInfos.push(tuneSetPositionPlayInfo);
          }
        }
        return tuneSetPositionPlayInfos;
      }
      function extractPartPlayInfos(partPlayInfoDirective) {
        var partPlayInfosSplits, partPlayInfoSplits, part, playInfo, partPlayInfos, partPlayInfo;
        partPlayInfosSplits = partPlayInfoDirective.split(',');
        partPlayInfos = [];
        if (partPlayInfosSplits.length > 0) {
          for (var z = 0; z < partPlayInfosSplits.length; z++) {
            partPlayInfoSplits = partPlayInfosSplits[z].split(':');
            if (partPlayInfoSplits.length == 2) {
              part = partPlayInfoSplits[0];
              playInfo = partPlayInfoSplits[1];
              partPlayInfo = createPartPlayInfo(part, playInfo);
              partPlayInfos.push(partPlayInfo);
            }
          }
        }
        return partPlayInfos;
      }
      function extractTuneSets(book) {
        var allTuneSetPositions = [];
        var tunesWithoutTuneSetDirective = [];
        var tuneSetDirectives = [];
        var tuneSets = [];
        var intTuneSetId = 1;
        var intTuneId = 1;
        for (var i = 0; i < book.tunes.length; i++) {
          var tune = book.tunes[i];
          tuneSetDirectives = [];
          tuneSetDirectives = getAbcValues(tune.pure, '%%etbk:tnset ');
          if (tuneSetDirectives.length > 0) {
            extractEtbkFields(tune);
            tune.intTuneId = intTuneId;
            for (var y = 0; y < tuneSetDirectives.length; y++) {
              var tuneSetId = getTuneSetId(tuneSetDirectives[y]);
              var position = getTuneSetTunePosition(tuneSetDirectives[y]);
              var repeat = getTuneSetTuneRepeat(tuneSetDirectives[y]);
              var annotation = getTuneSetTuneAnnotation(tuneSetDirectives[y]);
              var tuneSetPosition = [];
              tuneSetPosition = createTuneSetPosition(tuneSetId, tune, position, repeat, annotation);
              allTuneSetPositions.push(tuneSetPosition);
            }
            intTuneId++;
          } else {
            tunesWithoutTuneSetDirective.push(tune);
          }
        }
        allTuneSetPositions.sort(function (a, b) {
          return a.tuneSetId - b.tuneSetId;
        });
        var wTuneSetId = 0;
        for (var i = 0; i < allTuneSetPositions.length; i++) {
          if (wTuneSetId !== allTuneSetPositions[i].tuneSetId) {
            wTuneSetId = allTuneSetPositions[i].tuneSetId;
            var tuneSet = [];
            var tuneSetName = '';
            var tuneSetPositions = [];
            for (var z = 0; z < allTuneSetPositions.length; z++) {
              var tuneSetPosition = allTuneSetPositions[z];
              if (wTuneSetId == tuneSetPosition.tuneSetId) {
                tuneSetPositions.push(tuneSetPosition);
                if (tuneSetPosition.position == '1') {
                  tuneSetName = eliminateThe(tuneSetPosition.tune.title);
                  tuneSetName += ' Set';
                }
                tuneSetPosition.tune.frequencyPlayed = calculateFrequencyPlayed(tuneSetPosition.tune.playDates);
              }
            }
            tuneSet = createTuneSet(wTuneSetId, tuneSetName, tuneSetPositions);
            tuneSets.push(tuneSet);
          }
        }
        wTuneSetId++;
        for (var i = 0; i < tunesWithoutTuneSetDirective.length; i++) {
          var tuneSet = [];
          var tuneSetType = '';
          var frequencyPlayed = 0;
          var tuneSetPositions = [];
          var tuneSetPosition = [];
          var tune = tunesWithoutTuneSetDirective[i];
          extractEtbkFields(tune);
          tuneSetPosition = createTuneSetPosition(wTuneSetId, tune, 1, '3x', '');
          tuneSetPositions.push(tuneSetPosition);
          tuneSet = createTuneSet(wTuneSetId, tune.title, tuneSetPositions);
          tuneSets.push(tuneSet);
          intTuneId++;
          wTuneSetId++;
        }
        return tuneSets;
      }
      function extractEtbkFields(tune) {
        var tuneSplits = tune.pure.split('\n');
        tune.pure = '';
        var newAbc = '';
        var isStandardAbc = true;
        var beginOfLine = '';
        tune.type = 'undefined';
        tune.key = 'undefined';
        tune.videos = [];
        tune.wsites = [];
        tune.annotation = '';
        tune.color = eTBK_DEFAULT_COLOR;
        tune.skill = '?';
        tune.playDates = [];
        tune.lastModified = null;
        for (var i = 0; i < tuneSplits.length; i++) {
          beginOfLine = '';
          isStandardAbc = true;
          beginOfLine = tuneSplits[i].substring(0, 2);
          if (beginOfLine.length > 1) {
            if (beginOfLine == 'R:') {
              tune.type = getAbcValueOfTuneLine(tuneSplits[i], 'R:', 'undefined').toLowerCase();
            } else if (beginOfLine == 'K:') {
              tune.key = getAbcValueOfTuneLine(tuneSplits[i], 'K:', 'undefined');
            } else if (beginOfLine == 'H:') {
              var tuneModificationString = getAbcValueOfTuneLine(tuneSplits[i], 'Modified ', 'undefined');
              if (tuneModificationString != 'undefined') {
                tuneModificationString = tuneModificationString + 'T22:00';
                tune.lastModified = moment(tuneModificationString, 'YYYY-MM-DDTHH:mm').toDate();
              }
            }
          }
          beginOfLine = tuneSplits[i].substring(0, 12);
          if (beginOfLine.length > 1) {
            if (beginOfLine == '%%etbk:tnset') {
              isStandardAbc = false;
            } else if (beginOfLine == '%%etbk:tube1') {
              tune.videos.push(createVideo('ytube', getAbcValueOfTuneLine(tuneSplits[i], '//www.youtube.com/embed/', ''), ''));
              isStandardAbc = false;
            } else if (beginOfLine == '%%etbk:tube2') {
              tune.videos.push(createVideo('ytube', getAbcValueOfTuneLine(tuneSplits[i], '//www.youtube.com/embed/', ''), ''));
              isStandardAbc = false;
            } else if (beginOfLine == '%%etbk:tube3') {
              tune.videos.push(createVideo('ytube', getAbcValueOfTuneLine(tuneSplits[i], '//www.youtube.com/embed/', ''), ''));
              isStandardAbc = false;
            } else if (beginOfLine == '%%etbk:video') {
              tune.videos.push(getVideoFromDirective(getAbcValueOfTuneLine(tuneSplits[i], '%%etbk:video ', '')));
              isStandardAbc = false;
            } else if (beginOfLine == '%%etbk:site1') {
              tune.wsites.push(createWebsite(getAbcValueOfTuneLine(tuneSplits[i], '%%etbk:site1 ', '')));
              isStandardAbc = false;
            } else if (beginOfLine == '%%etbk:site2') {
              tune.wsites.push(createWebsite(getAbcValueOfTuneLine(tuneSplits[i], '%%etbk:site2 ', '')));
              isStandardAbc = false;
            } else if (beginOfLine == '%%etbk:site3') {
              tune.wsites.push(createWebsite(getAbcValueOfTuneLine(tuneSplits[i], '%%etbk:site3 ', '')));
              isStandardAbc = false;
            } else if (beginOfLine == '%%etbk:wsite') {
              tune.wsites.push(createWebsite(getAbcValueOfTuneLine(tuneSplits[i], '%%etbk:wsite ', '')));
              isStandardAbc = false;
            } else if (beginOfLine == '%%etbk:annot') {
              tune.annotation = getAbcValueOfTuneLine(tuneSplits[i], '%%etbk:annot ', '');
              isStandardAbc = false;
            } else if (beginOfLine == '%%etbk:color') {
              tune.color = getAbcValueOfTuneLine(tuneSplits[i], '%%etbk:color ', eTBK_DEFAULT_COLOR);
              isStandardAbc = false;
            } else if (beginOfLine == '%%etbk:skill') {
              tune.skill = getAbcValueOfTuneLine(tuneSplits[i], '%%etbk:skill ', '');
              isStandardAbc = false;
            } else if (beginOfLine == '%%etbk:pldat') {
              var playDatesString = getAbcValueOfTuneLine(tuneSplits[i], '%%etbk:pldat ', '');
              tune.playDates = getPlayDates(playDatesString);
              isStandardAbc = false;
            }
          }
          if (isStandardAbc) {
            newAbc = newAbc + tuneSplits[i];
            newAbc = newAbc + '\n';
          }
        }
        tune.pure = newAbc;
        tune.lastPlayed = getTuneLastPlayed(tune.playDates);
      }
      function initializeTuneViewFields(tune) {
        tune.type = '';
        tune.key = '';
        tune.videos = [];
        tune.wsites = [];
        tune.annotation = '';
        tune.color = eTBK_DEFAULT_COLOR;
        tune.skill = '';
        tune.playDates = [];
        tune.lastPlayed = getTuneLastPlayed(tune.playDates);
        tune.lastModified = moment(eTBK_DEFAULT_MODIFICATIONDATE_STRING, 'YYYY-MM-DDTHH:mm').toDate();
      }
      function calculateFrequencyPlayed(playDates) {
        var today = moment();
        var frequencyPlayed = 0;
        var days = 0;
        for (var i = 0; i < playDates.length; i++) {
          days = 0;
          var checkDay = moment(playDates[i].playDate);
          days = today.diff(checkDay, 'days');
          if (days < 1000) {
            frequencyPlayed = frequencyPlayed + 1000;
            frequencyPlayed = frequencyPlayed - days;
          }
        }
        if (frequencyPlayed < 0) {
          frequencyPlayed = 0;
        }
        return frequencyPlayed;
      }
      function getTuneSetPositionPlayInfosForPlaylistPosition(tuneBook, playlistPosition) {
        var tuneSetPositionPlayInfos, tuneSetPositionPlayInfo;
        tuneSetPositionPlayInfos = [];
        for (var z = 0; z < tuneBook.tuneSetPositionPlayInfos.length; z++) {
          if (tuneBook.tuneSetPositionPlayInfos[z].playlistPosition == playlistPosition) {
            tuneSetPositionPlayInfo = tuneBook.tuneSetPositionPlayInfos[z];
            tuneSetPositionPlayInfos.push(tuneSetPositionPlayInfo);
          }
        }
        return tuneSetPositionPlayInfos;
      }
      function getTuneSetPositionPlayInfo(tuneBook, playlistPosition, tuneSetPosition) {
        var tuneSetPositionPlayInfo;
        tuneSetPositionPlayInfo = undefined;
        for (var z = 0; z < tuneBook.tuneSetPositionPlayInfos.length; z++) {
          if (tuneBook.tuneSetPositionPlayInfos[z].playlistPosition == playlistPosition && tuneBook.tuneSetPositionPlayInfos[z].tuneSetPosition == tuneSetPosition) {
            tuneSetPositionPlayInfo = tuneBook.tuneSetPositionPlayInfos[z];
          }
        }
        return tuneSetPositionPlayInfo;
      }
      function createAbcOption(tuneSetAbcIncl, playDateAbcIncl, skillAbcIncl, colorAbcIncl, annotationAbcIncl, siteAbcIncl, tubeAbcIncl, playlistAbcIncl, fingeringAbcIncl) {
        return {
          tuneSet: tuneSetAbcIncl,
          playDate: playDateAbcIncl,
          skill: skillAbcIncl,
          color: colorAbcIncl,
          annotation: annotationAbcIncl,
          website: siteAbcIncl,
          video: tubeAbcIncl,
          playlist: playlistAbcIncl,
          fingering: fingeringAbcIncl,
          includeAtLeastOneEtbkDirective: function () {
            if (this.tuneSet || this.playDate || this.skill || this.color || this.annotation || this.website || this.video || this.playlist) {
              return true;
            } else {
              return false;
            }
          }
        };
      }
      function createDefaultAbcOption() {
        return createAbcOption(true, true, true, true, true, true, true, true, true);
      }
      function createTuneSetPositionPlayInfo(playlistPosition, tuneSetPosition, repeat, partPlayInfos, annotation) {
        return {
          playlistPosition: playlistPosition,
          tuneSetPosition: tuneSetPosition,
          repeat: repeat,
          partPlayInfos: partPlayInfos,
          annotation: annotation,
          addPartPlayInfo: function (partPlayInfo) {
            this.partPlayInfos.push(partPlayInfo);
          },
          deletePartPlayInfo: function (partPlayInfo) {
            this.partPlayInfos.splice(this.partPlayInfos.indexOf(partPlayInfo), 1);
          },
          moveUpPartPlayInfo: function (partPlayInfo) {
            var index = this.partPlayInfos.indexOf(partPlayInfo);
            if (index == 0) {
            } else {
              this.partPlayInfos.splice(index, 1);
              this.partPlayInfos.splice(index - 1, 0, partPlayInfo);
            }
          },
          moveDownPartPlayInfo: function (partPlayInfo) {
            var index = this.partPlayInfos.indexOf(partPlayInfo);
            if (index == this.partPlayInfos.length) {
            } else {
              this.partPlayInfos.splice(index, 1);
              this.partPlayInfos.splice(index + 1, 0, partPlayInfo);
            }
          },
          isDefault: function () {
            var isDefault = true;
            if (this.repeat != this.tuneSetPosition.repeat || this.annotation != this.tuneSetPosition.annotation || this.partPlayInfos.length > 0) {
              isDefault = false;
            }
            return isDefault;
          }
        };
      }
      function createPartPlayInfo(part, playInfo) {
        return {
          part: part,
          playInfo: playInfo
        };
      }
      function createPlaylist(playlistId, playlistName, playlistEvent, playlistBand) {
        return {
          id: playlistId,
          name: playlistName,
          event: playlistEvent,
          band: playlistBand,
          playlistPositions: [],
          addPlaylistPosition: function (playlistPosition) {
            this.playlistPositions.push(playlistPosition);
          }
        };
      }
      function createPlaylistPosition(playlistId, position, tuneSet, name, annotation) {
        return {
          playlistId: playlistId,
          position: position,
          tuneSet: tuneSet,
          name: name,
          annotation: annotation
        };
      }
      function createTuneSetPosition(iTuneSetId, iTune, iPosition, iRepeat, iAnnotation) {
        return {
          tuneSetId: iTuneSetId,
          tune: iTune,
          position: iPosition,
          repeat: iRepeat,
          annotation: iAnnotation
        };
      }
      function createTuneSet(iTuneSetId, iTuneSetName, iTuneSetPositions) {
        return {
          tuneSetId: iTuneSetId,
          tuneSetName: iTuneSetName,
          sort: 0,
          tuneSetPositions: iTuneSetPositions
        };
      }
      function createVideo(iSource, iCode, iDescription) {
        return {
          source: iSource,
          code: iCode,
          description: iDescription
        };
      }
      function createWebsite(iURL) {
        return { url: iURL };
      }
      function createPlayDate(iDate) {
        return { playDate: iDate };
      }
      function deleteTuneSetPosition(currentTuneBook, tuneSetId, position) {
        var tuneSet = getTuneSetById(currentTuneBook, tuneSetId);
        var tuneSetPosition = null;
        var tuneSetDeleted = false;
        var removedPosition = 0;
        removedPosition = parseInt(position);
        for (var z = 0; z < tuneSet.tuneSetPositions.length; z++) {
          if (tuneSet.tuneSetPositions[z].position == position) {
            tuneSetPosition = tuneSet.tuneSetPositions[z];
            tuneSet.tuneSetPositions.splice(z, 1);
          }
        }
        if (getTuneSetsByIntTuneId(currentTuneBook, tuneSetPosition.tune.intTuneId).length == 0) {
          initializeTuneSet(currentTuneBook.tuneSets, tuneSetPosition.tune);
        }
        if (tuneSet.tuneSetPositions.length == 0) {
          currentTuneBook.tuneSets.splice(currentTuneBook.tuneSets.indexOf(tuneSet), 1);
          tuneSetDeleted = true;
        } else {
          var currentPosition = 0;
          for (var y = 0; y < tuneSet.tuneSetPositions.length; y++) {
            currentPosition = parseInt(tuneSet.tuneSetPositions[y].position);
            if (currentPosition > removedPosition) {
              currentPosition--;
              tuneSet.tuneSetPositions[y].position = currentPosition.toString();
            }
          }
        }
        return tuneSetDeleted;
      }
      function deleteTuneSetPositionsAndTune(tuneSet, intTuneId) {
        var tuneSetPosition = null;
        var removedPosition = 0;
        for (var z = 0; z < tuneSet.tuneSetPositions.length; z++) {
          if (tuneSet.tuneSetPositions[z].tune.intTuneId == intTuneId) {
            removedPosition = parseInt(tuneSet.tuneSetPositions[z].position);
            tuneSetPosition = tuneSet.tuneSetPositions[z];
            tuneSet.tuneSetPositions.splice(z, 1);
          }
        }
        if (tuneSet.tuneSetPositions.length == 0) {
          currentTuneBook.tuneSets.splice(currentTuneBook.tuneSets.indexOf(tuneSet), 1);
        } else {
          var currentPosition = 0;
          for (var y = 0; y < tuneSet.tuneSetPositions.length; y++) {
            currentPosition = parseInt(tuneSet.tuneSetPositions[y].position);
            if (currentPosition > removedPosition) {
              currentPosition--;
              tuneSet.tuneSetPositions[y].position = currentPosition.toString();
            }
          }
        }
      }
      function moveTuneSetPosition(currentTuneBook, sourceTuneSetId, sourcePosition, targetTuneSetId, targetPosition, beforeOrAfter, moveOrCopy) {
        var sourceTuneSet = getTuneSetById(currentTuneBook, sourceTuneSetId);
        var sourceTuneSetPosition = null;
        var targetTuneSet = null;
        var tuneSetDeleted = false;
        var twoSetsInvolved = false;
        var removedPosition = parseInt(sourcePosition);
        if (targetTuneSetId == null || sourceTuneSetId !== targetTuneSetId) {
          twoSetsInvolved = true;
        }
        for (var z = 0; z < sourceTuneSet.tuneSetPositions.length; z++) {
          if (sourceTuneSet.tuneSetPositions[z].position == sourcePosition) {
            sourceTuneSetPosition = sourceTuneSet.tuneSetPositions[z];
          }
        }
        if (targetTuneSetId == null) {
          initializeTuneSet(currentTuneBook.tuneSets, sourceTuneSetPosition.tune);
        } else {
          targetTuneSet = getTuneSetById(currentTuneBook, targetTuneSetId);
        }
        if (moveOrCopy == 'move') {
          if (twoSetsInvolved) {
            for (var z = 0; z < sourceTuneSet.tuneSetPositions.length; z++) {
              if (sourceTuneSet.tuneSetPositions[z].position == sourcePosition) {
                sourceTuneSet.tuneSetPositions.splice(z, 1);
              }
            }
          }
          if (sourceTuneSet.tuneSetPositions.length == 0) {
            currentTuneBook.tuneSets.splice(currentTuneBook.tuneSets.indexOf(sourceTuneSet), 1);
            tuneSetDeleted = true;
          } else {
            var currentPosition = 0;
            for (var y = 0; y < sourceTuneSet.tuneSetPositions.length; y++) {
              currentPosition = parseInt(sourceTuneSet.tuneSetPositions[y].position);
              if (currentPosition > removedPosition) {
                currentPosition--;
                sourceTuneSet.tuneSetPositions[y].position = currentPosition.toString();
              }
            }
          }
        }
        if (targetTuneSetId != null) {
          var newPosition = 0;
          newPosition = parseInt(targetPosition);
          if (beforeOrAfter == 'after') {
            newPosition++;
          }
          var targetTuneSetPosition = {};
          if (moveOrCopy == 'move') {
            targetTuneSetPosition = sourceTuneSetPosition;
            targetTuneSetPosition.tuneSetId = targetTuneSetId;
            targetTuneSetPosition.position = newPosition.toString();
          } else if (moveOrCopy == 'copy') {
            targetTuneSetPosition = createTuneSetPosition(targetTuneSetId, sourceTuneSetPosition.tune, newPosition.toString(), sourceTuneSetPosition.repeat, sourceTuneSetPosition.annotation);
          }
          if (twoSetsInvolved) {
            var insertAt = newPosition - 1;
            targetTuneSet.tuneSetPositions.splice(insertAt, 0, targetTuneSetPosition);
          }
          for (var y = 0; y < targetTuneSet.tuneSetPositions.length; y++) {
            var currentPosition = 0;
            if (targetTuneSet.tuneSetPositions[y] == targetTuneSetPosition) {
            } else {
              currentPosition = parseInt(targetTuneSet.tuneSetPositions[y].position);
              if (currentPosition >= newPosition) {
                currentPosition++;
                targetTuneSet.tuneSetPositions[y].position = currentPosition.toString();
              }
            }
          }
        }
        return tuneSetDeleted;
      }
      function moveUpPlaylistPosition(currentTuneBook, playlistId, position) {
        var playlist, oldPosition, newPosition, movingPlaylistPosition;
        oldPosition = parseInt(position);
        newPosition = oldPosition - 1;
        if (newPosition < 1) {
          newPosition = 1;
        }
        playlist = getPlaylistById(currentTuneBook, playlistId);
        for (var z = 0; z < playlist.playlistPositions.length; z++) {
          if (parseInt(playlist.playlistPositions[z].position) == oldPosition) {
            playlist.playlistPositions[z].position = newPosition.toString();
            movingPlaylistPosition = playlist.playlistPositions[z];
          }
        }
        for (var y = 0; y < playlist.playlistPositions.length; y++) {
          if (parseInt(playlist.playlistPositions[y].position) == newPosition) {
            if (playlist.playlistPositions[y] != movingPlaylistPosition) {
              playlist.playlistPositions[y].position = oldPosition.toString();
            }
          }
        }
        playlist.playlistPositions.sort(function (a, b) {
          return a.position - b.position;
        });
        return playlist;
      }
      function moveDownPlaylistPosition(currentTuneBook, playlistId, position) {
        var playlist, oldPosition, newPosition, movingPlaylistPosition;
        oldPosition = parseInt(position);
        newPosition = oldPosition + 1;
        playlist = getPlaylistById(currentTuneBook, playlistId);
        if (playlist.playlistPositions.length < newPosition) {
          newPosition = oldPosition;
        } else {
          for (var z = 0; z < playlist.playlistPositions.length; z++) {
            if (parseInt(playlist.playlistPositions[z].position) == oldPosition) {
              playlist.playlistPositions[z].position = newPosition.toString();
              movingPlaylistPosition = playlist.playlistPositions[z];
            }
          }
          for (var y = 0; y < playlist.playlistPositions.length; y++) {
            if (parseInt(playlist.playlistPositions[y].position) == newPosition) {
              if (playlist.playlistPositions[y] != movingPlaylistPosition) {
                playlist.playlistPositions[y].position = oldPosition.toString();
              }
            }
          }
          playlist.playlistPositions.sort(function (a, b) {
            return a.position - b.position;
          });
        }
        return playlist;
      }
      function addEmptyPlaylistPosition(tuneBook, playlistId) {
        var playlist, emptyPlaylistPosition;
        playlist = getPlaylistById(tuneBook, playlistId);
        emptyPlaylistPosition = createPlaylistPosition(playlist.id, playlist.playlistPositions.length + 1, null, '', '');
        playlist.playlistPositions.push(emptyPlaylistPosition);
        return emptyPlaylistPosition;
      }
      function addEmptyPlaylist(tuneBook) {
        var playlistId, emptyPlaylist;
        playlistId = tuneBook.playlists.length + 1;
        emptyPlaylist = createPlaylist(playlistId, '', '', '');
        tuneBook.playlists.push(emptyPlaylist);
        return emptyPlaylist;
      }
      function deletePlaylistPosition(tuneBook, playlistId, position) {
        var playlist = getPlaylistById(tuneBook, playlistId);
        var playlistPosition = null;
        var removedPosition = 0;
        removedPosition = parseInt(position);
        for (var z = 0; z < playlist.playlistPositions.length; z++) {
          if (playlist.playlistPositions[z].position == position) {
            playlistPosition = playlist.playlistPositions[z];
            playlist.playlistPositions.splice(z, 1);
          }
        }
        if (playlist.playlistPositions.length == 0) {
        } else {
          var currentPosition = 0;
          for (var y = 0; y < playlist.playlistPositions.length; y++) {
            currentPosition = parseInt(playlist.playlistPositions[y].position);
            if (currentPosition > removedPosition) {
              currentPosition--;
              playlist.playlistPositions[y].position = currentPosition.toString();
            }
          }
        }
      }
      function deletePlaylist(tuneBook, playlistId) {
        var playlist = getPlaylistById(tuneBook, playlistId);
        for (var z = 0; z < tuneBook.playlists.length; z++) {
          if (tuneBook.playlists[z].id == playlistId) {
            tuneBook.playlists.splice(z, 1);
          }
        }
      }
      function copyPlaylist(tuneBook, playlistId) {
        var playlistId, playlistName, playlistOriginal, playlistCopy;
        playlistOriginal = getPlaylistById(tuneBook, playlistId);
        playlistId = tuneBook.playlists.length + 1;
        playlistName = 'Copy of ' + playlistOriginal.name;
        playlistCopy = createPlaylist(playlistId, playlistName, playlistOriginal.event, playlistOriginal.band);
        tuneBook.playlists.push(playlistCopy);
        copyPlaylistPosition(tuneBook, playlistOriginal, playlistCopy);
      }
      function copyPlaylistPosition(tuneBook, playlistOriginal, playlistCopy) {
        var playlistPositionOriginal, playlistPositionCopy;
        for (var y = 0; y < playlistOriginal.playlistPositions.length; y++) {
          playlistPositionOriginal = playlistOriginal.playlistPositions[y];
          playlistPositionCopy = createPlaylistPosition(playlistCopy.id, playlistPositionOriginal.position, playlistPositionOriginal.tuneSet, playlistPositionOriginal.name, playlistPositionOriginal.annotation);
          playlistCopy.addPlaylistPosition(playlistPositionCopy);
          copyTuneSetPositionPlayInfos(tuneBook, playlistPositionOriginal, playlistPositionCopy);
        }
      }
      function copyTuneSetPositionPlayInfos(tuneBook, playlistPositionOriginal, playlistPositionCopy) {
        var tuneSetPositionPlayInfosOriginal, tuneSetPositionPlayInfosCopy, tuneSetPositionPlayInfoOriginal, tuneSetPositionPlayInfoCopy, partPlayInfosCopy;
        tuneSetPositionPlayInfosOriginal = getTuneSetPositionPlayInfosForPlaylistPosition(tuneBook, playlistPositionOriginal);
        for (var y = 0; y < tuneSetPositionPlayInfosOriginal.length; y++) {
          tuneSetPositionPlayInfoOriginal = tuneSetPositionPlayInfosOriginal[y];
          partPlayInfosCopy = copyPartPlayInfos(tuneSetPositionPlayInfoOriginal);
          tuneSetPositionPlayInfoCopy = createTuneSetPositionPlayInfo(playlistPositionCopy, tuneSetPositionPlayInfoOriginal.tuneSetPosition, tuneSetPositionPlayInfoOriginal.repeat, partPlayInfosCopy, tuneSetPositionPlayInfoOriginal.annotation);
          tuneBook.tuneSetPositionPlayInfos.push(tuneSetPositionPlayInfoCopy);
        }
      }
      function copyPartPlayInfos(tuneSetPositionPlayInfoOriginal) {
        var partPlayInfosOriginal, partPlayInfosCopy, partPlayInfoOriginal, partPlayInfoCopy;
        partPlayInfosCopy = [];
        for (var y = 0; y < tuneSetPositionPlayInfoOriginal.partPlayInfos.length; y++) {
          partPlayInfoOriginal = tuneSetPositionPlayInfoOriginal.partPlayInfos[y];
          partPlayInfoCopy = createPartPlayInfo(partPlayInfoOriginal.part, partPlayInfoOriginal.playInfo);
          partPlayInfosCopy.push(partPlayInfoCopy);
        }
        return partPlayInfosCopy;
      }
      function getTuneSetId(tuneSetDirective) {
        var tuneSetId = 0;
        var tuneSetIdSplits = [];
        tuneSetIdSplits = tuneSetDirective.split('id:');
        if (tuneSetIdSplits.length > 1) {
          tuneSetIdSplits = tuneSetIdSplits[1].split(',');
          tuneSetId = tuneSetIdSplits[0].replace(/^\s+|\s+$/g, '');
        }
        return parseInt(tuneSetId);
      }
      function getSubDirective(directive, beginAfter, endBefore) {
        var detail = '';
        var detailSplits = directive.split(beginAfter);
        if (detailSplits.length > 1) {
          detailSplits = detailSplits[1].split(endBefore);
          detail = detailSplits[0].replace(/^\s+|\s+$/g, '');
        }
        return detail;
      }
      function getPlaylistId(playlistDirective) {
        return getSubDirective(playlistDirective, 'id:', ',');
      }
      function getPlaylistName(playlistDirective) {
        return getSubDirective(playlistDirective, 'name:', ',');
      }
      function getPlaylistEvent(playlistDirective) {
        return getSubDirective(playlistDirective, 'evt:', ',');
      }
      function getPlaylistBand(playlistDirective) {
        return getSubDirective(playlistDirective, 'band:', ',');
      }
      function getPlaylistPositionPosition(playlistDirective) {
        return getSubDirective(playlistDirective, 'pos:', ',');
      }
      function getPlaylistPositionTuneSetId(playlistDirective) {
        return getSubDirective(playlistDirective, 'tnset:', ',');
      }
      function getPlaylistPositionName(playlistDirective) {
        return getSubDirective(playlistDirective, 'name:', ',');
      }
      function getPlaylistPositionAnnotation(playlistDirective) {
        return getSubDirective(playlistDirective, 'ant:', ',');
      }
      function getVideoSource(videoDirective) {
        return getSubDirective(videoDirective, 'src:', ',');
      }
      function getVideoCode(videoDirective) {
        return getSubDirective(videoDirective, 'cde:', ',');
      }
      function getVideoDescription(videoDirective) {
        return getSubDirective(videoDirective, 'desc:', '\n');
      }
      function getTuneSetTunePosition(tuneSetDirective) {
        var tuneSetTunePosition = 'undefined';
        var tuneSetTunePositionSplits = [];
        tuneSetTunePositionSplits = tuneSetDirective.split('pos:');
        if (tuneSetTunePositionSplits.length > 1) {
          tuneSetTunePositionSplits = tuneSetTunePositionSplits[1].split(',');
          tuneSetTunePosition = tuneSetTunePositionSplits[0].replace(/^\s+|\s+$/g, '');
        }
        return tuneSetTunePosition;
      }
      function getTuneSetTuneRepeat(tuneSetDirective) {
        var tuneSetTuneRepeat = 'undefined';
        var tuneSetTuneRepeatSplits = [];
        tuneSetTuneRepeatSplits = tuneSetDirective.split('rep:');
        if (tuneSetTuneRepeatSplits.length > 1) {
          tuneSetTuneRepeatSplits = tuneSetTuneRepeatSplits[1].split(',');
          tuneSetTuneRepeat = tuneSetTuneRepeatSplits[0].replace(/^\s+|\s+$/g, '');
        }
        return tuneSetTuneRepeat;
      }
      function getTuneSetTuneAnnotation(tuneSetDirective) {
        var tuneSetTuneAnnotation = '';
        var tuneSetTuneAnnotationSplits = [];
        tuneSetTuneAnnotationSplits = tuneSetDirective.split('ant:');
        if (tuneSetTuneAnnotationSplits.length > 1) {
          tuneSetTuneAnnotationSplits = tuneSetTuneAnnotationSplits[1].split(',');
          tuneSetTuneAnnotation = tuneSetTuneAnnotationSplits[0].replace(/^\s+|\s+$/g, '');
        }
        return tuneSetTuneAnnotation;
      }
      function getAbcValue(abc, abcField, initValue) {
        var value = initValue;
        var abcFieldSplits = [];
        abcFieldSplits = abc.split(abcField);
        if (abcFieldSplits.length > 1) {
          abcFieldSplits = abcFieldSplits[1].split('\n');
          value = abcFieldSplits[0].replace(/^\s+|\s+$/g, '');
        }
        return value;
      }
      function getAbcValues(abc, abcField) {
        var values = [];
        var value = '';
        var abcFieldSplits = [];
        var lineSplits = [];
        abcFieldSplits = abc.split(abcField);
        for (var i = 0; i < abcFieldSplits.length; i++) {
          if (i > 0) {
            lineSplits = abcFieldSplits[i].split('\n');
            value = lineSplits[0].replace(/^\s+|\s+$/g, '');
            values.push(value);
          }
        }
        return values;
      }
      function getAbcValueOfTuneLine(tuneLine, abcField, initValue) {
        var value = initValue;
        var abcFieldSplits = [];
        abcFieldSplits = tuneLine.split(abcField);
        if (abcFieldSplits.length > 1) {
          abcFieldSplits = abcFieldSplits[1].split('\n');
          value = abcFieldSplits[0].replace(/^\s+|\s+$/g, '');
        }
        return value;
      }
      function addDirective(tune, directive, targetLine) {
        var tuneSplits = [];
        var newAbc = '';
        tuneSplits = tune.pure.split('\n');
        tune.pure = '';
        var curLineIsTargetLine = false;
        var lastLineIsTargetLine = false;
        var directiveAdded = false;
        for (var i = 0; i < tuneSplits.length; i++) {
          if (tuneSplits[i].indexOf(targetLine) !== -1) {
            curLineIsTargetLine = true;
          } else {
            curLineIsTargetLine = false;
          }
          if (!curLineIsTargetLine && lastLineIsTargetLine) {
            newAbc = newAbc + directive;
            newAbc = newAbc + '\n';
            directiveAdded = true;
          }
          newAbc = newAbc + tuneSplits[i];
          newAbc = newAbc + '\n';
          lastLineIsTargetLine = curLineIsTargetLine;
        }
        if (!directiveAdded) {
          newAbc = newAbc + directive;
          newAbc = newAbc + '\n';
          directiveAdded = true;
        }
        tune.pure = newAbc;
      }
      function writeTuneAbcWithEtbkDirectives(tune, tuneSetPositions, targetLine, abcOption) {
        var tuneSplits = [];
        var newAbc = '';
        tuneSplits = tune.pure.split('\n');
        var curLineIsTargetLine = false;
        var lastLineIsTargetLine = false;
        var directivesAdded = false;
        var directive = '';
        for (var i = 0; i < tuneSplits.length; i++) {
          if (!directivesAdded) {
            if (tuneSplits[i].indexOf(targetLine) !== -1) {
              curLineIsTargetLine = true;
            } else {
              curLineIsTargetLine = false;
            }
            if (!curLineIsTargetLine && lastLineIsTargetLine) {
              if (abcOption.tuneSet) {
                for (var w = 0; w < tuneSetPositions.length; w++) {
                  directive = '%%etbk:tnset id:' + tuneSetPositions[w].tuneSetId + ',pos:' + tuneSetPositions[w].position + ',rep:' + tuneSetPositions[w].repeat + ',ant:' + tuneSetPositions[w].annotation;
                  newAbc = newAbc + directive;
                  newAbc = newAbc + '\n';
                }
              }
              if (abcOption.website) {
                for (var z = 0; z < tune.wsites.length; z++) {
                  directive = '%%etbk:wsite ' + tune.wsites[z].url;
                  newAbc = newAbc + directive;
                  newAbc = newAbc + '\n';
                }
              }
              if (abcOption.video) {
                for (var z = 0; z < tune.videos.length; z++) {
                  directive = '%%etbk:video ' + 'src:' + tune.videos[z].source + ',cde:' + tune.videos[z].code + ',desc:' + tune.videos[z].description;
                  newAbc = newAbc + directive;
                  newAbc = newAbc + '\n';
                }
              }
              if (abcOption.annotation) {
                if (tune.annotation != '') {
                  directive = '%%etbk:annot ' + tune.annotation;
                  newAbc = newAbc + directive;
                  newAbc = newAbc + '\n';
                }
              }
              if (abcOption.skill) {
                if (tune.skill != '') {
                  directive = '%%etbk:skill ' + tune.skill;
                  newAbc = newAbc + directive;
                  newAbc = newAbc + '\n';
                }
              }
              if (abcOption.color) {
                if (tune.color != eTBK_DEFAULT_COLOR) {
                  directive = '%%etbk:color ' + tune.color;
                  newAbc = newAbc + directive;
                  newAbc = newAbc + '\n';
                }
              }
              if (abcOption.playDate) {
                if (tune.lastPlayed != null) {
                  directive = getPlayDatesDirective(tune);
                  newAbc = newAbc + directive;
                  newAbc = newAbc + '\n';
                }
              }
              directivesAdded = true;
            }
          }
          newAbc = newAbc + tuneSplits[i];
          newAbc = newAbc + '\n';
          lastLineIsTargetLine = curLineIsTargetLine;
        }
        if (!directivesAdded) {
        }
        return newAbc;
      }
      function getTuneLastPlayed(playDates) {
        if (playDates.length == 0) {
          return null;
        } else {
          return playDates[0].playDate;
        }
      }
      function getPlayDates(tuneLine) {
        var playDates = [];
        var playDate = new Date();
        var playDatesSplits = [];
        playDatesSplits = tuneLine.split(',');
        for (var i = 0; i < playDatesSplits.length; i++) {
          playDate = moment(playDatesSplits[i], 'YYYY-MM-DDTHH:mm').toDate();
          playDates.push(createPlayDate(playDate));
        }
        return playDates;
      }
      function getVideoFromDirective(videoDirective) {
        return createVideo(getVideoSource(videoDirective), getVideoCode(videoDirective), getVideoDescription(videoDirective));
      }
      function initializeTuneAndTuneSet(tuneSets) {
        var maxTuneSetId = 0;
        var maxIntTuneId = 0;
        var maxTuneId = 0;
        var currentTuneId = 0;
        var currentIntTuneId = 0;
        var currentTuneSetId = 0;
        for (var i = 0; i < tuneSets.length; i++) {
          currentTuneSetId = parseInt(tuneSets[i].tuneSetId);
          if (currentTuneSetId > maxTuneSetId) {
            maxTuneSetId = currentTuneSetId;
          }
          for (var z = 0; z < tuneSets[i].tuneSetPositions.length; z++) {
            currentIntTuneId = parseInt(tuneSets[i].tuneSetPositions[z].tune.intTuneId);
            if (currentIntTuneId > maxIntTuneId) {
              maxIntTuneId = currentIntTuneId;
            }
            currentTuneId = parseInt(tuneSets[i].tuneSetPositions[z].tune.id);
            if (currentTuneId > maxTuneId) {
              maxTuneId = currentTuneId;
            }
          }
        }
        var newTuneId = ++maxTuneId;
        var newTuneSetId = ++maxTuneSetId;
        var newIntTuneId = ++maxIntTuneId;
        var abc = 'X:' + newTuneId + '\n' + 'T:New Tune';
        var book = new ABCJS.TuneBook(abc);
        var tune = book.tunes[0];
        tune.intTuneId = newIntTuneId;
        initializeTuneViewFields(tune);
        var tuneSet = [];
        var tuneSetPositions = [];
        var tuneSetPosition = createTuneSetPosition(newTuneSetId, tune, 1, '3x', '');
        tuneSetPositions.push(tuneSetPosition);
        tuneSet = createTuneSet(newTuneSetId, tune.title, tuneSetPositions);
        tuneSets.unshift(tuneSet);
        return tuneSet;
      }
      function initializeTuneSet(tuneSets, tune) {
        var maxTuneSetId = 0;
        var currentTuneSetId = 0;
        for (var i = 0; i < tuneSets.length; i++) {
          currentTuneSetId = parseInt(tuneSets[i].tuneSetId);
          if (currentTuneSetId > maxTuneSetId) {
            maxTuneSetId = currentTuneSetId;
          }
        }
        var tuneSet = [];
        var tuneSetPositions = [];
        var newTuneSetId = ++maxTuneSetId;
        var tuneSetPosition = createTuneSetPosition(newTuneSetId, tune, 1, '3x', '');
        tuneSetPositions.push(tuneSetPosition);
        tuneSet = createTuneSet(newTuneSetId, tune.title, tuneSetPositions);
        tuneSets.unshift(tuneSet);
        return tuneSet;
      }
      function addTunePlayDate(tune, newDate) {
        if (tune.lastPlayed != null && moment(tune.lastPlayed).diff(newDate, 'minutes') == 0) {
        } else {
          tune.lastPlayed = newDate;
          tune.playDates.unshift(createPlayDate(tune.lastPlayed));
          tune.frequencyPlayed = calculateFrequencyPlayed(tune.playDates);
        }
      }
      function addTuneSetPlayDate(tuneSet, newDate) {
        for (var i = 0; i < tuneSet.tuneSetPositions.length; i++) {
          addTunePlayDate(tuneSet.tuneSetPositions[i].tune, newDate);
        }
      }
      function savePlayDatesDirective(tuneSetPosition) {
        var searchDirective = '%%etbk:pldat ';
        var newDirective = getPlayDatesDirective(tuneSetPosition.tune);
        saveDirective(tuneSetPosition, searchDirective, newDirective);
      }
      function getPlayDatesDirective(tune) {
        var directive = '%%etbk:pldat ';
        var playDate = null;
        for (var i = 0; i < tune.playDates.length; i++) {
          if (i > 0) {
            directive = directive + ',';
          }
          playDate = moment(tune.playDates[i].playDate);
          directive = directive + playDate.format('YYYY-MM-DDTHH:mm');
        }
        return directive;
      }
      function saveSkillDirective(tuneSetPosition) {
        var searchDirective = '%%etbk:skill ';
        var newDirective = '%%etbk:skill ' + tuneSetPosition.tune.skill;
        saveDirective(tuneSetPosition, searchDirective, newDirective);
      }
      function saveDirective(tuneSetPosition, searchDirective, newDirective) {
        if (!abcContainesDirective(tuneSetPosition, searchDirective)) {
          addDirective(tuneSetPosition.tune, newDirective, 'X:');
        } else {
          replaceDirective(tuneSetPosition, searchDirective, newDirective);
        }
      }
      function abcContainesDirective(tuneSetPosition, directive) {
        var directiveSplits = [];
        var directiveFound = false;
        directiveSplits = tuneSetPosition.tune.pure.split(directive);
        if (directiveSplits.length > 1) {
          directiveFound = true;
        }
        return directiveFound;
      }
      function replaceDirective(tuneSetPosition, directiveType, directive) {
        var tuneSplits = [];
        var newAbc = '';
        tuneSplits = tuneSetPosition.tune.pure.split('\n');
        tuneSetPosition.tune.pure = '';
        for (var i = 0; i < tuneSplits.length; i++) {
          if (tuneSplits[i].indexOf(directiveType) !== -1) {
            newAbc = newAbc + directive;
          } else {
            newAbc = newAbc + tuneSplits[i];
          }
          newAbc = newAbc + '\n';
        }
        tuneSetPosition.tune.pure = newAbc;
      }
      function setRandomSort(tuneBook) {
        var randomNumber = 0;
        for (var i = 0; i < tuneBook.tuneSets.length; i++) {
          randomNumber = Math.floor(Math.random() * 100001);
          tuneBook.tuneSets[i].sort = randomNumber;
        }
      }
      function getRandomTuneSetIndex(sets) {
        return Math.floor(Math.random() * sets.length) + 1;
      }
      function getRandomTuneIndex(tunes) {
        return Math.floor(Math.random() * tunes.length) + 1;
      }
      function writeAbc(tuneBook, abcOption) {
        var tbkAbc, tuneAbc, tunes;
        tunes = [];
        tuneAbc = '';
        tbkAbc = '';
        tbkAbc = writeAbcHeader(tuneBook, abcOption);
        tunes = extractTunes(tuneBook.tuneSets);
        tunes.sort(function (a, b) {
          return a.intTuneId - b.intTuneId;
        });
        for (var i = 0; i < tunes.length; i++) {
          tuneAbc = writeTuneAbc(tunes[i], getTuneSetPositionsByIntTuneId(tuneBook, tunes[i].intTuneId), abcOption);
          tbkAbc += tuneAbc;
          tbkAbc += '\n';
        }
        return tbkAbc;
      }
      function initializeAbcHeader() {
        var tuneBookName = 'My TuneBook';
        var tuneBookDescription = 'The tunes I play';
        var date = moment(new Date());
        var tuneBookVersion = date.format('YYYY-MM-DDTHH:mm');
        var tbkAbc = '%abc-';
        tbkAbc += ABC_VERSION;
        tbkAbc += '\n';
        tbkAbc += 'I:abc-creator eTuneBook-';
        tbkAbc += eTBK_VERSION;
        tbkAbc += '\n';
        tbkAbc += '%%etbk:bname ';
        tbkAbc += tuneBookName;
        tbkAbc += '\n';
        tbkAbc += '%%etbk:bvers ';
        tbkAbc += tuneBookVersion;
        tbkAbc += '\n';
        tbkAbc += '%%etbk:bdesc ';
        tbkAbc += tuneBookDescription;
        tbkAbc += '\n';
        return tbkAbc;
      }
      function writeAbcHeader(tuneBook, abcOption) {
        var tbkAbc, playlist, playlistPosition, tuneSetPositionPlayInfos, tuneSetPositionPlayInfo;
        tbkAbc = '%abc-';
        tbkAbc += ABC_VERSION;
        tbkAbc += '\n';
        tbkAbc += 'I:abc-creator eTuneBook-';
        tbkAbc += eTBK_VERSION;
        tbkAbc += '\n';
        if (abcOption.includeAtLeastOneEtbkDirective()) {
          tbkAbc += '%%etbk:bname ';
          tbkAbc += tuneBook.name;
          tbkAbc += '\n';
          tbkAbc += '%%etbk:bvers ';
          tbkAbc += tuneBook.version;
          tbkAbc += '\n';
          tbkAbc += '%%etbk:bdesc ';
          tbkAbc += tuneBook.description;
          tbkAbc += '\n';
        }
        if (abcOption.playlist) {
          for (var i = 0; i < tuneBook.playlists.length; i++) {
            playlist = tuneBook.playlists[i];
            tbkAbc += '%%etbk:plldf id:';
            tbkAbc += playlist.id;
            tbkAbc += ',name:';
            tbkAbc += playlist.name;
            tbkAbc += ',evt:';
            tbkAbc += playlist.event;
            tbkAbc += ',band:';
            tbkAbc += playlist.band;
            tbkAbc += ',ant:';
            tbkAbc += playlist.annotation;
            tbkAbc += '\n';
            for (var z = 0; z < playlist.playlistPositions.length; z++) {
              playlistPosition = playlist.playlistPositions[z];
              tbkAbc += '%%etbk:pllps id:';
              tbkAbc += playlist.id;
              tbkAbc += ',pos:';
              tbkAbc += playlistPosition.position;
              tbkAbc += ',tnset:';
              tbkAbc += playlistPosition.tuneSet.tuneSetId;
              tbkAbc += ',name:';
              tbkAbc += playlistPosition.name;
              tbkAbc += ',ant:';
              tbkAbc += playlistPosition.annotation;
              tbkAbc += '\n';
              tuneSetPositionPlayInfos = getTuneSetPositionPlayInfosForPlaylistPosition(tuneBook, tuneBook.playlists[i].playlistPositions[z]);
              for (var y = 0; y < tuneSetPositionPlayInfos.length; y++) {
                tuneSetPositionPlayInfo = tuneSetPositionPlayInfos[y];
                if (!tuneSetPositionPlayInfo.isDefault()) {
                  tbkAbc += '%%etbk:plltp pll:';
                  tbkAbc += tuneSetPositionPlayInfo.playlistPosition.playlistId;
                  tbkAbc += ',pllpos:';
                  tbkAbc += tuneSetPositionPlayInfo.playlistPosition.position;
                  tbkAbc += ',tnset:';
                  tbkAbc += tuneSetPositionPlayInfo.tuneSetPosition.tuneSetId;
                  tbkAbc += ',tnsetpos:';
                  tbkAbc += tuneSetPositionPlayInfo.tuneSetPosition.position;
                  tbkAbc += ',rep:';
                  tbkAbc += tuneSetPositionPlayInfo.repeat;
                  tbkAbc += ',arr:{';
                  var firstPart = true;
                  for (var w = 0; w < tuneSetPositionPlayInfo.partPlayInfos.length; w++) {
                    if (firstPart) {
                      firstPart = false;
                    } else {
                      tbkAbc += ',';
                    }
                    tbkAbc += tuneSetPositionPlayInfo.partPlayInfos[w].part;
                    tbkAbc += ':';
                    tbkAbc += tuneSetPositionPlayInfo.partPlayInfos[w].playInfo;
                  }
                  tbkAbc += '},ant:';
                  tbkAbc += tuneSetPositionPlayInfo.annotation;
                  tbkAbc += '\n';
                }
              }
            }
          }
        }
        tbkAbc += '\n';
        return tbkAbc;
      }
      function writeTuneAbc(tune, tuneSetPositions, abcOption) {
        var tuneAbc = '';
        if (!abcOption.tuneSet && !abcOption.playDate && !abcOption.skill && !abcOption.color && !abcOption.annotation && !abcOption.website && !abcOption.video) {
          tuneAbc = tune.pure;
        } else {
          tuneAbc = writeTuneAbcWithEtbkDirectives(tune, tuneSetPositions, 'X:', abcOption);
        }
        if (!abcOption.fingering) {
          tuneAbc = tuneAbc.replace(eTBK_PATTERN_FINGER, '');
        }
        return tuneAbc;
      }
      function tuneUp(tune) {
        var neu = escape(tune.pure);
        var Reihe = neu.split('%0D%0A');
        Reihe = neu.split('%0A');
        for (var i = 0; i < Reihe.length; ++i) {
          Reihe[i] = unescape(Reihe[i]);
          var Aktuellereihe = Reihe[i].split('');
          if (Aktuellereihe[0] == 'A' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'B' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'C' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'D' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'E' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'F' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'G' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'H' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'I' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'J' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'L' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'M' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'N' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'O' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'P' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'Q' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'R' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'S' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'T' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'U' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'V' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'W' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'X' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'Y' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'Z' && Aktuellereihe[1] == ':') {
          } else if (Aktuellereihe[0] == 'K' && Aktuellereihe[1] == ':') {
            var Leerzeichenweg = Reihe[i].split(' ');
            var sindweg = Leerzeichenweg.join('');
            Aktuellereihe = sindweg.split('');
            if (Aktuellereihe[3] == '#' || Aktuellereihe[3] == 'b') {
              Aktuellereihe[3] = '';
            }
            if (Aktuellereihe[2] == 'C') {
              Aktuellereihe[2] = 'D';
              Reihe[i] = Aktuellereihe.join('');
            } else if (Aktuellereihe[2] == 'D') {
              Aktuellereihe[2] = 'E';
              Reihe[i] = Aktuellereihe.join('');
            } else if (Aktuellereihe[2] == 'E') {
              Aktuellereihe[2] = 'F';
              Reihe[i] = Aktuellereihe.join('');
            } else if (Aktuellereihe[2] == 'F') {
              Aktuellereihe[2] = 'G';
              Reihe[i] = Aktuellereihe.join('');
            } else if (Aktuellereihe[2] == 'G') {
              Aktuellereihe[2] = 'A';
              Reihe[i] = Aktuellereihe.join('');
            } else if (Aktuellereihe[2] == 'A') {
              Aktuellereihe[2] = 'B';
              Reihe[i] = Aktuellereihe.join('');
            } else if (Aktuellereihe[2] == 'B') {
              Aktuellereihe[2] = 'C';
              Reihe[i] = Aktuellereihe.join('');
            } else {
            }
          } else {
            var Derarray = Reihe[i].split('');
            for (var x = 0; x < Derarray.length; ++x) {
              var allefertig = false;
              var mitzaehl = 0;
              if (Derarray[x + 1] == '\'' || Derarray[x + 1] == ',') {
                do {
                  mitzaehl = mitzaehl + 1;
                  if (Derarray[x + mitzaehl] == '\'') {
                    Derarray[x] = Derarray[x] + '\'';
                    Derarray[x + mitzaehl] = '';
                  } else if (Derarray[x + mitzaehl] == ',') {
                    Derarray[x] = Derarray[x] + ',';
                    Derarray[x + mitzaehl] = '';
                  } else {
                    allefertig = true;
                  }
                } while (allefertig == false);
              } else {
              }
            }
            for (var y = 0; y < Derarray.length; ++y) {
              var Miniarray = Derarray[y].split('');
              if (Miniarray[0] == 'B' && Miniarray[1] == ',') {
                Miniarray[0] = 'C';
                Miniarray[1] = '';
              } else if (Miniarray[0] == 'b' && Miniarray[1] == '\'') {
                Miniarray[0] = 'c';
                Miniarray[1] = '\'\'';
              } else if (Miniarray[0] == 'C') {
                Miniarray[0] = 'D';
              } else if (Miniarray[0] == 'D') {
                Miniarray[0] = 'E';
              } else if (Miniarray[0] == 'E') {
                Miniarray[0] = 'F';
              } else if (Miniarray[0] == 'F') {
                Miniarray[0] = 'G';
              } else if (Miniarray[0] == 'G') {
                Miniarray[0] = 'A';
              } else if (Miniarray[0] == 'A') {
                Miniarray[0] = 'B';
              } else if (Miniarray[0] == 'B') {
                Miniarray[0] = 'c';
              } else if (Miniarray[0] == 'c') {
                Miniarray[0] = 'd';
              } else if (Miniarray[0] == 'd') {
                Miniarray[0] = 'e';
              } else if (Miniarray[0] == 'e') {
                Miniarray[0] = 'f';
              } else if (Miniarray[0] == 'f') {
                Miniarray[0] = 'g';
              } else if (Miniarray[0] == 'g') {
                Miniarray[0] = 'a';
              } else if (Miniarray[0] == 'a') {
                Miniarray[0] = 'b';
              } else if (Miniarray[0] == 'b') {
                Miniarray[0] = 'c\'';
              }
              Derarray[y] = Miniarray.join('');
            }
            var alleszusammen = Derarray.join('');
            Reihe[i] = alleszusammen;
          }
        }
        tune.pure = Reihe.join('\n');
        return tune;
      }
      function tuneDown(tune) {
        var neu = escape(tune.pure);
        var Reihe = neu.split('%0D%0A');
        Reihe = neu.split('%0A');
        for (var i = 0; i < Reihe.length; ++i) {
          Reihe[i] = unescape(Reihe[i]);
          var Aktuellereihe = Reihe[i].split('');
          if (Aktuellereihe[0] == 'A' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'B' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'C' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'D' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'E' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'F' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'G' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'H' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'I' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'J' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'L' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'M' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'N' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'O' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'P' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'Q' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'R' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'S' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'T' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'U' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'V' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'W' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'X' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'Y' && Aktuellereihe[1] == ':' || Aktuellereihe[0] == 'Z' && Aktuellereihe[1] == ':') {
          } else if (Aktuellereihe[0] == 'K' && Aktuellereihe[1] == ':') {
            var Leerzeichenweg = Reihe[i].split(' ');
            var sindweg = Leerzeichenweg.join('');
            Aktuellereihe = sindweg.split('');
            if (Aktuellereihe[3] == '#' || Aktuellereihe[3] == 'b') {
              Aktuellereihe[3] = '';
            }
            if (Aktuellereihe[2] == 'C') {
              Aktuellereihe[2] = 'B';
              Reihe[i] = Aktuellereihe.join('');
            } else if (Aktuellereihe[2] == 'D') {
              Aktuellereihe[2] = 'C';
              Reihe[i] = Aktuellereihe.join('');
            } else if (Aktuellereihe[2] == 'E') {
              Aktuellereihe[2] = 'D';
              Reihe[i] = Aktuellereihe.join('');
            } else if (Aktuellereihe[2] == 'F') {
              Aktuellereihe[2] = 'E';
              Reihe[i] = Aktuellereihe.join('');
            } else if (Aktuellereihe[2] == 'G') {
              Aktuellereihe[2] = 'F';
              Reihe[i] = Aktuellereihe.join('');
            } else if (Aktuellereihe[2] == 'A') {
              Aktuellereihe[2] = 'G';
              Reihe[i] = Aktuellereihe.join('');
            } else if (Aktuellereihe[2] == 'B') {
              Aktuellereihe[2] = 'A';
              Reihe[i] = Aktuellereihe.join('');
            } else {
            }
          } else {
            var Derarray = Reihe[i].split('');
            for (var x = 0; x < Derarray.length; ++x) {
              var allefertig = false;
              var mitzaehl = 0;
              if (Derarray[x + 1] == '\'' || Derarray[x + 1] == ',') {
                do {
                  mitzaehl = mitzaehl + 1;
                  if (Derarray[x + mitzaehl] == '\'') {
                    Derarray[x] = Derarray[x] + '\'';
                    Derarray[x + mitzaehl] = '';
                  } else if (Derarray[x + mitzaehl] == ',') {
                    Derarray[x] = Derarray[x] + ',';
                    Derarray[x + mitzaehl] = '';
                  } else {
                    allefertig = true;
                  }
                } while (allefertig == false);
              } else {
              }
            }
            for (var y = 0; y < Derarray.length; ++y) {
              var Miniarray = Derarray[y].split('');
              if (Miniarray[0] == 'C' && Miniarray[1] == ',') {
                Miniarray[0] = 'B';
                Miniarray[1] = ',,';
              } else if (Miniarray[0] == 'c' && Miniarray[1] == '\'') {
                Miniarray[0] = 'b';
                Miniarray[1] = '';
              } else if (Miniarray[0] == 'C') {
                Miniarray[0] = 'B,';
              } else if (Miniarray[0] == 'D') {
                Miniarray[0] = 'C';
              } else if (Miniarray[0] == 'E') {
                Miniarray[0] = 'D';
              } else if (Miniarray[0] == 'F') {
                Miniarray[0] = 'E';
              } else if (Miniarray[0] == 'G') {
                Miniarray[0] = 'F';
              } else if (Miniarray[0] == 'A') {
                Miniarray[0] = 'G';
              } else if (Miniarray[0] == 'B') {
                Miniarray[0] = 'A';
              } else if (Miniarray[0] == 'c') {
                Miniarray[0] = 'B';
              } else if (Miniarray[0] == 'd') {
                Miniarray[0] = 'c';
              } else if (Miniarray[0] == 'e') {
                Miniarray[0] = 'd';
              } else if (Miniarray[0] == 'f') {
                Miniarray[0] = 'e';
              } else if (Miniarray[0] == 'g') {
                Miniarray[0] = 'f';
              } else if (Miniarray[0] == 'a') {
                Miniarray[0] = 'g';
              } else if (Miniarray[0] == 'b') {
                Miniarray[0] = 'a';
              }
              Derarray[y] = Miniarray.join('');
            }
            var alleszusammen = Derarray.join('');
            Reihe[i] = alleszusammen;
          }
        }
        tune.pure = Reihe.join('\n');
        return tune;
      }
      function getSampleAbc(tune, startFromBar, numberOfBars) {
        var tuneSplits = [];
        var barSplits = [];
        var barSplit = '';
        var barLength = 0;
        var dotsLineSplits = [];
        var newAbc = '';
        var beginOfLine = '';
        var barPattern = /\|/g;
        var barMatches = [];
        var titleCount = 0;
        var totBarCount = 0;
        var isHeaderLine = false;
        var isNeeded = false;
        var isBar = false;
        var isLastBar = false;
        var isInFocus = true;
        var simulateTitle = false;
        tuneSplits = tune.pure.split('\n');
        for (var i = 0; i < tuneSplits.length; i++) {
          isHeaderLine = false;
          isBar = false;
          isNeeded = false;
          simulateTitle = false;
          if (isInFocus) {
            beginOfLine = tuneSplits[i].substring(0, 2);
            if (beginOfLine == 'X:') {
              isHeaderLine = true;
              isNeeded = true;
            } else if (beginOfLine == 'M:') {
              isHeaderLine = true;
              isNeeded = true;
            } else if (beginOfLine == 'L:') {
              isHeaderLine = true;
              isNeeded = true;
            } else if (beginOfLine == 'K:') {
              isHeaderLine = true;
              isNeeded = true;
            } else if (beginOfLine == 'T:') {
              isHeaderLine = true;
              if (titleCount == 0) {
                simulateTitle = true;
                isNeeded = true;
              }
              titleCount = titleCount + 1;
            } else {
              barSplits = tuneSplits[i].split('\n');
              barSplits = barSplits[0].split('|');
              if (barSplits.length <= 1) {
                isHeaderLine = true;
                isNeeded = false;
              } else {
                for (var z = 0; z < barSplits.length; z++) {
                  barSplit = barSplits[z].replace(/^\s+|\s+$/g, '');
                  if (isInFocus) {
                    isBar = false;
                    isNeeded = false;
                    barLength = barSplit.length;
                    if (barLength == 0) {
                    } else if (barLength < 4) {
                      isNeeded = true;
                    } else {
                      isBar = true;
                      totBarCount = totBarCount + 1;
                    }
                    if (isBar) {
                      if (startFromBar <= totBarCount && totBarCount < startFromBar + numberOfBars) {
                        isNeeded = true;
                        if (totBarCount == startFromBar + numberOfBars - 1) {
                          isLastBar = true;
                        }
                      } else {
                        isInFocus = false;
                      }
                    }
                    if (isNeeded) {
                      newAbc = newAbc + barSplit;
                      newAbc = newAbc + '|';
                      if (isLastBar) {
                        isInFocus = false;
                      }
                    }
                  }
                }
              }
            }
            if (isHeaderLine && isNeeded) {
              if (simulateTitle) {
                newAbc = newAbc + 'T: ';
                newAbc = newAbc + '\n';
              } else {
                newAbc = newAbc + tuneSplits[i];
                newAbc = newAbc + '\n';
              }
            }
          }
        }
        return newAbc;
      }
      function addVideo(tuneBook, intTuneId, videoSource, videoCode, videoDescription) {
        var tune, video;
        tune = getTuneById(tuneBook, intTuneId);
        if (tune != null) {
          video = createVideo(videoSource, videoCode, videoDescription);
          tune.videos.push(video);
        }
        return video;
      }
      function addWebsite(tuneBook, intTuneId, url) {
        var tune, wsite;
        tune = getTuneById(tuneBook, intTuneId);
        if (tune != null) {
          wsite = createWebsite(url);
          tune.wsites.push(wsite);
        }
        return wsite;
      }
      function deleteVideo(tuneBook, intTuneId, videoSource, videoCode) {
        var tune, video, index, remove = false;
        tune = getTuneById(tuneBook, intTuneId);
        if (tune != null) {
          for (var i = 0; i < tune.videos.length; i++) {
            if (videoSource == tune.videos[i].source && videoCode == tune.videos[i].code) {
              index = i;
              remove = true;
            }
          }
          if (remove) {
            tune.videos.splice(index, 1);
          }
        }
      }
      function deleteWebsite(tuneBook, intTuneId, url) {
        var tune, wsite, index, remove = false;
        tune = getTuneById(tuneBook, intTuneId);
        if (tune != null) {
          for (var i = 0; i < tune.wsites.length; i++) {
            if (url == tune.wsites[i].url) {
              index = i;
              remove = true;
            }
          }
          if (remove) {
            tune.wsites.splice(index, 1);
          }
        }
      }
      function getVideoById(tuneBook, intTuneId, videoSource, videoCode) {
        var tune = getTuneById(tuneBook, intTuneId);
        if (tune != null) {
          for (var i = 0; i < tune.videos.length; i++) {
            if (videoSource == tune.videos[i].source && videoCode == tune.videos[i].code) {
              return tune.videos[i];
            }
          }
        }
        return null;
      }
      function getTuneById(tuneBook, intTuneId) {
        if (tuneBook != null) {
          for (var i = 0; i < tuneBook.tuneSets.length; i++) {
            for (var z = 0; z < tuneBook.tuneSets[i].tuneSetPositions.length; z++) {
              if (intTuneId == tuneBook.tuneSets[i].tuneSetPositions[z].tune.intTuneId) {
                return tuneBook.tuneSets[i].tuneSetPositions[z].tune;
              }
            }
          }
        }
        return null;
      }
      function getTuneSetById(tuneBook, tuneSetId) {
        if (tuneBook != null) {
          for (var i = 0; i < tuneBook.tuneSets.length; i++) {
            if (tuneSetId == tuneBook.tuneSets[i].tuneSetId) {
              return tuneBook.tuneSets[i];
            }
          }
        }
        return null;
      }
      function getPlaylistById(tuneBook, playlistId) {
        if (tuneBook != null) {
          for (var i = 0; i < tuneBook.playlists.length; i++) {
            if (playlistId == tuneBook.playlists[i].id) {
              return tuneBook.playlists[i];
            }
          }
        }
        return null;
      }
      function extractTunes(tuneSets) {
        var tunes = [];
        var addToTunes = false;
        for (var i = 0; i < tuneSets.length; i++) {
          for (var z = 0; z < tuneSets[i].tuneSetPositions.length; z++) {
            addToTunes = true;
            for (var y = 0; y < tunes.length; y++) {
              if (tunes[y].intTuneId == tuneSets[i].tuneSetPositions[z].tune.intTuneId) {
                addToTunes = false;
              }
            }
            if (addToTunes) {
              tunes.push(tuneSets[i].tuneSetPositions[z].tune);
            }
          }
        }
        return tunes;
      }
      function extractTunesWithinPlayDatePeriod(tuneBook, playDateFilter) {
        var tunes = [];
        var addToTunes = false;
        if (tuneBook != null) {
          for (var i = 0; i < tuneBook.tuneSets.length; i++) {
            for (var z = 0; z < tuneBook.tuneSets[i].tuneSetPositions.length; z++) {
              addToTunes = true;
              var today = moment();
              var days = 0;
              days = 0;
              var playDate = tuneBook.tuneSets[i].tuneSetPositions[z].tune.lastPlayed;
              if (playDate != undefined && playDate != null) {
                var checkDay = moment(tuneBook.tuneSets[i].tuneSetPositions[z].tune.lastPlayed);
                if (checkDay != null && checkDay != undefined) {
                  days = today.diff(checkDay, 'days');
                  if (playDateFilter == 'All Tunes') {
                  } else {
                    if (playDateFilter == 'Played Last Day' && days > 1) {
                      addToTunes = false;
                    } else if (playDateFilter == 'Played Last Week' && days > 7) {
                      addToTunes = false;
                    } else if (playDateFilter == 'Played Last Month' && days > 30) {
                      addToTunes = false;
                    } else if (playDateFilter == 'Played Last Year' && days > 365) {
                      addToTunes = false;
                    } else if (playDateFilter == 'Played Never') {
                      addToTunes = false;
                    }
                  }
                } else {
                  if (playDateFilter == 'Played Never') {
                  } else {
                    addToTunes = false;
                  }
                }
                for (var y = 0; y < tunes.length; y++) {
                  if (tunes[y].intTuneId == tuneBook.tuneSets[i].tuneSetPositions[z].tune.intTuneId) {
                    addToTunes = false;
                  }
                }
                if (addToTunes) {
                  tunes.push(tuneBook.tuneSets[i].tuneSetPositions[z].tune);
                }
              }
            }
          }
        }
        return tunes;
      }
      function extractSetsWithinPlayDatePeriod(tuneBook, playDateFilter) {
        var sets = [];
        var tunePlayedWithinPlayDatePeriod = true;
        var tunesPlayedWithinPlayDatePeriod = 0;
        if (tuneBook != null) {
          for (var i = 0; i < tuneBook.tuneSets.length; i++) {
            tunePlayedWithinPlayDatePeriod = true;
            tunesPlayedWithinPlayDatePeriod = 0;
            for (var z = 0; z < tuneBook.tuneSets[i].tuneSetPositions.length; z++) {
              var today = moment();
              var days = 0;
              days = 0;
              var playDate = tuneBook.tuneSets[i].tuneSetPositions[z].tune.lastPlayed;
              if (playDate != undefined && playDate != null) {
                var checkDay = moment(tuneBook.tuneSets[i].tuneSetPositions[z].tune.lastPlayed);
                if (checkDay != null && checkDay != undefined) {
                  days = today.diff(checkDay, 'days');
                  if (playDateFilter == 'All Sets') {
                  } else {
                    if (playDateFilter == 'Played Last Day' && days > 1) {
                      tunePlayedWithinPlayDatePeriod = false;
                    } else if (playDateFilter == 'Played Last Week' && days > 7) {
                      tunePlayedWithinPlayDatePeriod = false;
                    } else if (playDateFilter == 'Played Last Month' && days > 30) {
                      tunePlayedWithinPlayDatePeriod = false;
                    } else if (playDateFilter == 'Played Last Year' && days > 365) {
                      tunePlayedWithinPlayDatePeriod = false;
                    } else if (playDateFilter == 'Played Never') {
                      tunePlayedWithinPlayDatePeriod = false;
                    }
                  }
                } else {
                  if (playDateFilter == 'Played Never') {
                  } else {
                    tunePlayedWithinPlayDatePeriod = false;
                  }
                }
                if (tunePlayedWithinPlayDatePeriod) {
                  tunesPlayedWithinPlayDatePeriod = tunesPlayedWithinPlayDatePeriod + 1;
                }
              }
            }
            if (tunesPlayedWithinPlayDatePeriod > 0) {
              sets.push(tuneBook.tuneSets[i]);
            }
          }
        }
        return sets;
      }
      function extractTuneSetPositions(tuneSets) {
        var tuneSetPositions = [];
        for (var i = 0; i < tuneSets.length; i++) {
          for (var z = 0; z < tuneSets[i].tuneSetPositions.length; z++) {
            tuneSetPositions.push(tuneSets[i].tuneSetPositions[z]);
          }
        }
        return tuneSetPositions;
      }
      function extractFirstTuneSetPositions(tuneSets) {
        var tuneSetPositions = [];
        for (var i = 0; i < tuneSets.length; i++) {
          for (var z = 0; z < tuneSets[i].tuneSetPositions.length; z++) {
            if (tuneSets[i].tuneSetPositions[z].position == '1') {
              tuneSetPositions.push(tuneSets[i].tuneSetPositions[z]);
            }
          }
        }
        return tuneSetPositions;
      }
      function extractFirstTuneSetPosition(tuneSet) {
        for (var z = 0; z < tuneSet.tuneSetPositions.length; z++) {
          if (tuneSet.tuneSetPositions[z].position == '1') {
            return tuneSet.tuneSetPositions[z];
          }
        }
      }
      function getTuneSetPositionByPosition(tuneSet, position) {
        for (var z = 0; z < tuneSet.tuneSetPositions.length; z++) {
          if (tuneSet.tuneSetPositions[z].position == position) {
            return tuneSet.tuneSetPositions[z];
          }
        }
      }
      function getTuneSetsByIntTuneId(tuneBook, intTuneId) {
        var tuneSets = [];
        if (tuneBook != null) {
          for (var i = 0; i < tuneBook.tuneSets.length; i++) {
            for (var z = 0; z < tuneBook.tuneSets[i].tuneSetPositions.length; z++) {
              if (intTuneId == tuneBook.tuneSets[i].tuneSetPositions[z].tune.intTuneId) {
                tuneSets.push(tuneBook.tuneSets[i]);
              }
            }
          }
        }
        return tuneSets;
      }
      function getTuneSetPositionsByIntTuneId(tuneBook, intTuneId) {
        var tuneSetPositions = [];
        if (tuneBook != null) {
          for (var i = 0; i < tuneBook.tuneSets.length; i++) {
            for (var z = 0; z < tuneBook.tuneSets[i].tuneSetPositions.length; z++) {
              if (intTuneId == tuneBook.tuneSets[i].tuneSetPositions[z].tune.intTuneId) {
                tuneSetPositions.push(tuneBook.tuneSets[i].tuneSetPositions[z]);
              }
            }
          }
        }
        return tuneSetPositions;
      }
      function getTuneSetsAsTuneSetPositions(tuneBook, intTuneId) {
        var tuneSetIds = [];
        var tuneSetPositions = [];
        if (tuneBook != null) {
          for (var i = 0; i < tuneBook.tuneSets.length; i++) {
            for (var z = 0; z < tuneBook.tuneSets[i].tuneSetPositions.length; z++) {
              if (intTuneId == tuneBook.tuneSets[i].tuneSetPositions[z].tune.intTuneId) {
                tuneSetIds.push(tuneBook.tuneSets[i].tuneSetId);
              }
            }
          }
        }
        for (var y = 0; y < tuneSetIds.length; y++) {
          getTuneSetPositionsForTuneSetId(tuneBook, tuneSetIds[y], tuneSetPositions);
        }
        return tuneSetPositions;
      }
      function getTuneSetPositionsForTuneSetId(tuneBook, tuneSetId, tuneSetPositions) {
        if (tuneBook != null) {
          for (var i = 0; i < tuneBook.tuneSets.length; i++) {
            for (var z = 0; z < tuneBook.tuneSets[i].tuneSetPositions.length; z++) {
              if (tuneSetId == tuneBook.tuneSets[i].tuneSetPositions[z].tuneSetId) {
                tuneSetPositions.push(tuneBook.tuneSets[i].tuneSetPositions[z]);
              }
            }
          }
        }
        return tuneSetPositions;
      }
      function eliminateThe(string) {
        var theSplits = [];
        if (string != 'undefined' && string != null) {
          theSplits = string.split(',');
        }
        return theSplits[0];
      }
      ;
      function getPlaylistPositionsByTuneSetId(tuneBook, tuneSetId) {
        var playlist, playlistPositions;
        playlistPositions = [];
        for (var i = 0; i < tuneBook.playlists.length; i++) {
          playlist = tuneBook.playlists[i];
          for (var z = 0; z < playlist.playlistPositions.length; z++) {
            if (playlist.playlistPositions[z].tuneSet.tuneSetId == tuneSetId) {
              playlistPositions.push(playlist.playlistPositions[z]);
            }
          }
        }
        return playlistPositions;
      }
      function getPlaylistPosition(tuneBook, playlistId, playlistPositionNr) {
        var playlist, playlistPosition;
        playlist = getPlaylistById(tuneBook, playlistId);
        for (var z = 0; z < playlist.playlistPositions.length; z++) {
          if (playlist.playlistPositions[z].position == playlistPositionNr) {
            playlistPosition = playlist.playlistPositions[z];
          }
        }
        return playlistPosition;
      }
      function getPlaylistsByTuneSetId(tuneBook, tuneSetId) {
        var playlist, playlists, playlistAdded;
        playlists = [];
        for (var i = 0; i < tuneBook.playlists.length; i++) {
          playlist = tuneBook.playlists[i];
          playlistAdded = false;
          for (var z = 0; z < playlist.playlistPositions.length && !playlistAdded; z++) {
            if (playlist.playlistPositions[z].tuneSet.tuneSetId == tuneSetId) {
              playlists.push(playlist);
              playlistAdded = true;
            }
          }
        }
        return playlists;
      }
      function filterTuneSets(tuneBook, filterOptions) {
        var keyMatch = false;
        var typeMatch = false;
        var colorMatch = false;
        var skillMatch = false;
        var eventMatch = false;
        var bandMatch = false;
        var playMatch = false;
        var playMin, playMax, updateMin, updateMax;
        var freqMatch = false;
        var updateMatch = false;
        var tuneSetsFiltered = [];
        var playlists;
        for (var i = 0; i < tuneBook.tuneSets.length; i++) {
          keyMatch = false;
          typeMatch = false;
          colorMatch = false;
          skillMatch = false;
          eventMatch = false;
          bandMatch = false;
          playMatch = false;
          freqMatch = false;
          updateMatch = false;
          if (filterOptions.key == '' || filterOptions.key == 'All Keys' || filterOptions.key == null) {
            keyMatch = true;
          }
          if (filterOptions.type == '' || filterOptions.type == 'All Types' || filterOptions.type == null) {
            typeMatch = true;
          }
          if (filterOptions.color == '' || filterOptions.color == 'All Colors' || filterOptions.color == null) {
            colorMatch = true;
          }
          if (filterOptions.skill == '' || filterOptions.skill == '?' || filterOptions.skill == null) {
            skillMatch = true;
          }
          if (filterOptions.plmin == '' || filterOptions.plmin == '05.10.2012' || filterOptions.plmin == null || filterOptions.plmax == '' || filterOptions.plmax == null) {
            playMatch = true;
          } else {
            playMin = moment(filterOptions.plmin, 'DD.MM.YYYY').startOf('day');
            playMax = moment(filterOptions.plmax, 'DD.MM.YYYY').endOf('day');
          }
          if (filterOptions.updmin == '' || filterOptions.updmin == '05.10.2012' || filterOptions.updmin == null || filterOptions.updmax == '' || filterOptions.updmax == null) {
            updateMatch = true;
          } else {
            updateMin = moment(filterOptions.updmin, 'DD.MM.YYYY').startOf('day');
            updateMax = moment(filterOptions.updmax, 'DD.MM.YYYY').endOf('day');
          }
          if (filterOptions.freqcomp == '' || filterOptions.freqcomp == null || filterOptions.freq == '' || filterOptions.freq == null) {
            freqMatch = true;
          }
          if (filterOptions.event == '' || filterOptions.event == 'All Events' || filterOptions.event == null) {
            eventMatch = true;
          }
          if (filterOptions.band == '' || filterOptions.band == 'All Bands' || filterOptions.band == null) {
            bandMatch = true;
          }
          if (!eventMatch || !bandMatch) {
            playlists = getPlaylistsByTuneSetId(tuneBook, tuneBook.tuneSets[i].tuneSetId);
            for (var y = 0; y < playlists.length; y++) {
              if (filterOptions.event == playlists[y].event) {
                eventMatch = true;
              }
              if (filterOptions.band == playlists[y].band) {
                bandMatch = true;
              }
            }
          }
          if (!keyMatch || !typeMatch || !colorMatch || !skillMatch || !playMatch || !updateMatch || !freqMatch) {
            for (var z = 0; z < tuneBook.tuneSets[i].tuneSetPositions.length; z++) {
              if (!keyMatch && tuneBook.tuneSets[i].tuneSetPositions[z].tune.key == filterOptions.key) {
                keyMatch = true;
              }
              if (!typeMatch && tuneBook.tuneSets[i].tuneSetPositions[z].tune.type == filterOptions.type) {
                typeMatch = true;
              }
              if (!colorMatch && tuneBook.tuneSets[i].tuneSetPositions[z].tune.color == filterOptions.color) {
                colorMatch = true;
              }
              if (!skillMatch && tuneBook.tuneSets[i].tuneSetPositions[z].tune.skill == filterOptions.skill) {
                skillMatch = true;
              }
              if (!playMatch && tuneBook.tuneSets[i].tuneSetPositions[z].tune.lastPlayed != null) {
                var lastPlayed = moment(tuneBook.tuneSets[i].tuneSetPositions[z].tune.lastPlayed);
                if (!lastPlayed.isBefore(playMin) && !lastPlayed.isAfter(playMax)) {
                  playMatch = true;
                }
              }
              if (!updateMatch && tuneBook.tuneSets[i].tuneSetPositions[z].tune.lastModified != null) {
                var lastModified = moment(tuneBook.tuneSets[i].tuneSetPositions[z].tune.lastModified);
                if (!lastModified.isBefore(updateMin) && !lastModified.isAfter(updateMax)) {
                  updateMatch = true;
                }
              }
              if (!freqMatch) {
                if (filterOptions.freqcomp == 'LT' && parseInt(tuneBook.tuneSets[i].tuneSetPositions[z].tune.frequencyPlayed) < parseInt(filterOptions.freq) || filterOptions.freqcomp == 'GE' && parseInt(tuneBook.tuneSets[i].tuneSetPositions[z].tune.frequencyPlayed) >= parseInt(filterOptions.freq)) {
                  freqMatch = true;
                }
              }
            }
          }
          if (keyMatch && typeMatch && colorMatch && skillMatch && eventMatch && bandMatch && playMatch && updateMatch && freqMatch) {
            tuneSetsFiltered.push(tuneBook.tuneSets[i]);
          }
        }
        return tuneSetsFiltered;
      }
      function filterTunes(tunes, filterOptions) {
        var keyMatch = false;
        var typeMatch = false;
        var colorMatch = false;
        var skillMatch = false;
        var playMatch = false;
        var playMin, playMax, updateMin, updateMax;
        var freqMatch = false;
        var updateMatch = false;
        var tunesFiltered = [];
        for (var i = 0; i < tunes.length; i++) {
          keyMatch = false;
          typeMatch = false;
          colorMatch = false;
          skillMatch = false;
          playMatch = false;
          freqMatch = false;
          updateMatch = false;
          if (filterOptions.key == '' || filterOptions.key == 'All Keys' || filterOptions.key == null) {
            keyMatch = true;
          }
          if (filterOptions.type == '' || filterOptions.type == 'All Types' || filterOptions.type == null) {
            typeMatch = true;
          }
          if (filterOptions.color == '' || filterOptions.color == 'All Colors' || filterOptions.color == null) {
            colorMatch = true;
          }
          if (filterOptions.skill == '' || filterOptions.skill == '?' || filterOptions.skill == null) {
            skillMatch = true;
          }
          if (filterOptions.plmin == '' || filterOptions.plmin == '05.10.2012' || filterOptions.plmin == null || filterOptions.plmax == '' || filterOptions.plmax == null) {
            playMatch = true;
          } else {
            playMin = moment(filterOptions.plmin, 'DD.MM.YYYY').startOf('day');
            playMax = moment(filterOptions.plmax, 'DD.MM.YYYY').endOf('day');
          }
          if (filterOptions.updmin == '' || filterOptions.updmin == '05.10.2012' || filterOptions.updmin == null || filterOptions.updmax == '' || filterOptions.updmax == null) {
            updateMatch = true;
          } else {
            updateMin = moment(filterOptions.updmin, 'DD.MM.YYYY').startOf('day');
            updateMax = moment(filterOptions.updmax, 'DD.MM.YYYY').endOf('day');
          }
          if (filterOptions.freqcomp == '' || filterOptions.freqcomp == null || filterOptions.freq == '' || filterOptions.freq == null) {
            freqMatch = true;
          }
          if (!keyMatch || !typeMatch || !colorMatch || !skillMatch || !playMatch || !updateMatch || !freqMatch) {
            if (!keyMatch && tunes[i].key == filterOptions.key) {
              keyMatch = true;
            }
            if (!typeMatch && tunes[i].type == filterOptions.type) {
              typeMatch = true;
            }
            if (!colorMatch && tunes[i].color == filterOptions.color) {
              colorMatch = true;
            }
            if (!skillMatch && tunes[i].skill == filterOptions.skill) {
              skillMatch = true;
            }
            if (!playMatch && tunes[i].lastPlayed != null) {
              var lastPlayed = moment(tunes[i].lastPlayed);
              if (!lastPlayed.isBefore(playMin) && !lastPlayed.isAfter(playMax)) {
                playMatch = true;
              }
            }
            if (!updateMatch && tunes[i].lastModified != null) {
              var lastModified = moment(tunes[i].lastModified);
              if (!lastModified.isBefore(updateMin) && !lastModified.isAfter(updateMax)) {
                updateMatch = true;
              }
            }
            if (!freqMatch) {
              if (filterOptions.freqcomp == 'LT' && parseInt(tunes[i].frequencyPlayed) < parseInt(filterOptions.freq) || filterOptions.freqcomp == 'GE' && parseInt(tunes[i].frequencyPlayed) >= parseInt(filterOptions.freq)) {
                freqMatch = true;
              }
            }
          }
          if (keyMatch && typeMatch && colorMatch && skillMatch && playMatch && updateMatch && freqMatch) {
            tunesFiltered.push(tunes[i]);
          }
        }
        return tunesFiltered;
      }
      function initializeTuneSetPositionPlayInfosForPlaylist(tuneBook, playlistId) {
        var playlist, playlistPosition, tuneSet, tuneSetPosition, tuneSetPositionPlayInfo, partPlayInfos;
        playlist = getPlaylistById(tuneBook, playlistId);
        for (var i = 0; i < playlist.playlistPositions.length; i++) {
          playlistPosition = playlist.playlistPositions[i];
          tuneSet = playlistPosition.tuneSet;
          for (var z = 0; z < tuneSet.tuneSetPositions.length; z++) {
            tuneSetPositionPlayInfo = undefined;
            tuneSetPosition = tuneSet.tuneSetPositions[z];
            tuneSetPositionPlayInfo = getTuneSetPositionPlayInfo(tuneBook, playlistPosition, tuneSetPosition);
            if (tuneSetPositionPlayInfo == undefined) {
              partPlayInfos = [];
              tuneSetPositionPlayInfo = createTuneSetPositionPlayInfo(playlistPosition, tuneSetPosition, tuneSetPosition.repeat, partPlayInfos, tuneSetPosition.annotation);
              tuneBook.tuneSetPositionPlayInfos.push(tuneSetPositionPlayInfo);
            }
            tuneSetPosition.currentTuneSetPositionPlayInfo = tuneSetPositionPlayInfo;
          }
        }
      }
      eTBk.DEFAULT_COLOR = eTBK_DEFAULT_COLOR;
      eTBk.PATTERN_FINGER = eTBK_PATTERN_FINGER;
      eTBk.EXAMPLE_FILENAME = eTBk_EXAMPLE_FILENAME;
      eTBk.EXAMPLE_FILENAME_WITHOUTABC = eTBk_EXAMPLE_FILENAME_WITHOUTABC;
      eTBk.EXAMPLE_VERSION = eTBk_EXAMPLE_VERSION;
      eTBk.writeAbc = function (abcOption) {
        return writeAbc(currentTuneBook, abcOption);
      };
      eTBk.eliminateThe = function (string) {
        return eliminateThe(string);
      };
      eTBk.createDefaultAbcOption = function () {
        return createDefaultAbcOption();
      };
      eTBk.getSampleAbc = function (tune) {
        return getSampleAbc(tune, 1, 4);
      };
      eTBk.tuneUp = function (intTuneId) {
        var tune = eTBk.getTune(intTuneId);
        tune.key = eTBk.getTuneKey(tuneUp(tune));
      };
      eTBk.tuneDown = function (intTuneId) {
        var tune = eTBk.getTune(intTuneId);
        tune.key = eTBk.getTuneKey(tuneDown(tune));
      };
      eTBk.initializeTuneSet = function (intTuneId) {
        return initializeTuneSet(currentTuneBook.tuneSets, eTBk.getTune(intTuneId));
      };
      eTBk.initializePartPlayInfo = function () {
        return createPartPlayInfo('', '');
      };
      eTBk.initializeTuneSetPositionPlayInfosForPlaylist = function (playlistId) {
        initializeTuneSetPositionPlayInfosForPlaylist(currentTuneBook, playlistId);
      };
      eTBk.initializeTuneAndTuneSet = function () {
        if (eTBk.getCurrentTuneBook == null) {
          currentTuneBook = eTBk.initializeTuneBook();
          return currentTuneBook.tuneSets[0];
        } else {
          return initializeTuneAndTuneSet(currentTuneBook.tuneSets);
        }
      };
      eTBk.getTuneKey = function (tune) {
        return getAbcValue(tune.pure, 'K:', 'undefined');
      };
      eTBk.getTuneTitle = function (tune) {
        return getAbcValue(tune.pure, 'T:', 'undefined');
      };
      eTBk.getTuneType = function (tune) {
        return getAbcValue(tune.pure, 'R:', 'undefined').toLowerCase();
      };
      eTBk.getTuneId = function (tune) {
        return getAbcValue(tune.pure, 'X:', 'undefined');
      };
      eTBk.getTuneSite = function (tune, siteType) {
        var siteDirective = '%%etbk:' + siteType + ' ';
        return getAbcValue(tune.pure, siteDirective, '');
      };
      eTBk.addTunePlayDate = function (tune, newDate) {
        addTunePlayDate(tune, newDate);
      };
      eTBk.addTuneSetPlayDate = function (tuneSet, newDate) {
        addTuneSetPlayDate(tuneSet, newDate);
      };
      eTBk.setFrequencyPlayed = function (tuneSet) {
        setFrequencyPlayed(tuneSet);
      };
      eTBk.saveColorDirective = function (tuneSetPosition) {
        saveColorDirective(tuneSetPosition);
      };
      eTBk.saveSkillDirective = function (tuneSetPosition) {
        saveSkillDirective(tuneSetPosition);
      };
      eTBk.setRandomSort = function (tuneBook) {
        setRandomSort(tuneBook);
      };
      eTBk.storeTuneBookAbc = function () {
        localStorage.setItem(eTBK_STORAGE_ID_TUNEBOOK, JSON.stringify(writeAbc(currentTuneBook, createDefaultAbcOption())));
      };
      eTBk.storeSettings = function (settings) {
        localStorage.setItem(eTBK_STORAGE_ID_SETTINGS, JSON.stringify(settings));
      };
      eTBk.initializeTuneBook = function () {
        var abc = '';
        var includeEtbkDirective = true;
        abc = initializeAbcHeader();
        abc += 'X: 1';
        abc += '\n';
        abc += 'T: New Tune';
        abc += '\n';
        currentTuneBook = new TuneBook(abc);
        currentTuneBook.tuneSets[0].tuneSetPositions[0].tune.intTuneId = 1;
        return currentTuneBook;
      };
      eTBk.getSettingsFromStore = function () {
        var settings = [];
        settings = JSON.parse(localStorage.getItem(eTBK_STORAGE_ID_SETTINGS) || '[]');
        return settings;
      };
      eTBk.moveTuneSetPosition = function (sourceTuneSetId, sourcePosition, targetTuneSetId, targetPosition, beforeOrAfter, moveOrCopy) {
        return moveTuneSetPosition(currentTuneBook, sourceTuneSetId, sourcePosition, targetTuneSetId, targetPosition, beforeOrAfter, moveOrCopy);
      };
      eTBk.moveUpPlaylistPosition = function (playlistId, position) {
        return moveUpPlaylistPosition(currentTuneBook, playlistId, position);
      };
      eTBk.moveDownPlaylistPosition = function (playlistId, position) {
        return moveDownPlaylistPosition(currentTuneBook, playlistId, position);
      };
      eTBk.addEmptyPlaylistPosition = function (playlistId) {
        return addEmptyPlaylistPosition(currentTuneBook, playlistId);
      };
      eTBk.addEmptyPlaylist = function () {
        return addEmptyPlaylist(currentTuneBook);
      };
      eTBk.deleteTuneSetPosition = function (iTuneSetId, iPosition) {
        return deleteTuneSetPosition(currentTuneBook, iTuneSetId, iPosition);
      };
      eTBk.deletePlaylistPosition = function (playlistId, position) {
        deletePlaylistPosition(currentTuneBook, playlistId, position);
      };
      eTBk.deletePlaylist = function (playlistId) {
        deletePlaylist(currentTuneBook, playlistId);
      };
      eTBk.copyPlaylist = function (playlistId) {
        copyPlaylist(currentTuneBook, playlistId);
      };
      eTBk.getCurrentTuneBook = function () {
        if (currentTuneBook == null) {
          return getTuneBookFromLocalStorage();
        }
        return currentTuneBook;
      };
      eTBk.getTuneSet = function (tuneSetId) {
        return getTuneSetById(currentTuneBook, tuneSetId);
      };
      eTBk.getRandomTuneSetId = function (playDateFilter) {
        var sets = extractSetsWithinPlayDatePeriod(currentTuneBook, playDateFilter);
        var tuneSetIndex = getRandomTuneSetIndex(sets);
        return sets[tuneSetIndex].tuneSetId;
      };
      eTBk.getRandomIntTuneId = function (playDateFilter) {
        var tunes = extractTunesWithinPlayDatePeriod(currentTuneBook, playDateFilter);
        var tuneIndex = getRandomTuneIndex(tunes);
        return tunes[tuneIndex].intTuneId;
      };
      eTBk.getTune = function (intTuneId) {
        return getTuneById(currentTuneBook, intTuneId);
      };
      eTBk.deleteTuneSetPositionsAndTune = function (intTuneId) {
        var tuneSets = [];
        tuneSets = getTuneSetsByIntTuneId(eTBk.getCurrentTuneBook(), intTuneId);
        for (var i = 0; i < tuneSets.length; i++) {
          deleteTuneSetPositionsAndTune(tuneSets[i], intTuneId);
        }
      };
      eTBk.getTunes = function () {
        return extractTunes(eTBk.getCurrentTuneBook().tuneSets);
      };
      eTBk.getPlaylists = function () {
        return eTBk.getCurrentTuneBook().playlists;
      };
      eTBk.getPlaylist = function (playlistId) {
        return getPlaylistById(currentTuneBook, playlistId);
      };
      eTBk.getTunesFiltered = function (filterOptions) {
        return filterTunes(extractTunes(filterTuneSets(currentTuneBook, filterOptions)), filterOptions);
      };
      eTBk.getFirstTuneSetPositions = function () {
        return extractFirstTuneSetPositions(eTBk.getCurrentTuneBook().tuneSets);
      };
      eTBk.getFirstTuneSetPosition = function (tuneSet) {
        return extractFirstTuneSetPosition(tuneSet);
      };
      eTBk.getFirstTuneSetPositionById = function (tuneSetId) {
        return extractFirstTuneSetPosition(getTuneSetById(currentTuneBook, tuneSetId));
      };
      eTBk.getTuneSetPositions = function () {
        return extractTuneSetPositions(eTBk.getCurrentTuneBook().tuneSets);
      };
      eTBk.getTuneSetPositionsFiltered = function (filterOptions) {
        return extractTuneSetPositions(filterTuneSets(currentTuneBook, filterOptions));
      };
      eTBk.getTuneSetsAsTuneSetPositions = function (intTuneId) {
        return getTuneSetsAsTuneSetPositions(eTBk.getCurrentTuneBook(), intTuneId);
      };
      eTBk.getTuneSetsByIntTuneId = function (intTuneId) {
        return getTuneSetsByIntTuneId(eTBk.getCurrentTuneBook(), intTuneId);
      };
      eTBk.getVideo = function (intTuneId, videoSource, videoCode) {
        return getVideoById(currentTuneBook, intTuneId, videoSource, videoCode);
      };
      eTBk.addVideo = function (intTuneId, videoSource, videoCode, videoDescription) {
        return addVideo(currentTuneBook, intTuneId, videoSource, videoCode, videoDescription);
      };
      eTBk.deleteVideo = function (intTuneId, videoSource, videoCode) {
        deleteVideo(currentTuneBook, intTuneId, videoSource, videoCode);
      };
      eTBk.addWebsite = function (intTuneId, url) {
        return addWebsite(currentTuneBook, intTuneId, url);
      };
      eTBk.deleteWebsite = function (intTuneId, url) {
        deleteWebsite(currentTuneBook, intTuneId, url);
      };
      eTBk.getSkillTypes = function () {
        var skillType = {};
        var skillTypes = [];
        for (var i = 1; i < 7; i++) {
          skillType = {};
          skillType.skill = i;
          if (skillType.skill == 1) {
            skillType.description = '?';
          } else if (skillType.skill == 2) {
            skillType.description = 'Ignorant';
          } else if (skillType.skill == 3) {
            skillType.description = 'Beginner';
          } else if (skillType.skill == 4) {
            skillType.description = 'Intermediate';
          } else if (skillType.skill == 5) {
            skillType.description = 'Advanced';
          } else if (skillType.skill == 6) {
            skillType.description = 'Master';
          }
          skillTypes.push(skillType);
        }
        return skillTypes;
      };
      eTBk.getTuneBookFromLocalStorage = function () {
        var abc = JSON.parse(localStorage.getItem(eTBK_STORAGE_ID_TUNEBOOK) || '[]');
        if (abc == undefined || abc == '') {
          currentTuneBook = null;
        } else {
          currentTuneBook = new TuneBook(abc);
        }
        return currentTuneBook;
      };
      eTBk.getTuneBookFromImportedFile = function (abc, fileName) {
        currentTuneBook = new TuneBook(abc);
        if (currentTuneBook.name == '') {
          currentTuneBook.name = fileName;
        }
        return currentTuneBook;
      };
      eTBk.getDefaultFromServer = function () {
        var jqxhr = $.ajax({
            url: eTBk.EXAMPLE_FILENAME,
            async: false,
            cache: false,
            dataType: 'text'
          });
        jqxhr.success(function (data) {
          currentTuneBook = new TuneBook(data);
        });
        jqxhr.error(function (data) {
          alert('Fehler beim Laden von ' + eTBk.EXAMPLE_FILENAME);
        });
        return currentTuneBook;
      };
      return eTBk;
    }(window.eTBk = window.eTBk || {});
  return eTBk;
});
angular.module('eTuneBookApp').directive('ngBlur', function () {
  return function (scope, elem, attrs) {
    elem.bind('blur', function () {
      scope.$apply(attrs.ngBlur);
    });
  };
});
'use strict';
angular.module('eTuneBookApp').directive('tbkTuneBlur', function () {
  return function (scope, elem, attrs) {
    elem.bind('blur', function () {
      scope.$apply(attrs.tbkTuneBlur);
    });
  };
});
'use strict';
angular.module('eTuneBookApp').directive('tbkFileSelect', function () {
  return function (scope, elem, attrs) {
    elem.bind('change', function (evt) {
      var files = evt.target.files;
      for (var i = 0, f; f = files[i]; i++) {
        var fileName = escape(f.name);
        var ext = fileName.replace(/^.*?\.([a-zA-Z0-9]+)$/, '$1');
        if (ext != 'abc' && ext != 'ABC') {
          alert('eTuneBook only accepts files with extension .abc or .ABC');
        } else {
          var reader = new FileReader();
          reader.onload = function (theFile) {
            return function (e) {
              var abc = this.result;
              try {
                scope.importTuneBook(abc, fileName);
              } catch (e) {
                alert('eTuneBook cannot import ' + fileName + ' due to: ' + e.toString());
              } finally {
                scope.$apply();
              }
            };
          }(f);
          reader.readAsText(f);
        }
      }
    });
  };
});
'use strict';
angular.module('eTuneBookApp').directive('tbkFileSelectDelegate', function () {
  return function (scope, elem, attrs) {
    elem.bind('click', function (evt) {
      var fileElem = document.getElementById('fileInput');
      fileElem.click();
    });
  };
});
'use strict';
angular.module('eTuneBookApp').directive('tbkColorselect', function () {
  return function (scope, element, attrs) {
    element.colorPicker({
      onColorChange: function (id, newValue) {
        var currentScope = angular.element(this).scope();
        currentScope.tune.color = newValue;
        scope.putTuneBookToLocalStorage();
        scope.$apply();
      }
    });
  };
});
'use strict';
angular.module('eTuneBookApp').directive('tbkShowSampleAbc', [
  '$timeout',
  function ($timeout) {
    return function (scope, elem, attrs) {
      scope.$watch(attrs.tbkShowSampleAbc, function (editing) {
        if (!editing) {
          var currentScope = angular.element(elem).scope();
          scope.showSampleDots(currentScope.tuneSetPosition);
        }
      });
    };
  }
]);
'use strict';
angular.module('eTuneBookApp').directive('renderSampleAbc', [
  '$timeout',
  function ($timeout) {
    return function (scope, elem, attrs) {
      var currentScope = angular.element(elem).scope();
      scope.showSampleDots(currentScope.tune);
    };
  }
]);
'use strict';
angular.module('eTuneBookApp').directive('tbkAbcElementSelect', function () {
  return function (scope, elem, attrs) {
    elem.bind('select selectionchange focus', function (evt) {
      if (scope.noteEditModus) {
        scope.doneSelecting(evt.target.value, evt.target.selectionStart, evt.target.selectionEnd);
        elem.blur();
        scope.$apply();
      }
    });
  };
});
'use strict';
angular.module('eTuneBookApp').directive('tbkAbcElementChange', [
  'eTuneBookService',
  function (eTuneBookService) {
    return {
      require: '?ngModel',
      link: function (scope, element, attr, ngModel) {
        scope.$on('chordChange', function (event, chordOption) {
          if (scope.abcSelection.abcNoteElement.chordSymbol.startSignIndex == undefined) {
            scope.abcSelection.abcNoteElement.addChord(chordOption.abc);
            var abc = element[0].value.slice(0, scope.abcSelection.abcNoteElement.chordSymbol.startSignIndex);
            abc = abc + '"' + chordOption.abc + '"';
            abc = abc + element[0].value.slice(scope.abcSelection.abcNoteElement.chordSymbol.startSignIndex);
          } else {
            if (chordOption.abc == '--') {
              var abc = element[0].value.slice(0, scope.abcSelection.abcNoteElement.chordSymbol.startSignIndex);
              abc = abc + element[0].value.slice(scope.abcSelection.abcNoteElement.chordSymbol.endSignIndex + 1);
              scope.abcSelection.abcNoteElement.deleteChord();
            } else {
              var abc = element[0].value.slice(0, scope.abcSelection.abcNoteElement.chordSymbol.startSignIndex);
              abc = abc + '"' + chordOption.abc + '"';
              abc = abc + element[0].value.slice(scope.abcSelection.abcNoteElement.chordSymbol.endSignIndex + 1);
              scope.abcSelection.abcNoteElement.changeChord(chordOption.abc);
            }
          }
          update(abc);
        });
        scope.$on('fingerChange', function (event, fingerOption) {
          if (scope.abcSelection.abcNoteElement.finger.index == undefined) {
            scope.abcSelection.abcNoteElement.addFinger(fingerOption.abc);
            var abc = element[0].value.slice(0, scope.abcSelection.abcNoteElement.finger.startSignIndex);
            abc = abc + '!' + fingerOption.abc + '!';
            abc = abc + element[0].value.slice(scope.abcSelection.abcNoteElement.finger.startSignIndex);
          } else {
            if (fingerOption.abc == '--') {
              var abc = element[0].value.slice(0, scope.abcSelection.abcNoteElement.finger.startSignIndex);
              abc = abc + element[0].value.slice(scope.abcSelection.abcNoteElement.finger.endSignIndex + 1);
              scope.abcSelection.abcNoteElement.deleteFinger();
            } else {
              var abc = element[0].value.slice(0, scope.abcSelection.abcNoteElement.finger.index);
              abc = abc + fingerOption.abc;
              abc = abc + element[0].value.slice(scope.abcSelection.abcNoteElement.finger.index + 1);
              scope.abcSelection.abcNoteElement.changeFinger(fingerOption.abc);
            }
          }
          update(abc);
        });
        scope.$on('accidentalChange', function (event, accidentalOption) {
          if (scope.abcSelection.abcNoteElement.accidental.startIndex == undefined) {
            scope.abcSelection.abcNoteElement.addAccidental(accidentalOption.abc);
            var abc = element[0].value.slice(0, scope.abcSelection.abcNoteElement.accidental.startIndex);
            abc = abc + accidentalOption.abc;
            abc = abc + element[0].value.slice(scope.abcSelection.abcNoteElement.accidental.startIndex);
          } else {
            if (accidentalOption.abc == '--') {
              var abc = element[0].value.slice(0, scope.abcSelection.abcNoteElement.accidental.startIndex);
              abc = abc + element[0].value.slice(scope.abcSelection.abcNoteElement.accidental.endIndex + 1);
              scope.abcSelection.abcNoteElement.deleteAccidental();
            } else {
              var abc = element[0].value.slice(0, scope.abcSelection.abcNoteElement.accidental.startIndex);
              abc = abc + accidentalOption.abc;
              abc = abc + element[0].value.slice(scope.abcSelection.abcNoteElement.accidental.endIndex + 1);
              scope.abcSelection.abcNoteElement.changeAccidental(accidentalOption.abc);
            }
          }
          update(abc);
        });
        scope.$on('noteChange', function (event, noteOption) {
          if (scope.abcSelection.abcNoteElement.note.index == undefined) {
          } else {
            if (noteOption.abc == '--') {
              alert('Note cannot be deleted!');
              scope.selectNoteOptions(scope.abcSelection.abcNoteElement.note.abc);
            } else {
              var abc = element[0].value.slice(0, scope.abcSelection.abcNoteElement.note.index);
              abc = abc + noteOption.abc;
              abc = abc + element[0].value.slice(scope.abcSelection.abcNoteElement.note.index + 1);
              scope.abcSelection.abcNoteElement.changeNote(noteOption.abc);
              update(abc);
            }
          }
        });
        scope.$on('octaveChange', function (event, octaveOption) {
          if (scope.abcSelection.abcNoteElement.octave.startIndex == undefined) {
            scope.abcSelection.abcNoteElement.addOctave(octaveOption.abc);
            var abc = element[0].value.slice(0, scope.abcSelection.abcNoteElement.octave.startIndex);
            abc = abc + octaveOption.abc;
            abc = abc + element[0].value.slice(scope.abcSelection.abcNoteElement.octave.startIndex);
          } else {
            if (octaveOption.abc == '--') {
              var abc = element[0].value.slice(0, scope.abcSelection.abcNoteElement.octave.startIndex);
              abc = abc + element[0].value.slice(scope.abcSelection.abcNoteElement.octave.endIndex + 1);
              scope.abcSelection.abcNoteElement.deleteOctave();
            } else {
              var abc = element[0].value.slice(0, scope.abcSelection.abcNoteElement.octave.startIndex);
              abc = abc + octaveOption.abc;
              abc = abc + element[0].value.slice(scope.abcSelection.abcNoteElement.octave.endIndex + 1);
              scope.abcSelection.abcNoteElement.changeOctave(octaveOption.abc);
            }
          }
          update(abc);
        });
        scope.$on('noteLengthChange', function (event, noteLengthOption) {
          if (scope.abcSelection.abcNoteElement.noteLength.startIndex == undefined) {
            scope.abcSelection.abcNoteElement.addNoteLength(noteLengthOption.abc);
            var abc = element[0].value.slice(0, scope.abcSelection.abcNoteElement.noteLength.startIndex);
            abc = abc + noteLengthOption.abc;
            abc = abc + element[0].value.slice(scope.abcSelection.abcNoteElement.noteLength.startIndex);
          } else {
            if (noteLengthOption.abc == '--') {
              var abc = element[0].value.slice(0, scope.abcSelection.abcNoteElement.noteLength.startIndex);
              abc = abc + element[0].value.slice(scope.abcSelection.abcNoteElement.noteLength.endIndex + 1);
              scope.abcSelection.abcNoteElement.deleteNoteLength();
            } else {
              var abc = element[0].value.slice(0, scope.abcSelection.abcNoteElement.noteLength.startIndex);
              abc = abc + noteLengthOption.abc;
              abc = abc + element[0].value.slice(scope.abcSelection.abcNoteElement.noteLength.endIndex + 1);
              scope.abcSelection.abcNoteElement.changeNoteLength(noteLengthOption.abc);
            }
          }
          update(abc);
        });
        function update(abc) {
          element[0].value = abc;
          element.change();
          ngModel.$setViewValue(abc);
          eTuneBookService.storeTuneBookAbc();
        }
      }
    };
  }
]);
angular.module('eTuneBookApp').directive('ngReallyClick', [function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.bind('click', function () {
          var message = attrs.ngReallyMessage;
          if (message && confirm(message)) {
            scope.$apply(attrs.ngReallyClick);
          }
        });
      }
    };
  }]);
'use strict';
angular.module('eTuneBookApp').directive('resize', [
  '$window',
  function ($window) {
    return function (scope, element) {
      var w = angular.element($window);
      scope.getWindowDimensions = function () {
        return {
          'h': w.height(),
          'w': w.width()
        };
      };
      scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
        scope.windowHeight = newValue.h;
        scope.windowWidth = newValue.w;
        scope.style = function () {
          return {
            'height': newValue.h - 100 + 'px',
            'width': newValue.w - 100 + 'px'
          };
        };
      }, true);
      w.bind('resize', function () {
        scope.$apply();
      });
    };
  }
]);
'use strict';
angular.module('eTuneBookApp').filter('fromNow', function () {
  return function (date) {
    var result = '';
    if (date != null) {
      result = moment(date).fromNow();
    }
    return result;
  };
});
'use strict';
angular.module('eTuneBookApp').filter('eliminateThe', function () {
  return function (string) {
    var theSplits = [];
    if (string != 'undefined' && string != null) {
      theSplits = string.split(',');
    }
    return theSplits[0];
  };
});
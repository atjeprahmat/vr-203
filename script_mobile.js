(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"scripts":{"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"translate":TDV.Tour.Script.translate,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"executeJS":TDV.Tour.Script.executeJS,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"downloadFile":TDV.Tour.Script.downloadFile,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getKey":TDV.Tour.Script.getKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"openLink":TDV.Tour.Script.openLink,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"clone":TDV.Tour.Script.clone,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setValue":TDV.Tour.Script.setValue,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"init":TDV.Tour.Script.init,"getComponentByName":TDV.Tour.Script.getComponentByName,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"textToSpeech":TDV.Tour.Script.textToSpeech,"cloneCamera":TDV.Tour.Script.cloneCamera,"getOverlays":TDV.Tour.Script.getOverlays,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"showWindow":TDV.Tour.Script.showWindow,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"cloneBindings":TDV.Tour.Script.cloneBindings,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizShowScore":TDV.Tour.Script.quizShowScore,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"resumePlayers":TDV.Tour.Script.resumePlayers,"showPopupImage":TDV.Tour.Script.showPopupImage,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"shareSocial":TDV.Tour.Script.shareSocial,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"isPanorama":TDV.Tour.Script.isPanorama,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizStart":TDV.Tour.Script.quizStart,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"initQuiz":TDV.Tour.Script.initQuiz,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setLocale":TDV.Tour.Script.setLocale,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getMainViewer":TDV.Tour.Script.getMainViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"mixObject":TDV.Tour.Script.mixObject,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"existsKey":TDV.Tour.Script.existsKey,"historyGoForward":TDV.Tour.Script.historyGoForward,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizFinish":TDV.Tour.Script.quizFinish,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPixels":TDV.Tour.Script.getPixels,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"registerKey":TDV.Tour.Script.registerKey,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"playAudioList":TDV.Tour.Script.playAudioList,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getPlayListItems":TDV.Tour.Script.getPlayListItems},"backgroundColorDirection":"vertical","defaultVRPointer":"laser","borderSize":0,"minHeight":0,"shadow":false,"backgroundOpacity":1,"gap":10,"width":"100%","contentOpaque":false,"paddingTop":0,"scrollBarVisible":"rollOver","id":"rootPlayer","mouseWheelEnabled":true,"toolTipHorizontalAlign":"center","definitions": [{"overlays":["this.overlay_EEC791E1_E111_1EB5_41DC_20E19DFFCD6E"],"hfov":360,"partial":false,"vfov":60.84,"frames":[{"front":{"levels":[{"width":2560,"colCount":5,"url":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_0/f/0/{row}_{column}.jpg","tags":"ondemand","height":2560,"class":"TiledImageResourceLevel","rowCount":5},{"width":1536,"colCount":3,"url":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_0/f/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel","rowCount":3},{"width":1024,"colCount":2,"url":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_0/f/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2},{"width":512,"colCount":1,"url":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_0/f/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1},{"width":2048,"colCount":1,"url":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_0/f/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"right":{"levels":[{"width":2560,"colCount":5,"url":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_0/r/0/{row}_{column}.jpg","tags":"ondemand","height":2560,"class":"TiledImageResourceLevel","rowCount":5},{"width":1536,"colCount":3,"url":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_0/r/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel","rowCount":3},{"width":1024,"colCount":2,"url":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_0/r/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2},{"width":512,"colCount":1,"url":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_0/r/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1},{"width":2048,"colCount":1,"url":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_0/r/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_t.jpg","back":{"levels":[{"width":2560,"colCount":5,"url":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_0/b/0/{row}_{column}.jpg","tags":"ondemand","height":2560,"class":"TiledImageResourceLevel","rowCount":5},{"width":1536,"colCount":3,"url":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_0/b/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel","rowCount":3},{"width":1024,"colCount":2,"url":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_0/b/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2},{"width":512,"colCount":1,"url":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_0/b/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1},{"width":2048,"colCount":1,"url":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_0/b/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame","left":{"levels":[{"width":2560,"colCount":5,"url":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_0/l/0/{row}_{column}.jpg","tags":"ondemand","height":2560,"class":"TiledImageResourceLevel","rowCount":5},{"width":1536,"colCount":3,"url":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_0/l/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel","rowCount":3},{"width":1024,"colCount":2,"url":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_0/l/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2},{"width":512,"colCount":1,"url":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_0/l/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1},{"width":2048,"colCount":1,"url":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_0/l/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"}}],"pitch":0,"id":"panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5","hfovMin":"150%","label":trans('panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5.label'),"adjacentPanoramas":[{"distance":6.77,"yaw":-178.23,"select":"this.overlay_EEC791E1_E111_1EB5_41DC_20E19DFFCD6E.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_EEC791E1_E111_1EB5_41DC_20E19DFFCD6E"},"class":"AdjacentPanorama","panorama":"this.panorama_EBD73A81_E117_0D75_41E3_B3115698CC70","backwardYaw":-0.9}],"data":{"label":"05-12-2022 06.49.11"},"thumbnailUrl":"media/panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_t.jpg","hfovMax":130,"class":"Panorama"},{"overlays":["this.overlay_F197D832_E137_0D97_41D9_8BEF057544E8"],"hfov":179.22,"partial":true,"vfov":44.54,"frames":[{"class":"CubicPanoramaFrame","left":{"levels":[{"width":3072,"colCount":6,"url":"media/panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5_0/l/0/{row}_{column}.jpg","tags":"ondemand","height":3072,"class":"TiledImageResourceLevel","rowCount":6},{"width":1536,"colCount":3,"url":"media/panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5_0/l/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel","rowCount":3},{"width":1024,"colCount":2,"url":"media/panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5_0/l/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2},{"width":512,"colCount":1,"url":"media/panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5_0/l/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1},{"width":2048,"colCount":1,"url":"media/panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5_0/l/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"front":{"levels":[{"width":3072,"colCount":6,"url":"media/panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5_0/f/0/{row}_{column}.jpg","tags":"ondemand","height":3072,"class":"TiledImageResourceLevel","rowCount":6},{"width":1536,"colCount":3,"url":"media/panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5_0/f/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel","rowCount":3},{"width":1024,"colCount":2,"url":"media/panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5_0/f/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2},{"width":512,"colCount":1,"url":"media/panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5_0/f/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1},{"width":2048,"colCount":1,"url":"media/panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5_0/f/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"right":{"levels":[{"width":3072,"colCount":6,"url":"media/panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5_0/r/0/{row}_{column}.jpg","tags":"ondemand","height":3072,"class":"TiledImageResourceLevel","rowCount":6},{"width":1536,"colCount":3,"url":"media/panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5_0/r/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel","rowCount":3},{"width":1024,"colCount":2,"url":"media/panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5_0/r/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2},{"width":512,"colCount":1,"url":"media/panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5_0/r/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1},{"width":2048,"colCount":1,"url":"media/panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5_0/r/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5_t.jpg"}],"pitch":-0.01,"id":"panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5","hfovMin":"150%","label":trans('panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5.label'),"adjacentPanoramas":[{"distance":10.22,"yaw":84.1,"select":"this.overlay_F197D832_E137_0D97_41D9_8BEF057544E8.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_F197D832_E137_0D97_41D9_8BEF057544E8"},"class":"AdjacentPanorama","panorama":"this.panorama_EBD73A81_E117_0D75_41E3_B3115698CC70","backwardYaw":-142.76}],"data":{"label":"05-12-2022 07.00.37"},"thumbnailUrl":"media/panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5_t.jpg","hfovMax":130,"class":"Panorama"},{"initialSequence":"this.sequence_EB07E094_E111_1E93_41E8_56AC54A3CDBC","automaticZoomSpeed":10,"id":"panorama_EBD73A81_E117_0D75_41E3_B3115698CC70_camera","hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"arrowKeysAction":"translate","class":"PanoramaPlayer","aaEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"touchControlMode":"drag_rotation","surfaceSelectionEnabled":false,"viewerArea":"this.MainViewer_mobile","zoomEnabled":true,"displayPlaybackBar":true,"mouseControlMode":"drag_rotation","id":"MainViewer_mobilePanoramaPlayer"},{"overlays":["this.overlay_EE6709C9_E117_0EF5_41E5_A8ABDA788F31","this.overlay_F1318180_E110_FF73_41C6_86338962B218","this.overlay_F1339792_E131_0296_41E4_A7684C8A03AC","this.overlay_F3D52921_E111_0FB2_4199_BE8DFAFA28E4"],"hfov":360,"partial":false,"vfov":56.72,"frames":[{"front":{"levels":[{"width":2048,"colCount":4,"url":"media/panorama_EBD73A81_E117_0D75_41E3_B3115698CC70_0/f/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"class":"TiledImageResourceLevel","rowCount":4},{"width":1024,"colCount":2,"url":"media/panorama_EBD73A81_E117_0D75_41E3_B3115698CC70_0/f/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2},{"width":512,"colCount":1,"url":"media/panorama_EBD73A81_E117_0D75_41E3_B3115698CC70_0/f/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1},{"width":2048,"colCount":1,"url":"media/panorama_EBD73A81_E117_0D75_41E3_B3115698CC70_0/f/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"right":{"levels":[{"width":2048,"colCount":4,"url":"media/panorama_EBD73A81_E117_0D75_41E3_B3115698CC70_0/r/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"class":"TiledImageResourceLevel","rowCount":4},{"width":1024,"colCount":2,"url":"media/panorama_EBD73A81_E117_0D75_41E3_B3115698CC70_0/r/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2},{"width":512,"colCount":1,"url":"media/panorama_EBD73A81_E117_0D75_41E3_B3115698CC70_0/r/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1},{"width":2048,"colCount":1,"url":"media/panorama_EBD73A81_E117_0D75_41E3_B3115698CC70_0/r/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_EBD73A81_E117_0D75_41E3_B3115698CC70_t.jpg","back":{"levels":[{"width":2048,"colCount":4,"url":"media/panorama_EBD73A81_E117_0D75_41E3_B3115698CC70_0/b/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"class":"TiledImageResourceLevel","rowCount":4},{"width":1024,"colCount":2,"url":"media/panorama_EBD73A81_E117_0D75_41E3_B3115698CC70_0/b/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2},{"width":512,"colCount":1,"url":"media/panorama_EBD73A81_E117_0D75_41E3_B3115698CC70_0/b/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1},{"width":2048,"colCount":1,"url":"media/panorama_EBD73A81_E117_0D75_41E3_B3115698CC70_0/b/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame","left":{"levels":[{"width":2048,"colCount":4,"url":"media/panorama_EBD73A81_E117_0D75_41E3_B3115698CC70_0/l/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"class":"TiledImageResourceLevel","rowCount":4},{"width":1024,"colCount":2,"url":"media/panorama_EBD73A81_E117_0D75_41E3_B3115698CC70_0/l/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2},{"width":512,"colCount":1,"url":"media/panorama_EBD73A81_E117_0D75_41E3_B3115698CC70_0/l/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1},{"width":2048,"colCount":1,"url":"media/panorama_EBD73A81_E117_0D75_41E3_B3115698CC70_0/l/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"}}],"pitch":0,"id":"panorama_EBD73A81_E117_0D75_41E3_B3115698CC70","hfovMin":"150%","label":trans('panorama_EBD73A81_E117_0D75_41E3_B3115698CC70.label'),"adjacentPanoramas":[{"distance":17.75,"yaw":-0.9,"select":"this.overlay_EE6709C9_E117_0EF5_41E5_A8ABDA788F31.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_EE6709C9_E117_0EF5_41E5_A8ABDA788F31"},"class":"AdjacentPanorama","panorama":"this.panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5","backwardYaw":-178.23},{"distance":48.18,"yaw":-142.76,"select":"this.overlay_F1318180_E110_FF73_41C6_86338962B218.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_F1318180_E110_FF73_41C6_86338962B218"},"class":"AdjacentPanorama","panorama":"this.panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5","backwardYaw":84.1}],"data":{"label":"05-12-2022 06.51.02"},"thumbnailUrl":"media/panorama_EBD73A81_E117_0D75_41E3_B3115698CC70_t.jpg","hfovMax":130,"class":"Panorama"},{"class":"PlayList","items":[{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_EBD73A81_E117_0D75_41E3_B3115698CC70_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.panorama_EBD73A81_E117_0D75_41E3_B3115698CC70"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","media":"this.panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5_camera","media":"this.panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"initialSequence":"this.sequence_EB0340A5_E111_1EBD_41D1_15949518D320","automaticZoomSpeed":10,"id":"panorama_E8EA29ED_E111_0E8D_41E4_5F97DA3EE2A5_camera","hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"initialSequence":"this.sequence_EEB7E045_E131_1DFD_41E4_E6DB6038DD4B","automaticZoomSpeed":10,"id":"panorama_EEFEB6F7_E131_029D_41D3_597462CBBDC5_camera","hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"progressBottom":0,"subtitlesTop":0,"playbackBarHeadShadow":true,"borderSize":0,"data":{"name":"Main Viewer"},"playbackBarHeadOpacity":1,"transitionMode":"blending","progressHeight":10,"subtitlesShadow":false,"subtitlesOpacity":1,"subtitlesPaddingTop":5,"width":"100%","playbackBarOpacity":1,"playbackBarBorderRadius":0,"id":"MainViewer_mobile","playbackBarProgressBorderColor":"#000000","subtitlesGap":0,"toolTipPaddingBottom":2,"toolTipOpacity":1,"surfaceReticleColor":"#FFFFFF","toolTipTextShadowColor":"#000000","progressBorderSize":0,"progressBarBorderRadius":0,"toolTipShadowVerticalLength":0,"subtitlesVerticalAlign":"bottom","subtitlesTextShadowColor":"#000000","subtitlesTextShadowOpacity":1,"playbackBarBottom":5,"playbackBarBorderColor":"#FFFFFF","toolTipFontSize":"1.11vmin","toolTipShadowHorizontalLength":0,"vrPointerSelectionTime":2000,"progressBackgroundColorRatios":[0],"subtitlesHorizontalAlign":"center","playbackBarProgressBackgroundColorDirection":"vertical","toolTipFontStyle":"normal","playbackBarProgressOpacity":1,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","subtitlesBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"height":"100%","progressRight":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeadShadowVerticalLength":0,"progressOpacity":1,"progressBarBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBorderSize":0,"toolTipBorderSize":1,"progressBarBackgroundColorDirection":"vertical","surfaceReticleSelectionOpacity":1,"playbackBarHeight":10,"progressBarBorderColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"displayTooltipInSurfaceSelection":true,"progressBackgroundOpacity":1,"subtitlesBackgroundColor":"#000000","toolTipPaddingTop":2,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipShadowBlurRadius":1,"playbackBarHeadWidth":6,"subtitlesFontSize":"3vmin","toolTipFontWeight":"normal","playbackBarProgressBorderSize":0,"subtitlesPaddingBottom":5,"surfaceReticleOpacity":0.6,"transitionDuration":500,"playbackBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"subtitlesBackgroundOpacity":0.2,"subtitlesFontWeight":"normal","toolTipBorderColor":"#767676","shadow":false,"firstTransitionDuration":0,"subtitlesTextShadowVerticalLength":1,"toolTipTextShadowBlurRadius":1,"playbackBarRight":0,"subtitlesPaddingLeft":5,"subtitlesBottom":50,"progressBackgroundColorDirection":"vertical","paddingTop":0,"toolTipShadowOpacity":1,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadowHorizontalLength":0,"toolTipHorizontalAlign":"center","paddingBottom":0,"borderRadius":0,"paddingLeft":0,"subtitlesPaddingRight":5,"progressBorderRadius":0,"toolTipFontFamily":"Arial","translationTransitionDuration":1000,"top":0,"playbackBarBackgroundOpacity":1,"class":"ViewerArea","vrPointerSelectionColor":"#FF6600","doubleClickAction":"toggle_fullscreen","vrPointerColor":"#FFFFFF","toolTipShadowColor":"#333138","playbackBarProgressBorderRadius":0,"toolTipShadowSpread":0,"subtitlesEnabled":true,"subtitlesTextShadowBlurRadius":0,"paddingRight":0,"toolTipTextShadowOpacity":0,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipPaddingRight":3,"subtitlesTextDecoration":"none","toolTipBackgroundColor":"#F6F6F6","progressBorderColor":"#000000","playbackBarHeadShadowOpacity":0.7,"propagateClick":false,"progressBarBackgroundColor":["#3399FF"],"displayTooltipInTouchScreens":true,"toolTipPaddingLeft":3,"toolTipFontColor":"#606060","playbackBarHeadShadowBlurRadius":1.5,"playbackBarLeft":0,"left":0,"progressBackgroundColor":["#FFFFFF"],"playbackBarProgressBackgroundColorRatios":[0],"toolTipDisplayTime":600,"toolTipBorderRadius":1,"progressLeft":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"minWidth":50,"progressBarOpacity":1,"minHeight":25,"subtitlesFontFamily":"Arial"},{"backgroundColorDirection":"vertical","borderSize":1,"minHeight":1,"shadow":true,"backgroundOpacity":0.85,"visible":false,"shadowOpacity":0.49,"scrollBarWidth":10,"width":"61.335%","shadowColor":"#000000","paddingTop":10,"scrollBarVisible":"rollOver","id":"HTMLText_F38EE634_E111_0593_41E7_C1697BB10163","shadowBlurRadius":3,"toolTipHorizontalAlign":"center","paddingBottom":5,"data":{"name":"title"},"paddingLeft":10,"scrollBarMargin":2,"scrollBarOpacity":0.5,"shadowHorizontalLength":1,"paddingRight":10,"borderRadius":0,"shadowVerticalLength":1,"height":"20.16%","backgroundColor":["#000000"],"backgroundColorRatios":[0],"html":trans('HTMLText_F38EE634_E111_0593_41E7_C1697BB10163.html'),"propagateClick":false,"borderColor":"#FFFFFF","class":"HTMLText","shadowSpread":1,"scrollBarColor":"#000000","right":"22.1%","bottom":"34.61%","minWidth":1},{"maps":[],"areas":["this.HotspotPanoramaOverlayArea_EEC3F1EE_E111_1E8F_41E6_06E61DD91FB9"],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Arrow 01c"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_F3D7C943_E171_0FF5_41E7_6D831BA2AC55","distance":100,"yaw":-178.23,"data":{"label":"Arrow 01c"},"hfov":7.65,"vfov":9.09,"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","pitch":-14.08,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_EEC791E1_E111_1EB5_41DC_20E19DFFCD6E"},{"maps":[],"areas":["this.HotspotPanoramaOverlayArea_F1EFF832_E137_0D97_41B0_C25622D4C151"],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Arrow 01c"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_F3D78943_E171_0FF5_41E3_7A73E46CB796","distance":100,"yaw":84.1,"data":{"label":"Arrow 01c"},"hfov":5.76,"vfov":3.14,"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","pitch":-9.44,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_F197D832_E137_0D97_41D9_8BEF057544E8"},{"restartMovementOnUserInteraction":false,"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_EB07E094_E111_1E93_41E8_56AC54A3CDBC"},{"maps":[],"areas":["this.HotspotPanoramaOverlayArea_EE9099DA_E117_0E96_41E4_9362C51C81B3"],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Arrow 01c"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_F3D6A942_E171_0FF7_41E4_21B511FFA8B2","distance":100,"yaw":-0.9,"data":{"label":"Arrow 01c"},"hfov":7.19,"vfov":9.14,"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","pitch":-5.46,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_EE6709C9_E117_0EF5_41E5_A8ABDA788F31"},{"maps":[],"areas":["this.HotspotPanoramaOverlayArea_F15881A1_E110_FEB5_41DD_0905FDD3B384"],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Arrow 01c"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_F3D74943_E171_0FF5_41C3_672AF75BFA68","distance":100,"yaw":-142.76,"data":{"label":"Arrow 01c"},"hfov":10.74,"vfov":6.91,"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","pitch":-2.01,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_F1318180_E110_FF73_41C6_86338962B218"},{"maps":[],"areas":["this.HotspotPanoramaOverlayArea_F101C7A1_E131_02B5_41E3_6E7C38E71402"],"items":[{"image":"this.AnimatedImageResource_F3D77943_E171_0FF5_41E5_DB9D048FAA35","distance":100,"yaw":-154.2,"data":{"label":"PEMATERI"},"hfov":2.38,"vfov":2.13,"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","pitch":9.47,"scaleMode":"fit_inside"}],"data":{"label":"PEMATERI"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_F1339792_E131_0296_41E4_A7684C8A03AC"},{"maps":[],"areas":["this.HotspotPanoramaOverlayArea_F3C9492F_E111_0F8D_41E4_0CC0061105B6"],"items":[{"image":"this.AnimatedImageResource_F3D71943_E171_0FF5_41A6_B9B5724143AB","distance":100,"yaw":26.06,"data":{"label":"Info 01"},"hfov":4.45,"vfov":4.33,"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","pitch":6.42,"scaleMode":"fit_inside"}],"data":{"label":"Info 01"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_F3D52921_E111_0FB2_4199_BE8DFAFA28E4"},{"restartMovementOnUserInteraction":false,"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_EB0340A5_E111_1EBD_41D1_15949518D320"},{"restartMovementOnUserInteraction":false,"movements":[{"yawSpeed":1.87,"targetYaw":2.73,"class":"TargetPanoramaCameraMovement","path":"shortest","easing":"cubic_in"},{"yawSpeed":1.87,"targetYaw":41.88,"class":"TargetPanoramaCameraMovement","path":"shortest","easing":"linear"},{"yawSpeed":1.87,"targetYaw":44.61,"class":"TargetPanoramaCameraMovement","path":"shortest","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_EEB7E045_E131_1DFD_41E4_E6DB6038DD4B"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_EEC3F1EE_E111_1E8F_41E6_06E61DD91FB9"},{"colCount":3,"frameCount":9,"levels":[{"height":180,"width":330,"class":"ImageResourceLevel","url":"media/res_EEE37FED_E117_028D_41CE_1BBB5588DCED_0.png"}],"class":"AnimatedImageResource","frameDuration":62,"rowCount":3,"id":"AnimatedImageResource_F3D7C943_E171_0FF5_41E7_6D831BA2AC55"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_F1EFF832_E137_0D97_41B0_C25622D4C151"},{"colCount":3,"frameCount":9,"levels":[{"height":180,"width":330,"class":"ImageResourceLevel","url":"media/res_EEE37FED_E117_028D_41CE_1BBB5588DCED_0.png"}],"class":"AnimatedImageResource","frameDuration":62,"rowCount":3,"id":"AnimatedImageResource_F3D78943_E171_0FF5_41E3_7A73E46CB796"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_EE9099DA_E117_0E96_41E4_9362C51C81B3"},{"colCount":3,"frameCount":9,"levels":[{"height":180,"width":330,"class":"ImageResourceLevel","url":"media/res_EEE37FED_E117_028D_41CE_1BBB5588DCED_0.png"}],"class":"AnimatedImageResource","frameDuration":62,"rowCount":3,"id":"AnimatedImageResource_F3D6A942_E171_0FF7_41E4_21B511FFA8B2"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_F15881A1_E110_FEB5_41DD_0905FDD3B384"},{"colCount":3,"frameCount":9,"levels":[{"height":180,"width":330,"class":"ImageResourceLevel","url":"media/res_EEE37FED_E117_028D_41CE_1BBB5588DCED_0.png"}],"class":"AnimatedImageResource","frameDuration":62,"rowCount":3,"id":"AnimatedImageResource_F3D74943_E171_0FF5_41C3_672AF75BFA68"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_F101C7A1_E131_02B5_41E3_6E7C38E71402"},{"colCount":4,"frameCount":22,"levels":[{"height":642,"width":428,"class":"ImageResourceLevel","url":"media/res_F002123B_E133_3D95_41D1_C0C483972287_0.png"}],"class":"AnimatedImageResource","frameDuration":41,"rowCount":6,"id":"AnimatedImageResource_F3D77943_E171_0FF5_41E5_DB9D048FAA35"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_F3C9492F_E111_0F8D_41E4_0CC0061105B6"},{"colCount":4,"frameCount":22,"levels":[{"height":642,"width":428,"class":"ImageResourceLevel","url":"media/res_F002123B_E133_3D95_41D1_C0C483972287_0.png"}],"class":"AnimatedImageResource","frameDuration":41,"rowCount":6,"id":"AnimatedImageResource_F3D71943_E171_0FF5_41A6_B9B5724143AB"}],"paddingBottom":0,"vrPolyfillScale":0.75,"paddingLeft":0,"horizontalAlign":"left","scrollBarMargin":2,"defaultMenu":["fullscreen","mute","rotation"],"scrollBarOpacity":0.5,"backgroundPreloadEnabled":true,"verticalAlign":"top","paddingRight":0,"borderRadius":0,"class":"Player","height":"100%","backgroundColor":["#FFFFFF"],"backgroundColorRatios":[0],"children":["this.MainViewer_mobile","this.HTMLText_F38EE634_E111_0593_41E7_C1697BB10163"],"propagateClick":false,"desktopMipmappingEnabled":false,"downloadEnabled":false,"mobileMipmappingEnabled":false,"layout":"absolute","left":325.15,"start":"this.init()","scrollBarColor":"#000000","data":{"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"stopBackgroundAudio":false,"speechOnTooltip":false,"pitch":1,"speechOnInfoWindow":false,"rate":1},"name":"Player423","defaultLocale":"en","locales":{"en":"locale/en.txt"}},"overflow":"hidden","mediaActivationMode":"window","scrollBarWidth":10,"minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.31.js.map
})();
//Generated with v2022.1.31, Mon Dec 5 2022
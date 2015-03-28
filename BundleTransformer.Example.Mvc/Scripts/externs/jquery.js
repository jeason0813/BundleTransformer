﻿var jQuery = {

	//#region Prototype properties

	"jquery": {},
	"selector": {},
	"length": {},
	"toArray": function(){},
	"get": function(){},
	"pushStack": function(){},
	"each": function(){},
	"map": function(){},
	"slice": function(){},
	"first": function(){},
	"last": function(){},
	"eq": function(){},
	"end": function(){},
	"push": function(){},
	"sort": function(){},
	"splice": function(){},
	"extend": function(){},
	"find": function(){},
	"filter": function(){},
	"not": function(){},
	"is": function(){},
	"init": function(){},
	"has": function(){},
	"closest": function(){},
	"index": function(){},
	"add": function(){},
	"addBack": function(){},
	"parent": function(){},
	"parents": function(){},
	"parentsUntil": function(){},
	"next": function(){},
	"prev": function(){},
	"nextAll": function(){},
	"prevAll": function(){},
	"nextUntil": function(){},
	"prevUntil": function(){},
	"siblings": function(){},
	"children": function(){},
	"contents": function(){},
	"ready": function(){},
	"data": function(){},
	"removeData": function(){},
	"queue": function(){},
	"dequeue": function(){},
	"clearQueue": function(){},
	"promise": function(){},
	"on": function(){},
	"one": function(){},
	"off": function(){},
	"trigger": function(){},
	"triggerHandler": function(){},
	"text": function(){},
	"append": function(){},
	"prepend": function(){},
	"before": function(){},
	"after": function(){},
	"remove": function(){},
	"empty": function(){},
	"clone": function(){},
	"html": function(){},
	"replaceWith": function(){},
	"detach": function(){},
	"domManip": function(){},
	"appendTo": function(){},
	"prependTo": function(){},
	"insertBefore": function(){},
	"insertAfter": function(){},
	"replaceAll": function(){},
	"css": function(){},
	"show": function(){},
	"hide": function(){},
	"toggle": function(){},
	"fadeTo": function(){},
	"animate": function(){},
	"stop": function(){},
	"finish": function(){},
	"slideDown": function(){},
	"slideUp": function(){},
	"slideToggle": function(){},
	"fadeIn": function(){},
	"fadeOut": function(){},
	"fadeToggle": function(){},
	"delay": function(){},
	"val": function(){},
	"attr": function(){},
	"removeAttr": function(){},
	"prop": function(){},
	"removeProp": function(){},
	"addClass": function(){},
	"removeClass": function(){},
	"toggleClass": function(){},
	"hasClass": function(){},
	"blur": function(){},
	"focus": function(){},
	"focusin": function(){},
	"focusout": function(){},
	"load": function(){},
	"resize": function(){},
	"scroll": function(){},
	"unload": function(){},
	"click": function(){},
	"dblclick": function(){},
	"mousedown": function(){},
	"mouseup": function(){},
	"mousemove": function(){},
	"mouseover": function(){},
	"mouseout": function(){},
	"mouseenter": function(){},
	"mouseleave": function(){},
	"change": function(){},
	"select": function(){},
	"submit": function(){},
	"keydown": function(){},
	"keypress": function(){},
	"keyup": function(){},
	"error": function(){},
	"contextmenu": function(){},
	"hover": function(){},
	"bind": function(){},
	"unbind": function(){},
	"delegate": function(){},
	"undelegate": function(){},
	"wrapAll": function(){},
	"wrapInner": function(){},
	"wrap": function(){},
	"unwrap": function(){},
	"serialize": function(){},
	"serializeArray": function(){},
	"ajaxStart": function(){},
	"ajaxStop": function(){},
	"ajaxComplete": function(){},
	"ajaxError": function(){},
	"ajaxSuccess": function(){},
	"ajaxSend": function(){},
	"offset": function(){},
	"position": function(){},
	"offsetParent": function(){},
	"scrollLeft": function(){},
	"scrollTop": function(){},
	"innerHeight": function(){},
	"height": function(){},
	"outerHeight": function(){},
	"innerWidth": function(){},
	"width": function(){},
	"outerWidth": function(){},
	"size": function(){},
	"andSelf": function(){},
	"fn": {
		"jquery": {},
		"selector": {},
		"length": {},
		"toArray": function(){},
		"get": function(){},
		"pushStack": function(){},
		"each": function(){},
		"map": function(){},
		"slice": function(){},
		"first": function(){},
		"last": function(){},
		"eq": function(){},
		"end": function(){},
		"push": function(){},
		"sort": function(){},
		"splice": function(){},
		"extend": function(){},
		"find": function(){},
		"filter": function(){},
		"not": function(){},
		"is": function(){},
		"init": function(){},
		"has": function(){},
		"closest": function(){},
		"index": function(){},
		"add": function(){},
		"addBack": function(){},
		"parent": function(){},
		"parents": function(){},
		"parentsUntil": function(){},
		"next": function(){},
		"prev": function(){},
		"nextAll": function(){},
		"prevAll": function(){},
		"nextUntil": function(){},
		"prevUntil": function(){},
		"siblings": function(){},
		"children": function(){},
		"contents": function(){},
		"ready": function(){},
		"data": function(){},
		"removeData": function(){},
		"queue": function(){},
		"dequeue": function(){},
		"clearQueue": function(){},
		"promise": function(){},
		"on": function(){},
		"one": function(){},
		"off": function(){},
		"trigger": function(){},
		"triggerHandler": function(){},
		"text": function(){},
		"append": function(){},
		"prepend": function(){},
		"before": function(){},
		"after": function(){},
		"remove": function(){},
		"empty": function(){},
		"clone": function(){},
		"html": function(){},
		"replaceWith": function(){},
		"detach": function(){},
		"domManip": function(){},
		"appendTo": function(){},
		"prependTo": function(){},
		"insertBefore": function(){},
		"insertAfter": function(){},
		"replaceAll": function(){},
		"css": function(){},
		"show": function(){},
		"hide": function(){},
		"toggle": function(){},
		"fadeTo": function(){},
		"animate": function(){},
		"stop": function(){},
		"finish": function(){},
		"slideDown": function(){},
		"slideUp": function(){},
		"slideToggle": function(){},
		"fadeIn": function(){},
		"fadeOut": function(){},
		"fadeToggle": function(){},
		"delay": function(){},
		"val": function(){},
		"attr": function(){},
		"removeAttr": function(){},
		"prop": function(){},
		"removeProp": function(){},
		"addClass": function(){},
		"removeClass": function(){},
		"toggleClass": function(){},
		"hasClass": function(){},
		"blur": function(){},
		"focus": function(){},
		"focusin": function(){},
		"focusout": function(){},
		"load": function(){},
		"resize": function(){},
		"scroll": function(){},
		"unload": function(){},
		"click": function(){},
		"dblclick": function(){},
		"mousedown": function(){},
		"mouseup": function(){},
		"mousemove": function(){},
		"mouseover": function(){},
		"mouseout": function(){},
		"mouseenter": function(){},
		"mouseleave": function(){},
		"change": function(){},
		"select": function(){},
		"submit": function(){},
		"keydown": function(){},
		"keypress": function(){},
		"keyup": function(){},
		"error": function(){},
		"contextmenu": function(){},
		"hover": function(){},
		"bind": function(){},
		"unbind": function(){},
		"delegate": function(){},
		"undelegate": function(){},
		"wrapAll": function(){},
		"wrapInner": function(){},
		"wrap": function(){},
		"unwrap": function(){},
		"serialize": function(){},
		"serializeArray": function(){},
		"ajaxStart": function(){},
		"ajaxStop": function(){},
		"ajaxComplete": function(){},
		"ajaxError": function(){},
		"ajaxSuccess": function(){},
		"ajaxSend": function(){},
		"offset": function(){},
		"position": function(){},
		"offsetParent": function(){},
		"scrollLeft": function(){},
		"scrollTop": function(){},
		"innerHeight": function(){},
		"height": function(){},
		"outerHeight": function(){},
		"innerWidth": function(){},
		"width": function(){},
		"outerWidth": function(){},
		"size": function(){},
		"andSelf": function(){}
	},

	//#endregion

	"expando": {},
	"isReady": {},
	"noop": function(){},
	"isFunction": function(){},
	"isArray": function(){},
	"isWindow": function(){},
	"isNumeric": function(){},
	"isEmptyObject": function(){},
	"isPlainObject": function(){},
	"type": function(){},
	"globalEval": function(){},
	"camelCase": function(){},
	"nodeName": function(){},
	"trim": function(){},
	"makeArray": function(){},
	"inArray": function(){},
	"merge": function(){},
	"grep": function(){},
	"guid": {},
	"proxy": function(){},
	"now": function(){},
	"support": {
		"ownLast": {},
		"inlineBlockNeedsLayout": {},
		"deleteExpando": {},
		"leadingWhitespace": {},
		"tbody": {},
		"htmlSerialize": {},
		"html5Clone": {},
		"appendChecked": {},
		"noCloneChecked": {},
		"checkClone": {},
		"noCloneEvent": {},
		"submitBubbles": {},
		"changeBubbles": {},
		"focusinBubbles": {},
		"shrinkWrapBlocks": function(){},
		"opacity": {},
		"cssFloat": {},
		"clearCloneStyle": {},
		"boxSizing": {},
		"reliableHiddenOffsets": function(){},
		"boxSizingReliable": function(){},
		"pixelPosition": function(){},
		"reliableMarginRight": function(){},
		"getSetAttribute": {},
		"style": {},
		"hrefNormalized": {},
		"checkOn": {},
		"optSelected": {},
		"enctype": {},
		"optDisabled": {},
		"input": {},
		"radioValue": {},
		"cors": {},
		"ajax": {}
	},
	"expr": {
		"cacheLength": {},
		"createPseudo": function(){},
		"match": {
			"ID": {},
			"CLASS": {},
			"TAG": {},
			"ATTR": {},
			"PSEUDO": {},
			"CHILD": {},
			"bool": {},
			"needsContext": {}
		},
		"attrHandle": {
			"checked": function(){},
			"selected": function(){},
			"async": function(){},
			"autofocus": function(){},
			"autoplay": function(){},
			"controls": function(){},
			"defer": function(){},
			"disabled": function(){},
			"hidden": function(){},
			"ismap": function(){},
			"loop": function(){},
			"multiple": function(){},
			"open": function(){},
			"readonly": function(){},
			"required": function(){},
			"scoped": function(){}
		},
		"find": {
			"ID": function(){},
			"TAG": function(){},
			"CLASS": function(){}
		},
		"relative": {
			">": {
				"dir": {},
				"first": {}
			},
			" ": {
				"dir": {}
			},
			"+": {
				"dir": {},
				"first": {}
			},
			"~": {
				"dir": {}
			}
		},
		"preFilter": {
			"ATTR": function(){},
			"CHILD": function(){},
			"PSEUDO": function(){}
		},
		"filter": {
			"TAG": function(){},
			"CLASS": function(){},
			"ATTR": function(){},
			"CHILD": function(){},
			"PSEUDO": function(){},
			"ID": function(){}
		},
		"pseudos": {
			"not": function(){},
			"has": function(){},
			"contains": function(){},
			"lang": function(){},
			"target": function(){},
			"root": function(){},
			"focus": function(){},
			"enabled": function(){},
			"disabled": function(){},
			"checked": function(){},
			"selected": function(){},
			"empty": function(){},
			"parent": function(){},
			"header": function(){},
			"input": function(){},
			"button": function(){},
			"text": function(){},
			"first": function(){},
			"last": function(){},
			"eq": function(){},
			"even": function(){},
			"odd": function(){},
			"lt": function(){},
			"gt": function(){},
			"nth": function(){},
			"radio": function(){},
			"checkbox": function(){},
			"file": function(){},
			"password": function(){},
			"image": function(){},
			"submit": function(){},
			"reset": function(){},
			"hidden": function(){},
			"visible": function(){},
			"animated": function(){}
		},
		"filters": {
			"not": function(){},
			"has": function(){},
			"contains": function(){},
			"lang": function(){},
			"target": function(){},
			"root": function(){},
			"focus": function(){},
			"enabled": function(){},
			"disabled": function(){},
			"checked": function(){},
			"selected": function(){},
			"empty": function(){},
			"parent": function(){},
			"header": function(){},
			"input": function(){},
			"button": function(){},
			"text": function(){},
			"first": function(){},
			"last": function(){},
			"eq": function(){},
			"even": function(){},
			"odd": function(){},
			"lt": function(){},
			"gt": function(){},
			"nth": function(){},
			"radio": function(){},
			"checkbox": function(){},
			"file": function(){},
			"password": function(){},
			"image": function(){},
			"submit": function(){},
			"reset": function(){},
			"hidden": function(){},
			"visible": function(){},
			"animated": function(){}
		},
		"setFilters": {
			"not": function(){},
			"has": function(){},
			"contains": function(){},
			"lang": function(){},
			"target": function(){},
			"root": function(){},
			"focus": function(){},
			"enabled": function(){},
			"disabled": function(){},
			"checked": function(){},
			"selected": function(){},
			"empty": function(){},
			"parent": function(){},
			"header": function(){},
			"input": function(){},
			"button": function(){},
			"text": function(){},
			"first": function(){},
			"last": function(){},
			"eq": function(){},
			"even": function(){},
			"odd": function(){},
			"lt": function(){},
			"gt": function(){},
			"nth": function(){},
			"radio": function(){},
			"checkbox": function(){},
			"file": function(){},
			"password": function(){},
			"image": function(){},
			"submit": function(){},
			"reset": function(){},
			"hidden": function(){},
			"visible": function(){},
			"animated": function(){}
		},
		":": {
			"not": function(){},
			"has": function(){},
			"contains": function(){},
			"lang": function(){},
			"target": function(){},
			"root": function(){},
			"focus": function(){},
			"enabled": function(){},
			"disabled": function(){},
			"checked": function(){},
			"selected": function(){},
			"empty": function(){},
			"parent": function(){},
			"header": function(){},
			"input": function(){},
			"button": function(){},
			"text": function(){},
			"first": function(){},
			"last": function(){},
			"eq": function(){},
			"even": function(){},
			"odd": function(){},
			"lt": function(){},
			"gt": function(){},
			"nth": function(){},
			"radio": function(){},
			"checkbox": function(){},
			"file": function(){},
			"password": function(){},
			"image": function(){},
			"submit": function(){},
			"reset": function(){},
			"hidden": function(){},
			"visible": function(){},
			"animated": function(){}
		}
	},
	"unique": function(){},
	"isXMLDoc": function(){},
	"contains": function(){},
	"dir": function(){},
	"sibling": function(){},
	"Callbacks": function(){},
	"Deferred": function(){},
	"when": function(){},
	"readyWait": {},
	"holdReady": function(){},
	"acceptData": function(){},
	"cache": {},
	"noData": {
		"applet ": {},
		"embed ": {},
		"object ": {}
	},
	"hasData": function(){},
	"_data": function(){},
	"_removeData": function(){},
	"_queueHooks": function(){},
	"access": function(){},
	"event": {
		"global": {},
		"add": function(){},
		"remove": function(){},
		"trigger": function(){},
		"dispatch": function(){},
		"handlers": function(){},
		"fix": function(){},
		"props": {
			"0": {},
			"1": {},
			"2": {},
			"3": {},
			"4": {},
			"5": {},
			"6": {},
			"7": {},
			"8": {},
			"9": {},
			"10": {},
			"11": {},
			"12": {}
		},
		"fixHooks": {},
		"keyHooks": {
			"props": {
				"0": {},
				"1": {},
				"2": {},
				"3": {}
			},
			"filter": function(){}
		},
		"mouseHooks": {
			"props": {
				"0": {},
				"1": {},
				"2": {},
				"3": {},
				"4": {},
				"5": {},
				"6": {},
				"7": {},
				"8": {},
				"9": {},
				"10": {},
				"11": {}
			},
			"filter": function(){}
		},
		"special": {
			"load": {
				"noBubble": {}
			},
			"focus": {
				"trigger": function(){},
				"delegateType": {}
			},
			"blur": {
				"trigger": function(){},
				"delegateType": {}
			},
			"click": {
				"trigger": function(){},
				"_default": function(){}
			},
			"beforeunload": {
				"postDispatch": function(){}
			},
			"mouseenter": {
				"delegateType": {},
				"bindType": {},
				"handle": function(){}
			},
			"mouseleave": {
				"delegateType": {},
				"bindType": {},
				"handle": function(){}
			},
			"pointerenter": {
				"delegateType": {},
				"bindType": {},
				"handle": function(){}
			},
			"pointerleave": {
				"delegateType": {},
				"bindType": {},
				"handle": function(){}
			},
			"focusin": {
				"setup": function(){},
				"teardown": function(){}
			},
			"focusout": {
				"setup": function(){},
				"teardown": function(){}
			}
		},
		"simulate": function(){}
	},
	"removeEvent": function(){},
	"Event": function(){},
	"buildFragment": function(){},
	"cleanData": function(){},
	"swap": function(){},
	"cssHooks": {
		"opacity": {
			"get": function(){}
		},
		"height": {
			"get": function(){},
			"set": function(){}
		},
		"width": {
			"get": function(){},
			"set": function(){}
		},
		"marginRight": {
			"get": function(){}
		},
		"margin": {
			"expand": function(){}
		},
		"padding": {
			"expand": function(){},
			"set": function(){}
		},
		"borderWidth": {
			"expand": function(){},
			"set": function(){}
		},
		"top": {
			"get": function(){}
		},
		"left": {
			"get": function(){}
		}
	},
	"cssNumber": {
		"columnCount": {},
		"fillOpacity": {},
		"flexGrow": {},
		"flexShrink": {},
		"fontWeight": {},
		"lineHeight": {},
		"opacity": {},
		"order": {},
		"orphans": {},
		"widows": {},
		"zIndex": {},
		"zoom": {}
	},
	"cssProps": {
		"float": {}
	},
	"style": function(){},
	"Tween": function(){},
	"easing": {
		"linear": function(){},
		"swing": function(){}
	},
	"fx": function(){},
	"Animation": function(){},
	"speed": function(){},
	"timers": {},
	"valHooks": {
		"option": {
			"get": function(){}
		},
		"select": {
			"get": function(){},
			"set": function(){}
		},
		"radio": {
			"set": function(){}
		},
		"checkbox": {
			"set": function(){}
		}
	},
	"attrHooks": {
		"type": {
			"set": function(){}
		}
	},
	"propFix": {
		"for": {},
		"class": {},
		"tabindex": {
			"0": {},
			"1": {},
			"2": {},
			"3": {},
			"4": {},
			"5": {},
			"6": {},
			"7": {}
		},
		"readonly": {
			"0": {},
			"1": {},
			"2": {},
			"3": {},
			"4": {},
			"5": {},
			"6": {},
			"7": {}
		},
		"maxlength": {
			"0": {},
			"1": {},
			"2": {},
			"3": {},
			"4": {},
			"5": {},
			"6": {},
			"7": {},
			"8": {}
		},
		"cellspacing": {
			"0": {},
			"1": {},
			"2": {},
			"3": {},
			"4": {},
			"5": {},
			"6": {},
			"7": {},
			"8": {},
			"9": {},
			"10": {}
		},
		"cellpadding": {
			"0": {},
			"1": {},
			"2": {},
			"3": {},
			"4": {},
			"5": {},
			"6": {},
			"7": {},
			"8": {},
			"9": {},
			"10": {}
		},
		"rowspan": {
			"0": {},
			"1": {},
			"2": {},
			"3": {},
			"4": {},
			"5": {},
			"6": {}
		},
		"colspan": {
			"0": {},
			"1": {},
			"2": {},
			"3": {},
			"4": {},
			"5": {},
			"6": {}
		},
		"usemap": {
			"0": {},
			"1": {},
			"2": {},
			"3": {},
			"4": {},
			"5": {}
		},
		"frameborder": {
			"0": {},
			"1": {},
			"2": {},
			"3": {},
			"4": {},
			"5": {},
			"6": {},
			"7": {},
			"8": {},
			"9": {},
			"10": {}
		},
		"contenteditable": {
			"0": {},
			"1": {},
			"2": {},
			"3": {},
			"4": {},
			"5": {},
			"6": {},
			"7": {},
			"8": {},
			"9": {},
			"10": {},
			"11": {},
			"12": {},
			"13": {},
			"14": {}
		}
	},
	"propHooks": {
		"tabIndex": {
			"get": function(){}
		}
	},
	"parseJSON": function(){},
	"parseXML": function(){},
	"active": {},
	"lastModified": {},
	"etag": {},
	"ajaxSettings": {
		"url": {},
		"type": {},
		"isLocal": {},
		"global": {},
		"processData": {},
		"async": {},
		"contentType": {},
		"accepts": {
			"*": {},
			"text": {},
			"html": {},
			"xml": {},
			"json": {},
			"script": {}
		},
		"contents": {
			"xml": {},
			"html": {},
			"json": {},
			"script": {}
		},
		"responseFields": {
			"xml": {},
			"text": {},
			"json": {}
		},
		"converters": {
			"* text": function(){},
			"text html": {},
			"text json": function(){},
			"text xml": function(){},
			"text script": function(){}
		},
		"flatOptions": {
			"url": {},
			"context": {}
		},
		"xhr": function(){},
		"jsonp": {},
		"jsonpCallback": function(){}
	},
	"ajaxSetup": function(){},
	"ajaxPrefilter": function(){},
	"ajaxTransport": function(){},
	"ajax": function(){},
	"getJSON": function(){},
	"getScript": function(){},
	"post": function(){},
	"_evalUrl": function(){},
	"param": function(){},
	"parseHTML": function(){},
	"noConflict": function(){}
};

var $ = jQuery;
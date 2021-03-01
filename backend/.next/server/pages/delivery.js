module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/delivery.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/delivery.js":
/*!***************************!*\
  !*** ./pages/delivery.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\legero-ssr\\app\\pages\\delivery.js";


function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-3114460579" + " " + "wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-3114460579" + " " + "overlay"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        id: "header",
        className: "jsx-3114460579" + " " + "header",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-3114460579" + " " + "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3114460579" + " " + "header__inner",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-3114460579" + " " + "header__menu-btn",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                width: "22",
                height: "12",
                viewBox: "0 0 22 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "jsx-3114460579",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                  y: "10",
                  width: "16",
                  height: "2",
                  rx: "1",
                  fill: "#C9C9C9",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                  y: "5",
                  width: "22",
                  height: "2",
                  rx: "1",
                  fill: "#C9C9C9",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                  width: "22",
                  height: "2",
                  rx: "1",
                  fill: "#C9C9C9",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "jsx-3114460579" + " " + "header__logo",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "static/img/logo-mob.svg",
                  alt: "",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 62
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 34
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              className: "jsx-3114460579" + " " + "header__controls",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "jsx-3114460579" + " " + "header__controls-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "header__controls-item-link",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "22",
                    height: "19",
                    viewBox: "0 0 22 19",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "jsx-3114460579",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M10.3552 0.290113C10.7873 0.19656 11.2364 0.197859 11.6693 0.284049C12.1265 0.40922 12.5514 0.649166 12.9075 0.965773C13.1295 1.20269 13.3702 1.4357 13.5102 1.73542C13.787 2.20838 13.9198 2.76797 13.8999 3.31759C14.5994 3.45619 15.2679 3.73208 15.9683 3.87371C16.5082 4.02617 17.0465 4.18685 17.5868 4.33801C17.8245 4.38999 18.0622 4.44629 18.2914 4.52815C18.4141 4.57709 18.4786 4.72219 18.4429 4.84952C18.3873 5.09683 18.3088 5.33851 18.2511 5.58582C18.2197 5.72182 18.0537 5.73741 17.945 5.69626C17.5299 5.57282 17.1144 5.44982 16.6975 5.33201C16.0235 5.17826 15.3677 4.9513 14.6975 4.78022C14.3078 4.70529 13.9343 4.56626 13.5514 4.46318C13.287 4.99808 12.8379 5.4169 12.3383 5.71965C11.8493 5.95483 11.3022 6.11379 10.7576 6.04102C10.3459 5.99511 9.94601 5.85348 9.58522 5.64732C9.06652 5.30776 8.62508 4.82657 8.38822 4.24056C8.19934 3.84556 8.13312 3.40118 8.15392 2.9646C7.79313 2.86109 7.43403 2.75108 7.06772 2.67008C6.54095 2.52672 6.02056 2.36084 5.49253 2.22138C4.92841 2.09317 4.37958 1.90607 3.82141 1.75491C3.74246 1.72979 3.64441 1.7142 3.60323 1.63061C3.54678 1.49894 3.61767 1.36121 3.64695 1.23257C3.7136 1.03724 3.73737 0.825011 3.83245 0.64137C3.91225 0.52053 4.06548 0.579434 4.17626 0.609319C4.43306 0.691611 4.69708 0.746184 4.95813 0.812017C5.55747 0.98483 6.15214 1.17713 6.7604 1.31486C7.34022 1.47252 7.91028 1.67045 8.49689 1.79865C8.87975 1.06452 9.57291 0.5149 10.3552 0.290113ZM10.6493 1.46126C10.2296 1.54961 9.83607 1.78479 9.60814 2.16377C9.32417 2.61378 9.30337 3.18939 9.41925 3.69917C9.59583 4.2999 10.1481 4.75424 10.7542 4.83263C11.0993 4.87291 11.4622 4.84346 11.778 4.68494C12.2458 4.46361 12.6023 3.99542 12.666 3.46961C12.7466 3.16687 12.6753 2.85546 12.6133 2.55704C12.531 2.26512 12.3451 2.01218 12.1295 1.80775C11.7211 1.46732 11.1613 1.36381 10.6493 1.46126Z",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 21,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M4.78428 3.13654C4.86026 3.10492 4.94473 3.10925 5.02537 3.10709C5.42055 3.10882 5.81573 3.10882 6.2109 3.10709C6.30514 3.10882 6.40319 3.10579 6.49275 3.14C6.57467 3.19934 6.61627 3.29722 6.66805 3.38168C6.865 3.75329 7.087 4.10975 7.30348 4.46924C7.4236 4.73777 7.59593 4.97555 7.74195 5.22892C7.94272 5.63821 8.21395 6.0055 8.41388 6.41479C8.53739 6.63265 8.67789 6.84054 8.7942 7.06273C8.95804 7.38021 9.16093 7.67386 9.3303 7.9883C9.47376 8.24644 9.62063 8.50284 9.78108 8.75102C9.86427 8.91863 9.95596 9.08148 10.0527 9.2413C10.1771 9.48428 10.3639 9.69434 10.4373 9.96244C10.5133 10.3042 10.4696 10.6554 10.4556 11.0015C10.3791 11.6512 10.133 12.2657 9.82862 12.837C9.4258 13.5114 8.88121 14.0965 8.2373 14.5353C7.89985 14.7323 7.55773 14.9251 7.19439 15.068C6.58571 15.24 5.95325 15.3837 5.31825 15.3179C4.96892 15.3006 4.62723 15.2183 4.29063 15.1269C3.81692 15.0191 3.39883 14.7553 2.98412 14.5097C2.68827 14.2971 2.40303 14.0658 2.14963 13.8007C1.48449 13.0874 1.0197 12.1822 0.830814 11.2159C0.799828 10.7988 0.733187 10.3739 0.829116 9.96028C0.855433 9.77317 0.985319 9.63154 1.07149 9.47172C1.20434 9.23134 1.36352 9.00655 1.47218 8.75318C1.58381 8.58037 1.69842 8.40885 1.7935 8.22521C2.00446 7.81202 2.27017 7.43131 2.4875 7.02158C2.79014 6.49622 3.09364 5.97171 3.40052 5.44851C3.54781 5.14186 3.75283 4.86943 3.90861 4.56755C4.08561 4.22496 4.30081 3.90532 4.48843 3.56922C4.57629 3.41936 4.64251 3.24308 4.78428 3.13654ZM5.42692 4.31678C5.18497 4.77242 4.90483 5.2051 4.66543 5.6616C4.46763 5.98514 4.2711 6.30954 4.10259 6.64997C3.81565 7.04627 3.63186 7.50667 3.35298 7.90904C3.06053 8.44177 2.73539 8.95458 2.44463 9.48818C4.57077 9.48818 6.69692 9.48818 8.82306 9.48775C8.77425 9.41455 8.72204 9.34395 8.67619 9.26859C8.46821 8.84154 8.19655 8.45043 7.97795 8.02858C7.73176 7.64007 7.52038 7.23035 7.28268 6.83665C7.12563 6.61359 7.02588 6.35675 6.87562 6.1298C6.5301 5.52084 6.16549 4.92357 5.82167 4.31375C5.69009 4.31288 5.5585 4.31591 5.42692 4.31678ZM1.97093 10.7009C2.0087 11.128 2.13265 11.542 2.27315 11.9444C2.51551 12.4568 2.84193 12.9397 3.28719 13.2905C3.58304 13.5699 3.957 13.7297 4.32119 13.8912C5.10857 14.1832 5.99358 14.2013 6.79115 13.9393C7.16934 13.8016 7.54924 13.6426 7.8608 13.3784C8.21013 13.1168 8.50768 12.7859 8.7352 12.41C9.06458 11.9028 9.21908 11.2977 9.28742 10.6992C6.84845 10.7022 4.4099 10.6992 1.97093 10.7009Z",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 22,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M15.5651 6.04163C15.6818 5.99529 15.81 6.00915 15.9326 6.00655C16.3422 6.01218 16.7523 6.00092 17.1619 6.01131C17.2786 6.00612 17.3627 6.09837 17.42 6.19106C17.5965 6.47865 17.7366 6.78832 17.9306 7.06508C18.1233 7.41201 18.3096 7.7624 18.5227 8.0972C18.7061 8.44976 18.9192 8.78455 19.1187 9.12758C19.319 9.52388 19.5779 9.88553 19.7774 10.2827C20.0669 10.7535 20.3207 11.2459 20.6157 11.7137C20.7944 12.0866 21.0555 12.4128 21.2117 12.7974C21.2974 13.1014 21.2889 13.4219 21.2579 13.7338C21.2265 14.4904 20.9154 15.1986 20.5618 15.8521C20.3038 16.232 20.0202 16.5971 19.6828 16.9072C19.4098 17.1848 19.0805 17.3932 18.7562 17.6015C18.1415 17.9203 17.4777 18.1957 16.7794 18.2065C16.4276 18.2356 16.074 18.2117 15.7234 18.1814C15.2446 18.1022 14.784 17.9333 14.3439 17.728C13.9852 17.5716 13.6796 17.3191 13.3634 17.0921C13.1601 16.9063 12.9669 16.7084 12.7814 16.504C12.6558 16.3459 12.5357 16.1826 12.4092 16.0249C12.0586 15.4701 11.7873 14.8568 11.6485 14.2102C11.5827 13.7801 11.5441 13.3366 11.6112 12.9039C11.7479 12.4881 12.0225 12.1416 12.2199 11.7557C12.4011 11.4118 12.6358 11.0983 12.7925 10.7414C12.9805 10.4746 13.138 10.1874 13.2861 9.89593C13.4661 9.6131 13.6422 9.32725 13.7955 9.0284C14.2738 8.23017 14.7233 7.41461 15.2004 6.61508C15.3193 6.42407 15.3931 6.19062 15.5651 6.04163ZM16.2395 7.20325C16.0464 7.52852 15.8656 7.86115 15.6665 8.18339C15.5349 8.38392 15.4543 8.61477 15.3117 8.80794C15.1487 9.04269 15.0374 9.30862 14.8859 9.55073C14.7683 9.76166 14.6304 9.9596 14.5188 10.174C14.3384 10.5071 14.1232 10.8202 13.9606 11.1632C13.6978 11.5556 13.492 11.9822 13.2403 12.3811C15.3656 12.3751 17.4913 12.3803 19.6166 12.3785C19.395 12.0567 19.2481 11.689 19.0189 11.3724C18.8343 11.0043 18.6174 10.6547 18.406 10.3026C18.2782 10.0371 18.1101 9.79588 17.9654 9.54034C17.5341 8.76723 17.0698 8.01361 16.6432 7.2379C16.5091 7.22057 16.3745 7.20628 16.2395 7.20325ZM12.7632 13.5861C12.7997 13.8291 12.8311 14.0742 12.8982 14.3111C13.0866 15.0743 13.5416 15.7577 14.1478 16.2411C14.4602 16.4628 14.7806 16.6885 15.1533 16.7898C15.9237 17.0666 16.7816 17.0921 17.56 16.8331C18.0134 16.7327 18.4017 16.462 18.7723 16.1908C19.235 15.8123 19.5902 15.306 19.8228 14.7512C19.9502 14.3743 20.0495 13.985 20.0873 13.5869C17.6458 13.5882 15.2047 13.5904 12.7632 13.5861Z",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 23,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 20,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "jsx-3114460579" + " " + "header__controls-item-amount",
                    children: "99"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 25,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 53
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "jsx-3114460579" + " " + "header__controls-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "header__controls-item-link",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "19",
                    height: "18",
                    viewBox: "0 0 19 18",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "jsx-3114460579",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M3.99275 0.805838C4.81675 0.401039 5.70784 0.115254 6.62394 0.0204982C6.93891 -0.00982383 7.25767 0.00268399 7.57416 0.00192594C8.15179 -0.0113399 8.72563 0.0944081 9.28128 0.246776C10.1007 0.484425 10.8978 0.827822 11.5888 1.3342C12.0175 1.61619 12.3897 1.97324 12.7501 2.33596C12.9692 2.57551 13.1636 2.83665 13.3721 3.08529C13.7652 3.69969 14.1389 4.33797 14.3576 5.03803C14.4747 5.47884 14.5975 5.92002 14.6604 6.37258C14.773 7.25571 14.7449 8.16309 14.5285 9.02879C14.3898 9.60983 14.2177 10.1897 13.9194 10.7109C13.8281 10.9133 13.6939 11.0922 13.5999 11.2931C13.4418 11.5141 13.3035 11.7525 13.114 11.9488C14.6392 13.477 16.1659 15.0037 17.6941 16.5289C17.8526 16.6794 18.0106 16.8693 18.0038 17.1013C18.0068 17.2726 18.0178 17.4659 17.9037 17.608C17.8052 17.7323 17.6896 17.8438 17.5641 17.9404C17.2401 18.0397 16.8201 18.0394 16.5927 17.7475C15.0474 16.2015 13.4998 14.6577 11.9583 13.1079C11.3648 13.6093 10.6655 13.9694 9.95367 14.2726C9.16909 14.5121 8.36177 14.7217 7.5355 14.7252C7.07271 14.738 6.60954 14.7062 6.15395 14.6243C5.70594 14.5531 5.27272 14.4159 4.83684 14.2946C4.24745 14.0638 3.68422 13.7677 3.15776 13.4168C2.72908 13.1033 2.32011 12.7599 1.96193 12.3665C1.62536 12.0235 1.35473 11.6247 1.08259 11.2309C0.686513 10.5699 0.392389 9.84938 0.196054 9.10459C0.0217028 8.43751 -0.0139255 7.74389 0.00426765 7.0571C0.0254931 6.77586 0.0235979 6.49311 0.0736292 6.21453C0.190748 5.48301 0.426881 4.7712 0.755495 4.1079C0.81197 3.99609 0.835849 3.86647 0.920371 3.76981C1.01551 3.63564 1.08714 3.4863 1.18038 3.35023C1.3589 3.06786 1.57571 2.8124 1.77583 2.54556C2.11127 2.19534 2.45353 1.84892 2.83179 1.54456C3.20855 1.28265 3.58151 1.01203 3.99275 0.805838ZM5.96595 1.87317C5.35648 2.00053 4.78339 2.27191 4.26792 2.61682C4.05415 2.7347 3.86502 2.89048 3.67702 3.04474C3.23318 3.4503 2.81171 3.893 2.5191 4.42212C2.30533 4.76817 2.12264 5.13279 1.99036 5.5175C1.8903 5.92609 1.75915 6.32861 1.71822 6.74933C1.69775 7.06316 1.64734 7.37889 1.6951 7.6931C1.70609 8.21843 1.85239 8.72746 1.98543 9.23195C2.11316 9.60415 2.28524 9.96043 2.48878 10.2966C2.59566 10.4736 2.69686 10.6544 2.828 10.8155C3.09522 11.1494 3.37153 11.4868 3.72175 11.7381C4.04771 12.0352 4.4218 12.282 4.82243 12.4673C6.30556 13.2519 8.15406 13.2996 9.67812 12.6C9.90023 12.4828 10.1352 12.3904 10.3498 12.2592C10.5616 12.1205 10.7765 11.9825 10.9657 11.8127C11.5134 11.3985 11.9466 10.8511 12.3021 10.2682C12.4279 10.0908 12.4867 9.87932 12.5894 9.68981C13.2345 8.29348 13.2565 6.62274 12.6463 5.21087C12.2449 4.19925 11.53 3.32143 10.6393 2.69983C10.5343 2.63198 10.4123 2.59067 10.3236 2.49932C9.95595 2.28479 9.57086 2.0949 9.16492 1.96452C8.96366 1.92624 8.7696 1.85991 8.57023 1.81518C8.25451 1.75151 7.93499 1.70905 7.61395 1.68518C7.05944 1.66736 6.50152 1.72687 5.96595 1.87317Z",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 28,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 27,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 53
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "jsx-3114460579" + " " + "header__controls-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "header__controls-item-link",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "21",
                    height: "20",
                    viewBox: "0 0 21 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "jsx-3114460579",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M0.445703 0H2.56289C2.67969 0.0308594 2.79531 0.0839844 2.87266 0.180469C2.96172 0.280078 2.98047 0.416797 3.00664 0.542578C3.20469 1.50781 3.40195 2.47305 3.60156 3.43789C8.90156 3.44453 14.202 3.43711 19.502 3.44141C19.7516 3.43438 19.9703 3.63555 20.0059 3.8793V4.02539C19.559 6.47891 19.1496 8.94023 18.7105 11.3953C18.6793 11.5469 18.5734 11.6805 18.432 11.7441C18.2891 11.8133 18.1266 11.7871 17.9734 11.7918C13.7539 11.7918 9.53438 11.7906 5.31484 11.7926C5.40742 12.3789 5.55156 12.9559 5.65586 13.5402C9.57891 13.5523 13.5027 13.5414 17.4262 13.5461C17.6363 13.5527 17.875 13.5027 18.0543 13.643C18.2812 13.7984 18.3242 14.148 18.1484 14.3574C18.0523 14.4801 17.8969 14.5496 17.7418 14.5449C13.5863 14.5457 9.43125 14.5453 5.27617 14.5453C5.12891 14.5504 4.9793 14.4945 4.88203 14.3813C4.76836 14.2641 4.75234 14.0941 4.72031 13.9422C4.55703 13.1332 4.39219 12.325 4.22695 11.5164C4.14219 10.9961 4.02148 10.4824 3.91953 9.96523C3.54805 8.15273 3.17539 6.34023 2.80391 4.52773C2.7668 4.28438 2.67344 4.05312 2.65547 3.80664C2.46328 2.87187 2.27266 1.93633 2.0793 1.00195C1.54453 0.995703 1.00898 1.0043 0.474219 0.998047C0.239844 0.990625 0.0453125 0.796484 0.00585938 0.570312V0.440234C0.0367188 0.215625 0.221094 0.03125 0.445703 0ZM3.80703 4.44023C4.24062 6.55742 4.67578 8.67461 5.11055 10.7918C9.34258 10.7883 13.5742 10.7973 17.8059 10.7871C18.168 8.6707 18.5465 6.55664 18.9082 4.43984C13.8746 4.44102 8.84101 4.44023 3.80703 4.44023Z",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M6.64316 15.7832C7.23886 15.7055 7.86269 15.9008 8.30761 16.3039C8.77792 16.7164 9.04628 17.3469 9.01464 17.9719C8.99667 18.5035 8.76191 19.0203 8.38261 19.3914C8.01269 19.7594 7.50409 19.9746 6.98417 20H6.81659C6.44706 19.9774 6.07987 19.8711 5.76855 19.6688C5.25917 19.3484 4.89706 18.8012 4.81073 18.2051C4.7123 17.5941 4.90175 16.9441 5.31425 16.4832C5.65214 16.0977 6.13417 15.843 6.64316 15.7832ZM6.66855 16.7902C6.13769 16.8945 5.73417 17.4281 5.78691 17.9688C5.82011 18.5504 6.37323 19.0426 6.95683 18.9988C7.57089 18.9836 8.09394 18.3828 8.01191 17.7715C7.96659 17.1348 7.29198 16.634 6.66855 16.7902Z",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 33,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M14.2033 16.3848C14.615 15.9715 15.2037 15.7387 15.7869 15.7695C16.2333 15.7856 16.6724 15.952 17.0193 16.2332C17.4751 16.5942 17.7693 17.152 17.806 17.7328C17.8564 18.3539 17.6068 18.9879 17.154 19.4145C16.7849 19.7699 16.2845 19.9762 15.774 20H15.6083C15.2001 19.975 14.7955 19.8445 14.4642 19.602C13.9513 19.2375 13.6146 18.634 13.5845 18.0043C13.5443 17.4086 13.7798 16.8039 14.2033 16.3848ZM15.4935 16.7832C14.9365 16.8801 14.5048 17.4477 14.5861 18.0125C14.6427 18.5754 15.1814 19.0383 15.7482 18.9992C16.3763 18.9848 16.9087 18.3566 16.8033 17.7328C16.7345 17.1234 16.0966 16.6539 15.4935 16.7832Z",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 34,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "jsx-3114460579" + " " + "header__controls-item-amount",
                    children: "12"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 53
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-3114460579" + " " + "menu",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "jsx-3114460579" + " " + "menu__langs",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "menu__langs-item",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "menu__langs-link",
              children: "\u0443\u043A\u0440"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "menu__langs-item active",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "menu__langs-link",
              children: "\u0440\u0443\u0441"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 51
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "menu__langs-item",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "menu__langs-link",
              children: "eng"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "jsx-3114460579" + " " + "menu__nav",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "menu__nav-item",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "menu__nav-link",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "menu__nav-link-icon",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "36",
                  height: "36",
                  viewBox: "0 0 36 36",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "jsx-3114460579",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M29.4985 25.4592C29.5097 25.5159 29.5212 25.5726 29.5305 25.63C29.9597 28.2685 28.3979 30.7542 25.9126 31.5365L27.3812 34.4737C27.5447 34.8007 27.5272 35.1889 27.335 35.4999C27.1429 35.8108 26.8034 36.0001 26.4378 36.0001H13.7816C13.416 36.0001 13.0766 35.8108 12.8844 35.4999C12.6922 35.1889 12.6748 34.8007 12.8382 34.4737L14.3288 31.4926C12.4539 30.873 11.0023 29.312 10.6889 27.3858C10.1556 24.1072 12.6737 21.1641 15.891 21.1641H16.9457V18.8733C15.7181 18.4379 14.8363 17.2656 14.8363 15.8906C14.8363 14.4335 15.8266 13.2041 17.1693 12.8381C17.0255 12.4769 16.9457 12.0837 16.9457 11.6719C16.9457 10.8621 17.2518 10.1228 17.7539 9.5625C17.481 9.25805 17.2664 8.90065 17.1271 8.50781H14.8363C10.1838 8.50781 6.39878 12.2929 6.39878 16.9453V25.6345C7.62636 26.0699 8.50815 27.2422 8.50815 28.6172V32.8359C8.50815 33.4184 8.03593 33.8906 7.45346 33.8906H6.39878V34.9453C6.39878 35.5278 5.92656 36 5.34409 36C4.76162 36 4.2894 35.5278 4.2894 34.9453V33.8906H3.23471C2.65224 33.8906 2.18003 33.4184 2.18003 32.8359V28.6172C2.18003 27.2422 3.06182 26.0699 4.2894 25.6345V16.9453C4.2894 11.1298 9.02073 6.39844 14.8363 6.39844H16.9457V5.25164C15.6312 4.26129 14.8363 2.70387 14.8363 1.05469C14.8363 0.472219 15.3085 0 15.891 0H24.3285C24.9109 0 25.3832 0.472219 25.3832 1.05469C25.3832 2.70387 24.5882 4.26122 23.2738 5.25164V6.40688C28.796 6.6112 33.5292 10.8654 33.807 16.4035C33.986 19.9699 32.3496 23.371 29.4985 25.4592ZM4.2894 31.7812H6.39878V28.6172C6.39878 28.0356 5.92564 27.5625 5.34409 27.5625C4.76254 27.5625 4.2894 28.0356 4.2894 28.6172V31.7812ZM24.7314 33.8906L23.6767 31.7812H16.5428L15.4881 33.8906H24.7314ZM15.891 23.2734C13.9777 23.2734 12.4457 25.0472 12.7709 27.047C13.0144 28.5434 14.4528 29.6719 16.1167 29.6719H24.3285C26.2228 29.6719 27.7773 27.9903 27.4485 25.9687C27.2026 24.4573 25.733 23.2734 24.1027 23.2734H22.2191C21.6366 23.2734 21.1644 22.8012 21.1644 22.2188V19.0547H19.055V22.2188C19.055 22.8012 18.5828 23.2734 18.0003 23.2734H15.891ZM18.0003 16.9453H22.2191C22.8006 16.9453 23.2738 16.4722 23.2738 15.8906C23.2738 15.3091 22.8006 14.8359 22.2191 14.8359H18.0003C17.4188 14.8359 16.9457 15.3091 16.9457 15.8906C16.9457 16.4722 17.4188 16.9453 18.0003 16.9453ZM19.055 11.6719C19.055 12.2534 19.5282 12.7266 20.1097 12.7266C20.6913 12.7266 21.1644 12.2534 21.1644 11.6719C21.1644 11.0903 20.6913 10.6172 20.1097 10.6172C19.5282 10.6172 19.055 11.0903 19.055 11.6719ZM17.1275 2.10938C17.3741 2.79759 17.8615 3.38723 18.5308 3.77677C18.8554 3.96563 19.055 4.31283 19.055 4.6883V7.45312C19.055 8.03468 19.5282 8.50781 20.1097 8.50781C20.6913 8.50781 21.1644 8.03468 21.1644 7.45312V4.6883C21.1644 4.31283 21.364 3.96563 21.6886 3.77677C22.3579 3.38723 22.8454 2.79759 23.0919 2.10938H17.1275ZM31.7004 16.5092C31.4828 12.172 27.6445 8.63002 23.0913 8.51105C22.952 8.90262 22.7377 9.25889 22.4656 9.56243C22.9678 10.1227 23.2738 10.862 23.2738 11.6718C23.2738 12.0836 23.1939 12.4768 23.0502 12.838C24.3929 13.204 25.3832 14.4335 25.3832 15.8906C25.3832 17.2655 24.5014 18.4378 23.2738 18.8732V21.1641H24.1028C25.9453 21.1641 27.624 22.0714 28.6279 23.4659C30.6766 21.7798 31.8355 19.2035 31.7004 16.5092Z",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "menu__nav-link-text",
                children: "\u041A\u0430\u043B\u044C\u044F\u043D\u044B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "menu__nav-link-arr",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "9",
                  height: "16",
                  viewBox: "0 0 9 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "jsx-3114460579",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M1 15L7.94911 7.674L1 1",
                    strokeWidth: "1.5",
                    strokeLinejoin: "round",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 43
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              className: "jsx-3114460579" + " " + "menu__nav-submenu",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "jsx-3114460579" + " " + "menu__nav-submenu-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "menu__nav-submenu-link",
                  children: "Maklaud"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 54
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "jsx-3114460579" + " " + "menu__nav-submenu-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "menu__nav-submenu-link",
                  children: "Gramm"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 54
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "jsx-3114460579" + " " + "menu__nav-submenu-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "menu__nav-submenu-link",
                  children: "Capsule"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 54
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "jsx-3114460579" + " " + "menu__nav-submenu-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "menu__nav-submenu-link",
                  children: "Nuahule (\u0445\u0443\u043B\u0438\u0433\u0430\u043D)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 54
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "jsx-3114460579" + " " + "menu__nav-submenu-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "menu__nav-submenu-link",
                  children: "Mamay"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 54
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "jsx-3114460579" + " " + "menu__nav-submenu-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "menu__nav-submenu-link",
                  children: "Shi carver"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 54
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "jsx-3114460579" + " " + "menu__nav-submenu-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "menu__nav-submenu-link",
                  children: "\u0414\u0443\u0448\u0430"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 54
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "jsx-3114460579" + " " + "menu__nav-submenu-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "menu__nav-submenu-link",
                  children: "\u0421wp  "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 54
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "jsx-3114460579" + " " + "menu__nav-submenu-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "menu__nav-submenu-link",
                  children: "Geometry"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 54
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "jsx-3114460579" + " " + "menu__nav-submenu-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "menu__nav-submenu-link",
                  children: "Darkside "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 54
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "jsx-3114460579" + " " + "menu__nav-submenu-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "menu__nav-submenu-link",
                  children: "Alpha hookah"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 54
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "jsx-3114460579" + " " + "menu__nav-submenu-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "menu__nav-submenu-link",
                  children: "Hub"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 54
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "jsx-3114460579" + " " + "menu__nav-submenu-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "menu__nav-submenu-link",
                  children: "Nube "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 54
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "jsx-3114460579" + " " + "menu__nav-submenu-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "menu__nav-submenu-link",
                  children: "Union"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 54
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "jsx-3114460579" + " " + "menu__nav-submenu-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "menu__nav-submenu-link",
                  children: "Ferro"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 54
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "menu__nav-item",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "menu__nav-link",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "menu__nav-link-icon",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "39",
                  height: "28",
                  viewBox: "0 0 39 28",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "jsx-3114460579",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M0.0734799 24.5471C-0.0603729 23.829 0.0321767 23.0951 0.0191739 22.3698C-0.00912641 21.945 0.338126 21.5331 0.793226 21.4767C3.28824 21.1276 5.78555 20.7864 8.28057 20.4395C8.32111 19.9704 8.14366 19.41 8.5238 19.0267C8.87794 18.6469 9.58468 18.6676 9.91281 19.0681C10.2256 19.4193 10.0872 19.9055 10.117 20.3224C14.3758 20.3224 18.6347 20.3224 22.8935 20.3224C23.91 20.3067 24.938 20.3838 25.9415 20.191C27.8108 19.8548 29.5257 18.8339 30.6493 17.4005C31.7262 16.0505 32.2632 14.3379 32.1278 12.6581C32.0322 11.2461 31.4524 9.87401 30.5216 8.76035C29.6114 7.66311 28.3493 6.83216 26.9473 6.37741C25.3839 5.87841 23.6476 5.86984 22.0789 6.35171C20.3778 6.87927 18.8817 7.97222 17.9463 9.40142C16.7339 11.189 16.4685 13.4912 17.2051 15.4873C17.4575 16.1883 17.8935 16.8108 18.2882 17.4469C18.4128 17.6596 18.5421 17.903 18.4817 18.1522C18.2889 18.7419 17.3734 19.0017 16.9083 18.5248C15.771 17.1585 15.1109 15.463 14.9801 13.7404C14.8623 12.0578 15.2746 10.3466 16.1488 8.87172C17.0514 7.34472 18.4457 6.0733 20.1093 5.27661C21.5702 4.572 23.2308 4.2272 24.8745 4.29002C26.6712 4.36141 28.4411 4.92609 29.9142 5.8884C32.3251 7.43538 33.8641 10.0767 33.9742 12.8024C34.0614 14.7156 33.4487 16.6459 32.2792 18.2164C30.7418 20.3103 28.1979 21.7145 25.4963 21.9843C24.8607 22.0514 24.2205 22.0343 23.5826 22.0357C19.0943 22.0364 14.6061 22.0357 10.1186 22.0364C10.1155 22.8931 10.1178 23.749 10.117 24.6057C14.8332 24.6057 19.5487 24.605 24.2641 24.6064C25.4221 24.6164 26.5855 24.495 27.6992 24.1959C31.187 23.3293 34.1914 20.9356 35.65 17.8545C36.3384 16.4282 36.7201 14.8705 36.7369 13.3049C36.7813 10.2973 35.4978 7.28975 33.2261 5.1531C30.8979 2.90652 27.5401 1.63795 24.1945 1.71576C20.8474 1.7793 17.5562 3.19278 15.3373 5.5336C13.2217 7.72665 12.0667 10.71 12.2243 13.6604C12.261 13.9617 12.1738 14.2872 11.916 14.4864C11.5795 14.7748 11.0158 14.7662 10.6876 14.4714C10.4918 14.3094 10.3947 14.0666 10.3886 13.8261C10.2532 11.351 10.8804 8.83888 12.2028 6.68795C13.5383 4.46706 15.5889 2.63025 18.0136 1.46305C21.0861 -0.0275383 24.7567 -0.401611 28.1 0.444338C30.8038 1.11325 33.2881 2.55243 35.11 4.53488C36.8876 6.43167 38.0548 8.81603 38.4303 11.3118C38.8273 13.8689 38.3791 16.5281 37.1798 18.8554C36.0065 21.1355 34.1119 23.0873 31.7943 24.3965C29.8745 25.4973 27.6648 26.1491 25.4176 26.289C24.8064 26.329 24.1938 26.3183 23.5819 26.319C19.0943 26.3197 14.6061 26.319 10.1186 26.3197C10.117 26.6845 10.1522 27.0643 10.0138 27.4134C9.79119 28.0366 8.67983 28.0602 8.40983 27.4612C8.2255 27.0657 8.27904 26.6217 8.28286 26.2019C5.78555 25.8543 3.28748 25.5145 0.790931 25.1639C0.431441 25.1404 0.130081 24.8784 0.0734799 24.5471ZM1.85563 23.5805C3.99651 23.8775 6.13816 24.1731 8.27981 24.4693C8.28286 23.7026 8.27981 22.9359 8.28057 22.1685C6.14045 22.4647 4.0011 22.766 1.86022 23.0566C1.85716 23.2315 1.85563 23.4056 1.85563 23.5805Z",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M11.1597 17.4804C10.918 16.8936 11.5246 16.2554 12.1694 16.3325C12.8998 16.4175 13.1798 17.4226 12.6466 17.8673C12.1778 18.2507 11.3402 18.0458 11.1597 17.4804Z",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M19.7165 13.4884C19.6431 12.5846 19.8733 11.6609 20.3766 10.8849C21.0849 9.7655 22.3423 8.9631 23.7206 8.76392C24.6981 8.61972 25.7269 8.75964 26.6088 9.1844C27.5144 9.60559 28.267 10.3066 28.7221 11.1504C29.2698 12.1299 29.383 13.3049 29.0625 14.3657C28.7145 15.5194 27.8456 16.5259 26.7097 17.0849C25.8768 17.5104 24.9031 17.6789 23.9608 17.5839C22.6781 17.4611 21.4688 16.8165 20.6894 15.8599C20.1288 15.1796 19.7807 14.3458 19.7165 13.4884ZM21.5507 13.4163C21.6363 14.3258 22.2475 15.1731 23.1194 15.5879C24.009 16.0298 25.1433 15.992 25.9976 15.4944C27.0654 14.904 27.6314 13.6426 27.3232 12.5189C27.1235 11.7337 26.5323 11.0448 25.7513 10.6971C25.0194 10.3602 24.1359 10.333 23.3802 10.6179C22.1985 11.0426 21.4122 12.2398 21.5507 13.4163Z",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "menu__nav-link-text",
                children: "\u0410\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "menu__nav-link-arr",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "9",
                  height: "16",
                  viewBox: "0 0 9 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "jsx-3114460579",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M1 15L7.94911 7.674L1 1",
                    strokeWidth: "1.5",
                    strokeLinejoin: "round",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 43
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "menu__nav-item",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "menu__nav-link",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "menu__nav-link-icon",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "39",
                  height: "26",
                  viewBox: "0 0 39 26",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "jsx-3114460579",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M38.3658 7.85199L38.2416 7.08123L37.4158 6.96528C37.1669 6.93034 31.6449 6.18566 26.6813 7.9112C24.4448 3.59936 20.1999 0.630139 19.9576 0.463147L19.2857 0L18.6139 0.463077C18.3716 0.630069 14.1267 3.59929 11.8903 7.9112C6.92656 6.18566 1.40467 6.93034 1.15569 6.96528L0.329799 7.08123L0.205572 7.85199C0.144626 8.23048 -1.22714 17.1769 4.02429 22.0782C9.07186 26.7892 18.1233 25.7893 19.1787 25.654H19.3928C19.737 25.6981 20.9308 25.8342 22.5598 25.8342C25.9255 25.8341 31.1458 25.2528 34.5471 22.0782C39.7986 17.1769 38.4268 8.23048 38.3658 7.85199ZM34.6967 8.89726L27.7459 15.3846C27.9302 14.6279 28.0353 13.8456 28.0353 13.0427C28.0353 11.9441 27.8401 10.8837 27.5113 9.87565C30.0353 9.00821 32.793 8.8621 34.6967 8.89726ZM25.7738 13.0427C25.7738 15.6765 24.3417 18.1308 22.7584 20.0397L20.4166 22.2253V3.62488C22.5379 5.52936 25.7738 9.08344 25.7738 13.0427ZM18.155 3.62495V22.2254L15.8131 20.0397C14.2298 18.1309 12.7977 15.6766 12.7977 13.0427C12.7978 9.08323 16.0338 5.52915 18.155 3.62495ZM11.0602 9.87551C10.7313 10.8836 10.5362 11.9441 10.5362 13.0427C10.5362 13.8457 10.6412 14.628 10.8256 15.3847L3.87241 8.89508C5.77401 8.8588 8.52975 9.00455 11.0602 9.87551ZM5.62349 20.5856C2.62374 17.7859 2.21942 13.1371 2.2766 10.3907L14.0583 21.387C14.8092 22.2889 15.5843 23.0727 16.2782 23.7129C13.3087 23.7381 8.53367 23.3019 5.62349 20.5856ZM32.948 20.5856C30.0377 23.3019 25.2625 23.7381 22.2933 23.7129C22.9872 23.0727 23.7623 22.2888 24.5132 21.3869L36.2949 10.3907C36.3521 13.1373 35.9477 17.7859 32.948 20.5856Z",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "menu__nav-link-text",
                children: "\u0422\u0430\u0431\u0430\u043A"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "menu__nav-link-arr",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "9",
                  height: "16",
                  viewBox: "0 0 9 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "jsx-3114460579",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M1 15L7.94911 7.674L1 1",
                    strokeWidth: "1.5",
                    strokeLinejoin: "round",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 43
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "menu__nav-item",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "menu__nav-link",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "menu__nav-link-icon",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "35",
                  height: "35",
                  viewBox: "0 0 35 35",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "jsx-3114460579",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M16.7257 0.0225468C17.3551 -0.0466153 18.0131 0.0417123 18.5818 0.310028C23.011 2.43322 27.4428 4.55058 31.8729 6.67294C32.2925 6.8871 32.7487 7.04875 33.1219 7.33373C33.8638 7.88536 34.3138 8.76864 34.2843 9.65525C34.2861 14.9332 34.2852 20.2112 34.2852 25.4892C34.2459 26.5225 33.5674 27.5124 32.5693 27.9649C27.9267 30.1872 23.2842 32.4096 18.6416 34.6311C17.7408 35.0744 16.6132 35.0836 15.7016 34.6603C11.0234 32.4188 6.34333 30.1806 1.66418 27.9407C0.666027 27.4674 -0.00714231 26.4475 0.000892873 25.4009C7.49166e-08 20.1254 -0.000892873 14.8491 0.00178552 9.57275C-0.00892806 8.50532 0.692811 7.47039 1.71953 7.00459C6.36208 4.78223 11.0046 2.55988 15.6481 0.337526C15.9829 0.17337 16.3498 0.0683771 16.7257 0.0225468ZM16.7453 2.21157C12.0465 4.45642 7.35309 6.70961 2.65429 8.95279C7.4879 11.3218 12.3126 13.7041 17.1426 16.079C21.9682 13.6983 26.8018 11.3335 31.6238 8.94613C26.9357 6.71461 22.2584 4.46475 17.5747 2.2274C17.3212 2.10408 17.0042 2.10074 16.7453 2.21157ZM2.28289 11.4135C2.29092 15.9382 2.28556 20.4637 2.28556 24.9884C2.29449 25.2634 2.23735 25.5734 2.4293 25.8084C2.55965 26.0033 2.8016 26.0842 3.00962 26.1867C7.33969 28.259 11.6689 30.3314 15.9989 32.4029C16.0016 27.7032 15.9963 23.0027 16.0016 18.3022C11.4314 16.0015 6.85312 13.715 2.28289 11.4135ZM18.3988 18.2422C18.4024 22.9452 18.4015 27.6482 18.3997 32.3513C22.7726 30.2556 27.1464 28.1624 31.5211 26.07C31.7979 25.9525 31.9988 25.6859 31.997 25.3992C32.0032 20.737 31.9934 16.0757 32.0023 11.4143C27.4705 13.6941 22.9333 15.9657 18.3988 18.2422Z",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "menu__nav-link-text",
                children: "\u0423\u0433\u043E\u043B\u044C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "menu__nav-link-arr",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "9",
                  height: "16",
                  viewBox: "0 0 9 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "jsx-3114460579",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M1 15L7.94911 7.674L1 1",
                    strokeWidth: "1.5",
                    strokeLinejoin: "round",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 43
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "jsx-3114460579" + " " + "menu__controls",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "menu__controls-item",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "menu__controls-link",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "menu__controls-link-icon",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "34",
                  height: "31",
                  viewBox: "0 0 34 31",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "jsx-3114460579",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M15.8814 0.817822C16.5981 0.662669 17.3428 0.664824 18.0609 0.807766C18.819 1.01536 19.5237 1.4133 20.1143 1.93837C20.4825 2.33129 20.8816 2.71773 21.1139 3.2148C21.5729 3.99919 21.7932 4.92723 21.7602 5.83876C22.9203 6.06862 24.029 6.52618 25.1905 6.76106C26.086 7.0139 26.9786 7.28039 27.8747 7.53108C28.2689 7.61728 28.6631 7.71066 29.0433 7.84642C29.2467 7.92758 29.3537 8.16822 29.2946 8.3794C29.2024 8.78955 29.0721 9.19036 28.9764 9.60051C28.9243 9.82606 28.6491 9.85192 28.4689 9.78368C27.7804 9.57896 27.0912 9.37496 26.3999 9.17959C25.282 8.92459 24.1944 8.5482 23.0829 8.26447C22.4367 8.1402 21.8172 7.90963 21.1822 7.73867C20.7436 8.62577 19.9989 9.32037 19.1703 9.82247C18.3593 10.2125 17.452 10.4761 16.5488 10.3554C15.8659 10.2793 15.2028 10.0444 14.6044 9.70251C13.7442 9.13936 13.0121 8.34133 12.6193 7.36946C12.306 6.71437 12.1962 5.97739 12.2307 5.25334C11.6323 5.08167 11.0368 4.89922 10.4293 4.7649C9.55568 4.52714 8.69263 4.25203 7.81691 4.02074C6.88135 3.80812 5.97114 3.49781 5.04544 3.24712C4.9145 3.20546 4.75189 3.1796 4.6836 3.04097C4.58998 2.82261 4.70754 2.59419 4.75611 2.38085C4.86663 2.05689 4.90605 1.70493 5.06374 1.40037C5.19608 1.19996 5.45021 1.29765 5.63394 1.34721C6.05984 1.48369 6.4977 1.5742 6.93063 1.68338C7.92461 1.96998 8.91086 2.28891 9.91962 2.51733C10.8812 2.77879 11.8266 3.10705 12.7995 3.31967C13.4345 2.10215 14.584 1.19062 15.8814 0.817822ZM16.3693 2.76011C15.6731 2.90665 15.0205 3.29669 14.6425 3.9252C14.1715 4.67152 14.137 5.62614 14.3292 6.47158C14.622 7.46787 15.5379 8.22137 16.5431 8.35138C17.1155 8.41819 17.7173 8.36934 18.2411 8.10644C19.0168 7.73939 19.6082 6.9629 19.7138 6.09088C19.8475 5.58879 19.7292 5.07233 19.6265 4.57742C19.4899 4.09328 19.1816 3.67379 18.824 3.33476C18.1468 2.77017 17.2182 2.5985 16.3693 2.76011Z",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M6.64208 5.53849C6.76809 5.48606 6.90818 5.49324 7.04193 5.48965C7.69731 5.49252 8.35269 5.49252 9.00808 5.48965C9.16436 5.49252 9.32697 5.48749 9.4755 5.54424C9.61137 5.64265 9.68036 5.80498 9.76624 5.94505C10.0929 6.56136 10.461 7.15252 10.8201 7.74871C11.0193 8.19406 11.3051 8.58841 11.5472 9.00861C11.8802 9.68741 12.33 10.2965 12.6616 10.9753C12.8665 11.3366 13.0995 11.6814 13.2924 12.0499C13.5641 12.5764 13.9006 13.0634 14.1814 13.5849C14.4194 14.013 14.663 14.4383 14.929 14.8499C15.067 15.1278 15.2191 15.3979 15.3796 15.663C15.5858 16.0659 15.8956 16.4143 16.0174 16.8589C16.1434 17.4257 16.0709 18.0082 16.0476 18.5822C15.9209 19.6596 15.5126 20.6789 15.0079 21.6263C14.3398 22.7447 13.4367 23.7151 12.3688 24.4428C11.8091 24.7696 11.2417 25.0893 10.6391 25.3263C9.62967 25.6115 8.58078 25.8499 7.52766 25.7408C6.9483 25.712 6.38162 25.5756 5.82338 25.424C5.03777 25.2451 4.34437 24.8077 3.65661 24.4004C3.16595 24.0477 2.69289 23.6641 2.27263 23.2245C1.16953 22.0415 0.398699 20.5402 0.0854391 18.9377C0.0340503 18.246 -0.0764707 17.5413 0.0826232 16.8554C0.126268 16.545 0.341679 16.3102 0.484582 16.0451C0.70492 15.6465 0.968903 15.2737 1.14912 14.8534C1.33426 14.5668 1.52432 14.2824 1.68201 13.9778C2.03188 13.2926 2.47255 12.6612 2.83298 11.9817C3.3349 11.1104 3.83823 10.2405 4.34719 9.37279C4.59146 8.86423 4.93147 8.41242 5.18982 7.91176C5.48337 7.34359 5.84028 6.81348 6.15142 6.25608C6.29714 6.00754 6.40696 5.71519 6.64208 5.53849ZM7.70787 7.49587C7.30662 8.25152 6.84201 8.96911 6.44497 9.7262C6.11693 10.2628 5.791 10.8008 5.51153 11.3654C5.03566 12.0226 4.73084 12.7862 4.26834 13.4535C3.78332 14.337 3.24409 15.1875 2.76188 16.0724C6.28799 16.0724 9.81411 16.0724 13.3402 16.0717C13.2593 15.9503 13.1727 15.8332 13.0967 15.7082C12.7517 15 12.3012 14.3513 11.9386 13.6517C11.5304 13.0074 11.1798 12.3279 10.7856 11.675C10.5251 11.305 10.3597 10.8791 10.1105 10.5027C9.53745 9.49275 8.93275 8.50221 8.36255 7.49084C8.14432 7.4894 7.9261 7.49443 7.70787 7.49587ZM1.97626 18.0837C2.03892 18.7919 2.24447 19.4786 2.47748 20.1459C2.87944 20.9957 3.42078 21.7966 4.15923 22.3784C4.64989 22.8417 5.27007 23.1067 5.87407 23.3747C7.1799 23.8588 8.64765 23.889 9.97038 23.4544C10.5976 23.226 11.2276 22.9624 11.7444 22.5242C12.3237 22.0903 12.8172 21.5416 13.1945 20.9181C13.7408 20.0769 13.997 19.0735 14.1103 18.0808C10.0654 18.0858 6.02119 18.0808 1.97626 18.0837Z",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M24.5216 10.3564C24.7152 10.2796 24.9278 10.3026 25.1313 10.2983C25.8106 10.3076 26.4906 10.2889 27.1699 10.3062C27.3635 10.2975 27.5029 10.4505 27.5979 10.6043C27.8907 11.0812 28.1231 11.5948 28.4448 12.0538C28.7644 12.6292 29.0734 13.2103 29.4268 13.7655C29.7309 14.3502 30.0843 14.9055 30.4151 15.4744C30.7474 16.1316 31.1768 16.7314 31.5077 17.3901C31.9878 18.1709 32.4087 18.9876 32.898 19.7633C33.1943 20.3818 33.6273 20.9227 33.8863 21.5605C34.0285 22.0648 34.0144 22.5963 33.963 23.1135C33.9109 24.3684 33.395 25.5428 32.8086 26.6267C32.3806 27.2567 31.9103 27.8622 31.3507 28.3765C30.898 28.8369 30.3518 29.1824 29.8139 29.5279C28.7946 30.0566 27.6936 30.5135 26.5356 30.5314C25.9521 30.5795 25.3657 30.54 24.7842 30.4898C23.9901 30.3583 23.2264 30.0782 22.4964 29.7377C21.9015 29.4784 21.3947 29.0596 20.8702 28.6832C20.533 28.3751 20.2127 28.0468 19.9051 27.7078C19.6967 27.4456 19.4975 27.1748 19.2877 26.9133C18.7063 25.9932 18.2565 24.9761 18.0263 23.9036C17.9172 23.1904 17.8531 22.4548 17.9643 21.7372C18.191 21.0477 18.6464 20.473 18.9738 19.833C19.2744 19.2627 19.6637 18.7426 19.9234 18.1507C20.2353 17.7083 20.4964 17.232 20.7421 16.7486C21.0406 16.2796 21.3327 15.8055 21.5869 15.3099C22.3802 13.986 23.1257 12.6335 23.9169 11.3075C24.114 10.9907 24.2365 10.6035 24.5216 10.3564ZM25.6402 12.2829C25.3199 12.8224 25.02 13.374 24.6899 13.9085C24.4717 14.241 24.3379 14.6239 24.1014 14.9442C23.8311 15.3336 23.6466 15.7746 23.3953 16.1761C23.2003 16.5259 22.9715 16.8542 22.7864 17.2098C22.4872 17.7621 22.1303 18.2815 21.8607 18.8504C21.4249 19.5012 21.0835 20.2087 20.6661 20.8702C24.1908 20.8602 27.7162 20.8688 31.2409 20.8659C30.8734 20.3322 30.6298 19.7224 30.2497 19.1973C29.9435 18.5868 29.5838 18.0071 29.2332 17.4231C29.0213 16.9828 28.7425 16.5827 28.5025 16.1589C27.7873 14.8767 27.0171 13.6269 26.3097 12.3404C26.0872 12.3117 25.8641 12.288 25.6402 12.2829ZM19.8748 22.8686C19.9354 23.2715 19.9875 23.6781 20.0987 24.071C20.4113 25.3367 21.1659 26.4701 22.1711 27.2718C22.6892 27.6395 23.2207 28.0138 23.8388 28.1818C25.1165 28.6408 26.5392 28.6832 27.8302 28.2537C28.582 28.087 29.2261 27.6381 29.8407 27.1884C30.608 26.5606 31.1972 25.7209 31.583 24.8008C31.7942 24.1759 31.9589 23.5301 32.0215 22.87C27.9724 22.8722 23.924 22.8757 19.8748 22.8686Z",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "menu__controls-link-text",
                children: "\u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 48
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "menu__controls-item",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "menu__controls-link",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "menu__controls-link-icon",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "30",
                  height: "31",
                  viewBox: "0 0 30 31",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "jsx-3114460579",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.8018 4.08536C10.8523 5.82015 10.3125 7.81115 10.3125 9.92822C10.3125 16.6592 15.769 22.1157 22.5 22.1157C23.9519 22.1157 25.3444 21.8618 26.6357 21.3961C24.5665 25.1768 20.5514 27.7407 15.9375 27.7407C9.20653 27.7407 3.75 22.2842 3.75 15.5532C3.75 10.2741 7.10647 5.77894 11.8018 4.08536Z",
                    strokeWidth: "1.8",
                    strokeLinecap: "round",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "menu__controls-link-text",
                children: "\u043D\u043E\u0447\u043D\u043E\u0439 \u0440\u0435\u0436\u0438\u043C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 48
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "jsx-3114460579" + " " + "menu__page-nav",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "menu__page-nav-item",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "menu__page-nav-link",
              children: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 48
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "menu__page-nav-item",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "menu__page-nav-link",
              children: "\u0411\u043B\u043E\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 48
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "menu__page-nav-item",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "menu__page-nav-link",
              children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 48
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "jsx-3114460579" + " " + "socials",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "socials__item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "socials__item-link",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "jsx-3114460579",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  d: "M9 18C13.9705 18 18 13.9705 18 9C18 4.02945 13.9705 0 9 0C4.02945 0 0 4.02945 0 9C0 13.9705 4.02945 18 9 18Z",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  d: "M3.35162 9.44026C4.40371 8.86074 5.57813 8.37706 6.67546 7.89091C8.56328 7.09464 10.4586 6.31216 12.3731 5.58369C12.7455 5.45956 13.4148 5.33818 13.4804 5.89018C13.4445 6.67153 13.2967 7.4483 13.1953 8.22508C12.9379 9.93328 12.6405 11.6356 12.3504 13.3382C12.2505 13.9053 11.54 14.1989 11.0855 13.836C9.99301 13.0981 8.89216 12.3673 7.81366 11.6123C7.46037 11.2533 7.78797 10.7378 8.1035 10.4815C9.00327 9.59473 9.9575 8.84135 10.8102 7.9088C11.0403 7.35331 10.3606 7.82146 10.1364 7.9649C8.90465 8.81375 7.703 9.71443 6.4043 10.4605C5.74092 10.8256 4.96775 10.5136 4.30467 10.3098C3.71014 10.0636 2.83893 9.81564 3.35156 9.4403L3.35162 9.44026Z",
                  fill: "#1B1B1B",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 41
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "socials__item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "socials__item-link",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "jsx-3114460579",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.8842 4.19583C14.8842 4.79236 14.4006 5.27583 13.8042 5.27583C13.2078 5.27583 12.7242 4.79236 12.7242 4.19583C12.7242 3.5993 13.2078 3.11583 13.8042 3.11583C14.4007 3.11583 14.8842 3.5993 14.8842 4.19583ZM9 12C7.34316 12 6.00005 10.6568 6.00005 9C6.00005 7.34316 7.34316 6.00005 9 6.00005C10.6568 6.00005 12 7.34316 12 9C12 10.6568 10.6568 12 9 12ZM9 4.37836C6.44752 4.37836 4.37836 6.44752 4.37836 9C4.37836 11.5525 6.44752 13.6216 9 13.6216C11.5525 13.6216 13.6216 11.5525 13.6216 9C13.6216 6.44752 11.5525 4.37836 9 4.37836ZM9 1.62169C11.4031 1.62169 11.6878 1.63083 12.6367 1.67414C13.5142 1.71422 13.9908 1.86075 14.3079 1.98408C14.7279 2.14734 15.0277 2.34239 15.3427 2.65739C15.6577 2.97225 15.8528 3.27206 16.0161 3.69225C16.1392 4.00936 16.2859 4.48594 16.326 5.36344C16.3693 6.31252 16.3785 6.59714 16.3785 9.00028C16.3785 11.4034 16.3693 11.688 16.326 12.637C16.2859 13.5145 16.1394 13.9911 16.0161 14.3082C15.8528 14.7282 15.6577 15.028 15.3427 15.343C15.0279 15.658 14.7281 15.8531 14.3079 16.0163C13.9908 16.1395 13.5142 16.2862 12.6367 16.3263C11.6878 16.3696 11.4031 16.3787 9 16.3787C6.59672 16.3787 6.31209 16.3696 5.36316 16.3263C4.48566 16.2862 4.00908 16.1397 3.69197 16.0163C3.27192 15.8531 2.97211 15.658 2.65711 15.343C2.34225 15.0282 2.14706 14.7284 1.9838 14.3082C1.86061 13.9911 1.71394 13.5145 1.67386 12.637C1.63055 11.6879 1.62141 11.4033 1.62141 9.00028C1.62141 6.59714 1.63055 6.31252 1.67386 5.36344C1.71394 4.48594 1.86047 4.00936 1.9838 3.69225C2.14706 3.2722 2.34211 2.97239 2.65711 2.65739C2.97197 2.34239 3.27178 2.14734 3.69197 1.98408C4.00908 1.86089 4.48566 1.71422 5.36316 1.67414C6.31223 1.63083 6.59686 1.62169 9 1.62169ZM9 0C6.5558 0 6.24923 0.0104063 5.28933 0.0541406C4.33139 0.097875 3.67706 0.250031 3.10472 0.4725C2.51283 0.702422 2.01094 1.01025 1.51059 1.51059C1.01025 2.01094 0.702422 2.51283 0.4725 3.10472C0.250031 3.6772 0.097875 4.33139 0.0541406 5.28933C0.0104063 6.24923 0 6.5558 0 9C0 11.4442 0.0104063 11.7508 0.0541406 12.7107C0.097875 13.6686 0.250031 14.3228 0.4725 14.8953C0.702422 15.4872 1.01025 15.9891 1.51059 16.4894C2.01094 16.9897 2.51283 17.2974 3.10472 17.5275C3.6772 17.75 4.33139 17.9021 5.28933 17.9459C6.24923 17.9896 6.5558 18 9 18C11.4442 18 11.7508 17.9896 12.7107 17.9459C13.6686 17.9021 14.3228 17.75 14.8953 17.5275C15.4872 17.2974 15.9891 16.9897 16.4894 16.4894C16.9897 15.9891 17.2974 15.4872 17.5275 14.8953C17.75 14.3228 17.9021 13.6686 17.9459 12.7107C17.9896 11.7508 18 11.4442 18 9C18 6.5558 17.9896 6.24923 17.9459 5.28933C17.9021 4.33139 17.75 3.6772 17.5275 3.10472C17.2974 2.51283 16.9897 2.01094 16.4894 1.51059C15.9891 1.01025 15.4872 0.702563 14.8953 0.4725C14.3228 0.250031 13.6686 0.097875 12.7107 0.0541406C11.7508 0.0104063 11.4442 0 9 0Z",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 41
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "socials__item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "socials__item-link",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                width: "9",
                height: "18",
                viewBox: "0 0 9 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "jsx-3114460579",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  d: "M5.78571 18V9.99997H8.35714L9 6.66664H5.78571V5.33331C5.78571 3.99999 6.42983 3.33332 7.71428 3.33332H9V0C8.35714 0 7.55995 0 6.42857 0C4.06606 0 2.57143 1.92065 2.57143 4.66665V6.66664H0V9.99997H2.57143V17.9999L5.78571 18Z",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 41
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "socials__item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "socials__item-link",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                width: "22",
                height: "16",
                viewBox: "0 0 22 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "jsx-3114460579",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  d: "M21.788 3.0855C21.7234 2.36466 21.407 1.68961 20.8942 1.17886C20.3814 0.668108 19.7052 0.354304 18.9841 0.292534C17.2597 0.149446 14.7038 0 11.5501 0C7.75237 0 4.88562 0.155155 3.03225 0.300652C2.30777 0.358854 1.62723 0.671447 1.11105 1.18312C0.594864 1.69479 0.276309 2.37256 0.21175 3.0965C0.0982961 4.29023 0 5.86679 0 7.74653C0 9.57948 0.0974819 11.1282 0.210408 12.3071C0.275612 13.0304 0.594435 13.7073 1.11052 14.2183C1.62661 14.7292 2.30672 15.0413 3.03063 15.0992C4.88393 15.2447 7.75123 15.4 11.5501 15.4C14.7038 15.4 17.2597 15.2506 18.9841 15.1074C19.7052 15.0457 20.3815 14.7319 20.8942 14.2211C21.407 13.7104 21.7235 13.0353 21.788 12.3145C21.9016 11.127 22 9.56108 22 7.7C22 5.83892 21.9016 4.27297 21.788 3.0855ZM8.55353 10.9327V4.46734L14.9314 7.7L8.55353 10.9327Z",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 41
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-3114460579" + " " + "panel cart-panel",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-3114460579" + " " + "panel__header",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3114460579" + " " + "panel__close-btn",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              width: "17",
              height: "17",
              viewBox: "0 0 17 17",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "jsx-3114460579",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                y: "15.5562",
                width: "22",
                height: "2",
                rx: "1",
                transform: "rotate(-45 0 15.5562)",
                className: "jsx-3114460579"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                x: "1.41406",
                width: "22",
                height: "2",
                rx: "1",
                transform: "rotate(45 1.41406 0)",
                className: "jsx-3114460579"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3114460579" + " " + "panel__title",
            children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043A\u043E\u0440\u0437\u0438\u043D\u0443"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-3114460579" + " " + "cart-list",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3114460579" + " " + "cart-list__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-3114460579" + " " + "cart-list__item-img",
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "static/img/product-img-1.jpg",
                alt: "",
                className: "jsx-3114460579"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 51
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-3114460579" + " " + "cart-list__item-content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "cart-list__item-title",
                children: "\u0423\u0433\u043E\u043B\u044C Oasis Premium Coalus 25\u043C\u043C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "cart-list__item-amount",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "cart-list__item-amount-btn-sub",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "12",
                    height: "2",
                    viewBox: "0 0 12 2",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "jsx-3114460579",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("line", {
                      y1: "1",
                      x2: "12",
                      y2: "1",
                      strokeWidth: "2",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 178,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "number",
                  value: "1",
                  className: "jsx-3114460579" + " " + "cart-list__item-amount-input"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "cart-list__item-amount-btn-add",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "jsx-3114460579",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("line", {
                      y1: "6",
                      x2: "12",
                      y2: "6",
                      strokeWidth: "2",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 184,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("line", {
                      x1: "6",
                      x2: "6",
                      y2: "12",
                      strokeWidth: "2",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 185,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "cart-list__item-price",
                children: "15 900 \u0433\u0440\u043D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-3114460579" + " " + "cart-list__item-delete-btn",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                width: "17",
                height: "17",
                viewBox: "0 0 17 17",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "jsx-3114460579",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                  y: "15.5562",
                  width: "22",
                  height: "2",
                  rx: "1",
                  transform: "rotate(-45 0 15.5562)",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                  x: "1.41406",
                  width: "22",
                  height: "2",
                  rx: "1",
                  transform: "rotate(45 1.41406 0)",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3114460579" + " " + "cart-list__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-3114460579" + " " + "cart-list__item-img",
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "static/img/product-img-1.jpg",
                alt: "",
                className: "jsx-3114460579"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 51
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-3114460579" + " " + "cart-list__item-content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "cart-list__item-title",
                children: "\u0423\u0433\u043E\u043B\u044C Oasis Premium Coalus 25\u043C\u043C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "cart-list__item-amount",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "cart-list__item-amount-btn-sub",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "12",
                    height: "2",
                    viewBox: "0 0 12 2",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "jsx-3114460579",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("line", {
                      y1: "1",
                      x2: "12",
                      y2: "1",
                      strokeWidth: "2",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 205,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 204,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "number",
                  value: "1",
                  className: "jsx-3114460579" + " " + "cart-list__item-amount-input"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "cart-list__item-amount-btn-add",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "jsx-3114460579",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("line", {
                      y1: "6",
                      x2: "12",
                      y2: "6",
                      strokeWidth: "2",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 211,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("line", {
                      x1: "6",
                      x2: "6",
                      y2: "12",
                      strokeWidth: "2",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 212,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 210,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "cart-list__item-price",
                children: "15 900 \u0433\u0440\u043D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-3114460579" + " " + "cart-list__item-delete-btn",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                width: "17",
                height: "17",
                viewBox: "0 0 17 17",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "jsx-3114460579",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                  y: "15.5562",
                  width: "22",
                  height: "2",
                  rx: "1",
                  transform: "rotate(-45 0 15.5562)",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                  x: "1.41406",
                  width: "22",
                  height: "2",
                  rx: "1",
                  transform: "rotate(45 1.41406 0)",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3114460579" + " " + "cart-list__item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-3114460579" + " " + "cart-list__item-img",
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "static/img/product-img-1.jpg",
                alt: "",
                className: "jsx-3114460579"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 51
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-3114460579" + " " + "cart-list__item-content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "cart-list__item-title",
                children: "\u0423\u0433\u043E\u043B\u044C Oasis Premium Coalus 25\u043C\u043C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "cart-list__item-amount",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "cart-list__item-amount-btn-sub",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "12",
                    height: "2",
                    viewBox: "0 0 12 2",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "jsx-3114460579",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("line", {
                      y1: "1",
                      x2: "12",
                      y2: "1",
                      strokeWidth: "2",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 232,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "number",
                  value: "1",
                  className: "jsx-3114460579" + " " + "cart-list__item-amount-input"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "cart-list__item-amount-btn-add",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "jsx-3114460579",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("line", {
                      y1: "6",
                      x2: "12",
                      y2: "6",
                      strokeWidth: "2",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 238,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("line", {
                      x1: "6",
                      x2: "6",
                      y2: "12",
                      strokeWidth: "2",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 239,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 236,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "cart-list__item-price",
                children: "15 900 \u0433\u0440\u043D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-3114460579" + " " + "cart-list__item-delete-btn",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                width: "17",
                height: "17",
                viewBox: "0 0 17 17",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "jsx-3114460579",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                  y: "15.5562",
                  width: "22",
                  height: "2",
                  rx: "1",
                  transform: "rotate(-45 0 15.5562)",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 247,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                  x: "1.41406",
                  width: "22",
                  height: "2",
                  rx: "1",
                  transform: "rotate(45 1.41406 0)",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 248,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-3114460579" + " " + "cart-footer",
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "",
            className: "jsx-3114460579" + " " + "btn",
            children: "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 39
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3114460579" + " " + "cart-results",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-3114460579" + " " + "cart-results__title",
              children: "\u0418\u0442\u043E\u0433\u043E, \u0431\u0435\u0437 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-3114460579" + " " + "cart-results__value",
              children: ["38 100 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "jsx-3114460579",
                children: "\u0433\u0440\u043D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 57
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-3114460579" + " " + "panel search-panel",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-3114460579" + " " + "panel__header",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3114460579" + " " + "panel__close-btn",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              width: "17",
              height: "17",
              viewBox: "0 0 17 17",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "jsx-3114460579",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                y: "15.5562",
                width: "22",
                height: "2",
                rx: "1",
                transform: "rotate(-45 0 15.5562)",
                className: "jsx-3114460579"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 264,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                x: "1.41406",
                width: "22",
                height: "2",
                rx: "1",
                transform: "rotate(45 1.41406 0)",
                className: "jsx-3114460579"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3114460579" + " " + "panel__title",
            children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0438\u0441\u043A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: "jsx-3114460579" + " " + "search-form",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3114460579" + " " + "form__field",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-3114460579" + " " + "form__field-icon",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                width: "17",
                height: "16",
                viewBox: "0 0 17 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "jsx-3114460579",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  d: "M3.54911 0.716301C4.28155 0.356479 5.07363 0.102448 5.88795 0.0182206C6.16792 -0.0087323 6.45126 0.00238577 6.73258 0.00171195C7.24604 -0.0100799 7.75612 0.0839183 8.25003 0.219357C8.97843 0.4306 9.68696 0.735841 10.3011 1.18595C10.6822 1.43662 11.013 1.75399 11.3334 2.07641C11.5282 2.28934 11.701 2.52147 11.8863 2.74248C12.2357 3.28862 12.5679 3.85598 12.7623 4.47825C12.8664 4.87008 12.9755 5.26224 13.0315 5.66452C13.1315 6.44952 13.1066 7.25608 12.9142 8.02559C12.7909 8.54207 12.638 9.05755 12.3728 9.5208C12.2916 9.70071 12.1724 9.85973 12.0888 10.0383C11.9483 10.2347 11.8253 10.4466 11.6569 10.6212C13.0126 11.9796 14.3697 13.3367 15.7281 14.6924C15.8689 14.8261 16.0094 14.9949 16.0034 15.2011C16.0061 15.3534 16.0158 15.5252 15.9144 15.6516C15.8268 15.7621 15.7241 15.8611 15.6125 15.947C15.3245 16.0353 14.9512 16.035 14.749 15.7756C13.3755 14.4013 11.9999 13.0291 10.6296 11.6514C10.102 12.0972 9.48043 12.4172 8.84771 12.6868C8.1503 12.8997 7.43268 13.086 6.69822 13.089C6.28685 13.1005 5.87514 13.0722 5.47018 12.9994C5.07195 12.9361 4.68686 12.8141 4.29941 12.7063C3.77551 12.5011 3.27486 12.238 2.80689 11.926C2.42585 11.6474 2.06232 11.3421 1.74394 10.9924C1.44476 10.6875 1.20421 10.3331 0.962306 9.98304C0.610234 9.39547 0.34879 8.755 0.174271 8.09297C0.0192914 7.50001 -0.0123783 6.88346 0.00379347 6.27298C0.0226605 6.02299 0.0209759 5.77165 0.0654482 5.52402C0.169554 4.87379 0.379449 4.24107 0.671551 3.65147C0.721751 3.55208 0.742977 3.43686 0.818108 3.35095C0.902672 3.23168 0.966349 3.09894 1.04923 2.97799C1.20791 2.72699 1.40063 2.49991 1.57852 2.26272C1.87668 1.95142 2.18091 1.64348 2.51715 1.37294C2.85204 1.14013 3.18356 0.89958 3.54911 0.716301ZM5.30307 1.66504C4.76132 1.77824 4.25191 2.01947 3.79371 2.32606C3.60369 2.43084 3.43557 2.56931 3.26846 2.70643C2.87394 3.06693 2.49929 3.46044 2.2392 3.93077C2.04918 4.23837 1.88679 4.56248 1.76921 4.90444C1.68026 5.26763 1.56369 5.62543 1.52731 5.9994C1.50911 6.27837 1.4643 6.55901 1.50675 6.83831C1.51652 7.30527 1.64657 7.75774 1.76483 8.20617C1.87837 8.53702 2.03132 8.85372 2.21225 9.15256C2.30726 9.30989 2.39721 9.4706 2.51378 9.61379C2.7513 9.91061 2.99691 10.2105 3.30822 10.4338C3.59796 10.698 3.93049 10.9173 4.28661 11.082C5.60494 11.7795 7.24806 11.8219 8.60278 11.2C8.80021 11.0959 9.00909 11.0137 9.19978 10.8971C9.38812 10.7738 9.57915 10.6511 9.74726 10.5002C10.2341 10.132 10.6192 9.64546 10.9352 9.12729C11.0471 8.96961 11.0993 8.78162 11.1906 8.61316C11.764 7.37198 11.7836 5.88688 11.2411 4.63188C10.8843 3.73267 10.2489 2.95238 9.45718 2.39985C9.36386 2.33954 9.25537 2.30282 9.17654 2.22162C8.84973 2.03093 8.50743 1.86214 8.1466 1.74624C7.9677 1.71221 7.7952 1.65325 7.61799 1.6135C7.33734 1.55689 7.05332 1.51916 6.76796 1.49793C6.27506 1.4821 5.77912 1.53499 5.30307 1.66504Z",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 274,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "search",
              placeholder: "\u041F\u043E\u0438\u0441\u043A \u0441\u0440\u0435\u0434\u0438 \u0431\u043E\u043B\u0435\u0435 5000 \u0442\u043E\u0432\u0430\u0440\u043E\u0432",
              className: "jsx-3114460579" + " " + "form__field-input"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-3114460579" + " " + "panel order-thanks-panel",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-3114460579" + " " + "panel__header",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3114460579" + " " + "panel__close-btn",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              width: "17",
              height: "17",
              viewBox: "0 0 17 17",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "jsx-3114460579",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                y: "15.5562",
                width: "22",
                height: "2",
                rx: "1",
                transform: "rotate(-45 0 15.5562)",
                className: "jsx-3114460579"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 285,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                x: "1.41406",
                width: "22",
                height: "2",
                rx: "1",
                transform: "rotate(45 1.41406 0)",
                className: "jsx-3114460579"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 286,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3114460579" + " " + "panel__title",
            children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0438\u0441\u043A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-3114460579" + " " + "panel__message",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3114460579" + " " + "panel__message-title",
            children: ["\u0421\u043F\u0430\u0441\u0438\u0431\u043E! ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {
              className: "jsx-3114460579"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 58
            }, this), " \u041D\u043E\u043C\u0435\u0440 \u0412\u0430\u0448\u0435\u0439 \u0437\u0430\u044F\u0432\u043A\u0438 - 399"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3114460579" + " " + "panel__message-text",
            children: "\u0412 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043C\u044B \u0412\u0430\u043C \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u043C \u0438 \u043E\u0431\u0441\u0443\u0434\u0438\u043C \u0434\u0435\u0442\u0430\u043B\u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u0430."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3114460579" + " " + "panel__message-icon",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "static/img/ico-check.svg",
              alt: "",
              className: "jsx-3114460579"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 49
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3114460579" + " " + "panel__message-footer",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "btn btn--xl",
              children: "\u0412\u0441\u0435 \u043F\u043E\u043D\u044F\u0442\u043D\u043E        "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 50
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 295,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-3114460579" + " " + "sidebar",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-3114460579" + " " + "sidebar__top",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "jsx-3114460579" + " " + "sidebar__logo",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                width: "98",
                height: "122",
                viewBox: "0 0 98 122",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "jsx-3114460579",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M93.572 4.37292V95.6077H4.27981V4.37292H93.572ZM4.27725e-06 0L97.8519 4.3703e-06V99.9807H0L4.27725e-06 0ZM62.4463 36.1759V24.7468C62.4463 18.4347 67.4541 13.3176 73.6321 13.3176H84.8179V24.7468C84.8179 30.8479 80.1395 35.832 74.2482 36.1589L73.8379 36.1816V33.1279L74.2004 33.1026C78.4622 32.8045 81.8294 29.1773 81.8294 24.7468V19.2084L65.2229 36.1759H62.4463ZM80.3797 16.3711H73.6321C69.1046 16.3711 65.4347 20.1211 65.4347 24.7468V31.6414L80.3797 16.3711ZM17.4338 115.962C17.4338 114.287 17.9853 112.892 19.0883 111.776C20.1913 110.649 21.6042 110.085 23.327 110.085C25.0499 110.085 26.4628 110.649 27.5658 111.776C28.6689 112.892 29.2203 114.287 29.2203 115.962C29.2203 117.679 28.6689 119.112 27.5658 120.26C26.4628 121.409 25.0499 121.983 23.327 121.983C21.6042 121.983 20.1913 121.409 19.0883 120.26C17.9853 119.112 17.4338 117.679 17.4338 115.962ZM20.2859 115.962C20.2859 116.949 20.5695 117.77 21.1368 118.425C21.7145 119.08 22.4446 119.407 23.327 119.407C24.2095 119.407 24.9343 119.08 25.5016 118.425C26.0794 117.77 26.3682 116.949 26.3682 115.962C26.3682 115.017 26.0794 114.234 25.5016 113.611C24.9343 112.978 24.2095 112.661 23.327 112.661C22.4446 112.661 21.7145 112.978 21.1368 113.611C20.5695 114.234 20.2859 115.017 20.2859 115.962ZM0.403667 121.79V110.278H3.1612V114.883H7.25814V110.278H10.0157V121.79H7.25814V117.282H3.1612V121.79H0.403667ZM37.6869 111.776C36.5839 112.892 36.0325 114.287 36.0325 115.962C36.0325 117.679 36.5839 119.112 37.6869 120.26C38.79 121.409 40.2028 121.983 41.9257 121.983C43.6486 121.983 45.0614 121.409 46.1645 120.26C47.2675 119.112 47.8189 117.679 47.8189 115.962C47.8189 114.287 47.2675 112.892 46.1645 111.776C45.0614 110.649 43.6486 110.085 41.9257 110.085C40.2028 110.085 38.79 110.649 37.6869 111.776ZM39.7353 118.425C39.1682 117.77 38.8846 116.949 38.8846 115.962C38.8846 115.017 39.1682 114.234 39.7353 113.611C40.3132 112.978 41.0434 112.661 41.9257 112.661C42.8083 112.661 43.5331 112.978 44.1003 113.611C44.6781 114.234 44.9671 115.017 44.9671 115.962C44.9671 116.949 44.6781 117.77 44.1003 118.425C43.5331 119.08 42.8083 119.407 41.9257 119.407C41.0434 119.407 40.3132 119.08 39.7353 118.425ZM55.2458 121.79V110.278H58.0033V114.722H59.1379L61.4699 110.278H64.4322L61.3911 115.785V115.817L64.6057 121.79H61.5173L59.1379 117.121H58.0033V121.79H55.2458ZM74.1516 110.278L70.3226 121.79H73.159L73.8365 119.375H77.3504L78.0438 121.79H80.8799L77.0508 110.278H74.1516ZM76.7041 117.121H74.4825L75.1285 114.883C75.2651 114.4 75.4175 113.74 75.5856 112.903H75.6171L76.0739 114.883L76.7041 117.121ZM87.6883 121.79V110.278H90.4458V114.883H94.5427V110.278H97.3002V121.79H94.5427V117.282H90.4458V121.79H87.6883ZM11.8667 12.1248V87.3598H21.5875V84.1694H15.5094V12.1248H11.8667ZM23.3517 72.1529V87.3598H26.9944V72.1529H23.3517ZM29.3299 79.7244C29.3299 77.4985 30.0654 75.6409 31.5363 74.1521C33.0212 72.6493 34.8874 71.8977 37.1355 71.8977C39.4532 71.8977 41.3611 72.5713 42.8598 73.9182L41.1113 76.7043C40.6813 76.3073 40.1262 75.9741 39.4461 75.7047C38.766 75.4354 38.1138 75.3008 37.4895 75.3008C36.0184 75.3008 34.9153 75.7119 34.1798 76.5343C33.4583 77.3422 33.0975 78.3631 33.0975 79.5969C33.0975 81.0005 33.5067 82.1207 34.3256 82.9571C35.1581 83.7939 36.171 84.2119 37.3645 84.2119C38.447 84.2119 39.4532 83.8434 40.3828 83.1062V81.9362H38.2805V78.7674H43.6092V87.3598H40.57V86.9342L40.5909 86.2963H40.5492C40.1054 86.6934 39.5224 87.0125 38.801 87.2533C38.093 87.4944 37.3715 87.615 36.636 87.615C34.6377 87.615 32.917 86.8988 31.4738 85.4668C30.0446 84.0347 29.3299 82.1207 29.3299 79.7244ZM46.2202 72.1529V87.3598H55.8369V84.1694H49.8629V81.2983H54.4007V78.1079H49.8629V75.3431H55.5454V72.1529H46.2202ZM58.1729 87.3598V72.1529H63.3559C64.6741 72.1529 65.6386 72.2735 66.2491 72.5146C67.1094 72.8547 67.7825 73.4077 68.2683 74.1734C68.754 74.925 68.9968 75.8466 68.9968 76.9383C68.9968 77.7891 68.8025 78.6043 68.4139 79.384C68.0255 80.1497 67.4772 80.7168 66.7695 81.0857V81.128C66.9084 81.3124 67.0956 81.6174 67.3316 82.0427L70.2249 87.3598H66.1658L63.5223 82.234H61.8155V87.3598H58.1729ZM61.8155 79.0439H63.3976C63.9943 79.0439 64.4589 78.8808 64.7921 78.5548C65.1252 78.2285 65.2917 77.7678 65.2917 77.1722C65.2917 76.3357 65.0002 75.7968 64.4175 75.556C64.0982 75.4141 63.6403 75.3431 63.0436 75.3431H61.8155V79.0439ZM73.0846 74.1308C71.6276 75.6055 70.8991 77.4487 70.8991 79.6605C70.8991 81.9293 71.6276 83.8221 73.0846 85.3393C74.542 86.8562 76.4082 87.615 78.6841 87.615C80.9598 87.615 82.8263 86.8562 84.2834 85.3393C85.7404 83.8221 86.469 81.9293 86.469 79.6605C86.469 77.4487 85.7404 75.6055 84.2834 74.1308C82.8263 72.6421 80.9598 71.8977 78.6841 71.8977C76.4082 71.8977 74.542 72.6421 73.0846 74.1308ZM75.7906 82.9145C75.0413 82.0499 74.6667 80.9651 74.6667 79.6605C74.6667 78.4129 75.0413 77.3779 75.7906 76.5556C76.5541 75.7188 77.5183 75.3008 78.6841 75.3008C79.8497 75.3008 80.8072 75.7188 81.5566 76.5556C82.3197 77.3779 82.7016 78.4129 82.7016 79.6605C82.7016 80.9651 82.3197 82.0499 81.5566 82.9145C80.8072 83.7795 79.8497 84.2119 78.6841 84.2119C77.5183 84.2119 76.5541 83.7795 75.7906 82.9145Z",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 301,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 300,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 299,
              columnNumber: 60
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 45
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-3114460579" + " " + "sidebar__middle",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "jsx-3114460579" + " " + "sidebar__nav",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-3114460579" + " " + "sidebar__nav-item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "",
                className: "jsx-3114460579" + " " + "sidebar__nav-link",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "sidebar__nav-link-icon",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "36",
                    height: "36",
                    viewBox: "0 0 36 36",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "jsx-3114460579",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M29.4985 25.4592C29.5097 25.5159 29.5212 25.5726 29.5305 25.63C29.9597 28.2685 28.3979 30.7542 25.9126 31.5365L27.3812 34.4737C27.5447 34.8007 27.5272 35.1889 27.335 35.4999C27.1429 35.8108 26.8034 36.0001 26.4378 36.0001H13.7816C13.416 36.0001 13.0766 35.8108 12.8844 35.4999C12.6922 35.1889 12.6748 34.8007 12.8382 34.4737L14.3288 31.4926C12.4539 30.873 11.0023 29.312 10.6889 27.3858C10.1556 24.1072 12.6737 21.1641 15.891 21.1641H16.9457V18.8733C15.7181 18.4379 14.8363 17.2656 14.8363 15.8906C14.8363 14.4335 15.8266 13.2041 17.1693 12.8381C17.0255 12.4769 16.9457 12.0837 16.9457 11.6719C16.9457 10.8621 17.2518 10.1228 17.7539 9.5625C17.481 9.25805 17.2664 8.90065 17.1271 8.50781H14.8363C10.1838 8.50781 6.39878 12.2929 6.39878 16.9453V25.6345C7.62636 26.0699 8.50815 27.2422 8.50815 28.6172V32.8359C8.50815 33.4184 8.03593 33.8906 7.45346 33.8906H6.39878V34.9453C6.39878 35.5278 5.92656 36 5.34409 36C4.76162 36 4.2894 35.5278 4.2894 34.9453V33.8906H3.23471C2.65224 33.8906 2.18003 33.4184 2.18003 32.8359V28.6172C2.18003 27.2422 3.06182 26.0699 4.2894 25.6345V16.9453C4.2894 11.1298 9.02073 6.39844 14.8363 6.39844H16.9457V5.25164C15.6312 4.26129 14.8363 2.70387 14.8363 1.05469C14.8363 0.472219 15.3085 0 15.891 0H24.3285C24.9109 0 25.3832 0.472219 25.3832 1.05469C25.3832 2.70387 24.5882 4.26122 23.2738 5.25164V6.40688C28.796 6.6112 33.5292 10.8654 33.807 16.4035C33.986 19.9699 32.3496 23.371 29.4985 25.4592ZM4.2894 31.7812H6.39878V28.6172C6.39878 28.0356 5.92564 27.5625 5.34409 27.5625C4.76254 27.5625 4.2894 28.0356 4.2894 28.6172V31.7812ZM24.7314 33.8906L23.6767 31.7812H16.5428L15.4881 33.8906H24.7314ZM15.891 23.2734C13.9777 23.2734 12.4457 25.0472 12.7709 27.047C13.0144 28.5434 14.4528 29.6719 16.1167 29.6719H24.3285C26.2228 29.6719 27.7773 27.9903 27.4485 25.9687C27.2026 24.4573 25.733 23.2734 24.1027 23.2734H22.2191C21.6366 23.2734 21.1644 22.8012 21.1644 22.2188V19.0547H19.055V22.2188C19.055 22.8012 18.5828 23.2734 18.0003 23.2734H15.891ZM18.0003 16.9453H22.2191C22.8006 16.9453 23.2738 16.4722 23.2738 15.8906C23.2738 15.3091 22.8006 14.8359 22.2191 14.8359H18.0003C17.4188 14.8359 16.9457 15.3091 16.9457 15.8906C16.9457 16.4722 17.4188 16.9453 18.0003 16.9453ZM19.055 11.6719C19.055 12.2534 19.5282 12.7266 20.1097 12.7266C20.6913 12.7266 21.1644 12.2534 21.1644 11.6719C21.1644 11.0903 20.6913 10.6172 20.1097 10.6172C19.5282 10.6172 19.055 11.0903 19.055 11.6719ZM17.1275 2.10938C17.3741 2.79759 17.8615 3.38723 18.5308 3.77677C18.8554 3.96563 19.055 4.31283 19.055 4.6883V7.45312C19.055 8.03468 19.5282 8.50781 20.1097 8.50781C20.6913 8.50781 21.1644 8.03468 21.1644 7.45312V4.6883C21.1644 4.31283 21.364 3.96563 21.6886 3.77677C22.3579 3.38723 22.8454 2.79759 23.0919 2.10938H17.1275ZM31.7004 16.5092C31.4828 12.172 27.6445 8.63002 23.0913 8.51105C22.952 8.90262 22.7377 9.25889 22.4656 9.56243C22.9678 10.1227 23.2738 10.862 23.2738 11.6718C23.2738 12.0836 23.1939 12.4768 23.0502 12.838C24.3929 13.204 25.3832 14.4335 25.3832 15.8906C25.3832 17.2655 24.5014 18.4378 23.2738 18.8732V21.1641H24.1028C25.9453 21.1641 27.624 22.0714 28.6279 23.4659C30.6766 21.7798 31.8355 19.2035 31.7004 16.5092Z",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 308,
                      columnNumber: 27
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 307,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 306,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "jsx-3114460579" + " " + "sidebar__nav-link-title",
                  children: "\u041A\u0430\u043B\u044C\u044F\u043D\u044B"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 310,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "sidebar__nav-link-arr",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "9",
                    height: "16",
                    viewBox: "0 0 9 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "jsx-3114460579",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M1 15L7.94911 7.674L1 1",
                      strokeWidth: "1.5",
                      strokeLinejoin: "round",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 313,
                      columnNumber: 27
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 312,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 311,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 305,
                columnNumber: 53
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "sidebar__menu",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "jsx-3114460579" + " " + "sidebar__menu-list",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "Maklaud"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 318,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 318,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "Alpha hookah"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 319,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 319,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "Shi carver"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 320,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 320,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "Capsule"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 321,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 321,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "Nube "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 322,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 322,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u0421wp  "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 323,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 323,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "Mamay"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 324,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 324,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "Ferro"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 325,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 325,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "Darkside "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 326,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 326,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u0414\u0443\u0448\u0430"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 327,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 327,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "Gramm"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 328,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 328,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "Hub"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 329,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 329,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "Geometry"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 330,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 330,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "Nuahule (\u0445\u0443\u043B\u0438\u0433\u0430\u043D)"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 331,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 331,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "Union"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 332,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 332,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 317,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "sidebar__menu-img",
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "static/img/sidebar-menu-img.png",
                    alt: "",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 334,
                    columnNumber: 59
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 334,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 316,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-3114460579" + " " + "sidebar__nav-item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "",
                className: "jsx-3114460579" + " " + "sidebar__nav-link",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "sidebar__nav-link-icon",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "39",
                    height: "28",
                    viewBox: "0 0 39 28",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "jsx-3114460579",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M0.0734799 24.5471C-0.0603729 23.829 0.0321767 23.0951 0.0191739 22.3698C-0.00912641 21.945 0.338126 21.5331 0.793226 21.4767C3.28824 21.1276 5.78555 20.7864 8.28057 20.4395C8.32111 19.9704 8.14366 19.41 8.5238 19.0267C8.87794 18.6469 9.58468 18.6676 9.91281 19.0681C10.2256 19.4193 10.0872 19.9055 10.117 20.3224C14.3758 20.3224 18.6347 20.3224 22.8935 20.3224C23.91 20.3067 24.938 20.3838 25.9415 20.191C27.8108 19.8548 29.5257 18.8339 30.6493 17.4005C31.7262 16.0505 32.2632 14.3379 32.1278 12.6581C32.0322 11.2461 31.4524 9.87401 30.5216 8.76035C29.6114 7.66311 28.3493 6.83216 26.9473 6.37741C25.3839 5.87841 23.6476 5.86984 22.0789 6.35171C20.3778 6.87927 18.8817 7.97222 17.9463 9.40142C16.7339 11.189 16.4685 13.4912 17.2051 15.4873C17.4575 16.1883 17.8935 16.8108 18.2882 17.4469C18.4128 17.6596 18.5421 17.903 18.4817 18.1522C18.2889 18.7419 17.3734 19.0017 16.9083 18.5248C15.771 17.1585 15.1109 15.463 14.9801 13.7404C14.8623 12.0578 15.2746 10.3466 16.1488 8.87172C17.0514 7.34472 18.4457 6.0733 20.1093 5.27661C21.5702 4.572 23.2308 4.2272 24.8745 4.29002C26.6712 4.36141 28.4411 4.92609 29.9142 5.8884C32.3251 7.43538 33.8641 10.0767 33.9742 12.8024C34.0614 14.7156 33.4487 16.6459 32.2792 18.2164C30.7418 20.3103 28.1979 21.7145 25.4963 21.9843C24.8607 22.0514 24.2205 22.0343 23.5826 22.0357C19.0943 22.0364 14.6061 22.0357 10.1186 22.0364C10.1155 22.8931 10.1178 23.749 10.117 24.6057C14.8332 24.6057 19.5487 24.605 24.2641 24.6064C25.4221 24.6164 26.5855 24.495 27.6992 24.1959C31.187 23.3293 34.1914 20.9356 35.65 17.8545C36.3384 16.4282 36.7201 14.8705 36.7369 13.3049C36.7813 10.2973 35.4978 7.28975 33.2261 5.1531C30.8979 2.90652 27.5401 1.63795 24.1945 1.71576C20.8474 1.7793 17.5562 3.19278 15.3373 5.5336C13.2217 7.72665 12.0667 10.71 12.2243 13.6604C12.261 13.9617 12.1738 14.2872 11.916 14.4864C11.5795 14.7748 11.0158 14.7662 10.6876 14.4714C10.4918 14.3094 10.3947 14.0666 10.3886 13.8261C10.2532 11.351 10.8804 8.83888 12.2028 6.68795C13.5383 4.46706 15.5889 2.63025 18.0136 1.46305C21.0861 -0.0275383 24.7567 -0.401611 28.1 0.444338C30.8038 1.11325 33.2881 2.55243 35.11 4.53488C36.8876 6.43167 38.0548 8.81603 38.4303 11.3118C38.8273 13.8689 38.3791 16.5281 37.1798 18.8554C36.0065 21.1355 34.1119 23.0873 31.7943 24.3965C29.8745 25.4973 27.6648 26.1491 25.4176 26.289C24.8064 26.329 24.1938 26.3183 23.5819 26.319C19.0943 26.3197 14.6061 26.319 10.1186 26.3197C10.117 26.6845 10.1522 27.0643 10.0138 27.4134C9.79119 28.0366 8.67983 28.0602 8.40983 27.4612C8.2255 27.0657 8.27904 26.6217 8.28286 26.2019C5.78555 25.8543 3.28748 25.5145 0.790931 25.1639C0.431441 25.1404 0.130081 24.8784 0.0734799 24.5471ZM1.85563 23.5805C3.99651 23.8775 6.13816 24.1731 8.27981 24.4693C8.28286 23.7026 8.27981 22.9359 8.28057 22.1685C6.14045 22.4647 4.0011 22.766 1.86022 23.0566C1.85716 23.2315 1.85563 23.4056 1.85563 23.5805Z",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 340,
                      columnNumber: 27
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M11.1602 17.4804C10.9185 16.8936 11.5251 16.2554 12.1699 16.3325C12.9003 16.4175 13.1802 17.4226 12.6471 17.8673C12.1783 18.2507 11.3407 18.0458 11.1602 17.4804Z",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 341,
                      columnNumber: 27
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M19.716 13.4884C19.6426 12.5846 19.8728 11.6609 20.3761 10.8849C21.0844 9.7655 22.3418 8.9631 23.7201 8.76392C24.6976 8.61972 25.7264 8.75964 26.6083 9.1844C27.5139 9.60559 28.2665 10.3066 28.7216 11.1504C29.2693 12.1299 29.3825 13.3049 29.062 14.3657C28.714 15.5194 27.8451 16.5259 26.7092 17.0849C25.8763 17.5104 24.9026 17.6789 23.9603 17.5839C22.6776 17.4611 21.4683 16.8165 20.6889 15.8599C20.1283 15.1796 19.7803 14.3458 19.716 13.4884ZM21.5502 13.4163C21.6358 14.3258 22.247 15.1731 23.1189 15.5879C24.0085 16.0298 25.1428 15.992 25.9971 15.4944C27.0649 14.904 27.6309 13.6426 27.3227 12.5189C27.123 11.7337 26.5318 11.0448 25.7509 10.6971C25.0189 10.3602 24.1354 10.333 23.3798 10.6179C22.198 11.0426 21.4117 12.2398 21.5502 13.4163Z",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 342,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 339,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 338,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "jsx-3114460579" + " " + "sidebar__nav-link-title",
                  children: "\u0410\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 344,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "sidebar__nav-link-arr",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "9",
                    height: "16",
                    viewBox: "0 0 9 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "jsx-3114460579",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M1 15L7.94911 7.674L1 1",
                      strokeWidth: "1.5",
                      strokeLinejoin: "round",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 347,
                      columnNumber: 27
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 346,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 345,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 337,
                columnNumber: 53
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "sidebar__menu",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "jsx-3114460579" + " " + "sidebar__menu-list",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u0427\u0430\u0448\u0438"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 352,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 352,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u0428\u043B\u0430\u043D\u0433\u0438"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 353,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 353,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u041A\u043E\u043B\u0431\u044B"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 354,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 354,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u041C\u0443\u043D\u0434\u0448\u0442\u0443\u043A\u0438"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 355,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 355,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u0427\u0438\u0441\u0442\u043A\u0430 \u0438 \u0443\u0445\u043E\u0434 "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 356,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 356,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u041A\u043E\u043B\u0431\u044B  "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 357,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 357,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u0429\u0438\u043F\u0446\u044B"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 358,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 358,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u041A\u043E\u043B\u043F\u0430\u043A\u0438"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 359,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 359,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u0423\u043F\u043B\u043E\u0442\u043D\u0438\u0442\u0435\u043B\u0438 "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 360,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 360,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u041A\u0430\u043B\u043E\u0434\u043A\u0438"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 361,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 361,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 351,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "sidebar__menu-img",
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "static/img/sidebar-menu-img.png",
                    alt: "",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 363,
                    columnNumber: 59
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 363,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 350,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 337,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-3114460579" + " " + "sidebar__nav-item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "",
                className: "jsx-3114460579" + " " + "sidebar__nav-link",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "sidebar__nav-link-icon",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "39",
                    height: "26",
                    viewBox: "0 0 39 26",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "jsx-3114460579",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M38.3658 7.85199L38.2416 7.08123L37.4158 6.96528C37.1669 6.93034 31.6449 6.18566 26.6813 7.9112C24.4448 3.59936 20.1999 0.630139 19.9576 0.463147L19.2857 0L18.6139 0.463077C18.3716 0.630069 14.1267 3.59929 11.8903 7.9112C6.92656 6.18566 1.40467 6.93034 1.15569 6.96528L0.329799 7.08123L0.205572 7.85199C0.144626 8.23048 -1.22714 17.1769 4.02429 22.0782C9.07186 26.7892 18.1233 25.7893 19.1787 25.654H19.3928C19.737 25.6981 20.9308 25.8342 22.5598 25.8342C25.9255 25.8341 31.1458 25.2528 34.5471 22.0782C39.7986 17.1769 38.4268 8.23048 38.3658 7.85199ZM34.6967 8.89726L27.7459 15.3846C27.9302 14.6279 28.0353 13.8456 28.0353 13.0427C28.0353 11.9441 27.8401 10.8837 27.5113 9.87565C30.0353 9.00821 32.793 8.8621 34.6967 8.89726ZM25.7738 13.0427C25.7738 15.6765 24.3417 18.1308 22.7584 20.0397L20.4166 22.2253V3.62488C22.5379 5.52936 25.7738 9.08344 25.7738 13.0427ZM18.155 3.62495V22.2254L15.8131 20.0397C14.2298 18.1309 12.7977 15.6766 12.7977 13.0427C12.7978 9.08323 16.0338 5.52915 18.155 3.62495ZM11.0602 9.87551C10.7313 10.8836 10.5362 11.9441 10.5362 13.0427C10.5362 13.8457 10.6412 14.628 10.8256 15.3847L3.87241 8.89508C5.77401 8.8588 8.52975 9.00455 11.0602 9.87551ZM5.62349 20.5856C2.62374 17.7859 2.21942 13.1371 2.2766 10.3907L14.0583 21.387C14.8092 22.2889 15.5843 23.0727 16.2782 23.7129C13.3087 23.7381 8.53367 23.3019 5.62349 20.5856ZM32.948 20.5856C30.0377 23.3019 25.2625 23.7381 22.2933 23.7129C22.9872 23.0727 23.7623 22.2888 24.5132 21.3869L36.2949 10.3907C36.3521 13.1373 35.9477 17.7859 32.948 20.5856Z",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 369,
                      columnNumber: 27
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 368,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 367,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "jsx-3114460579" + " " + "sidebar__nav-link-title",
                  children: "\u0422\u0430\u0431\u0430\u043A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 371,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "sidebar__nav-link-arr",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "9",
                    height: "16",
                    viewBox: "0 0 9 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "jsx-3114460579",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M1 15L7.94911 7.674L1 1",
                      strokeWidth: "1.5",
                      strokeLinejoin: "round",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 374,
                      columnNumber: 27
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 373,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 372,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 366,
                columnNumber: 53
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "sidebar__menu",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "jsx-3114460579" + " " + "sidebar__menu-list",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u0427\u0430\u0448\u0438"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 379,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 379,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u0428\u043B\u0430\u043D\u0433\u0438"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 380,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 380,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u041A\u043E\u043B\u0431\u044B"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 381,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 381,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u041C\u0443\u043D\u0434\u0448\u0442\u0443\u043A\u0438"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 382,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 382,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u0427\u0438\u0441\u0442\u043A\u0430 \u0438 \u0443\u0445\u043E\u0434 "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 383,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 383,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u041A\u043E\u043B\u0431\u044B  "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 384,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 384,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u0429\u0438\u043F\u0446\u044B"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 385,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 385,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u041A\u043E\u043B\u043F\u0430\u043A\u0438"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 386,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 386,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u0423\u043F\u043B\u043E\u0442\u043D\u0438\u0442\u0435\u043B\u0438 "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 387,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 387,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "\u041A\u0430\u043B\u043E\u0434\u043A\u0438"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 388,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 388,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 378,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "sidebar__menu-img",
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "static/img/sidebar-menu-img.png",
                    alt: "",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 390,
                    columnNumber: 59
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 390,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 377,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 366,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-3114460579" + " " + "sidebar__nav-item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "",
                className: "jsx-3114460579" + " " + "sidebar__nav-link",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "sidebar__nav-link-icon",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "40",
                    height: "40",
                    viewBox: "0 0 40 40",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "jsx-3114460579",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M19.6106 4.02104C20.1981 3.95649 20.8122 4.03893 21.343 4.28936C25.4769 6.27101 29.6133 8.24721 33.748 10.2281C34.1397 10.428 34.5655 10.5788 34.9138 10.8448C35.6062 11.3597 36.0262 12.1841 35.9987 13.0116C36.0004 17.9377 35.9996 22.8638 35.9996 27.7899C35.9629 28.7543 35.3296 29.6783 34.398 30.1006C30.0649 32.1748 25.7319 34.249 21.3989 36.3224C20.5581 36.7361 19.5056 36.7447 18.6549 36.3496C14.2885 34.2575 9.92044 32.1685 5.55323 30.078C4.62163 29.6363 3.99333 28.6843 4.00083 27.7075C4 22.7837 3.99917 17.8591 4.00167 12.9346C3.99167 11.9383 4.64662 10.9724 5.60489 10.5376C9.93794 8.46342 14.271 6.38922 18.6049 4.31502C18.9174 4.16181 19.2598 4.06382 19.6106 4.02104ZM19.629 6.06413C15.2434 8.15933 10.8629 10.2623 6.47734 12.3559C10.9887 14.567 15.4917 16.7905 19.9998 19.0071C24.5036 16.7851 29.015 14.5779 33.5156 12.3497C29.14 10.267 24.7745 8.16711 20.4031 6.07891C20.1664 5.96381 19.8706 5.96069 19.629 6.06413ZM6.13069 14.6526C6.13819 18.8756 6.13319 23.0995 6.13319 27.3225C6.14153 27.5792 6.0882 27.8685 6.26735 28.0878C6.38901 28.2698 6.61483 28.3452 6.80898 28.4409C10.8504 30.3751 14.8909 32.3093 18.9323 34.2427C18.9348 29.8564 18.9298 25.4692 18.9348 21.082C14.6693 18.9347 10.3962 16.8007 6.13069 14.6526ZM21.1722 21.026C21.1755 25.4155 21.1747 29.805 21.173 34.1945C25.2544 32.2385 29.3367 30.2849 33.4197 28.332C33.678 28.2223 33.8655 27.9735 33.8639 27.7059C33.8697 23.3546 33.8605 19.004 33.8689 14.6533C29.6391 16.7812 25.4044 18.9013 21.1722 21.026Z",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 396,
                      columnNumber: 27
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 395,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 394,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "jsx-3114460579" + " " + "sidebar__nav-link-title",
                  children: "\u0423\u0433\u043E\u043B\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 398,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "sidebar__nav-link-arr",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "9",
                    height: "16",
                    viewBox: "0 0 9 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "jsx-3114460579",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M1 15L7.94911 7.674L1 1",
                      strokeWidth: "1.5",
                      strokeLinejoin: "round",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 401,
                      columnNumber: 27
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 400,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 399,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 393,
                columnNumber: 53
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "sidebar__menu",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "jsx-3114460579" + " " + "sidebar__menu-list",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "25 * 25 \u043C\u043C"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 406,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 406,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "sidebar__menu-item",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "sidebar__menu-link",
                      children: "50 * 50 \u043C\u043C"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 407,
                      columnNumber: 61
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 407,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 405,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "sidebar__menu-img",
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "static/img/sidebar-menu-img.png",
                    alt: "",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 409,
                    columnNumber: 59
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 409,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 404,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 393,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 304,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-3114460579" + " " + "sidebar__bot",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "jsx-3114460579" + " " + "sidebar__page-nav",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-3114460579" + " " + "sidebar__page-nav-item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "",
                className: "jsx-3114460579" + " " + "sidebar__page-nav-link",
                children: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 416,
                columnNumber: 58
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 416,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-3114460579" + " " + "sidebar__page-nav-item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "",
                className: "jsx-3114460579" + " " + "sidebar__page-nav-link",
                children: "\u0411\u043B\u043E\u0433"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 417,
                columnNumber: 58
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 417,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-3114460579" + " " + "sidebar__page-nav-item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "",
                className: "jsx-3114460579" + " " + "sidebar__page-nav-link",
                children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 418,
                columnNumber: 58
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 418,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 415,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "jsx-3114460579" + " " + "socials",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-3114460579" + " " + "socials__item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "",
                className: "jsx-3114460579" + " " + "socials__item-link",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "18",
                  height: "18",
                  viewBox: "0 0 18 18",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "jsx-3114460579",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M9 18C13.9705 18 18 13.9705 18 9C18 4.02945 13.9705 0 9 0C4.02945 0 0 4.02945 0 9C0 13.9705 4.02945 18 9 18Z",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 423,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M3.35162 9.44026C4.40371 8.86074 5.57813 8.37706 6.67546 7.89091C8.56328 7.09464 10.4586 6.31216 12.3731 5.58369C12.7455 5.45956 13.4148 5.33818 13.4804 5.89018C13.4445 6.67153 13.2967 7.4483 13.1953 8.22508C12.9379 9.93328 12.6405 11.6356 12.3504 13.3382C12.2505 13.9053 11.54 14.1989 11.0855 13.836C9.99301 13.0981 8.89216 12.3673 7.81366 11.6123C7.46037 11.2533 7.78797 10.7378 8.1035 10.4815C9.00327 9.59473 9.9575 8.84135 10.8102 7.9088C11.0403 7.35331 10.3606 7.82146 10.1364 7.9649C8.90465 8.81375 7.703 9.71443 6.4043 10.4605C5.74092 10.8256 4.96775 10.5136 4.30467 10.3098C3.71014 10.0636 2.83893 9.81564 3.35156 9.4403L3.35162 9.44026Z",
                    fill: "#1B1B1B",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 424,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 422,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 421,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 421,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-3114460579" + " " + "socials__item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "",
                className: "jsx-3114460579" + " " + "socials__item-link",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "18",
                  height: "18",
                  viewBox: "0 0 18 18",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "jsx-3114460579",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14.8842 4.19583C14.8842 4.79236 14.4006 5.27583 13.8042 5.27583C13.2078 5.27583 12.7242 4.79236 12.7242 4.19583C12.7242 3.5993 13.2078 3.11583 13.8042 3.11583C14.4007 3.11583 14.8842 3.5993 14.8842 4.19583ZM9 12C7.34316 12 6.00005 10.6568 6.00005 9C6.00005 7.34316 7.34316 6.00005 9 6.00005C10.6568 6.00005 12 7.34316 12 9C12 10.6568 10.6568 12 9 12ZM9 4.37836C6.44752 4.37836 4.37836 6.44752 4.37836 9C4.37836 11.5525 6.44752 13.6216 9 13.6216C11.5525 13.6216 13.6216 11.5525 13.6216 9C13.6216 6.44752 11.5525 4.37836 9 4.37836ZM9 1.62169C11.4031 1.62169 11.6878 1.63083 12.6367 1.67414C13.5142 1.71422 13.9908 1.86075 14.3079 1.98408C14.7279 2.14734 15.0277 2.34239 15.3427 2.65739C15.6577 2.97225 15.8528 3.27206 16.0161 3.69225C16.1392 4.00936 16.2859 4.48594 16.326 5.36344C16.3693 6.31252 16.3785 6.59714 16.3785 9.00028C16.3785 11.4034 16.3693 11.688 16.326 12.637C16.2859 13.5145 16.1394 13.9911 16.0161 14.3082C15.8528 14.7282 15.6577 15.028 15.3427 15.343C15.0279 15.658 14.7281 15.8531 14.3079 16.0163C13.9908 16.1395 13.5142 16.2862 12.6367 16.3263C11.6878 16.3696 11.4031 16.3787 9 16.3787C6.59672 16.3787 6.31209 16.3696 5.36316 16.3263C4.48566 16.2862 4.00908 16.1397 3.69197 16.0163C3.27192 15.8531 2.97211 15.658 2.65711 15.343C2.34225 15.0282 2.14706 14.7284 1.9838 14.3082C1.86061 13.9911 1.71394 13.5145 1.67386 12.637C1.63055 11.6879 1.62141 11.4033 1.62141 9.00028C1.62141 6.59714 1.63055 6.31252 1.67386 5.36344C1.71394 4.48594 1.86047 4.00936 1.9838 3.69225C2.14706 3.2722 2.34211 2.97239 2.65711 2.65739C2.97197 2.34239 3.27178 2.14734 3.69197 1.98408C4.00908 1.86089 4.48566 1.71422 5.36316 1.67414C6.31223 1.63083 6.59686 1.62169 9 1.62169ZM9 0C6.5558 0 6.24923 0.0104063 5.28933 0.0541406C4.33139 0.097875 3.67706 0.250031 3.10472 0.4725C2.51283 0.702422 2.01094 1.01025 1.51059 1.51059C1.01025 2.01094 0.702422 2.51283 0.4725 3.10472C0.250031 3.6772 0.097875 4.33139 0.0541406 5.28933C0.0104063 6.24923 0 6.5558 0 9C0 11.4442 0.0104063 11.7508 0.0541406 12.7107C0.097875 13.6686 0.250031 14.3228 0.4725 14.8953C0.702422 15.4872 1.01025 15.9891 1.51059 16.4894C2.01094 16.9897 2.51283 17.2974 3.10472 17.5275C3.6772 17.75 4.33139 17.9021 5.28933 17.9459C6.24923 17.9896 6.5558 18 9 18C11.4442 18 11.7508 17.9896 12.7107 17.9459C13.6686 17.9021 14.3228 17.75 14.8953 17.5275C15.4872 17.2974 15.9891 16.9897 16.4894 16.4894C16.9897 15.9891 17.2974 15.4872 17.5275 14.8953C17.75 14.3228 17.9021 13.6686 17.9459 12.7107C17.9896 11.7508 18 11.4442 18 9C18 6.5558 17.9896 6.24923 17.9459 5.28933C17.9021 4.33139 17.75 3.6772 17.5275 3.10472C17.2974 2.51283 16.9897 2.01094 16.4894 1.51059C15.9891 1.01025 15.4872 0.702563 14.8953 0.4725C14.3228 0.250031 13.6686 0.097875 12.7107 0.0541406C11.7508 0.0104063 11.4442 0 9 0Z",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 428,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 427,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 426,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 426,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-3114460579" + " " + "socials__item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "",
                className: "jsx-3114460579" + " " + "socials__item-link",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "9",
                  height: "18",
                  viewBox: "0 0 9 18",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "jsx-3114460579",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M5.78571 18V9.99997H8.35714L9 6.66664H5.78571V5.33331C5.78571 3.99999 6.42983 3.33332 7.71428 3.33332H9V0C8.35714 0 7.55995 0 6.42857 0C4.06606 0 2.57143 1.92065 2.57143 4.66665V6.66664H0V9.99997H2.57143V17.9999L5.78571 18Z",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 432,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 431,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 430,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 430,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "jsx-3114460579" + " " + "socials__item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "",
                className: "jsx-3114460579" + " " + "socials__item-link",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "22",
                  height: "16",
                  viewBox: "0 0 22 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "jsx-3114460579",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M21.788 3.0855C21.7234 2.36466 21.407 1.68961 20.8942 1.17886C20.3814 0.668108 19.7052 0.354304 18.9841 0.292534C17.2597 0.149446 14.7038 0 11.5501 0C7.75237 0 4.88562 0.155155 3.03225 0.300652C2.30777 0.358854 1.62723 0.671447 1.11105 1.18312C0.594864 1.69479 0.276309 2.37256 0.21175 3.0965C0.0982961 4.29023 0 5.86679 0 7.74653C0 9.57948 0.0974819 11.1282 0.210408 12.3071C0.275612 13.0304 0.594435 13.7073 1.11052 14.2183C1.62661 14.7292 2.30672 15.0413 3.03063 15.0992C4.88393 15.2447 7.75123 15.4 11.5501 15.4C14.7038 15.4 17.2597 15.2506 18.9841 15.1074C19.7052 15.0457 20.3815 14.7319 20.8942 14.2211C21.407 13.7104 21.7235 13.0353 21.788 12.3145C21.9016 11.127 22 9.56108 22 7.7C22 5.83892 21.9016 4.27297 21.788 3.0855ZM8.55353 10.9327V4.46734L14.9314 7.7L8.55353 10.9327Z",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 436,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 435,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 434,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 434,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 420,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-3114460579" + " " + "bar",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "jsx-3114460579" + " " + "bar__list",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "bar__list-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "bar__list-item-link cart-link",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 22 22",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "jsx-3114460579",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  d: "M0.483828 0H2.81273C2.94121 0.0339453 3.0684 0.0923828 3.15348 0.198516C3.25145 0.308086 3.27207 0.458477 3.30086 0.596836C3.51871 1.65859 3.7357 2.72035 3.95527 3.78168C9.78527 3.78898 15.6157 3.78082 21.4457 3.78555C21.7203 3.77781 21.9609 3.9991 22 4.26723V4.42793C21.5084 7.1268 21.0581 9.83426 20.5752 12.5348C20.5408 12.7016 20.4243 12.8485 20.2688 12.9186C20.1115 12.9946 19.9328 12.9658 19.7643 12.971C15.1229 12.971 10.4814 12.9697 5.83988 12.9718C5.94172 13.6168 6.10027 14.2514 6.215 14.8943C10.5304 14.9076 14.8466 14.8955 19.1623 14.9007C19.3935 14.908 19.6561 14.853 19.8533 15.0073C20.1029 15.1783 20.1502 15.5629 19.9568 15.7932C19.8511 15.9281 19.6801 16.0046 19.5095 15.9994C14.9385 16.0003 10.3679 15.9998 5.79734 15.9998C5.63535 16.0054 5.47078 15.944 5.36379 15.8194C5.23875 15.6905 5.22113 15.5036 5.1859 15.3364C5.00629 14.4465 4.82496 13.5575 4.6432 12.668C4.54996 12.0957 4.41719 11.5307 4.30504 10.9618C3.89641 8.96801 3.48648 6.97426 3.07785 4.98051C3.03703 4.71281 2.93434 4.45844 2.91457 4.1873C2.70316 3.15906 2.49348 2.12996 2.28078 1.10215C1.69254 1.09527 1.10344 1.10473 0.515195 1.09785C0.257383 1.08969 0.0433984 0.876133 0 0.627344V0.484258C0.0339453 0.237188 0.236758 0.034375 0.483828 0ZM4.18129 4.88426C4.65824 7.21316 5.13691 9.54207 5.61516 11.871C10.2704 11.8671 14.9252 11.877 19.58 11.8658C19.9783 9.53777 20.3947 7.21231 20.7926 4.88383C15.2556 4.88512 9.71867 4.88426 4.18129 4.88426Z",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 445,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  d: "M7.3021 17.3615C7.95737 17.276 8.64358 17.4909 9.133 17.9343C9.65034 18.3881 9.94554 19.0816 9.91073 19.7691C9.89097 20.3539 9.63273 20.9224 9.2155 21.3306C8.80858 21.7353 8.24913 21.9721 7.67722 22H7.49288C7.0864 21.9751 6.68249 21.8582 6.34003 21.6356C5.77972 21.2833 5.3814 20.6813 5.28644 20.0256C5.17815 19.3536 5.38655 18.6386 5.8403 18.1315C6.21198 17.7074 6.74222 17.4273 7.3021 17.3615ZM7.33003 18.4693C6.74608 18.584 6.30222 19.1709 6.36023 19.7656C6.39675 20.4054 7.00519 20.9468 7.64714 20.8987C8.32261 20.882 8.89796 20.2211 8.80772 19.5486C8.75788 18.8482 8.01581 18.2974 7.33003 18.4693Z",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 446,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  d: "M15.6167 18.0233C16.0695 17.5686 16.7171 17.3126 17.3586 17.3465C17.8497 17.3641 18.3327 17.5472 18.7143 17.8565C19.2157 18.2536 19.5393 18.8672 19.5797 19.5061C19.6351 20.1893 19.3605 20.8867 18.8625 21.3559C18.4565 21.7469 17.906 21.9738 17.3444 22H17.1622C16.7132 21.9725 16.2681 21.829 15.9037 21.5622C15.3395 21.1613 14.9691 20.4974 14.936 19.8047C14.8918 19.1495 15.1509 18.4843 15.6167 18.0233ZM17.0359 18.4615C16.4232 18.5681 15.9484 19.1924 16.0378 19.8138C16.1001 20.4329 16.6926 20.9421 17.3161 20.8992C18.007 20.8833 18.5927 20.1923 18.4767 19.5061C18.401 18.8358 17.6994 18.3193 17.0359 18.4615Z",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 447,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 444,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "bar__tooltip",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "bar__tooltip-title",
                  children: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u2013 23 639 \u0433\u0440\u043D"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 450,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "bar__tooltip-text",
                  children: "5 \u0442\u043E\u0432\u0430\u0440\u043E\u0432"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 451,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 449,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 443,
              columnNumber: 48
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 443,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "bar__list-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "bar__list-item-link",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                width: "20",
                height: "18",
                viewBox: "0 0 20 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "jsx-3114460579",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  d: "M10.6583 0.0687278C10.2367 -0.0225417 9.79859 -0.0212741 9.37621 0.0628121C8.93022 0.184927 8.5157 0.419017 8.16826 0.727896C7.95169 0.959028 7.71689 1.18636 7.58024 1.47876C7.31024 1.94018 7.18062 2.4861 7.20009 3.02231C6.51764 3.15752 5.86543 3.42668 5.18216 3.56486C4.65542 3.71359 4.13033 3.87036 3.60318 4.01782C3.37128 4.06853 3.13938 4.12346 2.91577 4.20332C2.79609 4.25107 2.73315 4.39262 2.76793 4.51685C2.82218 4.75812 2.89879 4.9939 2.95511 5.23517C2.98575 5.36785 3.14767 5.38306 3.25368 5.34292C3.65867 5.2225 4.06408 5.10249 4.47073 4.98756C5.12832 4.83756 5.76812 4.61615 6.42199 4.44924C6.80213 4.37614 7.16654 4.2405 7.54007 4.13994C7.79805 4.66178 8.23618 5.07038 8.72358 5.36574C9.20063 5.59518 9.73441 5.75025 10.2657 5.67927C10.6674 5.63448 11.0575 5.49631 11.4095 5.29517C11.9155 4.9639 12.3462 4.49445 12.5772 3.92275C12.7615 3.53739 12.8261 3.10386 12.8058 2.67794C13.1578 2.57695 13.5081 2.46962 13.8655 2.39061C14.3794 2.25075 14.8871 2.08891 15.4022 1.95285C15.9526 1.82778 16.488 1.64524 17.0326 1.49777C17.1096 1.47326 17.2053 1.45805 17.2454 1.3765C17.3005 1.24805 17.2313 1.11368 17.2028 0.988183C17.1378 0.797616 17.1146 0.59057 17.0218 0.411411C16.944 0.293521 16.7945 0.350987 16.6864 0.380143C16.4359 0.460426 16.1783 0.513667 15.9236 0.577893C15.3389 0.746488 14.7587 0.934098 14.1653 1.06847C13.5997 1.22227 13.0435 1.41538 12.4712 1.54045C12.0977 0.824236 11.4215 0.288028 10.6583 0.0687278ZM10.3713 1.21129C10.7808 1.29749 11.1647 1.52693 11.3871 1.89665C11.6641 2.33568 11.6844 2.89724 11.5714 3.39457C11.3991 3.98064 10.8604 4.42389 10.269 4.50037C9.93235 4.53967 9.57829 4.51093 9.2702 4.35628C8.81385 4.14036 8.46601 3.68359 8.40389 3.17062C8.32521 2.87526 8.39478 2.57146 8.45524 2.28032C8.53557 1.99553 8.71695 1.74876 8.92732 1.54932C9.32568 1.2172 9.87189 1.11621 10.3713 1.21129Z",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 455,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  d: "M16.0928 2.8457C16.0186 2.81485 15.9362 2.81908 15.8576 2.81697C15.472 2.81866 15.0865 2.81866 14.701 2.81697C14.609 2.81866 14.5134 2.8157 14.426 2.84908C14.3461 2.90697 14.3055 3.00246 14.255 3.08486C14.0628 3.4474 13.8463 3.79516 13.6351 4.14587C13.5179 4.40784 13.3497 4.63982 13.2073 4.88701C13.0114 5.28631 12.7468 5.64463 12.5518 6.04393C12.4313 6.25647 12.2942 6.4593 12.1807 6.67606C12.0209 6.98579 11.8229 7.27227 11.6577 7.57904C11.5178 7.83087 11.3745 8.08102 11.2179 8.32314C11.1368 8.48666 11.0473 8.64554 10.9529 8.80146C10.8316 9.0385 10.6494 9.24344 10.5777 9.50499C10.5036 9.83838 10.5463 10.1811 10.5599 10.5187C10.6345 11.1525 10.8746 11.7521 11.1716 12.3094C11.5645 12.9673 12.0958 13.5382 12.724 13.9662C13.0532 14.1585 13.387 14.3465 13.7415 14.4859C14.3353 14.6537 14.9523 14.794 15.5718 14.7297C15.9126 14.7128 16.246 14.6326 16.5744 14.5434C17.0365 14.4382 17.4444 14.1809 17.849 13.9413C18.1376 13.7338 18.4159 13.5082 18.6631 13.2496C19.312 12.5536 19.7655 11.6705 19.9497 10.7278C19.98 10.3209 20.045 9.90641 19.9514 9.50288C19.9257 9.32034 19.799 9.18217 19.7149 9.02625C19.5853 8.79174 19.43 8.57244 19.324 8.32525C19.2151 8.15666 19.1033 7.98933 19.0106 7.81017C18.8047 7.40706 18.5455 7.03565 18.3335 6.63592C18.0382 6.12337 17.7422 5.61167 17.4428 5.10124C17.2991 4.80208 17.099 4.5363 16.9471 4.24178C16.7744 3.90755 16.5644 3.59571 16.3814 3.26782C16.2957 3.12162 16.2311 2.94964 16.0928 2.8457ZM15.4658 3.99713C15.7019 4.44165 15.9752 4.86377 16.2087 5.30913C16.4017 5.62477 16.5934 5.94126 16.7578 6.27338C17.0378 6.66 17.2171 7.10917 17.4891 7.50171C17.7745 8.02144 18.0917 8.52173 18.3753 9.04231C16.3011 9.04231 14.2268 9.04231 12.1526 9.04188C12.2002 8.97047 12.2511 8.9016 12.2959 8.82808C12.4988 8.41145 12.7638 8.02989 12.9771 7.61833C13.2172 7.23931 13.4235 6.83959 13.6554 6.45549C13.8086 6.23788 13.9059 5.98731 14.0525 5.7659C14.3896 5.1718 14.7453 4.58912 15.0807 3.99417C15.2091 3.99333 15.3374 3.99629 15.4658 3.99713ZM18.8375 10.2254C18.8006 10.6421 18.6797 11.046 18.5426 11.4386C18.3062 11.9384 17.9877 12.4096 17.5533 12.7518C17.2647 13.0244 16.8999 13.1803 16.5446 13.3379C15.7764 13.6227 14.913 13.6404 14.1349 13.3848C13.7659 13.2504 13.3953 13.0953 13.0913 12.8376C12.7505 12.5824 12.4603 12.2596 12.2383 11.8928C11.9169 11.398 11.7662 10.8077 11.6995 10.2237C14.079 10.2267 16.458 10.2237 18.8375 10.2254Z",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 456,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  d: "M5.57528 5.67983C5.4614 5.63462 5.33634 5.64814 5.21666 5.64561C4.81705 5.6511 4.41703 5.64011 4.01742 5.65025C3.90354 5.64518 3.82155 5.73519 3.76565 5.82561C3.59338 6.10618 3.45673 6.4083 3.26748 6.6783C3.07948 7.01676 2.89769 7.3586 2.68981 7.68523C2.51092 8.02918 2.30304 8.3558 2.10841 8.69046C1.91296 9.07709 1.66035 9.42991 1.46572 9.81738C1.18331 10.2767 0.935675 10.7571 0.647873 11.2135C0.473536 11.5773 0.218863 11.8955 0.066474 12.2707C-0.0171747 12.5673 -0.00889301 12.88 0.0213366 13.1842C0.05198 13.9224 0.355516 14.6133 0.700464 15.2509C0.952238 15.6214 1.22886 15.9777 1.55807 16.2802C1.82434 16.551 2.14568 16.7543 2.46206 16.9575C3.06168 17.2685 3.70933 17.5373 4.39053 17.5478C4.73382 17.5761 5.07877 17.5529 5.42082 17.5233C5.88792 17.446 6.33722 17.2812 6.76665 17.0809C7.11656 16.9284 7.41472 16.682 7.72322 16.4606C7.92158 16.2793 8.11 16.0862 8.29096 15.8868C8.41353 15.7326 8.53072 15.5733 8.65413 15.4195C8.99617 14.8782 9.26079 14.2799 9.3962 13.649C9.46038 13.2294 9.49807 12.7967 9.43264 12.3746C9.2993 11.969 9.03137 11.6309 8.83881 11.2545C8.66199 10.919 8.43299 10.613 8.28019 10.2649C8.09674 10.0046 7.94311 9.72442 7.79859 9.44005C7.62301 9.16413 7.45116 8.88525 7.30167 8.59369C6.83497 7.81495 6.39644 7.0193 5.93099 6.23928C5.81504 6.05294 5.74299 5.82519 5.57528 5.67983ZM4.91727 6.81309C5.10568 7.13043 5.28209 7.45494 5.47631 7.76931C5.60468 7.96495 5.68336 8.19017 5.82249 8.37862C5.98151 8.60764 6.09 8.86708 6.23784 9.10328C6.35255 9.30906 6.48713 9.50216 6.59604 9.71132C6.77203 10.0363 6.98198 10.3418 7.14058 10.6764C7.39691 11.0592 7.59775 11.4754 7.84331 11.8646C5.7699 11.8587 3.69608 11.8638 1.62267 11.8621C1.83883 11.5481 1.98211 11.1894 2.20573 10.8805C2.38586 10.5213 2.59747 10.1803 2.80369 9.83682C2.92833 9.5778 3.09232 9.34244 3.23353 9.09314C3.65426 8.3389 4.10728 7.60367 4.52346 6.8469C4.65431 6.83 4.78558 6.81605 4.91727 6.81309ZM8.30876 13.0401C8.27315 13.2772 8.24251 13.5163 8.17708 13.7475C7.99322 14.492 7.5493 15.1588 6.95796 15.6303C6.65318 15.8467 6.34054 16.0668 5.97695 16.1657C5.22536 16.4357 4.38846 16.4606 3.62899 16.2079C3.18673 16.1099 2.80783 15.8458 2.44632 15.5813C1.99495 15.212 1.64834 14.718 1.42142 14.1768C1.29718 13.8092 1.20028 13.4293 1.16343 13.041C3.54535 13.0422 5.92685 13.0444 8.30876 13.0401Z",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 457,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 454,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "bar__tooltip",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "bar__tooltip-title",
                  children: "\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 460,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "bar__tooltip-text",
                  children: "\u0421\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0439\u0442\u0435 \u0442\u043E\u0432\u0430\u0440\u044B \u043F\u043E \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u043C \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430\u043C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 461,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 459,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 453,
              columnNumber: 48
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 453,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "bar__list-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "bar__list-item-link",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                width: "17",
                height: "16",
                viewBox: "0 0 17 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "jsx-3114460579",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  d: "M3.54911 0.716293C4.28155 0.356472 5.07363 0.102441 5.88795 0.018213C6.16792 -0.00873993 6.45126 0.00237814 6.73258 0.00170432C7.24604 -0.0100876 7.75612 0.0839106 8.25003 0.219349C8.97843 0.430592 9.68696 0.735834 10.3011 1.18595C10.6822 1.43661 11.013 1.75398 11.3334 2.0764C11.5282 2.28933 11.701 2.52146 11.8863 2.74248C12.2357 3.28861 12.5679 3.85597 12.7623 4.47824C12.8664 4.87007 12.9755 5.26224 13.0315 5.66451C13.1315 6.44951 13.1066 7.25608 12.9142 8.02558C12.7909 8.54207 12.638 9.05754 12.3728 9.52079C12.2916 9.7007 12.1724 9.85973 12.0888 10.0383C11.9483 10.2347 11.8253 10.4466 11.6569 10.6211C13.0126 11.9796 14.3697 13.3366 15.7281 14.6924C15.8689 14.8261 16.0094 14.9949 16.0034 15.2011C16.0061 15.3534 16.0158 15.5252 15.9144 15.6516C15.8268 15.7621 15.7241 15.8611 15.6125 15.947C15.3245 16.0353 14.9512 16.035 14.749 15.7755C13.3755 14.4013 11.9999 13.029 10.6296 11.6514C10.102 12.0972 9.48043 12.4172 8.84771 12.6867C8.1503 12.8997 7.43268 13.086 6.69822 13.089C6.28685 13.1005 5.87514 13.0722 5.47018 12.9994C5.07195 12.9361 4.68686 12.8141 4.29941 12.7063C3.77551 12.5011 3.27486 12.238 2.80689 11.926C2.42585 11.6474 2.06232 11.3421 1.74394 10.9924C1.44476 10.6875 1.20421 10.3331 0.962306 9.98304C0.610234 9.39546 0.34879 8.75499 0.174271 8.09296C0.0192914 7.5 -0.0123783 6.88345 0.00379347 6.27297C0.0226605 6.02298 0.0209759 5.77165 0.0654482 5.52402C0.169554 4.87378 0.379449 4.24106 0.671551 3.65146C0.721751 3.55207 0.742977 3.43685 0.818108 3.35094C0.902672 3.23167 0.966349 3.09893 1.04923 2.97798C1.20791 2.72698 1.40063 2.4999 1.57852 2.26272C1.87668 1.95141 2.18091 1.64347 2.51715 1.37293C2.85204 1.14013 3.18356 0.899573 3.54911 0.716293ZM5.30307 1.66503C4.76132 1.77824 4.25191 2.01947 3.79371 2.32605C3.60369 2.43083 3.43557 2.5693 3.26846 2.70643C2.87394 3.06692 2.49929 3.46043 2.2392 3.93076C2.04918 4.23836 1.88679 4.56247 1.76921 4.90444C1.68026 5.26763 1.56369 5.62543 1.52731 5.9994C1.50911 6.27836 1.4643 6.55901 1.50675 6.83831C1.51652 7.30527 1.64657 7.75774 1.76483 8.20617C1.87837 8.53701 2.03132 8.85371 2.21225 9.15255C2.30726 9.30989 2.39721 9.47059 2.51378 9.61378C2.7513 9.9106 2.99691 10.2105 3.30822 10.4338C3.59796 10.698 3.93049 10.9173 4.28661 11.082C5.60494 11.7794 7.24806 11.8219 8.60278 11.2C8.80021 11.0959 9.00909 11.0136 9.19978 10.8971C9.38812 10.7738 9.57915 10.6511 9.74726 10.5002C10.2341 10.132 10.6192 9.64545 10.9352 9.12728C11.0471 8.96961 11.0993 8.78161 11.1906 8.61315C11.764 7.37197 11.7836 5.88687 11.2411 4.63188C10.8843 3.73266 10.2489 2.95237 9.45718 2.39984C9.36386 2.33953 9.25537 2.30281 9.17654 2.22161C8.84973 2.03092 8.50743 1.86213 8.1466 1.74623C7.9677 1.7122 7.7952 1.65324 7.61799 1.61349C7.33734 1.55689 7.05332 1.51915 6.76796 1.49793C6.27506 1.48209 5.77912 1.53499 5.30307 1.66503Z",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 465,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 464,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "bar__tooltip",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "bar__tooltip-title",
                  children: "\u041F\u043E\u0438\u0441\u043A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 468,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "bar__tooltip-text",
                  children: "\u0418\u0449\u0438\u0442\u0435 \u0441\u0440\u0435\u0434\u0438 \u0431\u043E\u043B\u0435\u0435 5000 \u0442\u043E\u0432\u0430\u0440\u043E\u0432"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 469,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 467,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 463,
              columnNumber: 48
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 463,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "bar__list-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "bar__list-item-link",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                width: "21",
                height: "21",
                viewBox: "0 0 21 21",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "jsx-3114460579",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M8.26124 2.4725C7.59661 3.68685 7.21875 5.08055 7.21875 6.5625C7.21875 11.2742 11.0383 15.0937 15.75 15.0937C16.7663 15.0937 17.7411 14.916 18.645 14.59C17.1965 17.2365 14.386 19.0312 11.1562 19.0312C6.44457 19.0312 2.625 15.2117 2.625 10.5C2.625 6.80462 4.97453 3.65801 8.26124 2.4725Z",
                  stroke: "#C9C9C9",
                  strokeWidth: "1.2",
                  strokeLinecap: "round",
                  className: "jsx-3114460579"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 473,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 472,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "bar__tooltip",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "bar__tooltip-title",
                  children: "\u041D\u043E\u0447\u043D\u043E\u0439 \u0440\u0435\u0436\u0438\u043C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 476,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 475,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 471,
              columnNumber: 48
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 471,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 442,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "jsx-3114460579" + " " + "langs",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "langs__item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "langs__item-link",
              children: "\u0443\u043A\u0440"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 480,
              columnNumber: 45
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 480,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "langs__item current",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "langs__item-link",
              children: "\u0440\u0443\u0441"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 481,
              columnNumber: 53
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 481,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-3114460579" + " " + "langs__item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              className: "jsx-3114460579" + " " + "langs__item-link",
              children: "eng"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 482,
              columnNumber: 45
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 482,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 479,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-3114460579" + " " + "up-btn",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3114460579" + " " + "up-btn__icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              width: "18",
              height: "11",
              viewBox: "0 0 18 11",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "jsx-3114460579",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                d: "M0 8.94336L1.44257 10.3859L8.94405 2.88513L16.4448 10.3859L17.8874 8.94336L8.94405 0L0 8.94336Z",
                className: "jsx-3114460579"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 487,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 486,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 485,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3114460579" + " " + "up-btn__text",
            children: "\u0412\u0432\u0435\u0440\u0445"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 490,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 484,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 441,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: "jsx-3114460579" + " " + "main",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-3114460579" + " " + "page-header",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3114460579" + " " + "container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-3114460579" + " " + "container-inner",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "page-header__top",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "jsx-3114460579" + " " + "page-header__title h2",
                  children: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 498,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 497,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                className: "jsx-3114460579" + " " + "breadcrumbs",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: "jsx-3114460579" + " " + "breadcrumbs__item",
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "",
                    className: "jsx-3114460579" + " " + "breadcrumbs__item-link",
                    children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 501,
                    columnNumber: 52
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 501,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: "jsx-3114460579" + " " + "breadcrumbs__item",
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "",
                    className: "jsx-3114460579" + " " + "breadcrumbs__item-link",
                    children: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 502,
                    columnNumber: 52
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 502,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 500,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 496,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 495,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 494,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-3114460579" + " " + "delivery-section section",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3114460579" + " " + "container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-3114460579" + " " + "container-inner",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "delivery-section__block",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "jsx-3114460579",
                  children: ["\u0414\u0430\u0432\u043D\u043E \u0432\u044B\u044F\u0441\u043D\u0435\u043D\u043E, \u0447\u0442\u043E \u043F\u0440\u0438 \u043E\u0446\u0435\u043D\u043A\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0438 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0435\u0448\u0430\u0435\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F. Lorem Ipsum \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u0442\u043E\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0438\u043B\u0438 \u043C\u0435\u043D\u0435\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u043A\u0432 \u0438 \u043F\u0440\u043E\u0431\u0435\u043B\u043E\u0432 \u0432 \u0430\u0431\u0437\u0430\u0446\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 \"\u0417\u0434\u0435\u0441\u044C \u0432\u0430\u0448 \u0436\u0438\u0440\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442. \u041C\u043D\u043E\u0433\u0438\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0451\u0440\u0441\u0442\u043A\u0438 \u0438 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u044B ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    className: "jsx-3114460579",
                    children: "\u0441\u0441\u044B\u043B\u043A\u0430 \u0432 \u0442\u0435\u043A\u0441\u0442\u0435 "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 512,
                    columnNumber: 388
                  }, this), "\u0434\u043B\u044F \u043F\u0440\u0438\u043C\u0435\u0440\u0430."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 511,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "jsx-3114460579",
                  children: "\u0414\u0430\u0432\u043D\u043E \u0432\u044B\u044F\u0441\u043D\u0435\u043D\u043E, \u0447\u0442\u043E \u043F\u0440\u0438 \u043E\u0446\u0435\u043D\u043A\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0438 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0435\u0448\u0430\u0435\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F. Lorem Ipsum \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u0442\u043E\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0438\u043B\u0438 \u043C\u0435\u043D\u0435\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u043A\u0432 \u0438 \u043F\u0440\u043E\u0431\u0435\u043B\u043E\u0432 \u0432 \u0430\u0431\u0437\u0430\u0446\u0430\u0445."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 513,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 510,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "delivery-section__block",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  className: "jsx-3114460579",
                  children: "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 516,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "jsx-3114460579",
                  children: "\u0414\u0430\u0432\u043D\u043E \u0432\u044B\u044F\u0441\u043D\u0435\u043D\u043E, \u0447\u0442\u043E \u043F\u0440\u0438 \u043E\u0446\u0435\u043D\u043A\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0438 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0435\u0448\u0430\u0435\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F. Lorem Ipsum \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u0442\u043E\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0438\u043B\u0438 \u043C\u0435\u043D\u0435\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u043A\u0432."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 517,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "jsx-3114460579",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579",
                    children: "\u041F\u0440\u0438\u043C\u0435\u0440 \u043C\u0430\u0440\u043A\u0435\u0440\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430. \u0418 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0435\u0448\u0430\u0435\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F. Lorem Ipsum \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u0442\u043E\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0438\u043B\u0438 \u043C\u0435\u043D\u0435\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u043A\u0432."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 519,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579",
                    children: "\u041F\u0440\u0438\u043C\u0435\u0440 \u043C\u0430\u0440\u043A\u0435\u0440\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430. \u0418 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0435\u0448\u0430\u0435\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F. Lorem Ipsum \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u0442\u043E\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0438\u043B\u0438 \u043C\u0435\u043D\u0435\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u043A\u0432."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 520,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579",
                    children: "\u041F\u0440\u0438\u043C\u0435\u0440 \u043C\u0430\u0440\u043A\u0435\u0440\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430. \u0418 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0435\u0448\u0430\u0435\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F. Lorem Ipsum \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u0442\u043E\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0438\u043B\u0438 \u043C\u0435\u043D\u0435\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u043A\u0432."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 521,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 518,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {
                  className: "jsx-3114460579",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579",
                    children: "\u041F\u0440\u0438\u043C\u0435\u0440 \u043D\u0443\u043C\u0435\u0440\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430. \u0418 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0435\u0448\u0430\u0435\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F. Lorem Ipsum \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u0442\u043E\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0438\u043B\u0438 \u043C\u0435\u043D\u0435\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u043A\u0432."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 524,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579",
                    children: "\u041F\u0440\u0438\u043C\u0435\u0440 \u043D\u0443\u043C\u0435\u0440\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430. \u0418 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0435\u0448\u0430\u0435\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F. Lorem Ipsum \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u0442\u043E\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0438\u043B\u0438 \u043C\u0435\u043D\u0435\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u043A\u0432."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 525,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579",
                    children: "\u041F\u0440\u0438\u043C\u0435\u0440 \u043D\u0443\u043C\u0435\u0440\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430. \u0418 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0435\u0448\u0430\u0435\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F. Lorem Ipsum \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u0442\u043E\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0438\u043B\u0438 \u043C\u0435\u043D\u0435\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u043A\u0432."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 526,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 523,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "jsx-3114460579",
                  children: "\u0414\u0430\u0432\u043D\u043E \u0432\u044B\u044F\u0441\u043D\u0435\u043D\u043E, \u0447\u0442\u043E \u043F\u0440\u0438 \u043E\u0446\u0435\u043D\u043A\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0438 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0435\u0448\u0430\u0435\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F. Lorem Ipsum \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u0442\u043E\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0438\u043B\u0438 \u043C\u0435\u043D\u0435\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u043A\u0432 \u0438 \u043F\u0440\u043E\u0431\u0435\u043B\u043E\u0432 \u0432 \u0430\u0431\u0437\u0430\u0446\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 \"\u0417\u0434\u0435\u0441\u044C \u0432\u0430\u0448 \u0442\u0435\u043A\u0441\u0442.. \u0417\u0434\u0435\u0441\u044C \u0432\u0430\u0448 \u0442\u0435\u043A\u0441\u0442.. \u0417\u0434\u0435\u0441\u044C \u0432\u0430\u0448 \u0442\u0435\u043A\u0441\u0442..\" \u041C\u043D\u043E\u0433\u0438\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0432\u0451\u0440\u0441\u0442\u043A\u0438 \u0438 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u044B."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 528,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 515,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 509,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 508,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 507,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 493,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        id: "footer",
        className: "jsx-3114460579" + " " + "footer",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-3114460579" + " " + "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3114460579" + " " + "container-inner",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-3114460579" + " " + "footer__inner",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "",
                className: "jsx-3114460579" + " " + "footer__logo",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "109",
                  height: "132",
                  viewBox: "0 0 109 132",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "jsx-3114460579",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M103.349 4.73136V103.444H4.72701V4.73136H103.349ZM4.72418e-06 0L108.076 4.72853e-06V108.176H0L4.72418e-06 0ZM81.9831 36.2452C82.2951 36.2237 82.603 36.1873 82.9062 36.1362C82.603 36.1873 82.2951 36.2237 81.9831 36.2452ZM93.2506 14.8394V14.8394H81.3259C78.8796 14.8394 76.6053 15.5767 74.7126 16.8413C76.6053 15.5766 78.8796 14.8394 81.3259 14.8394H93.2506ZM68.9713 39.1411V26.7752C68.9713 19.9457 74.5024 14.4092 81.3259 14.4092H93.6805V26.7752C93.6805 33.3764 88.5133 38.7691 82.0064 39.1227L81.5532 39.1473V35.8433L81.9535 35.8159C86.6607 35.4934 90.3798 31.5689 90.3798 26.7752V20.7829L72.0381 39.1411H68.9713ZM88.7786 17.713H81.3259C76.3254 17.713 72.272 21.7703 72.272 26.7752V34.235L88.7786 17.713ZM19.2554 125.467C19.2554 123.655 19.8646 122.145 21.0828 120.938C22.3011 119.718 23.8617 119.109 25.7645 119.109C27.6673 119.109 29.2279 119.718 30.4461 120.938C31.6646 122.145 32.2736 123.655 32.2736 125.467C32.2736 127.325 31.6646 128.875 30.4461 130.118C29.2279 131.361 27.6673 131.982 25.7645 131.982C23.8617 131.982 22.3011 131.361 21.0828 130.118C19.8646 128.875 19.2554 127.325 19.2554 125.467ZM22.4055 125.467C22.4055 126.535 22.7188 127.424 23.3453 128.132C23.9835 128.84 24.7899 129.195 25.7645 129.195C26.7391 129.195 27.5397 128.84 28.1662 128.132C28.8044 127.424 29.1234 126.535 29.1234 125.467C29.1234 124.445 28.8044 123.597 28.1662 122.923C27.5397 122.238 26.7391 121.896 25.7645 121.896C24.7899 121.896 23.9835 122.238 23.3453 122.923C22.7188 123.597 22.4055 124.445 22.4055 125.467ZM0.445846 131.773V119.317H3.49152V124.299H8.01654V119.317H11.0623V131.773H8.01654V126.895H3.49152V131.773H0.445846ZM41.6248 120.938C40.4065 122.145 39.7975 123.655 39.7975 125.467C39.7975 127.325 40.4065 128.875 41.6248 130.118C42.8431 131.361 44.4036 131.982 46.3065 131.982C48.2094 131.982 49.7699 131.361 50.9882 130.118C52.2065 128.875 52.8155 127.325 52.8155 125.467C52.8155 123.655 52.2065 122.145 50.9882 120.938C49.7699 119.718 48.2094 119.109 46.3065 119.109C44.4036 119.109 42.8431 119.718 41.6248 120.938ZM43.8873 128.132C43.2608 127.424 42.9476 126.535 42.9476 125.467C42.9476 124.445 43.2608 123.597 43.8873 122.923C44.5255 122.238 45.332 121.896 46.3065 121.896C47.2813 121.896 48.0819 122.238 48.7083 122.923C49.3465 123.597 49.6657 124.445 49.6657 125.467C49.6657 126.535 49.3465 127.424 48.7083 128.132C48.0819 128.84 47.2813 129.195 46.3065 129.195C45.332 129.195 44.5255 128.84 43.8873 128.132ZM61.0184 131.773V119.317H64.0641V124.125H65.3172L67.8929 119.317H71.1647L67.8058 125.275V125.31L71.3563 131.773H67.9452L65.3172 126.721H64.0641V131.773H61.0184ZM81.8997 119.317L77.6706 131.773H80.8033L81.5517 129.16H85.4328L86.1985 131.773H89.331L85.1018 119.317H81.8997ZM84.7189 126.721H82.2652L82.9787 124.299C83.1295 123.777 83.2978 123.063 83.4835 122.157H83.5183L84.0229 124.299L84.7189 126.721ZM96.8508 131.773V119.317H99.8965V124.299H104.421V119.317H107.467V131.773H104.421V126.895H99.8965V131.773H96.8508ZM13.1066 13.1187V94.5204H23.8432V91.0685H17.1299V13.1187H13.1066ZM25.7918 78.0671V94.5204H29.8151V78.0671H25.7918ZM32.3945 86.2592C32.3945 83.8508 33.207 81.8409 34.8315 80.2302C36.4716 78.6041 38.5328 77.791 41.0158 77.791C43.5756 77.791 45.6829 78.5198 47.3382 79.9771L45.407 82.9916C44.932 82.562 44.319 82.2015 43.5678 81.9101C42.8167 81.6187 42.0963 81.473 41.4068 81.473C39.7819 81.473 38.5636 81.9178 37.7512 82.8076C36.9543 83.6818 36.5559 84.7863 36.5559 86.1213C36.5559 87.6399 37.0078 88.8519 37.9123 89.7569C38.8317 90.6622 39.9505 91.1146 41.2687 91.1146C42.4643 91.1146 43.5756 90.7158 44.6023 89.9182V88.6523H42.2805V85.2237H48.1659V94.5204H44.8092V94.06L44.8322 93.3698H44.7862C44.296 93.7994 43.6521 94.1446 42.8553 94.4052C42.0733 94.6661 41.2764 94.7966 40.464 94.7966C38.2569 94.7966 36.3565 94.0217 34.7625 92.4722C33.184 90.9228 32.3945 88.8519 32.3945 86.2592ZM51.0498 78.0671V94.5204H61.6713V91.0685H55.073V87.9621H60.085V84.5102H55.073V81.5187H61.3494V78.0671H51.0498ZM64.2513 94.5204V78.0671H69.9759C71.4319 78.0671 72.4972 78.1976 73.1715 78.4584C74.1217 78.8264 74.8651 79.4248 75.4016 80.2532C75.9381 81.0664 76.2062 82.0635 76.2062 83.2447C76.2062 84.1653 75.9916 85.0472 75.5624 85.8909C75.1335 86.7193 74.5279 87.333 73.7463 87.7321V87.7778C73.8996 87.9774 74.1064 88.3074 74.3671 88.7675L77.5627 94.5204H73.0794L70.1597 88.9745H68.2745V94.5204H64.2513ZM68.2745 85.5229H70.0219C70.681 85.5229 71.1942 85.3464 71.5622 84.9937C71.9301 84.6407 72.114 84.1422 72.114 83.4978C72.114 82.5928 71.792 82.0097 71.1485 81.7491C70.7958 81.5956 70.2901 81.5187 69.631 81.5187H68.2745V85.5229ZM80.7212 80.2071C79.1119 81.8027 78.3073 83.797 78.3073 86.1901C78.3073 88.6449 79.1119 90.6927 80.7212 92.3343C82.3308 93.9756 84.392 94.7966 86.9058 94.7966C89.4193 94.7966 91.4808 93.9756 93.0901 92.3343C94.6994 90.6927 95.5041 88.6449 95.5041 86.1901C95.5041 83.797 94.6994 81.8027 93.0901 80.2071C91.4808 78.5964 89.4193 77.791 86.9058 77.791C84.392 77.791 82.3308 78.5964 80.7212 80.2071ZM83.7099 89.7108C82.8823 88.7753 82.4686 87.6016 82.4686 86.1901C82.4686 84.8402 82.8823 83.7204 83.7099 82.8306C84.5532 81.9253 85.6181 81.473 86.9058 81.473C88.1932 81.473 89.2507 81.9253 90.0784 82.8306C90.9213 83.7204 91.343 84.8402 91.343 86.1901C91.343 87.6016 90.9213 88.7753 90.0784 89.7108C89.2507 90.6466 88.1932 91.1146 86.9058 91.1146C85.6181 91.1146 84.5532 90.6466 83.7099 89.7108Z",
                    className: "jsx-3114460579"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 539,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 538,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 537,
                columnNumber: 44
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "footer__nav-block",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "jsx-3114460579" + " " + "footer__nav",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "footer__nav-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "footer__nav-link",
                      children: "\u041A\u0430\u043B\u044C\u044F\u043D\u044B"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 543,
                      columnNumber: 52
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 543,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "footer__nav-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "footer__nav-link",
                      children: "\u0410\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 544,
                      columnNumber: 52
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 544,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "footer__nav-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "footer__nav-link",
                      children: "\u0422\u0430\u0431\u0430\u043A"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 545,
                      columnNumber: 52
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 545,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "footer__nav-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "footer__nav-link",
                      children: "\u0423\u0433\u043E\u043B\u044C"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 546,
                      columnNumber: 52
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 546,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 542,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "jsx-3114460579" + " " + "footer__nav",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "footer__nav-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "footer__nav-link",
                      children: "\u0411\u043B\u043E\u0433"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 549,
                      columnNumber: 52
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 549,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "footer__nav-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "footer__nav-link",
                      children: "\u041E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0432\u043A\u0430"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 550,
                      columnNumber: 52
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 550,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "footer__nav-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "footer__nav-link",
                      children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 551,
                      columnNumber: 52
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 551,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 548,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 541,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "footer__contacts",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "footer__contacts-link",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "13",
                    height: "13",
                    viewBox: "0 0 13 13",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "jsx-3114460579",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M2.61806 5.62972C3.65806 7.67361 5.33 9.34555 7.3775 10.3856L8.96639 8.79306C9.165 8.59444 9.45028 8.53667 9.69944 8.61611C10.5083 8.88333 11.3786 9.02778 12.2778 9.02778C12.6786 9.02778 13 9.34917 13 9.75V12.2778C13 12.6786 12.6786 13 12.2778 13C5.49611 13 0 7.50389 0 0.722222C0 0.321389 0.325 0 0.722222 0H3.25C3.65083 0 3.97222 0.321389 3.97222 0.722222C3.97222 1.62139 4.11667 2.49167 4.38389 3.30056C4.46333 3.54972 4.40556 3.835 4.20694 4.03361L2.61806 5.62972Z",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 556,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 555,
                    columnNumber: 19
                  }, this), "+38 (063) 746 - 51 - 51"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 554,
                  columnNumber: 49
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "footer__contacts-link",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "13",
                    height: "13",
                    viewBox: "0 0 13 13",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "jsx-3114460579",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M2.61806 5.62972C3.65806 7.67361 5.33 9.34555 7.3775 10.3856L8.96639 8.79306C9.165 8.59444 9.45028 8.53667 9.69944 8.61611C10.5083 8.88333 11.3786 9.02778 12.2778 9.02778C12.6786 9.02778 13 9.34917 13 9.75V12.2778C13 12.6786 12.6786 13 12.2778 13C5.49611 13 0 7.50389 0 0.722222C0 0.321389 0.325 0 0.722222 0H3.25C3.65083 0 3.97222 0.321389 3.97222 0.722222C3.97222 1.62139 4.11667 2.49167 4.38389 3.30056C4.46333 3.54972 4.40556 3.835 4.20694 4.03361L2.61806 5.62972Z",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 559,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 558,
                    columnNumber: 19
                  }, this), "+38 (063) 746 - 51 - 51"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 557,
                  columnNumber: 52
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-3114460579" + " " + "footer__contacts-text",
                  children: "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E \u0441 9:00 \u0434\u043E 21:00"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 561,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "footer__contacts-link",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    width: "13",
                    height: "13",
                    viewBox: "0 0 13 13",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "jsx-3114460579",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M6.5 8.125C6.28387 8.125 6.09375 8.04862 5.6875 7.852L0 4.875V10.5625C0 11.0094 0.365625 11.375 0.8125 11.375H12.1875C12.6344 11.375 13 11.0094 13 10.5625V4.875L7.3125 7.852C6.90625 8.04862 6.71613 8.125 6.5 8.125ZM12.1875 1.625H0.8125C0.365625 1.625 0 1.99062 0 2.4375V3.05337L6.5 6.46994L13 3.05337V2.4375C13 1.99062 12.6344 1.625 12.1875 1.625Z",
                      className: "jsx-3114460579"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 563,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 562,
                    columnNumber: 19
                  }, this), "info@ligerohookah.com"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 561,
                  columnNumber: 87
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 554,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-3114460579" + " " + "footer__block",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "jsx-3114460579" + " " + "footer__socials",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "footer__socials-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "footer__socials-item-link",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 18 18",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "jsx-3114460579",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                          d: "M9 18C13.9705 18 18 13.9705 18 9C18 4.02945 13.9705 0 9 0C4.02945 0 0 4.02945 0 9C0 13.9705 4.02945 18 9 18Z",
                          className: "jsx-3114460579"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 570,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                          d: "M3.35162 9.44026C4.40371 8.86074 5.57813 8.37706 6.67546 7.89091C8.56328 7.09464 10.4586 6.31216 12.3731 5.58369C12.7455 5.45956 13.4148 5.33818 13.4804 5.89018C13.4445 6.67153 13.2967 7.4483 13.1953 8.22508C12.9379 9.93328 12.6405 11.6356 12.3504 13.3382C12.2505 13.9053 11.54 14.1989 11.0855 13.836C9.99301 13.0981 8.89216 12.3673 7.81366 11.6123C7.46037 11.2533 7.78797 10.7378 8.1035 10.4815C9.00327 9.59473 9.9575 8.84135 10.8102 7.9088C11.0403 7.35331 10.3606 7.82146 10.1364 7.9649C8.90465 8.81375 7.703 9.71443 6.4043 10.4605C5.74092 10.8256 4.96775 10.5136 4.30467 10.3098C3.71014 10.0636 2.83893 9.81564 3.35156 9.4403L3.35162 9.44026Z",
                          fill: "#fff",
                          className: "jsx-3114460579"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 571,
                          columnNumber: 25
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 569,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 568,
                      columnNumber: 56
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 568,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "footer__socials-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "footer__socials-item-link",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 18 18",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "jsx-3114460579",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M14.8842 4.19583C14.8842 4.79236 14.4006 5.27583 13.8042 5.27583C13.2078 5.27583 12.7242 4.79236 12.7242 4.19583C12.7242 3.5993 13.2078 3.11583 13.8042 3.11583C14.4007 3.11583 14.8842 3.5993 14.8842 4.19583ZM9 12C7.34316 12 6.00005 10.6568 6.00005 9C6.00005 7.34316 7.34316 6.00005 9 6.00005C10.6568 6.00005 12 7.34316 12 9C12 10.6568 10.6568 12 9 12ZM9 4.37836C6.44752 4.37836 4.37836 6.44752 4.37836 9C4.37836 11.5525 6.44752 13.6216 9 13.6216C11.5525 13.6216 13.6216 11.5525 13.6216 9C13.6216 6.44752 11.5525 4.37836 9 4.37836ZM9 1.62169C11.4031 1.62169 11.6878 1.63083 12.6367 1.67414C13.5142 1.71422 13.9908 1.86075 14.3079 1.98408C14.7279 2.14734 15.0277 2.34239 15.3427 2.65739C15.6577 2.97225 15.8528 3.27206 16.0161 3.69225C16.1392 4.00936 16.2859 4.48594 16.326 5.36344C16.3693 6.31252 16.3785 6.59714 16.3785 9.00028C16.3785 11.4034 16.3693 11.688 16.326 12.637C16.2859 13.5145 16.1394 13.9911 16.0161 14.3082C15.8528 14.7282 15.6577 15.028 15.3427 15.343C15.0279 15.658 14.7281 15.8531 14.3079 16.0163C13.9908 16.1395 13.5142 16.2862 12.6367 16.3263C11.6878 16.3696 11.4031 16.3787 9 16.3787C6.59672 16.3787 6.31209 16.3696 5.36316 16.3263C4.48566 16.2862 4.00908 16.1397 3.69197 16.0163C3.27192 15.8531 2.97211 15.658 2.65711 15.343C2.34225 15.0282 2.14706 14.7284 1.9838 14.3082C1.86061 13.9911 1.71394 13.5145 1.67386 12.637C1.63055 11.6879 1.62141 11.4033 1.62141 9.00028C1.62141 6.59714 1.63055 6.31252 1.67386 5.36344C1.71394 4.48594 1.86047 4.00936 1.9838 3.69225C2.14706 3.2722 2.34211 2.97239 2.65711 2.65739C2.97197 2.34239 3.27178 2.14734 3.69197 1.98408C4.00908 1.86089 4.48566 1.71422 5.36316 1.67414C6.31223 1.63083 6.59686 1.62169 9 1.62169ZM9 0C6.5558 0 6.24923 0.0104063 5.28933 0.0541406C4.33139 0.097875 3.67706 0.250031 3.10472 0.4725C2.51283 0.702422 2.01094 1.01025 1.51059 1.51059C1.01025 2.01094 0.702422 2.51283 0.4725 3.10472C0.250031 3.6772 0.097875 4.33139 0.0541406 5.28933C0.0104063 6.24923 0 6.5558 0 9C0 11.4442 0.0104063 11.7508 0.0541406 12.7107C0.097875 13.6686 0.250031 14.3228 0.4725 14.8953C0.702422 15.4872 1.01025 15.9891 1.51059 16.4894C2.01094 16.9897 2.51283 17.2974 3.10472 17.5275C3.6772 17.75 4.33139 17.9021 5.28933 17.9459C6.24923 17.9896 6.5558 18 9 18C11.4442 18 11.7508 17.9896 12.7107 17.9459C13.6686 17.9021 14.3228 17.75 14.8953 17.5275C15.4872 17.2974 15.9891 16.9897 16.4894 16.4894C16.9897 15.9891 17.2974 15.4872 17.5275 14.8953C17.75 14.3228 17.9021 13.6686 17.9459 12.7107C17.9896 11.7508 18 11.4442 18 9C18 6.5558 17.9896 6.24923 17.9459 5.28933C17.9021 4.33139 17.75 3.6772 17.5275 3.10472C17.2974 2.51283 16.9897 2.01094 16.4894 1.51059C15.9891 1.01025 15.4872 0.702563 14.8953 0.4725C14.3228 0.250031 13.6686 0.097875 12.7107 0.0541406C11.7508 0.0104063 11.4442 0 9 0Z",
                          className: "jsx-3114460579"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 575,
                          columnNumber: 25
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 574,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 573,
                      columnNumber: 56
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 573,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "footer__socials-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "footer__socials-item-link",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                        width: "9",
                        height: "18",
                        viewBox: "0 0 9 18",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "jsx-3114460579",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                          d: "M5.78571 18V9.99997H8.35714L9 6.66664H5.78571V5.33331C5.78571 3.99999 6.42983 3.33332 7.71428 3.33332H9V0C8.35714 0 7.55995 0 6.42857 0C4.06606 0 2.57143 1.92065 2.57143 4.66665V6.66664H0V9.99997H2.57143V17.9999L5.78571 18Z",
                          className: "jsx-3114460579"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 579,
                          columnNumber: 25
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 578,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 577,
                      columnNumber: 56
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 577,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "jsx-3114460579" + " " + "footer__socials-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "",
                      className: "jsx-3114460579" + " " + "footer__socials-item-link",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                        width: "22",
                        height: "16",
                        viewBox: "0 0 22 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "jsx-3114460579",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                          d: "M21.788 3.0855C21.7234 2.36466 21.407 1.68961 20.8942 1.17886C20.3814 0.668108 19.7052 0.354304 18.9841 0.292534C17.2597 0.149446 14.7038 0 11.5501 0C7.75237 0 4.88562 0.155155 3.03225 0.300652C2.30777 0.358854 1.62723 0.671447 1.11105 1.18312C0.594864 1.69479 0.276309 2.37256 0.21175 3.0965C0.0982961 4.29023 0 5.86679 0 7.74653C0 9.57948 0.0974819 11.1282 0.210408 12.3071C0.275612 13.0304 0.594435 13.7073 1.11052 14.2183C1.62661 14.7292 2.30672 15.0413 3.03063 15.0992C4.88393 15.2447 7.75123 15.4 11.5501 15.4C14.7038 15.4 17.2597 15.2506 18.9841 15.1074C19.7052 15.0457 20.3815 14.7319 20.8942 14.2211C21.407 13.7104 21.7235 13.0353 21.788 12.3145C21.9016 11.127 22 9.56108 22 7.7C22 5.83892 21.9016 4.27297 21.788 3.0855ZM8.55353 10.9327V4.46734L14.9314 7.7L8.55353 10.9327Z",
                          className: "jsx-3114460579",
                          children: "   "
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 583,
                          columnNumber: 25
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 582,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 581,
                      columnNumber: 56
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 581,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 567,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  className: "jsx-3114460579" + " " + "footer__link",
                  children: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 585,
                  columnNumber: 22
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 566,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 537,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 536,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 535,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 534,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3114460579",
      children: "@font-face{font-family:'Museo Sans Cyrl 700';src:url(\"../static/fonts/MuseoSansCyrl-700.woff2\") format(\"woff2\"),url(\"../static/fonts/MuseoSansCyrl-700.woff\") format(\"woff\");font-weight:normal;font-style:normal;font-display:swap;}@font-face{font-family:'Museo Sans Cyrl 500';src:url(\"../static/fonts/MuseoSansCyrl-500.woff2\") format(\"woff2\"),url(\"../static/fonts/MuseoSansCyrl-500.woff\") format(\"woff\");font-weight:normal;font-style:normal;font-display:swap;}@font-face{font-family:'Oswald';src:url(\"../static/fonts/Oswald-Medium.woff2\") format(\"woff2\"),url(\"../static/fonts/Oswald-Medium.woff\") format(\"woff\");font-weight:500;font-style:normal;font-display:swap;}@font-face{font-family:'Museo Sans Cyrl 900';src:url(\"../static/fonts/MuseoSansCyrl-900.woff2\") format(\"woff2\"),url(\"../static/fonts/MuseoSansCyrl-900.woff\") format(\"woff\");font-weight:bold;font-style:normal;font-display:swap;}.slick-slider{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent;}.slick-list{position:relative;display:block;overflow:hidden;margin:0;padding:0;}.slick-list:focus{outline:none;}.slick-list.dragging{cursor:pointer;cursor:hand;}.slick-slider .slick-track,.slick-slider .slick-list{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.slick-track{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto;}.slick-track:before,.slick-track:after{display:table;content:'';}.slick-track:after{clear:both;}.slick-loading .slick-track{visibility:hidden;}.slick-slide{display:none;float:left;height:100%;min-height:1px;}[dir='rtl'] .slick-slide{float:right;}.slick-slide img{display:block;}.slick-slide.slick-loading img{display:none;}.slick-slide.dragging img{pointer-events:none;}.slick-initialized .slick-slide{display:block;}.slick-loading .slick-slide{visibility:hidden;}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent;}.slick-arrow.slick-hidden{display:none;}.select2-container{box-sizing:border-box;display:inline-block;margin:0;position:relative;vertical-align:middle;}.select2-container .select2-selection--single{box-sizing:border-box;cursor:pointer;display:block;height:28px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;}.select2-container .select2-selection--single .select2-selection__rendered{display:block;padding-left:8px;padding-right:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.select2-container .select2-selection--single .select2-selection__clear{background-color:transparent;border:none;font-size:1em;}.select2-container[dir=\"rtl\"] .select2-selection--single .select2-selection__rendered{padding-right:8px;padding-left:20px;}.select2-container .select2-selection--multiple{box-sizing:border-box;cursor:pointer;display:block;min-height:32px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;}.select2-container .select2-selection--multiple .select2-selection__rendered{display:inline;list-style:none;padding:0;}.select2-container .select2-selection--multiple .select2-selection__clear{background-color:transparent;border:none;font-size:1em;}.select2-container .select2-search--inline .select2-search__field{box-sizing:border-box;border:none;font-size:100%;margin-top:5px;margin-left:5px;padding:0;max-width:100%;resize:none;height:18px;vertical-align:bottom;font-family:sans-serif;overflow:hidden;word-break:keep-all;}.select2-container .select2-search--inline .select2-search__field::-webkit-search-cancel-button{-webkit-appearance:none;}.select2-dropdown{background-color:white;border:1px solid #aaa;border-radius:4px;box-sizing:border-box;display:block;position:absolute;left:-100000px;width:100%;z-index:1051;}.select2-results{display:block;}.select2-results__options{list-style:none;margin:0;padding:0;}.select2-results__option{padding:6px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;}.select2-results__option--selectable{cursor:pointer;}.select2-container--open .select2-dropdown{left:0;}.select2-container--open .select2-dropdown--above{border-bottom:none;border-bottom-left-radius:0;border-bottom-right-radius:0;}.select2-container--open .select2-dropdown--below{border-top:none;border-top-left-radius:0;border-top-right-radius:0;}.select2-search--dropdown{display:block;padding:4px;}.select2-search--dropdown .select2-search__field{padding:4px;width:100%;box-sizing:border-box;}.select2-search--dropdown .select2-search__field::-webkit-search-cancel-button{-webkit-appearance:none;}.select2-search--dropdown.select2-search--hide{display:none;}.select2-close-mask{border:0;margin:0;padding:0;display:block;position:fixed;left:0;top:0;min-height:100%;min-width:100%;height:auto;width:auto;opacity:0;z-index:99;background-color:#fff;-webkit-filter:alpha(opacity=0);filter:alpha(opacity=0);}.select2-hidden-accessible{border:0 !important;-webkit-clip:rect(0 0 0 0) !important;clip:rect(0 0 0 0) !important;-webkit-clip-path:inset(50%) !important;-webkit-clip-path:inset(50%) !important;clip-path:inset(50%) !important;height:1px !important;overflow:hidden !important;padding:0 !important;position:absolute !important;width:1px !important;white-space:nowrap !important;}.select2-container--default .select2-selection--single{background-color:#fff;border:1px solid #aaa;border-radius:4px;}.select2-container--default .select2-selection--single .select2-selection__rendered{color:#444;line-height:28px;}.select2-container--default .select2-selection--single .select2-selection__clear{cursor:pointer;float:right;font-weight:bold;height:26px;margin-right:20px;padding-right:0px;}.select2-container--default .select2-selection--single .select2-selection__placeholder{color:#999;}.select2-container--default .select2-selection--single .select2-selection__arrow{height:26px;position:absolute;top:1px;right:1px;width:20px;}.select2-container--default .select2-selection--single .select2-selection__arrow b{border-color:#888 transparent transparent transparent;border-style:solid;border-width:5px 4px 0 4px;height:0;left:50%;margin-left:-4px;margin-top:-2px;position:absolute;top:50%;width:0;}.select2-container--default[dir=\"rtl\"] .select2-selection--single .select2-selection__clear{float:left;}.select2-container--default[dir=\"rtl\"] .select2-selection--single .select2-selection__arrow{left:1px;right:auto;}.select2-container--default.select2-container--disabled .select2-selection--single{background-color:#eee;cursor:default;}.select2-container--default.select2-container--disabled .select2-selection--single .select2-selection__clear{display:none;}.select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow b{border-color:transparent transparent #888 transparent;border-width:0 4px 5px 4px;}.select2-container--default .select2-selection--multiple{background-color:white;border:1px solid #aaa;border-radius:4px;cursor:text;padding-bottom:5px;padding-right:5px;position:relative;}.select2-container--default .select2-selection--multiple.select2-selection--clearable{padding-right:25px;}.select2-container--default .select2-selection--multiple .select2-selection__clear{cursor:pointer;font-weight:bold;height:20px;margin-right:10px;margin-top:5px;position:absolute;right:0;padding:1px;}.select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#e4e4e4;border:1px solid #aaa;border-radius:4px;box-sizing:border-box;display:inline-block;margin-left:5px;margin-top:5px;padding:0;padding-left:20px;position:relative;max-width:100%;overflow:hidden;text-overflow:ellipsis;vertical-align:bottom;white-space:nowrap;}.select2-container--default .select2-selection--multiple .select2-selection__choice__display{cursor:default;padding-left:2px;padding-right:5px;}.select2-container--default .select2-selection--multiple .select2-selection__choice__remove{background-color:transparent;border:none;border-right:1px solid #aaa;border-top-left-radius:4px;border-bottom-left-radius:4px;color:#999;cursor:pointer;font-size:1em;font-weight:bold;padding:0 4px;position:absolute;left:0;top:0;}.select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover,.select2-container--default .select2-selection--multiple .select2-selection__choice__remove:focus{background-color:#f1f1f1;color:#333;outline:none;}.select2-container--default[dir=\"rtl\"] .select2-selection--multiple .select2-selection__choice{margin-left:5px;margin-right:auto;}.select2-container--default[dir=\"rtl\"] .select2-selection--multiple .select2-selection__choice__display{padding-left:5px;padding-right:2px;}.select2-container--default[dir=\"rtl\"] .select2-selection--multiple .select2-selection__choice__remove{border-left:1px solid #aaa;border-right:none;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:4px;border-bottom-right-radius:4px;}.select2-container--default[dir=\"rtl\"] .select2-selection--multiple .select2-selection__clear{float:left;margin-left:10px;margin-right:auto;}.select2-container--default.select2-container--focus .select2-selection--multiple{border:solid black 1px;outline:0;}.select2-container--default.select2-container--disabled .select2-selection--multiple{background-color:#eee;cursor:default;}.select2-container--default.select2-container--disabled .select2-selection__choice__remove{display:none;}.select2-container--default.select2-container--open.select2-container--above .select2-selection--single,.select2-container--default.select2-container--open.select2-container--above .select2-selection--multiple{border-top-left-radius:0;border-top-right-radius:0;}.select2-container--default.select2-container--open.select2-container--below .select2-selection--single,.select2-container--default.select2-container--open.select2-container--below .select2-selection--multiple{border-bottom-left-radius:0;border-bottom-right-radius:0;}.select2-container--default .select2-search--dropdown .select2-search__field{border:1px solid #aaa;}.select2-container--default .select2-search--inline .select2-search__field{background:transparent;border:none;outline:0;box-shadow:none;-webkit-appearance:textfield;}.select2-container--default .select2-results>.select2-results__options{max-height:200px;overflow-y:auto;}.select2-container--default .select2-results__option .select2-results__option{padding-left:1em;}.select2-container--default .select2-results__option .select2-results__option .select2-results__group{padding-left:0;}.select2-container--default .select2-results__option .select2-results__option .select2-results__option{margin-left:-1em;padding-left:2em;}.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option{margin-left:-2em;padding-left:3em;}.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option{margin-left:-3em;padding-left:4em;}.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option{margin-left:-4em;padding-left:5em;}.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option{margin-left:-5em;padding-left:6em;}.select2-container--default .select2-results__option--group{padding:0;}.select2-container--default .select2-results__option--disabled{color:#999;}.select2-container--default .select2-results__option--selected{background-color:#ddd;}.select2-container--default .select2-results__option--highlighted.select2-results__option--selectable{background-color:#5897fb;color:white;}.select2-container--default .select2-results__group{cursor:default;display:block;padding:6px;}.select2-container--classic .select2-selection--single{background-color:#f7f7f7;border:1px solid #aaa;border-radius:4px;outline:0;background-image:-webkit-linear-gradient(top,white 50%,#eeeeee 100%);background-image:-o-linear-gradient(top,white 50%,#eeeeee 100%);background-image:linear-gradient(to bottom,white 50%,#eeeeee 100%);background-repeat:repeat-x;-webkit-filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF',endColorstr='#FFEEEEEE',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF',endColorstr='#FFEEEEEE',GradientType=0);}.select2-container--classic .select2-selection--single:focus{border:1px solid #5897fb;}.select2-container--classic .select2-selection--single .select2-selection__rendered{color:#444;line-height:28px;}.select2-container--classic .select2-selection--single .select2-selection__clear{cursor:pointer;float:right;font-weight:bold;height:26px;margin-right:20px;}.select2-container--classic .select2-selection--single .select2-selection__placeholder{color:#999;}.select2-container--classic .select2-selection--single .select2-selection__arrow{background-color:#ddd;border:none;border-left:1px solid #aaa;border-top-right-radius:4px;border-bottom-right-radius:4px;height:26px;position:absolute;top:1px;right:1px;width:20px;background-image:-webkit-linear-gradient(top,#eeeeee 50%,#cccccc 100%);background-image:-o-linear-gradient(top,#eeeeee 50%,#cccccc 100%);background-image:linear-gradient(to bottom,#eeeeee 50%,#cccccc 100%);background-repeat:repeat-x;-webkit-filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEEEEEE',endColorstr='#FFCCCCCC',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEEEEEE',endColorstr='#FFCCCCCC',GradientType=0);}.select2-container--classic .select2-selection--single .select2-selection__arrow b{border-color:#888 transparent transparent transparent;border-style:solid;border-width:5px 4px 0 4px;height:0;left:50%;margin-left:-4px;margin-top:-2px;position:absolute;top:50%;width:0;}.select2-container--classic[dir=\"rtl\"] .select2-selection--single .select2-selection__clear{float:left;}.select2-container--classic[dir=\"rtl\"] .select2-selection--single .select2-selection__arrow{border:none;border-right:1px solid #aaa;border-radius:0;border-top-left-radius:4px;border-bottom-left-radius:4px;left:1px;right:auto;}.select2-container--classic.select2-container--open .select2-selection--single{border:1px solid #5897fb;}.select2-container--classic.select2-container--open .select2-selection--single .select2-selection__arrow{background:transparent;border:none;}.select2-container--classic.select2-container--open .select2-selection--single .select2-selection__arrow b{border-color:transparent transparent #888 transparent;border-width:0 4px 5px 4px;}.select2-container--classic.select2-container--open.select2-container--above .select2-selection--single{border-top:none;border-top-left-radius:0;border-top-right-radius:0;background-image:-webkit-linear-gradient(top,white 0%,#eeeeee 50%);background-image:-o-linear-gradient(top,white 0%,#eeeeee 50%);background-image:linear-gradient(to bottom,white 0%,#eeeeee 50%);background-repeat:repeat-x;-webkit-filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF',endColorstr='#FFEEEEEE',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF',endColorstr='#FFEEEEEE',GradientType=0);}.select2-container--classic.select2-container--open.select2-container--below .select2-selection--single{border-bottom:none;border-bottom-left-radius:0;border-bottom-right-radius:0;background-image:-webkit-linear-gradient(top,#eeeeee 50%,white 100%);background-image:-o-linear-gradient(top,#eeeeee 50%,white 100%);background-image:linear-gradient(to bottom,#eeeeee 50%,white 100%);background-repeat:repeat-x;-webkit-filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEEEEEE',endColorstr='#FFFFFFFF',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEEEEEE',endColorstr='#FFFFFFFF',GradientType=0);}.select2-container--classic .select2-selection--multiple{background-color:white;border:1px solid #aaa;border-radius:4px;cursor:text;outline:0;padding-bottom:5px;padding-right:5px;}.select2-container--classic .select2-selection--multiple:focus{border:1px solid #5897fb;}.select2-container--classic .select2-selection--multiple .select2-selection__clear{display:none;}.select2-container--classic .select2-selection--multiple .select2-selection__choice{background-color:#e4e4e4;border:1px solid #aaa;border-radius:4px;display:inline-block;margin-left:5px;margin-top:5px;padding:0;}.select2-container--classic .select2-selection--multiple .select2-selection__choice__display{cursor:default;padding-left:2px;padding-right:5px;}.select2-container--classic .select2-selection--multiple .select2-selection__choice__remove{background-color:transparent;border:none;border-top-left-radius:4px;border-bottom-left-radius:4px;color:#888;cursor:pointer;font-size:1em;font-weight:bold;padding:0 4px;}.select2-container--classic .select2-selection--multiple .select2-selection__choice__remove:hover{color:#555;outline:none;}.select2-container--classic[dir=\"rtl\"] .select2-selection--multiple .select2-selection__choice{margin-left:5px;margin-right:auto;}.select2-container--classic[dir=\"rtl\"] .select2-selection--multiple .select2-selection__choice__display{padding-left:5px;padding-right:2px;}.select2-container--classic[dir=\"rtl\"] .select2-selection--multiple .select2-selection__choice__remove{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:4px;border-bottom-right-radius:4px;}.select2-container--classic.select2-container--open .select2-selection--multiple{border:1px solid #5897fb;}.select2-container--classic.select2-container--open.select2-container--above .select2-selection--multiple{border-top:none;border-top-left-radius:0;border-top-right-radius:0;}.select2-container--classic.select2-container--open.select2-container--below .select2-selection--multiple{border-bottom:none;border-bottom-left-radius:0;border-bottom-right-radius:0;}.select2-container--classic .select2-search--dropdown .select2-search__field{border:1px solid #aaa;outline:0;}.select2-container--classic .select2-search--inline .select2-search__field{outline:0;box-shadow:none;}.select2-container--classic .select2-dropdown{background-color:white;border:1px solid transparent;}.select2-container--classic .select2-dropdown--above{border-bottom:none;}.select2-container--classic .select2-dropdown--below{border-top:none;}.select2-container--classic .select2-results>.select2-results__options{max-height:200px;overflow-y:auto;}.select2-container--classic .select2-results__option--group{padding:0;}.select2-container--classic .select2-results__option--disabled{color:grey;}.select2-container--classic .select2-results__option--highlighted.select2-results__option--selectable{background-color:#3875d7;color:white;}.select2-container--classic .select2-results__group{cursor:default;display:block;padding:6px;}.select2-container--classic.select2-container--open .select2-dropdown{border-color:#5897fb;}ul,ol{list-style-type:none;margin:0;padding:0;}h1,h2,h3,h4,h5,h6,p{margin:0;}a{color:inherit;-webkit-text-decoration:none;text-decoration:none;}a:hover{-webkit-text-decoration:none;text-decoration:none;}a:focus{outline:none;}body{overflow-x:hidden;color:#1C1B1B;margin:0;font-family:'Museo Sans Cyrl 500';background-color:#F7F6F4;}body.disable-scroll{overflow:hidden;}*{box-sizing:border-box;}h2,.h2{font-size:40px;line-height:125%;font-family:'Museo Sans Cyrl 700';color:#333;}h4,.h4{font-size:28px;line-height:125%;font-family:'Museo Sans Cyrl 700';}p{font-size:17px;line-height:170%;color:#333;}.btn{padding:0 18px;height:34px;line-height:34px;background-color:#FFA800;display:inline-block;font-size:11px;color:#fff;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;font-family:'Museo Sans Cyrl 700';text-transform:uppercase;border:none;pointer-events:none;border-radius:34px;-webkit-transition:0.3s;transition:0.3s;}.btn:hover{background-color:#333;color:#fff;}.btn--black{background-color:#1C1B1B;color:#ffffff;}.btn--black:hover{background-color:#FFA800;}.btn--xl{height:46px;line-height:46px;}@media (max-width:1500px){p{font-size:15px;}}@media (max-width:1024px){h2,.h2{font-size:36px;}}@media (max-width:768px){p{font-size:14px;}h2,.h2{font-size:24px;}}.socials{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.socials__item{margin-right:30px;}.socials__item:last-child{margin-right:0;}.socials__item-link{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.socials__item-link svg{fill:#fff;-webkit-transition:0.3s;transition:0.3s;}.socials__item-link:hover svg{fill:#FFA800;}.container{padding:0 90px 0 330px;width:100%;}.container-inner{padding:0 35px;width:100%;}.mb-xl{margin-bottom:120px;}.mb-lg{margin-bottom:100px;}.mb-md{margin-bottom:50px;}.wrapper{overflow:hidden;}@media (max-width:1500px){.container{padding:0 70px 0 220px;}}@media (max-width:1024px){.main{padding-top:60px;}.container{padding:0 35px;}.container-inner{padding:0;}.container-inner--border{bottom:-100px;}}@media (max-width:768px){.container{padding:0 20px;}}.sidebar{position:fixed;top:0;left:0;width:300px;height:100vh;background-color:#1C1B1B;padding:40px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-image:url(../static/img/sidebar-bg.jpg);background-repeat:no-repeat;background-position:center;background-size:cover;z-index:10;}.sidebar:after{content:'';position:fixed;top:0;left:0;width:300px;height:100%;background-color:rgba(28,27,27,0.92);}.sidebar__top{position:relative;z-index:1;}.sidebar__middle{padding:40px 0;position:relative;z-index:1;}.sidebar__bot{position:relative;z-index:1;}.sidebar__logo{width:98px;margin:0 auto;display:block;}.sidebar__logo svg{fill:#ffffff;-webkit-transition:0.3s;transition:0.3s;}.sidebar__logo:hover svg{fill:#FFA800;}.sidebar__page-nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:175px;margin:0 auto 25px;}.sidebar__page-nav-item{margin:0 15px 15px;position:relative;}.sidebar__page-nav-link{color:#C8C8C8;-webkit-transition:0.3s;transition:0.3s;}.sidebar__page-nav-link:hover{color:#FFA800;}.sidebar__nav-item{margin-bottom:5vh;position:relative;}.sidebar__nav-item:last-child{margin-bottom:0;}.sidebar__nav-item:hover .sidebar__menu{left:300px;opacity:1;}.sidebar__nav-link{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;}.sidebar__nav-link:hover .sidebar__nav-link-icon svg{fill:#FFA800;}.sidebar__nav-link:hover .sidebar__nav-link-title{color:#FFA800;}.sidebar__nav-link:hover .sidebar__nav-link-arr{right:40px;opacity:1;}.sidebar__nav-link-icon{margin-bottom:15px;}.sidebar__nav-link-icon svg{fill:#ffffff;-webkit-transition:0.3s;transition:0.3s;}.sidebar__nav-link-title{font-size:13px;line-height:16px;color:#fff;text-transform:uppercase;-webkit-letter-spacing:0.2em;-moz-letter-spacing:0.2em;-ms-letter-spacing:0.2em;letter-spacing:0.2em;-webkit-transition:0.3s;transition:0.3s;}.sidebar__nav-link-title:hover{color:#FFA800;}.sidebar__nav-link-arr{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:0.3s;transition:0.3s;opacity:0;right:30px;}.sidebar__nav-link-arr svg{stroke:#FFA800;-webkit-transition:0.3s;transition:0.3s;}.sidebar__nav-submenu{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:100%;width:980px;}.sidebar__menu{position:absolute;top:-55px;left:270px;background:#1C1B1B;width:100%;width:980px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:0;pointer-events:none;-webkit-transition:0.3s;transition:0.3s;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.sidebar__menu-list{margin-bottom:-30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:90px 10px 90px 75px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.sidebar__menu-item{margin-bottom:30px;width:calc(100% / 3);}.sidebar__menu-link{font-size:18px;line-height:22px;color:#fff;position:relative;display:inline-block;-webkit-transition:0.3s;transition:0.3s;}.sidebar__menu-link:after{content:'';position:absolute;bottom:-2px;left:0;width:0;border-bottom:1px solid #FFA800;-webkit-transition:0.3s;transition:0.3s;}.sidebar__menu-link:hover{color:#FFA800;}.sidebar__menu-link:hover:after{width:100%;}.sidebar__menu-img{width:310px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.sidebar__menu-img img{display:block;width:100%;height:100%;object-fit:cover;}#sidebar-menu-1{height:calc((71px * 4) + 15vh);top:calc(50% - 90px);-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}@media (max-width:1500px){.sidebar{width:210px;}.sidebar:after{width:210px;}.sidebar__menu{left:210px;}}@media (max-width:1024px){.sidebar{display:none;}}.bar{position:fixed;top:0;right:0;width:60px;padding:40px 0;height:100%;background-color:rgba(28,27,27,0.88);background-image:url(../static/img/bar-bg.jpg);background-size:cover;background-repeat:no-repeat;z-index:10;}.bar__list{padding-bottom:20px;margin-bottom:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;}.bar__list:after{content:'';position:absolute;bottom:0;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:24px;border-bottom:1px solid #444444;}.bar__list-item{margin-bottom:20px;}.bar__list-item:last-child{margin-bottom:0;}.bar__list-item-link{width:40px;height:40px;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#383838;box-shadow:0px 5px 12px rgba(0,0,0,0.04);-webkit-transition:0.3s;transition:0.3s;position:relative;}.bar__list-item-link svg{fill:#C9C9C9;-webkit-transition:0.3s;transition:0.3s;}.bar__list-item-link:hover{background:#FFA800;}.bar__list-item-link:hover svg{fill:#333;}.bar__list-item-link:hover .bar__tooltip{opacity:1;}.bar__tooltip{background:#1C1B1B;box-shadow:0px 4px 18px rgba(0,0,0,0.18);border-radius:2px;padding:15px;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);right:calc(100% + 20px);width:210px;opacity:0;-webkit-transition:0.3s;transition:0.3s;pointer-events:none;}.bar__tooltip:after{content:'';position:absolute;top:50%;right:-6px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:0;height:0;border-top:10px solid transparent;border-bottom:10px solid transparent;border-left:8px solid #1C1B1B;}.bar__tooltip-title{font-weight:600;font-size:15px;line-height:130%;color:#fff;}.bar__tooltip-text{font-size:13px;line-height:130%;color:#C1C1C1;margin-top:3px;}@media (max-width:1024px){.bar{display:none;}}.langs__item{margin-bottom:20px;}.langs__item:last-child{margin-bottom:0;}.langs__item.current{pointer-events:none;}.langs__item.current .langs__item-link{color:#fff;}.langs__item-link{font-size:14px;line-height:17px;color:#C8C8C8;-webkit-transition:0.3s;transition:0.3s;display:block;text-align:center;}.langs__item-link:hover{color:#FFA800;}.up-btn{cursor:pointer;position:absolute;bottom:40px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.up-btn__icon{width:40px;height:40px;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#383838;box-shadow:0px 5px 12px rgba(0,0,0,0.04);-webkit-transition:0.3s;transition:0.3s;margin:0 auto 10px;}.up-btn__icon svg{fill:#C9C9C9;-webkit-transition:0.3s;transition:0.3s;}.up-btn__text{font-size:12px;line-height:14px;text-transform:uppercase;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;color:#787878;-webkit-transition:0.3s;transition:0.3s;}.up-btn:hover .up-btn__icon{background-color:#FFA800;}.up-btn:hover .up-btn__icon svg{fill:#333333;}.up-btn:hover .up-btn__text{color:#fff;}.header{padding:10px 0;background-color:#1C1B1B;position:fixed;top:0;left:0;width:100%;z-index:10;height:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header__inner{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header__logo{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.header__controls{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header__controls-item{margin-right:25px;}.header__controls-item:last-child{margin-right:0;}.header__controls-item-link{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:20px;height:20px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;position:relative;}.header__controls-item-link svg{fill:#C8C8C8;-webkit-transition:0.3s;transition:0.3s;}.header__controls-item-link:hover svg{fill:#ffffff;}.header__controls-item-amount{position:absolute;top:-10px;right:-10px;width:18px;height:18px;border-radius:50%;background-color:#FFA800;font-size:12px;color:#333333;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}@media (min-width:1024px){.header{display:none;}}@media (max-width:768px){.header__controls-item:nth-child(1){display:none;}}.section{padding:100px 0 120px;}.section__header{margin-bottom:70px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.section-grey{background-color:#F7F6F4;}.section-white{background-color:#fff;}.section--border{position:relative;}.section--border:after{content:'';position:absolute;bottom:0px;border-bottom:1px solid #E1DCD5;width:calc(100% - 330px - 70px - 90px);left:365px;}@media (max-width:1500px){.section--border:after{width:calc(100% - 220px - 70px - 70px);left:255px;}}@media (max-width:1024px){.section{padding:80px 0 100px;}.section__header{margin-bottom:40px;}.section--border:after{width:calc(100% - 70px);left:35px;}}@media (max-width:768px){.section{padding:40px 0;}}.section-text h2{margin-bottom:30px;}.section-text p{margin-bottom:30px;}.section-text p:last-child{margin-bottom:0;}@media (max-width:1500px){.section-text p{margin-bottom:20px;}}@media (max-width:768px){.section-text h2{font-size:28px;margin-bottom:15px;}.section-text p{margin-bottom:10px;}}.footer{padding:80px 0;background-color:#fff;}.footer__inner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.footer__logo svg{fill:#FFA800;-webkit-transition:0.3s;transition:0.3s;}.footer__logo:hover svg{fill:#333;}.footer__nav-block{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.footer__nav{margin-right:80px;}.footer__nav:last-child{margin-right:0;}.footer__nav-item{margin-bottom:20px;}.footer__nav-item:last-child{margin-bottom:0;}.footer__nav-link{font-size:15px;line-height:18px;-webkit-transition:0.3s;transition:0.3s;color:#555555;font-family:'Museo Sans Cyrl 700';}.footer__nav-link:hover{color:#FFA800;}.footer__block{max-width:165px;}.footer__socials{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:40px;}.footer__socials-item{margin-right:30px;}.footer__socials-item:last-child{margin-right:0;}.footer__socials-item-link svg{fill:#555555;-webkit-transition:0.3s;transition:0.3s;}.footer__socials-item-link:hover svg{fill:#FFA800;}.footer__link{font-size:15px;line-height:130%;color:#AAAAAA;-webkit-transition:0.3s;transition:0.3s;}.footer__link:hover{color:#333;}.footer__contacts{max-width:215px;}.footer__contacts-link{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#555555;-webkit-transition:0.3s;transition:0.3s;font-family:'Museo Sans Cyrl 900';margin-bottom:10px;font-size:16px;line-height:19px;}.footer__contacts-link svg{fill:#555555;-webkit-transition:0.3s;transition:0.3s;margin-right:10px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.footer__contacts-link:hover{color:#FFA800;}.footer__contacts-link:hover svg{fill:#FFA800;}.footer__contacts-text{font-size:13px;line-height:130%;color:#AAAAAA;padding-left:23px;border-bottom:1px solid #E1DCD5;padding-bottom:15px;margin-bottom:15px;}@media (max-width:1500px){.footer__nav{margin-right:30px;}}@media (max-width:1200px){.footer__inner{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.footer__block{margin-top:30px;min-width:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.footer__socials{margin-bottom:0;}}@media (max-width:1024px){.footer__block{margin-top:60px;}}@media (max-width:768px){.footer{padding:40px 0;}.footer__logo{margin:0 auto 40px;}.footer__nav-block{width:100%;margin-bottom:40px;}.footer__contacts{margin:0 auto 40px;}.footer__block{margin-top:0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.footer__socials{margin-bottom:40px;}.footer__nav{margin-right:0;width:50%;}}.overlay{background-color:rgba(28,27,27,0.7);position:fixed;top:0;left:0;width:100%;height:100%;-webkit-transition:0.3s;transition:0.3s;pointer-events:none;opacity:0;z-index:9;}.overlay.active{opacity:1;pointer-events:all;}.menu{width:340px;background-color:#1C1B1B;padding:15px 35px;height:calc(100% - 60px);position:fixed;top:60px;left:-100%;z-index:10;overflow-y:auto;-webkit-transition:0.3s;transition:0.3s;opacity:0;}.menu.active{left:0;opacity:1;}.menu__langs{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:15px;margin-bottom:20px;border-bottom:1px solid #383838;}.menu__langs-item{margin-right:30px;}.menu__langs-item:last-child{margin-right:0;}.menu__langs-item.active .menu__langs-link{pointer-events:none;color:#C8C8C8;}.menu__langs-link{font-size:14px;line-height:17px;color:#666666;-webkit-transition:0.3s;transition:0.3s;}.menu__langs-link:hover{color:#C8C8C8;}.menu__nav{padding-bottom:25px;margin-bottom:25px;border-bottom:1px solid #383838;}.menu__nav-item{margin-bottom:25px;}.menu__nav-item:last-child{margin-bottom:0;}.menu__nav-item.active .menu__nav-link-icon svg{fill:#FFA800;}.menu__nav-item.active .menu__nav-link-text{color:#FFA800;}.menu__nav-item.active .menu__nav-link-arr{stroke:#FFA800;}.menu__nav-item.active .menu__nav-submenu{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.menu__nav-item.active .menu__nav-submenu-item{-webkit-transform:translate(0);-ms-transform:translate(0);transform:translate(0);-webkit-transition-delay:0.3s;transition-delay:0.3s;opacity:1;}.menu__nav-link{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.menu__nav-link:hover .menu__nav-link-icon svg{fill:#FFA800;}.menu__nav-link:hover .menu__nav-link-text{color:#FFA800;}.menu__nav-link:hover .menu__nav-link-arr{stroke:#FFA800;}.menu__nav-link-icon{width:38px;margin-right:15px;}.menu__nav-link-icon svg{fill:#fff;-webkit-transition:0.3s;transition:0.3s;}.menu__nav-link-text{font-size:13px;line-height:16px;color:#fff;-webkit-letter-spacing:0.2em;-moz-letter-spacing:0.2em;-ms-letter-spacing:0.2em;letter-spacing:0.2em;text-transform:uppercase;-webkit-transition:0.3s;transition:0.3s;text-align:left;}.menu__nav-link-arr{stroke:#999999;-webkit-transition:0.3s;transition:0.3s;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.menu__nav-submenu{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;display:none;-webkit-transition:0.3s;transition:0.3s;margin:20px 0 -5px;}.menu__nav-submenu-item{width:50%;margin-bottom:20px;opacity:0;-webkit-transition:0.3s;transition:0.3s;}.menu__nav-submenu-link{font-size:14px;line-height:17px;color:#fff;display:inline-block;position:relative;white-space:nowrap;}.menu__nav-submenu-link:after{content:'';position:absolute;bottom:0;left:0;border-bottom:1px solid #FFA800;-webkit-transition:0.3s;transition:0.3s;width:0;}.menu__nav-submenu-link:hover{color:#FFA800;}.menu__nav-submenu-link:hover:after{width:100%;}.menu__page-nav{margin-bottom:40px;}.menu__page-nav-item{margin-bottom:25px;}.menu__page-nav-link{font-size:16px;line-height:19px;color:#C8C8C8;-webkit-transition:0.3s;transition:0.3s;}.menu__page-nav-link:hover{color:#fff;}.menu__controls{padding-bottom:25px;margin-bottom:25px;border-bottom:1px solid #383838;}.menu__controls-item{margin-bottom:25px;}.menu__controls-item:last-child{margin-bottom:0;}.menu__controls-link{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.menu__controls-link:hover .menu__controls-link-icon svg{fill:#FFA800;}.menu__controls-link:hover .menu__controls-link-text{color:#FFA800;}.menu__controls-link-icon{width:38px;margin-right:15px;}.menu__controls-link-icon svg{fill:#fff;-webkit-transition:0.3s;transition:0.3s;}.menu__controls-link-text{font-size:13px;line-height:16px;color:#fff;-webkit-letter-spacing:0.2em;-moz-letter-spacing:0.2em;-ms-letter-spacing:0.2em;letter-spacing:0.2em;text-transform:uppercase;-webkit-transition:0.3s;transition:0.3s;text-align:left;margin-right:auto;}.menu .socials{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.page-header{margin-bottom:-40px;position:relative;z-index:1;}.page-header__top{padding:30px 0;border-bottom:1px solid #E1DCD5;}.page-header .breadcrumbs{margin-top:20px;}.page-header--white{background-color:#fff;}.page-header--filter .page-header__top{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}@media (max-width:1024px){.page-header--filter .page-header__top{padding-top:10px;}}@media (max-width:768px){.page-header{margin-bottom:0px;}.page-header__top{padding-bottom:10px;padding-top:20px;}.page-header .breadcrumbs{margin-top:10px;}}.breadcrumbs{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.breadcrumbs__item{position:relative;}.breadcrumbs__item:after{content:'/';font-size:14px;line-height:17px;color:#999999;margin:0 0.5rem;}.breadcrumbs__item:last-child{pointer-events:none;}.breadcrumbs__item:last-child:after{display:none;}.breadcrumbs__item-link{font-size:14px;line-height:17px;color:#999999;-webkit-transition:0.3s;transition:0.3s;}.breadcrumbs__item-link:hover{color:#1C1B1B;}.banners-section{margin-bottom:50px;padding-top:30px;}.banners-section__row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 -7.5px -15px;}.banners-section__col{padding:0 7.5px;width:100%;}.banners-section__col:nth-child(2),.banners-section__col:nth-child(3),.banners-section__col:nth-child(4){width:33.3333%;}.banners-section__item{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-size:cover;background-repeat:no-repeat;background-position:center;position:relative;height:280px;margin-bottom:15px;padding:0 35px;overflow:hidden;}.banners-section__item:after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.5);}.banners-section__item:hover .banners-section__item-text{color:#FFA800;}.banners-section__item--main{height:440px;}.banners-section__item--main .banners-section__item-title{font-size:56px;line-height:120%;}.banners-section__item-icon{display:none;}.banners-section__item-title{color:#fff;position:relative;z-index:1;font-size:42px;line-height:120%;margin-bottom:5px;font-family:'Museo Sans Cyrl 700';}.banners-section__item-text{font-size:15px;line-height:130%;color:#AAAAAA;position:relative;z-index:1;-webkit-transition:0.3s;transition:0.3s;}@media (max-width:1500px){.banners-section{padding-top:10px;}.banners-section__row{margin:0 -5px -10px;}.banners-section__col{padding:0 5px;}.banners-section__item{height:200px;margin-bottom:10px;}.banners-section__item--main{height:300px;}.banners-section__item--main .banners-section__item-title{font-size:48px;line-height:120%;}.banners-section__item-title{font-size:34px;line-height:120%;}}@media (max-width:1024px){.banners-section{padding-top:30px;}.banners-section__col{width:50%;}.banners-section__col:nth-child(2),.banners-section__col:nth-child(3),.banners-section__col:nth-child(4){width:50%;}.banners-section__item{height:250px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.banners-section__item--main{height:250px;}.banners-section__item--main .banners-section__item-title{font-size:36px;}.banners-section__item-title{font-size:36px;}.banners-section__item-icon{display:block;position:relative;z-index:1;margin-right:15px;}.banners-section__item-icon svg{fill:#FFA800;}}@media (max-width:768px){.banners-section{margin-bottom:40px;padding-top:20px;}.banners-section__row{margin-bottom:-10px;}.banners-section__col{width:100%;}.banners-section__col:nth-child(2),.banners-section__col:nth-child(3),.banners-section__col:nth-child(4){width:100%;}.banners-section__item{background-image:inherit !important;padding:20px;border:2px solid #E1DCD5;height:auto;margin-bottom:10px;}.banners-section__item:after{display:none;}.banners-section__item:hover{border:1px solid #FFA800;}.banners-section__item--main{height:auto;}.banners-section__item--main .banners-section__item-title{font-size:20px;}.banners-section__item-title{font-size:20px;color:#333;}.banners-section__item-icon{width:40px;}.banners-section__item-icon svg{width:100%;}}.benefits-section{margin-bottom:50px;}.benefits-section__row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 -7.5px;}.benefits-section__col{width:25%;padding:0 7.5px;}.benefits-section__item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.benefits-section__item-icon{margin-right:15px;}.benefits-section__item-title{font-size:17px;line-height:130%;color:#333;}.benefits-section__item-title b{display:block;}@media (max-width:1367px){.benefits-section__row{margin:0 -7.5px -35px;}.benefits-section__col{width:50%;}.benefits-section__item{margin-bottom:35px;}}@media (max-width:768px){.benefits-section{margin-bottom:40px;}.benefits-section__item{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;}.benefits-section__item-icon{margin-right:0;margin-bottom:10px;}.benefits-section__item-title{font-size:15px;}}.products-slider .slick-list{margin:0 -17.5px;}.products-slider .slick-slide{padding:0 17.5px;}.products-slider__arr-next{position:absolute;top:-113px;right:160px;width:36px;height:36px;border-radius:50%;background:#ECECEC;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;-webkit-transition:0.3s;transition:0.3s;z-index:1;}.products-slider__arr-next svg{stroke:#999;}.products-slider__arr-next:hover{background-color:#FFA800;}.products-slider__arr-next:hover svg{stroke:#333;}.products-slider__arr-prev{position:absolute;top:-113px;right:206px;width:36px;height:36px;border-radius:50%;background:#ECECEC;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;-webkit-transition:0.3s;transition:0.3s;z-index:1;}.products-slider__arr-prev svg{stroke:#999;-webkit-transition:0.3s;transition:0.3s;}.products-slider__arr-prev:hover{background-color:#FFA800;}.products-slider__arr-prev:hover svg{stroke:#333;}@media (max-width:1024px){.products-slider__arr-prev{top:-80px;}.products-slider__arr-next{top:-80px;}}@media (max-width:768px){.products-slider{margin-bottom:76px;}.products-slider__item .product-card{width:270px;}.products-slider__arr-prev{top:calc(100% + 40px);right:auto;left:calc(50% - 36px);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.products-slider__arr-next{top:calc(100% + 40px);right:auto;left:calc(50% + 36px);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}}@media (max-width:500px){.products-slider .slick-list{margin:0 -10px;}.products-slider .slick-slide{padding:0 10px;}.products-slider__item .product-card{width:160px;}}.product-card{display:block;position:relative;}.product-card__img{height:380px;margin-bottom:20px;display:block;}.product-card__img img{display:block;width:100%;height:100%;object-fit:cover;}.product-card__rate{margin-bottom:10px;}.product-card__title{font-size:15px;line-height:150%;color:#333333;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;text-transform:uppercase;font-family:'Museo Sans Cyrl 900';display:block;margin-bottom:8px;}.product-card__footer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.product-card__price{font-size:28px;line-height:170%;font-family:'Oswald';color:#333;font-weight:500;}.product-card__price span{font-size:15px;line-height:170%;-webkit-letter-spacing:0.05em;-moz-letter-spacing:0.05em;-ms-letter-spacing:0.05em;letter-spacing:0.05em;}.product-card__buy-btn{position:relative;z-index:1;}.product-card--hit:after{content:'';position:absolute;top:0;left:0;width:26px;height:59px;background-image:url(../static/img/hit-label.svg);background-repeat:no-repeat;background-position:center;}.product-card--new:after{content:'';position:absolute;top:0;left:0;width:26px;height:100px;background-image:url(../static/img/new-label.svg);background-repeat:no-repeat;background-position:center;}@media (max-width:500px){.product-card__img{height:auto;}.product-card__title{font-size:13px;}.product-card__price{font-size:24px;margin-bottom:10px;}.product-card__footer{display:block;}.product-card__footer .btn{width:100%;text-align:center;}}.blog-list{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 -17.5px -60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.blog-list__item{padding:0 17.5px;width:calc(100% / 3);margin-bottom:60px;}@media (max-width:1200px){.blog-list{margin:0 -15px -50px;}.blog-list__item{padding:0 15px;margin-bottom:50px;}}@media (max-width:768px){.blog-list{margin-bottom:76px;}.blog-list__item{margin-bottom:0;}.blog-list__item .blog-card{width:270px;}.blog-list__arr-prev{top:calc(100% + 40px);right:auto;left:calc(50% - 36px);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.blog-list__arr-next{top:calc(100% + 40px);right:auto;left:calc(50% + 36px);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}}.blog-card{display:block;}.blog-card__img{margin-bottom:15px;}.blog-card__img img{display:block;width:100%;}.blog-card__title{font-size:17px;line-height:140%;color:#333;margin-bottom:10px;-webkit-transition:0.3s;transition:0.3s;font-family:'Museo Sans Cyrl 700';}.blog-card__footer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.blog-card__post-date{font-size:12px;line-height:170%;color:#AAAAAA;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;margin-right:20px;}.blog-card__views{font-size:12px;line-height:170%;color:#AAAAAA;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.blog-card__views svg{stroke:#AAAAAA;margin-right:6px;}.blog-card:hover .blog-card__title{color:#FFA800;}.delivery-section__block{margin-bottom:70px;}.delivery-section__block:last-child{margin-bottom:0;}.delivery-section__block h2,.delivery-section__block h3,.delivery-section__block h4{margin-bottom:30px;}.delivery-section__block p{margin-bottom:30px;}.delivery-section__block p:last-child{margin-bottom:0;}.delivery-section__block ul{margin-bottom:30px;}.delivery-section__block ul:last-child{margin-bottom:30px;}.delivery-section__block ul li{padding-left:20px;font-size:17px;line-height:170%;position:relative;margin-bottom:6px;color:#333333;}.delivery-section__block ul li:last-child{margin-bottom:0;}.delivery-section__block ul li:before{content:'';position:absolute;top:10px;left:0;width:8px;height:8px;background-color:#FFA800;border-radius:50%;}.delivery-section__block ol{margin-bottom:30px;counter-reset:my-awesome-counter;}.delivery-section__block ol:last-child{margin-bottom:30px;}.delivery-section__block ol li{counter-increment:my-awesome-counter;padding-left:20px;font-size:17px;line-height:170%;position:relative;margin-bottom:6px;color:#333333;}.delivery-section__block ol li:last-child{margin-bottom:0;}.delivery-section__block ol li:before{content:counter(my-awesome-counter);position:absolute;top:0;left:0;color:#FFA800;}@media (max-width:1500px){.delivery-section__block p,.delivery-section__block ul,.delivery-section__block ol{margin-bottom:20px;}.delivery-section__block ul li,.delivery-section__block ol li{font-size:15px;}}@media (max-width:1024px){.delivery-section__block{margin-bottom:40px;}}@media (max-width:768px){.delivery-section__block{margin-bottom:20px;}.delivery-section__block h2,.delivery-section__block h3,.delivery-section__block h4{margin-bottom:10px;}.delivery-section__block p{margin-bottom:10px;}.delivery-section__block ul,.delivery-section__block ol{margin-bottom:10px;}.delivery-section__block ul li,.delivery-section__block ol li{font-size:14px;}}.catalog-section__list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 -17.5px;border-bottom:1px solid #E1DCD5;margin-bottom:30px;}.catalog-section__list-item{width:calc(100% / 4);padding:0 17.5px;margin-bottom:100px;}@media (max-width:1500px){.catalog-section__list-item{width:calc(100% / 3);margin-bottom:70px;}}@media (max-width:768px){.catalog-section__list{margin-left:-10px;margin-right:-10px;}.catalog-section__list-item{width:calc(100% / 2);margin-bottom:35px;padding:0 10px;}}.pagenavi{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.pagenavi__item{margin:0 6px;}.pagenavi__item-arr{background-color:#ECECEC;width:30px;height:30px;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:0.3s;transition:0.3s;}.pagenavi__item-arr svg{stroke:#999;-webkit-transition:0.3s;transition:0.3s;}.pagenavi__item-arr:hover{background-color:#333;}.pagenavi__item-arr:hover svg{stroke:#fff;}.pagenavi__item-link{width:30px;height:30px;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #E1DCD5;font-size:15px;text-transform:uppercase;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;-webkit-transition:0.3s;transition:0.3s;color:#999999;}.pagenavi__item-link:hover{border:1px solid #333;background-color:#333;color:#fff;}.pagenavi__item-dots{width:30px;height:30px;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:15px;text-transform:uppercase;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;-webkit-transition:0.3s;transition:0.3s;color:#999999;}.panel{max-width:470px;width:100%;background-color:#fff;position:fixed;top:0;right:-100%;z-index:10;height:100%;overflow-y:auto;padding:0px 50px 25px;opacity:0;pointer-events:none;-webkit-transition:0.3s;transition:0.3s;}.panel.active{opacity:1;right:60px;pointer-events:all;}.panel__header{position:-webkit-sticky;position:sticky;top:0;left:0;width:100%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:25px;padding-top:25px;border-bottom:1px solid #E1DCD5;z-index:2;cursor:pointer;}.panel__header:hover .panel__close-btn svg{fill:#1C1B1B;}.panel__title{color:#999999;font-size:14px;line-height:17px;}.panel__close-btn{margin-right:10px;cursor:pointer;width:17px;height:17px;}.panel__close-btn svg{width:100%;height:100%;fill:#FFA800;-webkit-transition:0.3s;transition:0.3s;}.panel__message{margin-top:30px;}.panel__message-title{color:#333;font-size:28px;line-height:125%;margin-bottom:20px;font-family:'Museo Sans Cyrl 700';}.panel__message-text{font-size:15px;line-height:150%;color:#555;margin-bottom:30px;}.panel__message-icon{margin-bottom:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.panel__message-footer{text-align:center;}@media (max-width:1024px){.panel{top:60px;height:calc(100% - 60px);}.panel.active{right:0;}}@media (max-width:768px){.panel{padding-left:20px;padding-right:20px;}}.cart-list__item{border-bottom:1px solid #E1DCD5;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:25px 0;}.cart-list__item-img{width:76px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-right:10px;}.cart-list__item-img img{display:block;width:100%;}.cart-list__item-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.cart-list__item-title{font-size:15px;line-height:18px;margin-bottom:10px;}.cart-list__item-price{font-size:18px;line-height:22px;}.cart-list__item-delete-btn{cursor:pointer;margin-left:20px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.cart-list__item-delete-btn svg{fill:#E1DCD5;-webkit-transition:0.3s;transition:0.3s;}.cart-list__item-delete-btn:hover svg{fill:#1C1B1B;}.cart-list__item-amount{width:120px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border:1px solid #ECECEC;border-radius:25px;position:relative;overflow:hidden;}.cart-list__item-amount-input{width:100%;height:35px;line-height:33px;border:none;text-align:center;font-size:14px;color:#1C1B1B;display:block;-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;}.cart-list__item-amount-input:focus{outline:none;}.cart-list__item-amount-input::-webkit-outer-spin-button,.cart-list__item-amount-input::-webkit-inner-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0;}.cart-list__item-amount-btn-sub{background:#ECECEC;position:absolute;top:0;left:0;width:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:25px 0 0 25px;z-index:1;height:100%;cursor:pointer;-webkit-transition:0.3s;transition:0.3s;}.cart-list__item-amount-btn-sub svg{stroke:#999;-webkit-transition:0.3s;transition:0.3s;}.cart-list__item-amount-btn-sub:hover{background-color:#1C1B1B;}.cart-list__item-amount-btn-sub:hover svg{stroke:#fff;}.cart-list__item-amount-btn-add{background:#ECECEC;position:absolute;top:0;right:0;width:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:0px 25px 25px 0px;z-index:1;height:100%;cursor:pointer;-webkit-transition:0.3s;transition:0.3s;}.cart-list__item-amount-btn-add svg{stroke:#999;-webkit-transition:0.3s;transition:0.3s;}.cart-list__item-amount-btn-add:hover{background-color:#1C1B1B;}.cart-list__item-amount-btn-add:hover svg{stroke:#fff;}.cart-footer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-top:25px;}.cart-results{text-align:right;}.cart-results__title{font-size:14px;line-height:17px;}.cart-results__value{font-size:20px;line-height:24px;font-family:'Museo Sans Cyrl 700';}.cart-results__value span{font-family:'Museo Sans Cyrl 500';}.cart-results--inline{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;}@media (max-width:576px){.cart-list__item-amount{margin-right:10px;}.cart-list__item-delete-btn{margin-left:5px;}}.search-form{margin-top:25px;}.search-form .form__field-input{padding-right:40px;}.form__field{position:relative;}.form__field .select2-container--default .select2-selection--single{border:none;height:60px;background:#F7F6F4;border-radius:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid #E1DCD5;-webkit-transition:0.3s;transition:0.3s;}.form__field .select2-container--default .select2-selection--single:focus{outline:none;border:1px solid rgba(0,0,0,0.2);}.form__field .select2-container--default .select2-selection--single:hover{border:1px solid rgba(0,0,0,0.2);}.form__field .select2-container--default .select2-selection--single .select2-selection__rendered{height:100%;font-size:15px;line-height:58px;color:#333;padding-right:30px;padding-left:30px;}.form__field .select2-container--default .select2-selection--single .select2-selection__rendered .select2-selection__placeholder{color:#999999;}.form__field .select2-container--default .select2-selection--single .select2-selection__arrow{right:30px;border-radius:50%;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:22px;height:22px;background-color:#fff;background-image:url(../static/img/chevron-down-grey.svg);background-repeat:no-repeat;background-position:center;background-size:14px 14px;}.form__field .select2-container--default .select2-selection--single .select2-selection__arrow b{display:none;}.form__field .select2-container--default.select2-container--open .select2-selection--single{background-color:#fff;border:1px solid rgba(0,0,0,0.2);}.form__field .select2-container--default.select2-container--open.select2-container--below .select2-selection--single{border-bottom-left-radius:4px;border-bottom-right-radius:4px;}.form__field-input{background:#F7F6F4;border:1px solid #E1DCD5;height:60px;line-height:58px;border-radius:35px;font-family:'Museo Sans Cyrl 500';width:100%;padding:0 30px;color:#1C1B1B;font-size:15px;-webkit-transition:0.3s;transition:0.3s;}.form__field-input::-webkit-input-placeholder{color:#999999;-webkit-transition:0.3s;transition:0.3s;}.form__field-input::-moz-placeholder{color:#999999;-webkit-transition:0.3s;transition:0.3s;}.form__field-input:-ms-input-placeholder{color:#999999;-webkit-transition:0.3s;transition:0.3s;}.form__field-input::placeholder{color:#999999;-webkit-transition:0.3s;transition:0.3s;}.form__field-input:hover{border:1px solid rgba(0,0,0,0.2);}.form__field-input:focus{outline:none;background-color:#fff;}.form__field-input:focus::-webkit-input-placeholder{color:#1C1B1B;}.form__field-input:focus::-moz-placeholder{color:#1C1B1B;}.form__field-input:focus:-ms-input-placeholder{color:#1C1B1B;}.form__field-input:focus::placeholder{color:#1C1B1B;}.form__field-input::-webkit-search-decoration,.form__field-input::-webkit-search-cancel-button,.form__field-input::-webkit-search-results-button,.form__field-input::-webkit-search-results-decoration{-webkit-appearance:none;}.form__field-icon{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);right:25px;}.form__field-icon svg{fill:#999;-webkit-transition:0.3s;transition:0.3s;}.form__field-textarea{height:120px;padding:20px 30px;background:#F7F6F4;border:1px solid #E1DCD5;border-radius:35px;font-family:'Museo Sans Cyrl 500';width:100%;font-size:15px;line-height:18px;resize:none;}.form__field-textarea::-webkit-input-placeholder{color:#999999;-webkit-transition:0.3s;transition:0.3s;}.form__field-textarea::-moz-placeholder{color:#999999;-webkit-transition:0.3s;transition:0.3s;}.form__field-textarea:-ms-input-placeholder{color:#999999;-webkit-transition:0.3s;transition:0.3s;}.form__field-textarea::placeholder{color:#999999;-webkit-transition:0.3s;transition:0.3s;}.form__field-textarea:hover{border:1px solid rgba(0,0,0,0.2);}.form__field-textarea:focus{outline:none;background-color:#fff;}.form__field-textarea:focus::-webkit-input-placeholder{color:#1C1B1B;}.form__field-textarea:focus::-moz-placeholder{color:#1C1B1B;}.form__field-textarea:focus:-ms-input-placeholder{color:#1C1B1B;}.form__field-textarea:focus::placeholder{color:#1C1B1B;}.form__field-textarea::-webkit-search-decoration,.form__field-textarea::-webkit-search-cancel-button,.form__field-textarea::-webkit-search-results-button,.form__field-textarea::-webkit-search-results-decoration{-webkit-appearance:none;}.order{position:relative;}.order__row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 -17.5px;position:relative;}.order__row::after{content:'';position:absolute;bottom:-120px;left:0;width:100%;border-bottom:1px solid #E1DCD5;}.order__col{padding:0 17.5px;}.order__col:first-child{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.order__col:last-child{width:400px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.order__block{margin-bottom:70px;}.order__block:last-child{margin-bottom:0;}.order__block-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:20px;}.order__block-number{width:74px;height:65px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;background-image:url(../static/img/laurel.svg);background-repeat:no-repeat;background-position:center;background-size:contain;font-size:28px;line-height:125%;color:#444;font-family:'Museo Sans Cyrl 700';text-align:center;padding-top:8px;margin-right:20px;}.order__block-content{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.order__block-title{font-size:28px;line-height:125%;font-family:'Museo Sans Cyrl 700';color:#333;}.order__block-text{font-size:15px;line-height:125%;color:#999999;}.order__block-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 -7.5px -15px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.order__block-col-50{padding:0 7.5px;width:50%;margin-bottom:15px;}.order__block-col-100{padding:0 7.5px;width:100%;margin-bottom:15px;}.order__info-block{padding-bottom:25px;border-bottom:1px solid #E1DCD5;}.order__info-block-title{font-size:15px;line-height:18px;color:#FFA800;margin-bottom:10px;}.order__info-block-list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.order__info-block-list-item{margin-right:20px;}.order__info-block-list-item:last-child{margin-right:0;}.order__info-block-list-link{font-size:17px;line-height:20px;font-family:'Museo Sans Cyrl 700';-webkit-transition:0.3s;transition:0.3s;white-space:nowrap;}.order__info-block-list-link svg{margin-right:6px;fill:#333;-webkit-transition:0.3s;transition:0.3s;}.order__info-block-list-link:hover{color:#FFA800;}.order__info-block-list-link:hover svg{fill:#FFA800;}@media (max-width:1200px){.order__row{display:block;}.order__col:last-child{width:100%;}}@media (max-width:1024px){.order__row::after{bottom:-100px;}.order__block{margin-bottom:40px;}.order__block-title{font-size:20px;}.order__block-number{width:64px;height:55px;font-size:22px;}}@media (max-width:768px){.order__row::after{display:none;}}@media (max-width:576px){.order__block:last-child .order__block-header{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.order__block:last-child .order__block-header .btn{width:100%;margin-top:20px;text-align:center;}.order__block-header{margin-bottom:15px;}.order__block-col-50{width:100%;}.order__block-text{font-size:13px;margin-top:5px;}.order__info-block-list-item{margin-right:15px;}.order__info-block-list-link{font-size:16px;}}.sort{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.sort__block{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:20px;}.sort__block-title{font-size:14px;line-height:20px;margin-right:0.25rem;white-space:nowrap;}.sort .select2-container--default .select2-selection--single{border:none;height:20px;border-radius:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:0.3s;transition:0.3s;}.sort .select2-container--default .select2-selection--single:focus{outline:none;}.sort .select2-container--default .select2-selection--single .select2-selection__rendered{height:100%;font-size:14px;line-height:20px;color:#333;padding:0 12px 0 0;position:relative;}.sort .select2-container--default .select2-selection--single .select2-selection__rendered::after{content:'';position:absolute;bottom:0;left:0;width:calc(100% - 12px);border-bottom:1px solid #333;}.sort .select2-container--default .select2-selection--single .select2-selection__rendered .select2-selection__placeholder{color:#999999;}.sort .select2-container--default .select2-selection--single .select2-selection__arrow{right:0px;border-radius:50%;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:8px;height:8px;background-image:url(../static/img/chevron-down-grey-big.svg);background-repeat:no-repeat;background-position:center;background-size:contain;}.sort .select2-container--default .select2-selection--single .select2-selection__arrow b{display:none;}.sort .select2-container--default.select2-container--open .select2-selection--single{background-color:#fff;}.sort .select2-container--default.select2-container--open.select2-container--below .select2-selection--single{border-bottom-left-radius:0px;border-bottom-right-radius:0px;}.filter-btn{width:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:11px;line-height:170%;color:#fff;text-transform:uppercase;font-family:'Museo Sans Cyrl 700';padding:0 20px;height:40px;border-radius:35px;background-color:#333;cursor:pointer;-webkit-transition:0.3s;transition:0.3s;position:relative;}.filter-btn svg{fill:#fff;margin-right:5px;-webkit-transition:0.3s;transition:0.3s;}.filter-btn span{position:absolute;background-color:#FFA800;width:18px;height:18px;top:-3px;right:-6px;border-radius:50%;font-size:12px;color:#333;text-align:center;}.filter-btn:hover{background-color:#FFA800;-webkit-transition:0.3s;transition:0.3s;}.filter-btn:hover svg{fill:#fff;}.sort-results{border:none;padding-top:5px;}.sort-results .select2-results{background:#FFFFFF;box-shadow:0px 4px 5px rgba(0,0,0,0.15);border-radius:4px;}.sort-results .select2-container--default .select2-results__option--highlighted.select2-results__option--selectable{background-color:#fff !important;}.sort-results .select2-container--default .select2-results__option--highlighted.select2-results__option--selectable{background-color:#fff !important;color:#FFA800;}.sort-results .select2-results__option{font-size:14px;line-height:17px;padding:12px 15px;position:relative;-webkit-transition:color 0.3s;transition:color 0.3s;}.sort-results .select2-results__option::after{content:'';position:absolute;bottom:0;left:15px;width:calc(100% - 30px);border:1px solid #E1DCD5;}.sort-results .select2-results__option:last-child::after{display:none;}.sort-results .select2-results__option.select2-results__option--selectable{background-color:#fff !important;color:#333;}.sort-results .select2-results__option.select2-results__option--selected{color:#FFA800;}.sort-results .select2-results__option:hover{color:#FFA800;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxsZWdlcm8tc3NyXFxhcHBcXHBhZ2VzXFxkZWxpdmVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEra0J5QixBQUs4QixBQW1CQSxBQVVMLEFBSUUsQUFPd0IsQUFTckIsQUFXSixBQU1ILEFBSU8sQUFLTCxBQVFELEFBSUUsQUFJRCxBQUlPLEFBSU4sQUFJSSxBQUlKLEFBT0QsQUFJTyxBQU1FLEFBT04sQUFPZSxBQUliLEFBR0ksQUFPTCxBQUljLEFBSVQsQUFjSSxBQUdMLEFBV1QsQUFHRSxBQUtKLEFBS0csQUFHUixBQUdZLEFBS0gsQUFLRixBQUdBLEFBSWMsQUFFYixBQUdOLEFBaUJXLEFBWUUsQUFJVCxBQUdJLEFBT0osQUFFQyxBQU00QyxBQVkvQyxBQUdGLEFBSWEsQUFHUCxBQUd1QyxBQUkvQixBQVFGLEFBRUosQUFTVSxBQWdCVixBQUljLEFBY0YsQUFLYixBQUlDLEFBSVUsQUFRaEIsQUFLWSxBQUlELEFBSVQsQUFHWSxBQUlHLEFBSU4sQUFHQyxBQU9OLEFBSUEsQUFFQSxBQUVFLEFBR0UsQUFHRSxBQUdFLEFBR0UsQUFJakIsQUFHQyxBQUdXLEFBR0csQUFJVixBQUtVLEFBVUUsQUFFZCxBQUdJLEFBTUosQUFFVyxBQWdCa0MsQUFZL0MsQUFHQyxBQVNhLEFBRUEsQUFHaUMsQUFJMUMsQUFVRyxBQVVJLEFBUUksQUFFWixBQUVZLEFBUVYsQUFJYyxBQVVoQixBQUlDLEFBSUMsQUFJUSxBQU1BLEFBR1QsQUFLRyxBQUtHLEFBSVosQUFJYSxBQUlKLEFBR0gsQUFHQyxBQUlQLEFBR0MsQUFHYyxBQUlWLEFBS00sQUFFb0IsQUFBOE4sQUFBaU4sQUFBbU4sQUFBME0sQUFBMkMsQUFBZSxBQUE4QyxBQUFtQixBQUFzQixBQUErRyxBQUFzQixBQUFxQixBQUErRSxBQUFrRSxBQUE0QyxBQUEwUSxBQUE2QyxBQUFxRCxBQUFvQixBQUF3RCxBQUErQyxBQUF5QyxBQUFvQixBQUFzQixBQUFzRSxBQUF1QyxBQUFnQyxBQUF3RSxBQUF1RCxBQUFpQyxBQUF3QyxBQUFrQyxBQUF5QixBQUF3QixBQUF1QixBQUEwRCxBQUFnRCxBQUF3QixBQUF5QixBQUFxQyxBQUFrRCxBQUF3QixBQUFvUyxBQUFtSCxBQUF1QyxBQUF3RCxBQUFpQyxBQUF3RCxBQUFrRCxBQUErQixBQUF3RixBQUFxRCxBQUF3RCxBQUFvQyxBQUE0RCxBQUFrRCxBQUF1QyxBQUE2SSxBQUE4RCxBQUEwRCxBQUFpRCxBQUF3QyxBQUFxRCxBQUErSCxBQUF3QyxBQUEyRyxBQUFxRCxBQUFvRixBQUFvTCxBQUFxRyxBQUF1RCxBQUFpSCxBQUE0SCxBQUF5QyxBQUE4QixBQUFnRCxBQUFrRixBQUE0RixBQUF5QixBQUF3QixBQUErQyxBQUFvQixBQUF3TixBQUFnSCxBQUFvSSxBQUF5QyxBQUErQixBQUE4TSxBQUEwRCxBQUF1QyxBQUFpRCxBQUFnQyxBQUFpTyxBQUErTSxBQUF3RSxBQUFvRixBQUErQixBQUFzQyxBQUF1QyxBQUFnRCxBQUFnQyxBQUE2RyxBQUFzQixBQUF1RixBQUF3TSxBQUEwQyxBQUEwSSxBQUEyQyxBQUFxQyxBQUFzQixBQUFzSSxBQUF5RixBQUE2RSxBQUF3RCxBQUErQyxBQUF3QyxBQUFzSSxBQUErRCxBQUErQyxBQUE2TSxBQUF5RSxBQUE4QixBQUFtQyxBQUErRixBQUFtQyxBQUFpQyxBQUFpQyxBQUFnTSxBQUFnRSxBQUFrQyxBQUE4QyxBQUF3RCxBQUFtQyxBQUFpQyxBQUF5QyxBQUEyRCxBQUF5RCxBQUFrRCxBQUF1QixBQUErQyxBQUEwRCxBQUE4QyxBQUE4QixBQUE2QixBQUFxQyxBQUFtQyxBQUEyQyxBQUFnQyxBQUFrSCxBQUE2QixBQUE2QixBQUF5RSxBQUE4QyxBQUEyQyxBQUE4RCxBQUE0QixBQUF3RSxBQUFnQyxBQUFtQyxBQUFxSyxBQUFxRixBQUE0QyxBQUFxQyxBQUF3SyxBQUF1RCxBQUE4QixBQUFpSCxBQUF3RCxBQUErQyxBQUErQixBQUE2QixBQUFvRCxBQUEyQixBQUFzRCxBQUEyQixBQUFxRCxBQUEwSCxBQUFrQyxBQUFvSyxBQUFpQyxBQUF1SCxBQUEwQyxBQUE4RCxBQUE0QyxBQUErRSxBQUE4QixBQUFpRixBQUF5QyxBQUEyRCxBQUF3RCxBQUF3RCxBQUFxRCxBQUFxRSxBQUF5RCxBQUF3RyxBQUF1RCxBQUF1RCxBQUErQixBQUFrRCxBQUFpRCxBQUFxSSxBQUE4RixBQUE2RSxBQUErRSxBQUF3SCxBQUE2SCxBQUE2QyxBQUFpQyxBQUFzQyxBQUFtQyxBQUErRSxBQUFtQyxBQUFzRixBQUE4QyxBQUFpQyxBQUFrSCxBQUFpRSxBQUFvQyxBQUF1RCxBQUFzRCxBQUE0SixBQUFnQyxBQUF5RCxBQUFzRSxBQUF3QyxBQUFtRCxBQUE4SCxBQUF1RCxBQUFxQyxBQUF1RCxBQUEwQixBQUFrRSxBQUFvQyxBQUF5RyxBQUErQyxBQUFzQyxBQUFxRixBQUFtQyxBQUFpRCxBQUF1RSxBQUErSCxBQUFpQyxBQUFtUCxBQUF1SixBQUF3QyxBQUF3RSxBQUFzRCxBQUF1QyxBQUFxSixBQUErSCxBQUF3QyxBQUFrQyxBQUFtQyxBQUF5RCxBQUF3RSxBQUEwRCxBQUEwRSxBQUE4QixBQUFpSCxBQUFtQyxBQUFxRyxBQUF1RSxBQUEwQyxBQUF5QyxBQUFxRixBQUE2RCxBQUF1RCxBQUErQixBQUFrSCxBQUEwRCxBQUF3RyxBQUFvRCxBQUF1QyxBQUF1RSxBQUEyQyxBQUE4QyxBQUF5QyxBQUFvQyxBQUFtQyxBQUE0RCxBQUFrRCxBQUE4RCxBQUE0QyxBQUFxRSxBQUFxRSxBQUErQixBQUF5QyxBQUE2RCxBQUE2QyxBQUEyRCxBQUE0RCxBQUE2QyxBQUE2QyxBQUE0QyxBQUErTSxBQUF3RCxBQUErQyxBQUE0QyxBQUFnTixBQUFzRSxBQUErQyxBQUE2RCxBQUFtQyxBQUE0RCxBQUErQyxBQUFnRCxBQUEwRyxBQUE4SCxBQUEyQyxBQUErQyxBQUE0QixBQUErQyxBQUFrRSxBQUF5RSxBQUFtQyxBQUF5SyxBQUFpRixBQUFvRyxBQUE0RSxBQUEyQyxBQUF5TCxBQUE2TSxBQUFrQyxBQUFtQyxBQUFtRCxBQUFxQyxBQUEwQyxBQUFrRSxBQUE2RixBQUErQixBQUF1RSxBQUErQixBQUFzQyxBQUEwQyxBQUFvRyxBQUFrRixBQUFpQyxBQUFpQyxBQUF5QyxBQUE0SCxBQUFxRCxBQUFpRyxBQUFrSCxBQUE4RCxBQUEwQyxBQUFrRCxBQUFxRyxBQUE0QyxBQUFvRCxBQUE2QyxBQUF3RCxBQUFnRCxBQUFvSSxBQUFnRCxBQUF3SSxBQUF1RixBQUFtRSxBQUFxSixBQUF5RSxBQUFzSyxBQUEyRSxBQUFxRSxBQUFvRSxBQUFxRyxBQUE0QyxBQUF5RSxBQUEyRSxBQUFvQyxBQUE4SCxBQUE0RyxBQUFtRixBQUFpRSxBQUFzRCxBQUFrRSxBQUE0QyxBQUEySSxBQUE0RCxBQUF3QyxBQUErQixBQUE2TyxBQUE2RCxBQUEyTCxBQUF1TCxBQUF5RCxBQUFzTixBQUEyQixBQUFnRSxBQUFrRSxBQUFtRSxBQUFnQyxBQUFxSCxBQUFrRixBQUF3RSxBQUF5QyxBQUE2QyxBQUFrRCxBQUFrRSxBQUEwRSxBQUFtRSxBQUE4QyxBQUE0RyxBQUFzRSxBQUF5RCxBQUF3RSxBQUErRCxBQUFtQyxBQUE4SCxBQUF1TSxBQUFpSSxBQUF5RCxBQUFvTixBQUEyRSxBQUFvRCxBQUFrRCxBQUF5TixBQUEyRSxBQUFvRCxBQUF5QixBQUEyRixBQUFtQyxBQUFrRCxBQUE4RyxBQUFrQyxBQUF5SCxBQUEwQyxBQUE0QixBQUFpRCxBQUE2QixBQUErRSxBQUF5TSxBQUE0SSxBQUE0RyxBQUF1TixBQUF3RyxBQUE2VSxBQUFpSCxBQUFtTCxBQUFrRSxBQUFvTixBQUF3RSxBQUFxQyxBQUFzRSxBQUE2TixBQUFtQyxBQUF5RSxBQUFnRCxBQUFnTixBQUEyRSxBQUF3QyxBQUF5RSxBQUF5TyxBQUF1QixBQUF3QixBQUE2RCxBQUF1RyxBQUFrQyxBQUFrQyxBQUEyQyxBQUF1QyxBQUFpQyxBQUFrRSxBQUEyUyxBQUFrQyxBQUEyRixBQUEwRCxBQUFzRSxBQUErRCxBQUFpRSxBQUFxRSxBQUFrRixBQUE0RSxBQUFxRCxBQUEyQyxBQUFrSSxBQUFzRSxBQUFrRCxBQUFrRCxBQUFnQyxBQUEwRCxBQUErQixBQUFpQyxBQUErQixBQUFnRixBQUFxRixBQUE2RCxBQUFxRSxBQUE4QixBQUFpQyxBQUEwRCxBQUEwQyxBQUFtQixBQUFnRixBQUFtRSxBQUE2SCxBQUFzSixBQUFxRyxBQUFxTCxBQUF1TixBQUFnRyxBQUFpVCxBQUF5RyxBQUEySSxBQUFvRCxBQUEyUixBQUFnRSxBQUFrSyxBQUE0QyxBQUF5QixBQUErRCxBQUEwTSxBQUFvSixBQUFpRSxBQUE4SCxBQUFvSixBQUEyRyxBQUE4RixBQUF5RCxPQW5jOWpyQyxBQW1jKzFYLENBQXMyZCxDQXphcHMxQixBQWtFRSxBQXVXczVCLEFBQXV4ekIsQ0F0TjdxMUIsQUFvTEssQUFpQkwsQUFpQittRSxBQUF3WCxBQUFvdEgsQUFBaUQsQUFBdS9HLEFBQTQ3RCxBQUEyMUMsQUFBcVcsQUFBNC9CLEFBQXlwRixBQUFpSCxBQUFrdEMsQUFBd1QsQUFBb25DLEFBQW1DLEFBQWlsTSxBQUFnbEwsQUFBd2hJLEFBQW0zQixBQUErUCxDQTVrQjlqcEMsQUFvTXFCLEFBU0wsQUFvQkYsQUE0RkssQUE0REwsQUE0Qk8sQUFRTCxBQThCRixBQTRFSyxBQXVETCxBQWNzNEYsQUFBa1AsQUFBMmQsQUFBNFMsQUFBbS9CLEFBQXFKLEFBQTZTLEFBQTJaLEFBQXNNLEFBQXVtQixBQUF1ZixBQUFvUSxBQUFrYyxBQUF1SyxBQUF5a0MsQUFBdS9DLEFBQSs2QixBQUEwbkQsQUFBMmxCLEFBQTBKLEFBQXlMLEFBQThhLEFBQTg5QyxBQUF3UCxBQUFvVyxBQUErd0MsQUFBa0gsQUFBNlosQUFBeUMsQUFBMHhGLEFBQXlMLEFBQXlXLEFBQTR1RCxBQUE2K0QsQUFBMFMsQUFBOHhCLEFBQXNHLEFBQWtpQixBQUFrb0IsQUFBeWhGLEFBQW9wRSxBQUEwVixBQUE2eUMsQUFBbUssQUFBc08sQUFBcUYsQUFBdzJCLEFBQThpRSxDQTNqQm5zcUMsQUFpSG1CLEFBd0JKLEFBc0RPLEFBK09RLEFBNklndEQsQUFBZzFHLEFBQW1OLEFBQXlCLEFBQTI2TSxBQUFnL0csQUFBc3lGLEFBQWd2QyxBQUF1RyxBQUF5USxBQUF3RyxBQUEyTSxBQUFrWCxBQUFvbEMsQUFBaWhCLEFBQW92RyxBQUF1RixBQUErdkUsQUFBb3RCLEFBQWtILEFBQXdSLEFBQWtILEFBQStyQixBQUFvYyxBQUE0bkYsQUFBaTNFLEFBQThQLEFBQW1rQyxBQUFva0IsQ0FqbkJwbXBDLEFBOENlLEFBZ0JmLEFBdUJBLEFBK0drQixBQTRFQSxBQThGRixBQXFLRSxBQThGaStCLEFBQW1yQyxBQUF5aEMsQUFBcUMsQUFBMGlCLEFBQThOLEFBQXE0QyxBQUFtd0IsQUFBaXZCLEFBQTJtQixBQUFrTixBQUF5b0IsQUFBa0QsQUFBNFAsQUFBeUUsQUFBNmlDLEFBQTBrQixBQUFpRCxBQUEwVixBQUFtSCxBQUF3cEIsQUFBaWdDLEFBQTJZLEFBQW80QyxBQUFpcEMsQUFBdzJCLEFBQThILEFBQXdiLEFBQXlDLEFBQStZLEFBQW9GLEFBQStPLEFBQXVhLEFBQTQ3RSxBQUF5akosQUFBcXVDLEFBQW90QyxBQUFrRCxBQUF3VyxBQUFxekQsQUFBbzJCLEFBQTByQixBQUE0YixBQUFzVSxBQUFnOUQsQUFBMlQsQUFBbXpCLEFBQWs0QixBQUEwbEQsQ0FqbEJ4enFDLEFBMEJmLEFBWUEsQUFTZ0IsQUF1Qk8sQUF3RE4sQUE4QkgsQUFxYnM3QixBQUFxbEQsQUFBbzRCLEFBQTJDLEFBQW9ZLEFBQXVVLEFBQXkxQixBQUFnSSxBQUFraUUsQUFBazZGLEFBQTJyQixBQUFrL0MsQUFBMlEsQUFBMFksQUFBNnlCLEFBQWltQixBQUEyc0MsQUFBcXNCLEFBQTJpQixBQUF5dUIsQUFBb25DLEFBQW13RCxBQUEyRyxBQUFzakMsQUFBeW5CLEFBQTBFLEFBQW1lLEFBQWdqSCxBQUFzMEIsQUFBbytGLEFBQTQvQixBQUFzSyxBQUFzbEIsQUFBK0ssQUFBdzJELEFBQW9HLEFBQTBGLEFBQW05QyxBQUFvckUsQUFBeUQsQ0E3bUJ6anJDLEFBdUhNLEFBZ0RKLEFBaUVGLEFBc0RLLEFBeUJBLEFBOEVELEFBZ0NKLEFBb0JBLEFBaUdLLEFBNkVMLEFBTWtxQyxBQUErRSxBQUFrRSxBQUF1QyxBQUE4YSxBQUErQyxBQUF5QyxBQUFvQixBQUFtSSxBQUFnUCxBQUFvTyxBQUFnSCxBQUE0QixBQUEwYyxBQUFrL0IsQUFBZ1IsQUFBMmQsQUFBMm5CLEFBQXU1QyxBQUFnUixBQUFvSSxBQUF3VSxBQUF3UCxBQUE0WCxBQUErckMsQUFBaVAsQUFBNEUsQUFBb08sQUFBNkgsQUFBb1IsQUFBb0osQUFBc2QsQUFBc2MsQUFBbU8sQUFBZ2pCLEFBQXlILEFBQW1ZLEFBQXlZLEFBQWlKLEFBQW9JLEFBQTJQLEFBQTRZLEFBQTJsQixBQUFtUSxBQUFrdUIsQUFBZ1csQUFBeWlCLEFBQW1QLEFBQTRXLEFBQTBELEFBQTBaLEFBQTBDLEFBQXVzQixBQUFtRCxBQUE2WCxBQUF3WCxBQUE0QyxBQUFneEMsQUFBMkMsQUFBdVQsQUFBMFAsQUFBb0csQUFBZ2hCLEFBQW1ELEFBQWdVLEFBQXNkLEFBQWlMLEFBQWlHLEFBQWlILEFBQTI0QyxBQUE4YSxBQUFtb0UsQUFBMm9CLEFBQXFFLEFBQTBELEFBQTRoRCxBQUFtRCxBQUE2aUksQUFBMkYsQUFBcVUsQUFBb00sQUFBMEQsQUFBdWIsQUFBaVosQUFBd0YsQUFBcUwsQUFBNjlFLENBL2N6anFDLEFBcUJnQixBQTJKUCxBQW9LTyxBQTBEUCxBQWlCTyxBQXdCUixBQXdCcW1DLEFBQWl1QyxBQUErc0MsQUFBazFFLEFBQTQxQixBQUFvTixBQUFrL0UsQUFBa2dCLEFBQStLLEFBQWlZLEFBQXduQixBQUFvRyxBQUF3RCxBQUFtcEMsQUFBdXJELEFBQWdxQixBQUE0VyxBQUFzakIsQUFBaXNNLEFBQSs0QixBQUFxTSxBQUF5UixBQUF1ZSxBQUEwaUUsQUFBNnBCLEFBQWl5RixBQUE0QixBQUE4eUcsQUFBbXBCLEFBQWdFLENBM1JwbmlDLEFBOENGLEFBR0UsQUFLQyxBQUdFLEFBR0UsQUFHRSxBQUdFLEFBNEpULEFBeUNGLEFBb0JpN0UsQUFBdTZTLEFBQTJqRyxBQUE0c0QsQUFBa1gsQUFBZzlELEFBQTZDLEFBQWdvRixBQUFtb08sQUFBNGpILEFBQTgyQyxDQTdvQjNuakMsQUFtQkEsQUE2QlIsQUFxQlYsQUFpQ0EsQUF1Q3NCLEFBd0ZWLEFBd2F5Z0MsQUFBMjhCLEFBQWlpQyxBQUErRixBQUEyWixBQUFzc0IsQUFBZ0ssQUFBc0YsQUFBMmdILEFBQStILEFBQW1WLEFBQWtmLEFBQXE2QixBQUF3WSxBQUFpekIsQUFBc2hDLEFBQWsrRixBQUF3TCxBQUFteEcsQUFBOG1CLEFBQWtXLEFBQW1pRCxBQUEyb0UsQUFBdXJELEFBQXMvQyxBQUF1YSxBQUF3SixBQUFnekUsQUFBb0osQUFBK29FLEFBQSt2QixBQUFnMEMsQUFBcStCLEFBQSsvRCxDQS9iejJvQyxBQTZHTixBQWlPTSxBQXNFQSxBQWdCUixBQTJCNHlFLEFBQXdpQyxBQUE2a0IsQUFBcXlCLEFBQXFuQyxBQUFnVixBQUErSixBQUFva0IsQUFBMDJELEFBQTJkLEFBQXlJLEFBQWlDLEFBQW9HLEFBQTJHLEFBQWlULEFBQTY3QyxBQUFpRixBQUFpRixBQUEwM0IsQUFBaTZDLEFBQXNDLEFBQTJPLEFBQTgvQyxBQUF3akUsQUFBb3FCLEFBQTZjLEFBQTZELEFBQTZtQyxBQUF1bkIsQUFBMDBDLEFBQXNVLEFBQXNqQixBQUF1SixBQUE0QyxBQUFpRyxBQUF3RCxBQUEwWSxBQUF5RCxBQUF1YyxBQUFnSixBQUFvRSxBQUFxRyxBQUE0QyxBQUF5RSxBQUE0eEUsQUFBczJDLEFBQXFZLEFBQWk1QixBQUFzakQsQUFBZ3FELEFBQTBoRCxBQUF1VyxBQUE2NkUsQ0EvaUI1cnBDLEFBdUpnQyxBQWlEbEIsQUF1V213RSxBQUF5QixBQUFvMEUsQUFBZ2dDLEFBQW0yQyxBQUE0cEssQUFBK0osQUFBNnFELEFBQW9xQixBQUFrYixBQUFrUixBQUF3M0MsQUFBbzhCLEFBQWdvZixDQUZyc2lDLEFBRXlqQixBQUE4UyxBQUE4dUQsQUFBcS9CLEFBQTRTLEFBQWtnRCxBQUF1eEgsQUFBbWdaLEFBQWszRixBQUE2RyxBQUFxSixBQUF1bEMsQ0F4aEI5MXpCLEFBTUosQUFxQkEsQUFlSCxBQWtHUSxBQXlDUCxBQTZGQSxBQWNRLEFBd0NBLEFBb0NULEFBc0lKLEFBc0Nrb0MsQUFBb2UsQUFBOGtPLEFBQXFLLEFBQSs0TCxBQUF5MkgsQUFBMDFDLEFBQTBHLEFBQXUyRCxBQUFvRyxBQUE0b0csQUFBd1UsQUFBa2tLLEFBQW8xSyxDQTdkOXpuQyxBQTRDRSxBQXdGRixBQStFWixBQXNCRSxBQWtIRSxBQTJCUSxBQXlFTyxBQThCZ3JFLEFBQW9NLEFBQWlpSCxBQUFrMkMsQUFBbzhqQixBQUEwUyxBQUF5eEIsQUFBOHdDLEFBQW9nSyxBQUFnOUMsQ0E1bEJwL2pDLEFBMkJLLEFBZ0dlLEFBa0RBLEFBMFdYLEFBcUUwdVMsQUFBa2tvQixBQUEyL0QsQUFBaXhCLEFBQW9xRixDQWhsQmh2bEMsQUFrSVksQUF3SWMsQUFrQ1QsQUFxQ1csQUFtRGQsQUFTVSxBQVNNLEFBcURGLEFBcUNFLEFBS0osQUFrQ0ksQUFLRixBQTBDZCxBQVVvcEQsQUFBMEMsQUFBczhDLEFBQXErRCxBQUFnZ0YsQUFBMnNDLEFBQW1yRixBQUErOE0sQUFBKzBDLEFBQWlYLEFBQTZ3QixBQUErdUQsQUFBMHpGLEFBQStoRSxBQUF3dEMsQUFBMFksQUFBbytQLENBaGlCOS9vQyxBQTJHbEIsQUFtWkksQUFrQ3F1RSxBQUFpcUIsQUFBazBDLEFBQWdLLEFBQStrSCxBQUE0cFUsQUFBK04sQUFBa2tRLEFBQXUvSixBQUEydEQsQ0E1bUJ6bGlDLEFBd09xQixBQTZHRCxBQW9HQyxBQW1McTJDLEFBQTIxYixBQUEwWixBQUFtbFUsQUFBZ2tJLEFBQXU1RyxBQUFrZ0IsQUFBNmtCLEFBQXF3QixBQUFnMkMsQ0F2YTd6b0MsQUErQk0sQUEwSEYsQUFtQlcsQUFvRVQsQUF1TGttRixBQUEwWSxBQUErRixBQUFnMkMsQUFBODlILEFBQTQvWSxBQUF3amQsQUFBa3BDLENBcGdCbmxwQyxBQWtCQSxBQWdNRixBQTJHRixBQXdIRSxBQTBFRixBQUtpdUQsQUFBNHBHLEFBQStnQixBQUEyVSxBQUE0eUIsQUFBZzdFLEFBQTR1RixBQUEyeUMsQUFBNlosQUFBcU0sQUFBMHZCLEFBQTB0RCxBQUF3VyxBQUEwcUYsQUFBa1csQUFBaWxELEFBQXlMLEFBQXFXLEFBQW12RCxBQUE2N0YsQUFBMDVILEFBQTBwRSxBQUF3OEYsQUFBOGlFLENBM1gvcnFDLEFBMlgyM0IsQUFBdTlVLEFBQW0xbUIsQUFBMHFILEFBQWtxRCxDQTFsQjMrbkMsQUFnRk8sQUFxQlQsQUFxZndySyxBQUE4aEQsQUFBMDJJLEFBQXk2b0IsQ0E1b0IvOStCLEFBbUJOLEFBMlNKLEFBeUJNLEFBbU9BLEFBNENULEFBc0NnaEMsQUFBc0wsQUFBZ0YsQUFBeUMsQUFBbWxELEFBQThvQyxBQUEydUIsQUFBcWhFLEFBQWdSLEFBQXVkLEFBQXc4RSxBQUFzYSxBQUFzZCxBQUFrMUMsQUFBMDVCLEFBQStYLEFBQStZLEFBQXdsQixBQUF3K0IsQUFBNjNCLEFBQStQLEFBQWlPLEFBQStILEFBQTBELEFBQXFnQixBQUE4akMsQUFBaXpELEFBQTRELEFBQTZLLEFBQWlRLEFBQW9HLEFBQSswQyxBQUFvTCxBQUFpRyxBQUFxRyxBQUFxOEgsQUFBc1YsQUFBNFQsQUFBcUQsQUFBcUUsQUFBaWhELEFBQW9GLEFBQTRpSSxBQUFzRSxBQUFzVSxBQUFrUixBQUF3a0MsQUFBMDlFLENBMVF4a3FDLEFBNkJNLEFBeU5BLEFBb0JnbUQsQUFBczhDLEFBQXNvSSxBQUE2d1osQUFBMEcsQUFBdTJELEFBQW9HLEFBQW9qQyxBQUF1cUcsQUFBNjVHLEFBQTAzQyxBQUErdkIsQUFBOG1LLEFBQStKLEFBQTJiLENBN2V2NnFDLEFBOE1FLEFBMERDLEFBR0UsQUFHRSxBQUdFLEFBR0UsQUE4Q0MsQUEwR1YsQUFpRXFKLEFBQThOLEFBQW9hLEFBQW82QyxBQUEraU8sQUFBa1MsQUFBNmtGLEFBQTZ1TixBQUErakYsQUFBZ1UsQUFBaStKLEFBQTJ1RSxDQTljejU1QixBQW1MUSxBQXdDVCxBQWlISyxBQXFFSSxBQTZEcTlQLEFBQTBpUSxBQUFxOEosQUFBeUwsQUFBMDVULEFBQWt3QixDQWhrQjN4L0IsQUFnRUksQUE2TkosQUFtU3krRyxBQUFtalEsQUFBODhILEFBQXdqRSxBQUE4UCxBQUF5NkwsQUFBeXVDLEFBQXMyQyxBQUFrc1MsQ0F0bUJsOG1DLEFBcUZ6QixBQXFCQSxBQXlKQSxBQTZGQSxBQTBESCxBQWtNQSxBQVU0MUcsQUFBMnhELEFBQXE1QyxBQUFrbEcsQUFBeW5FLEFBQTB5RyxBQUFnNUssQUFBOGxHLEFBQSt0QyxBQUFxakUsQUFBcXBDLEFBQXFZLEFBQXl5RCxDQTFYdms4QixBQTBYK3RMLEFBQW0xUCxBQUFxaUMsQUFBNGdPLEFBQXluRCxBQUFvMEMsQUFBazlTLEFBQW1xQyxBQUFpakUsQ0FBampuQyxBQUF1d0MsQUFBeU8sQUFBZzBDLEFBQXVxQyxBQUFxL0csQUFBMnJHLEFBQXlsQyxBQUFvbEIsQUFBNjZFLENBNUlsM2dCLEFBNElzM0IsQUFBNHZELEFBQXlsRSxBQUEyc0IsQUFBMDFFLEFBQXVxQixBQUF1akIsQUFBMHFmLEFBQWlLLEFBQTJrQyxBQUFrQyxBQUE4cEQsQ0FuZ0JsaTNCLEFBY0gsQUFJRyxBQXdEUSxBQXdJSSxBQTBHakIsQUE2RWEsQUE0Q0csQUErQkgsQUEwQ2IsQUFLK2lDLEFBQW0xSCxBQUEraUMsQUFBazJDLEFBQXd3WCxBQUFrVyxBQUEwMUwsQUFBMFMsQ0F0YS8veUIsQUFzYTJrVyxBQUFrOEosQUFBKzVDLEFBQXNpSCxBQUF5TCxBQUFnbWIsQ0F2aEJqdmxDLEFBdWhCazBDLEFBQTZ1RCxBQUEyZ0MsQUFBb3VCLEFBQSt5USxBQUErWCxBQUF1K0IsQUFBOGlJLEFBQSt0SCxBQUE4c0ksQUFBZ0gsQUFBbzZDLEFBQXNZLEFBQStoQyxBQUF5NEYsQUFBc3JJLENBM1k3M29DLEFBUUosQUFzRE0sQUEySk4sQUFrTGs0QyxBQUFnMWIsQUFBdXVVLEFBQTZ4QixBQUFzaUgsQUFBNitCLEFBQTh2SSxBQUFvOEUsQ0F6bEJ0NnFDLEFBNkhELEFBMkNPLEFBeUZQLEFBa0VPLEFBb0NULEFBNElFLEFBc0dtck8sQUFBdzVNLEFBQW9wVCxBQUF1MlQsQUFBK29DLEFBQWk5QixDQTlRcnFtQyxBQThRcXlOLEFBQWtSLEFBQW8wRyxBQUF5ZCxBQUErMEMsQUFBd3FELEFBQWdrRCxBQUErbkMsQUFBMHpILEFBQWdNLEFBQXcyRCxBQUFpRyxBQUE0N0csQUFBb1EsQUFBNDJHLEFBQTg4RyxBQUE4TCxBQUF3SixDQTlibnhpQyxBQXlIVCxBQW1JRixBQWtGVyxBQXNCVCxBQWdEUyxBQTBDd3VMLEFBQTY1UixBQUE0MXNCLENBdm5Cbi9wQyxBQThQRSxBQXlYeTRKLEFBQTZwRCxBQUEwTCxBQUF1M1AsQUFBZzNVLEFBQXF4WSxDQTVleHRxQyxBQXlNQyxBQW1TdXpqQixBQUFxNFAsQ0F6Z0IxcnpCLEFBb05DLEFBbU9BLEFBa0Z5OEIsQUFBNnBDLEFBQW0vTixBQUF3NUgsQUFBaTJDLEFBQTZ0UixBQUFpM0osQUFBOC9HLEFBQTRGLEFBQW90QixBQUFpNEosQ0EvakJ0bXFDLEFBK0NnQixBQXFCSSxBQTRQUyxBQStQdzVGLEFBQSsvSyxBQUFnb0csQUFBdWxmLEFBQWtyQyxDQXRoQnp5NEIsQUF3ZlksQUE4Qm1zSyxBQUFrMWIsQUFBa1csQUFBcUwsQUFBdXlILEFBQXV0RCxBQUE2L0UsQUFBNmlCLEFBQTBZLEFBQWd1SixDQXhEaHNpQyxBQXdEOG5GLEFBQW9pQixBQUE2eUIsQUFBd29FLEFBQTQxQyxBQUEyMUIsQUFBbzZDLEFBQTBrQixBQUEyWixBQUFvM0ssQUFBdXVKLEFBQThOLEFBQTBMLEFBQWd3SixBQUF1NUMsQUFBNjBPLENBMW9CL21sQyxBQW9SSixBQXlCSSxBQWlNSixBQTZCUSxBQStINjNHLEFBQXl1RCxBQUEybEUsQUFBa3JTLEFBQTZnSSxBQUFnMEcsQUFBd3RPLEFBQTR2QixBQUF1dUosQ0EvaEI1NW9DLEFBNEJxQixBQWtCQSxBQWlmK3hJLEFBQStuQyxBQUFvMUUsQUFBdS9ILEFBQTI4QyxBQUE4eE4sQUFBMEcsQUFBdTJELEFBQW9HLEFBQWl1QyxBQUErUSxBQUFneUMsQUFBOHBCLEFBQW8xSSxBQUFxdUIsQUFBc2dKLENBbFluL2xDLEFBaU5BLEFBc0NPLEFBMkkwNUosQUFBZ3pxQixBQUFraUosQ0F0bkIzdjlCLEFBaU5MLEFBMEt1QixBQTJQd2dQLEFBQW0vRyxBQUEraEIsQUFBK3RELEFBQXV3USxBQUFrRixBQUEyaFosQ0FBaHI3QixBQUFteFYsQUFBK3pTLENBelgvaHhCLEFBeVhndU4sQUFBNDk3QixDQUEzMzhCLEFBQTZtVyxBQUF5eU0sQ0FqUHhzdkIsQUF1RUMsQUEwSzZ4SixBQUE4L0QsQUFBazlCLEFBQWtsb0IsQUFBb0csQUFBK3VGLEFBQWlsRCxBQUEydkgsQ0F4bEJ4K25DLEFBNk1ELEFBK0RGLEFBNFV1c3NCLEFBQWl1SSxBQUErRSxBQUErekQsQUFBcWhDLENBL2dCejA2QixBQW9ERyxBQW9JVixBQWtQQSxBQXFHNDhGLEFBQTIrSyxDQTNlajdRLEFBdUVaLEFBb2E2N0IsQUFBbThULEFBQTRyQixBQUFvNkQsQUFBZ2tHLEFBQThoRixBQUFrVyxBQUFzM0MsQUFBdTdKLEFBQXdPLENBcFVuNnpCLEFBbUlkLEFBd0dhLEFBeUZpamdCLEFBQXE5SixBQUFveFksQUFBNnVHLENBeGdCbmdwQyxBQXdnQityQyxBQUF3RSxBQUFxN25CLEFBQTRqRSxBQUE2c0QsQUFBdzRILEFBQW9qSSxBQUFvcUIsQUFBazJGLENBcm5CcDZvQyxBQTJIcUIsQUFpRVEsQUFnVTBDLEFBMEUxQyxBQStDMDdLLEFBQTR4a0IsQUFBc3JHLEFBQW12TixBQUFrckYsQ0E3RTV5b0MsQUE2RXVqSSxBQUFzK0IsQUFBd3RGLEFBQWcwZSxBQUFnMkksQUFBdzdKLEFBQTJ3SixDQWhUM2xxQyxBQWdUdTRDLEFBQWtrRyxBQUE2dTlCLENBcmhCN3JtQyxBQWtITixBQThJWSxBQXFSMHdhLEFBQW92VSxBQUFvc0UsQUFBcTNELEFBQTJRLENBcm1CcnozQixBQXFtQnNwVixBQUEwbUQsQUFBNnFELEFBQTY4RSxBQUE0NWYsQUFBa2dCLENBQTd6dkIsQUFBbStCLEFBQW9xeEIsQUFBcW5GLENBclhqdXFDLEFBME5BLEFBMkowdjlCLENBallydzlCLEFBZ05DLEFBaUxvNUQsQUFBNkksQUFBd3RDLEFBQXFZLEFBQW80SSxBQUFnSixBQUEwL0MsQUFBMkcsQUFBNlcsQUFBdVksQUFBazVDLEFBQWlzQixBQUErSSxBQUEwM0MsQUFBMHRCLEFBQTJTLEFBQThJLEFBQTJULEFBQTBnQyxBQUFneUMsQUFBa2IsQUFBaUgsQUFBMHlFLEFBQXlvRCxBQUFnbkUsQUFBd2IsQUFBMnJFLEFBQTBvRCxBQUFnVSxBQUFxMUIsQUFBNDFFLEFBQTZWLEFBQXVpQixBQUEwVixBQUE4bUMsQUFBZ0YsQUFBbWYsQ0F0VnBnbUMsQUFzSm9ELEFBNEY3RCxBQW9HeWtDLEFBQTAvVSxBQUFvOW5CLEFBQTI0SixDQTliOTRvQyxBQStVeUMsQUFxRXpDLEFBMEM0dzBCLENBM1V0eDBCLEFBMlV1c0MsQUFBaTVZLEFBQWl6bUIsQUFBOHlILENBQW5pa0MsQUFBbXJILEFBQWk4WSxDQXpvQmp3bEIsQUF5b0Jvd1AsQUFBbW1MLEFBQXl0bUIsQ0F2bEI3bGhDLEFBNkdjLEFBMGU4dlgsQUFBbWhTLEFBQTR3QixDQTdWN2dyQixBQThOSSxBQXdFRCxBQXVEbTlJLEFBQXkrSCxBQUFpdEksQUFBc2tXLENBQXo2bEIsQUFBOHFSLEFBQStySCxBQUFnNkQsQUFBa1csQUFBZ3pNLENBMUkxc3pCLEVBaFZoQixBQXVYSyxBQW1HMjJQLEFBQXM2UCxBQUFvb1csQUFBd3JCLENBbGFqbDNCLEFBMFVHLEFBd0Zxa08sQUFBazdGLEFBQXNZLEFBQXd5RCxBQUF3cUQsQUFBZ2tELEFBQXM4RSxBQUE0dkssQUFBczJGLEFBQXltVSxBQUE2WSxDQW5VdDZvQyxBQW1VcWtYLEFBQSs4WCxDQXZabmd2QixBQXVaMjVKLEFBQWcwc0IsQ0F2Z0I1dTJCLEFBOFZVLEFBeUtvNmdCLENBemVwN2dCLEFBd1BhLEFBaVBvNUMsQUFBdzNNLENBQTk3QyxBQUFra0ssQUFBcTNYLEFBQXEzUixDQXJoQmpvZ0MsQUFvSkYsQUFpWXd4N0IsQUFBNmdDLEFBQTh0SSxDQUFwMmdDLEFBQTBrTSxBQUFxL2hCLEFBQTQxQixBQUF3M0IsQUFBMnpKLENBclZodmdDLEFBcVZ3bUosQUFBdzgxQixDQTFVeGovQixBQTBVd3dYLENBL1NsdlgsQUErU3kzVixBQUFvNFAsQUFBNnBQLEFBQStsTixDQXpjaGdpQyxBQXljd3VxQyxDQXBScnVxQyxBQXdNZixBQTRFNGpnQixBQUEyb21CLENBemRsc21DLEFBeWQybDNCLENBcFhobTNCLEFBME5BLEFBMEp1a0MsQUFBcTRELEFBQThvSSxBQUEyL2YsQ0F4b0J2a3VCLEFBdU9mLEFBaWE0K2EsQUFBMG1MLEFBQWtXLENBdkZuN21CLEFBdUZxeVAsQUFBbzhjLENBelU1dXNCLENBM1IyQixBQWtnQnZCLEFBa0dpL0ssQUFBeXhNLEFBQStxeEIsQ0F4ZTc3b0MsQUF3ZTg2QyxBQUErbWEsQUFBMnpHLEFBQXN0TCxBQUFzc0UsQ0FBenhpQixBQUFxM2tCLEFBQW12TixFQXZnQnpqakMsQUFxTU4sQ0FqREwsQUEwTkEsQUE4RUksQUEyRWsyTSxBQUFpN2hCLEFBQXEzUixDQUFsMmxCLENBQTF5SSxDQXBWMy9SLEFBNlJjLEFBdUR3NzJCLENBaGE3ODJCLEFBdVJGLEFBeUlvb0wsQUFBdS9yQixDQUEva1csQ0F6VXRpaEIsQUF5VWk4TCxBQUFrMkMsQUFBby9JLEFBQWt4UyxBQUE4ckksQUFBMFMsQ0FBaGx3QixBQUEwOVMsQUFBa00sQUFBc29VLEFBQTBoYixDQXZlOXZsQyxBQWVDLEFBa1lILEFBc0ZpNE0sQUFBcXVPLENBbFg3bGIsQUEwTkEsQUF3Sm1sTyxDQUFoNEYsQUFBMEosQUFBbWcyQixBQUFnbEssQ0F4S3Y4b0MsQUF3SzQvVCxBQUErbTJCLENBQW5vNUIsQUFBaXlpQixDQXZvQjV2ekIsQUE4TEQsQUFpVWYsQUFzQ1EsQUFrR3V6SixBQUFvc0ksQ0FBdzdPLEFBQWtvTyxDQS9aOWp2QixBQThGTyxBQXVQRCxDQTBFbW1iLEFBQSs5bkIsQ0E5U3JrakMsQUEyQmtCLEFBbVJzeFgsQUFBODVDLEFBQWluakIsQUFBa3pELENBdEZ6bWhDLEFBc0ZtclYsQUFBKzZCLENBdFova1gsQUFzWm82SixBQUF3bzFCLENBdGVwai9CLEFBc2VvM0ksQUFBNDZSLEFBQTRyc0IsQ0FwVmorbUMsQUFvVm05MkIsQUFBdW5GLEFBQXl5QyxBQUErbEssQ0FBeHNpQyxBQUFpeVksQUFBc3RGLEFBQXNwTSxDQXZkLzV3QixBQWdUUyxDQStCUixBQXdJd3FaLENBOVp6cVosQUFzU3FELENBelA1QyxBQTBOQSxBQXVKOCtRLEFBQXk2RSxBQUF3aWlCLENBbm1CMTYzQixBQW1tQmt0c0IsQUFBOGxNLEFBQXFoQyxDQTdTNzE2QixBQTZTdzFwQixBQUFndUYsQUFBK2tJLEFBQTByRyxDQXpFL3o5QixDQXZQUCxBQWdVOGsvQixBQUFvNkgsQ0FBL3U3QixBQUEwdEUsQUFBeWdpQixDQUFwNXdCLEFBQSt5SCxBQUE2cUUsQUFBOGl2QixDQUFweWtCLENBdGR2elgsQUFzZHdxWixBQUE0NVEsQUFBK3NKLENBL0w5dHpCLEFBK0w0aWEsQUFBczJDLEFBQXV6TixDQTdacnZxQixBQStTNEMsQUE4R2dxSyxDQUFxd3NCLENBQXpyd0IsQUFBbTdILEFBQXU1SSxBQUE2cE4sQUFBMHhFLEFBQWcyRCxBQUE2RixDQTlnQmo5c0IsQUE4Z0IyOG5CLEFBQTBHLEFBQXUyRCxBQUFvRyxBQUE4NkUsQUFBNmhZLENBL1RsOW9DLEFBK1Q4aU4sQ0F0S3hqTixBQXNLaWpuQyxDQXJlbGluQyxBQXFISCxBQTBOQSxBQXNKK25KLEFBQW00QixBQUFxUixDQXpmbHhMLEFBNk1YLEFBNFNxcEgsQUFBMHIyQixDQUFoeWUsQUFBb3ZVLEFBQTAwSSxBQUE2NUYsQ0FBaC9XLEFBQWdrVSxBQUFzaUMsQ0F4RWhvaEMsQUF3RTIrSSxDQXRkNytJLENBbU1rQixBQW1SK2tCLEFBQWloVyxDQXJLcG5YLEFBcUt1bE4sQUFBZzlCLEFBQW1ub0IsQ0FBcjd1QixDQUF3dXJCLEVBQS94ekIsQUFBOE4sQUFBa2EsQ0FBZ2dlLEVBQTV5VyxBQUFrNGpCLENBM1M3M3NCLEFBMlM0eEcsQUFBOGozQixDQTVacjE5QixBQThGSixBQThUMDZELEFBQTZJLEFBQThuQixBQUErMEssQUFBcUssQUFBNjhELEFBQW1ZLEFBQW9uQyxBQUFvUyxBQUF5MUIsQUFBMDNDLEFBQTB0QixBQUE0UixBQUEwd0csQUFBcTBFLEFBQThtRCxBQUE0akYsQUFBb3JFLEFBQXlwRCxBQUFnVSxBQUFrZ0gsQUFBNjNCLEFBQXluQyxBQUF3RSxDQXBLdmlsQyxDQTNNRCxBQTBOQSxBQTZFSyxBQXdFb2xJLEFBQXFKLEFBQW00UixBQUFzMkMsQ0FBK21OLENBQTBMLEFBQXcyVSxDQUFuandCLEFBQStnYSxDQTlnQnBqcEIsQUE4Z0J1aEwsQUFBOHdvQixDQXBlL3l6QixDQW9lNm1CLEFBQWdsaEIsQUFBcTZELEFBQWtXLEFBQWd1VixDQUEvMnNCLENBemYzeVAsQUEySWhCLEFBME5BLENBb0o4NFAsQ0FuSy8wUCxBQW1LZ3dCLEFBQW8xSCxBQUF1NitCLENBQTMwL0IsQUFBK3RvQixDQUEvd3dCLEFBQThOLEFBQW1uVSxBQUErMW9CLEFBQTR5RCxDQUEzMXBCLENBMVM1elgsQUEwUzh4TCxBQUF1MHpCLEVBOVd4bS9CLEFBaURJLEFBeUtKLEFBb0pnaEosQUFBd2g4QixDQUEzeHpCLEFBQWkzQyxBQUE0MnNCLENBQWhrcEIsRUFBcnhFLENBbmU1b1QsQ0FtZXlvTCxDQUF3K0IsQUFBc3NLLEFBQW13ZCxDQUFoOXpCLEdBdkg3akIsQ0FsTC9DLEFBeVN1MEIsRUFBaG9CLEFBQThOLEFBQWtpd0IsQUFBZzVFLENBclpyMTFCLEFBeUZKLEFBNFR3dGEsQ0FBOXFQLElBQXluMkIsQ0FBaHVwQixBQUF3b1IsQ0Fyb0Joa3BCLENBdWN3QyxBQThMaTZMLEFBQWsyQyxBQUFvOGpCLEFBQTBTLENBN0dqL3lCLEFBNkdpaUksQUFBODZJLEFBQW9uRixBQUFtZ0UsQUFBdTJDLEFBQXd5b0IsQ0FuZW53bEMsQUFtZTY0TSxFQUF2MkIsQUFBcWdFLEFBQW9oNEIsQ0FBcHhULENBQTBpQyxDQXhTbjIxQixBQXdTbTFCLENBM1RuMEIsQ0EyVG1NLEFBQThOLEFBQXVqQyxFQUFzcjBCLENBQTFqTyxBQUF3bFksQ0FBeG9zQixBQUFnOFgsQUFBKzNRLENBcFpqMjlCLEFBNkduQixDQXJIaUIsQ0E0WnNsZSxBQUF5OFgsQUFBNHpNLENBQTN6NUIsQUFBbWxSLEFBQXMzQyxHQXZTei9jLEFBdVNnKzNCLENBQXQwcUIsQUFBNHNyQixBQUF1aEMsSUFBOTNJLEFBQXlzSyxDQXBvQnZyOEIsQUFvb0JxNU0sQ0FsbUJqN00sRUFrbUJpdGhDLENBQXp2cEIsQUFBd3BSLENBMVR0bHBCLENBMFR3bG5DLEdBQTdtcUIsRUFBN3hYLEFBQXE5QixDQUE2dkYsRUFBd3owQixDQW5aM3RoQyxBQW1ac3dsQyxDQWxLcnRsQyxBQWtLMGxKLENBQXZwRyxFQUFtK3dCLENBQXc2RyxDQUFyMGxCLENBQXhvSSxFQW5vQjk2TSxDQW1vQjJvTixFQXpUL29OLEFBbU1NLEFBc0hndDhCLENBQTU1YyxFQUEwcWxCLEVBQTFqaEMsQUFBNkksQUFBMm5NLEFBQWlxaEIsQ0FBOHhWLENBQTUvZ0IsQUFBa1csQ0FBcHFYLENBbFozeVAsR0FrWis5ekIsQ0FBLzVlLENBN0xsa1YsQ0FpRkEsQUE0R3kvQyxDQUE4ck4sQ0FBazQzQixFQXpUOWpvQyxBQXlUMHJpQixDQWxvQnZyaUIsQ0Frb0JzdVosQUFBMDNDLEFBQTB0QixBQUEyMkwsQUFBcWdRLEFBQTBULEFBQW93SCxFQUFsbDJCLEFBQTJyVSxJQXJIcHZmLEFBcUhpN0MsQUFBNHQ1QixDQUFwaXNCLEFBQTY0RSxDQUErNmUsQ0FBNG1ULEVBQTV1M0IsQUFBbW1xQixBQUFzbU8sQ0FBL3NOLEVBQTU3dEIsQ0FBa3hOLEVBalp0dGEsQUFpWitxNUIsQ0Fqb0IxcDVCLEFBaW9Cc3VoQyxDQUFyL3ZCLENBNUxycVIsQUE0TDBqTCxBQUF5M0YsQ0EzR243USxHQTJHdS9VLENBQXJuSixBQUFrMkMsQUFBMDhqQixBQUFnUyxDQUEzZ3dCLEVBQXFqbEMsRUFBMXVvQixFQUEwbk4sQUFBc3dQLEVBakszcjhCLEFBaUtpNU0sQUFBczAwQixJQWhabHdoQyxDQWdaNDlrQyxBQUE0b0QsQ0FBMWlWLEFBQXdjLEVBQTM1ZCxFQUF6bUssQUFBazJDLENBQTN6TCxBQUE2NzBCLENBQTBZLElBQXgzRyxBQUE0UixBQUErdkIsRUFBZ3ZOLEtBQTU0aEIsQUFBNnFXLENBaG9CcGsyQixBQWdvQjRqSixJQUEvMkIsQ0FBb2lKLENBQXc3M0IsQ0FBNzFWLEFBQXNTLEFBQWtjLEdBaFpuaDBCLEtBZ1o4KzNCLEVBQTVtWSxHQUF6b2EsQUFBK256QixFQUEzc3hCLENBQW9pSixFQUF3eW5CLEVBQWg5MEIsQUFBdStJLEFBQWsyQyxBQUF1d1gsQUFBa1csR0FBdmtILEFBQSsrWSxFQUEzNEcsQUFBdVUsS0FBd3NGLEdBQStvUSxFQUE5Z2lCLEFBQWtXLEFBQXU2UixHQWhLbjU0QixJQWdLbzZmLEdBQW1uWSxHQUE0b1EsRUFBbHdQLElBQXA1bkIsR0FBcTZPLEdBQWg1VCxBQUFtMkMsQUFBZ3o1QixHQUEvb1MsQ0FBaHh3QixDQS9KM3JGLFFBK0p3MWYsRUFBK3RHLEFBQWtXLEdBQWo5YSxDQUFtMkMsQUFBbzA1QixNQUF2amlCLEFBQWtXLEFBQW1pUixLQUEwWSxFQUFsbnpCLFNBQWt6dEIsQUFBc25WLGVBQWUsR0FBbDZpQyxPQUEyZ3RCLGVBQWxndEIsQUFBZ3l0QixXQUEveHRCLEdBQWd5dEIsQ0FBd29WLFVBQTM1VixRQUE0NVYsTUFBMzVWLENBckhud3lCLGNBdkVBLENBaUZBLDZHQXBERSIsImZpbGUiOiJEOlxcbGVnZXJvLXNzclxcYXBwXFxwYWdlc1xcZGVsaXZlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIiBpZD1cImhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19pbm5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX21lbnUtYnRuXCI+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMlwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAyMiAxMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgIDxyZWN0IHk9XCIxMFwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIyXCIgcng9XCIxXCIgZmlsbD1cIiNDOUM5QzlcIj48L3JlY3Q+XG4gICAgICAgICAgICAgICAgPHJlY3QgeT1cIjVcIiB3aWR0aD1cIjIyXCIgaGVpZ2h0PVwiMlwiIHJ4PVwiMVwiIGZpbGw9XCIjQzlDOUM5XCI+PC9yZWN0PlxuICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMjJcIiBoZWlnaHQ9XCIyXCIgcng9XCIxXCIgZmlsbD1cIiNDOUM5QzlcIj48L3JlY3Q+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+PExpbmsgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ29cIj48aW1nIHNyYz1cInN0YXRpYy9pbWcvbG9nby1tb2Iuc3ZnXCIgYWx0PVwiXCIgLz48L2E+PC9MaW5rPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhlYWRlcl9fY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhlYWRlcl9fY29udHJvbHMtaXRlbVwiPjxhIGNsYXNzTmFtZT1cImhlYWRlcl9fY29udHJvbHMtaXRlbS1saW5rXCIgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIyXCIgaGVpZ2h0PVwiMTlcIiB2aWV3Qm94PVwiMCAwIDIyIDE5XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAuMzU1MiAwLjI5MDExM0MxMC43ODczIDAuMTk2NTYgMTEuMjM2NCAwLjE5Nzg1OSAxMS42NjkzIDAuMjg0MDQ5QzEyLjEyNjUgMC40MDkyMiAxMi41NTE0IDAuNjQ5MTY2IDEyLjkwNzUgMC45NjU3NzNDMTMuMTI5NSAxLjIwMjY5IDEzLjM3MDIgMS40MzU3IDEzLjUxMDIgMS43MzU0MkMxMy43ODcgMi4yMDgzOCAxMy45MTk4IDIuNzY3OTcgMTMuODk5OSAzLjMxNzU5QzE0LjU5OTQgMy40NTYxOSAxNS4yNjc5IDMuNzMyMDggMTUuOTY4MyAzLjg3MzcxQzE2LjUwODIgNC4wMjYxNyAxNy4wNDY1IDQuMTg2ODUgMTcuNTg2OCA0LjMzODAxQzE3LjgyNDUgNC4zODk5OSAxOC4wNjIyIDQuNDQ2MjkgMTguMjkxNCA0LjUyODE1QzE4LjQxNDEgNC41NzcwOSAxOC40Nzg2IDQuNzIyMTkgMTguNDQyOSA0Ljg0OTUyQzE4LjM4NzMgNS4wOTY4MyAxOC4zMDg4IDUuMzM4NTEgMTguMjUxMSA1LjU4NTgyQzE4LjIxOTcgNS43MjE4MiAxOC4wNTM3IDUuNzM3NDEgMTcuOTQ1IDUuNjk2MjZDMTcuNTI5OSA1LjU3MjgyIDE3LjExNDQgNS40NDk4MiAxNi42OTc1IDUuMzMyMDFDMTYuMDIzNSA1LjE3ODI2IDE1LjM2NzcgNC45NTEzIDE0LjY5NzUgNC43ODAyMkMxNC4zMDc4IDQuNzA1MjkgMTMuOTM0MyA0LjU2NjI2IDEzLjU1MTQgNC40NjMxOEMxMy4yODcgNC45OTgwOCAxMi44Mzc5IDUuNDE2OSAxMi4zMzgzIDUuNzE5NjVDMTEuODQ5MyA1Ljk1NDgzIDExLjMwMjIgNi4xMTM3OSAxMC43NTc2IDYuMDQxMDJDMTAuMzQ1OSA1Ljk5NTExIDkuOTQ2MDEgNS44NTM0OCA5LjU4NTIyIDUuNjQ3MzJDOS4wNjY1MiA1LjMwNzc2IDguNjI1MDggNC44MjY1NyA4LjM4ODIyIDQuMjQwNTZDOC4xOTkzNCAzLjg0NTU2IDguMTMzMTIgMy40MDExOCA4LjE1MzkyIDIuOTY0NkM3Ljc5MzEzIDIuODYxMDkgNy40MzQwMyAyLjc1MTA4IDcuMDY3NzIgMi42NzAwOEM2LjU0MDk1IDIuNTI2NzIgNi4wMjA1NiAyLjM2MDg0IDUuNDkyNTMgMi4yMjEzOEM0LjkyODQxIDIuMDkzMTcgNC4zNzk1OCAxLjkwNjA3IDMuODIxNDEgMS43NTQ5MUMzLjc0MjQ2IDEuNzI5NzkgMy42NDQ0MSAxLjcxNDIgMy42MDMyMyAxLjYzMDYxQzMuNTQ2NzggMS40OTg5NCAzLjYxNzY3IDEuMzYxMjEgMy42NDY5NSAxLjIzMjU3QzMuNzEzNiAxLjAzNzI0IDMuNzM3MzcgMC44MjUwMTEgMy44MzI0NSAwLjY0MTM3QzMuOTEyMjUgMC41MjA1MyA0LjA2NTQ4IDAuNTc5NDM0IDQuMTc2MjYgMC42MDkzMTlDNC40MzMwNiAwLjY5MTYxMSA0LjY5NzA4IDAuNzQ2MTg0IDQuOTU4MTMgMC44MTIwMTdDNS41NTc0NyAwLjk4NDgzIDYuMTUyMTQgMS4xNzcxMyA2Ljc2MDQgMS4zMTQ4NkM3LjM0MDIyIDEuNDcyNTIgNy45MTAyOCAxLjY3MDQ1IDguNDk2ODkgMS43OTg2NUM4Ljg3OTc1IDEuMDY0NTIgOS41NzI5MSAwLjUxNDkgMTAuMzU1MiAwLjI5MDExM1pNMTAuNjQ5MyAxLjQ2MTI2QzEwLjIyOTYgMS41NDk2MSA5LjgzNjA3IDEuNzg0NzkgOS42MDgxNCAyLjE2Mzc3QzkuMzI0MTcgMi42MTM3OCA5LjMwMzM3IDMuMTg5MzkgOS40MTkyNSAzLjY5OTE3QzkuNTk1ODMgNC4yOTk5IDEwLjE0ODEgNC43NTQyNCAxMC43NTQyIDQuODMyNjNDMTEuMDk5MyA0Ljg3MjkxIDExLjQ2MjIgNC44NDM0NiAxMS43NzggNC42ODQ5NEMxMi4yNDU4IDQuNDYzNjEgMTIuNjAyMyAzLjk5NTQyIDEyLjY2NiAzLjQ2OTYxQzEyLjc0NjYgMy4xNjY4NyAxMi42NzUzIDIuODU1NDYgMTIuNjEzMyAyLjU1NzA0QzEyLjUzMSAyLjI2NTEyIDEyLjM0NTEgMi4wMTIxOCAxMi4xMjk1IDEuODA3NzVDMTEuNzIxMSAxLjQ2NzMyIDExLjE2MTMgMS4zNjM4MSAxMC42NDkzIDEuNDYxMjZaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQuNzg0MjggMy4xMzY1NEM0Ljg2MDI2IDMuMTA0OTIgNC45NDQ3MyAzLjEwOTI1IDUuMDI1MzcgMy4xMDcwOUM1LjQyMDU1IDMuMTA4ODIgNS44MTU3MyAzLjEwODgyIDYuMjEwOSAzLjEwNzA5QzYuMzA1MTQgMy4xMDg4MiA2LjQwMzE5IDMuMTA1NzkgNi40OTI3NSAzLjE0QzYuNTc0NjcgMy4xOTkzNCA2LjYxNjI3IDMuMjk3MjIgNi42NjgwNSAzLjM4MTY4QzYuODY1IDMuNzUzMjkgNy4wODcgNC4xMDk3NSA3LjMwMzQ4IDQuNDY5MjRDNy40MjM2IDQuNzM3NzcgNy41OTU5MyA0Ljk3NTU1IDcuNzQxOTUgNS4yMjg5MkM3Ljk0MjcyIDUuNjM4MjEgOC4yMTM5NSA2LjAwNTUgOC40MTM4OCA2LjQxNDc5QzguNTM3MzkgNi42MzI2NSA4LjY3Nzg5IDYuODQwNTQgOC43OTQyIDcuMDYyNzNDOC45NTgwNCA3LjM4MDIxIDkuMTYwOTMgNy42NzM4NiA5LjMzMDMgNy45ODgzQzkuNDczNzYgOC4yNDY0NCA5LjYyMDYzIDguNTAyODQgOS43ODEwOCA4Ljc1MTAyQzkuODY0MjcgOC45MTg2MyA5Ljk1NTk2IDkuMDgxNDggMTAuMDUyNyA5LjI0MTNDMTAuMTc3MSA5LjQ4NDI4IDEwLjM2MzkgOS42OTQzNCAxMC40MzczIDkuOTYyNDRDMTAuNTEzMyAxMC4zMDQyIDEwLjQ2OTYgMTAuNjU1NCAxMC40NTU2IDExLjAwMTVDMTAuMzc5MSAxMS42NTEyIDEwLjEzMyAxMi4yNjU3IDkuODI4NjIgMTIuODM3QzkuNDI1OCAxMy41MTE0IDguODgxMjEgMTQuMDk2NSA4LjIzNzMgMTQuNTM1M0M3Ljg5OTg1IDE0LjczMjMgNy41NTc3MyAxNC45MjUxIDcuMTk0MzkgMTUuMDY4QzYuNTg1NzEgMTUuMjQgNS45NTMyNSAxNS4zODM3IDUuMzE4MjUgMTUuMzE3OUM0Ljk2ODkyIDE1LjMwMDYgNC42MjcyMyAxNS4yMTgzIDQuMjkwNjMgMTUuMTI2OUMzLjgxNjkyIDE1LjAxOTEgMy4zOTg4MyAxNC43NTUzIDIuOTg0MTIgMTQuNTA5N0MyLjY4ODI3IDE0LjI5NzEgMi40MDMwMyAxNC4wNjU4IDIuMTQ5NjMgMTMuODAwN0MxLjQ4NDQ5IDEzLjA4NzQgMS4wMTk3IDEyLjE4MjIgMC44MzA4MTQgMTEuMjE1OUMwLjc5OTgyOCAxMC43OTg4IDAuNzMzMTg3IDEwLjM3MzkgMC44MjkxMTYgOS45NjAyOEMwLjg1NTQzMyA5Ljc3MzE3IDAuOTg1MzE5IDkuNjMxNTQgMS4wNzE0OSA5LjQ3MTcyQzEuMjA0MzQgOS4yMzEzNCAxLjM2MzUyIDkuMDA2NTUgMS40NzIxOCA4Ljc1MzE4QzEuNTgzODEgOC41ODAzNyAxLjY5ODQyIDguNDA4ODUgMS43OTM1IDguMjI1MjFDMi4wMDQ0NiA3LjgxMjAyIDIuMjcwMTcgNy40MzEzMSAyLjQ4NzUgNy4wMjE1OEMyLjc5MDE0IDYuNDk2MjIgMy4wOTM2NCA1Ljk3MTcxIDMuNDAwNTIgNS40NDg1MUMzLjU0NzgxIDUuMTQxODYgMy43NTI4MyA0Ljg2OTQzIDMuOTA4NjEgNC41Njc1NUM0LjA4NTYxIDQuMjI0OTYgNC4zMDA4MSAzLjkwNTMyIDQuNDg4NDMgMy41NjkyMkM0LjU3NjI5IDMuNDE5MzYgNC42NDI1MSAzLjI0MzA4IDQuNzg0MjggMy4xMzY1NFpNNS40MjY5MiA0LjMxNjc4QzUuMTg0OTcgNC43NzI0MiA0LjkwNDgzIDUuMjA1MSA0LjY2NTQzIDUuNjYxNkM0LjQ2NzYzIDUuOTg1MTQgNC4yNzExIDYuMzA5NTQgNC4xMDI1OSA2LjY0OTk3QzMuODE1NjUgNy4wNDYyNyAzLjYzMTg2IDcuNTA2NjcgMy4zNTI5OCA3LjkwOTA0QzMuMDYwNTMgOC40NDE3NyAyLjczNTM5IDguOTU0NTggMi40NDQ2MyA5LjQ4ODE4QzQuNTcwNzcgOS40ODgxOCA2LjY5NjkyIDkuNDg4MTggOC44MjMwNiA5LjQ4Nzc1QzguNzc0MjUgOS40MTQ1NSA4LjcyMjA0IDkuMzQzOTUgOC42NzYxOSA5LjI2ODU5QzguNDY4MjEgOC44NDE1NCA4LjE5NjU1IDguNDUwNDMgNy45Nzc5NSA4LjAyODU4QzcuNzMxNzYgNy42NDAwNyA3LjUyMDM4IDcuMjMwMzUgNy4yODI2OCA2LjgzNjY1QzcuMTI1NjMgNi42MTM1OSA3LjAyNTg4IDYuMzU2NzUgNi44NzU2MiA2LjEyOThDNi41MzAxIDUuNTIwODQgNi4xNjU0OSA0LjkyMzU3IDUuODIxNjcgNC4zMTM3NUM1LjY5MDA5IDQuMzEyODggNS41NTg1IDQuMzE1OTEgNS40MjY5MiA0LjMxNjc4Wk0xLjk3MDkzIDEwLjcwMDlDMi4wMDg3IDExLjEyOCAyLjEzMjY1IDExLjU0MiAyLjI3MzE1IDExLjk0NDRDMi41MTU1MSAxMi40NTY4IDIuODQxOTMgMTIuOTM5NyAzLjI4NzE5IDEzLjI5MDVDMy41ODMwNCAxMy41Njk5IDMuOTU3IDEzLjcyOTcgNC4zMjExOSAxMy44OTEyQzUuMTA4NTcgMTQuMTgzMiA1Ljk5MzU4IDE0LjIwMTMgNi43OTExNSAxMy45MzkzQzcuMTY5MzQgMTMuODAxNiA3LjU0OTI0IDEzLjY0MjYgNy44NjA4IDEzLjM3ODRDOC4yMTAxMyAxMy4xMTY4IDguNTA3NjggMTIuNzg1OSA4LjczNTIgMTIuNDFDOS4wNjQ1OCAxMS45MDI4IDkuMjE5MDggMTEuMjk3NyA5LjI4NzQyIDEwLjY5OTJDNi44NDg0NSAxMC43MDIyIDQuNDA5OSAxMC42OTkyIDEuOTcwOTMgMTAuNzAwOVpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUuNTY1MSA2LjA0MTYzQzE1LjY4MTggNS45OTUyOSAxNS44MSA2LjAwOTE1IDE1LjkzMjYgNi4wMDY1NUMxNi4zNDIyIDYuMDEyMTggMTYuNzUyMyA2LjAwMDkyIDE3LjE2MTkgNi4wMTEzMUMxNy4yNzg2IDYuMDA2MTIgMTcuMzYyNyA2LjA5ODM3IDE3LjQyIDYuMTkxMDZDMTcuNTk2NSA2LjQ3ODY1IDE3LjczNjYgNi43ODgzMiAxNy45MzA2IDcuMDY1MDhDMTguMTIzMyA3LjQxMjAxIDE4LjMwOTYgNy43NjI0IDE4LjUyMjcgOC4wOTcyQzE4LjcwNjEgOC40NDk3NiAxOC45MTkyIDguNzg0NTUgMTkuMTE4NyA5LjEyNzU4QzE5LjMxOSA5LjUyMzg4IDE5LjU3NzkgOS44ODU1MyAxOS43Nzc0IDEwLjI4MjdDMjAuMDY2OSAxMC43NTM1IDIwLjMyMDcgMTEuMjQ1OSAyMC42MTU3IDExLjcxMzdDMjAuNzk0NCAxMi4wODY2IDIxLjA1NTUgMTIuNDEyOCAyMS4yMTE3IDEyLjc5NzRDMjEuMjk3NCAxMy4xMDE0IDIxLjI4ODkgMTMuNDIxOSAyMS4yNTc5IDEzLjczMzhDMjEuMjI2NSAxNC40OTA0IDIwLjkxNTQgMTUuMTk4NiAyMC41NjE4IDE1Ljg1MjFDMjAuMzAzOCAxNi4yMzIgMjAuMDIwMiAxNi41OTcxIDE5LjY4MjggMTYuOTA3MkMxOS40MDk4IDE3LjE4NDggMTkuMDgwNSAxNy4zOTMyIDE4Ljc1NjIgMTcuNjAxNUMxOC4xNDE1IDE3LjkyMDMgMTcuNDc3NyAxOC4xOTU3IDE2Ljc3OTQgMTguMjA2NUMxNi40Mjc2IDE4LjIzNTYgMTYuMDc0IDE4LjIxMTcgMTUuNzIzNCAxOC4xODE0QzE1LjI0NDYgMTguMTAyMiAxNC43ODQgMTcuOTMzMyAxNC4zNDM5IDE3LjcyOEMxMy45ODUyIDE3LjU3MTYgMTMuNjc5NiAxNy4zMTkxIDEzLjM2MzQgMTcuMDkyMUMxMy4xNjAxIDE2LjkwNjMgMTIuOTY2OSAxNi43MDg0IDEyLjc4MTQgMTYuNTA0QzEyLjY1NTggMTYuMzQ1OSAxMi41MzU3IDE2LjE4MjYgMTIuNDA5MiAxNi4wMjQ5QzEyLjA1ODYgMTUuNDcwMSAxMS43ODczIDE0Ljg1NjggMTEuNjQ4NSAxNC4yMTAyQzExLjU4MjcgMTMuNzgwMSAxMS41NDQxIDEzLjMzNjYgMTEuNjExMiAxMi45MDM5QzExLjc0NzkgMTIuNDg4MSAxMi4wMjI1IDEyLjE0MTYgMTIuMjE5OSAxMS43NTU3QzEyLjQwMTEgMTEuNDExOCAxMi42MzU4IDExLjA5ODMgMTIuNzkyNSAxMC43NDE0QzEyLjk4MDUgMTAuNDc0NiAxMy4xMzggMTAuMTg3NCAxMy4yODYxIDkuODk1OTNDMTMuNDY2MSA5LjYxMzEgMTMuNjQyMiA5LjMyNzI1IDEzLjc5NTUgOS4wMjg0QzE0LjI3MzggOC4yMzAxNyAxNC43MjMzIDcuNDE0NjEgMTUuMjAwNCA2LjYxNTA4QzE1LjMxOTMgNi40MjQwNyAxNS4zOTMxIDYuMTkwNjIgMTUuNTY1MSA2LjA0MTYzWk0xNi4yMzk1IDcuMjAzMjVDMTYuMDQ2NCA3LjUyODUyIDE1Ljg2NTYgNy44NjExNSAxNS42NjY1IDguMTgzMzlDMTUuNTM0OSA4LjM4MzkyIDE1LjQ1NDMgOC42MTQ3NyAxNS4zMTE3IDguODA3OTRDMTUuMTQ4NyA5LjA0MjY5IDE1LjAzNzQgOS4zMDg2MiAxNC44ODU5IDkuNTUwNzNDMTQuNzY4MyA5Ljc2MTY2IDE0LjYzMDQgOS45NTk2IDE0LjUxODggMTAuMTc0QzE0LjMzODQgMTAuNTA3MSAxNC4xMjMyIDEwLjgyMDIgMTMuOTYwNiAxMS4xNjMyQzEzLjY5NzggMTEuNTU1NiAxMy40OTIgMTEuOTgyMiAxMy4yNDAzIDEyLjM4MTFDMTUuMzY1NiAxMi4zNzUxIDE3LjQ5MTMgMTIuMzgwMyAxOS42MTY2IDEyLjM3ODVDMTkuMzk1IDEyLjA1NjcgMTkuMjQ4MSAxMS42ODkgMTkuMDE4OSAxMS4zNzI0QzE4LjgzNDMgMTEuMDA0MyAxOC42MTc0IDEwLjY1NDcgMTguNDA2IDEwLjMwMjZDMTguMjc4MiAxMC4wMzcxIDE4LjExMDEgOS43OTU4OCAxNy45NjU0IDkuNTQwMzRDMTcuNTM0MSA4Ljc2NzIzIDE3LjA2OTggOC4wMTM2MSAxNi42NDMyIDcuMjM3OUMxNi41MDkxIDcuMjIwNTcgMTYuMzc0NSA3LjIwNjI4IDE2LjIzOTUgNy4yMDMyNVpNMTIuNzYzMiAxMy41ODYxQzEyLjc5OTcgMTMuODI5MSAxMi44MzExIDE0LjA3NDIgMTIuODk4MiAxNC4zMTExQzEzLjA4NjYgMTUuMDc0MyAxMy41NDE2IDE1Ljc1NzcgMTQuMTQ3OCAxNi4yNDExQzE0LjQ2MDIgMTYuNDYyOCAxNC43ODA2IDE2LjY4ODUgMTUuMTUzMyAxNi43ODk4QzE1LjkyMzcgMTcuMDY2NiAxNi43ODE2IDE3LjA5MjEgMTcuNTYgMTYuODMzMUMxOC4wMTM0IDE2LjczMjcgMTguNDAxNyAxNi40NjIgMTguNzcyMyAxNi4xOTA4QzE5LjIzNSAxNS44MTIzIDE5LjU5MDIgMTUuMzA2IDE5LjgyMjggMTQuNzUxMkMxOS45NTAyIDE0LjM3NDMgMjAuMDQ5NSAxMy45ODUgMjAuMDg3MyAxMy41ODY5QzE3LjY0NTggMTMuNTg4MiAxNS4yMDQ3IDEzLjU5MDQgMTIuNzYzMiAxMy41ODYxWlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2NvbnRyb2xzLWl0ZW0tYW1vdW50XCI+OTk8L2Rpdj48L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhlYWRlcl9fY29udHJvbHMtaXRlbVwiPjxhIGNsYXNzTmFtZT1cImhlYWRlcl9fY29udHJvbHMtaXRlbS1saW5rXCIgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE5XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE5IDE4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMy45OTI3NSAwLjgwNTgzOEM0LjgxNjc1IDAuNDAxMDM5IDUuNzA3ODQgMC4xMTUyNTQgNi42MjM5NCAwLjAyMDQ5ODJDNi45Mzg5MSAtMC4wMDk4MjM4MyA3LjI1NzY3IDAuMDAyNjgzOTkgNy41NzQxNiAwLjAwMTkyNTk0QzguMTUxNzkgLTAuMDExMzM5OSA4LjcyNTYzIDAuMDk0NDA4MSA5LjI4MTI4IDAuMjQ2Nzc2QzEwLjEwMDcgMC40ODQ0MjUgMTAuODk3OCAwLjgyNzgyMiAxMS41ODg4IDEuMzM0MkMxMi4wMTc1IDEuNjE2MTkgMTIuMzg5NyAxLjk3MzI0IDEyLjc1MDEgMi4zMzU5NkMxMi45NjkyIDIuNTc1NTEgMTMuMTYzNiAyLjgzNjY1IDEzLjM3MjEgMy4wODUyOUMxMy43NjUyIDMuNjk5NjkgMTQuMTM4OSA0LjMzNzk3IDE0LjM1NzYgNS4wMzgwM0MxNC40NzQ3IDUuNDc4ODQgMTQuNTk3NSA1LjkyMDAyIDE0LjY2MDQgNi4zNzI1OEMxNC43NzMgNy4yNTU3MSAxNC43NDQ5IDguMTYzMDkgMTQuNTI4NSA5LjAyODc5QzE0LjM4OTggOS42MDk4MyAxNC4yMTc3IDEwLjE4OTcgMTMuOTE5NCAxMC43MTA5QzEzLjgyODEgMTAuOTEzMyAxMy42OTM5IDExLjA5MjIgMTMuNTk5OSAxMS4yOTMxQzEzLjQ0MTggMTEuNTE0MSAxMy4zMDM1IDExLjc1MjUgMTMuMTE0IDExLjk0ODhDMTQuNjM5MiAxMy40NzcgMTYuMTY1OSAxNS4wMDM3IDE3LjY5NDEgMTYuNTI4OUMxNy44NTI2IDE2LjY3OTQgMTguMDEwNiAxNi44NjkzIDE4LjAwMzggMTcuMTAxM0MxOC4wMDY4IDE3LjI3MjYgMTguMDE3OCAxNy40NjU5IDE3LjkwMzcgMTcuNjA4QzE3LjgwNTIgMTcuNzMyMyAxNy42ODk2IDE3Ljg0MzggMTcuNTY0MSAxNy45NDA0QzE3LjI0MDEgMTguMDM5NyAxNi44MjAxIDE4LjAzOTQgMTYuNTkyNyAxNy43NDc1QzE1LjA0NzQgMTYuMjAxNSAxMy40OTk4IDE0LjY1NzcgMTEuOTU4MyAxMy4xMDc5QzExLjM2NDggMTMuNjA5MyAxMC42NjU1IDEzLjk2OTQgOS45NTM2NyAxNC4yNzI2QzkuMTY5MDkgMTQuNTEyMSA4LjM2MTc3IDE0LjcyMTcgNy41MzU1IDE0LjcyNTJDNy4wNzI3MSAxNC43MzggNi42MDk1NCAxNC43MDYyIDYuMTUzOTUgMTQuNjI0M0M1LjcwNTk0IDE0LjU1MzEgNS4yNzI3MiAxNC40MTU5IDQuODM2ODQgMTQuMjk0NkM0LjI0NzQ1IDE0LjA2MzggMy42ODQyMiAxMy43Njc3IDMuMTU3NzYgMTMuNDE2OEMyLjcyOTA4IDEzLjEwMzMgMi4zMjAxMSAxMi43NTk5IDEuOTYxOTMgMTIuMzY2NUMxLjYyNTM2IDEyLjAyMzUgMS4zNTQ3MyAxMS42MjQ3IDEuMDgyNTkgMTEuMjMwOUMwLjY4NjUxMyAxMC41Njk5IDAuMzkyMzg5IDkuODQ5MzggMC4xOTYwNTQgOS4xMDQ1OUMwLjAyMTcwMjggOC40Mzc1MSAtMC4wMTM5MjU1IDcuNzQzODkgMC4wMDQyNjc2NSA3LjA1NzFDMC4wMjU0OTMxIDYuNzc1ODYgMC4wMjM1OTc5IDYuNDkzMTEgMC4wNzM2MjkyIDYuMjE0NTNDMC4xOTA3NDggNS40ODMwMSAwLjQyNjg4MSA0Ljc3MTIgMC43NTU0OTUgNC4xMDc5QzAuODExOTcgMy45OTYwOSAwLjgzNTg0OSAzLjg2NjQ3IDAuOTIwMzcxIDMuNzY5ODFDMS4wMTU1MSAzLjYzNTY0IDEuMDg3MTQgMy40ODYzIDEuMTgwMzggMy4zNTAyM0MxLjM1ODkgMy4wNjc4NiAxLjU3NTcxIDIuODEyNCAxLjc3NTgzIDIuNTQ1NTZDMi4xMTEyNyAyLjE5NTM0IDIuNDUzNTMgMS44NDg5MiAyLjgzMTc5IDEuNTQ0NTZDMy4yMDg1NSAxLjI4MjY1IDMuNTgxNTEgMS4wMTIwMyAzLjk5Mjc1IDAuODA1ODM4Wk01Ljk2NTk1IDEuODczMTdDNS4zNTY0OCAyLjAwMDUzIDQuNzgzMzkgMi4yNzE5MSA0LjI2NzkyIDIuNjE2ODJDNC4wNTQxNSAyLjczNDcgMy44NjUwMiAyLjg5MDQ4IDMuNjc3MDIgMy4wNDQ3NEMzLjIzMzE4IDMuNDUwMyAyLjgxMTcxIDMuODkzIDIuNTE5MSA0LjQyMjEyQzIuMzA1MzMgNC43NjgxNyAyLjEyMjY0IDUuMTMyNzkgMS45OTAzNiA1LjUxNzVDMS44OTAzIDUuOTI2MDkgMS43NTkxNSA2LjMyODYxIDEuNzE4MjIgNi43NDkzM0MxLjY5Nzc1IDcuMDYzMTYgMS42NDczNCA3LjM3ODg5IDEuNjk1MSA3LjY5MzFDMS43MDYwOSA4LjIxODQzIDEuODUyMzkgOC43Mjc0NiAxLjk4NTQzIDkuMjMxOTVDMi4xMTMxNiA5LjYwNDE1IDIuMjg1MjQgOS45NjA0MyAyLjQ4ODc4IDEwLjI5NjZDMi41OTU2NiAxMC40NzM2IDIuNjk2ODYgMTAuNjU0NCAyLjgyOCAxMC44MTU1QzMuMDk1MjIgMTEuMTQ5NCAzLjM3MTUzIDExLjQ4NjggMy43MjE3NSAxMS43MzgxQzQuMDQ3NzEgMTIuMDM1MiA0LjQyMTggMTIuMjgyIDQuODIyNDMgMTIuNDY3M0M2LjMwNTU2IDEzLjI1MTkgOC4xNTQwNiAxMy4yOTk2IDkuNjc4MTIgMTIuNkM5LjkwMDIzIDEyLjQ4MjggMTAuMTM1MiAxMi4zOTA0IDEwLjM0OTggMTIuMjU5MkMxMC41NjE2IDEyLjEyMDUgMTAuNzc2NSAxMS45ODI1IDEwLjk2NTcgMTEuODEyN0MxMS41MTM0IDExLjM5ODUgMTEuOTQ2NiAxMC44NTExIDEyLjMwMjEgMTAuMjY4MkMxMi40Mjc5IDEwLjA5MDggMTIuNDg2NyA5Ljg3OTMyIDEyLjU4OTQgOS42ODk4MUMxMy4yMzQ1IDguMjkzNDggMTMuMjU2NSA2LjYyMjc0IDEyLjY0NjMgNS4yMTA4N0MxMi4yNDQ5IDQuMTk5MjUgMTEuNTMgMy4zMjE0MyAxMC42MzkzIDIuNjk5ODNDMTAuNTM0MyAyLjYzMTk4IDEwLjQxMjMgMi41OTA2NyAxMC4zMjM2IDIuNDk5MzJDOS45NTU5NSAyLjI4NDc5IDkuNTcwODYgMi4wOTQ5IDkuMTY0OTIgMS45NjQ1MkM4Ljk2MzY2IDEuOTI2MjQgOC43Njk2IDEuODU5OTEgOC41NzAyMyAxLjgxNTE4QzguMjU0NTEgMS43NTE1MSA3LjkzNDk5IDEuNzA5MDUgNy42MTM5NSAxLjY4NTE4QzcuMDU5NDQgMS42NjczNiA2LjUwMTUyIDEuNzI2ODcgNS45NjU5NSAxLjg3MzE3WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPjwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGVhZGVyX19jb250cm9scy1pdGVtXCI+PGEgY2xhc3NOYW1lPVwiaGVhZGVyX19jb250cm9scy1pdGVtLWxpbmtcIiBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjFcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjEgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wLjQ0NTcwMyAwSDIuNTYyODlDMi42Nzk2OSAwLjAzMDg1OTQgMi43OTUzMSAwLjA4Mzk4NDQgMi44NzI2NiAwLjE4MDQ2OUMyLjk2MTcyIDAuMjgwMDc4IDIuOTgwNDcgMC40MTY3OTcgMy4wMDY2NCAwLjU0MjU3OEMzLjIwNDY5IDEuNTA3ODEgMy40MDE5NSAyLjQ3MzA1IDMuNjAxNTYgMy40Mzc4OUM4LjkwMTU2IDMuNDQ0NTMgMTQuMjAyIDMuNDM3MTEgMTkuNTAyIDMuNDQxNDFDMTkuNzUxNiAzLjQzNDM4IDE5Ljk3MDMgMy42MzU1NSAyMC4wMDU5IDMuODc5M1Y0LjAyNTM5QzE5LjU1OSA2LjQ3ODkxIDE5LjE0OTYgOC45NDAyMyAxOC43MTA1IDExLjM5NTNDMTguNjc5MyAxMS41NDY5IDE4LjU3MzQgMTEuNjgwNSAxOC40MzIgMTEuNzQ0MUMxOC4yODkxIDExLjgxMzMgMTguMTI2NiAxMS43ODcxIDE3Ljk3MzQgMTEuNzkxOEMxMy43NTM5IDExLjc5MTggOS41MzQzOCAxMS43OTA2IDUuMzE0ODQgMTEuNzkyNkM1LjQwNzQyIDEyLjM3ODkgNS41NTE1NiAxMi45NTU5IDUuNjU1ODYgMTMuNTQwMkM5LjU3ODkxIDEzLjU1MjMgMTMuNTAyNyAxMy41NDE0IDE3LjQyNjIgMTMuNTQ2MUMxNy42MzYzIDEzLjU1MjcgMTcuODc1IDEzLjUwMjcgMTguMDU0MyAxMy42NDNDMTguMjgxMiAxMy43OTg0IDE4LjMyNDIgMTQuMTQ4IDE4LjE0ODQgMTQuMzU3NEMxOC4wNTIzIDE0LjQ4MDEgMTcuODk2OSAxNC41NDk2IDE3Ljc0MTggMTQuNTQ0OUMxMy41ODYzIDE0LjU0NTcgOS40MzEyNSAxNC41NDUzIDUuMjc2MTcgMTQuNTQ1M0M1LjEyODkxIDE0LjU1MDQgNC45NzkzIDE0LjQ5NDUgNC44ODIwMyAxNC4zODEzQzQuNzY4MzYgMTQuMjY0MSA0Ljc1MjM0IDE0LjA5NDEgNC43MjAzMSAxMy45NDIyQzQuNTU3MDMgMTMuMTMzMiA0LjM5MjE5IDEyLjMyNSA0LjIyNjk1IDExLjUxNjRDNC4xNDIxOSAxMC45OTYxIDQuMDIxNDggMTAuNDgyNCAzLjkxOTUzIDkuOTY1MjNDMy41NDgwNSA4LjE1MjczIDMuMTc1MzkgNi4zNDAyMyAyLjgwMzkxIDQuNTI3NzNDMi43NjY4IDQuMjg0MzggMi42NzM0NCA0LjA1MzEyIDIuNjU1NDcgMy44MDY2NEMyLjQ2MzI4IDIuODcxODcgMi4yNzI2NiAxLjkzNjMzIDIuMDc5MyAxLjAwMTk1QzEuNTQ0NTMgMC45OTU3MDMgMS4wMDg5OCAxLjAwNDMgMC40NzQyMTkgMC45OTgwNDdDMC4yMzk4NDQgMC45OTA2MjUgMC4wNDUzMTI1IDAuNzk2NDg0IDAuMDA1ODU5MzggMC41NzAzMTJWMC40NDAyMzRDMC4wMzY3MTg4IDAuMjE1NjI1IDAuMjIxMDk0IDAuMDMxMjUgMC40NDU3MDMgMFpNMy44MDcwMyA0LjQ0MDIzQzQuMjQwNjIgNi41NTc0MiA0LjY3NTc4IDguNjc0NjEgNS4xMTA1NSAxMC43OTE4QzkuMzQyNTggMTAuNzg4MyAxMy41NzQyIDEwLjc5NzMgMTcuODA1OSAxMC43ODcxQzE4LjE2OCA4LjY3MDcgMTguNTQ2NSA2LjU1NjY0IDE4LjkwODIgNC40Mzk4NEMxMy44NzQ2IDQuNDQxMDIgOC44NDEwMSA0LjQ0MDIzIDMuODA3MDMgNC40NDAyM1pcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNi42NDMxNiAxNS43ODMyQzcuMjM4ODYgMTUuNzA1NSA3Ljg2MjY5IDE1LjkwMDggOC4zMDc2MSAxNi4zMDM5QzguNzc3OTIgMTYuNzE2NCA5LjA0NjI4IDE3LjM0NjkgOS4wMTQ2NCAxNy45NzE5QzguOTk2NjcgMTguNTAzNSA4Ljc2MTkxIDE5LjAyMDMgOC4zODI2MSAxOS4zOTE0QzguMDEyNjkgMTkuNzU5NCA3LjUwNDA5IDE5Ljk3NDYgNi45ODQxNyAyMEg2LjgxNjU5QzYuNDQ3MDYgMTkuOTc3NCA2LjA3OTg3IDE5Ljg3MTEgNS43Njg1NSAxOS42Njg4QzUuMjU5MTcgMTkuMzQ4NCA0Ljg5NzA2IDE4LjgwMTIgNC44MTA3MyAxOC4yMDUxQzQuNzEyMyAxNy41OTQxIDQuOTAxNzUgMTYuOTQ0MSA1LjMxNDI1IDE2LjQ4MzJDNS42NTIxNCAxNi4wOTc3IDYuMTM0MTcgMTUuODQzIDYuNjQzMTYgMTUuNzgzMlpNNi42Njg1NSAxNi43OTAyQzYuMTM3NjkgMTYuODk0NSA1LjczNDE3IDE3LjQyODEgNS43ODY5MSAxNy45Njg4QzUuODIwMTEgMTguNTUwNCA2LjM3MzIzIDE5LjA0MjYgNi45NTY4MyAxOC45OTg4QzcuNTcwODkgMTguOTgzNiA4LjA5Mzk0IDE4LjM4MjggOC4wMTE5MSAxNy43NzE1QzcuOTY2NTkgMTcuMTM0OCA3LjI5MTk4IDE2LjYzNCA2LjY2ODU1IDE2Ljc5MDJaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0LjIwMzMgMTYuMzg0OEMxNC42MTUgMTUuOTcxNSAxNS4yMDM3IDE1LjczODcgMTUuNzg2OSAxNS43Njk1QzE2LjIzMzMgMTUuNzg1NiAxNi42NzI0IDE1Ljk1MiAxNy4wMTkzIDE2LjIzMzJDMTcuNDc1MSAxNi41OTQyIDE3Ljc2OTMgMTcuMTUyIDE3LjgwNiAxNy43MzI4QzE3Ljg1NjQgMTguMzUzOSAxNy42MDY4IDE4Ljk4NzkgMTcuMTU0IDE5LjQxNDVDMTYuNzg0OSAxOS43Njk5IDE2LjI4NDUgMTkuOTc2MiAxNS43NzQgMjBIMTUuNjA4M0MxNS4yMDAxIDE5Ljk3NSAxNC43OTU1IDE5Ljg0NDUgMTQuNDY0MiAxOS42MDJDMTMuOTUxMyAxOS4yMzc1IDEzLjYxNDYgMTguNjM0IDEzLjU4NDUgMTguMDA0M0MxMy41NDQzIDE3LjQwODYgMTMuNzc5OCAxNi44MDM5IDE0LjIwMzMgMTYuMzg0OFpNMTUuNDkzNSAxNi43ODMyQzE0LjkzNjUgMTYuODgwMSAxNC41MDQ4IDE3LjQ0NzcgMTQuNTg2MSAxOC4wMTI1QzE0LjY0MjcgMTguNTc1NCAxNS4xODE0IDE5LjAzODMgMTUuNzQ4MiAxOC45OTkyQzE2LjM3NjMgMTguOTg0OCAxNi45MDg3IDE4LjM1NjYgMTYuODAzMyAxNy43MzI4QzE2LjczNDUgMTcuMTIzNCAxNi4wOTY2IDE2LjY1MzkgMTUuNDkzNSAxNi43ODMyWlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2NvbnRyb2xzLWl0ZW0tYW1vdW50XCI+MTI8L2Rpdj48L2E+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj4gXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51X19sYW5nc1wiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51X19sYW5ncy1pdGVtXCI+IDxhIGNsYXNzTmFtZT1cIm1lbnVfX2xhbmdzLWxpbmtcIiBocmVmPVwiXCI+0YPQutGAPC9hPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnVfX2xhbmdzLWl0ZW0gYWN0aXZlXCI+PGEgY2xhc3NOYW1lPVwibWVudV9fbGFuZ3MtbGlua1wiIGhyZWY9XCJcIj7RgNGD0YE8L2E+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudV9fbGFuZ3MtaXRlbVwiPiA8YSBjbGFzc05hbWU9XCJtZW51X19sYW5ncy1saW5rXCIgaHJlZj1cIlwiPmVuZzwvYT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudV9fbmF2XCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnVfX25hdi1pdGVtXCI+IDxhIGNsYXNzTmFtZT1cIm1lbnVfX25hdi1saW5rXCIgaHJlZj1cIlwiPiBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51X19uYXYtbGluay1pY29uXCI+IFxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIzNlwiIGhlaWdodD1cIjM2XCIgdmlld0JveD1cIjAgMCAzNiAzNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yOS40OTg1IDI1LjQ1OTJDMjkuNTA5NyAyNS41MTU5IDI5LjUyMTIgMjUuNTcyNiAyOS41MzA1IDI1LjYzQzI5Ljk1OTcgMjguMjY4NSAyOC4zOTc5IDMwLjc1NDIgMjUuOTEyNiAzMS41MzY1TDI3LjM4MTIgMzQuNDczN0MyNy41NDQ3IDM0LjgwMDcgMjcuNTI3MiAzNS4xODg5IDI3LjMzNSAzNS40OTk5QzI3LjE0MjkgMzUuODEwOCAyNi44MDM0IDM2LjAwMDEgMjYuNDM3OCAzNi4wMDAxSDEzLjc4MTZDMTMuNDE2IDM2LjAwMDEgMTMuMDc2NiAzNS44MTA4IDEyLjg4NDQgMzUuNDk5OUMxMi42OTIyIDM1LjE4ODkgMTIuNjc0OCAzNC44MDA3IDEyLjgzODIgMzQuNDczN0wxNC4zMjg4IDMxLjQ5MjZDMTIuNDUzOSAzMC44NzMgMTEuMDAyMyAyOS4zMTIgMTAuNjg4OSAyNy4zODU4QzEwLjE1NTYgMjQuMTA3MiAxMi42NzM3IDIxLjE2NDEgMTUuODkxIDIxLjE2NDFIMTYuOTQ1N1YxOC44NzMzQzE1LjcxODEgMTguNDM3OSAxNC44MzYzIDE3LjI2NTYgMTQuODM2MyAxNS44OTA2QzE0LjgzNjMgMTQuNDMzNSAxNS44MjY2IDEzLjIwNDEgMTcuMTY5MyAxMi44MzgxQzE3LjAyNTUgMTIuNDc2OSAxNi45NDU3IDEyLjA4MzcgMTYuOTQ1NyAxMS42NzE5QzE2Ljk0NTcgMTAuODYyMSAxNy4yNTE4IDEwLjEyMjggMTcuNzUzOSA5LjU2MjVDMTcuNDgxIDkuMjU4MDUgMTcuMjY2NCA4LjkwMDY1IDE3LjEyNzEgOC41MDc4MUgxNC44MzYzQzEwLjE4MzggOC41MDc4MSA2LjM5ODc4IDEyLjI5MjkgNi4zOTg3OCAxNi45NDUzVjI1LjYzNDVDNy42MjYzNiAyNi4wNjk5IDguNTA4MTUgMjcuMjQyMiA4LjUwODE1IDI4LjYxNzJWMzIuODM1OUM4LjUwODE1IDMzLjQxODQgOC4wMzU5MyAzMy44OTA2IDcuNDUzNDYgMzMuODkwNkg2LjM5ODc4VjM0Ljk0NTNDNi4zOTg3OCAzNS41Mjc4IDUuOTI2NTYgMzYgNS4zNDQwOSAzNkM0Ljc2MTYyIDM2IDQuMjg5NCAzNS41Mjc4IDQuMjg5NCAzNC45NDUzVjMzLjg5MDZIMy4yMzQ3MUMyLjY1MjI0IDMzLjg5MDYgMi4xODAwMyAzMy40MTg0IDIuMTgwMDMgMzIuODM1OVYyOC42MTcyQzIuMTgwMDMgMjcuMjQyMiAzLjA2MTgyIDI2LjA2OTkgNC4yODk0IDI1LjYzNDVWMTYuOTQ1M0M0LjI4OTQgMTEuMTI5OCA5LjAyMDczIDYuMzk4NDQgMTQuODM2MyA2LjM5ODQ0SDE2Ljk0NTdWNS4yNTE2NEMxNS42MzEyIDQuMjYxMjkgMTQuODM2MyAyLjcwMzg3IDE0LjgzNjMgMS4wNTQ2OUMxNC44MzYzIDAuNDcyMjE5IDE1LjMwODUgMCAxNS44OTEgMEgyNC4zMjg1QzI0LjkxMDkgMCAyNS4zODMyIDAuNDcyMjE5IDI1LjM4MzIgMS4wNTQ2OUMyNS4zODMyIDIuNzAzODcgMjQuNTg4MiA0LjI2MTIyIDIzLjI3MzggNS4yNTE2NFY2LjQwNjg4QzI4Ljc5NiA2LjYxMTIgMzMuNTI5MiAxMC44NjU0IDMzLjgwNyAxNi40MDM1QzMzLjk4NiAxOS45Njk5IDMyLjM0OTYgMjMuMzcxIDI5LjQ5ODUgMjUuNDU5MlpNNC4yODk0IDMxLjc4MTJINi4zOTg3OFYyOC42MTcyQzYuMzk4NzggMjguMDM1NiA1LjkyNTY0IDI3LjU2MjUgNS4zNDQwOSAyNy41NjI1QzQuNzYyNTQgMjcuNTYyNSA0LjI4OTQgMjguMDM1NiA0LjI4OTQgMjguNjE3MlYzMS43ODEyWk0yNC43MzE0IDMzLjg5MDZMMjMuNjc2NyAzMS43ODEySDE2LjU0MjhMMTUuNDg4MSAzMy44OTA2SDI0LjczMTRaTTE1Ljg5MSAyMy4yNzM0QzEzLjk3NzcgMjMuMjczNCAxMi40NDU3IDI1LjA0NzIgMTIuNzcwOSAyNy4wNDdDMTMuMDE0NCAyOC41NDM0IDE0LjQ1MjggMjkuNjcxOSAxNi4xMTY3IDI5LjY3MTlIMjQuMzI4NUMyNi4yMjI4IDI5LjY3MTkgMjcuNzc3MyAyNy45OTAzIDI3LjQ0ODUgMjUuOTY4N0MyNy4yMDI2IDI0LjQ1NzMgMjUuNzMzIDIzLjI3MzQgMjQuMTAyNyAyMy4yNzM0SDIyLjIxOTFDMjEuNjM2NiAyMy4yNzM0IDIxLjE2NDQgMjIuODAxMiAyMS4xNjQ0IDIyLjIxODhWMTkuMDU0N0gxOS4wNTVWMjIuMjE4OEMxOS4wNTUgMjIuODAxMiAxOC41ODI4IDIzLjI3MzQgMTguMDAwMyAyMy4yNzM0SDE1Ljg5MVpNMTguMDAwMyAxNi45NDUzSDIyLjIxOTFDMjIuODAwNiAxNi45NDUzIDIzLjI3MzggMTYuNDcyMiAyMy4yNzM4IDE1Ljg5MDZDMjMuMjczOCAxNS4zMDkxIDIyLjgwMDYgMTQuODM1OSAyMi4yMTkxIDE0LjgzNTlIMTguMDAwM0MxNy40MTg4IDE0LjgzNTkgMTYuOTQ1NyAxNS4zMDkxIDE2Ljk0NTcgMTUuODkwNkMxNi45NDU3IDE2LjQ3MjIgMTcuNDE4OCAxNi45NDUzIDE4LjAwMDMgMTYuOTQ1M1pNMTkuMDU1IDExLjY3MTlDMTkuMDU1IDEyLjI1MzQgMTkuNTI4MiAxMi43MjY2IDIwLjEwOTcgMTIuNzI2NkMyMC42OTEzIDEyLjcyNjYgMjEuMTY0NCAxMi4yNTM0IDIxLjE2NDQgMTEuNjcxOUMyMS4xNjQ0IDExLjA5MDMgMjAuNjkxMyAxMC42MTcyIDIwLjEwOTcgMTAuNjE3MkMxOS41MjgyIDEwLjYxNzIgMTkuMDU1IDExLjA5MDMgMTkuMDU1IDExLjY3MTlaTTE3LjEyNzUgMi4xMDkzOEMxNy4zNzQxIDIuNzk3NTkgMTcuODYxNSAzLjM4NzIzIDE4LjUzMDggMy43NzY3N0MxOC44NTU0IDMuOTY1NjMgMTkuMDU1IDQuMzEyODMgMTkuMDU1IDQuNjg4M1Y3LjQ1MzEyQzE5LjA1NSA4LjAzNDY4IDE5LjUyODIgOC41MDc4MSAyMC4xMDk3IDguNTA3ODFDMjAuNjkxMyA4LjUwNzgxIDIxLjE2NDQgOC4wMzQ2OCAyMS4xNjQ0IDcuNDUzMTJWNC42ODgzQzIxLjE2NDQgNC4zMTI4MyAyMS4zNjQgMy45NjU2MyAyMS42ODg2IDMuNzc2NzdDMjIuMzU3OSAzLjM4NzIzIDIyLjg0NTQgMi43OTc1OSAyMy4wOTE5IDIuMTA5MzhIMTcuMTI3NVpNMzEuNzAwNCAxNi41MDkyQzMxLjQ4MjggMTIuMTcyIDI3LjY0NDUgOC42MzAwMiAyMy4wOTEzIDguNTExMDVDMjIuOTUyIDguOTAyNjIgMjIuNzM3NyA5LjI1ODg5IDIyLjQ2NTYgOS41NjI0M0MyMi45Njc4IDEwLjEyMjcgMjMuMjczOCAxMC44NjIgMjMuMjczOCAxMS42NzE4QzIzLjI3MzggMTIuMDgzNiAyMy4xOTM5IDEyLjQ3NjggMjMuMDUwMiAxMi44MzhDMjQuMzkyOSAxMy4yMDQgMjUuMzgzMiAxNC40MzM1IDI1LjM4MzIgMTUuODkwNkMyNS4zODMyIDE3LjI2NTUgMjQuNTAxNCAxOC40Mzc4IDIzLjI3MzggMTguODczMlYyMS4xNjQxSDI0LjEwMjhDMjUuOTQ1MyAyMS4xNjQxIDI3LjYyNCAyMi4wNzE0IDI4LjYyNzkgMjMuNDY1OUMzMC42NzY2IDIxLjc3OTggMzEuODM1NSAxOS4yMDM1IDMxLjcwMDQgMTYuNTA5MlpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfX25hdi1saW5rLXRleHRcIj7QmtCw0LvRjNGP0L3RizwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfX25hdi1saW5rLWFyclwiPiBcbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiOVwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCA5IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEgMTVMNy45NDkxMSA3LjY3NEwxIDFcIiBzdHJva2VXaWR0aD1cIjEuNVwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvZGl2PjwvYT5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51X19uYXYtc3VibWVudVwiPiBcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnVfX25hdi1zdWJtZW51LWl0ZW1cIj48YSBjbGFzc05hbWU9XCJtZW51X19uYXYtc3VibWVudS1saW5rXCIgaHJlZj1cIlwiPk1ha2xhdWQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnVfX25hdi1zdWJtZW51LWl0ZW1cIj48YSBjbGFzc05hbWU9XCJtZW51X19uYXYtc3VibWVudS1saW5rXCIgaHJlZj1cIlwiPkdyYW1tPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51X19uYXYtc3VibWVudS1pdGVtXCI+PGEgY2xhc3NOYW1lPVwibWVudV9fbmF2LXN1Ym1lbnUtbGlua1wiIGhyZWY9XCJcIj5DYXBzdWxlPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51X19uYXYtc3VibWVudS1pdGVtXCI+PGEgY2xhc3NOYW1lPVwibWVudV9fbmF2LXN1Ym1lbnUtbGlua1wiIGhyZWY9XCJcIj5OdWFodWxlICjRhdGD0LvQuNCz0LDQvSk8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnVfX25hdi1zdWJtZW51LWl0ZW1cIj48YSBjbGFzc05hbWU9XCJtZW51X19uYXYtc3VibWVudS1saW5rXCIgaHJlZj1cIlwiPk1hbWF5PC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51X19uYXYtc3VibWVudS1pdGVtXCI+PGEgY2xhc3NOYW1lPVwibWVudV9fbmF2LXN1Ym1lbnUtbGlua1wiIGhyZWY9XCJcIj5TaGkgY2FydmVyPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51X19uYXYtc3VibWVudS1pdGVtXCI+PGEgY2xhc3NOYW1lPVwibWVudV9fbmF2LXN1Ym1lbnUtbGlua1wiIGhyZWY9XCJcIj7QlNGD0YjQsDwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudV9fbmF2LXN1Ym1lbnUtaXRlbVwiPjxhIGNsYXNzTmFtZT1cIm1lbnVfX25hdi1zdWJtZW51LWxpbmtcIiBocmVmPVwiXCI+0KF3cCAgPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51X19uYXYtc3VibWVudS1pdGVtXCI+PGEgY2xhc3NOYW1lPVwibWVudV9fbmF2LXN1Ym1lbnUtbGlua1wiIGhyZWY9XCJcIj5HZW9tZXRyeTwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudV9fbmF2LXN1Ym1lbnUtaXRlbVwiPjxhIGNsYXNzTmFtZT1cIm1lbnVfX25hdi1zdWJtZW51LWxpbmtcIiBocmVmPVwiXCI+RGFya3NpZGUgPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51X19uYXYtc3VibWVudS1pdGVtXCI+PGEgY2xhc3NOYW1lPVwibWVudV9fbmF2LXN1Ym1lbnUtbGlua1wiIGhyZWY9XCJcIj5BbHBoYSBob29rYWg8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnVfX25hdi1zdWJtZW51LWl0ZW1cIj48YSBjbGFzc05hbWU9XCJtZW51X19uYXYtc3VibWVudS1saW5rXCIgaHJlZj1cIlwiPkh1YjwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudV9fbmF2LXN1Ym1lbnUtaXRlbVwiPjxhIGNsYXNzTmFtZT1cIm1lbnVfX25hdi1zdWJtZW51LWxpbmtcIiBocmVmPVwiXCI+TnViZSA8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnVfX25hdi1zdWJtZW51LWl0ZW1cIj48YSBjbGFzc05hbWU9XCJtZW51X19uYXYtc3VibWVudS1saW5rXCIgaHJlZj1cIlwiPlVuaW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51X19uYXYtc3VibWVudS1pdGVtXCI+PGEgY2xhc3NOYW1lPVwibWVudV9fbmF2LXN1Ym1lbnUtbGlua1wiIGhyZWY9XCJcIj5GZXJybzwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51X19uYXYtaXRlbVwiPiA8YSBjbGFzc05hbWU9XCJtZW51X19uYXYtbGlua1wiIGhyZWY9XCJcIj4gXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9fbmF2LWxpbmstaWNvblwiPiBcbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzlcIiBoZWlnaHQ9XCIyOFwiIHZpZXdCb3g9XCIwIDAgMzkgMjhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMC4wNzM0Nzk5IDI0LjU0NzFDLTAuMDYwMzcyOSAyMy44MjkgMC4wMzIxNzY3IDIzLjA5NTEgMC4wMTkxNzM5IDIyLjM2OThDLTAuMDA5MTI2NDEgMjEuOTQ1IDAuMzM4MTI2IDIxLjUzMzEgMC43OTMyMjYgMjEuNDc2N0MzLjI4ODI0IDIxLjEyNzYgNS43ODU1NSAyMC43ODY0IDguMjgwNTcgMjAuNDM5NUM4LjMyMTExIDE5Ljk3MDQgOC4xNDM2NiAxOS40MSA4LjUyMzggMTkuMDI2N0M4Ljg3Nzk0IDE4LjY0NjkgOS41ODQ2OCAxOC42Njc2IDkuOTEyODEgMTkuMDY4MUMxMC4yMjU2IDE5LjQxOTMgMTAuMDg3MiAxOS45MDU1IDEwLjExNyAyMC4zMjI0QzE0LjM3NTggMjAuMzIyNCAxOC42MzQ3IDIwLjMyMjQgMjIuODkzNSAyMC4zMjI0QzIzLjkxIDIwLjMwNjcgMjQuOTM4IDIwLjM4MzggMjUuOTQxNSAyMC4xOTFDMjcuODEwOCAxOS44NTQ4IDI5LjUyNTcgMTguODMzOSAzMC42NDkzIDE3LjQwMDVDMzEuNzI2MiAxNi4wNTA1IDMyLjI2MzIgMTQuMzM3OSAzMi4xMjc4IDEyLjY1ODFDMzIuMDMyMiAxMS4yNDYxIDMxLjQ1MjQgOS44NzQwMSAzMC41MjE2IDguNzYwMzVDMjkuNjExNCA3LjY2MzExIDI4LjM0OTMgNi44MzIxNiAyNi45NDczIDYuMzc3NDFDMjUuMzgzOSA1Ljg3ODQxIDIzLjY0NzYgNS44Njk4NCAyMi4wNzg5IDYuMzUxNzFDMjAuMzc3OCA2Ljg3OTI3IDE4Ljg4MTcgNy45NzIyMiAxNy45NDYzIDkuNDAxNDJDMTYuNzMzOSAxMS4xODkgMTYuNDY4NSAxMy40OTEyIDE3LjIwNTEgMTUuNDg3M0MxNy40NTc1IDE2LjE4ODMgMTcuODkzNSAxNi44MTA4IDE4LjI4ODIgMTcuNDQ2OUMxOC40MTI4IDE3LjY1OTYgMTguNTQyMSAxNy45MDMgMTguNDgxNyAxOC4xNTIyQzE4LjI4ODkgMTguNzQxOSAxNy4zNzM0IDE5LjAwMTcgMTYuOTA4MyAxOC41MjQ4QzE1Ljc3MSAxNy4xNTg1IDE1LjExMDkgMTUuNDYzIDE0Ljk4MDEgMTMuNzQwNEMxNC44NjIzIDEyLjA1NzggMTUuMjc0NiAxMC4zNDY2IDE2LjE0ODggOC44NzE3MkMxNy4wNTE0IDcuMzQ0NzIgMTguNDQ1NyA2LjA3MzMgMjAuMTA5MyA1LjI3NjYxQzIxLjU3MDIgNC41NzIgMjMuMjMwOCA0LjIyNzIgMjQuODc0NSA0LjI5MDAyQzI2LjY3MTIgNC4zNjE0MSAyOC40NDExIDQuOTI2MDkgMjkuOTE0MiA1Ljg4ODRDMzIuMzI1MSA3LjQzNTM4IDMzLjg2NDEgMTAuMDc2NyAzMy45NzQyIDEyLjgwMjRDMzQuMDYxNCAxNC43MTU2IDMzLjQ0ODcgMTYuNjQ1OSAzMi4yNzkyIDE4LjIxNjRDMzAuNzQxOCAyMC4zMTAzIDI4LjE5NzkgMjEuNzE0NSAyNS40OTYzIDIxLjk4NDNDMjQuODYwNyAyMi4wNTE0IDI0LjIyMDUgMjIuMDM0MyAyMy41ODI2IDIyLjAzNTdDMTkuMDk0MyAyMi4wMzY0IDE0LjYwNjEgMjIuMDM1NyAxMC4xMTg2IDIyLjAzNjRDMTAuMTE1NSAyMi44OTMxIDEwLjExNzggMjMuNzQ5IDEwLjExNyAyNC42MDU3QzE0LjgzMzIgMjQuNjA1NyAxOS41NDg3IDI0LjYwNSAyNC4yNjQxIDI0LjYwNjRDMjUuNDIyMSAyNC42MTY0IDI2LjU4NTUgMjQuNDk1IDI3LjY5OTIgMjQuMTk1OUMzMS4xODcgMjMuMzI5MyAzNC4xOTE0IDIwLjkzNTYgMzUuNjUgMTcuODU0NUMzNi4zMzg0IDE2LjQyODIgMzYuNzIwMSAxNC44NzA1IDM2LjczNjkgMTMuMzA0OUMzNi43ODEzIDEwLjI5NzMgMzUuNDk3OCA3LjI4OTc1IDMzLjIyNjEgNS4xNTMxQzMwLjg5NzkgMi45MDY1MiAyNy41NDAxIDEuNjM3OTUgMjQuMTk0NSAxLjcxNTc2QzIwLjg0NzQgMS43NzkzIDE3LjU1NjIgMy4xOTI3OCAxNS4zMzczIDUuNTMzNkMxMy4yMjE3IDcuNzI2NjUgMTIuMDY2NyAxMC43MSAxMi4yMjQzIDEzLjY2MDRDMTIuMjYxIDEzLjk2MTcgMTIuMTczOCAxNC4yODcyIDExLjkxNiAxNC40ODY0QzExLjU3OTUgMTQuNzc0OCAxMS4wMTU4IDE0Ljc2NjIgMTAuNjg3NiAxNC40NzE0QzEwLjQ5MTggMTQuMzA5NCAxMC4zOTQ3IDE0LjA2NjYgMTAuMzg4NiAxMy44MjYxQzEwLjI1MzIgMTEuMzUxIDEwLjg4MDQgOC44Mzg4OCAxMi4yMDI4IDYuNjg3OTVDMTMuNTM4MyA0LjQ2NzA2IDE1LjU4ODkgMi42MzAyNSAxOC4wMTM2IDEuNDYzMDVDMjEuMDg2MSAtMC4wMjc1MzgzIDI0Ljc1NjcgLTAuNDAxNjExIDI4LjEgMC40NDQzMzhDMzAuODAzOCAxLjExMzI1IDMzLjI4ODEgMi41NTI0MyAzNS4xMSA0LjUzNDg4QzM2Ljg4NzYgNi40MzE2NyAzOC4wNTQ4IDguODE2MDMgMzguNDMwMyAxMS4zMTE4QzM4LjgyNzMgMTMuODY4OSAzOC4zNzkxIDE2LjUyODEgMzcuMTc5OCAxOC44NTU0QzM2LjAwNjUgMjEuMTM1NSAzNC4xMTE5IDIzLjA4NzMgMzEuNzk0MyAyNC4zOTY1QzI5Ljg3NDUgMjUuNDk3MyAyNy42NjQ4IDI2LjE0OTEgMjUuNDE3NiAyNi4yODlDMjQuODA2NCAyNi4zMjkgMjQuMTkzOCAyNi4zMTgzIDIzLjU4MTkgMjYuMzE5QzE5LjA5NDMgMjYuMzE5NyAxNC42MDYxIDI2LjMxOSAxMC4xMTg2IDI2LjMxOTdDMTAuMTE3IDI2LjY4NDUgMTAuMTUyMiAyNy4wNjQzIDEwLjAxMzggMjcuNDEzNEM5Ljc5MTE5IDI4LjAzNjYgOC42Nzk4MyAyOC4wNjAyIDguNDA5ODMgMjcuNDYxMkM4LjIyNTUgMjcuMDY1NyA4LjI3OTA0IDI2LjYyMTcgOC4yODI4NiAyNi4yMDE5QzUuNzg1NTUgMjUuODU0MyAzLjI4NzQ4IDI1LjUxNDUgMC43OTA5MzEgMjUuMTYzOUMwLjQzMTQ0MSAyNS4xNDA0IDAuMTMwMDgxIDI0Ljg3ODQgMC4wNzM0Nzk5IDI0LjU0NzFaTTEuODU1NjMgMjMuNTgwNUMzLjk5NjUxIDIzLjg3NzUgNi4xMzgxNiAyNC4xNzMxIDguMjc5ODEgMjQuNDY5M0M4LjI4Mjg2IDIzLjcwMjYgOC4yNzk4MSAyMi45MzU5IDguMjgwNTcgMjIuMTY4NUM2LjE0MDQ1IDIyLjQ2NDcgNC4wMDExIDIyLjc2NiAxLjg2MDIyIDIzLjA1NjZDMS44NTcxNiAyMy4yMzE1IDEuODU1NjMgMjMuNDA1NiAxLjg1NTYzIDIzLjU4MDVaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMS4xNTk3IDE3LjQ4MDRDMTAuOTE4IDE2Ljg5MzYgMTEuNTI0NiAxNi4yNTU0IDEyLjE2OTQgMTYuMzMyNUMxMi44OTk4IDE2LjQxNzUgMTMuMTc5OCAxNy40MjI2IDEyLjY0NjYgMTcuODY3M0MxMi4xNzc4IDE4LjI1MDcgMTEuMzQwMiAxOC4wNDU4IDExLjE1OTcgMTcuNDgwNFpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE5LjcxNjUgMTMuNDg4NEMxOS42NDMxIDEyLjU4NDYgMTkuODczMyAxMS42NjA5IDIwLjM3NjYgMTAuODg0OUMyMS4wODQ5IDkuNzY1NSAyMi4zNDIzIDguOTYzMSAyMy43MjA2IDguNzYzOTJDMjQuNjk4MSA4LjYxOTcyIDI1LjcyNjkgOC43NTk2NCAyNi42MDg4IDkuMTg0NEMyNy41MTQ0IDkuNjA1NTkgMjguMjY3IDEwLjMwNjYgMjguNzIyMSAxMS4xNTA0QzI5LjI2OTggMTIuMTI5OSAyOS4zODMgMTMuMzA0OSAyOS4wNjI1IDE0LjM2NTdDMjguNzE0NSAxNS41MTk0IDI3Ljg0NTYgMTYuNTI1OSAyNi43MDk3IDE3LjA4NDlDMjUuODc2OCAxNy41MTA0IDI0LjkwMzEgMTcuNjc4OSAyMy45NjA4IDE3LjU4MzlDMjIuNjc4MSAxNy40NjExIDIxLjQ2ODggMTYuODE2NSAyMC42ODk0IDE1Ljg1OTlDMjAuMTI4OCAxNS4xNzk2IDE5Ljc4MDcgMTQuMzQ1OCAxOS43MTY1IDEzLjQ4ODRaTTIxLjU1MDcgMTMuNDE2M0MyMS42MzYzIDE0LjMyNTggMjIuMjQ3NSAxNS4xNzMxIDIzLjExOTQgMTUuNTg3OUMyNC4wMDkgMTYuMDI5OCAyNS4xNDMzIDE1Ljk5MiAyNS45OTc2IDE1LjQ5NDRDMjcuMDY1NCAxNC45MDQgMjcuNjMxNCAxMy42NDI2IDI3LjMyMzIgMTIuNTE4OUMyNy4xMjM1IDExLjczMzcgMjYuNTMyMyAxMS4wNDQ4IDI1Ljc1MTMgMTAuNjk3MUMyNS4wMTk0IDEwLjM2MDIgMjQuMTM1OSAxMC4zMzMgMjMuMzgwMiAxMC42MTc5QzIyLjE5ODUgMTEuMDQyNiAyMS40MTIyIDEyLjIzOTggMjEuNTUwNyAxMy40MTYzWlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9fbmF2LWxpbmstdGV4dFwiPtCQ0LrRgdC10YHRgdGD0LDRgNGLPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9fbmF2LWxpbmstYXJyXCI+IFxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI5XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDkgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMSAxNUw3Ljk0OTExIDcuNjc0TDEgMVwiIHN0cm9rZVdpZHRoPVwiMS41XCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9kaXY+PC9hPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnVfX25hdi1pdGVtXCI+IDxhIGNsYXNzTmFtZT1cIm1lbnVfX25hdi1saW5rXCIgaHJlZj1cIlwiPiBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51X19uYXYtbGluay1pY29uXCI+IFxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIzOVwiIGhlaWdodD1cIjI2XCIgdmlld0JveD1cIjAgMCAzOSAyNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zOC4zNjU4IDcuODUxOTlMMzguMjQxNiA3LjA4MTIzTDM3LjQxNTggNi45NjUyOEMzNy4xNjY5IDYuOTMwMzQgMzEuNjQ0OSA2LjE4NTY2IDI2LjY4MTMgNy45MTEyQzI0LjQ0NDggMy41OTkzNiAyMC4xOTk5IDAuNjMwMTM5IDE5Ljk1NzYgMC40NjMxNDdMMTkuMjg1NyAwTDE4LjYxMzkgMC40NjMwNzdDMTguMzcxNiAwLjYzMDA2OSAxNC4xMjY3IDMuNTk5MjkgMTEuODkwMyA3LjkxMTJDNi45MjY1NiA2LjE4NTY2IDEuNDA0NjcgNi45MzAzNCAxLjE1NTY5IDYuOTY1MjhMMC4zMjk3OTkgNy4wODEyM0wwLjIwNTU3MiA3Ljg1MTk5QzAuMTQ0NjI2IDguMjMwNDggLTEuMjI3MTQgMTcuMTc2OSA0LjAyNDI5IDIyLjA3ODJDOS4wNzE4NiAyNi43ODkyIDE4LjEyMzMgMjUuNzg5MyAxOS4xNzg3IDI1LjY1NEgxOS4zOTI4QzE5LjczNyAyNS42OTgxIDIwLjkzMDggMjUuODM0MiAyMi41NTk4IDI1LjgzNDJDMjUuOTI1NSAyNS44MzQxIDMxLjE0NTggMjUuMjUyOCAzNC41NDcxIDIyLjA3ODJDMzkuNzk4NiAxNy4xNzY5IDM4LjQyNjggOC4yMzA0OCAzOC4zNjU4IDcuODUxOTlaTTM0LjY5NjcgOC44OTcyNkwyNy43NDU5IDE1LjM4NDZDMjcuOTMwMiAxNC42Mjc5IDI4LjAzNTMgMTMuODQ1NiAyOC4wMzUzIDEzLjA0MjdDMjguMDM1MyAxMS45NDQxIDI3Ljg0MDEgMTAuODgzNyAyNy41MTEzIDkuODc1NjVDMzAuMDM1MyA5LjAwODIxIDMyLjc5MyA4Ljg2MjEgMzQuNjk2NyA4Ljg5NzI2Wk0yNS43NzM4IDEzLjA0MjdDMjUuNzczOCAxNS42NzY1IDI0LjM0MTcgMTguMTMwOCAyMi43NTg0IDIwLjAzOTdMMjAuNDE2NiAyMi4yMjUzVjMuNjI0ODhDMjIuNTM3OSA1LjUyOTM2IDI1Ljc3MzggOS4wODM0NCAyNS43NzM4IDEzLjA0MjdaTTE4LjE1NSAzLjYyNDk1VjIyLjIyNTRMMTUuODEzMSAyMC4wMzk3QzE0LjIyOTggMTguMTMwOSAxMi43OTc3IDE1LjY3NjYgMTIuNzk3NyAxMy4wNDI3QzEyLjc5NzggOS4wODMyMyAxNi4wMzM4IDUuNTI5MTUgMTguMTU1IDMuNjI0OTVaTTExLjA2MDIgOS44NzU1MUMxMC43MzEzIDEwLjg4MzYgMTAuNTM2MiAxMS45NDQxIDEwLjUzNjIgMTMuMDQyN0MxMC41MzYyIDEzLjg0NTcgMTAuNjQxMiAxNC42MjggMTAuODI1NiAxNS4zODQ3TDMuODcyNDEgOC44OTUwOEM1Ljc3NDAxIDguODU4OCA4LjUyOTc1IDkuMDA0NTUgMTEuMDYwMiA5Ljg3NTUxWk01LjYyMzQ5IDIwLjU4NTZDMi42MjM3NCAxNy43ODU5IDIuMjE5NDIgMTMuMTM3MSAyLjI3NjYgMTAuMzkwN0wxNC4wNTgzIDIxLjM4N0MxNC44MDkyIDIyLjI4ODkgMTUuNTg0MyAyMy4wNzI3IDE2LjI3ODIgMjMuNzEyOUMxMy4zMDg3IDIzLjczODEgOC41MzM2NyAyMy4zMDE5IDUuNjIzNDkgMjAuNTg1NlpNMzIuOTQ4IDIwLjU4NTZDMzAuMDM3NyAyMy4zMDE5IDI1LjI2MjUgMjMuNzM4MSAyMi4yOTMzIDIzLjcxMjlDMjIuOTg3MiAyMy4wNzI3IDIzLjc2MjMgMjIuMjg4OCAyNC41MTMyIDIxLjM4NjlMMzYuMjk0OSAxMC4zOTA3QzM2LjM1MjEgMTMuMTM3MyAzNS45NDc3IDE3Ljc4NTkgMzIuOTQ4IDIwLjU4NTZaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51X19uYXYtbGluay10ZXh0XCI+0KLQsNCx0LDQujwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfX25hdi1saW5rLWFyclwiPiBcbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiOVwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCA5IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEgMTVMNy45NDkxMSA3LjY3NEwxIDFcIiBzdHJva2VXaWR0aD1cIjEuNVwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvZGl2PjwvYT48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51X19uYXYtaXRlbVwiPiA8YSBjbGFzc05hbWU9XCJtZW51X19uYXYtbGlua1wiIGhyZWY9XCJcIj4gXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9fbmF2LWxpbmstaWNvblwiPiBcbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzVcIiBoZWlnaHQ9XCIzNVwiIHZpZXdCb3g9XCIwIDAgMzUgMzVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYuNzI1NyAwLjAyMjU0NjhDMTcuMzU1MSAtMC4wNDY2MTUzIDE4LjAxMzEgMC4wNDE3MTIzIDE4LjU4MTggMC4zMTAwMjhDMjMuMDExIDIuNDMzMjIgMjcuNDQyOCA0LjU1MDU4IDMxLjg3MjkgNi42NzI5NEMzMi4yOTI1IDYuODg3MSAzMi43NDg3IDcuMDQ4NzUgMzMuMTIxOSA3LjMzMzczQzMzLjg2MzggNy44ODUzNiAzNC4zMTM4IDguNzY4NjQgMzQuMjg0MyA5LjY1NTI1QzM0LjI4NjEgMTQuOTMzMiAzNC4yODUyIDIwLjIxMTIgMzQuMjg1MiAyNS40ODkyQzM0LjI0NTkgMjYuNTIyNSAzMy41Njc0IDI3LjUxMjQgMzIuNTY5MyAyNy45NjQ5QzI3LjkyNjcgMzAuMTg3MiAyMy4yODQyIDMyLjQwOTYgMTguNjQxNiAzNC42MzExQzE3Ljc0MDggMzUuMDc0NCAxNi42MTMyIDM1LjA4MzYgMTUuNzAxNiAzNC42NjAzQzExLjAyMzQgMzIuNDE4OCA2LjM0MzMzIDMwLjE4MDYgMS42NjQxOCAyNy45NDA3QzAuNjY2MDI3IDI3LjQ2NzQgLTAuMDA3MTQyMzEgMjYuNDQ3NSAwLjAwMDg5Mjg3MyAyNS40MDA5QzcuNDkxNjZlLTA4IDIwLjEyNTQgLTAuMDAwODkyODczIDE0Ljg0OTEgMC4wMDE3ODU1MiA5LjU3Mjc1Qy0wLjAwODkyODA2IDguNTA1MzIgMC42OTI4MTEgNy40NzAzOSAxLjcxOTUzIDcuMDA0NTlDNi4zNjIwOCA0Ljc4MjIzIDExLjAwNDYgMi41NTk4OCAxNS42NDgxIDAuMzM3NTI2QzE1Ljk4MjkgMC4xNzMzNyAxNi4zNDk4IDAuMDY4Mzc3MSAxNi43MjU3IDAuMDIyNTQ2OFpNMTYuNzQ1MyAyLjIxMTU3QzEyLjA0NjUgNC40NTY0MiA3LjM1MzA5IDYuNzA5NjEgMi42NTQyOSA4Ljk1Mjc5QzcuNDg3OSAxMS4zMjE4IDEyLjMxMjYgMTMuNzA0MSAxNy4xNDI2IDE2LjA3OUMyMS45NjgyIDEzLjY5ODMgMjYuODAxOCAxMS4zMzM1IDMxLjYyMzggOC45NDYxM0MyNi45MzU3IDYuNzE0NjEgMjIuMjU4NCA0LjQ2NDc1IDE3LjU3NDcgMi4yMjc0QzE3LjMyMTIgMi4xMDQwOCAxNy4wMDQyIDIuMTAwNzQgMTYuNzQ1MyAyLjIxMTU3Wk0yLjI4Mjg5IDExLjQxMzVDMi4yOTA5MiAxNS45MzgyIDIuMjg1NTYgMjAuNDYzNyAyLjI4NTU2IDI0Ljk4ODRDMi4yOTQ0OSAyNS4yNjM0IDIuMjM3MzUgMjUuNTczNCAyLjQyOTMgMjUuODA4NEMyLjU1OTY1IDI2LjAwMzMgMi44MDE2IDI2LjA4NDIgMy4wMDk2MiAyNi4xODY3QzcuMzM5NjkgMjguMjU5IDExLjY2ODkgMzAuMzMxNCAxNS45OTg5IDMyLjQwMjlDMTYuMDAxNiAyNy43MDMyIDE1Ljk5NjMgMjMuMDAyNyAxNi4wMDE2IDE4LjMwMjJDMTEuNDMxNCAxNi4wMDE1IDYuODUzMTIgMTMuNzE1IDIuMjgyODkgMTEuNDEzNVpNMTguMzk4OCAxOC4yNDIyQzE4LjQwMjQgMjIuOTQ1MiAxOC40MDE1IDI3LjY0ODIgMTguMzk5NyAzMi4zNTEzQzIyLjc3MjYgMzAuMjU1NiAyNy4xNDY0IDI4LjE2MjQgMzEuNTIxMSAyNi4wN0MzMS43OTc5IDI1Ljk1MjUgMzEuOTk4OCAyNS42ODU5IDMxLjk5NyAyNS4zOTkyQzMyLjAwMzIgMjAuNzM3IDMxLjk5MzQgMTYuMDc1NyAzMi4wMDIzIDExLjQxNDNDMjcuNDcwNSAxMy42OTQxIDIyLjkzMzMgMTUuOTY1NyAxOC4zOTg4IDE4LjI0MjJaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51X19uYXYtbGluay10ZXh0XCI+0KPQs9C+0LvRjDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfX25hdi1saW5rLWFyclwiPiBcbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiOVwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCA5IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEgMTVMNy45NDkxMSA3LjY3NEwxIDFcIiBzdHJva2VXaWR0aD1cIjEuNVwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvZGl2PjwvYT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudV9fY29udHJvbHNcIj4gXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnVfX2NvbnRyb2xzLWl0ZW1cIj4gPGEgY2xhc3NOYW1lPVwibWVudV9fY29udHJvbHMtbGlua1wiIGhyZWY9XCJcIj4gXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9fY29udHJvbHMtbGluay1pY29uXCI+IFxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIzNFwiIGhlaWdodD1cIjMxXCIgdmlld0JveD1cIjAgMCAzNCAzMVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNS44ODE0IDAuODE3ODIyQzE2LjU5ODEgMC42NjI2NjkgMTcuMzQyOCAwLjY2NDgyNCAxOC4wNjA5IDAuODA3NzY2QzE4LjgxOSAxLjAxNTM2IDE5LjUyMzcgMS40MTMzIDIwLjExNDMgMS45MzgzN0MyMC40ODI1IDIuMzMxMjkgMjAuODgxNiAyLjcxNzczIDIxLjExMzkgMy4yMTQ4QzIxLjU3MjkgMy45OTkxOSAyMS43OTMyIDQuOTI3MjMgMjEuNzYwMiA1LjgzODc2QzIyLjkyMDMgNi4wNjg2MiAyNC4wMjkgNi41MjYxOCAyNS4xOTA1IDYuNzYxMDZDMjYuMDg2IDcuMDEzOSAyNi45Nzg2IDcuMjgwMzkgMjcuODc0NyA3LjUzMTA4QzI4LjI2ODkgNy42MTcyOCAyOC42NjMxIDcuNzEwNjYgMjkuMDQzMyA3Ljg0NjQyQzI5LjI0NjcgNy45Mjc1OCAyOS4zNTM3IDguMTY4MjIgMjkuMjk0NiA4LjM3OTRDMjkuMjAyNCA4Ljc4OTU1IDI5LjA3MjEgOS4xOTAzNiAyOC45NzY0IDkuNjAwNTFDMjguOTI0MyA5LjgyNjA2IDI4LjY0OTEgOS44NTE5MiAyOC40Njg5IDkuNzgzNjhDMjcuNzgwNCA5LjU3ODk2IDI3LjA5MTIgOS4zNzQ5NiAyNi4zOTk5IDkuMTc5NTlDMjUuMjgyIDguOTI0NTkgMjQuMTk0NCA4LjU0ODIgMjMuMDgyOSA4LjI2NDQ3QzIyLjQzNjcgOC4xNDAyIDIxLjgxNzIgNy45MDk2MyAyMS4xODIyIDcuNzM4NjdDMjAuNzQzNiA4LjYyNTc3IDE5Ljk5ODkgOS4zMjAzNyAxOS4xNzAzIDkuODIyNDdDMTguMzU5MyAxMC4yMTI1IDE3LjQ1MiAxMC40NzYxIDE2LjU0ODggMTAuMzU1NEMxNS44NjU5IDEwLjI3OTMgMTUuMjAyOCAxMC4wNDQ0IDE0LjYwNDQgOS43MDI1MUMxMy43NDQyIDkuMTM5MzYgMTMuMDEyMSA4LjM0MTMzIDEyLjYxOTMgNy4zNjk0NkMxMi4zMDYgNi43MTQzNyAxMi4xOTYyIDUuOTc3MzkgMTIuMjMwNyA1LjI1MzM0QzExLjYzMjMgNS4wODE2NyAxMS4wMzY4IDQuODk5MjIgMTAuNDI5MyA0Ljc2NDlDOS41NTU2OCA0LjUyNzE0IDguNjkyNjMgNC4yNTIwMyA3LjgxNjkxIDQuMDIwNzRDNi44ODEzNSAzLjgwODEyIDUuOTcxMTQgMy40OTc4MSA1LjA0NTQ0IDMuMjQ3MTJDNC45MTQ1IDMuMjA1NDYgNC43NTE4OSAzLjE3OTYgNC42ODM2IDMuMDQwOTdDNC41ODk5OCAyLjgyMjYxIDQuNzA3NTQgMi41OTQxOSA0Ljc1NjExIDIuMzgwODVDNC44NjY2MyAyLjA1Njg5IDQuOTA2MDUgMS43MDQ5MyA1LjA2Mzc0IDEuNDAwMzdDNS4xOTYwOCAxLjE5OTk2IDUuNDUwMjEgMS4yOTc2NSA1LjYzMzk0IDEuMzQ3MjFDNi4wNTk4NCAxLjQ4MzY5IDYuNDk3NyAxLjU3NDIgNi45MzA2MyAxLjY4MzM4QzcuOTI0NjEgMS45Njk5OCA4LjkxMDg2IDIuMjg4OTEgOS45MTk2MiAyLjUxNzMzQzEwLjg4MTIgMi43Nzg3OSAxMS44MjY2IDMuMTA3MDUgMTIuNzk5NSAzLjMxOTY3QzEzLjQzNDUgMi4xMDIxNSAxNC41ODQgMS4xOTA2MiAxNS44ODE0IDAuODE3ODIyWk0xNi4zNjkzIDIuNzYwMTFDMTUuNjczMSAyLjkwNjY1IDE1LjAyMDUgMy4yOTY2OSAxNC42NDI1IDMuOTI1MkMxNC4xNzE1IDQuNjcxNTIgMTQuMTM3IDUuNjI2MTQgMTQuMzI5MiA2LjQ3MTU4QzE0LjYyMiA3LjQ2Nzg3IDE1LjUzNzkgOC4yMjEzNyAxNi41NDMxIDguMzUxMzhDMTcuMTE1NSA4LjQxODE5IDE3LjcxNzMgOC4zNjkzNCAxOC4yNDExIDguMTA2NDRDMTkuMDE2OCA3LjczOTM5IDE5LjYwODIgNi45NjI5IDE5LjcxMzggNi4wOTA4OEMxOS44NDc1IDUuNTg4NzkgMTkuNzI5MiA1LjA3MjMzIDE5LjYyNjUgNC41Nzc0MkMxOS40ODk5IDQuMDkzMjggMTkuMTgxNiAzLjY3Mzc5IDE4LjgyNCAzLjMzNDc2QzE4LjE0NjggMi43NzAxNyAxNy4yMTgyIDIuNTk4NSAxNi4zNjkzIDIuNzYwMTFaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk02LjY0MjA4IDUuNTM4NDlDNi43NjgwOSA1LjQ4NjA2IDYuOTA4MTggNS40OTMyNCA3LjA0MTkzIDUuNDg5NjVDNy42OTczMSA1LjQ5MjUyIDguMzUyNjkgNS40OTI1MiA5LjAwODA4IDUuNDg5NjVDOS4xNjQzNiA1LjQ5MjUyIDkuMzI2OTcgNS40ODc0OSA5LjQ3NTUgNS41NDQyNEM5LjYxMTM3IDUuNjQyNjUgOS42ODAzNiA1LjgwNDk4IDkuNzY2MjQgNS45NDUwNUMxMC4wOTI5IDYuNTYxMzYgMTAuNDYxIDcuMTUyNTIgMTAuODIwMSA3Ljc0ODcxQzExLjAxOTMgOC4xOTQwNiAxMS4zMDUxIDguNTg4NDEgMTEuNTQ3MiA5LjAwODYxQzExLjg4MDIgOS42ODc0MSAxMi4zMyAxMC4yOTY1IDEyLjY2MTYgMTAuOTc1M0MxMi44NjY1IDExLjMzNjYgMTMuMDk5NSAxMS42ODE0IDEzLjI5MjQgMTIuMDQ5OUMxMy41NjQxIDEyLjU3NjQgMTMuOTAwNiAxMy4wNjM0IDE0LjE4MTQgMTMuNTg0OUMxNC40MTk0IDE0LjAxMyAxNC42NjMgMTQuNDM4MyAxNC45MjkgMTQuODQ5OUMxNS4wNjcgMTUuMTI3OCAxNS4yMTkxIDE1LjM5NzkgMTUuMzc5NiAxNS42NjNDMTUuNTg1OCAxNi4wNjU5IDE1Ljg5NTYgMTYuNDE0MyAxNi4wMTc0IDE2Ljg1ODlDMTYuMTQzNCAxNy40MjU3IDE2LjA3MDkgMTguMDA4MiAxNi4wNDc2IDE4LjU4MjJDMTUuOTIwOSAxOS42NTk2IDE1LjUxMjYgMjAuNjc4OSAxNS4wMDc5IDIxLjYyNjNDMTQuMzM5OCAyMi43NDQ3IDEzLjQzNjcgMjMuNzE1MSAxMi4zNjg4IDI0LjQ0MjhDMTEuODA5MSAyNC43Njk2IDExLjI0MTcgMjUuMDg5MyAxMC42MzkxIDI1LjMyNjNDOS42Mjk2NyAyNS42MTE1IDguNTgwNzggMjUuODQ5OSA3LjUyNzY2IDI1Ljc0MDhDNi45NDgzIDI1LjcxMiA2LjM4MTYyIDI1LjU3NTYgNS44MjMzOCAyNS40MjRDNS4wMzc3NyAyNS4yNDUxIDQuMzQ0MzcgMjQuODA3NyAzLjY1NjYxIDI0LjQwMDRDMy4xNjU5NSAyNC4wNDc3IDIuNjkyODkgMjMuNjY0MSAyLjI3MjYzIDIzLjIyNDVDMS4xNjk1MyAyMi4wNDE1IDAuMzk4Njk5IDIwLjU0MDIgMC4wODU0MzkxIDE4LjkzNzdDMC4wMzQwNTAzIDE4LjI0NiAtMC4wNzY0NzA3IDE3LjU0MTMgMC4wODI2MjMyIDE2Ljg1NTRDMC4xMjYyNjggMTYuNTQ1IDAuMzQxNjc5IDE2LjMxMDIgMC40ODQ1ODIgMTYuMDQ1MUMwLjcwNDkyIDE1LjY0NjUgMC45Njg5MDMgMTUuMjczNyAxLjE0OTEyIDE0Ljg1MzRDMS4zMzQyNiAxNC41NjY4IDEuNTI0MzIgMTQuMjgyNCAxLjY4MjAxIDEzLjk3NzhDMi4wMzE4OCAxMy4yOTI2IDIuNDcyNTUgMTIuNjYxMiAyLjgzMjk4IDExLjk4MTdDMy4zMzQ5IDExLjExMDQgMy44MzgyMyAxMC4yNDA1IDQuMzQ3MTkgOS4zNzI3OUM0LjU5MTQ2IDguODY0MjMgNC45MzE0NyA4LjQxMjQyIDUuMTg5ODIgNy45MTE3NkM1LjQ4MzM3IDcuMzQzNTkgNS44NDAyOCA2LjgxMzQ4IDYuMTUxNDIgNi4yNTYwOEM2LjI5NzE0IDYuMDA3NTQgNi40MDY5NiA1LjcxNTE5IDYuNjQyMDggNS41Mzg0OVpNNy43MDc4NyA3LjQ5NTg3QzcuMzA2NjIgOC4yNTE1MiA2Ljg0MjAxIDguOTY5MTEgNi40NDQ5NyA5LjcyNjJDNi4xMTY5MyAxMC4yNjI4IDUuNzkxIDEwLjgwMDggNS41MTE1MyAxMS4zNjU0QzUuMDM1NjYgMTIuMDIyNiA0LjczMDg0IDEyLjc4NjIgNC4yNjgzNCAxMy40NTM1QzMuNzgzMzIgMTQuMzM3IDMuMjQ0MDkgMTUuMTg3NSAyLjc2MTg4IDE2LjA3MjRDNi4yODc5OSAxNi4wNzI0IDkuODE0MTEgMTYuMDcyNCAxMy4zNDAyIDE2LjA3MTdDMTMuMjU5MyAxNS45NTAzIDEzLjE3MjcgMTUuODMzMiAxMy4wOTY3IDE1LjcwODJDMTIuNzUxNyAxNSAxMi4zMDEyIDE0LjM1MTMgMTEuOTM4NiAxMy42NTE3QzExLjUzMDQgMTMuMDA3NCAxMS4xNzk4IDEyLjMyNzkgMTAuNzg1NiAxMS42NzVDMTAuNTI1MSAxMS4zMDUgMTAuMzU5NyAxMC44NzkxIDEwLjExMDUgMTAuNTAyN0M5LjUzNzQ1IDkuNDkyNzUgOC45MzI3NSA4LjUwMjIxIDguMzYyNTUgNy40OTA4NEM4LjE0NDMyIDcuNDg5NCA3LjkyNjEgNy40OTQ0MyA3LjcwNzg3IDcuNDk1ODdaTTEuOTc2MjYgMTguMDgzN0MyLjAzODkyIDE4Ljc5MTkgMi4yNDQ0NyAxOS40Nzg2IDIuNDc3NDggMjAuMTQ1OUMyLjg3OTQ0IDIwLjk5NTcgMy40MjA3OCAyMS43OTY2IDQuMTU5MjMgMjIuMzc4NEM0LjY0OTg5IDIyLjg0MTcgNS4yNzAwNyAyMy4xMDY3IDUuODc0MDcgMjMuMzc0N0M3LjE3OTkgMjMuODU4OCA4LjY0NzY1IDIzLjg4OSA5Ljk3MDM4IDIzLjQ1NDRDMTAuNTk3NiAyMy4yMjYgMTEuMjI3NiAyMi45NjI0IDExLjc0NDQgMjIuNTI0MkMxMi4zMjM3IDIyLjA5MDMgMTIuODE3MiAyMS41NDE2IDEzLjE5NDUgMjAuOTE4MUMxMy43NDA4IDIwLjA3NjkgMTMuOTk3IDE5LjA3MzUgMTQuMTEwMyAxOC4wODA4QzEwLjA2NTQgMTguMDg1OCA2LjAyMTE5IDE4LjA4MDggMS45NzYyNiAxOC4wODM3WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjQuNTIxNiAxMC4zNTY0QzI0LjcxNTIgMTAuMjc5NiAyNC45Mjc4IDEwLjMwMjYgMjUuMTMxMyAxMC4yOTgzQzI1LjgxMDYgMTAuMzA3NiAyNi40OTA2IDEwLjI4ODkgMjcuMTY5OSAxMC4zMDYyQzI3LjM2MzUgMTAuMjk3NSAyNy41MDI5IDEwLjQ1MDUgMjcuNTk3OSAxMC42MDQzQzI3Ljg5MDcgMTEuMDgxMiAyOC4xMjMxIDExLjU5NDggMjguNDQ0OCAxMi4wNTM4QzI4Ljc2NDQgMTIuNjI5MiAyOS4wNzM0IDEzLjIxMDMgMjkuNDI2OCAxMy43NjU1QzI5LjczMDkgMTQuMzUwMiAzMC4wODQzIDE0LjkwNTUgMzAuNDE1MSAxNS40NzQ0QzMwLjc0NzQgMTYuMTMxNiAzMS4xNzY4IDE2LjczMTQgMzEuNTA3NyAxNy4zOTAxQzMxLjk4NzggMTguMTcwOSAzMi40MDg3IDE4Ljk4NzYgMzIuODk4IDE5Ljc2MzNDMzMuMTk0MyAyMC4zODE4IDMzLjYyNzMgMjAuOTIyNyAzMy44ODYzIDIxLjU2MDVDMzQuMDI4NSAyMi4wNjQ4IDM0LjAxNDQgMjIuNTk2MyAzMy45NjMgMjMuMTEzNUMzMy45MTA5IDI0LjM2ODQgMzMuMzk1IDI1LjU0MjggMzIuODA4NiAyNi42MjY3QzMyLjM4MDYgMjcuMjU2NyAzMS45MTAzIDI3Ljg2MjIgMzEuMzUwNyAyOC4zNzY1QzMwLjg5OCAyOC44MzY5IDMwLjM1MTggMjkuMTgyNCAyOS44MTM5IDI5LjUyNzlDMjguNzk0NiAzMC4wNTY2IDI3LjY5MzYgMzAuNTEzNSAyNi41MzU2IDMwLjUzMTRDMjUuOTUyMSAzMC41Nzk1IDI1LjM2NTcgMzAuNTQgMjQuNzg0MiAzMC40ODk4QzIzLjk5MDEgMzAuMzU4MyAyMy4yMjY0IDMwLjA3ODIgMjIuNDk2NCAyOS43Mzc3QzIxLjkwMTUgMjkuNDc4NCAyMS4zOTQ3IDI5LjA1OTYgMjAuODcwMiAyOC42ODMyQzIwLjUzMyAyOC4zNzUxIDIwLjIxMjcgMjguMDQ2OCAxOS45MDUxIDI3LjcwNzhDMTkuNjk2NyAyNy40NDU2IDE5LjQ5NzUgMjcuMTc0OCAxOS4yODc3IDI2LjkxMzNDMTguNzA2MyAyNS45OTMyIDE4LjI1NjUgMjQuOTc2MSAxOC4wMjYzIDIzLjkwMzZDMTcuOTE3MiAyMy4xOTA0IDE3Ljg1MzEgMjIuNDU0OCAxNy45NjQzIDIxLjczNzJDMTguMTkxIDIxLjA0NzcgMTguNjQ2NCAyMC40NzMgMTguOTczOCAxOS44MzNDMTkuMjc0NCAxOS4yNjI3IDE5LjY2MzcgMTguNzQyNiAxOS45MjM0IDE4LjE1MDdDMjAuMjM1MyAxNy43MDgzIDIwLjQ5NjQgMTcuMjMyIDIwLjc0MjEgMTYuNzQ4NkMyMS4wNDA2IDE2LjI3OTYgMjEuMzMyNyAxNS44MDU1IDIxLjU4NjkgMTUuMzA5OUMyMi4zODAyIDEzLjk4NiAyMy4xMjU3IDEyLjYzMzUgMjMuOTE2OSAxMS4zMDc1QzI0LjExNCAxMC45OTA3IDI0LjIzNjUgMTAuNjAzNSAyNC41MjE2IDEwLjM1NjRaTTI1LjY0MDIgMTIuMjgyOUMyNS4zMTk5IDEyLjgyMjQgMjUuMDIgMTMuMzc0IDI0LjY4OTkgMTMuOTA4NUMyNC40NzE3IDE0LjI0MSAyNC4zMzc5IDE0LjYyMzkgMjQuMTAxNCAxNC45NDQyQzIzLjgzMTEgMTUuMzMzNiAyMy42NDY2IDE1Ljc3NDYgMjMuMzk1MyAxNi4xNzYxQzIzLjIwMDMgMTYuNTI1OSAyMi45NzE1IDE2Ljg1NDIgMjIuNzg2NCAxNy4yMDk4QzIyLjQ4NzIgMTcuNzYyMSAyMi4xMzAzIDE4LjI4MTUgMjEuODYwNyAxOC44NTA0QzIxLjQyNDkgMTkuNTAxMiAyMS4wODM1IDIwLjIwODcgMjAuNjY2MSAyMC44NzAyQzI0LjE5MDggMjAuODYwMiAyNy43MTYyIDIwLjg2ODggMzEuMjQwOSAyMC44NjU5QzMwLjg3MzQgMjAuMzMyMiAzMC42Mjk4IDE5LjcyMjQgMzAuMjQ5NyAxOS4xOTczQzI5Ljk0MzUgMTguNTg2OCAyOS41ODM4IDE4LjAwNzEgMjkuMjMzMiAxNy40MjMxQzI5LjAyMTMgMTYuOTgyOCAyOC43NDI1IDE2LjU4MjcgMjguNTAyNSAxNi4xNTg5QzI3Ljc4NzMgMTQuODc2NyAyNy4wMTcxIDEzLjYyNjkgMjYuMzA5NyAxMi4zNDA0QzI2LjA4NzIgMTIuMzExNyAyNS44NjQxIDEyLjI4OCAyNS42NDAyIDEyLjI4MjlaTTE5Ljg3NDggMjIuODY4NkMxOS45MzU0IDIzLjI3MTUgMTkuOTg3NSAyMy42NzgxIDIwLjA5ODcgMjQuMDcxQzIwLjQxMTMgMjUuMzM2NyAyMS4xNjU5IDI2LjQ3MDEgMjIuMTcxMSAyNy4yNzE4QzIyLjY4OTIgMjcuNjM5NSAyMy4yMjA3IDI4LjAxMzggMjMuODM4OCAyOC4xODE4QzI1LjExNjUgMjguNjQwOCAyNi41MzkyIDI4LjY4MzIgMjcuODMwMiAyOC4yNTM3QzI4LjU4MiAyOC4wODcgMjkuMjI2MSAyNy42MzgxIDI5Ljg0MDcgMjcuMTg4NEMzMC42MDggMjYuNTYwNiAzMS4xOTcyIDI1LjcyMDkgMzEuNTgzIDI0LjgwMDhDMzEuNzk0MiAyNC4xNzU5IDMxLjk1ODkgMjMuNTMwMSAzMi4wMjE1IDIyLjg3QzI3Ljk3MjQgMjIuODcyMiAyMy45MjQgMjIuODc1NyAxOS44NzQ4IDIyLjg2ODZaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51X19jb250cm9scy1saW5rLXRleHRcIj7QuNC30LHRgNCw0L3QvdC+0LU8L2Rpdj48L2E+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudV9fY29udHJvbHMtaXRlbVwiPiA8YSBjbGFzc05hbWU9XCJtZW51X19jb250cm9scy1saW5rXCIgaHJlZj1cIlwiPiBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51X19jb250cm9scy1saW5rLWljb25cIj4gXG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzFcIiB2aWV3Qm94PVwiMCAwIDMwIDMxXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExLjgwMTggNC4wODUzNkMxMC44NTIzIDUuODIwMTUgMTAuMzEyNSA3LjgxMTE1IDEwLjMxMjUgOS45MjgyMkMxMC4zMTI1IDE2LjY1OTIgMTUuNzY5IDIyLjExNTcgMjIuNSAyMi4xMTU3QzIzLjk1MTkgMjIuMTE1NyAyNS4zNDQ0IDIxLjg2MTggMjYuNjM1NyAyMS4zOTYxQzI0LjU2NjUgMjUuMTc2OCAyMC41NTE0IDI3Ljc0MDcgMTUuOTM3NSAyNy43NDA3QzkuMjA2NTMgMjcuNzQwNyAzLjc1IDIyLjI4NDIgMy43NSAxNS41NTMyQzMuNzUgMTAuMjc0MSA3LjEwNjQ3IDUuNzc4OTQgMTEuODAxOCA0LjA4NTM2WlwiIHN0cm9rZVdpZHRoPVwiMS44XCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51X19jb250cm9scy1saW5rLXRleHRcIj7QvdC+0YfQvdC+0Lkg0YDQtdC20LjQvDwvZGl2PjwvYT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudV9fcGFnZS1uYXZcIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudV9fcGFnZS1uYXYtaXRlbVwiPiA8YSBjbGFzc05hbWU9XCJtZW51X19wYWdlLW5hdi1saW5rXCIgaHJlZj1cIlwiPtCU0L7RgdGC0LDQstC60LAg0Lgg0L7Qv9C70LDRgtCwPC9hPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnVfX3BhZ2UtbmF2LWl0ZW1cIj4gPGEgY2xhc3NOYW1lPVwibWVudV9fcGFnZS1uYXYtbGlua1wiIGhyZWY9XCJcIj7QkdC70L7QszwvYT48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51X19wYWdlLW5hdi1pdGVtXCI+IDxhIGNsYXNzTmFtZT1cIm1lbnVfX3BhZ2UtbmF2LWxpbmtcIiBocmVmPVwiXCI+0JrQvtC90YLQsNC60YLRizwvYT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwic29jaWFsc1wiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzb2NpYWxzX19pdGVtXCI+PGEgY2xhc3NOYW1lPVwic29jaWFsc19faXRlbS1saW5rXCIgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMTggMThcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTkgMThDMTMuOTcwNSAxOCAxOCAxMy45NzA1IDE4IDlDMTggNC4wMjk0NSAxMy45NzA1IDAgOSAwQzQuMDI5NDUgMCAwIDQuMDI5NDUgMCA5QzAgMTMuOTcwNSA0LjAyOTQ1IDE4IDkgMThaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMy4zNTE2MiA5LjQ0MDI2QzQuNDAzNzEgOC44NjA3NCA1LjU3ODEzIDguMzc3MDYgNi42NzU0NiA3Ljg5MDkxQzguNTYzMjggNy4wOTQ2NCAxMC40NTg2IDYuMzEyMTYgMTIuMzczMSA1LjU4MzY5QzEyLjc0NTUgNS40NTk1NiAxMy40MTQ4IDUuMzM4MTggMTMuNDgwNCA1Ljg5MDE4QzEzLjQ0NDUgNi42NzE1MyAxMy4yOTY3IDcuNDQ4MyAxMy4xOTUzIDguMjI1MDhDMTIuOTM3OSA5LjkzMzI4IDEyLjY0MDUgMTEuNjM1NiAxMi4zNTA0IDEzLjMzODJDMTIuMjUwNSAxMy45MDUzIDExLjU0IDE0LjE5ODkgMTEuMDg1NSAxMy44MzZDOS45OTMwMSAxMy4wOTgxIDguODkyMTYgMTIuMzY3MyA3LjgxMzY2IDExLjYxMjNDNy40NjAzNyAxMS4yNTMzIDcuNzg3OTcgMTAuNzM3OCA4LjEwMzUgMTAuNDgxNUM5LjAwMzI3IDkuNTk0NzMgOS45NTc1IDguODQxMzUgMTAuODEwMiA3LjkwODhDMTEuMDQwMyA3LjM1MzMxIDEwLjM2MDYgNy44MjE0NiAxMC4xMzY0IDcuOTY0OUM4LjkwNDY1IDguODEzNzUgNy43MDMgOS43MTQ0MyA2LjQwNDMgMTAuNDYwNUM1Ljc0MDkyIDEwLjgyNTYgNC45Njc3NSAxMC41MTM2IDQuMzA0NjcgMTAuMzA5OEMzLjcxMDE0IDEwLjA2MzYgMi44Mzg5MyA5LjgxNTY0IDMuMzUxNTYgOS40NDAzTDMuMzUxNjIgOS40NDAyNlpcIiBmaWxsPVwiIzFCMUIxQlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+PC9hPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNvY2lhbHNfX2l0ZW1cIj48YSBjbGFzc05hbWU9XCJzb2NpYWxzX19pdGVtLWxpbmtcIiBocmVmPVwiXCI+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAxOCAxOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTQuODg0MiA0LjE5NTgzQzE0Ljg4NDIgNC43OTIzNiAxNC40MDA2IDUuMjc1ODMgMTMuODA0MiA1LjI3NTgzQzEzLjIwNzggNS4yNzU4MyAxMi43MjQyIDQuNzkyMzYgMTIuNzI0MiA0LjE5NTgzQzEyLjcyNDIgMy41OTkzIDEzLjIwNzggMy4xMTU4MyAxMy44MDQyIDMuMTE1ODNDMTQuNDAwNyAzLjExNTgzIDE0Ljg4NDIgMy41OTkzIDE0Ljg4NDIgNC4xOTU4M1pNOSAxMkM3LjM0MzE2IDEyIDYuMDAwMDUgMTAuNjU2OCA2LjAwMDA1IDlDNi4wMDAwNSA3LjM0MzE2IDcuMzQzMTYgNi4wMDAwNSA5IDYuMDAwMDVDMTAuNjU2OCA2LjAwMDA1IDEyIDcuMzQzMTYgMTIgOUMxMiAxMC42NTY4IDEwLjY1NjggMTIgOSAxMlpNOSA0LjM3ODM2QzYuNDQ3NTIgNC4zNzgzNiA0LjM3ODM2IDYuNDQ3NTIgNC4zNzgzNiA5QzQuMzc4MzYgMTEuNTUyNSA2LjQ0NzUyIDEzLjYyMTYgOSAxMy42MjE2QzExLjU1MjUgMTMuNjIxNiAxMy42MjE2IDExLjU1MjUgMTMuNjIxNiA5QzEzLjYyMTYgNi40NDc1MiAxMS41NTI1IDQuMzc4MzYgOSA0LjM3ODM2Wk05IDEuNjIxNjlDMTEuNDAzMSAxLjYyMTY5IDExLjY4NzggMS42MzA4MyAxMi42MzY3IDEuNjc0MTRDMTMuNTE0MiAxLjcxNDIyIDEzLjk5MDggMS44NjA3NSAxNC4zMDc5IDEuOTg0MDhDMTQuNzI3OSAyLjE0NzM0IDE1LjAyNzcgMi4zNDIzOSAxNS4zNDI3IDIuNjU3MzlDMTUuNjU3NyAyLjk3MjI1IDE1Ljg1MjggMy4yNzIwNiAxNi4wMTYxIDMuNjkyMjVDMTYuMTM5MiA0LjAwOTM2IDE2LjI4NTkgNC40ODU5NCAxNi4zMjYgNS4zNjM0NEMxNi4zNjkzIDYuMzEyNTIgMTYuMzc4NSA2LjU5NzE0IDE2LjM3ODUgOS4wMDAyOEMxNi4zNzg1IDExLjQwMzQgMTYuMzY5MyAxMS42ODggMTYuMzI2IDEyLjYzN0MxNi4yODU5IDEzLjUxNDUgMTYuMTM5NCAxMy45OTExIDE2LjAxNjEgMTQuMzA4MkMxNS44NTI4IDE0LjcyODIgMTUuNjU3NyAxNS4wMjggMTUuMzQyNyAxNS4zNDNDMTUuMDI3OSAxNS42NTggMTQuNzI4MSAxNS44NTMxIDE0LjMwNzkgMTYuMDE2M0MxMy45OTA4IDE2LjEzOTUgMTMuNTE0MiAxNi4yODYyIDEyLjYzNjcgMTYuMzI2M0MxMS42ODc4IDE2LjM2OTYgMTEuNDAzMSAxNi4zNzg3IDkgMTYuMzc4N0M2LjU5NjcyIDE2LjM3ODcgNi4zMTIwOSAxNi4zNjk2IDUuMzYzMTYgMTYuMzI2M0M0LjQ4NTY2IDE2LjI4NjIgNC4wMDkwOCAxNi4xMzk3IDMuNjkxOTcgMTYuMDE2M0MzLjI3MTkyIDE1Ljg1MzEgMi45NzIxMSAxNS42NTggMi42NTcxMSAxNS4zNDNDMi4zNDIyNSAxNS4wMjgyIDIuMTQ3MDYgMTQuNzI4NCAxLjk4MzggMTQuMzA4MkMxLjg2MDYxIDEzLjk5MTEgMS43MTM5NCAxMy41MTQ1IDEuNjczODYgMTIuNjM3QzEuNjMwNTUgMTEuNjg3OSAxLjYyMTQxIDExLjQwMzMgMS42MjE0MSA5LjAwMDI4QzEuNjIxNDEgNi41OTcxNCAxLjYzMDU1IDYuMzEyNTIgMS42NzM4NiA1LjM2MzQ0QzEuNzEzOTQgNC40ODU5NCAxLjg2MDQ3IDQuMDA5MzYgMS45ODM4IDMuNjkyMjVDMi4xNDcwNiAzLjI3MjIgMi4zNDIxMSAyLjk3MjM5IDIuNjU3MTEgMi42NTczOUMyLjk3MTk3IDIuMzQyMzkgMy4yNzE3OCAyLjE0NzM0IDMuNjkxOTcgMS45ODQwOEM0LjAwOTA4IDEuODYwODkgNC40ODU2NiAxLjcxNDIyIDUuMzYzMTYgMS42NzQxNEM2LjMxMjIzIDEuNjMwODMgNi41OTY4NiAxLjYyMTY5IDkgMS42MjE2OVpNOSAwQzYuNTU1OCAwIDYuMjQ5MjMgMC4wMTA0MDYzIDUuMjg5MzMgMC4wNTQxNDA2QzQuMzMxMzkgMC4wOTc4NzUgMy42NzcwNiAwLjI1MDAzMSAzLjEwNDcyIDAuNDcyNUMyLjUxMjgzIDAuNzAyNDIyIDIuMDEwOTQgMS4wMTAyNSAxLjUxMDU5IDEuNTEwNTlDMS4wMTAyNSAyLjAxMDk0IDAuNzAyNDIyIDIuNTEyODMgMC40NzI1IDMuMTA0NzJDMC4yNTAwMzEgMy42NzcyIDAuMDk3ODc1IDQuMzMxMzkgMC4wNTQxNDA2IDUuMjg5MzNDMC4wMTA0MDYzIDYuMjQ5MjMgMCA2LjU1NTggMCA5QzAgMTEuNDQ0MiAwLjAxMDQwNjMgMTEuNzUwOCAwLjA1NDE0MDYgMTIuNzEwN0MwLjA5Nzg3NSAxMy42Njg2IDAuMjUwMDMxIDE0LjMyMjggMC40NzI1IDE0Ljg5NTNDMC43MDI0MjIgMTUuNDg3MiAxLjAxMDI1IDE1Ljk4OTEgMS41MTA1OSAxNi40ODk0QzIuMDEwOTQgMTYuOTg5NyAyLjUxMjgzIDE3LjI5NzQgMy4xMDQ3MiAxNy41Mjc1QzMuNjc3MiAxNy43NSA0LjMzMTM5IDE3LjkwMjEgNS4yODkzMyAxNy45NDU5QzYuMjQ5MjMgMTcuOTg5NiA2LjU1NTggMTggOSAxOEMxMS40NDQyIDE4IDExLjc1MDggMTcuOTg5NiAxMi43MTA3IDE3Ljk0NTlDMTMuNjY4NiAxNy45MDIxIDE0LjMyMjggMTcuNzUgMTQuODk1MyAxNy41Mjc1QzE1LjQ4NzIgMTcuMjk3NCAxNS45ODkxIDE2Ljk4OTcgMTYuNDg5NCAxNi40ODk0QzE2Ljk4OTcgMTUuOTg5MSAxNy4yOTc0IDE1LjQ4NzIgMTcuNTI3NSAxNC44OTUzQzE3Ljc1IDE0LjMyMjggMTcuOTAyMSAxMy42Njg2IDE3Ljk0NTkgMTIuNzEwN0MxNy45ODk2IDExLjc1MDggMTggMTEuNDQ0MiAxOCA5QzE4IDYuNTU1OCAxNy45ODk2IDYuMjQ5MjMgMTcuOTQ1OSA1LjI4OTMzQzE3LjkwMjEgNC4zMzEzOSAxNy43NSAzLjY3NzIgMTcuNTI3NSAzLjEwNDcyQzE3LjI5NzQgMi41MTI4MyAxNi45ODk3IDIuMDEwOTQgMTYuNDg5NCAxLjUxMDU5QzE1Ljk4OTEgMS4wMTAyNSAxNS40ODcyIDAuNzAyNTYzIDE0Ljg5NTMgMC40NzI1QzE0LjMyMjggMC4yNTAwMzEgMTMuNjY4NiAwLjA5Nzg3NSAxMi43MTA3IDAuMDU0MTQwNkMxMS43NTA4IDAuMDEwNDA2MyAxMS40NDQyIDAgOSAwWlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+PC9hPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNvY2lhbHNfX2l0ZW1cIj48YSBjbGFzc05hbWU9XCJzb2NpYWxzX19pdGVtLWxpbmtcIiBocmVmPVwiXCI+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI5XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDkgMThcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUuNzg1NzEgMThWOS45OTk5N0g4LjM1NzE0TDkgNi42NjY2NEg1Ljc4NTcxVjUuMzMzMzFDNS43ODU3MSAzLjk5OTk5IDYuNDI5ODMgMy4zMzMzMiA3LjcxNDI4IDMuMzMzMzJIOVYwQzguMzU3MTQgMCA3LjU1OTk1IDAgNi40Mjg1NyAwQzQuMDY2MDYgMCAyLjU3MTQzIDEuOTIwNjUgMi41NzE0MyA0LjY2NjY1VjYuNjY2NjRIMFY5Ljk5OTk3SDIuNTcxNDNWMTcuOTk5OUw1Ljc4NTcxIDE4WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+PC9hPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNvY2lhbHNfX2l0ZW1cIj48YSBjbGFzc05hbWU9XCJzb2NpYWxzX19pdGVtLWxpbmtcIiBocmVmPVwiXCI+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyMiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjEuNzg4IDMuMDg1NUMyMS43MjM0IDIuMzY0NjYgMjEuNDA3IDEuNjg5NjEgMjAuODk0MiAxLjE3ODg2QzIwLjM4MTQgMC42NjgxMDggMTkuNzA1MiAwLjM1NDMwNCAxOC45ODQxIDAuMjkyNTM0QzE3LjI1OTcgMC4xNDk0NDYgMTQuNzAzOCAwIDExLjU1MDEgMEM3Ljc1MjM3IDAgNC44ODU2MiAwLjE1NTE1NSAzLjAzMjI1IDAuMzAwNjUyQzIuMzA3NzcgMC4zNTg4NTQgMS42MjcyMyAwLjY3MTQ0NyAxLjExMTA1IDEuMTgzMTJDMC41OTQ4NjQgMS42OTQ3OSAwLjI3NjMwOSAyLjM3MjU2IDAuMjExNzUgMy4wOTY1QzAuMDk4Mjk2MSA0LjI5MDIzIDAgNS44NjY3OSAwIDcuNzQ2NTNDMCA5LjU3OTQ4IDAuMDk3NDgxOSAxMS4xMjgyIDAuMjEwNDA4IDEyLjMwNzFDMC4yNzU2MTIgMTMuMDMwNCAwLjU5NDQzNSAxMy43MDczIDEuMTEwNTIgMTQuMjE4M0MxLjYyNjYxIDE0LjcyOTIgMi4zMDY3MiAxNS4wNDEzIDMuMDMwNjMgMTUuMDk5MkM0Ljg4MzkzIDE1LjI0NDcgNy43NTEyMyAxNS40IDExLjU1MDEgMTUuNEMxNC43MDM4IDE1LjQgMTcuMjU5NyAxNS4yNTA2IDE4Ljk4NDEgMTUuMTA3NEMxOS43MDUyIDE1LjA0NTcgMjAuMzgxNSAxNC43MzE5IDIwLjg5NDIgMTQuMjIxMUMyMS40MDcgMTMuNzEwNCAyMS43MjM1IDEzLjAzNTMgMjEuNzg4IDEyLjMxNDVDMjEuOTAxNiAxMS4xMjcgMjIgOS41NjEwOCAyMiA3LjdDMjIgNS44Mzg5MiAyMS45MDE2IDQuMjcyOTcgMjEuNzg4IDMuMDg1NVpNOC41NTM1MyAxMC45MzI3VjQuNDY3MzRMMTQuOTMxNCA3LjdMOC41NTM1MyAxMC45MzI3WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+PC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgY2FydC1wYW5lbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsX19oZWFkZXJcIj4gXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbF9fY2xvc2UtYnRuXCI+IFxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTdcIiB2aWV3Qm94PVwiMCAwIDE3IDE3XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgIDxyZWN0IHk9XCIxNS41NTYyXCIgd2lkdGg9XCIyMlwiIGhlaWdodD1cIjJcIiByeD1cIjFcIiB0cmFuc2Zvcm09XCJyb3RhdGUoLTQ1IDAgMTUuNTU2MilcIj48L3JlY3Q+XG4gICAgICAgICAgICAgIDxyZWN0IHg9XCIxLjQxNDA2XCIgd2lkdGg9XCIyMlwiIGhlaWdodD1cIjJcIiByeD1cIjFcIiB0cmFuc2Zvcm09XCJyb3RhdGUoNDUgMS40MTQwNiAwKVwiPjwvcmVjdD5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWxfX3RpdGxlXCI+0JfQsNC60YDRi9GC0Ywg0LrQvtGA0LfQuNC90YM8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1saXN0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1saXN0X19pdGVtLWltZ1wiPiA8aW1nIHNyYz1cInN0YXRpYy9pbWcvcHJvZHVjdC1pbWctMS5qcGdcIiBhbHQ9XCJcIiAvPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWxpc3RfX2l0ZW0tY29udGVudFwiPiBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWxpc3RfX2l0ZW0tdGl0bGVcIj7Qo9Cz0L7Qu9GMIE9hc2lzIFByZW1pdW0gQ29hbHVzIDI10LzQvDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtbGlzdF9faXRlbS1hbW91bnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtbGlzdF9faXRlbS1hbW91bnQtYnRuLXN1YlwiPlxuICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMlwiIHZpZXdCb3g9XCIwIDAgMTIgMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGluZSB5MT1cIjFcIiB4Mj1cIjEyXCIgeTI9XCIxXCIgc3Ryb2tlV2lkdGg9XCIyXCI+PC9saW5lPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhcnQtbGlzdF9faXRlbS1hbW91bnQtaW5wdXRcIiB0eXBlPVwibnVtYmVyXCIgdmFsdWU9XCIxXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtbGlzdF9faXRlbS1hbW91bnQtYnRuLWFkZFwiPlxuICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiB2aWV3Qm94PVwiMCAwIDEyIDEyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5lIHkxPVwiNlwiIHgyPVwiMTJcIiB5Mj1cIjZcIiBzdHJva2VXaWR0aD1cIjJcIj48L2xpbmU+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiNlwiIHgyPVwiNlwiIHkyPVwiMTJcIiBzdHJva2VXaWR0aD1cIjJcIj48L2xpbmU+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1saXN0X19pdGVtLXByaWNlXCI+MTUgOTAwINCz0YDQvTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtbGlzdF9faXRlbS1kZWxldGUtYnRuXCI+IFxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxN1wiIHZpZXdCb3g9XCIwIDAgMTcgMTdcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICA8cmVjdCB5PVwiMTUuNTU2MlwiIHdpZHRoPVwiMjJcIiBoZWlnaHQ9XCIyXCIgcng9XCIxXCIgdHJhbnNmb3JtPVwicm90YXRlKC00NSAwIDE1LjU1NjIpXCI+PC9yZWN0PlxuICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIxLjQxNDA2XCIgd2lkdGg9XCIyMlwiIGhlaWdodD1cIjJcIiByeD1cIjFcIiB0cmFuc2Zvcm09XCJyb3RhdGUoNDUgMS40MTQwNiAwKVwiPjwvcmVjdD5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtbGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWxpc3RfX2l0ZW0taW1nXCI+IDxpbWcgc3JjPVwic3RhdGljL2ltZy9wcm9kdWN0LWltZy0xLmpwZ1wiIGFsdD1cIlwiIC8+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtbGlzdF9faXRlbS1jb250ZW50XCI+IFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtbGlzdF9faXRlbS10aXRsZVwiPtCj0LPQvtC70YwgT2FzaXMgUHJlbWl1bSBDb2FsdXMgMjXQvNC8PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1saXN0X19pdGVtLWFtb3VudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1saXN0X19pdGVtLWFtb3VudC1idG4tc3ViXCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIyXCIgdmlld0JveD1cIjAgMCAxMiAyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5lIHkxPVwiMVwiIHgyPVwiMTJcIiB5Mj1cIjFcIiBzdHJva2VXaWR0aD1cIjJcIj48L2xpbmU+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FydC1saXN0X19pdGVtLWFtb3VudC1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT1cIjFcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1saXN0X19pdGVtLWFtb3VudC1idG4tYWRkXCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTIgMTJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeTE9XCI2XCIgeDI9XCIxMlwiIHkyPVwiNlwiIHN0cm9rZVdpZHRoPVwiMlwiPjwvbGluZT5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9XCI2XCIgeDI9XCI2XCIgeTI9XCIxMlwiIHN0cm9rZVdpZHRoPVwiMlwiPjwvbGluZT5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWxpc3RfX2l0ZW0tcHJpY2VcIj4xNSA5MDAg0LPRgNC9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1saXN0X19pdGVtLWRlbGV0ZS1idG5cIj4gXG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjE3XCIgdmlld0JveD1cIjAgMCAxNyAxN1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgIDxyZWN0IHk9XCIxNS41NTYyXCIgd2lkdGg9XCIyMlwiIGhlaWdodD1cIjJcIiByeD1cIjFcIiB0cmFuc2Zvcm09XCJyb3RhdGUoLTQ1IDAgMTUuNTU2MilcIj48L3JlY3Q+XG4gICAgICAgICAgICAgICAgPHJlY3QgeD1cIjEuNDE0MDZcIiB3aWR0aD1cIjIyXCIgaGVpZ2h0PVwiMlwiIHJ4PVwiMVwiIHRyYW5zZm9ybT1cInJvdGF0ZSg0NSAxLjQxNDA2IDApXCI+PC9yZWN0PlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1saXN0X19pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtbGlzdF9faXRlbS1pbWdcIj4gPGltZyBzcmM9XCJzdGF0aWMvaW1nL3Byb2R1Y3QtaW1nLTEuanBnXCIgYWx0PVwiXCIgLz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1saXN0X19pdGVtLWNvbnRlbnRcIj4gXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1saXN0X19pdGVtLXRpdGxlXCI+0KPQs9C+0LvRjCBPYXNpcyBQcmVtaXVtIENvYWx1cyAyNdC80Lw8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWxpc3RfX2l0ZW0tYW1vdW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWxpc3RfX2l0ZW0tYW1vdW50LWJ0bi1zdWJcIj5cbiAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjJcIiB2aWV3Qm94PVwiMCAwIDEyIDJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeTE9XCIxXCIgeDI9XCIxMlwiIHkyPVwiMVwiIHN0cm9rZVdpZHRoPVwiMlwiPjwvbGluZT5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYXJ0LWxpc3RfX2l0ZW0tYW1vdW50LWlucHV0XCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPVwiMVwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWxpc3RfX2l0ZW0tYW1vdW50LWJ0bi1hZGRcIj5cbiAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxMiAxMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGluZSB5MT1cIjZcIiB4Mj1cIjEyXCIgeTI9XCI2XCIgc3Ryb2tlV2lkdGg9XCIyXCI+PC9saW5lPlxuICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjZcIiB4Mj1cIjZcIiB5Mj1cIjEyXCIgc3Ryb2tlV2lkdGg9XCIyXCI+PC9saW5lPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtbGlzdF9faXRlbS1wcmljZVwiPjE1IDkwMCDQs9GA0L08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWxpc3RfX2l0ZW0tZGVsZXRlLWJ0blwiPiBcbiAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTdcIiB2aWV3Qm94PVwiMCAwIDE3IDE3XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgPHJlY3QgeT1cIjE1LjU1NjJcIiB3aWR0aD1cIjIyXCIgaGVpZ2h0PVwiMlwiIHJ4PVwiMVwiIHRyYW5zZm9ybT1cInJvdGF0ZSgtNDUgMCAxNS41NTYyKVwiPjwvcmVjdD5cbiAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMS40MTQwNlwiIHdpZHRoPVwiMjJcIiBoZWlnaHQ9XCIyXCIgcng9XCIxXCIgdHJhbnNmb3JtPVwicm90YXRlKDQ1IDEuNDE0MDYgMClcIj48L3JlY3Q+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtZm9vdGVyXCI+IDxhIGNsYXNzTmFtZT1cImJ0blwiIGhyZWY9XCJcIj7QntGE0L7RgNC80LjRgtGMINC30LDQutCw0Lc8L2E+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXJlc3VsdHNcIj4gXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtcmVzdWx0c19fdGl0bGVcIj7QmNGC0L7Qs9C+LCDQsdC10Lcg0LTQvtGB0YLQsNCy0LrQuDogPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtcmVzdWx0c19fdmFsdWVcIj4zOCAxMDAgPHNwYW4+0LPRgNC9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBzZWFyY2gtcGFuZWxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbF9faGVhZGVyXCI+IFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWxfX2Nsb3NlLWJ0blwiPiBcbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjE3XCIgdmlld0JveD1cIjAgMCAxNyAxN1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICA8cmVjdCB5PVwiMTUuNTU2MlwiIHdpZHRoPVwiMjJcIiBoZWlnaHQ9XCIyXCIgcng9XCIxXCIgdHJhbnNmb3JtPVwicm90YXRlKC00NSAwIDE1LjU1NjIpXCI+PC9yZWN0PlxuICAgICAgICAgICAgICA8cmVjdCB4PVwiMS40MTQwNlwiIHdpZHRoPVwiMjJcIiBoZWlnaHQ9XCIyXCIgcng9XCIxXCIgdHJhbnNmb3JtPVwicm90YXRlKDQ1IDEuNDE0MDYgMClcIj48L3JlY3Q+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsX190aXRsZVwiPtCX0LDQutGA0YvRgtGMINC/0L7QuNGB0Lo8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNlYXJjaC1mb3JtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19maWVsZFwiPiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fZmllbGQtaWNvblwiPiBcbiAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE3IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zLjU0OTExIDAuNzE2MzAxQzQuMjgxNTUgMC4zNTY0NzkgNS4wNzM2MyAwLjEwMjQ0OCA1Ljg4Nzk1IDAuMDE4MjIwNkM2LjE2NzkyIC0wLjAwODczMjMgNi40NTEyNiAwLjAwMjM4NTc3IDYuNzMyNTggMC4wMDE3MTE5NUM3LjI0NjA0IC0wLjAxMDA3OTkgNy43NTYxMiAwLjA4MzkxODMgOC4yNTAwMyAwLjIxOTM1N0M4Ljk3ODQzIDAuNDMwNiA5LjY4Njk2IDAuNzM1ODQxIDEwLjMwMTEgMS4xODU5NUMxMC42ODIyIDEuNDM2NjIgMTEuMDEzIDEuNzUzOTkgMTEuMzMzNCAyLjA3NjQxQzExLjUyODIgMi4yODkzNCAxMS43MDEgMi41MjE0NyAxMS44ODYzIDIuNzQyNDhDMTIuMjM1NyAzLjI4ODYyIDEyLjU2NzkgMy44NTU5OCAxMi43NjIzIDQuNDc4MjVDMTIuODY2NCA0Ljg3MDA4IDEyLjk3NTUgNS4yNjIyNCAxMy4wMzE1IDUuNjY0NTJDMTMuMTMxNSA2LjQ0OTUyIDEzLjEwNjYgNy4yNTYwOCAxMi45MTQyIDguMDI1NTlDMTIuNzkwOSA4LjU0MjA3IDEyLjYzOCA5LjA1NzU1IDEyLjM3MjggOS41MjA4QzEyLjI5MTYgOS43MDA3MSAxMi4xNzI0IDkuODU5NzMgMTIuMDg4OCAxMC4wMzgzQzExLjk0ODMgMTAuMjM0NyAxMS44MjUzIDEwLjQ0NjYgMTEuNjU2OSAxMC42MjEyQzEzLjAxMjYgMTEuOTc5NiAxNC4zNjk3IDEzLjMzNjcgMTUuNzI4MSAxNC42OTI0QzE1Ljg2ODkgMTQuODI2MSAxNi4wMDk0IDE0Ljk5NDkgMTYuMDAzNCAxNS4yMDExQzE2LjAwNjEgMTUuMzUzNCAxNi4wMTU4IDE1LjUyNTIgMTUuOTE0NCAxNS42NTE2QzE1LjgyNjggMTUuNzYyMSAxNS43MjQxIDE1Ljg2MTEgMTUuNjEyNSAxNS45NDdDMTUuMzI0NSAxNi4wMzUzIDE0Ljk1MTIgMTYuMDM1IDE0Ljc0OSAxNS43NzU2QzEzLjM3NTUgMTQuNDAxMyAxMS45OTk5IDEzLjAyOTEgMTAuNjI5NiAxMS42NTE0QzEwLjEwMiAxMi4wOTcyIDkuNDgwNDMgMTIuNDE3MiA4Ljg0NzcxIDEyLjY4NjhDOC4xNTAzIDEyLjg5OTcgNy40MzI2OCAxMy4wODYgNi42OTgyMiAxMy4wODlDNi4yODY4NSAxMy4xMDA1IDUuODc1MTQgMTMuMDcyMiA1LjQ3MDE4IDEyLjk5OTRDNS4wNzE5NSAxMi45MzYxIDQuNjg2ODYgMTIuODE0MSA0LjI5OTQxIDEyLjcwNjNDMy43NzU1MSAxMi41MDExIDMuMjc0ODYgMTIuMjM4IDIuODA2ODkgMTEuOTI2QzIuNDI1ODUgMTEuNjQ3NCAyLjA2MjMyIDExLjM0MjEgMS43NDM5NCAxMC45OTI0QzEuNDQ0NzYgMTAuNjg3NSAxLjIwNDIxIDEwLjMzMzEgMC45NjIzMDYgOS45ODMwNEMwLjYxMDIzNCA5LjM5NTQ3IDAuMzQ4NzkgOC43NTUgMC4xNzQyNzEgOC4wOTI5N0MwLjAxOTI5MTQgNy41MDAwMSAtMC4wMTIzNzgzIDYuODgzNDYgMC4wMDM3OTM0NyA2LjI3Mjk4QzAuMDIyNjYwNSA2LjAyMjk5IDAuMDIwOTc1OSA1Ljc3MTY1IDAuMDY1NDQ4MiA1LjUyNDAyQzAuMTY5NTU0IDQuODczNzkgMC4zNzk0NDkgNC4yNDEwNyAwLjY3MTU1MSAzLjY1MTQ3QzAuNzIxNzUxIDMuNTUyMDggMC43NDI5NzcgMy40MzY4NiAwLjgxODEwOCAzLjM1MDk1QzAuOTAyNjcyIDMuMjMxNjggMC45NjYzNDkgMy4wOTg5NCAxLjA0OTIzIDIuOTc3OTlDMS4yMDc5MSAyLjcyNjk5IDEuNDAwNjMgMi40OTk5MSAxLjU3ODUyIDIuMjYyNzJDMS44NzY2OCAxLjk1MTQyIDIuMTgwOTEgMS42NDM0OCAyLjUxNzE1IDEuMzcyOTRDMi44NTIwNCAxLjE0MDEzIDMuMTgzNTYgMC44OTk1OCAzLjU0OTExIDAuNzE2MzAxWk01LjMwMzA3IDEuNjY1MDRDNC43NjEzMiAxLjc3ODI0IDQuMjUxOTEgMi4wMTk0NyAzLjc5MzcxIDIuMzI2MDZDMy42MDM2OSAyLjQzMDg0IDMuNDM1NTcgMi41NjkzMSAzLjI2ODQ2IDIuNzA2NDNDMi44NzM5NCAzLjA2NjkzIDIuNDk5MjkgMy40NjA0NCAyLjIzOTIgMy45MzA3N0MyLjA0OTE4IDQuMjM4MzcgMS44ODY3OSA0LjU2MjQ4IDEuNzY5MjEgNC45MDQ0NEMxLjY4MDI2IDUuMjY3NjMgMS41NjM2OSA1LjYyNTQzIDEuNTI3MzEgNS45OTk0QzEuNTA5MTEgNi4yNzgzNyAxLjQ2NDMgNi41NTkwMSAxLjUwNjc1IDYuODM4MzFDMS41MTY1MiA3LjMwNTI3IDEuNjQ2NTcgNy43NTc3NCAxLjc2NDgzIDguMjA2MTdDMS44NzgzNyA4LjUzNzAyIDIuMDMxMzIgOC44NTM3MiAyLjIxMjI1IDkuMTUyNTZDMi4zMDcyNiA5LjMwOTg5IDIuMzk3MjEgOS40NzA2IDIuNTEzNzggOS42MTM3OUMyLjc1MTMgOS45MTA2MSAyLjk5NjkxIDEwLjIxMDUgMy4zMDgyMiAxMC40MzM4QzMuNTk3OTYgMTAuNjk4IDMuOTMwNDkgMTAuOTE3MyA0LjI4NjYxIDExLjA4MkM1LjYwNDk0IDExLjc3OTUgNy4yNDgwNiAxMS44MjE5IDguNjAyNzggMTEuMkM4LjgwMDIxIDExLjA5NTkgOS4wMDkwOSAxMS4wMTM3IDkuMTk5NzggMTAuODk3MUM5LjM4ODEyIDEwLjc3MzggOS41NzkxNSAxMC42NTExIDkuNzQ3MjYgMTAuNTAwMkMxMC4yMzQxIDEwLjEzMiAxMC42MTkyIDkuNjQ1NDYgMTAuOTM1MiA5LjEyNzI5QzExLjA0NzEgOC45Njk2MSAxMS4wOTkzIDguNzgxNjIgMTEuMTkwNiA4LjYxMzE2QzExLjc2NCA3LjM3MTk4IDExLjc4MzYgNS44ODY4OCAxMS4yNDExIDQuNjMxODhDMTAuODg0MyAzLjczMjY3IDEwLjI0ODkgMi45NTIzOCA5LjQ1NzE4IDIuMzk5ODVDOS4zNjM4NiAyLjMzOTU0IDkuMjU1MzcgMi4zMDI4MiA5LjE3NjU0IDIuMjIxNjJDOC44NDk3MyAyLjAzMDkzIDguNTA3NDMgMS44NjIxNCA4LjE0NjYgMS43NDYyNEM3Ljk2NzcgMS43MTIyMSA3Ljc5NTIgMS42NTMyNSA3LjYxNzk5IDEuNjEzNUM3LjMzNzM0IDEuNTU2ODkgNy4wNTMzMiAxLjUxOTE2IDYuNzY3OTYgMS40OTc5M0M2LjI3NTA2IDEuNDgyMSA1Ljc3OTEyIDEuNTM0OTkgNS4zMDMwNyAxLjY2NTA0WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtX19maWVsZC1pbnB1dFwiIHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cItCf0L7QuNGB0Log0YHRgNC10LTQuCDQsdC+0LvQtdC1IDUwMDAg0YLQvtCy0LDRgNC+0LJcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgb3JkZXItdGhhbmtzLXBhbmVsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWxfX2hlYWRlclwiPiBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsX19jbG9zZS1idG5cIj4gXG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxN1wiIHZpZXdCb3g9XCIwIDAgMTcgMTdcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgPHJlY3QgeT1cIjE1LjU1NjJcIiB3aWR0aD1cIjIyXCIgaGVpZ2h0PVwiMlwiIHJ4PVwiMVwiIHRyYW5zZm9ybT1cInJvdGF0ZSgtNDUgMCAxNS41NTYyKVwiPjwvcmVjdD5cbiAgICAgICAgICAgICAgPHJlY3QgeD1cIjEuNDE0MDZcIiB3aWR0aD1cIjIyXCIgaGVpZ2h0PVwiMlwiIHJ4PVwiMVwiIHRyYW5zZm9ybT1cInJvdGF0ZSg0NSAxLjQxNDA2IDApXCI+PC9yZWN0PlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbF9fdGl0bGVcIj7Ql9Cw0LrRgNGL0YLRjCDQv9C+0LjRgdC6PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsX19tZXNzYWdlXCI+IFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWxfX21lc3NhZ2UtdGl0bGVcIj7QodC/0LDRgdC40LHQviEgPGJyIC8+INCd0L7QvNC10YAg0JLQsNGI0LXQuSDQt9Cw0Y/QstC60LggLSAzOTk8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsX19tZXNzYWdlLXRleHRcIj7QkiDQsdC70LjQttCw0LnRiNC10LUg0LLRgNC10LzRjyDQvNGLINCS0LDQvCDQv9C+0LfQstC+0L3QuNC8INC4INC+0LHRgdGD0LTQuNC8INC00LXRgtCw0LvQuCDQstCw0YjQtdCz0L4g0LfQsNC60LDQt9CwLjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWxfX21lc3NhZ2UtaWNvblwiPiA8aW1nIHNyYz1cInN0YXRpYy9pbWcvaWNvLWNoZWNrLnN2Z1wiIGFsdD1cIlwiIC8+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbF9fbWVzc2FnZS1mb290ZXJcIj48YSBjbGFzc05hbWU9XCJidG4gYnRuLS14bFwiIGhyZWY9XCJcIj7QktGB0LUg0L/QvtC90Y/RgtC90L4gICAgICAgIDwvYT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJfX3RvcFwiPjxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPVwic2lkZWJhcl9fbG9nb1wiPlxuICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjk4XCIgaGVpZ2h0PVwiMTIyXCIgdmlld0JveD1cIjAgMCA5OCAxMjJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk05My41NzIgNC4zNzI5MlY5NS42MDc3SDQuMjc5ODFWNC4zNzI5Mkg5My41NzJaTTQuMjc3MjVlLTA2IDBMOTcuODUxOSA0LjM3MDNlLTA2Vjk5Ljk4MDdIMEw0LjI3NzI1ZS0wNiAwWk02Mi40NDYzIDM2LjE3NTlWMjQuNzQ2OEM2Mi40NDYzIDE4LjQzNDcgNjcuNDU0MSAxMy4zMTc2IDczLjYzMjEgMTMuMzE3Nkg4NC44MTc5VjI0Ljc0NjhDODQuODE3OSAzMC44NDc5IDgwLjEzOTUgMzUuODMyIDc0LjI0ODIgMzYuMTU4OUw3My44Mzc5IDM2LjE4MTZWMzMuMTI3OUw3NC4yMDA0IDMzLjEwMjZDNzguNDYyMiAzMi44MDQ1IDgxLjgyOTQgMjkuMTc3MyA4MS44Mjk0IDI0Ljc0NjhWMTkuMjA4NEw2NS4yMjI5IDM2LjE3NTlINjIuNDQ2M1pNODAuMzc5NyAxNi4zNzExSDczLjYzMjFDNjkuMTA0NiAxNi4zNzExIDY1LjQzNDcgMjAuMTIxMSA2NS40MzQ3IDI0Ljc0NjhWMzEuNjQxNEw4MC4zNzk3IDE2LjM3MTFaTTE3LjQzMzggMTE1Ljk2MkMxNy40MzM4IDExNC4yODcgMTcuOTg1MyAxMTIuODkyIDE5LjA4ODMgMTExLjc3NkMyMC4xOTEzIDExMC42NDkgMjEuNjA0MiAxMTAuMDg1IDIzLjMyNyAxMTAuMDg1QzI1LjA0OTkgMTEwLjA4NSAyNi40NjI4IDExMC42NDkgMjcuNTY1OCAxMTEuNzc2QzI4LjY2ODkgMTEyLjg5MiAyOS4yMjAzIDExNC4yODcgMjkuMjIwMyAxMTUuOTYyQzI5LjIyMDMgMTE3LjY3OSAyOC42Njg5IDExOS4xMTIgMjcuNTY1OCAxMjAuMjZDMjYuNDYyOCAxMjEuNDA5IDI1LjA0OTkgMTIxLjk4MyAyMy4zMjcgMTIxLjk4M0MyMS42MDQyIDEyMS45ODMgMjAuMTkxMyAxMjEuNDA5IDE5LjA4ODMgMTIwLjI2QzE3Ljk4NTMgMTE5LjExMiAxNy40MzM4IDExNy42NzkgMTcuNDMzOCAxMTUuOTYyWk0yMC4yODU5IDExNS45NjJDMjAuMjg1OSAxMTYuOTQ5IDIwLjU2OTUgMTE3Ljc3IDIxLjEzNjggMTE4LjQyNUMyMS43MTQ1IDExOS4wOCAyMi40NDQ2IDExOS40MDcgMjMuMzI3IDExOS40MDdDMjQuMjA5NSAxMTkuNDA3IDI0LjkzNDMgMTE5LjA4IDI1LjUwMTYgMTE4LjQyNUMyNi4wNzk0IDExNy43NyAyNi4zNjgyIDExNi45NDkgMjYuMzY4MiAxMTUuOTYyQzI2LjM2ODIgMTE1LjAxNyAyNi4wNzk0IDExNC4yMzQgMjUuNTAxNiAxMTMuNjExQzI0LjkzNDMgMTEyLjk3OCAyNC4yMDk1IDExMi42NjEgMjMuMzI3IDExMi42NjFDMjIuNDQ0NiAxMTIuNjYxIDIxLjcxNDUgMTEyLjk3OCAyMS4xMzY4IDExMy42MTFDMjAuNTY5NSAxMTQuMjM0IDIwLjI4NTkgMTE1LjAxNyAyMC4yODU5IDExNS45NjJaTTAuNDAzNjY3IDEyMS43OVYxMTAuMjc4SDMuMTYxMlYxMTQuODgzSDcuMjU4MTRWMTEwLjI3OEgxMC4wMTU3VjEyMS43OUg3LjI1ODE0VjExNy4yODJIMy4xNjEyVjEyMS43OUgwLjQwMzY2N1pNMzcuNjg2OSAxMTEuNzc2QzM2LjU4MzkgMTEyLjg5MiAzNi4wMzI1IDExNC4yODcgMzYuMDMyNSAxMTUuOTYyQzM2LjAzMjUgMTE3LjY3OSAzNi41ODM5IDExOS4xMTIgMzcuNjg2OSAxMjAuMjZDMzguNzkgMTIxLjQwOSA0MC4yMDI4IDEyMS45ODMgNDEuOTI1NyAxMjEuOTgzQzQzLjY0ODYgMTIxLjk4MyA0NS4wNjE0IDEyMS40MDkgNDYuMTY0NSAxMjAuMjZDNDcuMjY3NSAxMTkuMTEyIDQ3LjgxODkgMTE3LjY3OSA0Ny44MTg5IDExNS45NjJDNDcuODE4OSAxMTQuMjg3IDQ3LjI2NzUgMTEyLjg5MiA0Ni4xNjQ1IDExMS43NzZDNDUuMDYxNCAxMTAuNjQ5IDQzLjY0ODYgMTEwLjA4NSA0MS45MjU3IDExMC4wODVDNDAuMjAyOCAxMTAuMDg1IDM4Ljc5IDExMC42NDkgMzcuNjg2OSAxMTEuNzc2Wk0zOS43MzUzIDExOC40MjVDMzkuMTY4MiAxMTcuNzcgMzguODg0NiAxMTYuOTQ5IDM4Ljg4NDYgMTE1Ljk2MkMzOC44ODQ2IDExNS4wMTcgMzkuMTY4MiAxMTQuMjM0IDM5LjczNTMgMTEzLjYxMUM0MC4zMTMyIDExMi45NzggNDEuMDQzNCAxMTIuNjYxIDQxLjkyNTcgMTEyLjY2MUM0Mi44MDgzIDExMi42NjEgNDMuNTMzMSAxMTIuOTc4IDQ0LjEwMDMgMTEzLjYxMUM0NC42NzgxIDExNC4yMzQgNDQuOTY3MSAxMTUuMDE3IDQ0Ljk2NzEgMTE1Ljk2MkM0NC45NjcxIDExNi45NDkgNDQuNjc4MSAxMTcuNzcgNDQuMTAwMyAxMTguNDI1QzQzLjUzMzEgMTE5LjA4IDQyLjgwODMgMTE5LjQwNyA0MS45MjU3IDExOS40MDdDNDEuMDQzNCAxMTkuNDA3IDQwLjMxMzIgMTE5LjA4IDM5LjczNTMgMTE4LjQyNVpNNTUuMjQ1OCAxMjEuNzlWMTEwLjI3OEg1OC4wMDMzVjExNC43MjJINTkuMTM3OUw2MS40Njk5IDExMC4yNzhINjQuNDMyMkw2MS4zOTExIDExNS43ODVWMTE1LjgxN0w2NC42MDU3IDEyMS43OUg2MS41MTczTDU5LjEzNzkgMTE3LjEyMUg1OC4wMDMzVjEyMS43OUg1NS4yNDU4Wk03NC4xNTE2IDExMC4yNzhMNzAuMzIyNiAxMjEuNzlINzMuMTU5TDczLjgzNjUgMTE5LjM3NUg3Ny4zNTA0TDc4LjA0MzggMTIxLjc5SDgwLjg3OTlMNzcuMDUwOCAxMTAuMjc4SDc0LjE1MTZaTTc2LjcwNDEgMTE3LjEyMUg3NC40ODI1TDc1LjEyODUgMTE0Ljg4M0M3NS4yNjUxIDExNC40IDc1LjQxNzUgMTEzLjc0IDc1LjU4NTYgMTEyLjkwM0g3NS42MTcxTDc2LjA3MzkgMTE0Ljg4M0w3Ni43MDQxIDExNy4xMjFaTTg3LjY4ODMgMTIxLjc5VjExMC4yNzhIOTAuNDQ1OFYxMTQuODgzSDk0LjU0MjdWMTEwLjI3OEg5Ny4zMDAyVjEyMS43OUg5NC41NDI3VjExNy4yODJIOTAuNDQ1OFYxMjEuNzlIODcuNjg4M1pNMTEuODY2NyAxMi4xMjQ4Vjg3LjM1OThIMjEuNTg3NVY4NC4xNjk0SDE1LjUwOTRWMTIuMTI0OEgxMS44NjY3Wk0yMy4zNTE3IDcyLjE1MjlWODcuMzU5OEgyNi45OTQ0VjcyLjE1MjlIMjMuMzUxN1pNMjkuMzI5OSA3OS43MjQ0QzI5LjMyOTkgNzcuNDk4NSAzMC4wNjU0IDc1LjY0MDkgMzEuNTM2MyA3NC4xNTIxQzMzLjAyMTIgNzIuNjQ5MyAzNC44ODc0IDcxLjg5NzcgMzcuMTM1NSA3MS44OTc3QzM5LjQ1MzIgNzEuODk3NyA0MS4zNjExIDcyLjU3MTMgNDIuODU5OCA3My45MTgyTDQxLjExMTMgNzYuNzA0M0M0MC42ODEzIDc2LjMwNzMgNDAuMTI2MiA3NS45NzQxIDM5LjQ0NjEgNzUuNzA0N0MzOC43NjYgNzUuNDM1NCAzOC4xMTM4IDc1LjMwMDggMzcuNDg5NSA3NS4zMDA4QzM2LjAxODQgNzUuMzAwOCAzNC45MTUzIDc1LjcxMTkgMzQuMTc5OCA3Ni41MzQzQzMzLjQ1ODMgNzcuMzQyMiAzMy4wOTc1IDc4LjM2MzEgMzMuMDk3NSA3OS41OTY5QzMzLjA5NzUgODEuMDAwNSAzMy41MDY3IDgyLjEyMDcgMzQuMzI1NiA4Mi45NTcxQzM1LjE1ODEgODMuNzkzOSAzNi4xNzEgODQuMjExOSAzNy4zNjQ1IDg0LjIxMTlDMzguNDQ3IDg0LjIxMTkgMzkuNDUzMiA4My44NDM0IDQwLjM4MjggODMuMTA2MlY4MS45MzYySDM4LjI4MDVWNzguNzY3NEg0My42MDkyVjg3LjM1OThINDAuNTdWODYuOTM0Mkw0MC41OTA5IDg2LjI5NjNINDAuNTQ5MkM0MC4xMDU0IDg2LjY5MzQgMzkuNTIyNCA4Ny4wMTI1IDM4LjgwMSA4Ny4yNTMzQzM4LjA5MyA4Ny40OTQ0IDM3LjM3MTUgODcuNjE1IDM2LjYzNiA4Ny42MTVDMzQuNjM3NyA4Ny42MTUgMzIuOTE3IDg2Ljg5ODggMzEuNDczOCA4NS40NjY4QzMwLjA0NDYgODQuMDM0NyAyOS4zMjk5IDgyLjEyMDcgMjkuMzI5OSA3OS43MjQ0Wk00Ni4yMjAyIDcyLjE1MjlWODcuMzU5OEg1NS44MzY5Vjg0LjE2OTRINDkuODYyOVY4MS4yOTgzSDU0LjQwMDdWNzguMTA3OUg0OS44NjI5Vjc1LjM0MzFINTUuNTQ1NFY3Mi4xNTI5SDQ2LjIyMDJaTTU4LjE3MjkgODcuMzU5OFY3Mi4xNTI5SDYzLjM1NTlDNjQuNjc0MSA3Mi4xNTI5IDY1LjYzODYgNzIuMjczNSA2Ni4yNDkxIDcyLjUxNDZDNjcuMTA5NCA3Mi44NTQ3IDY3Ljc4MjUgNzMuNDA3NyA2OC4yNjgzIDc0LjE3MzRDNjguNzU0IDc0LjkyNSA2OC45OTY4IDc1Ljg0NjYgNjguOTk2OCA3Ni45MzgzQzY4Ljk5NjggNzcuNzg5MSA2OC44MDI1IDc4LjYwNDMgNjguNDEzOSA3OS4zODRDNjguMDI1NSA4MC4xNDk3IDY3LjQ3NzIgODAuNzE2OCA2Ni43Njk1IDgxLjA4NTdWODEuMTI4QzY2LjkwODQgODEuMzEyNCA2Ny4wOTU2IDgxLjYxNzQgNjcuMzMxNiA4Mi4wNDI3TDcwLjIyNDkgODcuMzU5OEg2Ni4xNjU4TDYzLjUyMjMgODIuMjM0SDYxLjgxNTVWODcuMzU5OEg1OC4xNzI5Wk02MS44MTU1IDc5LjA0MzlINjMuMzk3NkM2My45OTQzIDc5LjA0MzkgNjQuNDU4OSA3OC44ODA4IDY0Ljc5MjEgNzguNTU0OEM2NS4xMjUyIDc4LjIyODUgNjUuMjkxNyA3Ny43Njc4IDY1LjI5MTcgNzcuMTcyMkM2NS4yOTE3IDc2LjMzNTcgNjUuMDAwMiA3NS43OTY4IDY0LjQxNzUgNzUuNTU2QzY0LjA5ODIgNzUuNDE0MSA2My42NDAzIDc1LjM0MzEgNjMuMDQzNiA3NS4zNDMxSDYxLjgxNTVWNzkuMDQzOVpNNzMuMDg0NiA3NC4xMzA4QzcxLjYyNzYgNzUuNjA1NSA3MC44OTkxIDc3LjQ0ODcgNzAuODk5MSA3OS42NjA1QzcwLjg5OTEgODEuOTI5MyA3MS42Mjc2IDgzLjgyMjEgNzMuMDg0NiA4NS4zMzkzQzc0LjU0MiA4Ni44NTYyIDc2LjQwODIgODcuNjE1IDc4LjY4NDEgODcuNjE1QzgwLjk1OTggODcuNjE1IDgyLjgyNjMgODYuODU2MiA4NC4yODM0IDg1LjMzOTNDODUuNzQwNCA4My44MjIxIDg2LjQ2OSA4MS45MjkzIDg2LjQ2OSA3OS42NjA1Qzg2LjQ2OSA3Ny40NDg3IDg1Ljc0MDQgNzUuNjA1NSA4NC4yODM0IDc0LjEzMDhDODIuODI2MyA3Mi42NDIxIDgwLjk1OTggNzEuODk3NyA3OC42ODQxIDcxLjg5NzdDNzYuNDA4MiA3MS44OTc3IDc0LjU0MiA3Mi42NDIxIDczLjA4NDYgNzQuMTMwOFpNNzUuNzkwNiA4Mi45MTQ1Qzc1LjA0MTMgODIuMDQ5OSA3NC42NjY3IDgwLjk2NTEgNzQuNjY2NyA3OS42NjA1Qzc0LjY2NjcgNzguNDEyOSA3NS4wNDEzIDc3LjM3NzkgNzUuNzkwNiA3Ni41NTU2Qzc2LjU1NDEgNzUuNzE4OCA3Ny41MTgzIDc1LjMwMDggNzguNjg0MSA3NS4zMDA4Qzc5Ljg0OTcgNzUuMzAwOCA4MC44MDcyIDc1LjcxODggODEuNTU2NiA3Ni41NTU2QzgyLjMxOTcgNzcuMzc3OSA4Mi43MDE2IDc4LjQxMjkgODIuNzAxNiA3OS42NjA1QzgyLjcwMTYgODAuOTY1MSA4Mi4zMTk3IDgyLjA0OTkgODEuNTU2NiA4Mi45MTQ1QzgwLjgwNzIgODMuNzc5NSA3OS44NDk3IDg0LjIxMTkgNzguNjg0MSA4NC4yMTE5Qzc3LjUxODMgODQuMjExOSA3Ni41NTQxIDgzLjc3OTUgNzUuNzkwNiA4Mi45MTQ1WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPjwvYT48L0xpbms+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXJfX25hdlwiPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX25hdi1pdGVtXCI+PGEgY2xhc3NOYW1lPVwic2lkZWJhcl9fbmF2LWxpbmtcIiBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyX19uYXYtbGluay1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzZcIiBoZWlnaHQ9XCIzNlwiIHZpZXdCb3g9XCIwIDAgMzYgMzZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yOS40OTg1IDI1LjQ1OTJDMjkuNTA5NyAyNS41MTU5IDI5LjUyMTIgMjUuNTcyNiAyOS41MzA1IDI1LjYzQzI5Ljk1OTcgMjguMjY4NSAyOC4zOTc5IDMwLjc1NDIgMjUuOTEyNiAzMS41MzY1TDI3LjM4MTIgMzQuNDczN0MyNy41NDQ3IDM0LjgwMDcgMjcuNTI3MiAzNS4xODg5IDI3LjMzNSAzNS40OTk5QzI3LjE0MjkgMzUuODEwOCAyNi44MDM0IDM2LjAwMDEgMjYuNDM3OCAzNi4wMDAxSDEzLjc4MTZDMTMuNDE2IDM2LjAwMDEgMTMuMDc2NiAzNS44MTA4IDEyLjg4NDQgMzUuNDk5OUMxMi42OTIyIDM1LjE4ODkgMTIuNjc0OCAzNC44MDA3IDEyLjgzODIgMzQuNDczN0wxNC4zMjg4IDMxLjQ5MjZDMTIuNDUzOSAzMC44NzMgMTEuMDAyMyAyOS4zMTIgMTAuNjg4OSAyNy4zODU4QzEwLjE1NTYgMjQuMTA3MiAxMi42NzM3IDIxLjE2NDEgMTUuODkxIDIxLjE2NDFIMTYuOTQ1N1YxOC44NzMzQzE1LjcxODEgMTguNDM3OSAxNC44MzYzIDE3LjI2NTYgMTQuODM2MyAxNS44OTA2QzE0LjgzNjMgMTQuNDMzNSAxNS44MjY2IDEzLjIwNDEgMTcuMTY5MyAxMi44MzgxQzE3LjAyNTUgMTIuNDc2OSAxNi45NDU3IDEyLjA4MzcgMTYuOTQ1NyAxMS42NzE5QzE2Ljk0NTcgMTAuODYyMSAxNy4yNTE4IDEwLjEyMjggMTcuNzUzOSA5LjU2MjVDMTcuNDgxIDkuMjU4MDUgMTcuMjY2NCA4LjkwMDY1IDE3LjEyNzEgOC41MDc4MUgxNC44MzYzQzEwLjE4MzggOC41MDc4MSA2LjM5ODc4IDEyLjI5MjkgNi4zOTg3OCAxNi45NDUzVjI1LjYzNDVDNy42MjYzNiAyNi4wNjk5IDguNTA4MTUgMjcuMjQyMiA4LjUwODE1IDI4LjYxNzJWMzIuODM1OUM4LjUwODE1IDMzLjQxODQgOC4wMzU5MyAzMy44OTA2IDcuNDUzNDYgMzMuODkwNkg2LjM5ODc4VjM0Ljk0NTNDNi4zOTg3OCAzNS41Mjc4IDUuOTI2NTYgMzYgNS4zNDQwOSAzNkM0Ljc2MTYyIDM2IDQuMjg5NCAzNS41Mjc4IDQuMjg5NCAzNC45NDUzVjMzLjg5MDZIMy4yMzQ3MUMyLjY1MjI0IDMzLjg5MDYgMi4xODAwMyAzMy40MTg0IDIuMTgwMDMgMzIuODM1OVYyOC42MTcyQzIuMTgwMDMgMjcuMjQyMiAzLjA2MTgyIDI2LjA2OTkgNC4yODk0IDI1LjYzNDVWMTYuOTQ1M0M0LjI4OTQgMTEuMTI5OCA5LjAyMDczIDYuMzk4NDQgMTQuODM2MyA2LjM5ODQ0SDE2Ljk0NTdWNS4yNTE2NEMxNS42MzEyIDQuMjYxMjkgMTQuODM2MyAyLjcwMzg3IDE0LjgzNjMgMS4wNTQ2OUMxNC44MzYzIDAuNDcyMjE5IDE1LjMwODUgMCAxNS44OTEgMEgyNC4zMjg1QzI0LjkxMDkgMCAyNS4zODMyIDAuNDcyMjE5IDI1LjM4MzIgMS4wNTQ2OUMyNS4zODMyIDIuNzAzODcgMjQuNTg4MiA0LjI2MTIyIDIzLjI3MzggNS4yNTE2NFY2LjQwNjg4QzI4Ljc5NiA2LjYxMTIgMzMuNTI5MiAxMC44NjU0IDMzLjgwNyAxNi40MDM1QzMzLjk4NiAxOS45Njk5IDMyLjM0OTYgMjMuMzcxIDI5LjQ5ODUgMjUuNDU5MlpNNC4yODk0IDMxLjc4MTJINi4zOTg3OFYyOC42MTcyQzYuMzk4NzggMjguMDM1NiA1LjkyNTY0IDI3LjU2MjUgNS4zNDQwOSAyNy41NjI1QzQuNzYyNTQgMjcuNTYyNSA0LjI4OTQgMjguMDM1NiA0LjI4OTQgMjguNjE3MlYzMS43ODEyWk0yNC43MzE0IDMzLjg5MDZMMjMuNjc2NyAzMS43ODEySDE2LjU0MjhMMTUuNDg4MSAzMy44OTA2SDI0LjczMTRaTTE1Ljg5MSAyMy4yNzM0QzEzLjk3NzcgMjMuMjczNCAxMi40NDU3IDI1LjA0NzIgMTIuNzcwOSAyNy4wNDdDMTMuMDE0NCAyOC41NDM0IDE0LjQ1MjggMjkuNjcxOSAxNi4xMTY3IDI5LjY3MTlIMjQuMzI4NUMyNi4yMjI4IDI5LjY3MTkgMjcuNzc3MyAyNy45OTAzIDI3LjQ0ODUgMjUuOTY4N0MyNy4yMDI2IDI0LjQ1NzMgMjUuNzMzIDIzLjI3MzQgMjQuMTAyNyAyMy4yNzM0SDIyLjIxOTFDMjEuNjM2NiAyMy4yNzM0IDIxLjE2NDQgMjIuODAxMiAyMS4xNjQ0IDIyLjIxODhWMTkuMDU0N0gxOS4wNTVWMjIuMjE4OEMxOS4wNTUgMjIuODAxMiAxOC41ODI4IDIzLjI3MzQgMTguMDAwMyAyMy4yNzM0SDE1Ljg5MVpNMTguMDAwMyAxNi45NDUzSDIyLjIxOTFDMjIuODAwNiAxNi45NDUzIDIzLjI3MzggMTYuNDcyMiAyMy4yNzM4IDE1Ljg5MDZDMjMuMjczOCAxNS4zMDkxIDIyLjgwMDYgMTQuODM1OSAyMi4yMTkxIDE0LjgzNTlIMTguMDAwM0MxNy40MTg4IDE0LjgzNTkgMTYuOTQ1NyAxNS4zMDkxIDE2Ljk0NTcgMTUuODkwNkMxNi45NDU3IDE2LjQ3MjIgMTcuNDE4OCAxNi45NDUzIDE4LjAwMDMgMTYuOTQ1M1pNMTkuMDU1IDExLjY3MTlDMTkuMDU1IDEyLjI1MzQgMTkuNTI4MiAxMi43MjY2IDIwLjEwOTcgMTIuNzI2NkMyMC42OTEzIDEyLjcyNjYgMjEuMTY0NCAxMi4yNTM0IDIxLjE2NDQgMTEuNjcxOUMyMS4xNjQ0IDExLjA5MDMgMjAuNjkxMyAxMC42MTcyIDIwLjEwOTcgMTAuNjE3MkMxOS41MjgyIDEwLjYxNzIgMTkuMDU1IDExLjA5MDMgMTkuMDU1IDExLjY3MTlaTTE3LjEyNzUgMi4xMDkzOEMxNy4zNzQxIDIuNzk3NTkgMTcuODYxNSAzLjM4NzIzIDE4LjUzMDggMy43NzY3N0MxOC44NTU0IDMuOTY1NjMgMTkuMDU1IDQuMzEyODMgMTkuMDU1IDQuNjg4M1Y3LjQ1MzEyQzE5LjA1NSA4LjAzNDY4IDE5LjUyODIgOC41MDc4MSAyMC4xMDk3IDguNTA3ODFDMjAuNjkxMyA4LjUwNzgxIDIxLjE2NDQgOC4wMzQ2OCAyMS4xNjQ0IDcuNDUzMTJWNC42ODgzQzIxLjE2NDQgNC4zMTI4MyAyMS4zNjQgMy45NjU2MyAyMS42ODg2IDMuNzc2NzdDMjIuMzU3OSAzLjM4NzIzIDIyLjg0NTQgMi43OTc1OSAyMy4wOTE5IDIuMTA5MzhIMTcuMTI3NVpNMzEuNzAwNCAxNi41MDkyQzMxLjQ4MjggMTIuMTcyIDI3LjY0NDUgOC42MzAwMiAyMy4wOTEzIDguNTExMDVDMjIuOTUyIDguOTAyNjIgMjIuNzM3NyA5LjI1ODg5IDIyLjQ2NTYgOS41NjI0M0MyMi45Njc4IDEwLjEyMjcgMjMuMjczOCAxMC44NjIgMjMuMjczOCAxMS42NzE4QzIzLjI3MzggMTIuMDgzNiAyMy4xOTM5IDEyLjQ3NjggMjMuMDUwMiAxMi44MzhDMjQuMzkyOSAxMy4yMDQgMjUuMzgzMiAxNC40MzM1IDI1LjM4MzIgMTUuODkwNkMyNS4zODMyIDE3LjI2NTUgMjQuNTAxNCAxOC40Mzc4IDIzLjI3MzggMTguODczMlYyMS4xNjQxSDI0LjEwMjhDMjUuOTQ1MyAyMS4xNjQxIDI3LjYyNCAyMi4wNzE0IDI4LjYyNzkgMjMuNDY1OUMzMC42NzY2IDIxLjc3OTggMzEuODM1NSAxOS4yMDM1IDMxLjcwMDQgMTYuNTA5MlpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj48c3BhbiBjbGFzc05hbWU9XCJzaWRlYmFyX19uYXYtbGluay10aXRsZVwiPtCa0LDQu9GM0Y/QvdGLPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhcl9fbmF2LWxpbmstYXJyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiOVwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCA5IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMSAxNUw3Ljk0OTExIDcuNjc0TDEgMVwiIHN0cm9rZVdpZHRoPVwiMS41XCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtaXRlbVwiPiA8YSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWxpbmtcIiBocmVmPVwiXCI+TWFrbGF1ZDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtaXRlbVwiPiA8YSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWxpbmtcIiBocmVmPVwiXCI+QWxwaGEgaG9va2FoPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1pdGVtXCI+IDxhIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtbGlua1wiIGhyZWY9XCJcIj5TaGkgY2FydmVyPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1pdGVtXCI+IDxhIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtbGlua1wiIGhyZWY9XCJcIj5DYXBzdWxlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1pdGVtXCI+IDxhIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtbGlua1wiIGhyZWY9XCJcIj5OdWJlIDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtaXRlbVwiPiA8YSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWxpbmtcIiBocmVmPVwiXCI+0KF3cCAgPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1pdGVtXCI+IDxhIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtbGlua1wiIGhyZWY9XCJcIj5NYW1heTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtaXRlbVwiPiA8YSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWxpbmtcIiBocmVmPVwiXCI+RmVycm88L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWl0ZW1cIj4gPGEgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1saW5rXCIgaHJlZj1cIlwiPkRhcmtzaWRlIDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtaXRlbVwiPiA8YSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWxpbmtcIiBocmVmPVwiXCI+0JTRg9GI0LA8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWl0ZW1cIj4gPGEgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1saW5rXCIgaHJlZj1cIlwiPkdyYW1tPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1pdGVtXCI+IDxhIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtbGlua1wiIGhyZWY9XCJcIj5IdWI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWl0ZW1cIj4gPGEgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1saW5rXCIgaHJlZj1cIlwiPkdlb21ldHJ5PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1pdGVtXCI+IDxhIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtbGlua1wiIGhyZWY9XCJcIj5OdWFodWxlICjRhdGD0LvQuNCz0LDQvSk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWl0ZW1cIj4gPGEgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1saW5rXCIgaHJlZj1cIlwiPlVuaW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtaW1nXCI+IDxpbWcgc3JjPVwic3RhdGljL2ltZy9zaWRlYmFyLW1lbnUtaW1nLnBuZ1wiIGFsdD1cIlwiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyX19uYXYtaXRlbVwiPjxhIGNsYXNzTmFtZT1cInNpZGViYXJfX25hdi1saW5rXCIgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhcl9fbmF2LWxpbmstaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjM5XCIgaGVpZ2h0PVwiMjhcIiB2aWV3Qm94PVwiMCAwIDM5IDI4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMC4wNzM0Nzk5IDI0LjU0NzFDLTAuMDYwMzcyOSAyMy44MjkgMC4wMzIxNzY3IDIzLjA5NTEgMC4wMTkxNzM5IDIyLjM2OThDLTAuMDA5MTI2NDEgMjEuOTQ1IDAuMzM4MTI2IDIxLjUzMzEgMC43OTMyMjYgMjEuNDc2N0MzLjI4ODI0IDIxLjEyNzYgNS43ODU1NSAyMC43ODY0IDguMjgwNTcgMjAuNDM5NUM4LjMyMTExIDE5Ljk3MDQgOC4xNDM2NiAxOS40MSA4LjUyMzggMTkuMDI2N0M4Ljg3Nzk0IDE4LjY0NjkgOS41ODQ2OCAxOC42Njc2IDkuOTEyODEgMTkuMDY4MUMxMC4yMjU2IDE5LjQxOTMgMTAuMDg3MiAxOS45MDU1IDEwLjExNyAyMC4zMjI0QzE0LjM3NTggMjAuMzIyNCAxOC42MzQ3IDIwLjMyMjQgMjIuODkzNSAyMC4zMjI0QzIzLjkxIDIwLjMwNjcgMjQuOTM4IDIwLjM4MzggMjUuOTQxNSAyMC4xOTFDMjcuODEwOCAxOS44NTQ4IDI5LjUyNTcgMTguODMzOSAzMC42NDkzIDE3LjQwMDVDMzEuNzI2MiAxNi4wNTA1IDMyLjI2MzIgMTQuMzM3OSAzMi4xMjc4IDEyLjY1ODFDMzIuMDMyMiAxMS4yNDYxIDMxLjQ1MjQgOS44NzQwMSAzMC41MjE2IDguNzYwMzVDMjkuNjExNCA3LjY2MzExIDI4LjM0OTMgNi44MzIxNiAyNi45NDczIDYuMzc3NDFDMjUuMzgzOSA1Ljg3ODQxIDIzLjY0NzYgNS44Njk4NCAyMi4wNzg5IDYuMzUxNzFDMjAuMzc3OCA2Ljg3OTI3IDE4Ljg4MTcgNy45NzIyMiAxNy45NDYzIDkuNDAxNDJDMTYuNzMzOSAxMS4xODkgMTYuNDY4NSAxMy40OTEyIDE3LjIwNTEgMTUuNDg3M0MxNy40NTc1IDE2LjE4ODMgMTcuODkzNSAxNi44MTA4IDE4LjI4ODIgMTcuNDQ2OUMxOC40MTI4IDE3LjY1OTYgMTguNTQyMSAxNy45MDMgMTguNDgxNyAxOC4xNTIyQzE4LjI4ODkgMTguNzQxOSAxNy4zNzM0IDE5LjAwMTcgMTYuOTA4MyAxOC41MjQ4QzE1Ljc3MSAxNy4xNTg1IDE1LjExMDkgMTUuNDYzIDE0Ljk4MDEgMTMuNzQwNEMxNC44NjIzIDEyLjA1NzggMTUuMjc0NiAxMC4zNDY2IDE2LjE0ODggOC44NzE3MkMxNy4wNTE0IDcuMzQ0NzIgMTguNDQ1NyA2LjA3MzMgMjAuMTA5MyA1LjI3NjYxQzIxLjU3MDIgNC41NzIgMjMuMjMwOCA0LjIyNzIgMjQuODc0NSA0LjI5MDAyQzI2LjY3MTIgNC4zNjE0MSAyOC40NDExIDQuOTI2MDkgMjkuOTE0MiA1Ljg4ODRDMzIuMzI1MSA3LjQzNTM4IDMzLjg2NDEgMTAuMDc2NyAzMy45NzQyIDEyLjgwMjRDMzQuMDYxNCAxNC43MTU2IDMzLjQ0ODcgMTYuNjQ1OSAzMi4yNzkyIDE4LjIxNjRDMzAuNzQxOCAyMC4zMTAzIDI4LjE5NzkgMjEuNzE0NSAyNS40OTYzIDIxLjk4NDNDMjQuODYwNyAyMi4wNTE0IDI0LjIyMDUgMjIuMDM0MyAyMy41ODI2IDIyLjAzNTdDMTkuMDk0MyAyMi4wMzY0IDE0LjYwNjEgMjIuMDM1NyAxMC4xMTg2IDIyLjAzNjRDMTAuMTE1NSAyMi44OTMxIDEwLjExNzggMjMuNzQ5IDEwLjExNyAyNC42MDU3QzE0LjgzMzIgMjQuNjA1NyAxOS41NDg3IDI0LjYwNSAyNC4yNjQxIDI0LjYwNjRDMjUuNDIyMSAyNC42MTY0IDI2LjU4NTUgMjQuNDk1IDI3LjY5OTIgMjQuMTk1OUMzMS4xODcgMjMuMzI5MyAzNC4xOTE0IDIwLjkzNTYgMzUuNjUgMTcuODU0NUMzNi4zMzg0IDE2LjQyODIgMzYuNzIwMSAxNC44NzA1IDM2LjczNjkgMTMuMzA0OUMzNi43ODEzIDEwLjI5NzMgMzUuNDk3OCA3LjI4OTc1IDMzLjIyNjEgNS4xNTMxQzMwLjg5NzkgMi45MDY1MiAyNy41NDAxIDEuNjM3OTUgMjQuMTk0NSAxLjcxNTc2QzIwLjg0NzQgMS43NzkzIDE3LjU1NjIgMy4xOTI3OCAxNS4zMzczIDUuNTMzNkMxMy4yMjE3IDcuNzI2NjUgMTIuMDY2NyAxMC43MSAxMi4yMjQzIDEzLjY2MDRDMTIuMjYxIDEzLjk2MTcgMTIuMTczOCAxNC4yODcyIDExLjkxNiAxNC40ODY0QzExLjU3OTUgMTQuNzc0OCAxMS4wMTU4IDE0Ljc2NjIgMTAuNjg3NiAxNC40NzE0QzEwLjQ5MTggMTQuMzA5NCAxMC4zOTQ3IDE0LjA2NjYgMTAuMzg4NiAxMy44MjYxQzEwLjI1MzIgMTEuMzUxIDEwLjg4MDQgOC44Mzg4OCAxMi4yMDI4IDYuNjg3OTVDMTMuNTM4MyA0LjQ2NzA2IDE1LjU4ODkgMi42MzAyNSAxOC4wMTM2IDEuNDYzMDVDMjEuMDg2MSAtMC4wMjc1MzgzIDI0Ljc1NjcgLTAuNDAxNjExIDI4LjEgMC40NDQzMzhDMzAuODAzOCAxLjExMzI1IDMzLjI4ODEgMi41NTI0MyAzNS4xMSA0LjUzNDg4QzM2Ljg4NzYgNi40MzE2NyAzOC4wNTQ4IDguODE2MDMgMzguNDMwMyAxMS4zMTE4QzM4LjgyNzMgMTMuODY4OSAzOC4zNzkxIDE2LjUyODEgMzcuMTc5OCAxOC44NTU0QzM2LjAwNjUgMjEuMTM1NSAzNC4xMTE5IDIzLjA4NzMgMzEuNzk0MyAyNC4zOTY1QzI5Ljg3NDUgMjUuNDk3MyAyNy42NjQ4IDI2LjE0OTEgMjUuNDE3NiAyNi4yODlDMjQuODA2NCAyNi4zMjkgMjQuMTkzOCAyNi4zMTgzIDIzLjU4MTkgMjYuMzE5QzE5LjA5NDMgMjYuMzE5NyAxNC42MDYxIDI2LjMxOSAxMC4xMTg2IDI2LjMxOTdDMTAuMTE3IDI2LjY4NDUgMTAuMTUyMiAyNy4wNjQzIDEwLjAxMzggMjcuNDEzNEM5Ljc5MTE5IDI4LjAzNjYgOC42Nzk4MyAyOC4wNjAyIDguNDA5ODMgMjcuNDYxMkM4LjIyNTUgMjcuMDY1NyA4LjI3OTA0IDI2LjYyMTcgOC4yODI4NiAyNi4yMDE5QzUuNzg1NTUgMjUuODU0MyAzLjI4NzQ4IDI1LjUxNDUgMC43OTA5MzEgMjUuMTYzOUMwLjQzMTQ0MSAyNS4xNDA0IDAuMTMwMDgxIDI0Ljg3ODQgMC4wNzM0Nzk5IDI0LjU0NzFaTTEuODU1NjMgMjMuNTgwNUMzLjk5NjUxIDIzLjg3NzUgNi4xMzgxNiAyNC4xNzMxIDguMjc5ODEgMjQuNDY5M0M4LjI4Mjg2IDIzLjcwMjYgOC4yNzk4MSAyMi45MzU5IDguMjgwNTcgMjIuMTY4NUM2LjE0MDQ1IDIyLjQ2NDcgNC4wMDExIDIyLjc2NiAxLjg2MDIyIDIzLjA1NjZDMS44NTcxNiAyMy4yMzE1IDEuODU1NjMgMjMuNDA1NiAxLjg1NTYzIDIzLjU4MDVaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTExLjE2MDIgMTcuNDgwNEMxMC45MTg1IDE2Ljg5MzYgMTEuNTI1MSAxNi4yNTU0IDEyLjE2OTkgMTYuMzMyNUMxMi45MDAzIDE2LjQxNzUgMTMuMTgwMiAxNy40MjI2IDEyLjY0NzEgMTcuODY3M0MxMi4xNzgzIDE4LjI1MDcgMTEuMzQwNyAxOC4wNDU4IDExLjE2MDIgMTcuNDgwNFpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTkuNzE2IDEzLjQ4ODRDMTkuNjQyNiAxMi41ODQ2IDE5Ljg3MjggMTEuNjYwOSAyMC4zNzYxIDEwLjg4NDlDMjEuMDg0NCA5Ljc2NTUgMjIuMzQxOCA4Ljk2MzEgMjMuNzIwMSA4Ljc2MzkyQzI0LjY5NzYgOC42MTk3MiAyNS43MjY0IDguNzU5NjQgMjYuNjA4MyA5LjE4NDRDMjcuNTEzOSA5LjYwNTU5IDI4LjI2NjUgMTAuMzA2NiAyOC43MjE2IDExLjE1MDRDMjkuMjY5MyAxMi4xMjk5IDI5LjM4MjUgMTMuMzA0OSAyOS4wNjIgMTQuMzY1N0MyOC43MTQgMTUuNTE5NCAyNy44NDUxIDE2LjUyNTkgMjYuNzA5MiAxNy4wODQ5QzI1Ljg3NjMgMTcuNTEwNCAyNC45MDI2IDE3LjY3ODkgMjMuOTYwMyAxNy41ODM5QzIyLjY3NzYgMTcuNDYxMSAyMS40NjgzIDE2LjgxNjUgMjAuNjg4OSAxNS44NTk5QzIwLjEyODMgMTUuMTc5NiAxOS43ODAzIDE0LjM0NTggMTkuNzE2IDEzLjQ4ODRaTTIxLjU1MDIgMTMuNDE2M0MyMS42MzU4IDE0LjMyNTggMjIuMjQ3IDE1LjE3MzEgMjMuMTE4OSAxNS41ODc5QzI0LjAwODUgMTYuMDI5OCAyNS4xNDI4IDE1Ljk5MiAyNS45OTcxIDE1LjQ5NDRDMjcuMDY0OSAxNC45MDQgMjcuNjMwOSAxMy42NDI2IDI3LjMyMjcgMTIuNTE4OUMyNy4xMjMgMTEuNzMzNyAyNi41MzE4IDExLjA0NDggMjUuNzUwOSAxMC42OTcxQzI1LjAxODkgMTAuMzYwMiAyNC4xMzU0IDEwLjMzMyAyMy4zNzk4IDEwLjYxNzlDMjIuMTk4IDExLjA0MjYgMjEuNDExNyAxMi4yMzk4IDIxLjU1MDIgMTMuNDE2M1pcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj48c3BhbiBjbGFzc05hbWU9XCJzaWRlYmFyX19uYXYtbGluay10aXRsZVwiPtCQ0LrRgdC10YHRgdGD0LDRgNGLPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhcl9fbmF2LWxpbmstYXJyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiOVwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCA5IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMSAxNUw3Ljk0OTExIDcuNjc0TDEgMVwiIHN0cm9rZVdpZHRoPVwiMS41XCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtaXRlbVwiPiA8YSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWxpbmtcIiBocmVmPVwiXCI+0KfQsNGI0Lg8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWl0ZW1cIj4gPGEgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1saW5rXCIgaHJlZj1cIlwiPtCo0LvQsNC90LPQuDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtaXRlbVwiPiA8YSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWxpbmtcIiBocmVmPVwiXCI+0JrQvtC70LHRizwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtaXRlbVwiPiA8YSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWxpbmtcIiBocmVmPVwiXCI+0JzRg9C90LTRiNGC0YPQutC4PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1pdGVtXCI+IDxhIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtbGlua1wiIGhyZWY9XCJcIj7Qp9C40YHRgtC60LAg0Lgg0YPRhdC+0LQgPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1pdGVtXCI+IDxhIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtbGlua1wiIGhyZWY9XCJcIj7QmtC+0LvQsdGLICA8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWl0ZW1cIj4gPGEgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1saW5rXCIgaHJlZj1cIlwiPtCp0LjQv9GG0Ys8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWl0ZW1cIj4gPGEgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1saW5rXCIgaHJlZj1cIlwiPtCa0L7Qu9C/0LDQutC4PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1pdGVtXCI+IDxhIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtbGlua1wiIGhyZWY9XCJcIj7Qo9C/0LvQvtGC0L3QuNGC0LXQu9C4IDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtaXRlbVwiPiA8YSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWxpbmtcIiBocmVmPVwiXCI+0JrQsNC70L7QtNC60Lg8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1pbWdcIj4gPGltZyBzcmM9XCJzdGF0aWMvaW1nL3NpZGViYXItbWVudS1pbWcucG5nXCIgYWx0PVwiXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX25hdi1pdGVtXCI+PGEgY2xhc3NOYW1lPVwic2lkZWJhcl9fbmF2LWxpbmtcIiBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyX19uYXYtbGluay1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzlcIiBoZWlnaHQ9XCIyNlwiIHZpZXdCb3g9XCIwIDAgMzkgMjZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zOC4zNjU4IDcuODUxOTlMMzguMjQxNiA3LjA4MTIzTDM3LjQxNTggNi45NjUyOEMzNy4xNjY5IDYuOTMwMzQgMzEuNjQ0OSA2LjE4NTY2IDI2LjY4MTMgNy45MTEyQzI0LjQ0NDggMy41OTkzNiAyMC4xOTk5IDAuNjMwMTM5IDE5Ljk1NzYgMC40NjMxNDdMMTkuMjg1NyAwTDE4LjYxMzkgMC40NjMwNzdDMTguMzcxNiAwLjYzMDA2OSAxNC4xMjY3IDMuNTk5MjkgMTEuODkwMyA3LjkxMTJDNi45MjY1NiA2LjE4NTY2IDEuNDA0NjcgNi45MzAzNCAxLjE1NTY5IDYuOTY1MjhMMC4zMjk3OTkgNy4wODEyM0wwLjIwNTU3MiA3Ljg1MTk5QzAuMTQ0NjI2IDguMjMwNDggLTEuMjI3MTQgMTcuMTc2OSA0LjAyNDI5IDIyLjA3ODJDOS4wNzE4NiAyNi43ODkyIDE4LjEyMzMgMjUuNzg5MyAxOS4xNzg3IDI1LjY1NEgxOS4zOTI4QzE5LjczNyAyNS42OTgxIDIwLjkzMDggMjUuODM0MiAyMi41NTk4IDI1LjgzNDJDMjUuOTI1NSAyNS44MzQxIDMxLjE0NTggMjUuMjUyOCAzNC41NDcxIDIyLjA3ODJDMzkuNzk4NiAxNy4xNzY5IDM4LjQyNjggOC4yMzA0OCAzOC4zNjU4IDcuODUxOTlaTTM0LjY5NjcgOC44OTcyNkwyNy43NDU5IDE1LjM4NDZDMjcuOTMwMiAxNC42Mjc5IDI4LjAzNTMgMTMuODQ1NiAyOC4wMzUzIDEzLjA0MjdDMjguMDM1MyAxMS45NDQxIDI3Ljg0MDEgMTAuODgzNyAyNy41MTEzIDkuODc1NjVDMzAuMDM1MyA5LjAwODIxIDMyLjc5MyA4Ljg2MjEgMzQuNjk2NyA4Ljg5NzI2Wk0yNS43NzM4IDEzLjA0MjdDMjUuNzczOCAxNS42NzY1IDI0LjM0MTcgMTguMTMwOCAyMi43NTg0IDIwLjAzOTdMMjAuNDE2NiAyMi4yMjUzVjMuNjI0ODhDMjIuNTM3OSA1LjUyOTM2IDI1Ljc3MzggOS4wODM0NCAyNS43NzM4IDEzLjA0MjdaTTE4LjE1NSAzLjYyNDk1VjIyLjIyNTRMMTUuODEzMSAyMC4wMzk3QzE0LjIyOTggMTguMTMwOSAxMi43OTc3IDE1LjY3NjYgMTIuNzk3NyAxMy4wNDI3QzEyLjc5NzggOS4wODMyMyAxNi4wMzM4IDUuNTI5MTUgMTguMTU1IDMuNjI0OTVaTTExLjA2MDIgOS44NzU1MUMxMC43MzEzIDEwLjg4MzYgMTAuNTM2MiAxMS45NDQxIDEwLjUzNjIgMTMuMDQyN0MxMC41MzYyIDEzLjg0NTcgMTAuNjQxMiAxNC42MjggMTAuODI1NiAxNS4zODQ3TDMuODcyNDEgOC44OTUwOEM1Ljc3NDAxIDguODU4OCA4LjUyOTc1IDkuMDA0NTUgMTEuMDYwMiA5Ljg3NTUxWk01LjYyMzQ5IDIwLjU4NTZDMi42MjM3NCAxNy43ODU5IDIuMjE5NDIgMTMuMTM3MSAyLjI3NjYgMTAuMzkwN0wxNC4wNTgzIDIxLjM4N0MxNC44MDkyIDIyLjI4ODkgMTUuNTg0MyAyMy4wNzI3IDE2LjI3ODIgMjMuNzEyOUMxMy4zMDg3IDIzLjczODEgOC41MzM2NyAyMy4zMDE5IDUuNjIzNDkgMjAuNTg1NlpNMzIuOTQ4IDIwLjU4NTZDMzAuMDM3NyAyMy4zMDE5IDI1LjI2MjUgMjMuNzM4MSAyMi4yOTMzIDIzLjcxMjlDMjIuOTg3MiAyMy4wNzI3IDIzLjc2MjMgMjIuMjg4OCAyNC41MTMyIDIxLjM4NjlMMzYuMjk0OSAxMC4zOTA3QzM2LjM1MjEgMTMuMTM3MyAzNS45NDc3IDE3Ljc4NTkgMzIuOTQ4IDIwLjU4NTZaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PHNwYW4gY2xhc3NOYW1lPVwic2lkZWJhcl9fbmF2LWxpbmstdGl0bGVcIj7QotCw0LHQsNC6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhcl9fbmF2LWxpbmstYXJyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiOVwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCA5IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMSAxNUw3Ljk0OTExIDcuNjc0TDEgMVwiIHN0cm9rZVdpZHRoPVwiMS41XCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtaXRlbVwiPiA8YSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWxpbmtcIiBocmVmPVwiXCI+0KfQsNGI0Lg8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWl0ZW1cIj4gPGEgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1saW5rXCIgaHJlZj1cIlwiPtCo0LvQsNC90LPQuDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtaXRlbVwiPiA8YSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWxpbmtcIiBocmVmPVwiXCI+0JrQvtC70LHRizwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtaXRlbVwiPiA8YSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWxpbmtcIiBocmVmPVwiXCI+0JzRg9C90LTRiNGC0YPQutC4PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1pdGVtXCI+IDxhIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtbGlua1wiIGhyZWY9XCJcIj7Qp9C40YHRgtC60LAg0Lgg0YPRhdC+0LQgPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1pdGVtXCI+IDxhIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtbGlua1wiIGhyZWY9XCJcIj7QmtC+0LvQsdGLICA8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWl0ZW1cIj4gPGEgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1saW5rXCIgaHJlZj1cIlwiPtCp0LjQv9GG0Ys8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWl0ZW1cIj4gPGEgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1saW5rXCIgaHJlZj1cIlwiPtCa0L7Qu9C/0LDQutC4PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1pdGVtXCI+IDxhIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtbGlua1wiIGhyZWY9XCJcIj7Qo9C/0LvQvtGC0L3QuNGC0LXQu9C4IDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtaXRlbVwiPiA8YSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWxpbmtcIiBocmVmPVwiXCI+0JrQsNC70L7QtNC60Lg8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1pbWdcIj4gPGltZyBzcmM9XCJzdGF0aWMvaW1nL3NpZGViYXItbWVudS1pbWcucG5nXCIgYWx0PVwiXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX25hdi1pdGVtXCI+PGEgY2xhc3NOYW1lPVwic2lkZWJhcl9fbmF2LWxpbmtcIiBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyX19uYXYtbGluay1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgNDAgNDBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOS42MTA2IDQuMDIxMDRDMjAuMTk4MSAzLjk1NjQ5IDIwLjgxMjIgNC4wMzg5MyAyMS4zNDMgNC4yODkzNkMyNS40NzY5IDYuMjcxMDEgMjkuNjEzMyA4LjI0NzIxIDMzLjc0OCAxMC4yMjgxQzM0LjEzOTcgMTAuNDI4IDM0LjU2NTUgMTAuNTc4OCAzNC45MTM4IDEwLjg0NDhDMzUuNjA2MiAxMS4zNTk3IDM2LjAyNjIgMTIuMTg0MSAzNS45OTg3IDEzLjAxMTZDMzYuMDAwNCAxNy45Mzc3IDM1Ljk5OTYgMjIuODYzOCAzNS45OTk2IDI3Ljc4OTlDMzUuOTYyOSAyOC43NTQzIDM1LjMyOTYgMjkuNjc4MyAzNC4zOTggMzAuMTAwNkMzMC4wNjQ5IDMyLjE3NDggMjUuNzMxOSAzNC4yNDkgMjEuMzk4OSAzNi4zMjI0QzIwLjU1ODEgMzYuNzM2MSAxOS41MDU2IDM2Ljc0NDcgMTguNjU0OSAzNi4zNDk2QzE0LjI4ODUgMzQuMjU3NSA5LjkyMDQ0IDMyLjE2ODUgNS41NTMyMyAzMC4wNzhDNC42MjE2MyAyOS42MzYzIDMuOTkzMzMgMjguNjg0MyA0LjAwMDgzIDI3LjcwNzVDNCAyMi43ODM3IDMuOTk5MTcgMTcuODU5MSA0LjAwMTY3IDEyLjkzNDZDMy45OTE2NyAxMS45MzgzIDQuNjQ2NjIgMTAuOTcyNCA1LjYwNDg5IDEwLjUzNzZDOS45Mzc5NCA4LjQ2MzQyIDE0LjI3MSA2LjM4OTIyIDE4LjYwNDkgNC4zMTUwMkMxOC45MTc0IDQuMTYxODEgMTkuMjU5OCA0LjA2MzgyIDE5LjYxMDYgNC4wMjEwNFpNMTkuNjI5IDYuMDY0MTNDMTUuMjQzNCA4LjE1OTMzIDEwLjg2MjkgMTAuMjYyMyA2LjQ3NzM0IDEyLjM1NTlDMTAuOTg4NyAxNC41NjcgMTUuNDkxNyAxNi43OTA1IDE5Ljk5OTggMTkuMDA3MUMyNC41MDM2IDE2Ljc4NTEgMjkuMDE1IDE0LjU3NzkgMzMuNTE1NiAxMi4zNDk3QzI5LjE0IDEwLjI2NyAyNC43NzQ1IDguMTY3MTEgMjAuNDAzMSA2LjA3ODkxQzIwLjE2NjQgNS45NjM4MSAxOS44NzA2IDUuOTYwNjkgMTkuNjI5IDYuMDY0MTNaTTYuMTMwNjkgMTQuNjUyNkM2LjEzODE5IDE4Ljg3NTYgNi4xMzMxOSAyMy4wOTk1IDYuMTMzMTkgMjcuMzIyNUM2LjE0MTUzIDI3LjU3OTIgNi4wODgyIDI3Ljg2ODUgNi4yNjczNSAyOC4wODc4QzYuMzg5MDEgMjguMjY5OCA2LjYxNDgzIDI4LjM0NTIgNi44MDg5OCAyOC40NDA5QzEwLjg1MDQgMzAuMzc1MSAxNC44OTA5IDMyLjMwOTMgMTguOTMyMyAzNC4yNDI3QzE4LjkzNDggMjkuODU2NCAxOC45Mjk4IDI1LjQ2OTIgMTguOTM0OCAyMS4wODJDMTQuNjY5MyAxOC45MzQ3IDEwLjM5NjIgMTYuODAwNyA2LjEzMDY5IDE0LjY1MjZaTTIxLjE3MjIgMjEuMDI2QzIxLjE3NTUgMjUuNDE1NSAyMS4xNzQ3IDI5LjgwNSAyMS4xNzMgMzQuMTk0NUMyNS4yNTQ0IDMyLjIzODUgMjkuMzM2NyAzMC4yODQ5IDMzLjQxOTcgMjguMzMyQzMzLjY3OCAyOC4yMjIzIDMzLjg2NTUgMjcuOTczNSAzMy44NjM5IDI3LjcwNTlDMzMuODY5NyAyMy4zNTQ2IDMzLjg2MDUgMTkuMDA0IDMzLjg2ODkgMTQuNjUzM0MyOS42MzkxIDE2Ljc4MTIgMjUuNDA0NCAxOC45MDEzIDIxLjE3MjIgMjEuMDI2WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjxzcGFuIGNsYXNzTmFtZT1cInNpZGViYXJfX25hdi1saW5rLXRpdGxlXCI+0KPQs9C+0LvRjDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJfX25hdi1saW5rLWFyclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjlcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgOSAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEgMTVMNy45NDkxMSA3LjY3NEwxIDFcIiBzdHJva2VXaWR0aD1cIjEuNVwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj48L2E+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWl0ZW1cIj4gPGEgY2xhc3NOYW1lPVwic2lkZWJhcl9fbWVudS1saW5rXCIgaHJlZj1cIlwiPjI1ICogMjUg0LzQvDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtaXRlbVwiPiA8YSBjbGFzc05hbWU9XCJzaWRlYmFyX19tZW51LWxpbmtcIiBocmVmPVwiXCI+NTAgKiA1MCDQvNC8PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJfX21lbnUtaW1nXCI+IDxpbWcgc3JjPVwic3RhdGljL2ltZy9zaWRlYmFyLW1lbnUtaW1nLnBuZ1wiIGFsdD1cIlwiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyX19ib3RcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2lkZWJhcl9fcGFnZS1uYXZcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyX19wYWdlLW5hdi1pdGVtXCI+PGEgY2xhc3NOYW1lPVwic2lkZWJhcl9fcGFnZS1uYXYtbGlua1wiIGhyZWY9XCJcIj7QlNC+0YHRgtCw0LLQutCwINC4INC+0L/Qu9Cw0YLQsDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX3BhZ2UtbmF2LWl0ZW1cIj48YSBjbGFzc05hbWU9XCJzaWRlYmFyX19wYWdlLW5hdi1saW5rXCIgaHJlZj1cIlwiPtCR0LvQvtCzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhcl9fcGFnZS1uYXYtaXRlbVwiPjxhIGNsYXNzTmFtZT1cInNpZGViYXJfX3BhZ2UtbmF2LWxpbmtcIiBocmVmPVwiXCI+0JrQvtC90YLQsNC60YLRizwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNvY2lhbHNcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzb2NpYWxzX19pdGVtXCI+PGEgY2xhc3NOYW1lPVwic29jaWFsc19faXRlbS1saW5rXCIgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAxOCAxOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05IDE4QzEzLjk3MDUgMTggMTggMTMuOTcwNSAxOCA5QzE4IDQuMDI5NDUgMTMuOTcwNSAwIDkgMEM0LjAyOTQ1IDAgMCA0LjAyOTQ1IDAgOUMwIDEzLjk3MDUgNC4wMjk0NSAxOCA5IDE4WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMy4zNTE2MiA5LjQ0MDI2QzQuNDAzNzEgOC44NjA3NCA1LjU3ODEzIDguMzc3MDYgNi42NzU0NiA3Ljg5MDkxQzguNTYzMjggNy4wOTQ2NCAxMC40NTg2IDYuMzEyMTYgMTIuMzczMSA1LjU4MzY5QzEyLjc0NTUgNS40NTk1NiAxMy40MTQ4IDUuMzM4MTggMTMuNDgwNCA1Ljg5MDE4QzEzLjQ0NDUgNi42NzE1MyAxMy4yOTY3IDcuNDQ4MyAxMy4xOTUzIDguMjI1MDhDMTIuOTM3OSA5LjkzMzI4IDEyLjY0MDUgMTEuNjM1NiAxMi4zNTA0IDEzLjMzODJDMTIuMjUwNSAxMy45MDUzIDExLjU0IDE0LjE5ODkgMTEuMDg1NSAxMy44MzZDOS45OTMwMSAxMy4wOTgxIDguODkyMTYgMTIuMzY3MyA3LjgxMzY2IDExLjYxMjNDNy40NjAzNyAxMS4yNTMzIDcuNzg3OTcgMTAuNzM3OCA4LjEwMzUgMTAuNDgxNUM5LjAwMzI3IDkuNTk0NzMgOS45NTc1IDguODQxMzUgMTAuODEwMiA3LjkwODhDMTEuMDQwMyA3LjM1MzMxIDEwLjM2MDYgNy44MjE0NiAxMC4xMzY0IDcuOTY0OUM4LjkwNDY1IDguODEzNzUgNy43MDMgOS43MTQ0MyA2LjQwNDMgMTAuNDYwNUM1Ljc0MDkyIDEwLjgyNTYgNC45Njc3NSAxMC41MTM2IDQuMzA0NjcgMTAuMzA5OEMzLjcxMDE0IDEwLjA2MzYgMi44Mzg5MyA5LjgxNTY0IDMuMzUxNTYgOS40NDAzTDMuMzUxNjIgOS40NDAyNlpcIiBmaWxsPVwiIzFCMUIxQlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzb2NpYWxzX19pdGVtXCI+PGEgY2xhc3NOYW1lPVwic29jaWFsc19faXRlbS1saW5rXCIgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAxOCAxOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xNC44ODQyIDQuMTk1ODNDMTQuODg0MiA0Ljc5MjM2IDE0LjQwMDYgNS4yNzU4MyAxMy44MDQyIDUuMjc1ODNDMTMuMjA3OCA1LjI3NTgzIDEyLjcyNDIgNC43OTIzNiAxMi43MjQyIDQuMTk1ODNDMTIuNzI0MiAzLjU5OTMgMTMuMjA3OCAzLjExNTgzIDEzLjgwNDIgMy4xMTU4M0MxNC40MDA3IDMuMTE1ODMgMTQuODg0MiAzLjU5OTMgMTQuODg0MiA0LjE5NTgzWk05IDEyQzcuMzQzMTYgMTIgNi4wMDAwNSAxMC42NTY4IDYuMDAwMDUgOUM2LjAwMDA1IDcuMzQzMTYgNy4zNDMxNiA2LjAwMDA1IDkgNi4wMDAwNUMxMC42NTY4IDYuMDAwMDUgMTIgNy4zNDMxNiAxMiA5QzEyIDEwLjY1NjggMTAuNjU2OCAxMiA5IDEyWk05IDQuMzc4MzZDNi40NDc1MiA0LjM3ODM2IDQuMzc4MzYgNi40NDc1MiA0LjM3ODM2IDlDNC4zNzgzNiAxMS41NTI1IDYuNDQ3NTIgMTMuNjIxNiA5IDEzLjYyMTZDMTEuNTUyNSAxMy42MjE2IDEzLjYyMTYgMTEuNTUyNSAxMy42MjE2IDlDMTMuNjIxNiA2LjQ0NzUyIDExLjU1MjUgNC4zNzgzNiA5IDQuMzc4MzZaTTkgMS42MjE2OUMxMS40MDMxIDEuNjIxNjkgMTEuNjg3OCAxLjYzMDgzIDEyLjYzNjcgMS42NzQxNEMxMy41MTQyIDEuNzE0MjIgMTMuOTkwOCAxLjg2MDc1IDE0LjMwNzkgMS45ODQwOEMxNC43Mjc5IDIuMTQ3MzQgMTUuMDI3NyAyLjM0MjM5IDE1LjM0MjcgMi42NTczOUMxNS42NTc3IDIuOTcyMjUgMTUuODUyOCAzLjI3MjA2IDE2LjAxNjEgMy42OTIyNUMxNi4xMzkyIDQuMDA5MzYgMTYuMjg1OSA0LjQ4NTk0IDE2LjMyNiA1LjM2MzQ0QzE2LjM2OTMgNi4zMTI1MiAxNi4zNzg1IDYuNTk3MTQgMTYuMzc4NSA5LjAwMDI4QzE2LjM3ODUgMTEuNDAzNCAxNi4zNjkzIDExLjY4OCAxNi4zMjYgMTIuNjM3QzE2LjI4NTkgMTMuNTE0NSAxNi4xMzk0IDEzLjk5MTEgMTYuMDE2MSAxNC4zMDgyQzE1Ljg1MjggMTQuNzI4MiAxNS42NTc3IDE1LjAyOCAxNS4zNDI3IDE1LjM0M0MxNS4wMjc5IDE1LjY1OCAxNC43MjgxIDE1Ljg1MzEgMTQuMzA3OSAxNi4wMTYzQzEzLjk5MDggMTYuMTM5NSAxMy41MTQyIDE2LjI4NjIgMTIuNjM2NyAxNi4zMjYzQzExLjY4NzggMTYuMzY5NiAxMS40MDMxIDE2LjM3ODcgOSAxNi4zNzg3QzYuNTk2NzIgMTYuMzc4NyA2LjMxMjA5IDE2LjM2OTYgNS4zNjMxNiAxNi4zMjYzQzQuNDg1NjYgMTYuMjg2MiA0LjAwOTA4IDE2LjEzOTcgMy42OTE5NyAxNi4wMTYzQzMuMjcxOTIgMTUuODUzMSAyLjk3MjExIDE1LjY1OCAyLjY1NzExIDE1LjM0M0MyLjM0MjI1IDE1LjAyODIgMi4xNDcwNiAxNC43Mjg0IDEuOTgzOCAxNC4zMDgyQzEuODYwNjEgMTMuOTkxMSAxLjcxMzk0IDEzLjUxNDUgMS42NzM4NiAxMi42MzdDMS42MzA1NSAxMS42ODc5IDEuNjIxNDEgMTEuNDAzMyAxLjYyMTQxIDkuMDAwMjhDMS42MjE0MSA2LjU5NzE0IDEuNjMwNTUgNi4zMTI1MiAxLjY3Mzg2IDUuMzYzNDRDMS43MTM5NCA0LjQ4NTk0IDEuODYwNDcgNC4wMDkzNiAxLjk4MzggMy42OTIyNUMyLjE0NzA2IDMuMjcyMiAyLjM0MjExIDIuOTcyMzkgMi42NTcxMSAyLjY1NzM5QzIuOTcxOTcgMi4zNDIzOSAzLjI3MTc4IDIuMTQ3MzQgMy42OTE5NyAxLjk4NDA4QzQuMDA5MDggMS44NjA4OSA0LjQ4NTY2IDEuNzE0MjIgNS4zNjMxNiAxLjY3NDE0QzYuMzEyMjMgMS42MzA4MyA2LjU5Njg2IDEuNjIxNjkgOSAxLjYyMTY5Wk05IDBDNi41NTU4IDAgNi4yNDkyMyAwLjAxMDQwNjMgNS4yODkzMyAwLjA1NDE0MDZDNC4zMzEzOSAwLjA5Nzg3NSAzLjY3NzA2IDAuMjUwMDMxIDMuMTA0NzIgMC40NzI1QzIuNTEyODMgMC43MDI0MjIgMi4wMTA5NCAxLjAxMDI1IDEuNTEwNTkgMS41MTA1OUMxLjAxMDI1IDIuMDEwOTQgMC43MDI0MjIgMi41MTI4MyAwLjQ3MjUgMy4xMDQ3MkMwLjI1MDAzMSAzLjY3NzIgMC4wOTc4NzUgNC4zMzEzOSAwLjA1NDE0MDYgNS4yODkzM0MwLjAxMDQwNjMgNi4yNDkyMyAwIDYuNTU1OCAwIDlDMCAxMS40NDQyIDAuMDEwNDA2MyAxMS43NTA4IDAuMDU0MTQwNiAxMi43MTA3QzAuMDk3ODc1IDEzLjY2ODYgMC4yNTAwMzEgMTQuMzIyOCAwLjQ3MjUgMTQuODk1M0MwLjcwMjQyMiAxNS40ODcyIDEuMDEwMjUgMTUuOTg5MSAxLjUxMDU5IDE2LjQ4OTRDMi4wMTA5NCAxNi45ODk3IDIuNTEyODMgMTcuMjk3NCAzLjEwNDcyIDE3LjUyNzVDMy42NzcyIDE3Ljc1IDQuMzMxMzkgMTcuOTAyMSA1LjI4OTMzIDE3Ljk0NTlDNi4yNDkyMyAxNy45ODk2IDYuNTU1OCAxOCA5IDE4QzExLjQ0NDIgMTggMTEuNzUwOCAxNy45ODk2IDEyLjcxMDcgMTcuOTQ1OUMxMy42Njg2IDE3LjkwMjEgMTQuMzIyOCAxNy43NSAxNC44OTUzIDE3LjUyNzVDMTUuNDg3MiAxNy4yOTc0IDE1Ljk4OTEgMTYuOTg5NyAxNi40ODk0IDE2LjQ4OTRDMTYuOTg5NyAxNS45ODkxIDE3LjI5NzQgMTUuNDg3MiAxNy41Mjc1IDE0Ljg5NTNDMTcuNzUgMTQuMzIyOCAxNy45MDIxIDEzLjY2ODYgMTcuOTQ1OSAxMi43MTA3QzE3Ljk4OTYgMTEuNzUwOCAxOCAxMS40NDQyIDE4IDlDMTggNi41NTU4IDE3Ljk4OTYgNi4yNDkyMyAxNy45NDU5IDUuMjg5MzNDMTcuOTAyMSA0LjMzMTM5IDE3Ljc1IDMuNjc3MiAxNy41Mjc1IDMuMTA0NzJDMTcuMjk3NCAyLjUxMjgzIDE2Ljk4OTcgMi4wMTA5NCAxNi40ODk0IDEuNTEwNTlDMTUuOTg5MSAxLjAxMDI1IDE1LjQ4NzIgMC43MDI1NjMgMTQuODk1MyAwLjQ3MjVDMTQuMzIyOCAwLjI1MDAzMSAxMy42Njg2IDAuMDk3ODc1IDEyLjcxMDcgMC4wNTQxNDA2QzExLjc1MDggMC4wMTA0MDYzIDExLjQ0NDIgMCA5IDBaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNvY2lhbHNfX2l0ZW1cIj48YSBjbGFzc05hbWU9XCJzb2NpYWxzX19pdGVtLWxpbmtcIiBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjlcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgOSAxOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01Ljc4NTcxIDE4VjkuOTk5OTdIOC4zNTcxNEw5IDYuNjY2NjRINS43ODU3MVY1LjMzMzMxQzUuNzg1NzEgMy45OTk5OSA2LjQyOTgzIDMuMzMzMzIgNy43MTQyOCAzLjMzMzMySDlWMEM4LjM1NzE0IDAgNy41NTk5NSAwIDYuNDI4NTcgMEM0LjA2NjA2IDAgMi41NzE0MyAxLjkyMDY1IDIuNTcxNDMgNC42NjY2NVY2LjY2NjY0SDBWOS45OTk5N0gyLjU3MTQzVjE3Ljk5OTlMNS43ODU3MSAxOFpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic29jaWFsc19faXRlbVwiPjxhIGNsYXNzTmFtZT1cInNvY2lhbHNfX2l0ZW0tbGlua1wiIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjJcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMjIgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjEuNzg4IDMuMDg1NUMyMS43MjM0IDIuMzY0NjYgMjEuNDA3IDEuNjg5NjEgMjAuODk0MiAxLjE3ODg2QzIwLjM4MTQgMC42NjgxMDggMTkuNzA1MiAwLjM1NDMwNCAxOC45ODQxIDAuMjkyNTM0QzE3LjI1OTcgMC4xNDk0NDYgMTQuNzAzOCAwIDExLjU1MDEgMEM3Ljc1MjM3IDAgNC44ODU2MiAwLjE1NTE1NSAzLjAzMjI1IDAuMzAwNjUyQzIuMzA3NzcgMC4zNTg4NTQgMS42MjcyMyAwLjY3MTQ0NyAxLjExMTA1IDEuMTgzMTJDMC41OTQ4NjQgMS42OTQ3OSAwLjI3NjMwOSAyLjM3MjU2IDAuMjExNzUgMy4wOTY1QzAuMDk4Mjk2MSA0LjI5MDIzIDAgNS44NjY3OSAwIDcuNzQ2NTNDMCA5LjU3OTQ4IDAuMDk3NDgxOSAxMS4xMjgyIDAuMjEwNDA4IDEyLjMwNzFDMC4yNzU2MTIgMTMuMDMwNCAwLjU5NDQzNSAxMy43MDczIDEuMTEwNTIgMTQuMjE4M0MxLjYyNjYxIDE0LjcyOTIgMi4zMDY3MiAxNS4wNDEzIDMuMDMwNjMgMTUuMDk5MkM0Ljg4MzkzIDE1LjI0NDcgNy43NTEyMyAxNS40IDExLjU1MDEgMTUuNEMxNC43MDM4IDE1LjQgMTcuMjU5NyAxNS4yNTA2IDE4Ljk4NDEgMTUuMTA3NEMxOS43MDUyIDE1LjA0NTcgMjAuMzgxNSAxNC43MzE5IDIwLjg5NDIgMTQuMjIxMUMyMS40MDcgMTMuNzEwNCAyMS43MjM1IDEzLjAzNTMgMjEuNzg4IDEyLjMxNDVDMjEuOTAxNiAxMS4xMjcgMjIgOS41NjEwOCAyMiA3LjdDMjIgNS44Mzg5MiAyMS45MDE2IDQuMjcyOTcgMjEuNzg4IDMuMDg1NVpNOC41NTM1MyAxMC45MzI3VjQuNDY3MzRMMTQuOTMxNCA3LjdMOC41NTM1MyAxMC45MzI3WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz48L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJhcl9fbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJiYXJfX2xpc3QtaXRlbVwiPjxhIGNsYXNzTmFtZT1cImJhcl9fbGlzdC1pdGVtLWxpbmsgY2FydC1saW5rXCIgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjJcIiBoZWlnaHQ9XCIyMlwiIHZpZXdCb3g9XCIwIDAgMjIgMjJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAuNDgzODI4IDBIMi44MTI3M0MyLjk0MTIxIDAuMDMzOTQ1MyAzLjA2ODQgMC4wOTIzODI4IDMuMTUzNDggMC4xOTg1MTZDMy4yNTE0NSAwLjMwODA4NiAzLjI3MjA3IDAuNDU4NDc3IDMuMzAwODYgMC41OTY4MzZDMy41MTg3MSAxLjY1ODU5IDMuNzM1NyAyLjcyMDM1IDMuOTU1MjcgMy43ODE2OEM5Ljc4NTI3IDMuNzg4OTggMTUuNjE1NyAzLjc4MDgyIDIxLjQ0NTcgMy43ODU1NUMyMS43MjAzIDMuNzc3ODEgMjEuOTYwOSAzLjk5OTEgMjIgNC4yNjcyM1Y0LjQyNzkzQzIxLjUwODQgNy4xMjY4IDIxLjA1ODEgOS44MzQyNiAyMC41NzUyIDEyLjUzNDhDMjAuNTQwOCAxMi43MDE2IDIwLjQyNDMgMTIuODQ4NSAyMC4yNjg4IDEyLjkxODZDMjAuMTExNSAxMi45OTQ2IDE5LjkzMjggMTIuOTY1OCAxOS43NjQzIDEyLjk3MUMxNS4xMjI5IDEyLjk3MSAxMC40ODE0IDEyLjk2OTcgNS44Mzk4OCAxMi45NzE4QzUuOTQxNzIgMTMuNjE2OCA2LjEwMDI3IDE0LjI1MTQgNi4yMTUgMTQuODk0M0MxMC41MzA0IDE0LjkwNzYgMTQuODQ2NiAxNC44OTU1IDE5LjE2MjMgMTQuOTAwN0MxOS4zOTM1IDE0LjkwOCAxOS42NTYxIDE0Ljg1MyAxOS44NTMzIDE1LjAwNzNDMjAuMTAyOSAxNS4xNzgzIDIwLjE1MDIgMTUuNTYyOSAxOS45NTY4IDE1Ljc5MzJDMTkuODUxMSAxNS45MjgxIDE5LjY4MDEgMTYuMDA0NiAxOS41MDk1IDE1Ljk5OTRDMTQuOTM4NSAxNi4wMDAzIDEwLjM2NzkgMTUuOTk5OCA1Ljc5NzM0IDE1Ljk5OThDNS42MzUzNSAxNi4wMDU0IDUuNDcwNzggMTUuOTQ0IDUuMzYzNzkgMTUuODE5NEM1LjIzODc1IDE1LjY5MDUgNS4yMjExMyAxNS41MDM2IDUuMTg1OSAxNS4zMzY0QzUuMDA2MjkgMTQuNDQ2NSA0LjgyNDk2IDEzLjU1NzUgNC42NDMyIDEyLjY2OEM0LjU0OTk2IDEyLjA5NTcgNC40MTcxOSAxMS41MzA3IDQuMzA1MDQgMTAuOTYxOEMzLjg5NjQxIDguOTY4MDEgMy40ODY0OCA2Ljk3NDI2IDMuMDc3ODUgNC45ODA1MUMzLjAzNzAzIDQuNzEyODEgMi45MzQzNCA0LjQ1ODQ0IDIuOTE0NTcgNC4xODczQzIuNzAzMTYgMy4xNTkwNiAyLjQ5MzQ4IDIuMTI5OTYgMi4yODA3OCAxLjEwMjE1QzEuNjkyNTQgMS4wOTUyNyAxLjEwMzQ0IDEuMTA0NzMgMC41MTUxOTUgMS4wOTc4NUMwLjI1NzM4MyAxLjA4OTY5IDAuMDQzMzk4NCAwLjg3NjEzMyAwIDAuNjI3MzQ0VjAuNDg0MjU4QzAuMDMzOTQ1MyAwLjIzNzE4OCAwLjIzNjc1OCAwLjAzNDM3NSAwLjQ4MzgyOCAwWk00LjE4MTI5IDQuODg0MjZDNC42NTgyNCA3LjIxMzE2IDUuMTM2OTEgOS41NDIwNyA1LjYxNTE2IDExLjg3MUMxMC4yNzA0IDExLjg2NzEgMTQuOTI1MiAxMS44NzcgMTkuNTggMTEuODY1OEMxOS45NzgzIDkuNTM3NzcgMjAuMzk0NyA3LjIxMjMxIDIwLjc5MjYgNC44ODM4M0MxNS4yNTU2IDQuODg1MTIgOS43MTg2NyA0Ljg4NDI2IDQuMTgxMjkgNC44ODQyNlpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk03LjMwMjEgMTcuMzYxNUM3Ljk1NzM3IDE3LjI3NiA4LjY0MzU4IDE3LjQ5MDkgOS4xMzMgMTcuOTM0M0M5LjY1MDM0IDE4LjM4ODEgOS45NDU1NCAxOS4wODE2IDkuOTEwNzMgMTkuNzY5MUM5Ljg5MDk3IDIwLjM1MzkgOS42MzI3MyAyMC45MjI0IDkuMjE1NSAyMS4zMzA2QzguODA4NTggMjEuNzM1MyA4LjI0OTEzIDIxLjk3MjEgNy42NzcyMiAyMkg3LjQ5Mjg4QzcuMDg2NCAyMS45NzUxIDYuNjgyNDkgMjEuODU4MiA2LjM0MDAzIDIxLjYzNTZDNS43Nzk3MiAyMS4yODMzIDUuMzgxNCAyMC42ODEzIDUuMjg2NDQgMjAuMDI1NkM1LjE3ODE1IDE5LjM1MzYgNS4zODY1NSAxOC42Mzg2IDUuODQwMyAxOC4xMzE1QzYuMjExOTggMTcuNzA3NCA2Ljc0MjIyIDE3LjQyNzMgNy4zMDIxIDE3LjM2MTVaTTcuMzMwMDMgMTguNDY5M0M2Ljc0NjA4IDE4LjU4NCA2LjMwMjIyIDE5LjE3MDkgNi4zNjAyMyAxOS43NjU2QzYuMzk2NzUgMjAuNDA1NCA3LjAwNTE5IDIwLjk0NjggNy42NDcxNCAyMC44OTg3QzguMzIyNjEgMjAuODgyIDguODk3OTYgMjAuMjIxMSA4LjgwNzcyIDE5LjU0ODZDOC43NTc4OCAxOC44NDgyIDguMDE1ODEgMTguMjk3NCA3LjMzMDAzIDE4LjQ2OTNaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUuNjE2NyAxOC4wMjMzQzE2LjA2OTUgMTcuNTY4NiAxNi43MTcxIDE3LjMxMjYgMTcuMzU4NiAxNy4zNDY1QzE3Ljg0OTcgMTcuMzY0MSAxOC4zMzI3IDE3LjU0NzIgMTguNzE0MyAxNy44NTY1QzE5LjIxNTcgMTguMjUzNiAxOS41MzkzIDE4Ljg2NzIgMTkuNTc5NyAxOS41MDYxQzE5LjYzNTEgMjAuMTg5MyAxOS4zNjA1IDIwLjg4NjcgMTguODYyNSAyMS4zNTU5QzE4LjQ1NjUgMjEuNzQ2OSAxNy45MDYgMjEuOTczOCAxNy4zNDQ0IDIySDE3LjE2MjJDMTYuNzEzMiAyMS45NzI1IDE2LjI2ODEgMjEuODI5IDE1LjkwMzcgMjEuNTYyMkMxNS4zMzk1IDIxLjE2MTMgMTQuOTY5MSAyMC40OTc0IDE0LjkzNiAxOS44MDQ3QzE0Ljg5MTggMTkuMTQ5NSAxNS4xNTA5IDE4LjQ4NDMgMTUuNjE2NyAxOC4wMjMzWk0xNy4wMzU5IDE4LjQ2MTVDMTYuNDIzMiAxOC41NjgxIDE1Ljk0ODQgMTkuMTkyNCAxNi4wMzc4IDE5LjgxMzhDMTYuMTAwMSAyMC40MzI5IDE2LjY5MjYgMjAuOTQyMSAxNy4zMTYxIDIwLjg5OTJDMTguMDA3IDIwLjg4MzMgMTguNTkyNyAyMC4xOTIzIDE4LjQ3NjcgMTkuNTA2MUMxOC40MDEgMTguODM1OCAxNy42OTk0IDE4LjMxOTMgMTcuMDM1OSAxOC40NjE1WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyX190b29sdGlwXCI+IFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyX190b29sdGlwLXRpdGxlXCI+0JrQvtGA0LfQuNC90LAg4oCTIDIzIDYzOSDQs9GA0L08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcl9fdG9vbHRpcC10ZXh0XCI+NSDRgtC+0LLQsNGA0L7QsjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj48L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmFyX19saXN0LWl0ZW1cIj48YSBjbGFzc05hbWU9XCJiYXJfX2xpc3QtaXRlbS1saW5rXCIgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjAgMThcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwLjY1ODMgMC4wNjg3Mjc4QzEwLjIzNjcgLTAuMDIyNTQxNyA5Ljc5ODU5IC0wLjAyMTI3NDEgOS4zNzYyMSAwLjA2MjgxMjFDOC45MzAyMiAwLjE4NDkyNyA4LjUxNTcgMC40MTkwMTcgOC4xNjgyNiAwLjcyNzg5NkM3Ljk1MTY5IDAuOTU5MDI4IDcuNzE2ODkgMS4xODYzNiA3LjU4MDI0IDEuNDc4NzZDNy4zMTAyNCAxLjk0MDE4IDcuMTgwNjIgMi40ODYxIDcuMjAwMDkgMy4wMjIzMUM2LjUxNzY0IDMuMTU3NTIgNS44NjU0MyAzLjQyNjY4IDUuMTgyMTYgMy41NjQ4NkM0LjY1NTQyIDMuNzEzNTkgNC4xMzAzMyAzLjg3MDM2IDMuNjAzMTggNC4wMTc4MkMzLjM3MTI4IDQuMDY4NTMgMy4xMzkzOCA0LjEyMzQ2IDIuOTE1NzcgNC4yMDMzMkMyLjc5NjA5IDQuMjUxMDcgMi43MzMxNSA0LjM5MjYyIDIuNzY3OTMgNC41MTY4NUMyLjgyMjE4IDQuNzU4MTIgMi44OTg3OSA0Ljk5MzkgMi45NTUxMSA1LjIzNTE3QzIuOTg1NzUgNS4zNjc4NSAzLjE0NzY3IDUuMzgzMDYgMy4yNTM2OCA1LjM0MjkyQzMuNjU4NjcgNS4yMjI1IDQuMDY0MDggNS4xMDI0OSA0LjQ3MDczIDQuOTg3NTZDNS4xMjgzMiA0LjgzNzU2IDUuNzY4MTIgNC42MTYxNSA2LjQyMTk5IDQuNDQ5MjRDNi44MDIxMyA0LjM3NjE0IDcuMTY2NTQgNC4yNDA1IDcuNTQwMDcgNC4xMzk5NEM3Ljc5ODA1IDQuNjYxNzggOC4yMzYxOCA1LjA3MDM4IDguNzIzNTggNS4zNjU3NEM5LjIwMDYzIDUuNTk1MTggOS43MzQ0MSA1Ljc1MDI1IDEwLjI2NTcgNS42NzkyN0MxMC42Njc0IDUuNjM0NDggMTEuMDU3NSA1LjQ5NjMxIDExLjQwOTUgNS4yOTUxN0MxMS45MTU1IDQuOTYzOSAxMi4zNDYyIDQuNDk0NDUgMTIuNTc3MiAzLjkyMjc1QzEyLjc2MTUgMy41MzczOSAxMi44MjYxIDMuMTAzODYgMTIuODA1OCAyLjY3Nzk0QzEzLjE1NzggMi41NzY5NSAxMy41MDgxIDIuNDY5NjIgMTMuODY1NSAyLjM5MDYxQzE0LjM3OTQgMi4yNTA3NSAxNC44ODcxIDIuMDg4OTEgMTUuNDAyMiAxLjk1Mjg1QzE1Ljk1MjYgMS44Mjc3OCAxNi40ODggMS42NDUyNCAxNy4wMzI2IDEuNDk3NzdDMTcuMTA5NiAxLjQ3MzI2IDE3LjIwNTMgMS40NTgwNSAxNy4yNDU0IDEuMzc2NUMxNy4zMDA1IDEuMjQ4MDUgMTcuMjMxMyAxLjExMzY4IDE3LjIwMjggMC45ODgxODNDMTcuMTM3OCAwLjc5NzYxNiAxNy4xMTQ2IDAuNTkwNTcgMTcuMDIxOCAwLjQxMTQxMUMxNi45NDQgMC4yOTM1MjEgMTYuNzk0NSAwLjM1MDk4NyAxNi42ODY0IDAuMzgwMTQzQzE2LjQzNTkgMC40NjA0MjYgMTYuMTc4MyAwLjUxMzY2NyAxNS45MjM2IDAuNTc3ODkzQzE1LjMzODkgMC43NDY0ODggMTQuNzU4NyAwLjkzNDA5OCAxNC4xNjUzIDEuMDY4NDdDMTMuNTk5NyAxLjIyMjI3IDEzLjA0MzUgMS40MTUzOCAxMi40NzEyIDEuNTQwNDVDMTIuMDk3NyAwLjgyNDIzNiAxMS40MjE1IDAuMjg4MDI4IDEwLjY1ODMgMC4wNjg3Mjc4Wk0xMC4zNzEzIDEuMjExMjlDMTAuNzgwOCAxLjI5NzQ5IDExLjE2NDcgMS41MjY5MyAxMS4zODcxIDEuODk2NjVDMTEuNjY0MSAyLjMzNTY4IDExLjY4NDQgMi44OTcyNCAxMS41NzE0IDMuMzk0NTdDMTEuMzk5MSAzLjk4MDY0IDEwLjg2MDQgNC40MjM4OSAxMC4yNjkgNC41MDAzN0M5LjkzMjM1IDQuNTM5NjcgOS41NzgyOSA0LjUxMDkzIDkuMjcwMiA0LjM1NjI4QzguODEzODUgNC4xNDAzNiA4LjQ2NjAxIDMuNjgzNTkgOC40MDM4OSAzLjE3MDYyQzguMzI1MjEgMi44NzUyNiA4LjM5NDc4IDIuNTcxNDYgOC40NTUyNCAyLjI4MDMyQzguNTM1NTcgMS45OTU1MyA4LjcxNjk1IDEuNzQ4NzYgOC45MjczMiAxLjU0OTMyQzkuMzI1NjggMS4yMTcyIDkuODcxODkgMS4xMTYyMSAxMC4zNzEzIDEuMjExMjlaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYuMDkyOCAyLjg0NTdDMTYuMDE4NiAyLjgxNDg1IDE1LjkzNjIgMi44MTkwOCAxNS44NTc2IDIuODE2OTdDMTUuNDcyIDIuODE4NjYgMTUuMDg2NSAyLjgxODY2IDE0LjcwMSAyLjgxNjk3QzE0LjYwOSAyLjgxODY2IDE0LjUxMzQgMi44MTU3IDE0LjQyNiAyLjg0OTA4QzE0LjM0NjEgMi45MDY5NyAxNC4zMDU1IDMuMDAyNDYgMTQuMjU1IDMuMDg0ODZDMTQuMDYyOCAzLjQ0NzQgMTMuODQ2MyAzLjc5NTE2IDEzLjYzNTEgNC4xNDU4N0MxMy41MTc5IDQuNDA3ODQgMTMuMzQ5NyA0LjYzOTgyIDEzLjIwNzMgNC44ODcwMUMxMy4wMTE0IDUuMjg2MzEgMTIuNzQ2OCA1LjY0NDYzIDEyLjU1MTggNi4wNDM5M0MxMi40MzEzIDYuMjU2NDcgMTIuMjk0MiA2LjQ1OTMgMTIuMTgwNyA2LjY3NjA2QzEyLjAyMDkgNi45ODU3OSAxMS44MjI5IDcuMjcyMjcgMTEuNjU3NyA3LjU3OTA0QzExLjUxNzggNy44MzA4NyAxMS4zNzQ1IDguMDgxMDIgMTEuMjE3OSA4LjMyMzE0QzExLjEzNjggOC40ODY2NiAxMS4wNDczIDguNjQ1NTQgMTAuOTUyOSA4LjgwMTQ2QzEwLjgzMTYgOS4wMzg1IDEwLjY0OTQgOS4yNDM0NCAxMC41Nzc3IDkuNTA0OTlDMTAuNTAzNiA5LjgzODM4IDEwLjU0NjMgMTAuMTgxMSAxMC41NTk5IDEwLjUxODdDMTAuNjM0NSAxMS4xNTI1IDEwLjg3NDYgMTEuNzUyMSAxMS4xNzE2IDEyLjMwOTRDMTEuNTY0NSAxMi45NjczIDEyLjA5NTggMTMuNTM4MiAxMi43MjQgMTMuOTY2MkMxMy4wNTMyIDE0LjE1ODUgMTMuMzg3IDE0LjM0NjUgMTMuNzQxNSAxNC40ODU5QzE0LjMzNTMgMTQuNjUzNyAxNC45NTIzIDE0Ljc5NCAxNS41NzE4IDE0LjcyOTdDMTUuOTEyNiAxNC43MTI4IDE2LjI0NiAxNC42MzI2IDE2LjU3NDQgMTQuNTQzNEMxNy4wMzY1IDE0LjQzODIgMTcuNDQ0NCAxNC4xODA5IDE3Ljg0OSAxMy45NDEzQzE4LjEzNzYgMTMuNzMzOCAxOC40MTU5IDEzLjUwODIgMTguNjYzMSAxMy4yNDk2QzE5LjMxMiAxMi41NTM2IDE5Ljc2NTUgMTEuNjcwNSAxOS45NDk3IDEwLjcyNzhDMTkuOTggMTAuMzIwOSAyMC4wNDUgOS45MDY0MSAxOS45NTE0IDkuNTAyODhDMTkuOTI1NyA5LjMyMDM0IDE5Ljc5OSA5LjE4MjE3IDE5LjcxNDkgOS4wMjYyNUMxOS41ODUzIDguNzkxNzQgMTkuNDMgOC41NzI0NCAxOS4zMjQgOC4zMjUyNUMxOS4yMTUxIDguMTU2NjYgMTkuMTAzMyA3Ljk4OTMzIDE5LjAxMDYgNy44MTAxN0MxOC44MDQ3IDcuNDA3MDYgMTguNTQ1NSA3LjAzNTY1IDE4LjMzMzUgNi42MzU5MkMxOC4wMzgyIDYuMTIzMzcgMTcuNzQyMiA1LjYxMTY3IDE3LjQ0MjggNS4xMDEyNEMxNy4yOTkxIDQuODAyMDggMTcuMDk5IDQuNTM2MyAxNi45NDcxIDQuMjQxNzhDMTYuNzc0NCAzLjkwNzU1IDE2LjU2NDQgMy41OTU3MSAxNi4zODE0IDMuMjY3ODJDMTYuMjk1NyAzLjEyMTYyIDE2LjIzMTEgMi45NDk2NCAxNi4wOTI4IDIuODQ1N1pNMTUuNDY1OCAzLjk5NzEzQzE1LjcwMTkgNC40NDE2NSAxNS45NzUyIDQuODYzNzcgMTYuMjA4NyA1LjMwOTEzQzE2LjQwMTcgNS42MjQ3NyAxNi41OTM0IDUuOTQxMjYgMTYuNzU3OCA2LjI3MzM4QzE3LjAzNzggNi42NiAxNy4yMTcxIDcuMTA5MTcgMTcuNDg5MSA3LjUwMTcxQzE3Ljc3NDUgOC4wMjE0NCAxOC4wOTE3IDguNTIxNzMgMTguMzc1MyA5LjA0MjMxQzE2LjMwMTEgOS4wNDIzMSAxNC4yMjY4IDkuMDQyMzEgMTIuMTUyNiA5LjA0MTg4QzEyLjIwMDIgOC45NzA0NyAxMi4yNTExIDguOTAxNiAxMi4yOTU5IDguODI4MDhDMTIuNDk4OCA4LjQxMTQ1IDEyLjc2MzggOC4wMjk4OSAxMi45NzcxIDcuNjE4MzNDMTMuMjE3MiA3LjIzOTMxIDEzLjQyMzUgNi44Mzk1OSAxMy42NTU0IDYuNDU1NDlDMTMuODA4NiA2LjIzNzg4IDEzLjkwNTkgNS45ODczMSAxNC4wNTI1IDUuNzY1OUMxNC4zODk2IDUuMTcxOCAxNC43NDUzIDQuNTg5MTIgMTUuMDgwNyAzLjk5NDE3QzE1LjIwOTEgMy45OTMzMyAxNS4zMzc0IDMuOTk2MjkgMTUuNDY1OCAzLjk5NzEzWk0xOC44Mzc1IDEwLjIyNTRDMTguODAwNiAxMC42NDIxIDE4LjY3OTcgMTEuMDQ2IDE4LjU0MjYgMTEuNDM4NkMxOC4zMDYyIDExLjkzODQgMTcuOTg3NyAxMi40MDk2IDE3LjU1MzMgMTIuNzUxOEMxNy4yNjQ3IDEzLjAyNDQgMTYuODk5OSAxMy4xODAzIDE2LjU0NDYgMTMuMzM3OUMxNS43NzY0IDEzLjYyMjcgMTQuOTEzIDEzLjY0MDQgMTQuMTM0OSAxMy4zODQ4QzEzLjc2NTkgMTMuMjUwNCAxMy4zOTUzIDEzLjA5NTMgMTMuMDkxMyAxMi44Mzc2QzEyLjc1MDUgMTIuNTgyNCAxMi40NjAzIDEyLjI1OTYgMTIuMjM4MyAxMS44OTI4QzExLjkxNjkgMTEuMzk4IDExLjc2NjIgMTAuODA3NyAxMS42OTk1IDEwLjIyMzdDMTQuMDc5IDEwLjIyNjcgMTYuNDU4IDEwLjIyMzcgMTguODM3NSAxMC4yMjU0WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUuNTc1MjggNS42Nzk4M0M1LjQ2MTQgNS42MzQ2MiA1LjMzNjM0IDUuNjQ4MTQgNS4yMTY2NiA1LjY0NTYxQzQuODE3MDUgNS42NTExIDQuNDE3MDMgNS42NDAxMSA0LjAxNzQyIDUuNjUwMjVDMy45MDM1NCA1LjY0NTE4IDMuODIxNTUgNS43MzUxOSAzLjc2NTY1IDUuODI1NjFDMy41OTMzOCA2LjEwNjE4IDMuNDU2NzMgNi40MDgzIDMuMjY3NDggNi42NzgzQzMuMDc5NDggNy4wMTY3NiAyLjg5NzY5IDcuMzU4NiAyLjY4OTgxIDcuNjg1MjNDMi41MTA5MiA4LjAyOTE4IDIuMzAzMDQgOC4zNTU4IDIuMTA4NDEgOC42OTA0NkMxLjkxMjk2IDkuMDc3MDkgMS42NjAzNSA5LjQyOTkxIDEuNDY1NzIgOS44MTczOEMxLjE4MzMxIDEwLjI3NjcgMC45MzU2NzUgMTAuNzU3MSAwLjY0Nzg3MyAxMS4yMTM1QzAuNDczNTM2IDExLjU3NzMgMC4yMTg4NjMgMTEuODk1NSAwLjA2NjQ3NCAxMi4yNzA3Qy0wLjAxNzE3NDcgMTIuNTY3MyAtMC4wMDg4OTMwMSAxMi44OCAwLjAyMTMzNjYgMTMuMTg0MkMwLjA1MTk4IDEzLjkyMjQgMC4zNTU1MTYgMTQuNjEzMyAwLjcwMDQ2NCAxNS4yNTA5QzAuOTUyMjM4IDE1LjYyMTQgMS4yMjg4NiAxNS45Nzc3IDEuNTU4MDcgMTYuMjgwMkMxLjgyNDM0IDE2LjU1MSAyLjE0NTY4IDE2Ljc1NDMgMi40NjIwNiAxNi45NTc1QzMuMDYxNjggMTcuMjY4NSAzLjcwOTMzIDE3LjUzNzMgNC4zOTA1MyAxNy41NDc4QzQuNzMzODIgMTcuNTc2MSA1LjA3ODc3IDE3LjU1MjkgNS40MjA4MiAxNy41MjMzQzUuODg3OTIgMTcuNDQ2IDYuMzM3MjIgMTcuMjgxMiA2Ljc2NjY1IDE3LjA4MDlDNy4xMTY1NiAxNi45Mjg0IDcuNDE0NzIgMTYuNjgyIDcuNzIzMjIgMTYuNDYwNkM3LjkyMTU4IDE2LjI3OTMgOC4xMSAxNi4wODYyIDguMjkwOTYgMTUuODg2OEM4LjQxMzUzIDE1LjczMjYgOC41MzA3MiAxNS41NzMzIDguNjU0MTMgMTUuNDE5NUM4Ljk5NjE3IDE0Ljg3ODIgOS4yNjA3OSAxNC4yNzk5IDkuMzk2MiAxMy42NDlDOS40NjAzOCAxMy4yMjk0IDkuNDk4MDcgMTIuNzk2NyA5LjQzMjY0IDEyLjM3NDZDOS4yOTkzIDExLjk2OSA5LjAzMTM3IDExLjYzMDkgOC44Mzg4MSAxMS4yNTQ1QzguNjYxOTkgMTAuOTE5IDguNDMyOTkgMTAuNjEzIDguMjgwMTkgMTAuMjY0OUM4LjA5Njc0IDEwLjAwNDYgNy45NDMxMSA5LjcyNDQyIDcuNzk4NTkgOS40NDAwNUM3LjYyMzAxIDkuMTY0MTMgNy40NTExNiA4Ljg4NTI1IDcuMzAxNjcgOC41OTM2OUM2LjgzNDk3IDcuODE0OTUgNi4zOTY0NCA3LjAxOTMgNS45MzA5OSA2LjIzOTI4QzUuODE1MDQgNi4wNTI5NCA1Ljc0Mjk5IDUuODI1MTkgNS41NzUyOCA1LjY3OTgzWk00LjkxNzI3IDYuODEzMDlDNS4xMDU2OCA3LjEzMDQzIDUuMjgyMDkgNy40NTQ5NCA1LjQ3NjMxIDcuNzY5MzFDNS42MDQ2OCA3Ljk2NDk1IDUuNjgzMzYgOC4xOTAxNyA1LjgyMjQ5IDguMzc4NjJDNS45ODE1MSA4LjYwNzY0IDYuMDkgOC44NjcwOCA2LjIzNzg0IDkuMTAzMjhDNi4zNTI1NSA5LjMwOTA2IDYuNDg3MTMgOS41MDIxNiA2LjU5NjA0IDkuNzExMzJDNi43NzIwMyAxMC4wMzYzIDYuOTgxOTggMTAuMzQxOCA3LjE0MDU4IDEwLjY3NjRDNy4zOTY5MSAxMS4wNTkyIDcuNTk3NzUgMTEuNDc1NCA3Ljg0MzMxIDExLjg2NDZDNS43Njk5IDExLjg1ODcgMy42OTYwOCAxMS44NjM4IDEuNjIyNjcgMTEuODYyMUMxLjgzODgzIDExLjU0ODEgMS45ODIxMSAxMS4xODk0IDIuMjA1NzMgMTAuODgwNUMyLjM4NTg2IDEwLjUyMTMgMi41OTc0NyAxMC4xODAzIDIuODAzNjkgOS44MzY4MkMyLjkyODMzIDkuNTc3OCAzLjA5MjMyIDkuMzQyNDQgMy4yMzM1MyA5LjA5MzE0QzMuNjU0MjYgOC4zMzg5IDQuMTA3MjggNy42MDM2NyA0LjUyMzQ2IDYuODQ2OUM0LjY1NDMxIDYuODMgNC43ODU1OCA2LjgxNjA1IDQuOTE3MjcgNi44MTMwOVpNOC4zMDg3NiAxMy4wNDAxQzguMjczMTUgMTMuMjc3MiA4LjI0MjUxIDEzLjUxNjMgOC4xNzcwOCAxMy43NDc1QzcuOTkzMjIgMTQuNDkyIDcuNTQ5MyAxNS4xNTg4IDYuOTU3OTYgMTUuNjMwM0M2LjY1MzE4IDE1Ljg0NjcgNi4zNDA1NCAxNi4wNjY4IDUuOTc2OTUgMTYuMTY1N0M1LjIyNTM2IDE2LjQzNTcgNC4zODg0NiAxNi40NjA2IDMuNjI4OTkgMTYuMjA3OUMzLjE4NjczIDE2LjEwOTkgMi44MDc4MyAxNS44NDU4IDIuNDQ2MzIgMTUuNTgxM0MxLjk5NDk1IDE1LjIxMiAxLjY0ODM0IDE0LjcxOCAxLjQyMTQyIDE0LjE3NjhDMS4yOTcxOCAxMy44MDkyIDEuMjAwMjggMTMuNDI5MyAxLjE2MzQzIDEzLjA0MUMzLjU0NTM1IDEzLjA0MjIgNS45MjY4NSAxMy4wNDQ0IDguMzA4NzYgMTMuMDQwMVpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcl9fdG9vbHRpcFwiPiBcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcl9fdG9vbHRpcC10aXRsZVwiPtCh0YDQsNCy0L3QtdC90LjQtTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyX190b29sdGlwLXRleHRcIj7QodGA0LDQstC90LjQstCw0LnRgtC1INGC0L7QstCw0YDRiyDQv9C+INGA0LDQt9C70LjRh9C90YvQvCDRhdCw0YDQsNC60YLQtdGA0LjRgdGC0LjQutCw0Lw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJhcl9fbGlzdC1pdGVtXCI+PGEgY2xhc3NOYW1lPVwiYmFyX19saXN0LWl0ZW0tbGlua1wiIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE3IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zLjU0OTExIDAuNzE2MjkzQzQuMjgxNTUgMC4zNTY0NzIgNS4wNzM2MyAwLjEwMjQ0MSA1Ljg4Nzk1IDAuMDE4MjEzQzYuMTY3OTIgLTAuMDA4NzM5OTMgNi40NTEyNiAwLjAwMjM3ODE0IDYuNzMyNTggMC4wMDE3MDQzMkM3LjI0NjA0IC0wLjAxMDA4NzYgNy43NTYxMiAwLjA4MzkxMDYgOC4yNTAwMyAwLjIxOTM0OUM4Ljk3ODQzIDAuNDMwNTkyIDkuNjg2OTYgMC43MzU4MzQgMTAuMzAxMSAxLjE4NTk1QzEwLjY4MjIgMS40MzY2MSAxMS4wMTMgMS43NTM5OCAxMS4zMzM0IDIuMDc2NEMxMS41MjgyIDIuMjg5MzMgMTEuNzAxIDIuNTIxNDYgMTEuODg2MyAyLjc0MjQ4QzEyLjIzNTcgMy4yODg2MSAxMi41Njc5IDMuODU1OTcgMTIuNzYyMyA0LjQ3ODI0QzEyLjg2NjQgNC44NzAwNyAxMi45NzU1IDUuMjYyMjQgMTMuMDMxNSA1LjY2NDUxQzEzLjEzMTUgNi40NDk1MSAxMy4xMDY2IDcuMjU2MDggMTIuOTE0MiA4LjAyNTU4QzEyLjc5MDkgOC41NDIwNyAxMi42MzggOS4wNTc1NCAxMi4zNzI4IDkuNTIwNzlDMTIuMjkxNiA5LjcwMDcgMTIuMTcyNCA5Ljg1OTczIDEyLjA4ODggMTAuMDM4M0MxMS45NDgzIDEwLjIzNDcgMTEuODI1MyAxMC40NDY2IDExLjY1NjkgMTAuNjIxMUMxMy4wMTI2IDExLjk3OTYgMTQuMzY5NyAxMy4zMzY2IDE1LjcyODEgMTQuNjkyNEMxNS44Njg5IDE0LjgyNjEgMTYuMDA5NCAxNC45OTQ5IDE2LjAwMzQgMTUuMjAxMUMxNi4wMDYxIDE1LjM1MzQgMTYuMDE1OCAxNS41MjUyIDE1LjkxNDQgMTUuNjUxNkMxNS44MjY4IDE1Ljc2MjEgMTUuNzI0MSAxNS44NjExIDE1LjYxMjUgMTUuOTQ3QzE1LjMyNDUgMTYuMDM1MyAxNC45NTEyIDE2LjAzNSAxNC43NDkgMTUuNzc1NUMxMy4zNzU1IDE0LjQwMTMgMTEuOTk5OSAxMy4wMjkgMTAuNjI5NiAxMS42NTE0QzEwLjEwMiAxMi4wOTcyIDkuNDgwNDMgMTIuNDE3MiA4Ljg0NzcxIDEyLjY4NjdDOC4xNTAzIDEyLjg5OTcgNy40MzI2OCAxMy4wODYgNi42OTgyMiAxMy4wODlDNi4yODY4NSAxMy4xMDA1IDUuODc1MTQgMTMuMDcyMiA1LjQ3MDE4IDEyLjk5OTRDNS4wNzE5NSAxMi45MzYxIDQuNjg2ODYgMTIuODE0MSA0LjI5OTQxIDEyLjcwNjNDMy43NzU1MSAxMi41MDExIDMuMjc0ODYgMTIuMjM4IDIuODA2ODkgMTEuOTI2QzIuNDI1ODUgMTEuNjQ3NCAyLjA2MjMyIDExLjM0MjEgMS43NDM5NCAxMC45OTI0QzEuNDQ0NzYgMTAuNjg3NSAxLjIwNDIxIDEwLjMzMzEgMC45NjIzMDYgOS45ODMwNEMwLjYxMDIzNCA5LjM5NTQ2IDAuMzQ4NzkgOC43NTQ5OSAwLjE3NDI3MSA4LjA5Mjk2QzAuMDE5MjkxNCA3LjUgLTAuMDEyMzc4MyA2Ljg4MzQ1IDAuMDAzNzkzNDcgNi4yNzI5N0MwLjAyMjY2MDUgNi4wMjI5OCAwLjAyMDk3NTkgNS43NzE2NSAwLjA2NTQ0ODIgNS41MjQwMkMwLjE2OTU1NCA0Ljg3Mzc4IDAuMzc5NDQ5IDQuMjQxMDYgMC42NzE1NTEgMy42NTE0NkMwLjcyMTc1MSAzLjU1MjA3IDAuNzQyOTc3IDMuNDM2ODUgMC44MTgxMDggMy4zNTA5NEMwLjkwMjY3MiAzLjIzMTY3IDAuOTY2MzQ5IDMuMDk4OTMgMS4wNDkyMyAyLjk3Nzk4QzEuMjA3OTEgMi43MjY5OCAxLjQwMDYzIDIuNDk5OSAxLjU3ODUyIDIuMjYyNzJDMS44NzY2OCAxLjk1MTQxIDIuMTgwOTEgMS42NDM0NyAyLjUxNzE1IDEuMzcyOTNDMi44NTIwNCAxLjE0MDEzIDMuMTgzNTYgMC44OTk1NzMgMy41NDkxMSAwLjcxNjI5M1pNNS4zMDMwNyAxLjY2NTAzQzQuNzYxMzIgMS43NzgyNCA0LjI1MTkxIDIuMDE5NDcgMy43OTM3MSAyLjMyNjA1QzMuNjAzNjkgMi40MzA4MyAzLjQzNTU3IDIuNTY5MyAzLjI2ODQ2IDIuNzA2NDNDMi44NzM5NCAzLjA2NjkyIDIuNDk5MjkgMy40NjA0MyAyLjIzOTIgMy45MzA3NkMyLjA0OTE4IDQuMjM4MzYgMS44ODY3OSA0LjU2MjQ3IDEuNzY5MjEgNC45MDQ0NEMxLjY4MDI2IDUuMjY3NjMgMS41NjM2OSA1LjYyNTQzIDEuNTI3MzEgNS45OTk0QzEuNTA5MTEgNi4yNzgzNiAxLjQ2NDMgNi41NTkwMSAxLjUwNjc1IDYuODM4MzFDMS41MTY1MiA3LjMwNTI3IDEuNjQ2NTcgNy43NTc3NCAxLjc2NDgzIDguMjA2MTdDMS44NzgzNyA4LjUzNzAxIDIuMDMxMzIgOC44NTM3MSAyLjIxMjI1IDkuMTUyNTVDMi4zMDcyNiA5LjMwOTg5IDIuMzk3MjEgOS40NzA1OSAyLjUxMzc4IDkuNjEzNzhDMi43NTEzIDkuOTEwNiAyLjk5NjkxIDEwLjIxMDUgMy4zMDgyMiAxMC40MzM4QzMuNTk3OTYgMTAuNjk4IDMuOTMwNDkgMTAuOTE3MyA0LjI4NjYxIDExLjA4MkM1LjYwNDk0IDExLjc3OTQgNy4yNDgwNiAxMS44MjE5IDguNjAyNzggMTEuMkM4LjgwMDIxIDExLjA5NTkgOS4wMDkwOSAxMS4wMTM2IDkuMTk5NzggMTAuODk3MUM5LjM4ODEyIDEwLjc3MzggOS41NzkxNSAxMC42NTExIDkuNzQ3MjYgMTAuNTAwMkMxMC4yMzQxIDEwLjEzMiAxMC42MTkyIDkuNjQ1NDUgMTAuOTM1MiA5LjEyNzI4QzExLjA0NzEgOC45Njk2MSAxMS4wOTkzIDguNzgxNjEgMTEuMTkwNiA4LjYxMzE1QzExLjc2NCA3LjM3MTk3IDExLjc4MzYgNS44ODY4NyAxMS4yNDExIDQuNjMxODhDMTAuODg0MyAzLjczMjY2IDEwLjI0ODkgMi45NTIzNyA5LjQ1NzE4IDIuMzk5ODRDOS4zNjM4NiAyLjMzOTUzIDkuMjU1MzcgMi4zMDI4MSA5LjE3NjU0IDIuMjIxNjFDOC44NDk3MyAyLjAzMDkyIDguNTA3NDMgMS44NjIxMyA4LjE0NjYgMS43NDYyM0M3Ljk2NzcgMS43MTIyIDcuNzk1MiAxLjY1MzI0IDcuNjE3OTkgMS42MTM0OUM3LjMzNzM0IDEuNTU2ODkgNy4wNTMzMiAxLjUxOTE1IDYuNzY3OTYgMS40OTc5M0M2LjI3NTA2IDEuNDgyMDkgNS43NzkxMiAxLjUzNDk5IDUuMzAzMDcgMS42NjUwM1pcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcl9fdG9vbHRpcFwiPiBcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcl9fdG9vbHRpcC10aXRsZVwiPtCf0L7QuNGB0Lo8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcl9fdG9vbHRpcC10ZXh0XCI+0JjRidC40YLQtSDRgdGA0LXQtNC4INCx0L7Qu9C10LUgNTAwMCDRgtC+0LLQsNGA0L7QsjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj48L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmFyX19saXN0LWl0ZW1cIj48YSBjbGFzc05hbWU9XCJiYXJfX2xpc3QtaXRlbS1saW5rXCIgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjFcIiBoZWlnaHQ9XCIyMVwiIHZpZXdCb3g9XCIwIDAgMjEgMjFcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTguMjYxMjQgMi40NzI1QzcuNTk2NjEgMy42ODY4NSA3LjIxODc1IDUuMDgwNTUgNy4yMTg3NSA2LjU2MjVDNy4yMTg3NSAxMS4yNzQyIDExLjAzODMgMTUuMDkzNyAxNS43NSAxNS4wOTM3QzE2Ljc2NjMgMTUuMDkzNyAxNy43NDExIDE0LjkxNiAxOC42NDUgMTQuNTlDMTcuMTk2NSAxNy4yMzY1IDE0LjM4NiAxOS4wMzEyIDExLjE1NjIgMTkuMDMxMkM2LjQ0NDU3IDE5LjAzMTIgMi42MjUgMTUuMjExNyAyLjYyNSAxMC41QzIuNjI1IDYuODA0NjIgNC45NzQ1MyAzLjY1ODAxIDguMjYxMjQgMi40NzI1WlwiIHN0cm9rZT1cIiNDOUM5QzlcIiBzdHJva2VXaWR0aD1cIjEuMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyX190b29sdGlwXCI+IFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyX190b29sdGlwLXRpdGxlXCI+0J3QvtGH0L3QvtC5INGA0LXQttC40Lw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9hPjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsYW5nc1wiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsYW5nc19faXRlbVwiPjxhIGNsYXNzTmFtZT1cImxhbmdzX19pdGVtLWxpbmtcIiBocmVmPVwiXCI+0YPQutGAPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxhbmdzX19pdGVtIGN1cnJlbnRcIj48YSBjbGFzc05hbWU9XCJsYW5nc19faXRlbS1saW5rXCIgaHJlZj1cIlwiPtGA0YPRgTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsYW5nc19faXRlbVwiPjxhIGNsYXNzTmFtZT1cImxhbmdzX19pdGVtLWxpbmtcIiBocmVmPVwiXCI+ZW5nPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXAtYnRuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cC1idG5fX2ljb25cIj5cbiAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjExXCIgdmlld0JveD1cIjAgMCAxOCAxMVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAgOC45NDMzNkwxLjQ0MjU3IDEwLjM4NTlMOC45NDQwNSAyLjg4NTEzTDE2LjQ0NDggMTAuMzg1OUwxNy44ODc0IDguOTQzMzZMOC45NDQwNSAwTDAgOC45NDMzNlpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwLWJ0bl9fdGV4dFwiPtCS0LLQtdGA0YU8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPiBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWlubmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJfX3RvcFwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLWhlYWRlcl9fdGl0bGUgaDJcIj7QlNC+0YHRgtCw0LLQutCwINC4INC+0L/Qu9Cw0YLQsDwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYnNcIj4gXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJzX19pdGVtXCI+IDxhIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJzX19pdGVtLWxpbmtcIiBocmVmPVwiXCI+0JPQu9Cw0LLQvdCw0Y88L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYnNfX2l0ZW1cIj4gPGEgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYnNfX2l0ZW0tbGlua1wiIGhyZWY9XCJcIj7QlNC+0YHRgtCw0LLQutCwINC4INC+0L/Qu9Cw0YLQsDwvYT48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbGl2ZXJ5LXNlY3Rpb24gc2VjdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+IFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItaW5uZXJcIj4gXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVsaXZlcnktc2VjdGlvbl9fYmxvY2tcIj4gXG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAg0JTQsNCy0L3QviDQstGL0Y/RgdC90LXQvdC+LCDRh9GC0L4g0L/RgNC4INC+0YbQtdC90LrQtSDQtNC40LfQsNC50L3QsCDQuCDQutC+0LzQv9C+0LfQuNGG0LjQuCDRh9C40YLQsNC10LzRi9C5INGC0LXQutGB0YIg0LzQtdGI0LDQtdGCINGB0L7RgdGA0LXQtNC+0YLQvtGH0LjRgtGM0YHRjy4gTG9yZW0gSXBzdW0g0LjRgdC/0L7Qu9GM0LfRg9GO0YIg0L/QvtGC0L7QvNGDLCDRh9GC0L4g0YLQvtGCINC+0LHQtdGB0L/QtdGH0LjQstCw0LXRgiDQsdC+0LvQtdC1INC40LvQuCDQvNC10L3QtdC1INGB0YLQsNC90LTQsNGA0YLQvdC+0LUg0LfQsNC/0L7Qu9C90LXQvdC40LUg0YjQsNCx0LvQvtC90LAsINCwINGC0LDQutC20LUg0YDQtdCw0LvRjNC90L7QtSDRgNCw0YHQv9GA0LXQtNC10LvQtdC90LjQtSDQsdGD0LrQsiDQuCDQv9GA0L7QsdC10LvQvtCyINCyINCw0LHQt9Cw0YbQsNGFLCDQutC+0YLQvtGA0L7QtSDQvdC1INC/0L7Qu9GD0YfQsNC10YLRgdGPINC/0YDQuCDQv9GA0L7RgdGC0L7QuSDQtNGD0LHQu9C40LrQsNGG0LjQuCBcItCX0LTQtdGB0Ywg0LLQsNGIINC20LjRgNC90YvQuSDRgtC10LrRgdGCLiDQnNC90L7Qs9C40LUg0L/RgNC+0LPRgNCw0LzQvNGLINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0LLRkdGA0YHRgtC60Lgg0Lgg0YDQtdC00LDQutGC0L7RgNGLIDxhPtGB0YHRi9C70LrQsCDQsiDRgtC10LrRgdGC0LUgPC9hPtC00LvRjyDQv9GA0LjQvNC10YDQsC48L3A+XG4gICAgICAgICAgICAgICAgPHA+0JTQsNCy0L3QviDQstGL0Y/RgdC90LXQvdC+LCDRh9GC0L4g0L/RgNC4INC+0YbQtdC90LrQtSDQtNC40LfQsNC50L3QsCDQuCDQutC+0LzQv9C+0LfQuNGG0LjQuCDRh9C40YLQsNC10LzRi9C5INGC0LXQutGB0YIg0LzQtdGI0LDQtdGCINGB0L7RgdGA0LXQtNC+0YLQvtGH0LjRgtGM0YHRjy4gTG9yZW0gSXBzdW0g0LjRgdC/0L7Qu9GM0LfRg9GO0YIg0L/QvtGC0L7QvNGDLCDRh9GC0L4g0YLQvtGCINC+0LHQtdGB0L/QtdGH0LjQstCw0LXRgiDQsdC+0LvQtdC1INC40LvQuCDQvNC10L3QtdC1INGB0YLQsNC90LTQsNGA0YLQvdC+0LUg0LfQsNC/0L7Qu9C90LXQvdC40LUg0YjQsNCx0LvQvtC90LAsINCwINGC0LDQutC20LUg0YDQtdCw0LvRjNC90L7QtSDRgNCw0YHQv9GA0LXQtNC10LvQtdC90LjQtSDQsdGD0LrQsiDQuCDQv9GA0L7QsdC10LvQvtCyINCyINCw0LHQt9Cw0YbQsNGFLjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVsaXZlcnktc2VjdGlvbl9fYmxvY2tcIj4gXG4gICAgICAgICAgICAgICAgPGg0PtCf0L7QtNC30LDQs9C+0LvQvtCy0L7QujwvaDQ+XG4gICAgICAgICAgICAgICAgPHA+0JTQsNCy0L3QviDQstGL0Y/RgdC90LXQvdC+LCDRh9GC0L4g0L/RgNC4INC+0YbQtdC90LrQtSDQtNC40LfQsNC50L3QsCDQuCDQutC+0LzQv9C+0LfQuNGG0LjQuCDRh9C40YLQsNC10LzRi9C5INGC0LXQutGB0YIg0LzQtdGI0LDQtdGCINGB0L7RgdGA0LXQtNC+0YLQvtGH0LjRgtGM0YHRjy4gTG9yZW0gSXBzdW0g0LjRgdC/0L7Qu9GM0LfRg9GO0YIg0L/QvtGC0L7QvNGDLCDRh9GC0L4g0YLQvtGCINC+0LHQtdGB0L/QtdGH0LjQstCw0LXRgiDQsdC+0LvQtdC1INC40LvQuCDQvNC10L3QtdC1INGB0YLQsNC90LTQsNGA0YLQvdC+0LUg0LfQsNC/0L7Qu9C90LXQvdC40LUg0YjQsNCx0LvQvtC90LAsINCwINGC0LDQutC20LUg0YDQtdCw0LvRjNC90L7QtSDRgNCw0YHQv9GA0LXQtNC10LvQtdC90LjQtSDQsdGD0LrQsi48L3A+XG4gICAgICAgICAgICAgICAgPHVsPiBcbiAgICAgICAgICAgICAgICAgIDxsaT7Qn9GA0LjQvNC10YAg0LzQsNGA0LrQtdGA0LLQsNC90L3QvtCz0L4g0YHQv9C40YHQutCwLiDQmCDQutC+0LzQv9C+0LfQuNGG0LjQuCDRh9C40YLQsNC10LzRi9C5INGC0LXQutGB0YIg0LzQtdGI0LDQtdGCINGB0L7RgdGA0LXQtNC+0YLQvtGH0LjRgtGM0YHRjy4gTG9yZW0gSXBzdW0g0LjRgdC/0L7Qu9GM0LfRg9GO0YIg0L/QvtGC0L7QvNGDLCDRh9GC0L4g0YLQvtGCINC+0LHQtdGB0L/QtdGH0LjQstCw0LXRgiDQsdC+0LvQtdC1INC40LvQuCDQvNC10L3QtdC1INGB0YLQsNC90LTQsNGA0YLQvdC+0LUg0LfQsNC/0L7Qu9C90LXQvdC40LUg0YjQsNCx0LvQvtC90LAsINCwINGC0LDQutC20LUg0YDQtdCw0LvRjNC90L7QtSDRgNCw0YHQv9GA0LXQtNC10LvQtdC90LjQtSDQsdGD0LrQsi48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPtCf0YDQuNC80LXRgCDQvNCw0YDQutC10YDQstCw0L3QvdC+0LPQviDRgdC/0LjRgdC60LAuINCYINC60L7QvNC/0L7Qt9C40YbQuNC4INGH0LjRgtCw0LXQvNGL0Lkg0YLQtdC60YHRgiDQvNC10YjQsNC10YIg0YHQvtGB0YDQtdC00L7RgtC+0YfQuNGC0YzRgdGPLiBMb3JlbSBJcHN1bSDQuNGB0L/QvtC70YzQt9GD0Y7RgiDQv9C+0YLQvtC80YMsINGH0YLQviDRgtC+0YIg0L7QsdC10YHQv9C10YfQuNCy0LDQtdGCINCx0L7Qu9C10LUg0LjQu9C4INC80LXQvdC10LUg0YHRgtCw0L3QtNCw0YDRgtC90L7QtSDQt9Cw0L/QvtC70L3QtdC90LjQtSDRiNCw0LHQu9C+0L3QsCwg0LAg0YLQsNC60LbQtSDRgNC10LDQu9GM0L3QvtC1INGA0LDRgdC/0YDQtdC00LXQu9C10L3QuNC1INCx0YPQutCyLjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+0J/RgNC40LzQtdGAINC80LDRgNC60LXRgNCy0LDQvdC90L7Qs9C+INGB0L/QuNGB0LrQsC4g0Jgg0LrQvtC80L/QvtC30LjRhtC40Lgg0YfQuNGC0LDQtdC80YvQuSDRgtC10LrRgdGCINC80LXRiNCw0LXRgiDRgdC+0YHRgNC10LTQvtGC0L7Rh9C40YLRjNGB0Y8uIExvcmVtIElwc3VtINC40YHQv9C+0LvRjNC30YPRjtGCINC/0L7RgtC+0LzRgywg0YfRgtC+INGC0L7RgiDQvtCx0LXRgdC/0LXRh9C40LLQsNC10YIg0LHQvtC70LXQtSDQuNC70Lgg0LzQtdC90LXQtSDRgdGC0LDQvdC00LDRgNGC0L3QvtC1INC30LDQv9C+0LvQvdC10L3QuNC1INGI0LDQsdC70L7QvdCwLCDQsCDRgtCw0LrQttC1INGA0LXQsNC70YzQvdC+0LUg0YDQsNGB0L/RgNC10LTQtdC70LXQvdC40LUg0LHRg9C60LIuPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxvbD4gXG4gICAgICAgICAgICAgICAgICA8bGk+0J/RgNC40LzQtdGAINC90YPQvNC10YDQstCw0L3QvdC+0LPQviDRgdC/0LjRgdC60LAuINCYINC60L7QvNC/0L7Qt9C40YbQuNC4INGH0LjRgtCw0LXQvNGL0Lkg0YLQtdC60YHRgiDQvNC10YjQsNC10YIg0YHQvtGB0YDQtdC00L7RgtC+0YfQuNGC0YzRgdGPLiBMb3JlbSBJcHN1bSDQuNGB0L/QvtC70YzQt9GD0Y7RgiDQv9C+0YLQvtC80YMsINGH0YLQviDRgtC+0YIg0L7QsdC10YHQv9C10YfQuNCy0LDQtdGCINCx0L7Qu9C10LUg0LjQu9C4INC80LXQvdC10LUg0YHRgtCw0L3QtNCw0YDRgtC90L7QtSDQt9Cw0L/QvtC70L3QtdC90LjQtSDRiNCw0LHQu9C+0L3QsCwg0LAg0YLQsNC60LbQtSDRgNC10LDQu9GM0L3QvtC1INGA0LDRgdC/0YDQtdC00LXQu9C10L3QuNC1INCx0YPQutCyLjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+0J/RgNC40LzQtdGAINC90YPQvNC10YDQstCw0L3QvdC+0LPQviDRgdC/0LjRgdC60LAuINCYINC60L7QvNC/0L7Qt9C40YbQuNC4INGH0LjRgtCw0LXQvNGL0Lkg0YLQtdC60YHRgiDQvNC10YjQsNC10YIg0YHQvtGB0YDQtdC00L7RgtC+0YfQuNGC0YzRgdGPLiBMb3JlbSBJcHN1bSDQuNGB0L/QvtC70YzQt9GD0Y7RgiDQv9C+0YLQvtC80YMsINGH0YLQviDRgtC+0YIg0L7QsdC10YHQv9C10YfQuNCy0LDQtdGCINCx0L7Qu9C10LUg0LjQu9C4INC80LXQvdC10LUg0YHRgtCw0L3QtNCw0YDRgtC90L7QtSDQt9Cw0L/QvtC70L3QtdC90LjQtSDRiNCw0LHQu9C+0L3QsCwg0LAg0YLQsNC60LbQtSDRgNC10LDQu9GM0L3QvtC1INGA0LDRgdC/0YDQtdC00LXQu9C10L3QuNC1INCx0YPQutCyLjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+0J/RgNC40LzQtdGAINC90YPQvNC10YDQstCw0L3QvdC+0LPQviDRgdC/0LjRgdC60LAuINCYINC60L7QvNC/0L7Qt9C40YbQuNC4INGH0LjRgtCw0LXQvNGL0Lkg0YLQtdC60YHRgiDQvNC10YjQsNC10YIg0YHQvtGB0YDQtdC00L7RgtC+0YfQuNGC0YzRgdGPLiBMb3JlbSBJcHN1bSDQuNGB0L/QvtC70YzQt9GD0Y7RgiDQv9C+0YLQvtC80YMsINGH0YLQviDRgtC+0YIg0L7QsdC10YHQv9C10YfQuNCy0LDQtdGCINCx0L7Qu9C10LUg0LjQu9C4INC80LXQvdC10LUg0YHRgtCw0L3QtNCw0YDRgtC90L7QtSDQt9Cw0L/QvtC70L3QtdC90LjQtSDRiNCw0LHQu9C+0L3QsCwg0LAg0YLQsNC60LbQtSDRgNC10LDQu9GM0L3QvtC1INGA0LDRgdC/0YDQtdC00LXQu9C10L3QuNC1INCx0YPQutCyLjwvbGk+XG4gICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICA8cD7QlNCw0LLQvdC+INCy0YvRj9GB0L3QtdC90L4sINGH0YLQviDQv9GA0Lgg0L7RhtC10L3QutC1INC00LjQt9Cw0LnQvdCwINC4INC60L7QvNC/0L7Qt9C40YbQuNC4INGH0LjRgtCw0LXQvNGL0Lkg0YLQtdC60YHRgiDQvNC10YjQsNC10YIg0YHQvtGB0YDQtdC00L7RgtC+0YfQuNGC0YzRgdGPLiBMb3JlbSBJcHN1bSDQuNGB0L/QvtC70YzQt9GD0Y7RgiDQv9C+0YLQvtC80YMsINGH0YLQviDRgtC+0YIg0L7QsdC10YHQv9C10YfQuNCy0LDQtdGCINCx0L7Qu9C10LUg0LjQu9C4INC80LXQvdC10LUg0YHRgtCw0L3QtNCw0YDRgtC90L7QtSDQt9Cw0L/QvtC70L3QtdC90LjQtSDRiNCw0LHQu9C+0L3QsCwg0LAg0YLQsNC60LbQtSDRgNC10LDQu9GM0L3QvtC1INGA0LDRgdC/0YDQtdC00LXQu9C10L3QuNC1INCx0YPQutCyINC4INC/0YDQvtCx0LXQu9C+0LIg0LIg0LDQsdC30LDRhtCw0YUsINC60L7RgtC+0YDQvtC1INC90LUg0L/QvtC70YPRh9Cw0LXRgtGB0Y8g0L/RgNC4INC/0YDQvtGB0YLQvtC5INC00YPQsdC70LjQutCw0YbQuNC4IFwi0JfQtNC10YHRjCDQstCw0Ygg0YLQtdC60YHRgi4uINCX0LTQtdGB0Ywg0LLQsNGIINGC0LXQutGB0YIuLiDQl9C00LXRgdGMINCy0LDRiCDRgtC10LrRgdGCLi5cIiDQnNC90L7Qs9C40LUg0L/RgNC+0LPRgNCw0LzQvNGLINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0LLRkdGA0YHRgtC60Lgg0Lgg0YDQtdC00LDQutGC0L7RgNGLLjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiIGlkPVwiZm9vdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItaW5uZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19pbm5lclwiPjxhIGNsYXNzTmFtZT1cImZvb3Rlcl9fbG9nb1wiIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTA5XCIgaGVpZ2h0PVwiMTMyXCIgdmlld0JveD1cIjAgMCAxMDkgMTMyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEwMy4zNDkgNC43MzEzNlYxMDMuNDQ0SDQuNzI3MDFWNC43MzEzNkgxMDMuMzQ5Wk00LjcyNDE4ZS0wNiAwTDEwOC4wNzYgNC43Mjg1M2UtMDZWMTA4LjE3NkgwTDQuNzI0MThlLTA2IDBaTTgxLjk4MzEgMzYuMjQ1MkM4Mi4yOTUxIDM2LjIyMzcgODIuNjAzIDM2LjE4NzMgODIuOTA2MiAzNi4xMzYyQzgyLjYwMyAzNi4xODczIDgyLjI5NTEgMzYuMjIzNyA4MS45ODMxIDM2LjI0NTJaTTkzLjI1MDYgMTQuODM5NFYxNC44Mzk0SDgxLjMyNTlDNzguODc5NiAxNC44Mzk0IDc2LjYwNTMgMTUuNTc2NyA3NC43MTI2IDE2Ljg0MTNDNzYuNjA1MyAxNS41NzY2IDc4Ljg3OTYgMTQuODM5NCA4MS4zMjU5IDE0LjgzOTRIOTMuMjUwNlpNNjguOTcxMyAzOS4xNDExVjI2Ljc3NTJDNjguOTcxMyAxOS45NDU3IDc0LjUwMjQgMTQuNDA5MiA4MS4zMjU5IDE0LjQwOTJIOTMuNjgwNVYyNi43NzUyQzkzLjY4MDUgMzMuMzc2NCA4OC41MTMzIDM4Ljc2OTEgODIuMDA2NCAzOS4xMjI3TDgxLjU1MzIgMzkuMTQ3M1YzNS44NDMzTDgxLjk1MzUgMzUuODE1OUM4Ni42NjA3IDM1LjQ5MzQgOTAuMzc5OCAzMS41Njg5IDkwLjM3OTggMjYuNzc1MlYyMC43ODI5TDcyLjAzODEgMzkuMTQxMUg2OC45NzEzWk04OC43Nzg2IDE3LjcxM0g4MS4zMjU5Qzc2LjMyNTQgMTcuNzEzIDcyLjI3MiAyMS43NzAzIDcyLjI3MiAyNi43NzUyVjM0LjIzNUw4OC43Nzg2IDE3LjcxM1pNMTkuMjU1NCAxMjUuNDY3QzE5LjI1NTQgMTIzLjY1NSAxOS44NjQ2IDEyMi4xNDUgMjEuMDgyOCAxMjAuOTM4QzIyLjMwMTEgMTE5LjcxOCAyMy44NjE3IDExOS4xMDkgMjUuNzY0NSAxMTkuMTA5QzI3LjY2NzMgMTE5LjEwOSAyOS4yMjc5IDExOS43MTggMzAuNDQ2MSAxMjAuOTM4QzMxLjY2NDYgMTIyLjE0NSAzMi4yNzM2IDEyMy42NTUgMzIuMjczNiAxMjUuNDY3QzMyLjI3MzYgMTI3LjMyNSAzMS42NjQ2IDEyOC44NzUgMzAuNDQ2MSAxMzAuMTE4QzI5LjIyNzkgMTMxLjM2MSAyNy42NjczIDEzMS45ODIgMjUuNzY0NSAxMzEuOTgyQzIzLjg2MTcgMTMxLjk4MiAyMi4zMDExIDEzMS4zNjEgMjEuMDgyOCAxMzAuMTE4QzE5Ljg2NDYgMTI4Ljg3NSAxOS4yNTU0IDEyNy4zMjUgMTkuMjU1NCAxMjUuNDY3Wk0yMi40MDU1IDEyNS40NjdDMjIuNDA1NSAxMjYuNTM1IDIyLjcxODggMTI3LjQyNCAyMy4zNDUzIDEyOC4xMzJDMjMuOTgzNSAxMjguODQgMjQuNzg5OSAxMjkuMTk1IDI1Ljc2NDUgMTI5LjE5NUMyNi43MzkxIDEyOS4xOTUgMjcuNTM5NyAxMjguODQgMjguMTY2MiAxMjguMTMyQzI4LjgwNDQgMTI3LjQyNCAyOS4xMjM0IDEyNi41MzUgMjkuMTIzNCAxMjUuNDY3QzI5LjEyMzQgMTI0LjQ0NSAyOC44MDQ0IDEyMy41OTcgMjguMTY2MiAxMjIuOTIzQzI3LjUzOTcgMTIyLjIzOCAyNi43MzkxIDEyMS44OTYgMjUuNzY0NSAxMjEuODk2QzI0Ljc4OTkgMTIxLjg5NiAyMy45ODM1IDEyMi4yMzggMjMuMzQ1MyAxMjIuOTIzQzIyLjcxODggMTIzLjU5NyAyMi40MDU1IDEyNC40NDUgMjIuNDA1NSAxMjUuNDY3Wk0wLjQ0NTg0NiAxMzEuNzczVjExOS4zMTdIMy40OTE1MlYxMjQuMjk5SDguMDE2NTRWMTE5LjMxN0gxMS4wNjIzVjEzMS43NzNIOC4wMTY1NFYxMjYuODk1SDMuNDkxNTJWMTMxLjc3M0gwLjQ0NTg0NlpNNDEuNjI0OCAxMjAuOTM4QzQwLjQwNjUgMTIyLjE0NSAzOS43OTc1IDEyMy42NTUgMzkuNzk3NSAxMjUuNDY3QzM5Ljc5NzUgMTI3LjMyNSA0MC40MDY1IDEyOC44NzUgNDEuNjI0OCAxMzAuMTE4QzQyLjg0MzEgMTMxLjM2MSA0NC40MDM2IDEzMS45ODIgNDYuMzA2NSAxMzEuOTgyQzQ4LjIwOTQgMTMxLjk4MiA0OS43Njk5IDEzMS4zNjEgNTAuOTg4MiAxMzAuMTE4QzUyLjIwNjUgMTI4Ljg3NSA1Mi44MTU1IDEyNy4zMjUgNTIuODE1NSAxMjUuNDY3QzUyLjgxNTUgMTIzLjY1NSA1Mi4yMDY1IDEyMi4xNDUgNTAuOTg4MiAxMjAuOTM4QzQ5Ljc2OTkgMTE5LjcxOCA0OC4yMDk0IDExOS4xMDkgNDYuMzA2NSAxMTkuMTA5QzQ0LjQwMzYgMTE5LjEwOSA0Mi44NDMxIDExOS43MTggNDEuNjI0OCAxMjAuOTM4Wk00My44ODczIDEyOC4xMzJDNDMuMjYwOCAxMjcuNDI0IDQyLjk0NzYgMTI2LjUzNSA0Mi45NDc2IDEyNS40NjdDNDIuOTQ3NiAxMjQuNDQ1IDQzLjI2MDggMTIzLjU5NyA0My44ODczIDEyMi45MjNDNDQuNTI1NSAxMjIuMjM4IDQ1LjMzMiAxMjEuODk2IDQ2LjMwNjUgMTIxLjg5NkM0Ny4yODEzIDEyMS44OTYgNDguMDgxOSAxMjIuMjM4IDQ4LjcwODMgMTIyLjkyM0M0OS4zNDY1IDEyMy41OTcgNDkuNjY1NyAxMjQuNDQ1IDQ5LjY2NTcgMTI1LjQ2N0M0OS42NjU3IDEyNi41MzUgNDkuMzQ2NSAxMjcuNDI0IDQ4LjcwODMgMTI4LjEzMkM0OC4wODE5IDEyOC44NCA0Ny4yODEzIDEyOS4xOTUgNDYuMzA2NSAxMjkuMTk1QzQ1LjMzMiAxMjkuMTk1IDQ0LjUyNTUgMTI4Ljg0IDQzLjg4NzMgMTI4LjEzMlpNNjEuMDE4NCAxMzEuNzczVjExOS4zMTdINjQuMDY0MVYxMjQuMTI1SDY1LjMxNzJMNjcuODkyOSAxMTkuMzE3SDcxLjE2NDdMNjcuODA1OCAxMjUuMjc1VjEyNS4zMUw3MS4zNTYzIDEzMS43NzNINjcuOTQ1Mkw2NS4zMTcyIDEyNi43MjFINjQuMDY0MVYxMzEuNzczSDYxLjAxODRaTTgxLjg5OTcgMTE5LjMxN0w3Ny42NzA2IDEzMS43NzNIODAuODAzM0w4MS41NTE3IDEyOS4xNkg4NS40MzI4TDg2LjE5ODUgMTMxLjc3M0g4OS4zMzFMODUuMTAxOCAxMTkuMzE3SDgxLjg5OTdaTTg0LjcxODkgMTI2LjcyMUg4Mi4yNjUyTDgyLjk3ODcgMTI0LjI5OUM4My4xMjk1IDEyMy43NzcgODMuMjk3OCAxMjMuMDYzIDgzLjQ4MzUgMTIyLjE1N0g4My41MTgzTDg0LjAyMjkgMTI0LjI5OUw4NC43MTg5IDEyNi43MjFaTTk2Ljg1MDggMTMxLjc3M1YxMTkuMzE3SDk5Ljg5NjVWMTI0LjI5OUgxMDQuNDIxVjExOS4zMTdIMTA3LjQ2N1YxMzEuNzczSDEwNC40MjFWMTI2Ljg5NUg5OS44OTY1VjEzMS43NzNIOTYuODUwOFpNMTMuMTA2NiAxMy4xMTg3Vjk0LjUyMDRIMjMuODQzMlY5MS4wNjg1SDE3LjEyOTlWMTMuMTE4N0gxMy4xMDY2Wk0yNS43OTE4IDc4LjA2NzFWOTQuNTIwNEgyOS44MTUxVjc4LjA2NzFIMjUuNzkxOFpNMzIuMzk0NSA4Ni4yNTkyQzMyLjM5NDUgODMuODUwOCAzMy4yMDcgODEuODQwOSAzNC44MzE1IDgwLjIzMDJDMzYuNDcxNiA3OC42MDQxIDM4LjUzMjggNzcuNzkxIDQxLjAxNTggNzcuNzkxQzQzLjU3NTYgNzcuNzkxIDQ1LjY4MjkgNzguNTE5OCA0Ny4zMzgyIDc5Ljk3NzFMNDUuNDA3IDgyLjk5MTZDNDQuOTMyIDgyLjU2MiA0NC4zMTkgODIuMjAxNSA0My41Njc4IDgxLjkxMDFDNDIuODE2NyA4MS42MTg3IDQyLjA5NjMgODEuNDczIDQxLjQwNjggODEuNDczQzM5Ljc4MTkgODEuNDczIDM4LjU2MzYgODEuOTE3OCAzNy43NTEyIDgyLjgwNzZDMzYuOTU0MyA4My42ODE4IDM2LjU1NTkgODQuNzg2MyAzNi41NTU5IDg2LjEyMTNDMzYuNTU1OSA4Ny42Mzk5IDM3LjAwNzggODguODUxOSAzNy45MTIzIDg5Ljc1NjlDMzguODMxNyA5MC42NjIyIDM5Ljk1MDUgOTEuMTE0NiA0MS4yNjg3IDkxLjExNDZDNDIuNDY0MyA5MS4xMTQ2IDQzLjU3NTYgOTAuNzE1OCA0NC42MDIzIDg5LjkxODJWODguNjUyM0g0Mi4yODA1Vjg1LjIyMzdINDguMTY1OVY5NC41MjA0SDQ0LjgwOTJWOTQuMDZMNDQuODMyMiA5My4zNjk4SDQ0Ljc4NjJDNDQuMjk2IDkzLjc5OTQgNDMuNjUyMSA5NC4xNDQ2IDQyLjg1NTMgOTQuNDA1MkM0Mi4wNzMzIDk0LjY2NjEgNDEuMjc2NCA5NC43OTY2IDQwLjQ2NCA5NC43OTY2QzM4LjI1NjkgOTQuNzk2NiAzNi4zNTY1IDk0LjAyMTcgMzQuNzYyNSA5Mi40NzIyQzMzLjE4NCA5MC45MjI4IDMyLjM5NDUgODguODUxOSAzMi4zOTQ1IDg2LjI1OTJaTTUxLjA0OTggNzguMDY3MVY5NC41MjA0SDYxLjY3MTNWOTEuMDY4NUg1NS4wNzNWODcuOTYyMUg2MC4wODVWODQuNTEwMkg1NS4wNzNWODEuNTE4N0g2MS4zNDk0Vjc4LjA2NzFINTEuMDQ5OFpNNjQuMjUxMyA5NC41MjA0Vjc4LjA2NzFINjkuOTc1OUM3MS40MzE5IDc4LjA2NzEgNzIuNDk3MiA3OC4xOTc2IDczLjE3MTUgNzguNDU4NEM3NC4xMjE3IDc4LjgyNjQgNzQuODY1MSA3OS40MjQ4IDc1LjQwMTYgODAuMjUzMkM3NS45MzgxIDgxLjA2NjQgNzYuMjA2MiA4Mi4wNjM1IDc2LjIwNjIgODMuMjQ0N0M3Ni4yMDYyIDg0LjE2NTMgNzUuOTkxNiA4NS4wNDcyIDc1LjU2MjQgODUuODkwOUM3NS4xMzM1IDg2LjcxOTMgNzQuNTI3OSA4Ny4zMzMgNzMuNzQ2MyA4Ny43MzIxVjg3Ljc3NzhDNzMuODk5NiA4Ny45Nzc0IDc0LjEwNjQgODguMzA3NCA3NC4zNjcxIDg4Ljc2NzVMNzcuNTYyNyA5NC41MjA0SDczLjA3OTRMNzAuMTU5NyA4OC45NzQ1SDY4LjI3NDVWOTQuNTIwNEg2NC4yNTEzWk02OC4yNzQ1IDg1LjUyMjlINzAuMDIxOUM3MC42ODEgODUuNTIyOSA3MS4xOTQyIDg1LjM0NjQgNzEuNTYyMiA4NC45OTM3QzcxLjkzMDEgODQuNjQwNyA3Mi4xMTQgODQuMTQyMiA3Mi4xMTQgODMuNDk3OEM3Mi4xMTQgODIuNTkyOCA3MS43OTIgODIuMDA5NyA3MS4xNDg1IDgxLjc0OTFDNzAuNzk1OCA4MS41OTU2IDcwLjI5MDEgODEuNTE4NyA2OS42MzEgODEuNTE4N0g2OC4yNzQ1Vjg1LjUyMjlaTTgwLjcyMTIgODAuMjA3MUM3OS4xMTE5IDgxLjgwMjcgNzguMzA3MyA4My43OTcgNzguMzA3MyA4Ni4xOTAxQzc4LjMwNzMgODguNjQ0OSA3OS4xMTE5IDkwLjY5MjcgODAuNzIxMiA5Mi4zMzQzQzgyLjMzMDggOTMuOTc1NiA4NC4zOTIgOTQuNzk2NiA4Ni45MDU4IDk0Ljc5NjZDODkuNDE5MyA5NC43OTY2IDkxLjQ4MDggOTMuOTc1NiA5My4wOTAxIDkyLjMzNDNDOTQuNjk5NCA5MC42OTI3IDk1LjUwNDEgODguNjQ0OSA5NS41MDQxIDg2LjE5MDFDOTUuNTA0MSA4My43OTcgOTQuNjk5NCA4MS44MDI3IDkzLjA5MDEgODAuMjA3MUM5MS40ODA4IDc4LjU5NjQgODkuNDE5MyA3Ny43OTEgODYuOTA1OCA3Ny43OTFDODQuMzkyIDc3Ljc5MSA4Mi4zMzA4IDc4LjU5NjQgODAuNzIxMiA4MC4yMDcxWk04My43MDk5IDg5LjcxMDhDODIuODgyMyA4OC43NzUzIDgyLjQ2ODYgODcuNjAxNiA4Mi40Njg2IDg2LjE5MDFDODIuNDY4NiA4NC44NDAyIDgyLjg4MjMgODMuNzIwNCA4My43MDk5IDgyLjgzMDZDODQuNTUzMiA4MS45MjUzIDg1LjYxODEgODEuNDczIDg2LjkwNTggODEuNDczQzg4LjE5MzIgODEuNDczIDg5LjI1MDcgODEuOTI1MyA5MC4wNzg0IDgyLjgzMDZDOTAuOTIxMyA4My43MjA0IDkxLjM0MyA4NC44NDAyIDkxLjM0MyA4Ni4xOTAxQzkxLjM0MyA4Ny42MDE2IDkwLjkyMTMgODguNzc1MyA5MC4wNzg0IDg5LjcxMDhDODkuMjUwNyA5MC42NDY2IDg4LjE5MzIgOTEuMTE0NiA4Ni45MDU4IDkxLjExNDZDODUuNjE4MSA5MS4xMTQ2IDg0LjU1MzIgOTAuNjQ2NiA4My43MDk5IDg5LjcxMDhaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDwvc3ZnPjwvYT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX25hdi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXJfX25hdlwiPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZvb3Rlcl9fbmF2LWl0ZW1cIj48YSBjbGFzc05hbWU9XCJmb290ZXJfX25hdi1saW5rXCIgaHJlZj1cIlwiPtCa0LDQu9GM0Y/QvdGLPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZm9vdGVyX19uYXYtaXRlbVwiPjxhIGNsYXNzTmFtZT1cImZvb3Rlcl9fbmF2LWxpbmtcIiBocmVmPVwiXCI+0JDQutGB0LXRgdGB0YPQsNGA0Ys8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmb290ZXJfX25hdi1pdGVtXCI+PGEgY2xhc3NOYW1lPVwiZm9vdGVyX19uYXYtbGlua1wiIGhyZWY9XCJcIj7QotCw0LHQsNC6PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZm9vdGVyX19uYXYtaXRlbVwiPjxhIGNsYXNzTmFtZT1cImZvb3Rlcl9fbmF2LWxpbmtcIiBocmVmPVwiXCI+0KPQs9C+0LvRjDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvb3Rlcl9fbmF2XCI+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZm9vdGVyX19uYXYtaXRlbVwiPjxhIGNsYXNzTmFtZT1cImZvb3Rlcl9fbmF2LWxpbmtcIiBocmVmPVwiXCI+0JHQu9C+0LM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmb290ZXJfX25hdi1pdGVtXCI+PGEgY2xhc3NOYW1lPVwiZm9vdGVyX19uYXYtbGlua1wiIGhyZWY9XCJcIj7QntC/0LvQsNGC0LAg0Lgg0LTQvtGB0YLQstC60LA8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmb290ZXJfX25hdi1pdGVtXCI+PGEgY2xhc3NOYW1lPVwiZm9vdGVyX19uYXYtbGlua1wiIGhyZWY9XCJcIj7QmtC+0L3RgtCw0LrRgtGLPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19jb250YWN0c1wiPjxhIGNsYXNzTmFtZT1cImZvb3Rlcl9fY29udGFjdHMtbGlua1wiIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxM1wiIGhlaWdodD1cIjEzXCIgdmlld0JveD1cIjAgMCAxMyAxM1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIuNjE4MDYgNS42Mjk3MkMzLjY1ODA2IDcuNjczNjEgNS4zMyA5LjM0NTU1IDcuMzc3NSAxMC4zODU2TDguOTY2MzkgOC43OTMwNkM5LjE2NSA4LjU5NDQ0IDkuNDUwMjggOC41MzY2NyA5LjY5OTQ0IDguNjE2MTFDMTAuNTA4MyA4Ljg4MzMzIDExLjM3ODYgOS4wMjc3OCAxMi4yNzc4IDkuMDI3NzhDMTIuNjc4NiA5LjAyNzc4IDEzIDkuMzQ5MTcgMTMgOS43NVYxMi4yNzc4QzEzIDEyLjY3ODYgMTIuNjc4NiAxMyAxMi4yNzc4IDEzQzUuNDk2MTEgMTMgMCA3LjUwMzg5IDAgMC43MjIyMjJDMCAwLjMyMTM4OSAwLjMyNSAwIDAuNzIyMjIyIDBIMy4yNUMzLjY1MDgzIDAgMy45NzIyMiAwLjMyMTM4OSAzLjk3MjIyIDAuNzIyMjIyQzMuOTcyMjIgMS42MjEzOSA0LjExNjY3IDIuNDkxNjcgNC4zODM4OSAzLjMwMDU2QzQuNDYzMzMgMy41NDk3MiA0LjQwNTU2IDMuODM1IDQuMjA2OTQgNC4wMzM2MUwyLjYxODA2IDUuNjI5NzJaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+KzM4ICgwNjMpIDc0NiAtIDUxIC0gNTE8L2E+PGEgY2xhc3NOYW1lPVwiZm9vdGVyX19jb250YWN0cy1saW5rXCIgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEzXCIgaGVpZ2h0PVwiMTNcIiB2aWV3Qm94PVwiMCAwIDEzIDEzXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMi42MTgwNiA1LjYyOTcyQzMuNjU4MDYgNy42NzM2MSA1LjMzIDkuMzQ1NTUgNy4zNzc1IDEwLjM4NTZMOC45NjYzOSA4Ljc5MzA2QzkuMTY1IDguNTk0NDQgOS40NTAyOCA4LjUzNjY3IDkuNjk5NDQgOC42MTYxMUMxMC41MDgzIDguODgzMzMgMTEuMzc4NiA5LjAyNzc4IDEyLjI3NzggOS4wMjc3OEMxMi42Nzg2IDkuMDI3NzggMTMgOS4zNDkxNyAxMyA5Ljc1VjEyLjI3NzhDMTMgMTIuNjc4NiAxMi42Nzg2IDEzIDEyLjI3NzggMTNDNS40OTYxMSAxMyAwIDcuNTAzODkgMCAwLjcyMjIyMkMwIDAuMzIxMzg5IDAuMzI1IDAgMC43MjIyMjIgMEgzLjI1QzMuNjUwODMgMCAzLjk3MjIyIDAuMzIxMzg5IDMuOTcyMjIgMC43MjIyMjJDMy45NzIyMiAxLjYyMTM5IDQuMTE2NjcgMi40OTE2NyA0LjM4Mzg5IDMuMzAwNTZDNC40NjMzMyAzLjU0OTcyIDQuNDA1NTYgMy44MzUgNC4yMDY5NCA0LjAzMzYxTDIuNjE4MDYgNS42Mjk3MlpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz4rMzggKDA2MykgNzQ2IC0gNTEgLSA1MTwvYT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fY29udGFjdHMtdGV4dFwiPtCV0LbQtdC00L3QtdCy0L3QviDRgSA5OjAwINC00L4gMjE6MDA8L2Rpdj48YSBjbGFzc05hbWU9XCJmb290ZXJfX2NvbnRhY3RzLWxpbmtcIiBocmVmPVwiXCI+IFxuICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEzXCIgaGVpZ2h0PVwiMTNcIiB2aWV3Qm94PVwiMCAwIDEzIDEzXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNi41IDguMTI1QzYuMjgzODcgOC4xMjUgNi4wOTM3NSA4LjA0ODYyIDUuNjg3NSA3Ljg1MkwwIDQuODc1VjEwLjU2MjVDMCAxMS4wMDk0IDAuMzY1NjI1IDExLjM3NSAwLjgxMjUgMTEuMzc1SDEyLjE4NzVDMTIuNjM0NCAxMS4zNzUgMTMgMTEuMDA5NCAxMyAxMC41NjI1VjQuODc1TDcuMzEyNSA3Ljg1MkM2LjkwNjI1IDguMDQ4NjIgNi43MTYxMyA4LjEyNSA2LjUgOC4xMjVaTTEyLjE4NzUgMS42MjVIMC44MTI1QzAuMzY1NjI1IDEuNjI1IDAgMS45OTA2MiAwIDIuNDM3NVYzLjA1MzM3TDYuNSA2LjQ2OTk0TDEzIDMuMDUzMzdWMi40Mzc1QzEzIDEuOTkwNjIgMTIuNjM0NCAxLjYyNSAxMi4xODc1IDEuNjI1WlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPmluZm9AbGlnZXJvaG9va2FoLmNvbTwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXJfX3NvY2lhbHNcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmb290ZXJfX3NvY2lhbHMtaXRlbVwiPjxhIGNsYXNzTmFtZT1cImZvb3Rlcl9fc29jaWFscy1pdGVtLWxpbmtcIiBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE4IDE4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTkgMThDMTMuOTcwNSAxOCAxOCAxMy45NzA1IDE4IDlDMTggNC4wMjk0NSAxMy45NzA1IDAgOSAwQzQuMDI5NDUgMCAwIDQuMDI5NDUgMCA5QzAgMTMuOTcwNSA0LjAyOTQ1IDE4IDkgMThaXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zLjM1MTYyIDkuNDQwMjZDNC40MDM3MSA4Ljg2MDc0IDUuNTc4MTMgOC4zNzcwNiA2LjY3NTQ2IDcuODkwOTFDOC41NjMyOCA3LjA5NDY0IDEwLjQ1ODYgNi4zMTIxNiAxMi4zNzMxIDUuNTgzNjlDMTIuNzQ1NSA1LjQ1OTU2IDEzLjQxNDggNS4zMzgxOCAxMy40ODA0IDUuODkwMThDMTMuNDQ0NSA2LjY3MTUzIDEzLjI5NjcgNy40NDgzIDEzLjE5NTMgOC4yMjUwOEMxMi45Mzc5IDkuOTMzMjggMTIuNjQwNSAxMS42MzU2IDEyLjM1MDQgMTMuMzM4MkMxMi4yNTA1IDEzLjkwNTMgMTEuNTQgMTQuMTk4OSAxMS4wODU1IDEzLjgzNkM5Ljk5MzAxIDEzLjA5ODEgOC44OTIxNiAxMi4zNjczIDcuODEzNjYgMTEuNjEyM0M3LjQ2MDM3IDExLjI1MzMgNy43ODc5NyAxMC43Mzc4IDguMTAzNSAxMC40ODE1QzkuMDAzMjcgOS41OTQ3MyA5Ljk1NzUgOC44NDEzNSAxMC44MTAyIDcuOTA4OEMxMS4wNDAzIDcuMzUzMzEgMTAuMzYwNiA3LjgyMTQ2IDEwLjEzNjQgNy45NjQ5QzguOTA0NjUgOC44MTM3NSA3LjcwMyA5LjcxNDQzIDYuNDA0MyAxMC40NjA1QzUuNzQwOTIgMTAuODI1NiA0Ljk2Nzc1IDEwLjUxMzYgNC4zMDQ2NyAxMC4zMDk4QzMuNzEwMTQgMTAuMDYzNiAyLjgzODkzIDkuODE1NjQgMy4zNTE1NiA5LjQ0MDNMMy4zNTE2MiA5LjQ0MDI2WlwiIGZpbGw9XCIjZmZmXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZvb3Rlcl9fc29jaWFscy1pdGVtXCI+PGEgY2xhc3NOYW1lPVwiZm9vdGVyX19zb2NpYWxzLWl0ZW0tbGlua1wiIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMTggMThcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTQuODg0MiA0LjE5NTgzQzE0Ljg4NDIgNC43OTIzNiAxNC40MDA2IDUuMjc1ODMgMTMuODA0MiA1LjI3NTgzQzEzLjIwNzggNS4yNzU4MyAxMi43MjQyIDQuNzkyMzYgMTIuNzI0MiA0LjE5NTgzQzEyLjcyNDIgMy41OTkzIDEzLjIwNzggMy4xMTU4MyAxMy44MDQyIDMuMTE1ODNDMTQuNDAwNyAzLjExNTgzIDE0Ljg4NDIgMy41OTkzIDE0Ljg4NDIgNC4xOTU4M1pNOSAxMkM3LjM0MzE2IDEyIDYuMDAwMDUgMTAuNjU2OCA2LjAwMDA1IDlDNi4wMDAwNSA3LjM0MzE2IDcuMzQzMTYgNi4wMDAwNSA5IDYuMDAwMDVDMTAuNjU2OCA2LjAwMDA1IDEyIDcuMzQzMTYgMTIgOUMxMiAxMC42NTY4IDEwLjY1NjggMTIgOSAxMlpNOSA0LjM3ODM2QzYuNDQ3NTIgNC4zNzgzNiA0LjM3ODM2IDYuNDQ3NTIgNC4zNzgzNiA5QzQuMzc4MzYgMTEuNTUyNSA2LjQ0NzUyIDEzLjYyMTYgOSAxMy42MjE2QzExLjU1MjUgMTMuNjIxNiAxMy42MjE2IDExLjU1MjUgMTMuNjIxNiA5QzEzLjYyMTYgNi40NDc1MiAxMS41NTI1IDQuMzc4MzYgOSA0LjM3ODM2Wk05IDEuNjIxNjlDMTEuNDAzMSAxLjYyMTY5IDExLjY4NzggMS42MzA4MyAxMi42MzY3IDEuNjc0MTRDMTMuNTE0MiAxLjcxNDIyIDEzLjk5MDggMS44NjA3NSAxNC4zMDc5IDEuOTg0MDhDMTQuNzI3OSAyLjE0NzM0IDE1LjAyNzcgMi4zNDIzOSAxNS4zNDI3IDIuNjU3MzlDMTUuNjU3NyAyLjk3MjI1IDE1Ljg1MjggMy4yNzIwNiAxNi4wMTYxIDMuNjkyMjVDMTYuMTM5MiA0LjAwOTM2IDE2LjI4NTkgNC40ODU5NCAxNi4zMjYgNS4zNjM0NEMxNi4zNjkzIDYuMzEyNTIgMTYuMzc4NSA2LjU5NzE0IDE2LjM3ODUgOS4wMDAyOEMxNi4zNzg1IDExLjQwMzQgMTYuMzY5MyAxMS42ODggMTYuMzI2IDEyLjYzN0MxNi4yODU5IDEzLjUxNDUgMTYuMTM5NCAxMy45OTExIDE2LjAxNjEgMTQuMzA4MkMxNS44NTI4IDE0LjcyODIgMTUuNjU3NyAxNS4wMjggMTUuMzQyNyAxNS4zNDNDMTUuMDI3OSAxNS42NTggMTQuNzI4MSAxNS44NTMxIDE0LjMwNzkgMTYuMDE2M0MxMy45OTA4IDE2LjEzOTUgMTMuNTE0MiAxNi4yODYyIDEyLjYzNjcgMTYuMzI2M0MxMS42ODc4IDE2LjM2OTYgMTEuNDAzMSAxNi4zNzg3IDkgMTYuMzc4N0M2LjU5NjcyIDE2LjM3ODcgNi4zMTIwOSAxNi4zNjk2IDUuMzYzMTYgMTYuMzI2M0M0LjQ4NTY2IDE2LjI4NjIgNC4wMDkwOCAxNi4xMzk3IDMuNjkxOTcgMTYuMDE2M0MzLjI3MTkyIDE1Ljg1MzEgMi45NzIxMSAxNS42NTggMi42NTcxMSAxNS4zNDNDMi4zNDIyNSAxNS4wMjgyIDIuMTQ3MDYgMTQuNzI4NCAxLjk4MzggMTQuMzA4MkMxLjg2MDYxIDEzLjk5MTEgMS43MTM5NCAxMy41MTQ1IDEuNjczODYgMTIuNjM3QzEuNjMwNTUgMTEuNjg3OSAxLjYyMTQxIDExLjQwMzMgMS42MjE0MSA5LjAwMDI4QzEuNjIxNDEgNi41OTcxNCAxLjYzMDU1IDYuMzEyNTIgMS42NzM4NiA1LjM2MzQ0QzEuNzEzOTQgNC40ODU5NCAxLjg2MDQ3IDQuMDA5MzYgMS45ODM4IDMuNjkyMjVDMi4xNDcwNiAzLjI3MjIgMi4zNDIxMSAyLjk3MjM5IDIuNjU3MTEgMi42NTczOUMyLjk3MTk3IDIuMzQyMzkgMy4yNzE3OCAyLjE0NzM0IDMuNjkxOTcgMS45ODQwOEM0LjAwOTA4IDEuODYwODkgNC40ODU2NiAxLjcxNDIyIDUuMzYzMTYgMS42NzQxNEM2LjMxMjIzIDEuNjMwODMgNi41OTY4NiAxLjYyMTY5IDkgMS42MjE2OVpNOSAwQzYuNTU1OCAwIDYuMjQ5MjMgMC4wMTA0MDYzIDUuMjg5MzMgMC4wNTQxNDA2QzQuMzMxMzkgMC4wOTc4NzUgMy42NzcwNiAwLjI1MDAzMSAzLjEwNDcyIDAuNDcyNUMyLjUxMjgzIDAuNzAyNDIyIDIuMDEwOTQgMS4wMTAyNSAxLjUxMDU5IDEuNTEwNTlDMS4wMTAyNSAyLjAxMDk0IDAuNzAyNDIyIDIuNTEyODMgMC40NzI1IDMuMTA0NzJDMC4yNTAwMzEgMy42NzcyIDAuMDk3ODc1IDQuMzMxMzkgMC4wNTQxNDA2IDUuMjg5MzNDMC4wMTA0MDYzIDYuMjQ5MjMgMCA2LjU1NTggMCA5QzAgMTEuNDQ0MiAwLjAxMDQwNjMgMTEuNzUwOCAwLjA1NDE0MDYgMTIuNzEwN0MwLjA5Nzg3NSAxMy42Njg2IDAuMjUwMDMxIDE0LjMyMjggMC40NzI1IDE0Ljg5NTNDMC43MDI0MjIgMTUuNDg3MiAxLjAxMDI1IDE1Ljk4OTEgMS41MTA1OSAxNi40ODk0QzIuMDEwOTQgMTYuOTg5NyAyLjUxMjgzIDE3LjI5NzQgMy4xMDQ3MiAxNy41Mjc1QzMuNjc3MiAxNy43NSA0LjMzMTM5IDE3LjkwMjEgNS4yODkzMyAxNy45NDU5QzYuMjQ5MjMgMTcuOTg5NiA2LjU1NTggMTggOSAxOEMxMS40NDQyIDE4IDExLjc1MDggMTcuOTg5NiAxMi43MTA3IDE3Ljk0NTlDMTMuNjY4NiAxNy45MDIxIDE0LjMyMjggMTcuNzUgMTQuODk1MyAxNy41Mjc1QzE1LjQ4NzIgMTcuMjk3NCAxNS45ODkxIDE2Ljk4OTcgMTYuNDg5NCAxNi40ODk0QzE2Ljk4OTcgMTUuOTg5MSAxNy4yOTc0IDE1LjQ4NzIgMTcuNTI3NSAxNC44OTUzQzE3Ljc1IDE0LjMyMjggMTcuOTAyMSAxMy42Njg2IDE3Ljk0NTkgMTIuNzEwN0MxNy45ODk2IDExLjc1MDggMTggMTEuNDQ0MiAxOCA5QzE4IDYuNTU1OCAxNy45ODk2IDYuMjQ5MjMgMTcuOTQ1OSA1LjI4OTMzQzE3LjkwMjEgNC4zMzEzOSAxNy43NSAzLjY3NzIgMTcuNTI3NSAzLjEwNDcyQzE3LjI5NzQgMi41MTI4MyAxNi45ODk3IDIuMDEwOTQgMTYuNDg5NCAxLjUxMDU5QzE1Ljk4OTEgMS4wMTAyNSAxNS40ODcyIDAuNzAyNTYzIDE0Ljg5NTMgMC40NzI1QzE0LjMyMjggMC4yNTAwMzEgMTMuNjY4NiAwLjA5Nzg3NSAxMi43MTA3IDAuMDU0MTQwNkMxMS43NTA4IDAuMDEwNDA2MyAxMS40NDQyIDAgOSAwWlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmb290ZXJfX3NvY2lhbHMtaXRlbVwiPjxhIGNsYXNzTmFtZT1cImZvb3Rlcl9fc29jaWFscy1pdGVtLWxpbmtcIiBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjlcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgOSAxOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01Ljc4NTcxIDE4VjkuOTk5OTdIOC4zNTcxNEw5IDYuNjY2NjRINS43ODU3MVY1LjMzMzMxQzUuNzg1NzEgMy45OTk5OSA2LjQyOTgzIDMuMzMzMzIgNy43MTQyOCAzLjMzMzMySDlWMEM4LjM1NzE0IDAgNy41NTk5NSAwIDYuNDI4NTcgMEM0LjA2NjA2IDAgMi41NzE0MyAxLjkyMDY1IDIuNTcxNDMgNC42NjY2NVY2LjY2NjY0SDBWOS45OTk5N0gyLjU3MTQzVjE3Ljk5OTlMNS43ODU3MSAxOFpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZm9vdGVyX19zb2NpYWxzLWl0ZW1cIj48YSBjbGFzc05hbWU9XCJmb290ZXJfX3NvY2lhbHMtaXRlbS1saW5rXCIgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyMiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMS43ODggMy4wODU1QzIxLjcyMzQgMi4zNjQ2NiAyMS40MDcgMS42ODk2MSAyMC44OTQyIDEuMTc4ODZDMjAuMzgxNCAwLjY2ODEwOCAxOS43MDUyIDAuMzU0MzA0IDE4Ljk4NDEgMC4yOTI1MzRDMTcuMjU5NyAwLjE0OTQ0NiAxNC43MDM4IDAgMTEuNTUwMSAwQzcuNzUyMzcgMCA0Ljg4NTYyIDAuMTU1MTU1IDMuMDMyMjUgMC4zMDA2NTJDMi4zMDc3NyAwLjM1ODg1NCAxLjYyNzIzIDAuNjcxNDQ3IDEuMTExMDUgMS4xODMxMkMwLjU5NDg2NCAxLjY5NDc5IDAuMjc2MzA5IDIuMzcyNTYgMC4yMTE3NSAzLjA5NjVDMC4wOTgyOTYxIDQuMjkwMjMgMCA1Ljg2Njc5IDAgNy43NDY1M0MwIDkuNTc5NDggMC4wOTc0ODE5IDExLjEyODIgMC4yMTA0MDggMTIuMzA3MUMwLjI3NTYxMiAxMy4wMzA0IDAuNTk0NDM1IDEzLjcwNzMgMS4xMTA1MiAxNC4yMTgzQzEuNjI2NjEgMTQuNzI5MiAyLjMwNjcyIDE1LjA0MTMgMy4wMzA2MyAxNS4wOTkyQzQuODgzOTMgMTUuMjQ0NyA3Ljc1MTIzIDE1LjQgMTEuNTUwMSAxNS40QzE0LjcwMzggMTUuNCAxNy4yNTk3IDE1LjI1MDYgMTguOTg0MSAxNS4xMDc0QzE5LjcwNTIgMTUuMDQ1NyAyMC4zODE1IDE0LjczMTkgMjAuODk0MiAxNC4yMjExQzIxLjQwNyAxMy43MTA0IDIxLjcyMzUgMTMuMDM1MyAyMS43ODggMTIuMzE0NUMyMS45MDE2IDExLjEyNyAyMiA5LjU2MTA4IDIyIDcuN0MyMiA1LjgzODkyIDIxLjkwMTYgNC4yNzI5NyAyMS43ODggMy4wODU1Wk04LjU1MzUzIDEwLjkzMjdWNC40NjczNEwxNC45MzE0IDcuN0w4LjU1MzUzIDEwLjkzMjdaXCI+ICAgPC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+PGEgY2xhc3NOYW1lPVwiZm9vdGVyX19saW5rXCIgaHJlZj1cIlwiPtCf0L7Qu9C40YLQuNC60LAg0LrQvtC90YTQuNC00LXQvdGG0LjQsNC70YzQvdC+0YHRgtC4PC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAvKiBTbGlkZXIgKi9cbiAgICAgICAuc2xpY2stc2xpZGVyXG4gICAgICAge1xuICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgXG4gICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgIFxuICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgIFxuICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgLW1zLXRvdWNoLWFjdGlvbjogcGFuLXk7XG4gICAgICAgICAgICAgICB0b3VjaC1hY3Rpb246IHBhbi15O1xuICAgICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgIH1cbiAgICAgICBcbiAgICAgICAuc2xpY2stbGlzdFxuICAgICAgIHtcbiAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgIFxuICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICBcbiAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgIH1cbiAgICAgICAuc2xpY2stbGlzdDpmb2N1c1xuICAgICAgIHtcbiAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICB9XG4gICAgICAgLnNsaWNrLWxpc3QuZHJhZ2dpbmdcbiAgICAgICB7XG4gICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgY3Vyc29yOiBoYW5kO1xuICAgICAgIH1cbiAgICAgICBcbiAgICAgICAuc2xpY2stc2xpZGVyIC5zbGljay10cmFjayxcbiAgICAgICAuc2xpY2stc2xpZGVyIC5zbGljay1saXN0XG4gICAgICAge1xuICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICB9XG4gICAgICAgXG4gICAgICAgLnNsaWNrLXRyYWNrXG4gICAgICAge1xuICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICBcbiAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgfVxuICAgICAgIC5zbGljay10cmFjazpiZWZvcmUsXG4gICAgICAgLnNsaWNrLXRyYWNrOmFmdGVyXG4gICAgICAge1xuICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICBcbiAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgfVxuICAgICAgIC5zbGljay10cmFjazphZnRlclxuICAgICAgIHtcbiAgICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgfVxuICAgICAgIC5zbGljay1sb2FkaW5nIC5zbGljay10cmFja1xuICAgICAgIHtcbiAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgIH1cbiAgICAgICBcbiAgICAgICAuc2xpY2stc2xpZGVcbiAgICAgICB7XG4gICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgIFxuICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgICAgICB9XG4gICAgICAgW2Rpcj0ncnRsJ10gLnNsaWNrLXNsaWRlXG4gICAgICAge1xuICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgfVxuICAgICAgIC5zbGljay1zbGlkZSBpbWdcbiAgICAgICB7XG4gICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgIH1cbiAgICAgICAuc2xpY2stc2xpZGUuc2xpY2stbG9hZGluZyBpbWdcbiAgICAgICB7XG4gICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgfVxuICAgICAgIC5zbGljay1zbGlkZS5kcmFnZ2luZyBpbWdcbiAgICAgICB7XG4gICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgIH1cbiAgICAgICAuc2xpY2staW5pdGlhbGl6ZWQgLnNsaWNrLXNsaWRlXG4gICAgICAge1xuICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICB9XG4gICAgICAgLnNsaWNrLWxvYWRpbmcgLnNsaWNrLXNsaWRlXG4gICAgICAge1xuICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgfVxuICAgICAgIC5zbGljay12ZXJ0aWNhbCAuc2xpY2stc2xpZGVcbiAgICAgICB7XG4gICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgIFxuICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgXG4gICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgIH1cbiAgICAgICAuc2xpY2stYXJyb3cuc2xpY2staGlkZGVuIHtcbiAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyIHtcbiAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gICAgICAgICAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUge1xuICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyB9XG4gICAgICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkIHtcbiAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgICAgICAgICAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19jbGVhciB7XG4gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtOyB9XG4gICAgICAgICAuc2VsZWN0Mi1jb250YWluZXJbZGlyPVwicnRsXCJdIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQge1xuICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDsgfVxuICAgICAgICAgLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xuICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICBtaW4taGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgfVxuICAgICAgICAgICAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkIHtcbiAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICBwYWRkaW5nOiAwOyB9XG4gICAgICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2xlYXIge1xuICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICBmb250LXNpemU6IDFlbTsgfVxuICAgICAgICAgLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLXNlYXJjaC0taW5saW5lIC5zZWxlY3QyLXNlYXJjaF9fZmllbGQge1xuICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7IH1cbiAgICAgICAgICAgLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLXNlYXJjaC0taW5saW5lIC5zZWxlY3QyLXNlYXJjaF9fZmllbGQ6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xuICAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLWRyb3Bkb3duIHtcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgIGxlZnQ6IC0xMDAwMDBweDtcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgei1pbmRleDogMTA1MTsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLXJlc3VsdHMge1xuICAgICAgICAgZGlzcGxheTogYmxvY2s7IH1cbiAgICAgICBcbiAgICAgICAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25zIHtcbiAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICBwYWRkaW5nOiAwOyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uIHtcbiAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0tc2VsZWN0YWJsZSB7XG4gICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgICBcbiAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLW9wZW4gLnNlbGVjdDItZHJvcGRvd24ge1xuICAgICAgICAgbGVmdDogMDsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbiAuc2VsZWN0Mi1kcm9wZG93bi0tYWJvdmUge1xuICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbiAuc2VsZWN0Mi1kcm9wZG93bi0tYmVsb3cge1xuICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLXNlYXJjaC0tZHJvcGRvd24ge1xuICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICBwYWRkaW5nOiA0cHg7IH1cbiAgICAgICAgIC5zZWxlY3QyLXNlYXJjaC0tZHJvcGRvd24gLnNlbGVjdDItc2VhcmNoX19maWVsZCB7XG4gICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgICAgICAgICAgLnNlbGVjdDItc2VhcmNoLS1kcm9wZG93biAuc2VsZWN0Mi1zZWFyY2hfX2ZpZWxkOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcbiAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IH1cbiAgICAgICAgIC5zZWxlY3QyLXNlYXJjaC0tZHJvcGRvd24uc2VsZWN0Mi1zZWFyY2gtLWhpZGUge1xuICAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY2xvc2UtbWFzayB7XG4gICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlIHtcbiAgICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgICAgICAgY2xpcDogcmVjdCgwIDAgMCAwKSAhaW1wb3J0YW50O1xuICAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IGluc2V0KDUwJSkgIWltcG9ydGFudDtcbiAgICAgICAgIGNsaXAtcGF0aDogaW5zZXQoNTAlKSAhaW1wb3J0YW50O1xuICAgICAgICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcbiAgICAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgd2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50OyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIHtcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4OyB9XG4gICAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCB7XG4gICAgICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDsgfVxuICAgICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2xlYXIge1xuICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7IH1cbiAgICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX3BsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgY29sb3I6ICM5OTk7IH1cbiAgICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93IHtcbiAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICAgICByaWdodDogMXB4O1xuICAgICAgICAgICB3aWR0aDogMjBweDsgfVxuICAgICAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyBiIHtcbiAgICAgICAgICAgICBib3JkZXItY29sb3I6ICM4ODggdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDVweCA0cHggMCA0cHg7XG4gICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTRweDtcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICB3aWR0aDogMDsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdFtkaXI9XCJydGxcIl0gLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19jbGVhciB7XG4gICAgICAgICBmbG9hdDogbGVmdDsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdFtkaXI9XCJydGxcIl0gLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyB7XG4gICAgICAgICBsZWZ0OiAxcHg7XG4gICAgICAgICByaWdodDogYXV0bzsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdC5zZWxlY3QyLWNvbnRhaW5lci0tZGlzYWJsZWQgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUge1xuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgICAgIGN1cnNvcjogZGVmYXVsdDsgfVxuICAgICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0LnNlbGVjdDItY29udGFpbmVyLS1kaXNhYmxlZCAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2NsZWFyIHtcbiAgICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdC5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbiAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93IGIge1xuICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjODg4IHRyYW5zcGFyZW50O1xuICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDRweCA1cHggNHB4OyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgY3Vyc29yOiB0ZXh0O1xuICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUuc2VsZWN0Mi1zZWxlY3Rpb24tLWNsZWFyYWJsZSB7XG4gICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7IH1cbiAgICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2xlYXIge1xuICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICBwYWRkaW5nOiAxcHg7IH1cbiAgICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlIHtcbiAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcbiAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlX19kaXNwbGF5IHtcbiAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4OyB9XG4gICAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZV9fcmVtb3ZlIHtcbiAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2FhYTtcbiAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgcGFkZGluZzogMCA0cHg7XG4gICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgdG9wOiAwOyB9XG4gICAgICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmU6aG92ZXIsIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmU6Zm9jdXMge1xuICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdFtkaXI9XCJydGxcIl0gLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0W2Rpcj1cInJ0bFwiXSAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlX19kaXNwbGF5IHtcbiAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgcGFkZGluZy1yaWdodDogMnB4OyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0W2Rpcj1cInJ0bFwiXSAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmUge1xuICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYWFhO1xuICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdFtkaXI9XCJydGxcIl0gLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2NsZWFyIHtcbiAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IH1cbiAgICAgICBcbiAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQuc2VsZWN0Mi1jb250YWluZXItLWZvY3VzIC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xuICAgICAgICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG4gICAgICAgICBvdXRsaW5lOiAwOyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0LnNlbGVjdDItY29udGFpbmVyLS1kaXNhYmxlZCAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIHtcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cbiAgICAgICBcbiAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQuc2VsZWN0Mi1jb250YWluZXItLWRpc2FibGVkIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmUge1xuICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdC5zZWxlY3QyLWNvbnRhaW5lci0tb3Blbi5zZWxlY3QyLWNvbnRhaW5lci0tYWJvdmUgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUsIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdC5zZWxlY3QyLWNvbnRhaW5lci0tb3Blbi5zZWxlY3QyLWNvbnRhaW5lci0tYWJvdmUgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSB7XG4gICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7IH1cbiAgICAgICBcbiAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQuc2VsZWN0Mi1jb250YWluZXItLW9wZW4uc2VsZWN0Mi1jb250YWluZXItLWJlbG93IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlLCAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQuc2VsZWN0Mi1jb250YWluZXItLW9wZW4uc2VsZWN0Mi1jb250YWluZXItLWJlbG93IC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xuICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwOyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlYXJjaC0tZHJvcGRvd24gLnNlbGVjdDItc2VhcmNoX19maWVsZCB7XG4gICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhOyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlYXJjaC0taW5saW5lIC5zZWxlY3QyLXNlYXJjaF9fZmllbGQge1xuICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXJlc3VsdHMgPiAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25zIHtcbiAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgb3ZlcmZsb3cteTogYXV0bzsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24gLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uIHtcbiAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtOyB9XG4gICAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uIC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbiAuc2VsZWN0Mi1yZXN1bHRzX19ncm91cCB7XG4gICAgICAgICAgIHBhZGRpbmctbGVmdDogMDsgfVxuICAgICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbiAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24gLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uIHtcbiAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xZW07XG4gICAgICAgICAgIHBhZGRpbmctbGVmdDogMmVtOyB9XG4gICAgICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24gLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uIC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbiAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24ge1xuICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMmVtO1xuICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM2VtOyB9XG4gICAgICAgICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbiAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24gLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uIC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbiAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24ge1xuICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zZW07XG4gICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRlbTsgfVxuICAgICAgICAgICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbiAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24gLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uIC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbiAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24gLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uIHtcbiAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC00ZW07XG4gICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNWVtOyB9XG4gICAgICAgICAgICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24gLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uIC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbiAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24gLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uIC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbiAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24ge1xuICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNWVtO1xuICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNmVtOyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0tZ3JvdXAge1xuICAgICAgICAgcGFkZGluZzogMDsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLWRpc2FibGVkIHtcbiAgICAgICAgIGNvbG9yOiAjOTk5OyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0tc2VsZWN0ZWQge1xuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLWhpZ2hsaWdodGVkLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1zZWxlY3RhYmxlIHtcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODk3ZmI7XG4gICAgICAgICBjb2xvcjogd2hpdGU7IH1cbiAgICAgICBcbiAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItcmVzdWx0c19fZ3JvdXAge1xuICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICBwYWRkaW5nOiA2cHg7IH1cbiAgICAgICBcbiAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWNsYXNzaWMgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUge1xuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCB3aGl0ZSA1MCUsICNlZWVlZWUgMTAwJSk7XG4gICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCB3aGl0ZSA1MCUsICNlZWVlZWUgMTAwJSk7XG4gICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSA1MCUsICNlZWVlZWUgMTAwJSk7XG4gICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjRkZGRkZGRkYnLCBlbmRDb2xvcnN0cj0nI0ZGRUVFRUVFJywgR3JhZGllbnRUeXBlPTApOyB9XG4gICAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWNsYXNzaWMgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGU6Zm9jdXMge1xuICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNTg5N2ZiOyB9XG4gICAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWNsYXNzaWMgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCB7XG4gICAgICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDsgfVxuICAgICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1jbGFzc2ljIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2xlYXIge1xuICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XG4gICAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWNsYXNzaWMgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19wbGFjZWhvbGRlciB7XG4gICAgICAgICAgIGNvbG9yOiAjOTk5OyB9XG4gICAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWNsYXNzaWMgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyB7XG4gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYWFhO1xuICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgICAgIHJpZ2h0OiAxcHg7XG4gICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNlZWVlZWUgNTAlLCAjY2NjY2NjIDEwMCUpO1xuICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZWVlZWVlIDUwJSwgI2NjY2NjYyAxMDAlKTtcbiAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2VlZWVlZSA1MCUsICNjY2NjY2MgMTAwJSk7XG4gICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI0ZGRUVFRUVFJywgZW5kQ29sb3JzdHI9JyNGRkNDQ0NDQycsIEdyYWRpZW50VHlwZT0wKTsgfVxuICAgICAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWNsYXNzaWMgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyBiIHtcbiAgICAgICAgICAgICBib3JkZXItY29sb3I6ICM4ODggdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDVweCA0cHggMCA0cHg7XG4gICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTRweDtcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICB3aWR0aDogMDsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tY2xhc3NpY1tkaXI9XCJydGxcIl0gLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19jbGVhciB7XG4gICAgICAgICBmbG9hdDogbGVmdDsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tY2xhc3NpY1tkaXI9XCJydGxcIl0gLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyB7XG4gICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYWFhO1xuICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgICAgIGxlZnQ6IDFweDtcbiAgICAgICAgIHJpZ2h0OiBhdXRvOyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1jbGFzc2ljLnNlbGVjdDItY29udGFpbmVyLS1vcGVuIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIHtcbiAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1ODk3ZmI7IH1cbiAgICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tY2xhc3NpYy5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbiAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93IHtcbiAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgIGJvcmRlcjogbm9uZTsgfVxuICAgICAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWNsYXNzaWMuc2VsZWN0Mi1jb250YWluZXItLW9wZW4gLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyBiIHtcbiAgICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM4ODggdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDRweCA1cHggNHB4OyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1jbGFzc2ljLnNlbGVjdDItY29udGFpbmVyLS1vcGVuLnNlbGVjdDItY29udGFpbmVyLS1hYm92ZSAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSB7XG4gICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCB3aGl0ZSAwJSwgI2VlZWVlZSA1MCUpO1xuICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgd2hpdGUgMCUsICNlZWVlZWUgNTAlKTtcbiAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlIDAlLCAjZWVlZWVlIDUwJSk7XG4gICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjRkZGRkZGRkYnLCBlbmRDb2xvcnN0cj0nI0ZGRUVFRUVFJywgR3JhZGllbnRUeXBlPTApOyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1jbGFzc2ljLnNlbGVjdDItY29udGFpbmVyLS1vcGVuLnNlbGVjdDItY29udGFpbmVyLS1iZWxvdyAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSB7XG4gICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZWVlZWVlIDUwJSwgd2hpdGUgMTAwJSk7XG4gICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZWVlZWVlIDUwJSwgd2hpdGUgMTAwJSk7XG4gICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZWVlZWVlIDUwJSwgd2hpdGUgMTAwJSk7XG4gICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjRkZFRUVFRUUnLCBlbmRDb2xvcnN0cj0nI0ZGRkZGRkZGJywgR3JhZGllbnRUeXBlPTApOyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1jbGFzc2ljIC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgY3Vyc29yOiB0ZXh0O1xuICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7IH1cbiAgICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tY2xhc3NpYyAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlOmZvY3VzIHtcbiAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU4OTdmYjsgfVxuICAgICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1jbGFzc2ljIC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUgLnNlbGVjdDItc2VsZWN0aW9uX19jbGVhciB7XG4gICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tY2xhc3NpYyAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlIHtcbiAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcbiAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgcGFkZGluZzogMDsgfVxuICAgICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1jbGFzc2ljIC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUgLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2VfX2Rpc3BsYXkge1xuICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7IH1cbiAgICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tY2xhc3NpYyAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmUge1xuICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICBwYWRkaW5nOiAwIDRweDsgfVxuICAgICAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWNsYXNzaWMgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZV9fcmVtb3ZlOmhvdmVyIHtcbiAgICAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1jbGFzc2ljW2Rpcj1cInJ0bFwiXSAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IH1cbiAgICAgICBcbiAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWNsYXNzaWNbZGlyPVwicnRsXCJdIC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUgLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2VfX2Rpc3BsYXkge1xuICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycHg7IH1cbiAgICAgICBcbiAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWNsYXNzaWNbZGlyPVwicnRsXCJdIC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUgLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2VfX3JlbW92ZSB7XG4gICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4OyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1jbGFzc2ljLnNlbGVjdDItY29udGFpbmVyLS1vcGVuIC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xuICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU4OTdmYjsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tY2xhc3NpYy5zZWxlY3QyLWNvbnRhaW5lci0tb3Blbi5zZWxlY3QyLWNvbnRhaW5lci0tYWJvdmUgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSB7XG4gICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwOyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1jbGFzc2ljLnNlbGVjdDItY29udGFpbmVyLS1vcGVuLnNlbGVjdDItY29udGFpbmVyLS1iZWxvdyAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIHtcbiAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7IH1cbiAgICAgICBcbiAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWNsYXNzaWMgLnNlbGVjdDItc2VhcmNoLS1kcm9wZG93biAuc2VsZWN0Mi1zZWFyY2hfX2ZpZWxkIHtcbiAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gICAgICAgICBvdXRsaW5lOiAwOyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1jbGFzc2ljIC5zZWxlY3QyLXNlYXJjaC0taW5saW5lIC5zZWxlY3QyLXNlYXJjaF9fZmllbGQge1xuICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cbiAgICAgICBcbiAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWNsYXNzaWMgLnNlbGVjdDItZHJvcGRvd24ge1xuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tY2xhc3NpYyAuc2VsZWN0Mi1kcm9wZG93bi0tYWJvdmUge1xuICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tY2xhc3NpYyAuc2VsZWN0Mi1kcm9wZG93bi0tYmVsb3cge1xuICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTsgfVxuICAgICAgIFxuICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tY2xhc3NpYyAuc2VsZWN0Mi1yZXN1bHRzID4gLnNlbGVjdDItcmVzdWx0c19fb3B0aW9ucyB7XG4gICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87IH1cbiAgICAgICBcbiAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWNsYXNzaWMgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1ncm91cCB7XG4gICAgICAgICBwYWRkaW5nOiAwOyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1jbGFzc2ljIC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0tZGlzYWJsZWQge1xuICAgICAgICAgY29sb3I6IGdyZXk7IH1cbiAgICAgICBcbiAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWNsYXNzaWMgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1oaWdobGlnaHRlZC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0tc2VsZWN0YWJsZSB7XG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3NWQ3O1xuICAgICAgICAgY29sb3I6IHdoaXRlOyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1jbGFzc2ljIC5zZWxlY3QyLXJlc3VsdHNfX2dyb3VwIHtcbiAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgcGFkZGluZzogNnB4OyB9XG4gICAgICAgXG4gICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1jbGFzc2ljLnNlbGVjdDItY29udGFpbmVyLS1vcGVuIC5zZWxlY3QyLWRyb3Bkb3duIHtcbiAgICAgICAgIGJvcmRlci1jb2xvcjogIzU4OTdmYjsgfVxuICAgICAgIFxuICAgICAgIEBmb250LWZhY2V7Zm9udC1mYW1pbHk6J011c2VvIFNhbnMgQ3lybCA3MDAnO3NyYzp1cmwoXCIuLi9zdGF0aWMvZm9udHMvTXVzZW9TYW5zQ3lybC03MDAud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksdXJsKFwiLi4vc3RhdGljL2ZvbnRzL011c2VvU2Fuc0N5cmwtNzAwLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC1kaXNwbGF5OnN3YXB9QGZvbnQtZmFjZXtmb250LWZhbWlseTonTXVzZW8gU2FucyBDeXJsIDUwMCc7c3JjOnVybChcIi4uL3N0YXRpYy9mb250cy9NdXNlb1NhbnNDeXJsLTUwMC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSx1cmwoXCIuLi9zdGF0aWMvZm9udHMvTXVzZW9TYW5zQ3lybC01MDAud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtmb250LWRpc3BsYXk6c3dhcH1AZm9udC1mYWNle2ZvbnQtZmFtaWx5OidPc3dhbGQnO3NyYzp1cmwoXCIuLi9zdGF0aWMvZm9udHMvT3N3YWxkLU1lZGl1bS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSx1cmwoXCIuLi9zdGF0aWMvZm9udHMvT3N3YWxkLU1lZGl1bS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7Zm9udC13ZWlnaHQ6NTAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtZGlzcGxheTpzd2FwfUBmb250LWZhY2V7Zm9udC1mYW1pbHk6J011c2VvIFNhbnMgQ3lybCA5MDAnO3NyYzp1cmwoXCIuLi9zdGF0aWMvZm9udHMvTXVzZW9TYW5zQ3lybC05MDAud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksdXJsKFwiLi4vc3RhdGljL2ZvbnRzL011c2VvU2Fuc0N5cmwtOTAwLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtmb250LXdlaWdodDpib2xkO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtZGlzcGxheTpzd2FwfXVsLG9se2xpc3Qtc3R5bGUtdHlwZTpub25lO21hcmdpbjowO3BhZGRpbmc6MH1oMSxoMixoMyxoNCxoNSxoNixwe21hcmdpbjowfWF7Y29sb3I6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246bm9uZX1hOmhvdmVye3RleHQtZGVjb3JhdGlvbjpub25lfWE6Zm9jdXN7b3V0bGluZTpub25lfWJvZHl7b3ZlcmZsb3cteDpoaWRkZW47Y29sb3I6IzFDMUIxQjttYXJnaW46MDtmb250LWZhbWlseTonTXVzZW8gU2FucyBDeXJsIDUwMCc7YmFja2dyb3VuZC1jb2xvcjojRjdGNkY0fWJvZHkuZGlzYWJsZS1zY3JvbGx7b3ZlcmZsb3c6aGlkZGVufSp7Ym94LXNpemluZzpib3JkZXItYm94fWgyLC5oMntmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxMjUlO2ZvbnQtZmFtaWx5OidNdXNlbyBTYW5zIEN5cmwgNzAwJztjb2xvcjojMzMzfWg0LC5oNHtmb250LXNpemU6MjhweDtsaW5lLWhlaWdodDoxMjUlO2ZvbnQtZmFtaWx5OidNdXNlbyBTYW5zIEN5cmwgNzAwJ31we2ZvbnQtc2l6ZToxN3B4O2xpbmUtaGVpZ2h0OjE3MCU7Y29sb3I6IzMzM30uYnRue3BhZGRpbmc6MCAxOHB4O2hlaWdodDozNHB4O2xpbmUtaGVpZ2h0OjM0cHg7YmFja2dyb3VuZC1jb2xvcjojRkZBODAwO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtc2l6ZToxMXB4O2NvbG9yOiNmZmY7bGV0dGVyLXNwYWNpbmc6MC4xZW07Zm9udC1mYW1pbHk6J011c2VvIFNhbnMgQ3lybCA3MDAnO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtib3JkZXI6bm9uZTtwb2ludGVyLWV2ZW50czpub25lO2JvcmRlci1yYWRpdXM6MzRweDt0cmFuc2l0aW9uOjAuM3N9LmJ0bjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMzMzM7Y29sb3I6I2ZmZn0uYnRuLS1ibGFja3tiYWNrZ3JvdW5kLWNvbG9yOiMxQzFCMUI7Y29sb3I6I2ZmZmZmZn0uYnRuLS1ibGFjazpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNGRkE4MDB9LmJ0bi0teGx7aGVpZ2h0OjQ2cHg7bGluZS1oZWlnaHQ6NDZweH1AbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KXtwe2ZvbnQtc2l6ZToxNXB4fX1AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXtoMiwuaDJ7Zm9udC1zaXplOjM2cHh9fUBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7cHtmb250LXNpemU6MTRweH1oMiwuaDJ7Zm9udC1zaXplOjI0cHh9fS5zb2NpYWxze2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uc29jaWFsc19faXRlbXttYXJnaW4tcmlnaHQ6MzBweH0uc29jaWFsc19faXRlbTpsYXN0LWNoaWxke21hcmdpbi1yaWdodDowfS5zb2NpYWxzX19pdGVtLWxpbmt7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5zb2NpYWxzX19pdGVtLWxpbmsgc3Zne2ZpbGw6I2ZmZjt0cmFuc2l0aW9uOjAuM3N9LnNvY2lhbHNfX2l0ZW0tbGluazpob3ZlciBzdmd7ZmlsbDojRkZBODAwfS5jb250YWluZXJ7cGFkZGluZzowIDkwcHggMCAzMzBweDt3aWR0aDoxMDAlfS5jb250YWluZXItaW5uZXJ7cGFkZGluZzowIDM1cHg7d2lkdGg6MTAwJX0ubWIteGx7bWFyZ2luLWJvdHRvbToxMjBweH0ubWItbGd7bWFyZ2luLWJvdHRvbToxMDBweH0ubWItbWR7bWFyZ2luLWJvdHRvbTo1MHB4fS53cmFwcGVye292ZXJmbG93OmhpZGRlbn1AbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KXsuY29udGFpbmVye3BhZGRpbmc6MCA3MHB4IDAgMjIwcHh9fUBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpey5tYWlue3BhZGRpbmctdG9wOjYwcHh9LmNvbnRhaW5lcntwYWRkaW5nOjAgMzVweH0uY29udGFpbmVyLWlubmVye3BhZGRpbmc6MH0uY29udGFpbmVyLWlubmVyLS1ib3JkZXJ7Ym90dG9tOi0xMDBweH19QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXsuY29udGFpbmVye3BhZGRpbmc6MCAyMHB4fX0uc2lkZWJhcntwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7d2lkdGg6MzAwcHg7aGVpZ2h0OjEwMHZoO2JhY2tncm91bmQtY29sb3I6IzFDMUIxQjtwYWRkaW5nOjQwcHggMDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2JhY2tncm91bmQtaW1hZ2U6dXJsKC4uL3N0YXRpYy9pbWcvc2lkZWJhci1iZy5qcGcpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7ei1pbmRleDoxMH0uc2lkZWJhcjphZnRlcntjb250ZW50OicnO3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDozMDBweDtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjgsMjcsMjcsMC45Mil9LnNpZGViYXJfX3RvcHtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjF9LnNpZGViYXJfX21pZGRsZXtwYWRkaW5nOjQwcHggMDtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjF9LnNpZGViYXJfX2JvdHtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjF9LnNpZGViYXJfX2xvZ297d2lkdGg6OThweDttYXJnaW46MCBhdXRvO2Rpc3BsYXk6YmxvY2t9LnNpZGViYXJfX2xvZ28gc3Zne2ZpbGw6I2ZmZmZmZjt0cmFuc2l0aW9uOjAuM3N9LnNpZGViYXJfX2xvZ286aG92ZXIgc3Zne2ZpbGw6I0ZGQTgwMH0uc2lkZWJhcl9fcGFnZS1uYXZ7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO21heC13aWR0aDoxNzVweDttYXJnaW46MCBhdXRvIDI1cHh9LnNpZGViYXJfX3BhZ2UtbmF2LWl0ZW17bWFyZ2luOjAgMTVweCAxNXB4O3Bvc2l0aW9uOnJlbGF0aXZlfS5zaWRlYmFyX19wYWdlLW5hdi1saW5re2NvbG9yOiNDOEM4Qzg7dHJhbnNpdGlvbjowLjNzfS5zaWRlYmFyX19wYWdlLW5hdi1saW5rOmhvdmVye2NvbG9yOiNGRkE4MDB9LnNpZGViYXJfX25hdi1pdGVte21hcmdpbi1ib3R0b206NXZoO3Bvc2l0aW9uOnJlbGF0aXZlfS5zaWRlYmFyX19uYXYtaXRlbTpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206MH0uc2lkZWJhcl9fbmF2LWl0ZW06aG92ZXIgLnNpZGViYXJfX21lbnV7bGVmdDozMDBweDtvcGFjaXR5OjF9LnNpZGViYXJfX25hdi1saW5re2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7cG9zaXRpb246cmVsYXRpdmV9LnNpZGViYXJfX25hdi1saW5rOmhvdmVyIC5zaWRlYmFyX19uYXYtbGluay1pY29uIHN2Z3tmaWxsOiNGRkE4MDB9LnNpZGViYXJfX25hdi1saW5rOmhvdmVyIC5zaWRlYmFyX19uYXYtbGluay10aXRsZXtjb2xvcjojRkZBODAwfS5zaWRlYmFyX19uYXYtbGluazpob3ZlciAuc2lkZWJhcl9fbmF2LWxpbmstYXJye3JpZ2h0OjQwcHg7b3BhY2l0eToxfS5zaWRlYmFyX19uYXYtbGluay1pY29ue21hcmdpbi1ib3R0b206MTVweH0uc2lkZWJhcl9fbmF2LWxpbmstaWNvbiBzdmd7ZmlsbDojZmZmZmZmO3RyYW5zaXRpb246MC4zc30uc2lkZWJhcl9fbmF2LWxpbmstdGl0bGV7Zm9udC1zaXplOjEzcHg7bGluZS1oZWlnaHQ6MTZweDtjb2xvcjojZmZmO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzowLjJlbTt0cmFuc2l0aW9uOjAuM3N9LnNpZGViYXJfX25hdi1saW5rLXRpdGxlOmhvdmVye2NvbG9yOiNGRkE4MDB9LnNpZGViYXJfX25hdi1saW5rLWFycntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zaXRpb246MC4zcztvcGFjaXR5OjA7cmlnaHQ6MzBweH0uc2lkZWJhcl9fbmF2LWxpbmstYXJyIHN2Z3tzdHJva2U6I0ZGQTgwMDt0cmFuc2l0aW9uOjAuM3N9LnNpZGViYXJfX25hdi1zdWJtZW51e3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7bGVmdDoxMDAlO3dpZHRoOjk4MHB4fS5zaWRlYmFyX19tZW51e3Bvc2l0aW9uOmFic29sdXRlO3RvcDotNTVweDtsZWZ0OjI3MHB4O2JhY2tncm91bmQ6IzFDMUIxQjt3aWR0aDoxMDAlO3dpZHRoOjk4MHB4O2Rpc3BsYXk6ZmxleDtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2l0aW9uOjAuM3M7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59LnNpZGViYXJfX21lbnUtbGlzdHttYXJnaW4tYm90dG9tOi0zMHB4O2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtwYWRkaW5nOjkwcHggMTBweCA5MHB4IDc1cHg7ZmxleC1ncm93OjF9LnNpZGViYXJfX21lbnUtaXRlbXttYXJnaW4tYm90dG9tOjMwcHg7d2lkdGg6Y2FsYygxMDAlIC8gMyl9LnNpZGViYXJfX21lbnUtbGlua3tmb250LXNpemU6MThweDtsaW5lLWhlaWdodDoyMnB4O2NvbG9yOiNmZmY7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7dHJhbnNpdGlvbjowLjNzfS5zaWRlYmFyX19tZW51LWxpbms6YWZ0ZXJ7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206LTJweDtsZWZ0OjA7d2lkdGg6MDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjRkZBODAwO3RyYW5zaXRpb246MC4zc30uc2lkZWJhcl9fbWVudS1saW5rOmhvdmVye2NvbG9yOiNGRkE4MDB9LnNpZGViYXJfX21lbnUtbGluazpob3ZlcjphZnRlcnt3aWR0aDoxMDAlfS5zaWRlYmFyX19tZW51LWltZ3t3aWR0aDozMTBweDtmbGV4LXNocmluazowfS5zaWRlYmFyX19tZW51LWltZyBpbWd7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO29iamVjdC1maXQ6Y292ZXJ9I3NpZGViYXItbWVudS0xe2hlaWdodDpjYWxjKCg3MXB4ICogNCkgKyAxNXZoKTt0b3A6Y2FsYyg1MCUgLSA5MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX1AbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KXsuc2lkZWJhcnt3aWR0aDoyMTBweH0uc2lkZWJhcjphZnRlcnt3aWR0aDoyMTBweH0uc2lkZWJhcl9fbWVudXtsZWZ0OjIxMHB4fX1AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXsuc2lkZWJhcntkaXNwbGF5Om5vbmV9fS5iYXJ7cG9zaXRpb246Zml4ZWQ7dG9wOjA7cmlnaHQ6MDt3aWR0aDo2MHB4O3BhZGRpbmc6NDBweCAwO2hlaWdodDoxMDAlO2JhY2tncm91bmQtY29sb3I6cmdiYSgyOCwyNywyNywwLjg4KTtiYWNrZ3JvdW5kLWltYWdlOnVybCguLi9zdGF0aWMvaW1nL2Jhci1iZy5qcGcpO2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7ei1pbmRleDoxMH0uYmFyX19saXN0e3BhZGRpbmctYm90dG9tOjIwcHg7bWFyZ2luLWJvdHRvbToyMHB4O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlfS5iYXJfX2xpc3Q6YWZ0ZXJ7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt3aWR0aDoyNHB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICM0NDQ0NDR9LmJhcl9fbGlzdC1pdGVte21hcmdpbi1ib3R0b206MjBweH0uYmFyX19saXN0LWl0ZW06bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjB9LmJhcl9fbGlzdC1pdGVtLWxpbmt7d2lkdGg6NDBweDtoZWlnaHQ6NDBweDtib3JkZXItcmFkaXVzOjUwJTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YmFja2dyb3VuZDojMzgzODM4O2JveC1zaGFkb3c6MHB4IDVweCAxMnB4IHJnYmEoMCwwLDAsMC4wNCk7dHJhbnNpdGlvbjowLjNzO3Bvc2l0aW9uOnJlbGF0aXZlfS5iYXJfX2xpc3QtaXRlbS1saW5rIHN2Z3tmaWxsOiNDOUM5Qzk7dHJhbnNpdGlvbjowLjNzfS5iYXJfX2xpc3QtaXRlbS1saW5rOmhvdmVye2JhY2tncm91bmQ6I0ZGQTgwMH0uYmFyX19saXN0LWl0ZW0tbGluazpob3ZlciBzdmd7ZmlsbDojMzMzfS5iYXJfX2xpc3QtaXRlbS1saW5rOmhvdmVyIC5iYXJfX3Rvb2x0aXB7b3BhY2l0eToxfS5iYXJfX3Rvb2x0aXB7YmFja2dyb3VuZDojMUMxQjFCO2JveC1zaGFkb3c6MHB4IDRweCAxOHB4IHJnYmEoMCwwLDAsMC4xOCk7Ym9yZGVyLXJhZGl1czoycHg7cGFkZGluZzoxNXB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7cmlnaHQ6Y2FsYygxMDAlICsgMjBweCk7d2lkdGg6MjEwcHg7b3BhY2l0eTowO3RyYW5zaXRpb246MC4zcztwb2ludGVyLWV2ZW50czpub25lfS5iYXJfX3Rvb2x0aXA6YWZ0ZXJ7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3JpZ2h0Oi02cHg7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXItdG9wOjEwcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbToxMHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1sZWZ0OjhweCBzb2xpZCAjMUMxQjFCfS5iYXJfX3Rvb2x0aXAtdGl0bGV7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxNXB4O2xpbmUtaGVpZ2h0OjEzMCU7Y29sb3I6I2ZmZn0uYmFyX190b29sdGlwLXRleHR7Zm9udC1zaXplOjEzcHg7bGluZS1oZWlnaHQ6MTMwJTtjb2xvcjojQzFDMUMxO21hcmdpbi10b3A6M3B4fUBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpey5iYXJ7ZGlzcGxheTpub25lfX0ubGFuZ3NfX2l0ZW17bWFyZ2luLWJvdHRvbToyMHB4fS5sYW5nc19faXRlbTpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206MH0ubGFuZ3NfX2l0ZW0uY3VycmVudHtwb2ludGVyLWV2ZW50czpub25lfS5sYW5nc19faXRlbS5jdXJyZW50IC5sYW5nc19faXRlbS1saW5re2NvbG9yOiNmZmZ9LmxhbmdzX19pdGVtLWxpbmt7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MTdweDtjb2xvcjojQzhDOEM4O3RyYW5zaXRpb246MC4zcztkaXNwbGF5OmJsb2NrO3RleHQtYWxpZ246Y2VudGVyfS5sYW5nc19faXRlbS1saW5rOmhvdmVye2NvbG9yOiNGRkE4MDB9LnVwLWJ0bntjdXJzb3I6cG9pbnRlcjtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206NDBweDtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX0udXAtYnRuX19pY29ue3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHg7Ym9yZGVyLXJhZGl1czo1MCU7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQ6IzM4MzgzODtib3gtc2hhZG93OjBweCA1cHggMTJweCByZ2JhKDAsMCwwLDAuMDQpO3RyYW5zaXRpb246MC4zczttYXJnaW46MCBhdXRvIDEwcHh9LnVwLWJ0bl9faWNvbiBzdmd7ZmlsbDojQzlDOUM5O3RyYW5zaXRpb246MC4zc30udXAtYnRuX190ZXh0e2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjE0cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOjAuMWVtO2NvbG9yOiM3ODc4Nzg7dHJhbnNpdGlvbjowLjNzfS51cC1idG46aG92ZXIgLnVwLWJ0bl9faWNvbntiYWNrZ3JvdW5kLWNvbG9yOiNGRkE4MDB9LnVwLWJ0bjpob3ZlciAudXAtYnRuX19pY29uIHN2Z3tmaWxsOiMzMzMzMzN9LnVwLWJ0bjpob3ZlciAudXAtYnRuX190ZXh0e2NvbG9yOiNmZmZ9LmhlYWRlcntwYWRkaW5nOjEwcHggMDtiYWNrZ3JvdW5kLWNvbG9yOiMxQzFCMUI7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7ei1pbmRleDoxMDtoZWlnaHQ6NjBweDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfS5oZWFkZXJfX2lubmVye3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn0uaGVhZGVyX19sb2dve3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKX0uaGVhZGVyX19jb250cm9sc3tkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfS5oZWFkZXJfX2NvbnRyb2xzLWl0ZW17bWFyZ2luLXJpZ2h0OjI1cHh9LmhlYWRlcl9fY29udHJvbHMtaXRlbTpsYXN0LWNoaWxke21hcmdpbi1yaWdodDowfS5oZWFkZXJfX2NvbnRyb2xzLWl0ZW0tbGlua3tkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDtmbGV4LXNocmluazowO3Bvc2l0aW9uOnJlbGF0aXZlfS5oZWFkZXJfX2NvbnRyb2xzLWl0ZW0tbGluayBzdmd7ZmlsbDojQzhDOEM4O3RyYW5zaXRpb246MC4zc30uaGVhZGVyX19jb250cm9scy1pdGVtLWxpbms6aG92ZXIgc3Zne2ZpbGw6I2ZmZmZmZn0uaGVhZGVyX19jb250cm9scy1pdGVtLWFtb3VudHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTEwcHg7cmlnaHQ6LTEwcHg7d2lkdGg6MThweDtoZWlnaHQ6MThweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kLWNvbG9yOiNGRkE4MDA7Zm9udC1zaXplOjEycHg7Y29sb3I6IzMzMzMzMztkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9QG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCl7LmhlYWRlcntkaXNwbGF5Om5vbmV9fUBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7LmhlYWRlcl9fY29udHJvbHMtaXRlbTpudGgtY2hpbGQoMSl7ZGlzcGxheTpub25lfX0uc2VjdGlvbntwYWRkaW5nOjEwMHB4IDAgMTIwcHh9LnNlY3Rpb25fX2hlYWRlcnttYXJnaW4tYm90dG9tOjcwcHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn0uc2VjdGlvbi1ncmV5e2JhY2tncm91bmQtY29sb3I6I0Y3RjZGNH0uc2VjdGlvbi13aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnNlY3Rpb24tLWJvcmRlcntwb3NpdGlvbjpyZWxhdGl2ZX0uc2VjdGlvbi0tYm9yZGVyOmFmdGVye2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjBweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjRTFEQ0Q1O3dpZHRoOmNhbGMoMTAwJSAtIDMzMHB4IC0gNzBweCAtIDkwcHgpO2xlZnQ6MzY1cHh9QG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCl7LnNlY3Rpb24tLWJvcmRlcjphZnRlcnt3aWR0aDpjYWxjKDEwMCUgLSAyMjBweCAtIDcwcHggLSA3MHB4KTtsZWZ0OjI1NXB4fX1AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXsuc2VjdGlvbntwYWRkaW5nOjgwcHggMCAxMDBweH0uc2VjdGlvbl9faGVhZGVye21hcmdpbi1ib3R0b206NDBweH0uc2VjdGlvbi0tYm9yZGVyOmFmdGVye3dpZHRoOmNhbGMoMTAwJSAtIDcwcHgpO2xlZnQ6MzVweH19QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXsuc2VjdGlvbntwYWRkaW5nOjQwcHggMH19LnNlY3Rpb24tdGV4dCBoMnttYXJnaW4tYm90dG9tOjMwcHh9LnNlY3Rpb24tdGV4dCBwe21hcmdpbi1ib3R0b206MzBweH0uc2VjdGlvbi10ZXh0IHA6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjB9QG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCl7LnNlY3Rpb24tdGV4dCBwe21hcmdpbi1ib3R0b206MjBweH19QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXsuc2VjdGlvbi10ZXh0IGgye2ZvbnQtc2l6ZToyOHB4O21hcmdpbi1ib3R0b206MTVweH0uc2VjdGlvbi10ZXh0IHB7bWFyZ2luLWJvdHRvbToxMHB4fX0uZm9vdGVye3BhZGRpbmc6ODBweCAwO2JhY2tncm91bmQtY29sb3I6I2ZmZn0uZm9vdGVyX19pbm5lcntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59LmZvb3Rlcl9fbG9nbyBzdmd7ZmlsbDojRkZBODAwO3RyYW5zaXRpb246MC4zc30uZm9vdGVyX19sb2dvOmhvdmVyIHN2Z3tmaWxsOiMzMzN9LmZvb3Rlcl9fbmF2LWJsb2Nre2Rpc3BsYXk6ZmxleH0uZm9vdGVyX19uYXZ7bWFyZ2luLXJpZ2h0OjgwcHh9LmZvb3Rlcl9fbmF2Omxhc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjB9LmZvb3Rlcl9fbmF2LWl0ZW17bWFyZ2luLWJvdHRvbToyMHB4fS5mb290ZXJfX25hdi1pdGVtOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTowfS5mb290ZXJfX25hdi1saW5re2ZvbnQtc2l6ZToxNXB4O2xpbmUtaGVpZ2h0OjE4cHg7dHJhbnNpdGlvbjowLjNzO2NvbG9yOiM1NTU1NTU7Zm9udC1mYW1pbHk6J011c2VvIFNhbnMgQ3lybCA3MDAnfS5mb290ZXJfX25hdi1saW5rOmhvdmVye2NvbG9yOiNGRkE4MDB9LmZvb3Rlcl9fYmxvY2t7bWF4LXdpZHRoOjE2NXB4fS5mb290ZXJfX3NvY2lhbHN7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW4tYm90dG9tOjQwcHh9LmZvb3Rlcl9fc29jaWFscy1pdGVte21hcmdpbi1yaWdodDozMHB4fS5mb290ZXJfX3NvY2lhbHMtaXRlbTpsYXN0LWNoaWxke21hcmdpbi1yaWdodDowfS5mb290ZXJfX3NvY2lhbHMtaXRlbS1saW5rIHN2Z3tmaWxsOiM1NTU1NTU7dHJhbnNpdGlvbjowLjNzfS5mb290ZXJfX3NvY2lhbHMtaXRlbS1saW5rOmhvdmVyIHN2Z3tmaWxsOiNGRkE4MDB9LmZvb3Rlcl9fbGlua3tmb250LXNpemU6MTVweDtsaW5lLWhlaWdodDoxMzAlO2NvbG9yOiNBQUFBQUE7dHJhbnNpdGlvbjowLjNzfS5mb290ZXJfX2xpbms6aG92ZXJ7Y29sb3I6IzMzM30uZm9vdGVyX19jb250YWN0c3ttYXgtd2lkdGg6MjE1cHh9LmZvb3Rlcl9fY29udGFjdHMtbGlua3tkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2NvbG9yOiM1NTU1NTU7dHJhbnNpdGlvbjowLjNzO2ZvbnQtZmFtaWx5OidNdXNlbyBTYW5zIEN5cmwgOTAwJzttYXJnaW4tYm90dG9tOjEwcHg7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6MTlweH0uZm9vdGVyX19jb250YWN0cy1saW5rIHN2Z3tmaWxsOiM1NTU1NTU7dHJhbnNpdGlvbjowLjNzO21hcmdpbi1yaWdodDoxMHB4O2ZsZXgtc2hyaW5rOjB9LmZvb3Rlcl9fY29udGFjdHMtbGluazpob3Zlcntjb2xvcjojRkZBODAwfS5mb290ZXJfX2NvbnRhY3RzLWxpbms6aG92ZXIgc3Zne2ZpbGw6I0ZGQTgwMH0uZm9vdGVyX19jb250YWN0cy10ZXh0e2ZvbnQtc2l6ZToxM3B4O2xpbmUtaGVpZ2h0OjEzMCU7Y29sb3I6I0FBQUFBQTtwYWRkaW5nLWxlZnQ6MjNweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjRTFEQ0Q1O3BhZGRpbmctYm90dG9tOjE1cHg7bWFyZ2luLWJvdHRvbToxNXB4fUBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpey5mb290ZXJfX25hdnttYXJnaW4tcmlnaHQ6MzBweH19QG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCl7LmZvb3Rlcl9faW5uZXJ7ZmxleC13cmFwOndyYXB9LmZvb3Rlcl9fYmxvY2t7bWFyZ2luLXRvcDozMHB4O21pbi13aWR0aDoxMDAlO3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn0uZm9vdGVyX19zb2NpYWxze21hcmdpbi1ib3R0b206MH19QG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7LmZvb3Rlcl9fYmxvY2t7bWFyZ2luLXRvcDo2MHB4fX1AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpey5mb290ZXJ7cGFkZGluZzo0MHB4IDB9LmZvb3Rlcl9fbG9nb3ttYXJnaW46MCBhdXRvIDQwcHh9LmZvb3Rlcl9fbmF2LWJsb2Nre3dpZHRoOjEwMCU7bWFyZ2luLWJvdHRvbTo0MHB4fS5mb290ZXJfX2NvbnRhY3Rze21hcmdpbjowIGF1dG8gNDBweH0uZm9vdGVyX19ibG9ja3ttYXJnaW4tdG9wOjA7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5mb290ZXJfX3NvY2lhbHN7bWFyZ2luLWJvdHRvbTo0MHB4fS5mb290ZXJfX25hdnttYXJnaW4tcmlnaHQ6MDt3aWR0aDo1MCV9fS5vdmVybGF5e2JhY2tncm91bmQtY29sb3I6cmdiYSgyOCwyNywyNywwLjcpO3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3RyYW5zaXRpb246MC4zcztwb2ludGVyLWV2ZW50czpub25lO29wYWNpdHk6MDt6LWluZGV4Ojl9Lm92ZXJsYXkuYWN0aXZle29wYWNpdHk6MTtwb2ludGVyLWV2ZW50czphbGx9Lm1lbnV7d2lkdGg6MzQwcHg7YmFja2dyb3VuZC1jb2xvcjojMUMxQjFCO3BhZGRpbmc6MTVweCAzNXB4O2hlaWdodDpjYWxjKDEwMCUgLSA2MHB4KTtwb3NpdGlvbjpmaXhlZDt0b3A6NjBweDtsZWZ0Oi0xMDAlO3otaW5kZXg6MTA7b3ZlcmZsb3cteTphdXRvO3RyYW5zaXRpb246MC4zcztvcGFjaXR5OjB9Lm1lbnUuYWN0aXZle2xlZnQ6MDtvcGFjaXR5OjF9Lm1lbnVfX2xhbmdze2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZy1ib3R0b206MTVweDttYXJnaW4tYm90dG9tOjIwcHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzM4MzgzOH0ubWVudV9fbGFuZ3MtaXRlbXttYXJnaW4tcmlnaHQ6MzBweH0ubWVudV9fbGFuZ3MtaXRlbTpsYXN0LWNoaWxke21hcmdpbi1yaWdodDowfS5tZW51X19sYW5ncy1pdGVtLmFjdGl2ZSAubWVudV9fbGFuZ3MtbGlua3twb2ludGVyLWV2ZW50czpub25lO2NvbG9yOiNDOEM4Qzh9Lm1lbnVfX2xhbmdzLWxpbmt7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MTdweDtjb2xvcjojNjY2NjY2O3RyYW5zaXRpb246MC4zc30ubWVudV9fbGFuZ3MtbGluazpob3Zlcntjb2xvcjojQzhDOEM4fS5tZW51X19uYXZ7cGFkZGluZy1ib3R0b206MjVweDttYXJnaW4tYm90dG9tOjI1cHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzM4MzgzOH0ubWVudV9fbmF2LWl0ZW17bWFyZ2luLWJvdHRvbToyNXB4fS5tZW51X19uYXYtaXRlbTpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206MH0ubWVudV9fbmF2LWl0ZW0uYWN0aXZlIC5tZW51X19uYXYtbGluay1pY29uIHN2Z3tmaWxsOiNGRkE4MDB9Lm1lbnVfX25hdi1pdGVtLmFjdGl2ZSAubWVudV9fbmF2LWxpbmstdGV4dHtjb2xvcjojRkZBODAwfS5tZW51X19uYXYtaXRlbS5hY3RpdmUgLm1lbnVfX25hdi1saW5rLWFycntzdHJva2U6I0ZGQTgwMH0ubWVudV9fbmF2LWl0ZW0uYWN0aXZlIC5tZW51X19uYXYtc3VibWVudXtkaXNwbGF5OmZsZXh9Lm1lbnVfX25hdi1pdGVtLmFjdGl2ZSAubWVudV9fbmF2LXN1Ym1lbnUtaXRlbXt0cmFuc2Zvcm06dHJhbnNsYXRlKDApO3RyYW5zaXRpb24tZGVsYXk6MC4zcztvcGFjaXR5OjF9Lm1lbnVfX25hdi1saW5re2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Lm1lbnVfX25hdi1saW5rOmhvdmVyIC5tZW51X19uYXYtbGluay1pY29uIHN2Z3tmaWxsOiNGRkE4MDB9Lm1lbnVfX25hdi1saW5rOmhvdmVyIC5tZW51X19uYXYtbGluay10ZXh0e2NvbG9yOiNGRkE4MDB9Lm1lbnVfX25hdi1saW5rOmhvdmVyIC5tZW51X19uYXYtbGluay1hcnJ7c3Ryb2tlOiNGRkE4MDB9Lm1lbnVfX25hdi1saW5rLWljb257d2lkdGg6MzhweDttYXJnaW4tcmlnaHQ6MTVweH0ubWVudV9fbmF2LWxpbmstaWNvbiBzdmd7ZmlsbDojZmZmO3RyYW5zaXRpb246MC4zc30ubWVudV9fbmF2LWxpbmstdGV4dHtmb250LXNpemU6MTNweDtsaW5lLWhlaWdodDoxNnB4O2NvbG9yOiNmZmY7bGV0dGVyLXNwYWNpbmc6MC4yZW07dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3RyYW5zaXRpb246MC4zczt0ZXh0LWFsaWduOmxlZnR9Lm1lbnVfX25hdi1saW5rLWFycntzdHJva2U6Izk5OTk5OTt0cmFuc2l0aW9uOjAuM3M7ZmxleC1ncm93OjE7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ubWVudV9fbmF2LXN1Ym1lbnV7ZmxleC13cmFwOndyYXA7ZGlzcGxheTpub25lO3RyYW5zaXRpb246MC4zczttYXJnaW46MjBweCAwIC01cHh9Lm1lbnVfX25hdi1zdWJtZW51LWl0ZW17d2lkdGg6NTAlO21hcmdpbi1ib3R0b206MjBweDtvcGFjaXR5OjA7dHJhbnNpdGlvbjowLjNzfS5tZW51X19uYXYtc3VibWVudS1saW5re2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjE3cHg7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aGl0ZS1zcGFjZTpub3dyYXB9Lm1lbnVfX25hdi1zdWJtZW51LWxpbms6YWZ0ZXJ7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjA7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI0ZGQTgwMDt0cmFuc2l0aW9uOjAuM3M7d2lkdGg6MH0ubWVudV9fbmF2LXN1Ym1lbnUtbGluazpob3Zlcntjb2xvcjojRkZBODAwfS5tZW51X19uYXYtc3VibWVudS1saW5rOmhvdmVyOmFmdGVye3dpZHRoOjEwMCV9Lm1lbnVfX3BhZ2UtbmF2e21hcmdpbi1ib3R0b206NDBweH0ubWVudV9fcGFnZS1uYXYtaXRlbXttYXJnaW4tYm90dG9tOjI1cHh9Lm1lbnVfX3BhZ2UtbmF2LWxpbmt7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6MTlweDtjb2xvcjojQzhDOEM4O3RyYW5zaXRpb246MC4zc30ubWVudV9fcGFnZS1uYXYtbGluazpob3Zlcntjb2xvcjojZmZmfS5tZW51X19jb250cm9sc3twYWRkaW5nLWJvdHRvbToyNXB4O21hcmdpbi1ib3R0b206MjVweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMzgzODM4fS5tZW51X19jb250cm9scy1pdGVte21hcmdpbi1ib3R0b206MjVweH0ubWVudV9fY29udHJvbHMtaXRlbTpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206MH0ubWVudV9fY29udHJvbHMtbGlua3tkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5tZW51X19jb250cm9scy1saW5rOmhvdmVyIC5tZW51X19jb250cm9scy1saW5rLWljb24gc3Zne2ZpbGw6I0ZGQTgwMH0ubWVudV9fY29udHJvbHMtbGluazpob3ZlciAubWVudV9fY29udHJvbHMtbGluay10ZXh0e2NvbG9yOiNGRkE4MDB9Lm1lbnVfX2NvbnRyb2xzLWxpbmstaWNvbnt3aWR0aDozOHB4O21hcmdpbi1yaWdodDoxNXB4fS5tZW51X19jb250cm9scy1saW5rLWljb24gc3Zne2ZpbGw6I2ZmZjt0cmFuc2l0aW9uOjAuM3N9Lm1lbnVfX2NvbnRyb2xzLWxpbmstdGV4dHtmb250LXNpemU6MTNweDtsaW5lLWhlaWdodDoxNnB4O2NvbG9yOiNmZmY7bGV0dGVyLXNwYWNpbmc6MC4yZW07dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3RyYW5zaXRpb246MC4zczt0ZXh0LWFsaWduOmxlZnQ7bWFyZ2luLXJpZ2h0OmF1dG99Lm1lbnUgLnNvY2lhbHN7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LnBhZ2UtaGVhZGVye21hcmdpbi1ib3R0b206LTQwcHg7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxfS5wYWdlLWhlYWRlcl9fdG9we3BhZGRpbmc6MzBweCAwO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNFMURDRDV9LnBhZ2UtaGVhZGVyIC5icmVhZGNydW1ic3ttYXJnaW4tdG9wOjIwcHh9LnBhZ2UtaGVhZGVyLS13aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnBhZ2UtaGVhZGVyLS1maWx0ZXIgLnBhZ2UtaGVhZGVyX190b3B7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn1AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXsucGFnZS1oZWFkZXItLWZpbHRlciAucGFnZS1oZWFkZXJfX3RvcHtwYWRkaW5nLXRvcDoxMHB4fX1AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpey5wYWdlLWhlYWRlcnttYXJnaW4tYm90dG9tOjBweH0ucGFnZS1oZWFkZXJfX3RvcHtwYWRkaW5nLWJvdHRvbToxMHB4O3BhZGRpbmctdG9wOjIwcHh9LnBhZ2UtaGVhZGVyIC5icmVhZGNydW1ic3ttYXJnaW4tdG9wOjEwcHh9fS5icmVhZGNydW1ic3tkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2ZsZXgtd3JhcDp3cmFwfS5icmVhZGNydW1ic19faXRlbXtwb3NpdGlvbjpyZWxhdGl2ZX0uYnJlYWRjcnVtYnNfX2l0ZW06YWZ0ZXJ7Y29udGVudDonLyc7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MTdweDtjb2xvcjojOTk5OTk5O21hcmdpbjowIDAuNXJlbX0uYnJlYWRjcnVtYnNfX2l0ZW06bGFzdC1jaGlsZHtwb2ludGVyLWV2ZW50czpub25lfS5icmVhZGNydW1ic19faXRlbTpsYXN0LWNoaWxkOmFmdGVye2Rpc3BsYXk6bm9uZX0uYnJlYWRjcnVtYnNfX2l0ZW0tbGlua3tmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoxN3B4O2NvbG9yOiM5OTk5OTk7dHJhbnNpdGlvbjowLjNzfS5icmVhZGNydW1ic19faXRlbS1saW5rOmhvdmVye2NvbG9yOiMxQzFCMUJ9LmJhbm5lcnMtc2VjdGlvbnttYXJnaW4tYm90dG9tOjUwcHg7cGFkZGluZy10b3A6MzBweH0uYmFubmVycy1zZWN0aW9uX19yb3d7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO21hcmdpbjowIC03LjVweCAtMTVweH0uYmFubmVycy1zZWN0aW9uX19jb2x7cGFkZGluZzowIDcuNXB4O3dpZHRoOjEwMCV9LmJhbm5lcnMtc2VjdGlvbl9fY29sOm50aC1jaGlsZCgyKSwuYmFubmVycy1zZWN0aW9uX19jb2w6bnRoLWNoaWxkKDMpLC5iYW5uZXJzLXNlY3Rpb25fX2NvbDpudGgtY2hpbGQoNCl7d2lkdGg6MzMuMzMzMyV9LmJhbm5lcnMtc2VjdGlvbl9faXRlbXt3aWR0aDoxMDAlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoyODBweDttYXJnaW4tYm90dG9tOjE1cHg7cGFkZGluZzowIDM1cHg7b3ZlcmZsb3c6aGlkZGVufS5iYW5uZXJzLXNlY3Rpb25fX2l0ZW06YWZ0ZXJ7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC41KX0uYmFubmVycy1zZWN0aW9uX19pdGVtOmhvdmVyIC5iYW5uZXJzLXNlY3Rpb25fX2l0ZW0tdGV4dHtjb2xvcjojRkZBODAwfS5iYW5uZXJzLXNlY3Rpb25fX2l0ZW0tLW1haW57aGVpZ2h0OjQ0MHB4fS5iYW5uZXJzLXNlY3Rpb25fX2l0ZW0tLW1haW4gLmJhbm5lcnMtc2VjdGlvbl9faXRlbS10aXRsZXtmb250LXNpemU6NTZweDtsaW5lLWhlaWdodDoxMjAlfS5iYW5uZXJzLXNlY3Rpb25fX2l0ZW0taWNvbntkaXNwbGF5Om5vbmV9LmJhbm5lcnMtc2VjdGlvbl9faXRlbS10aXRsZXtjb2xvcjojZmZmO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTtmb250LXNpemU6NDJweDtsaW5lLWhlaWdodDoxMjAlO21hcmdpbi1ib3R0b206NXB4O2ZvbnQtZmFtaWx5OidNdXNlbyBTYW5zIEN5cmwgNzAwJ30uYmFubmVycy1zZWN0aW9uX19pdGVtLXRleHR7Zm9udC1zaXplOjE1cHg7bGluZS1oZWlnaHQ6MTMwJTtjb2xvcjojQUFBQUFBO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTt0cmFuc2l0aW9uOjAuM3N9QG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCl7LmJhbm5lcnMtc2VjdGlvbntwYWRkaW5nLXRvcDoxMHB4fS5iYW5uZXJzLXNlY3Rpb25fX3Jvd3ttYXJnaW46MCAtNXB4IC0xMHB4fS5iYW5uZXJzLXNlY3Rpb25fX2NvbHtwYWRkaW5nOjAgNXB4fS5iYW5uZXJzLXNlY3Rpb25fX2l0ZW17aGVpZ2h0OjIwMHB4O21hcmdpbi1ib3R0b206MTBweH0uYmFubmVycy1zZWN0aW9uX19pdGVtLS1tYWlue2hlaWdodDozMDBweH0uYmFubmVycy1zZWN0aW9uX19pdGVtLS1tYWluIC5iYW5uZXJzLXNlY3Rpb25fX2l0ZW0tdGl0bGV7Zm9udC1zaXplOjQ4cHg7bGluZS1oZWlnaHQ6MTIwJX0uYmFubmVycy1zZWN0aW9uX19pdGVtLXRpdGxle2ZvbnQtc2l6ZTozNHB4O2xpbmUtaGVpZ2h0OjEyMCV9fUBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpey5iYW5uZXJzLXNlY3Rpb257cGFkZGluZy10b3A6MzBweH0uYmFubmVycy1zZWN0aW9uX19jb2x7d2lkdGg6NTAlfS5iYW5uZXJzLXNlY3Rpb25fX2NvbDpudGgtY2hpbGQoMiksLmJhbm5lcnMtc2VjdGlvbl9fY29sOm50aC1jaGlsZCgzKSwuYmFubmVycy1zZWN0aW9uX19jb2w6bnRoLWNoaWxkKDQpe3dpZHRoOjUwJX0uYmFubmVycy1zZWN0aW9uX19pdGVte2hlaWdodDoyNTBweDtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5iYW5uZXJzLXNlY3Rpb25fX2l0ZW0tLW1haW57aGVpZ2h0OjI1MHB4fS5iYW5uZXJzLXNlY3Rpb25fX2l0ZW0tLW1haW4gLmJhbm5lcnMtc2VjdGlvbl9faXRlbS10aXRsZXtmb250LXNpemU6MzZweH0uYmFubmVycy1zZWN0aW9uX19pdGVtLXRpdGxle2ZvbnQtc2l6ZTozNnB4fS5iYW5uZXJzLXNlY3Rpb25fX2l0ZW0taWNvbntkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTttYXJnaW4tcmlnaHQ6MTVweH0uYmFubmVycy1zZWN0aW9uX19pdGVtLWljb24gc3Zne2ZpbGw6I0ZGQTgwMH19QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXsuYmFubmVycy1zZWN0aW9ue21hcmdpbi1ib3R0b206NDBweDtwYWRkaW5nLXRvcDoyMHB4fS5iYW5uZXJzLXNlY3Rpb25fX3Jvd3ttYXJnaW4tYm90dG9tOi0xMHB4fS5iYW5uZXJzLXNlY3Rpb25fX2NvbHt3aWR0aDoxMDAlfS5iYW5uZXJzLXNlY3Rpb25fX2NvbDpudGgtY2hpbGQoMiksLmJhbm5lcnMtc2VjdGlvbl9fY29sOm50aC1jaGlsZCgzKSwuYmFubmVycy1zZWN0aW9uX19jb2w6bnRoLWNoaWxkKDQpe3dpZHRoOjEwMCV9LmJhbm5lcnMtc2VjdGlvbl9faXRlbXtiYWNrZ3JvdW5kLWltYWdlOmluaGVyaXQgIWltcG9ydGFudDtwYWRkaW5nOjIwcHg7Ym9yZGVyOjJweCBzb2xpZCAjRTFEQ0Q1O2hlaWdodDphdXRvO21hcmdpbi1ib3R0b206MTBweH0uYmFubmVycy1zZWN0aW9uX19pdGVtOmFmdGVye2Rpc3BsYXk6bm9uZX0uYmFubmVycy1zZWN0aW9uX19pdGVtOmhvdmVye2JvcmRlcjoxcHggc29saWQgI0ZGQTgwMH0uYmFubmVycy1zZWN0aW9uX19pdGVtLS1tYWlue2hlaWdodDphdXRvfS5iYW5uZXJzLXNlY3Rpb25fX2l0ZW0tLW1haW4gLmJhbm5lcnMtc2VjdGlvbl9faXRlbS10aXRsZXtmb250LXNpemU6MjBweH0uYmFubmVycy1zZWN0aW9uX19pdGVtLXRpdGxle2ZvbnQtc2l6ZToyMHB4O2NvbG9yOiMzMzN9LmJhbm5lcnMtc2VjdGlvbl9faXRlbS1pY29ue3dpZHRoOjQwcHh9LmJhbm5lcnMtc2VjdGlvbl9faXRlbS1pY29uIHN2Z3t3aWR0aDoxMDAlfX0uYmVuZWZpdHMtc2VjdGlvbnttYXJnaW4tYm90dG9tOjUwcHh9LmJlbmVmaXRzLXNlY3Rpb25fX3Jvd3tkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7bWFyZ2luOjAgLTcuNXB4fS5iZW5lZml0cy1zZWN0aW9uX19jb2x7d2lkdGg6MjUlO3BhZGRpbmc6MCA3LjVweH0uYmVuZWZpdHMtc2VjdGlvbl9faXRlbXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfS5iZW5lZml0cy1zZWN0aW9uX19pdGVtLWljb257bWFyZ2luLXJpZ2h0OjE1cHh9LmJlbmVmaXRzLXNlY3Rpb25fX2l0ZW0tdGl0bGV7Zm9udC1zaXplOjE3cHg7bGluZS1oZWlnaHQ6MTMwJTtjb2xvcjojMzMzfS5iZW5lZml0cy1zZWN0aW9uX19pdGVtLXRpdGxlIGJ7ZGlzcGxheTpibG9ja31AbWVkaWEgKG1heC13aWR0aDogMTM2N3B4KXsuYmVuZWZpdHMtc2VjdGlvbl9fcm93e21hcmdpbjowIC03LjVweCAtMzVweH0uYmVuZWZpdHMtc2VjdGlvbl9fY29se3dpZHRoOjUwJX0uYmVuZWZpdHMtc2VjdGlvbl9faXRlbXttYXJnaW4tYm90dG9tOjM1cHh9fUBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7LmJlbmVmaXRzLXNlY3Rpb257bWFyZ2luLWJvdHRvbTo0MHB4fS5iZW5lZml0cy1zZWN0aW9uX19pdGVte2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt0ZXh0LWFsaWduOmNlbnRlcn0uYmVuZWZpdHMtc2VjdGlvbl9faXRlbS1pY29ue21hcmdpbi1yaWdodDowO21hcmdpbi1ib3R0b206MTBweH0uYmVuZWZpdHMtc2VjdGlvbl9faXRlbS10aXRsZXtmb250LXNpemU6MTVweH19LnByb2R1Y3RzLXNsaWRlciAuc2xpY2stbGlzdHttYXJnaW46MCAtMTcuNXB4fS5wcm9kdWN0cy1zbGlkZXIgLnNsaWNrLXNsaWRle3BhZGRpbmc6MCAxNy41cHh9LnByb2R1Y3RzLXNsaWRlcl9fYXJyLW5leHR7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0xMTNweDtyaWdodDoxNjBweDt3aWR0aDozNnB4O2hlaWdodDozNnB4O2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6I0VDRUNFQztkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjowLjNzO3otaW5kZXg6MX0ucHJvZHVjdHMtc2xpZGVyX19hcnItbmV4dCBzdmd7c3Ryb2tlOiM5OTl9LnByb2R1Y3RzLXNsaWRlcl9fYXJyLW5leHQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojRkZBODAwfS5wcm9kdWN0cy1zbGlkZXJfX2Fyci1uZXh0OmhvdmVyIHN2Z3tzdHJva2U6IzMzM30ucHJvZHVjdHMtc2xpZGVyX19hcnItcHJldntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTExM3B4O3JpZ2h0OjIwNnB4O3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHg7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDojRUNFQ0VDO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOjAuM3M7ei1pbmRleDoxfS5wcm9kdWN0cy1zbGlkZXJfX2Fyci1wcmV2IHN2Z3tzdHJva2U6Izk5OTt0cmFuc2l0aW9uOjAuM3N9LnByb2R1Y3RzLXNsaWRlcl9fYXJyLXByZXY6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojRkZBODAwfS5wcm9kdWN0cy1zbGlkZXJfX2Fyci1wcmV2OmhvdmVyIHN2Z3tzdHJva2U6IzMzM31AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXsucHJvZHVjdHMtc2xpZGVyX19hcnItcHJldnt0b3A6LTgwcHh9LnByb2R1Y3RzLXNsaWRlcl9fYXJyLW5leHR7dG9wOi04MHB4fX1AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpey5wcm9kdWN0cy1zbGlkZXJ7bWFyZ2luLWJvdHRvbTo3NnB4fS5wcm9kdWN0cy1zbGlkZXJfX2l0ZW0gLnByb2R1Y3QtY2FyZHt3aWR0aDoyNzBweH0ucHJvZHVjdHMtc2xpZGVyX19hcnItcHJldnt0b3A6Y2FsYygxMDAlICsgNDBweCk7cmlnaHQ6YXV0bztsZWZ0OmNhbGMoNTAlIC0gMzZweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9LnByb2R1Y3RzLXNsaWRlcl9fYXJyLW5leHR7dG9wOmNhbGMoMTAwJSArIDQwcHgpO3JpZ2h0OmF1dG87bGVmdDpjYWxjKDUwJSArIDM2cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfX1AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpey5wcm9kdWN0cy1zbGlkZXIgLnNsaWNrLWxpc3R7bWFyZ2luOjAgLTEwcHh9LnByb2R1Y3RzLXNsaWRlciAuc2xpY2stc2xpZGV7cGFkZGluZzowIDEwcHh9LnByb2R1Y3RzLXNsaWRlcl9faXRlbSAucHJvZHVjdC1jYXJke3dpZHRoOjE2MHB4fX0ucHJvZHVjdC1jYXJke2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmV9LnByb2R1Y3QtY2FyZF9faW1ne2hlaWdodDozODBweDttYXJnaW4tYm90dG9tOjIwcHg7ZGlzcGxheTpibG9ja30ucHJvZHVjdC1jYXJkX19pbWcgaW1ne2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvYmplY3QtZml0OmNvdmVyfS5wcm9kdWN0LWNhcmRfX3JhdGV7bWFyZ2luLWJvdHRvbToxMHB4fS5wcm9kdWN0LWNhcmRfX3RpdGxle2ZvbnQtc2l6ZToxNXB4O2xpbmUtaGVpZ2h0OjE1MCU7Y29sb3I6IzMzMzMzMztsZXR0ZXItc3BhY2luZzowLjFlbTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Zm9udC1mYW1pbHk6J011c2VvIFNhbnMgQ3lybCA5MDAnO2Rpc3BsYXk6YmxvY2s7bWFyZ2luLWJvdHRvbTo4cHh9LnByb2R1Y3QtY2FyZF9fZm9vdGVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59LnByb2R1Y3QtY2FyZF9fcHJpY2V7Zm9udC1zaXplOjI4cHg7bGluZS1oZWlnaHQ6MTcwJTtmb250LWZhbWlseTonT3N3YWxkJztjb2xvcjojMzMzO2ZvbnQtd2VpZ2h0OjUwMH0ucHJvZHVjdC1jYXJkX19wcmljZSBzcGFue2ZvbnQtc2l6ZToxNXB4O2xpbmUtaGVpZ2h0OjE3MCU7bGV0dGVyLXNwYWNpbmc6MC4wNWVtfS5wcm9kdWN0LWNhcmRfX2J1eS1idG57cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxfS5wcm9kdWN0LWNhcmQtLWhpdDphZnRlcntjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoyNnB4O2hlaWdodDo1OXB4O2JhY2tncm91bmQtaW1hZ2U6dXJsKC4uL3N0YXRpYy9pbWcvaGl0LWxhYmVsLnN2Zyk7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyfS5wcm9kdWN0LWNhcmQtLW5ldzphZnRlcntjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoyNnB4O2hlaWdodDoxMDBweDtiYWNrZ3JvdW5kLWltYWdlOnVybCguLi9zdGF0aWMvaW1nL25ldy1sYWJlbC5zdmcpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcn1AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpey5wcm9kdWN0LWNhcmRfX2ltZ3toZWlnaHQ6YXV0b30ucHJvZHVjdC1jYXJkX190aXRsZXtmb250LXNpemU6MTNweH0ucHJvZHVjdC1jYXJkX19wcmljZXtmb250LXNpemU6MjRweDttYXJnaW4tYm90dG9tOjEwcHh9LnByb2R1Y3QtY2FyZF9fZm9vdGVye2Rpc3BsYXk6YmxvY2t9LnByb2R1Y3QtY2FyZF9fZm9vdGVyIC5idG57d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcn19LmJsb2ctbGlzdHtmbGV4LXdyYXA6d3JhcDttYXJnaW46MCAtMTcuNXB4IC02MHB4O2Rpc3BsYXk6ZmxleH0uYmxvZy1saXN0X19pdGVte3BhZGRpbmc6MCAxNy41cHg7d2lkdGg6Y2FsYygxMDAlIC8gMyk7bWFyZ2luLWJvdHRvbTo2MHB4fUBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpey5ibG9nLWxpc3R7bWFyZ2luOjAgLTE1cHggLTUwcHh9LmJsb2ctbGlzdF9faXRlbXtwYWRkaW5nOjAgMTVweDttYXJnaW4tYm90dG9tOjUwcHh9fUBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7LmJsb2ctbGlzdHttYXJnaW4tYm90dG9tOjc2cHh9LmJsb2ctbGlzdF9faXRlbXttYXJnaW4tYm90dG9tOjB9LmJsb2ctbGlzdF9faXRlbSAuYmxvZy1jYXJke3dpZHRoOjI3MHB4fS5ibG9nLWxpc3RfX2Fyci1wcmV2e3RvcDpjYWxjKDEwMCUgKyA0MHB4KTtyaWdodDphdXRvO2xlZnQ6Y2FsYyg1MCUgLSAzNnB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX0uYmxvZy1saXN0X19hcnItbmV4dHt0b3A6Y2FsYygxMDAlICsgNDBweCk7cmlnaHQ6YXV0bztsZWZ0OmNhbGMoNTAlICsgMzZweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9fS5ibG9nLWNhcmR7ZGlzcGxheTpibG9ja30uYmxvZy1jYXJkX19pbWd7bWFyZ2luLWJvdHRvbToxNXB4fS5ibG9nLWNhcmRfX2ltZyBpbWd7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlfS5ibG9nLWNhcmRfX3RpdGxle2ZvbnQtc2l6ZToxN3B4O2xpbmUtaGVpZ2h0OjE0MCU7Y29sb3I6IzMzMzttYXJnaW4tYm90dG9tOjEwcHg7dHJhbnNpdGlvbjowLjNzO2ZvbnQtZmFtaWx5OidNdXNlbyBTYW5zIEN5cmwgNzAwJ30uYmxvZy1jYXJkX19mb290ZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcn0uYmxvZy1jYXJkX19wb3N0LWRhdGV7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MTcwJTtjb2xvcjojQUFBQUFBO2xldHRlci1zcGFjaW5nOjAuMWVtO21hcmdpbi1yaWdodDoyMHB4fS5ibG9nLWNhcmRfX3ZpZXdze2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjE3MCU7Y29sb3I6I0FBQUFBQTtsZXR0ZXItc3BhY2luZzowLjFlbTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfS5ibG9nLWNhcmRfX3ZpZXdzIHN2Z3tzdHJva2U6I0FBQUFBQTttYXJnaW4tcmlnaHQ6NnB4fS5ibG9nLWNhcmQ6aG92ZXIgLmJsb2ctY2FyZF9fdGl0bGV7Y29sb3I6I0ZGQTgwMH0uZGVsaXZlcnktc2VjdGlvbl9fYmxvY2t7bWFyZ2luLWJvdHRvbTo3MHB4fS5kZWxpdmVyeS1zZWN0aW9uX19ibG9jazpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206MH0uZGVsaXZlcnktc2VjdGlvbl9fYmxvY2sgaDIsLmRlbGl2ZXJ5LXNlY3Rpb25fX2Jsb2NrIGgzLC5kZWxpdmVyeS1zZWN0aW9uX19ibG9jayBoNHttYXJnaW4tYm90dG9tOjMwcHh9LmRlbGl2ZXJ5LXNlY3Rpb25fX2Jsb2NrIHB7bWFyZ2luLWJvdHRvbTozMHB4fS5kZWxpdmVyeS1zZWN0aW9uX19ibG9jayBwOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTowfS5kZWxpdmVyeS1zZWN0aW9uX19ibG9jayB1bHttYXJnaW4tYm90dG9tOjMwcHh9LmRlbGl2ZXJ5LXNlY3Rpb25fX2Jsb2NrIHVsOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTozMHB4fS5kZWxpdmVyeS1zZWN0aW9uX19ibG9jayB1bCBsaXtwYWRkaW5nLWxlZnQ6MjBweDtmb250LXNpemU6MTdweDtsaW5lLWhlaWdodDoxNzAlO3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbi1ib3R0b206NnB4O2NvbG9yOiMzMzMzMzN9LmRlbGl2ZXJ5LXNlY3Rpb25fX2Jsb2NrIHVsIGxpOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTowfS5kZWxpdmVyeS1zZWN0aW9uX19ibG9jayB1bCBsaTpiZWZvcmV7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTBweDtsZWZ0OjA7d2lkdGg6OHB4O2hlaWdodDo4cHg7YmFja2dyb3VuZC1jb2xvcjojRkZBODAwO2JvcmRlci1yYWRpdXM6NTAlfS5kZWxpdmVyeS1zZWN0aW9uX19ibG9jayBvbHttYXJnaW4tYm90dG9tOjMwcHg7Y291bnRlci1yZXNldDpteS1hd2Vzb21lLWNvdW50ZXJ9LmRlbGl2ZXJ5LXNlY3Rpb25fX2Jsb2NrIG9sOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTozMHB4fS5kZWxpdmVyeS1zZWN0aW9uX19ibG9jayBvbCBsaXtjb3VudGVyLWluY3JlbWVudDpteS1hd2Vzb21lLWNvdW50ZXI7cGFkZGluZy1sZWZ0OjIwcHg7Zm9udC1zaXplOjE3cHg7bGluZS1oZWlnaHQ6MTcwJTtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4tYm90dG9tOjZweDtjb2xvcjojMzMzMzMzfS5kZWxpdmVyeS1zZWN0aW9uX19ibG9jayBvbCBsaTpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206MH0uZGVsaXZlcnktc2VjdGlvbl9fYmxvY2sgb2wgbGk6YmVmb3Jle2NvbnRlbnQ6Y291bnRlcihteS1hd2Vzb21lLWNvdW50ZXIpO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtjb2xvcjojRkZBODAwfUBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpey5kZWxpdmVyeS1zZWN0aW9uX19ibG9jayBwLC5kZWxpdmVyeS1zZWN0aW9uX19ibG9jayB1bCwuZGVsaXZlcnktc2VjdGlvbl9fYmxvY2sgb2x7bWFyZ2luLWJvdHRvbToyMHB4fS5kZWxpdmVyeS1zZWN0aW9uX19ibG9jayB1bCBsaSwuZGVsaXZlcnktc2VjdGlvbl9fYmxvY2sgb2wgbGl7Zm9udC1zaXplOjE1cHh9fUBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpey5kZWxpdmVyeS1zZWN0aW9uX19ibG9ja3ttYXJnaW4tYm90dG9tOjQwcHh9fUBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7LmRlbGl2ZXJ5LXNlY3Rpb25fX2Jsb2Nre21hcmdpbi1ib3R0b206MjBweH0uZGVsaXZlcnktc2VjdGlvbl9fYmxvY2sgaDIsLmRlbGl2ZXJ5LXNlY3Rpb25fX2Jsb2NrIGgzLC5kZWxpdmVyeS1zZWN0aW9uX19ibG9jayBoNHttYXJnaW4tYm90dG9tOjEwcHh9LmRlbGl2ZXJ5LXNlY3Rpb25fX2Jsb2NrIHB7bWFyZ2luLWJvdHRvbToxMHB4fS5kZWxpdmVyeS1zZWN0aW9uX19ibG9jayB1bCwuZGVsaXZlcnktc2VjdGlvbl9fYmxvY2sgb2x7bWFyZ2luLWJvdHRvbToxMHB4fS5kZWxpdmVyeS1zZWN0aW9uX19ibG9jayB1bCBsaSwuZGVsaXZlcnktc2VjdGlvbl9fYmxvY2sgb2wgbGl7Zm9udC1zaXplOjE0cHh9fS5jYXRhbG9nLXNlY3Rpb25fX2xpc3R7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO21hcmdpbjowIC0xNy41cHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI0UxRENENTttYXJnaW4tYm90dG9tOjMwcHh9LmNhdGFsb2ctc2VjdGlvbl9fbGlzdC1pdGVte3dpZHRoOmNhbGMoMTAwJSAvIDQpO3BhZGRpbmc6MCAxNy41cHg7bWFyZ2luLWJvdHRvbToxMDBweH1AbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KXsuY2F0YWxvZy1zZWN0aW9uX19saXN0LWl0ZW17d2lkdGg6Y2FsYygxMDAlIC8gMyk7bWFyZ2luLWJvdHRvbTo3MHB4fX1AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpey5jYXRhbG9nLXNlY3Rpb25fX2xpc3R7bWFyZ2luLWxlZnQ6LTEwcHg7bWFyZ2luLXJpZ2h0Oi0xMHB4fS5jYXRhbG9nLXNlY3Rpb25fX2xpc3QtaXRlbXt3aWR0aDpjYWxjKDEwMCUgLyAyKTttYXJnaW4tYm90dG9tOjM1cHg7cGFkZGluZzowIDEwcHh9fS5wYWdlbmF2aXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnBhZ2VuYXZpX19pdGVte21hcmdpbjowIDZweH0ucGFnZW5hdmlfX2l0ZW0tYXJye2JhY2tncm91bmQtY29sb3I6I0VDRUNFQzt3aWR0aDozMHB4O2hlaWdodDozMHB4O2JvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt0cmFuc2l0aW9uOjAuM3N9LnBhZ2VuYXZpX19pdGVtLWFyciBzdmd7c3Ryb2tlOiM5OTk7dHJhbnNpdGlvbjowLjNzfS5wYWdlbmF2aV9faXRlbS1hcnI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMzMzfS5wYWdlbmF2aV9faXRlbS1hcnI6aG92ZXIgc3Zne3N0cm9rZTojZmZmfS5wYWdlbmF2aV9faXRlbS1saW5re3dpZHRoOjMwcHg7aGVpZ2h0OjMwcHg7Ym9yZGVyLXJhZGl1czo1MCU7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JvcmRlcjoxcHggc29saWQgI0UxRENENTtmb250LXNpemU6MTVweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bGV0dGVyLXNwYWNpbmc6MC4xZW07dHJhbnNpdGlvbjowLjNzO2NvbG9yOiM5OTk5OTl9LnBhZ2VuYXZpX19pdGVtLWxpbms6aG92ZXJ7Ym9yZGVyOjFweCBzb2xpZCAjMzMzO2JhY2tncm91bmQtY29sb3I6IzMzMztjb2xvcjojZmZmfS5wYWdlbmF2aV9faXRlbS1kb3Rze3dpZHRoOjMwcHg7aGVpZ2h0OjMwcHg7Ym9yZGVyLXJhZGl1czo1MCU7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZvbnQtc2l6ZToxNXB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzowLjFlbTt0cmFuc2l0aW9uOjAuM3M7Y29sb3I6Izk5OTk5OX0ucGFuZWx7bWF4LXdpZHRoOjQ3MHB4O3dpZHRoOjEwMCU7YmFja2dyb3VuZC1jb2xvcjojZmZmO3Bvc2l0aW9uOmZpeGVkO3RvcDowO3JpZ2h0Oi0xMDAlO3otaW5kZXg6MTA7aGVpZ2h0OjEwMCU7b3ZlcmZsb3cteTphdXRvO3BhZGRpbmc6MHB4IDUwcHggMjVweDtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2l0aW9uOjAuM3N9LnBhbmVsLmFjdGl2ZXtvcGFjaXR5OjE7cmlnaHQ6NjBweDtwb2ludGVyLWV2ZW50czphbGx9LnBhbmVsX19oZWFkZXJ7cG9zaXRpb246c3RpY2t5O3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2JhY2tncm91bmQtY29sb3I6I2ZmZjtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmctYm90dG9tOjI1cHg7cGFkZGluZy10b3A6MjVweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjRTFEQ0Q1O3otaW5kZXg6MjtjdXJzb3I6cG9pbnRlcn0ucGFuZWxfX2hlYWRlcjpob3ZlciAucGFuZWxfX2Nsb3NlLWJ0biBzdmd7ZmlsbDojMUMxQjFCfS5wYW5lbF9fdGl0bGV7Y29sb3I6Izk5OTk5OTtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoxN3B4fS5wYW5lbF9fY2xvc2UtYnRue21hcmdpbi1yaWdodDoxMHB4O2N1cnNvcjpwb2ludGVyO3dpZHRoOjE3cHg7aGVpZ2h0OjE3cHh9LnBhbmVsX19jbG9zZS1idG4gc3Zne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZmlsbDojRkZBODAwO3RyYW5zaXRpb246MC4zc30ucGFuZWxfX21lc3NhZ2V7bWFyZ2luLXRvcDozMHB4fS5wYW5lbF9fbWVzc2FnZS10aXRsZXtjb2xvcjojMzMzO2ZvbnQtc2l6ZToyOHB4O2xpbmUtaGVpZ2h0OjEyNSU7bWFyZ2luLWJvdHRvbToyMHB4O2ZvbnQtZmFtaWx5OidNdXNlbyBTYW5zIEN5cmwgNzAwJ30ucGFuZWxfX21lc3NhZ2UtdGV4dHtmb250LXNpemU6MTVweDtsaW5lLWhlaWdodDoxNTAlO2NvbG9yOiM1NTU7bWFyZ2luLWJvdHRvbTozMHB4fS5wYW5lbF9fbWVzc2FnZS1pY29ue21hcmdpbi1ib3R0b206MzBweDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ucGFuZWxfX21lc3NhZ2UtZm9vdGVye3RleHQtYWxpZ246Y2VudGVyfUBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpey5wYW5lbHt0b3A6NjBweDtoZWlnaHQ6Y2FsYygxMDAlIC0gNjBweCl9LnBhbmVsLmFjdGl2ZXtyaWdodDowfX1AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpey5wYW5lbHtwYWRkaW5nLWxlZnQ6MjBweDtwYWRkaW5nLXJpZ2h0OjIwcHh9fS5jYXJ0LWxpc3RfX2l0ZW17Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI0UxRENENTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmc6MjVweCAwfS5jYXJ0LWxpc3RfX2l0ZW0taW1ne3dpZHRoOjc2cHg7ZmxleC1zaHJpbms6MDttYXJnaW4tcmlnaHQ6MTBweH0uY2FydC1saXN0X19pdGVtLWltZyBpbWd7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlfS5jYXJ0LWxpc3RfX2l0ZW0tY29udGVudHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2ZsZXgtd3JhcDp3cmFwO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2ZsZXgtZ3JvdzoxfS5jYXJ0LWxpc3RfX2l0ZW0tdGl0bGV7Zm9udC1zaXplOjE1cHg7bGluZS1oZWlnaHQ6MThweDttYXJnaW4tYm90dG9tOjEwcHh9LmNhcnQtbGlzdF9faXRlbS1wcmljZXtmb250LXNpemU6MThweDtsaW5lLWhlaWdodDoyMnB4fS5jYXJ0LWxpc3RfX2l0ZW0tZGVsZXRlLWJ0bntjdXJzb3I6cG9pbnRlcjttYXJnaW4tbGVmdDoyMHB4O2ZsZXgtc2hyaW5rOjB9LmNhcnQtbGlzdF9faXRlbS1kZWxldGUtYnRuIHN2Z3tmaWxsOiNFMURDRDU7dHJhbnNpdGlvbjowLjNzfS5jYXJ0LWxpc3RfX2l0ZW0tZGVsZXRlLWJ0bjpob3ZlciBzdmd7ZmlsbDojMUMxQjFCfS5jYXJ0LWxpc3RfX2l0ZW0tYW1vdW50e3dpZHRoOjEyMHB4O2ZsZXgtc2hyaW5rOjA7Ym9yZGVyOjFweCBzb2xpZCAjRUNFQ0VDO2JvcmRlci1yYWRpdXM6MjVweDtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW59LmNhcnQtbGlzdF9faXRlbS1hbW91bnQtaW5wdXR7d2lkdGg6MTAwJTtoZWlnaHQ6MzVweDtsaW5lLWhlaWdodDozM3B4O2JvcmRlcjpub25lO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZToxNHB4O2NvbG9yOiMxQzFCMUI7ZGlzcGxheTpibG9jazstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LmNhcnQtbGlzdF9faXRlbS1hbW91bnQtaW5wdXQ6Zm9jdXN7b3V0bGluZTpub25lfS5jYXJ0LWxpc3RfX2l0ZW0tYW1vdW50LWlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLC5jYXJ0LWxpc3RfX2l0ZW0tYW1vdW50LWlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9ue2FwcGVhcmFuY2U6bm9uZTttYXJnaW46MH0uY2FydC1saXN0X19pdGVtLWFtb3VudC1idG4tc3Vie2JhY2tncm91bmQ6I0VDRUNFQztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MzVweDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyLXJhZGl1czoyNXB4IDAgMCAyNXB4O3otaW5kZXg6MTtoZWlnaHQ6MTAwJTtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOjAuM3N9LmNhcnQtbGlzdF9faXRlbS1hbW91bnQtYnRuLXN1YiBzdmd7c3Ryb2tlOiM5OTk7dHJhbnNpdGlvbjowLjNzfS5jYXJ0LWxpc3RfX2l0ZW0tYW1vdW50LWJ0bi1zdWI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMUMxQjFCfS5jYXJ0LWxpc3RfX2l0ZW0tYW1vdW50LWJ0bi1zdWI6aG92ZXIgc3Zne3N0cm9rZTojZmZmfS5jYXJ0LWxpc3RfX2l0ZW0tYW1vdW50LWJ0bi1hZGR7YmFja2dyb3VuZDojRUNFQ0VDO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7d2lkdGg6MzVweDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyLXJhZGl1czowcHggMjVweCAyNXB4IDBweDt6LWluZGV4OjE7aGVpZ2h0OjEwMCU7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjowLjNzfS5jYXJ0LWxpc3RfX2l0ZW0tYW1vdW50LWJ0bi1hZGQgc3Zne3N0cm9rZTojOTk5O3RyYW5zaXRpb246MC4zc30uY2FydC1saXN0X19pdGVtLWFtb3VudC1idG4tYWRkOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzFDMUIxQn0uY2FydC1saXN0X19pdGVtLWFtb3VudC1idG4tYWRkOmhvdmVyIHN2Z3tzdHJva2U6I2ZmZn0uY2FydC1mb290ZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtwYWRkaW5nLXRvcDoyNXB4fS5jYXJ0LXJlc3VsdHN7dGV4dC1hbGlnbjpyaWdodH0uY2FydC1yZXN1bHRzX190aXRsZXtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoxN3B4fS5jYXJ0LXJlc3VsdHNfX3ZhbHVle2ZvbnQtc2l6ZToyMHB4O2xpbmUtaGVpZ2h0OjI0cHg7Zm9udC1mYW1pbHk6J011c2VvIFNhbnMgQ3lybCA3MDAnfS5jYXJ0LXJlc3VsdHNfX3ZhbHVlIHNwYW57Zm9udC1mYW1pbHk6J011c2VvIFNhbnMgQ3lybCA1MDAnfS5jYXJ0LXJlc3VsdHMtLWlubGluZXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3dpZHRoOjEwMCV9QG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXsuY2FydC1saXN0X19pdGVtLWFtb3VudHttYXJnaW4tcmlnaHQ6MTBweH0uY2FydC1saXN0X19pdGVtLWRlbGV0ZS1idG57bWFyZ2luLWxlZnQ6NXB4fX0uc2VhcmNoLWZvcm17bWFyZ2luLXRvcDoyNXB4fS5zZWFyY2gtZm9ybSAuZm9ybV9fZmllbGQtaW5wdXR7cGFkZGluZy1yaWdodDo0MHB4fS5mb3JtX19maWVsZHtwb3NpdGlvbjpyZWxhdGl2ZX0uZm9ybV9fZmllbGQgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xle2JvcmRlcjpub25lO2hlaWdodDo2MHB4O2JhY2tncm91bmQ6I0Y3RjZGNDtib3JkZXItcmFkaXVzOjM1cHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXI6MXB4IHNvbGlkICNFMURDRDU7dHJhbnNpdGlvbjowLjNzfS5mb3JtX19maWVsZCAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGU6Zm9jdXN7b3V0bGluZTpub25lO2JvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwwLjIpfS5mb3JtX19maWVsZCAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGU6aG92ZXJ7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMil9LmZvcm1fX2ZpZWxkIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVke2hlaWdodDoxMDAlO2ZvbnQtc2l6ZToxNXB4O2xpbmUtaGVpZ2h0OjU4cHg7Y29sb3I6IzMzMztwYWRkaW5nLXJpZ2h0OjMwcHg7cGFkZGluZy1sZWZ0OjMwcHh9LmZvcm1fX2ZpZWxkIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkIC5zZWxlY3QyLXNlbGVjdGlvbl9fcGxhY2Vob2xkZXJ7Y29sb3I6Izk5OTk5OX0uZm9ybV9fZmllbGQgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3d7cmlnaHQ6MzBweDtib3JkZXItcmFkaXVzOjUwJTt0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3dpZHRoOjIycHg7aGVpZ2h0OjIycHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JhY2tncm91bmQtaW1hZ2U6dXJsKC4uL3N0YXRpYy9pbWcvY2hldnJvbi1kb3duLWdyZXkuc3ZnKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7YmFja2dyb3VuZC1zaXplOjE0cHggMTRweH0uZm9ybV9fZmllbGQgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3cgYntkaXNwbGF5Om5vbmV9LmZvcm1fX2ZpZWxkIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdC5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbiAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMil9LmZvcm1fX2ZpZWxkIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdC5zZWxlY3QyLWNvbnRhaW5lci0tb3Blbi5zZWxlY3QyLWNvbnRhaW5lci0tYmVsb3cgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGV7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NHB4fS5mb3JtX19maWVsZC1pbnB1dHtiYWNrZ3JvdW5kOiNGN0Y2RjQ7Ym9yZGVyOjFweCBzb2xpZCAjRTFEQ0Q1O2hlaWdodDo2MHB4O2xpbmUtaGVpZ2h0OjU4cHg7Ym9yZGVyLXJhZGl1czozNXB4O2ZvbnQtZmFtaWx5OidNdXNlbyBTYW5zIEN5cmwgNTAwJzt3aWR0aDoxMDAlO3BhZGRpbmc6MCAzMHB4O2NvbG9yOiMxQzFCMUI7Zm9udC1zaXplOjE1cHg7dHJhbnNpdGlvbjowLjNzfS5mb3JtX19maWVsZC1pbnB1dDo6cGxhY2Vob2xkZXJ7Y29sb3I6Izk5OTk5OTt0cmFuc2l0aW9uOjAuM3N9LmZvcm1fX2ZpZWxkLWlucHV0OmhvdmVye2JvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwwLjIpfS5mb3JtX19maWVsZC1pbnB1dDpmb2N1c3tvdXRsaW5lOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5mb3JtX19maWVsZC1pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXJ7Y29sb3I6IzFDMUIxQn0uZm9ybV9fZmllbGQtaW5wdXQ6Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sLmZvcm1fX2ZpZWxkLWlucHV0Ojotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLC5mb3JtX19maWVsZC1pbnB1dDo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sLmZvcm1fX2ZpZWxkLWlucHV0Ojotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9LmZvcm1fX2ZpZWxkLWljb257cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtyaWdodDoyNXB4fS5mb3JtX19maWVsZC1pY29uIHN2Z3tmaWxsOiM5OTk7dHJhbnNpdGlvbjowLjNzfS5mb3JtX19maWVsZC10ZXh0YXJlYXtoZWlnaHQ6MTIwcHg7cGFkZGluZzoyMHB4IDMwcHg7YmFja2dyb3VuZDojRjdGNkY0O2JvcmRlcjoxcHggc29saWQgI0UxRENENTtib3JkZXItcmFkaXVzOjM1cHg7Zm9udC1mYW1pbHk6J011c2VvIFNhbnMgQ3lybCA1MDAnO3dpZHRoOjEwMCU7Zm9udC1zaXplOjE1cHg7bGluZS1oZWlnaHQ6MThweDtyZXNpemU6bm9uZX0uZm9ybV9fZmllbGQtdGV4dGFyZWE6OnBsYWNlaG9sZGVye2NvbG9yOiM5OTk5OTk7dHJhbnNpdGlvbjowLjNzfS5mb3JtX19maWVsZC10ZXh0YXJlYTpob3Zlcntib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKX0uZm9ybV9fZmllbGQtdGV4dGFyZWE6Zm9jdXN7b3V0bGluZTpub25lO2JhY2tncm91bmQtY29sb3I6I2ZmZn0uZm9ybV9fZmllbGQtdGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVye2NvbG9yOiMxQzFCMUJ9LmZvcm1fX2ZpZWxkLXRleHRhcmVhOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLC5mb3JtX19maWVsZC10ZXh0YXJlYTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiwuZm9ybV9fZmllbGQtdGV4dGFyZWE6Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLC5mb3JtX19maWVsZC10ZXh0YXJlYTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lfS5vcmRlcntwb3NpdGlvbjpyZWxhdGl2ZX0ub3JkZXJfX3Jvd3tkaXNwbGF5OmZsZXg7bWFyZ2luOjAgLTE3LjVweDtwb3NpdGlvbjpyZWxhdGl2ZX0ub3JkZXJfX3Jvdzo6YWZ0ZXJ7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206LTEyMHB4O2xlZnQ6MDt3aWR0aDoxMDAlO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNFMURDRDV9Lm9yZGVyX19jb2x7cGFkZGluZzowIDE3LjVweH0ub3JkZXJfX2NvbDpmaXJzdC1jaGlsZHtmbGV4LWdyb3c6MX0ub3JkZXJfX2NvbDpsYXN0LWNoaWxke3dpZHRoOjQwMHB4O2ZsZXgtc2hyaW5rOjB9Lm9yZGVyX19ibG9ja3ttYXJnaW4tYm90dG9tOjcwcHh9Lm9yZGVyX19ibG9jazpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206MH0ub3JkZXJfX2Jsb2NrLWhlYWRlcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbi1ib3R0b206MjBweH0ub3JkZXJfX2Jsb2NrLW51bWJlcnt3aWR0aDo3NHB4O2hlaWdodDo2NXB4O2ZsZXgtc2hyaW5rOjA7YmFja2dyb3VuZC1pbWFnZTp1cmwoLi4vc3RhdGljL2ltZy9sYXVyZWwuc3ZnKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7YmFja2dyb3VuZC1zaXplOmNvbnRhaW47Zm9udC1zaXplOjI4cHg7bGluZS1oZWlnaHQ6MTI1JTtjb2xvcjojNDQ0O2ZvbnQtZmFtaWx5OidNdXNlbyBTYW5zIEN5cmwgNzAwJzt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nLXRvcDo4cHg7bWFyZ2luLXJpZ2h0OjIwcHh9Lm9yZGVyX19ibG9jay1jb250ZW50e2ZsZXgtZ3JvdzoxfS5vcmRlcl9fYmxvY2stdGl0bGV7Zm9udC1zaXplOjI4cHg7bGluZS1oZWlnaHQ6MTI1JTtmb250LWZhbWlseTonTXVzZW8gU2FucyBDeXJsIDcwMCc7Y29sb3I6IzMzM30ub3JkZXJfX2Jsb2NrLXRleHR7Zm9udC1zaXplOjE1cHg7bGluZS1oZWlnaHQ6MTI1JTtjb2xvcjojOTk5OTk5fS5vcmRlcl9fYmxvY2stcm93e2Rpc3BsYXk6ZmxleDttYXJnaW46MCAtNy41cHggLTE1cHg7ZmxleC13cmFwOndyYXB9Lm9yZGVyX19ibG9jay1jb2wtNTB7cGFkZGluZzowIDcuNXB4O3dpZHRoOjUwJTttYXJnaW4tYm90dG9tOjE1cHh9Lm9yZGVyX19ibG9jay1jb2wtMTAwe3BhZGRpbmc6MCA3LjVweDt3aWR0aDoxMDAlO21hcmdpbi1ib3R0b206MTVweH0ub3JkZXJfX2luZm8tYmxvY2t7cGFkZGluZy1ib3R0b206MjVweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjRTFEQ0Q1fS5vcmRlcl9faW5mby1ibG9jay10aXRsZXtmb250LXNpemU6MTVweDtsaW5lLWhlaWdodDoxOHB4O2NvbG9yOiNGRkE4MDA7bWFyZ2luLWJvdHRvbToxMHB4fS5vcmRlcl9faW5mby1ibG9jay1saXN0e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7ZmxleC13cmFwOndyYXB9Lm9yZGVyX19pbmZvLWJsb2NrLWxpc3QtaXRlbXttYXJnaW4tcmlnaHQ6MjBweH0ub3JkZXJfX2luZm8tYmxvY2stbGlzdC1pdGVtOmxhc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjB9Lm9yZGVyX19pbmZvLWJsb2NrLWxpc3QtbGlua3tmb250LXNpemU6MTdweDtsaW5lLWhlaWdodDoyMHB4O2ZvbnQtZmFtaWx5OidNdXNlbyBTYW5zIEN5cmwgNzAwJzt0cmFuc2l0aW9uOjAuM3M7d2hpdGUtc3BhY2U6bm93cmFwfS5vcmRlcl9faW5mby1ibG9jay1saXN0LWxpbmsgc3Zne21hcmdpbi1yaWdodDo2cHg7ZmlsbDojMzMzO3RyYW5zaXRpb246MC4zc30ub3JkZXJfX2luZm8tYmxvY2stbGlzdC1saW5rOmhvdmVye2NvbG9yOiNGRkE4MDB9Lm9yZGVyX19pbmZvLWJsb2NrLWxpc3QtbGluazpob3ZlciBzdmd7ZmlsbDojRkZBODAwfUBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpey5vcmRlcl9fcm93e2Rpc3BsYXk6YmxvY2t9Lm9yZGVyX19jb2w6bGFzdC1jaGlsZHt3aWR0aDoxMDAlfX1AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXsub3JkZXJfX3Jvdzo6YWZ0ZXJ7Ym90dG9tOi0xMDBweH0ub3JkZXJfX2Jsb2Nre21hcmdpbi1ib3R0b206NDBweH0ub3JkZXJfX2Jsb2NrLXRpdGxle2ZvbnQtc2l6ZToyMHB4fS5vcmRlcl9fYmxvY2stbnVtYmVye3dpZHRoOjY0cHg7aGVpZ2h0OjU1cHg7Zm9udC1zaXplOjIycHh9fUBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7Lm9yZGVyX19yb3c6OmFmdGVye2Rpc3BsYXk6bm9uZX19QG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXsub3JkZXJfX2Jsb2NrOmxhc3QtY2hpbGQgLm9yZGVyX19ibG9jay1oZWFkZXJ7ZmxleC13cmFwOndyYXB9Lm9yZGVyX19ibG9jazpsYXN0LWNoaWxkIC5vcmRlcl9fYmxvY2staGVhZGVyIC5idG57d2lkdGg6MTAwJTttYXJnaW4tdG9wOjIwcHg7dGV4dC1hbGlnbjpjZW50ZXJ9Lm9yZGVyX19ibG9jay1oZWFkZXJ7bWFyZ2luLWJvdHRvbToxNXB4fS5vcmRlcl9fYmxvY2stY29sLTUwe3dpZHRoOjEwMCV9Lm9yZGVyX19ibG9jay10ZXh0e2ZvbnQtc2l6ZToxM3B4O21hcmdpbi10b3A6NXB4fS5vcmRlcl9faW5mby1ibG9jay1saXN0LWl0ZW17bWFyZ2luLXJpZ2h0OjE1cHh9Lm9yZGVyX19pbmZvLWJsb2NrLWxpc3QtbGlua3tmb250LXNpemU6MTZweH19LnNvcnR7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7ZmxleC13cmFwOndyYXB9LnNvcnRfX2Jsb2Nre2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luLXJpZ2h0OjIwcHh9LnNvcnRfX2Jsb2NrLXRpdGxle2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjIwcHg7bWFyZ2luLXJpZ2h0OjAuMjVyZW07d2hpdGUtc3BhY2U6bm93cmFwfS5zb3J0IC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZXtib3JkZXI6bm9uZTtoZWlnaHQ6MjBweDtib3JkZXItcmFkaXVzOjBweDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3RyYW5zaXRpb246MC4zc30uc29ydCAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGU6Zm9jdXN7b3V0bGluZTpub25lfS5zb3J0IC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVke2hlaWdodDoxMDAlO2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjIwcHg7Y29sb3I6IzMzMztwYWRkaW5nOjAgMTJweCAwIDA7cG9zaXRpb246cmVsYXRpdmV9LnNvcnQgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQ6OmFmdGVye2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7bGVmdDowO3dpZHRoOmNhbGMoMTAwJSAtIDEycHgpO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMzMzN9LnNvcnQgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQgLnNlbGVjdDItc2VsZWN0aW9uX19wbGFjZWhvbGRlcntjb2xvcjojOTk5OTk5fS5zb3J0IC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93e3JpZ2h0OjBweDtib3JkZXItcmFkaXVzOjUwJTt0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3dpZHRoOjhweDtoZWlnaHQ6OHB4O2JhY2tncm91bmQtaW1hZ2U6dXJsKC4uL3N0YXRpYy9pbWcvY2hldnJvbi1kb3duLWdyZXktYmlnLnN2Zyk7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2JhY2tncm91bmQtc2l6ZTpjb250YWlufS5zb3J0IC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93IGJ7ZGlzcGxheTpub25lfS5zb3J0IC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdC5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbiAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnNvcnQgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0LnNlbGVjdDItY29udGFpbmVyLS1vcGVuLnNlbGVjdDItY29udGFpbmVyLS1iZWxvdyAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZXtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjBweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowcHh9LmZpbHRlci1idG57d2lkdGg6MTMwcHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZvbnQtc2l6ZToxMXB4O2xpbmUtaGVpZ2h0OjE3MCU7Y29sb3I6I2ZmZjt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Zm9udC1mYW1pbHk6J011c2VvIFNhbnMgQ3lybCA3MDAnO3BhZGRpbmc6MCAyMHB4O2hlaWdodDo0MHB4O2JvcmRlci1yYWRpdXM6MzVweDtiYWNrZ3JvdW5kLWNvbG9yOiMzMzM7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjowLjNzO3Bvc2l0aW9uOnJlbGF0aXZlfS5maWx0ZXItYnRuIHN2Z3tmaWxsOiNmZmY7bWFyZ2luLXJpZ2h0OjVweDt0cmFuc2l0aW9uOjAuM3N9LmZpbHRlci1idG4gc3Bhbntwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kLWNvbG9yOiNGRkE4MDA7d2lkdGg6MThweDtoZWlnaHQ6MThweDt0b3A6LTNweDtyaWdodDotNnB4O2JvcmRlci1yYWRpdXM6NTAlO2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiMzMzM7dGV4dC1hbGlnbjpjZW50ZXJ9LmZpbHRlci1idG46aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojRkZBODAwO3RyYW5zaXRpb246MC4zc30uZmlsdGVyLWJ0bjpob3ZlciBzdmd7ZmlsbDojZmZmfS5zb3J0LXJlc3VsdHN7Ym9yZGVyOm5vbmU7cGFkZGluZy10b3A6NXB4fS5zb3J0LXJlc3VsdHMgLnNlbGVjdDItcmVzdWx0c3tiYWNrZ3JvdW5kOiNGRkZGRkY7Ym94LXNoYWRvdzowcHggNHB4IDVweCByZ2JhKDAsMCwwLDAuMTUpO2JvcmRlci1yYWRpdXM6NHB4fS5zb3J0LXJlc3VsdHMgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0taGlnaGxpZ2h0ZWQuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLXNlbGVjdGFibGV7YmFja2dyb3VuZC1jb2xvcjojZmZmICFpbXBvcnRhbnR9LnNvcnQtcmVzdWx0cyAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1oaWdobGlnaHRlZC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0tc2VsZWN0YWJsZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmYgIWltcG9ydGFudDtjb2xvcjojRkZBODAwfS5zb3J0LXJlc3VsdHMgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9ue2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjE3cHg7cGFkZGluZzoxMnB4IDE1cHg7cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjpjb2xvciAwLjNzfS5zb3J0LXJlc3VsdHMgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uOjphZnRlcntjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO2xlZnQ6MTVweDt3aWR0aDpjYWxjKDEwMCUgLSAzMHB4KTtib3JkZXI6MXB4IHNvbGlkICNFMURDRDV9LnNvcnQtcmVzdWx0cyAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb246bGFzdC1jaGlsZDo6YWZ0ZXJ7ZGlzcGxheTpub25lfS5zb3J0LXJlc3VsdHMgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1zZWxlY3RhYmxle2JhY2tncm91bmQtY29sb3I6I2ZmZiAhaW1wb3J0YW50O2NvbG9yOiMzMzN9LnNvcnQtcmVzdWx0cyAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24uc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLXNlbGVjdGVke2NvbG9yOiNGRkE4MDB9LnNvcnQtcmVzdWx0cyAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb246aG92ZXJ7Y29sb3I6I0ZGQTgwMH1cbiAgICAgICBcbiAgICAgICBcbiAgICAgICAvKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5idW5kbGUuY3NzLm1hcCovXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=D:\\\\legero-ssr\\\\app\\\\pages\\\\delivery.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true);
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });